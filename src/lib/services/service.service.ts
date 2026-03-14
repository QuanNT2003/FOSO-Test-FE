import { fakeFetch } from "./api";
import type { SectionData } from "@/lib/types/service";
import comboImg from "@/assets/images/image_combo.jpg";
import medicureImg from "@/assets/images/image_medicure.png";
import pedicureImg from "@/assets/images/image_pedicure.png";
import effectImg from "@/assets/images/image_filter.png";
import drinksImg from "@/assets/images/image_drink.jpg";

const standardItems = Array(4).fill({
  name: "Perfectly Polished",
  description: "Làm môi màu sắc (Mani hoặc Pedi)...",
  price: "390",
});

const drinkItems = [
  { name: "Latte", price: "50" },
  { name: "Espresso", price: "50" },
  { name: "Americano", price: "50" },
  { name: "Cappuccino", price: "50" },
  { name: "Milkshake", price: "50" },
  { name: "Juice", price: "50" },
];

export const ServiceService = {
  async getCategories() {
    return fakeFetch([
      { label: "GÓI COMBO", href: "#combo" },
      { label: "MEDICURE", href: "#medicure" },
      { label: "PEDICURE", href: "#pedicure" },
      { label: "HIỆU ỨNG", href: "#effect" },
    ]);
  },

  async getServiceSections(): Promise<SectionData[]> {
    return fakeFetch([
      {
        id: "combo",
        title: "Gói Combo",
        image: comboImg,
        items: standardItems,
      },
      {
        id: "medicure",
        title: "Medicure",
        image: medicureImg,
        items: standardItems,
      },
      {
        id: "pedicure",
        title: "Pedicure",
        image: pedicureImg,
        items: standardItems,
      },
      {
        id: "effect",
        title: "Hiệu Ứng",
        image: effectImg,
        items: standardItems,
      },
      {
        id: "drinks",
        title: "Drinks",
        image: drinksImg,
        items: drinkItems,
      },
    ]);
  },
};
