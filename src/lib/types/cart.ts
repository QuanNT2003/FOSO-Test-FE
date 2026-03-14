export interface CartItemVariant {
  image: string;
  name: string;
  quantity: number;
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
  removeItem: (id: string) => void;
  totalPrice: number;
  itemCount: number;
}
