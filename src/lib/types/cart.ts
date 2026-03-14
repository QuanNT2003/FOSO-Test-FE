export interface CartItemVariant {
  id: string;
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
  sectionId?: string;
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
  removeVariant: (itemId: string, variantId: string) => void;
  updateVariantQuantity: (itemId: string, variantId: string, delta: number) => void;
  totalPrice: number;
  itemCount: number;
}
