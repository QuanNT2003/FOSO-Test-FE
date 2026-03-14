import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import type { CartItem, CartContextType } from "@/lib/types/cart";
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
      if (exists) {
        // For services, we might not want to stack quantity unless specified, 
        // but let's keep it simple and just add it if it doesn't exist or just append.
        // Given the CartItem type doesn't have quantity itself (variants do), 
        // we'll just add it.
        return [...prev, { ...item, id: `${item.id}-${Date.now()}` }];
      }
      return [...prev, item];
    });
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = useMemo(() => 
    cartItems.reduce((sum, item) => sum + item.price, 0),
    [cartItems]
  );

  const itemCount = cartItems.length;

  const value = useMemo(() => ({
    cartItems,
    isLoading,
    addItem,
    removeItem,
    totalPrice,
    itemCount,
  }), [cartItems, isLoading, totalPrice, itemCount]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
