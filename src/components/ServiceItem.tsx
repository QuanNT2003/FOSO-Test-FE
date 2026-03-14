import { Plus } from "lucide-react";

import type { ServiceData } from "@/lib/types/service";

export function ServiceItem({ name, description, price }: ServiceData) {
  return (
    <div className=" w-full group cursor-pointer border-b border-white/10 hover:border-white/30 transition-colors">
      <div className="flex flex-col gap-1">
        <h4 className="text-[24px] font-semibold text-white tracking-wide">
          {name}
        </h4>
        {description && (
          <p className="text-[18px] text-[#B4AA9B] font-light italic">
            {description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-[24px] font-medium text-[#DAD7CD]">
              {price}
              <span className="text-[16px] font-medium text-[#DAD7CD]">k</span>
            </span>
          </div>
          <div className="w-8 h-8 group-hover:rounded-full border-white/20 flex items-center justify-center group-hover:bg-[#E1C084] group-hover:border-[#E1C084] transition-all">
            <Plus className="w-4 h-4 text-white group-hover:text-black transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
}
