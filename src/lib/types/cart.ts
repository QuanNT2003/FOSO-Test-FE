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

export interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}
