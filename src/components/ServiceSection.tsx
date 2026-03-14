import { ServiceItem } from "./ServiceItem";
import type { SectionData } from "@/lib/types/service";

interface ServiceSectionProps {
  section: SectionData;
  isReversed: boolean;
}

export function ServiceSection({ section, isReversed }: ServiceSectionProps) {
  return (
    <div
      id={section.id}
      className={`flex flex-col md:flex-row items-stretch gap-[96px] pt-[48px] ${isReversed ? "md:flex-row-reverse" : ""}`}
    >
      {/* Image Column */}
      <div className="w-full md:w-1/2 overflow-hidden rounded-sm shadow-2xl relative group min-h-[400px]">
        <img
          src={section.image}
          alt={section.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>

      {/* Content Column */}
      <div className="w-full md:w-1/2 flex flex-col gap-10">
        <h3 className="text-[64px] font-serif text-[#E1C084] font-light tracking-wide">
          {section.title}
        </h3>
        <div className="flex flex-col gap-6">
          {section.items.map((item, idx) => (
            <ServiceItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
