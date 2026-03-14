import { ServiceItem } from "./ServiceItem";
import type { ServiceSectionProps } from "@/lib/types/service";
import { useTranslation } from "react-i18next";

export function ServiceSection({ section, isReversed }: ServiceSectionProps) {
  const { t } = useTranslation();
  return (
    <div
      id={section.id}
      className={`flex flex-col md:flex-row items-stretch gap-[96px] pt-[48px] ${isReversed ? "md:flex-row-reverse" : ""}`}
    >
      {/* Image Column */}
      <div className="w-full md:w-1/2 md:relative overflow-hidden rounded-sm shadow-2xl group min-h-[300px] md:min-h-0">
        <div className="md:absolute md:inset-0 w-full h-full">
          <img
            src={section.image}
            alt={section.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>
      </div>

      {/* Content Column */}
      <div className="w-full md:w-1/2 flex flex-col gap-10">
        <h3 className="text-[64px] font-serif text-[#E1C084] font-light tracking-wide">
          {t(`sections.${section.id}`, { defaultValue: section.title })}
        </h3>
        <div className="flex flex-col gap-6">
          {section.items.map((item, idx) => (
            <ServiceItem
              key={idx}
              {...item}
              image={section.image}
              sectionId={item.sectionId ?? section.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
