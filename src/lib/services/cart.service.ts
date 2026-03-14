import { fakeFetch } from "./api";
import type { CartItem } from "@/lib/types/cart";
import comboImg from "@/assets/images/image_combo.jpg";
import medicureImg from "@/assets/images/image_medicure.png";
import effectImg from "@/assets/images/image_filter.png";
import drinksImg from "@/assets/images/image_drink.jpg";

export const CartService = {
  async getCartItems(): Promise<CartItem[]> {
    return fakeFetch([
      {
        id: "combo-item-1",
        name: "Perfectly Polished",
        price: 390000,
        image: comboImg,
        sectionId: "combo",
        variants: [
          {
            id: "effect-effect-item-1",
            name: "Perfectly Polished",
            image: effectImg,
            quantity: 2,
            price: 390000,
          },
        ],
      },
      {
        id: "medicure-item-1",
        name: "Perfectly Polished",
        price: 390000,
        image: medicureImg,
        sectionId: "medicure",
      },
      {
        id: "drinks-item-1",
        name: "Latte",
        price: 50000,
        image: drinksImg,
        sectionId: "drinks",
      },
    ]);
  },
};
