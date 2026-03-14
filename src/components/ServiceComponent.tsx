import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import bgService from "@/assets/images/bg-service.png";
import { ServiceSection } from "./ServiceSection";
import type { SectionData } from "@/lib/types/service";
import { ServiceService } from "@/lib/services/service.service";
import { useTranslation } from "react-i18next";

export function ServiceComponent() {
  const { t } = useTranslation();
  const [categories, setCategories] = useState<
    { label: string; href: string }[]
  >([]);
  const [serviceSections, setServiceSections] = useState<SectionData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cats, sections] = await Promise.all([
          ServiceService.getCategories(),
          ServiceService.getServiceSections(),
        ]);
        setCategories(cats);
        setServiceSections(sections);
        console.log(sections);
      } catch (error) {
        console.error("Failed to fetch service data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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

  return (
    <section className="relative w-full">
      {/* Floating Title */}
      <div className="absolute top-[-60px] left-0 w-full z-30 pointer-events-none">
        <div className="text-center">
          <h2 className="text-7xl md:text-[120px] font-serif text-white/95 tracking-tight font-light drop-shadow-lg">
            {t("nav.services")}
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
                      {/* Check if we have a section translation key */}
                      {t(`sections.${cat.href.replace("#", "")}`, { defaultValue: cat.label })}
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
                    placeholder={t("nav.news")} // Or a specific search key if added
                    className="w-full bg-transparent text-white placeholder:text-white/50 focus:outline-none text-[13px] font-light tracking-wide"
                  />
                  <Search className="h-4 w-4 text-white/60 group-focus-within:text-white transition-colors" />
                </div>
              </div>
            </div>

            {/* Service Sections */}
            <div className="flex flex-col gap-16">
              {isLoading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="w-12 h-12 border-4 border-white/20 border-t-[#E1C084] rounded-full animate-spin"></div>
                </div>
              ) : (
                serviceSections.map((section, idx) => (
                  <ServiceSection
                    key={section.id}
                    section={section}
                    isReversed={idx % 2 !== 0}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
