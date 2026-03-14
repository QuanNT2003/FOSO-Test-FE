import { fakeFetch } from "./api";
import type { CartItem } from "@/lib/types/cart";

export const CartService = {
  async getCartItems(): Promise<CartItem[]> {
    return fakeFetch([
      {
        id: "1",
        name: "Sơn gel",
        price: 264000,
        image:
          "https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=200&auto=format&fit=crop",
        duration: "10 phút",
        variants: [
          {
            image:
              "https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=200&auto=format&fit=crop",
            name: "Da beo",
            quantity: 1,
          },
          {
            image:
              "https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=200&auto=format&fit=crop",
            name: "Da beo",
            quantity: 2,
          },
        ],
      },
      {
        id: "2",
        name: "Mắt mèo",
        price: 88000,
        image:
          "https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=200&auto=format&fit=crop",
      },
      {
        id: "3",
        name: "Sơn nhũ",
        price: 88000,
        image:
          "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=200&auto=format&fit=crop",
        duration: "10 phút",
      },
      {
        id: "4",
        name: "Sơn gel",
        price: 88000,
        image:
          "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=200&auto=format&fit=crop",
        duration: "10 phút",
      },
    ]);
  },
};
