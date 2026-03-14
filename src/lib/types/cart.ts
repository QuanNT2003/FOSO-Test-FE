export interface CartItemVariant {
  id: string; // Added to uniquely identify variant if needed
  image: string;
  name: string;
  quantity: number;
  price: number;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  duration?: string;
  variants?: CartItemVariant[];
}

export interface CartItemProps {
  item: CartItem;
  onRemove: (id: string) => void;
}

export interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface CartContextType {
  cartItems: CartItem[];
  isLoading: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  addVariant: (itemId: string, variant: CartItemVariant) => void;
  updateVariantQuantity: (itemId: string, variantId: string, delta: number) => void;
  totalPrice: number;
  itemCount: number;
}
