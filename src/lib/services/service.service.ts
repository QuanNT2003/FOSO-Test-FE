import { fakeFetch } from "./api";
import type { SectionData } from "@/lib/types/service";
import comboImg from "@/assets/images/image_combo.jpg";
import medicureImg from "@/assets/images/image_medicure.png";
import pedicureImg from "@/assets/images/image_pedicure.png";
import effectImg from "@/assets/images/image_filter.png";
import drinksImg from "@/assets/images/image_drink.jpg";

const makeStandardItems = (sectionId: string) =>
  Array(4)
    .fill(null)
    .map((_, idx) => ({
      id: `${sectionId}-item-${idx + 1}`,
      name: "Perfectly Polished",
      description: "Làm môi màu sắc (Mani hoặc Pedi)...",
      price: "390",
      sectionId,
    }));

const makeDrinkItems = (sectionId: string) =>
  [
    { name: "Latte", price: "50" },
    { name: "Espresso", price: "50" },
    { name: "Americano", price: "50" },
    { name: "Cappuccino", price: "50" },
    { name: "Milkshake", price: "50" },
    { name: "Juice", price: "50" },
  ].map((item, idx) => ({ id: `${sectionId}-item-${idx + 1}`, ...item, sectionId }));

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
        items: makeStandardItems("combo"),
      },
      {
        id: "medicure",
        title: "Medicure",
        image: medicureImg,
        items: makeStandardItems("medicure"),
      },
      {
        id: "pedicure",
        title: "Pedicure",
        image: pedicureImg,
        items: makeStandardItems("pedicure"),
      },
      {
        id: "effect",
        title: "Hiệu Ứng",
        image: effectImg,
        items: makeStandardItems("effect"),
      },
      {
        id: "drinks",
        title: "Drinks",
        image: drinksImg,
        items: makeDrinkItems("drinks"),
      },
    ]);
  },
};
