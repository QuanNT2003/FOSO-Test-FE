import { Search } from "lucide-react";
import bgService from "@/assets/images/bg-service.png";
import comboImg from "@/assets/images/image_combo.jpg";
import medicureImg from "@/assets/images/image_medicure.png";
import pedicureImg from "@/assets/images/image_pedicure.png";
import effectImg from "@/assets/images/image_filter.png";
import drinksImg from "@/assets/images/image_drink.jpg";
import { ServiceSection } from "./ServiceSection";
import type { SectionData } from "@/lib/types/service";

export function ServiceComponent() {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const categories = [
    { label: "GÓI COMBO", href: "#combo" },
    { label: "MEDICURE", href: "#medicure" },
    { label: "PEDICURE", href: "#pedicure" },
    { label: "HIỆU ỨNG", href: "#effect" },
  ];

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

  const serviceSections: SectionData[] = [
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
  ];

  return (
    <section className="relative w-full">
      {/* Floating Title */}
      <div className="absolute top-[-60px] left-0 w-full z-30 pointer-events-none">
        <div className="text-center">
          <h2 className="text-7xl md:text-[120px] font-serif text-white/95 tracking-tight font-light drop-shadow-lg">
            Dịch Vụ
          </h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden min-h-screen">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgService}
            alt="Service Background"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#a47928cb] stop-20% via-[#614F38] to-[#291E0A]"></div>
          <div className="absolute inset-x-0 top-0 h-[20px] bg-[#523C14] z-10"></div>
          <div className="absolute inset-x-0 top-[20px] h-[100px] bg-linear-to-b from-[#523C14] to-transparent z-10"></div>
          <div className="absolute inset-x-0 top-0 h-[30%] bg-linear-to-b from-[rgba(164,120,40,0.15)] to-transparent"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-20 w-full pt-[100px] pb-24 px-[96px]">
          <div className="max-w-screen-2xl mx-auto">
            {/* Toolbar: Categories & Search */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
              <nav className="flex flex-wrap items-center gap-6">
                {categories.map((cat, idx) => (
                  <div key={cat.label} className="flex items-center gap-6">
                    <a
                      href={cat.href}
                      onClick={(e) => scrollToSection(e, cat.href)}
                      className={`text-[11px] md:text-[12px] uppercase tracking-[0.25em] font-bold transition-colors ${
                        idx === 0
                          ? "text-[#E1C084]"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {cat.label}
                    </a>
                    {idx < categories.length - 1 && (
                      <span className="text-white/40 text-[14px] font-light">
                        |
                      </span>
                    )}
                  </div>
                ))}
              </nav>

              <div className="relative w-full md:w-[280px]">
                <div className="flex items-center border-b border-white/20 pb-1.5 px-0.5 group focus-within:border-white/50 transition-colors">
                  <input
                    type="text"
                    placeholder="Tìm kiếm"
                    className="w-full bg-transparent text-white placeholder:text-white/50 focus:outline-none text-[13px] font-light tracking-wide"
                  />
                  <Search className="h-4 w-4 text-white/60 group-focus-within:text-white transition-colors" />
                </div>
              </div>
            </div>

            {/* Service Sections */}
            <div className="flex flex-col gap-16">
              {serviceSections.map((section, idx) => (
                <ServiceSection
                  key={section.id}
                  section={section}
                  isReversed={idx % 2 !== 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
