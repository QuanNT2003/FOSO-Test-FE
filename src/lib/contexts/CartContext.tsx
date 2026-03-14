import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import type { CartItem, CartItemVariant, CartContextType } from "@/lib/types/cart";
import { CartService } from "@/lib/services/cart.service";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const items = await CartService.getCartItems();
        setCartItems(items);
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCart();
  }, []);

  const addItem = (item: CartItem) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) return prev; // already in cart, do nothing
      return [...prev, item];
    });
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addVariant = (itemId: string, variant: CartItemVariant) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id !== itemId) return item;
        const existing = item.variants?.find((v) => v.id === variant.id);
        if (existing) {
          return {
            ...item,
            variants: item.variants!.map((v) =>
              v.id === variant.id ? { ...v, quantity: v.quantity + 1 } : v
            ),
          };
        }
        return {
          ...item,
          variants: [...(item.variants ?? []), { ...variant, quantity: 1 }],
        };
      })
    );
  };

  const removeVariant = (itemId: string, variantId: string) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id !== itemId) return item;
        return {
          ...item,
          variants: item.variants?.filter((v) => v.id !== variantId),
        };
      })
    );
  };

  const updateVariantQuantity = (itemId: string, variantId: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id !== itemId) return item;
        return {
          ...item,
          variants: item.variants
            ?.map((v) =>
              v.id === variantId
                ? { ...v, quantity: Math.max(0, v.quantity + delta) }
                : v
            )
            .filter((v) => v.quantity > 0),
        };
      })
    );
  };

  const totalPrice = useMemo(
    () =>
      cartItems.reduce((sum, item) => {
        const variantTotal = (item.variants ?? []).reduce(
          (vs, v) => vs + v.price * v.quantity,
          0
        );
        return sum + item.price + variantTotal;
      }, 0),
    [cartItems]
  );

  const itemCount = cartItems.length;

  const value = useMemo(
    () => ({
      cartItems,
      isLoading,
      addItem,
      removeItem,
      addVariant,
      removeVariant,
      updateVariantQuantity,
      totalPrice,
      itemCount,
    }),
    [cartItems, isLoading, totalPrice, itemCount]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
