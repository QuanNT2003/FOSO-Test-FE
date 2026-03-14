import { useState } from "react";
import { Plus } from "lucide-react";
import { useCart } from "@/lib/contexts/CartContext";
import type { ServiceData } from "@/lib/types/service";
import { EffectTargetModal } from "./EffectTargetModal";

interface ServiceItemProps extends ServiceData {
  image: string;
}

export function ServiceItem({
  id,
  name,
  description,
  price,
  image,
  sectionId,
}: ServiceItemProps) {
  const { addItem } = useCart();
  const [showEffectModal, setShowEffectModal] = useState(false);

  const isEffect = sectionId === "effect";

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isEffect) {
      setShowEffectModal(true);
    } else {
      addItem({
        id,
        name,
        price: parseInt(price) * 1000,
        image,
        sectionId,
      });
    }
  };

  return (
    <>
      <div className="w-full group cursor-pointer border-b border-white/10 hover:border-white/30 transition-colors">
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
                <span className="text-[16px] font-medium text-[#DAD7CD]">
                  k
                </span>
              </span>
            </div>
            <div
              onClick={handleAdd}
              className="w-8 h-8 group-hover:rounded-full border-white/20 flex items-center justify-center group-hover:bg-[#E1C084] group-hover:border-[#E1C084] transition-all"
            >
              <Plus className="w-4 h-4 text-white group-hover:text-black transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {isEffect && (
        <EffectTargetModal
          isOpen={showEffectModal}
          onClose={() => setShowEffectModal(false)}
          effectItem={{ id, name, description, price, sectionId }}
          effectImage={image}
        />
      )}
    </>
  );
}
