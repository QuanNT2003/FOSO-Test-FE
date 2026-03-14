import { X, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CartItemProps } from "@/lib/types/cart";
import { useCart } from "@/lib/contexts/CartContext";
import { useTranslation } from "react-i18next";

export function CartItem({ item, onRemove }: CartItemProps) {
  const { updateVariantQuantity } = useCart();
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="flex gap-6">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-sm shadow-sm"
        />
        <div className="flex-1 space-y-1">
          <div className="flex justify-between items-start">
            <h3 className="text-[15px] font-bold text-[#282626]">
              {item.name}
            </h3>
            <Button
              onClick={() => onRemove(item.id)}
              className="text-[#282626]/20 hover:text-[#282626]/40 border-none! bg-transparent!"
            >
              <X size={16} />
            </Button>
          </div>
          <div className="text-[14px] text-[#282626]/60">
            {item.price.toLocaleString("vi-VN")} đ
          </div>
          {item.duration && (
            <div className="text-[12px] text-[#282626]/40 flex items-center gap-1">
              <span className="w-3 h-3 border border-current rounded-full flex items-center justify-center text-[8px]">
                i
              </span>
              {item.duration}
            </div>
          )}
        </div>
      </div>

      {item.variants && item.variants.length > 0 && (
        <div className="mt-4 space-y-3 ms-14">
          <p className="text-[11px] uppercase tracking-widest text-[#282626]/30">
            {t("common.effect")}
          </p>
          {item.variants.map((v) => (
            <div key={v.id} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {" "}
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-10 h-10 object-cover rounded-sm shadow-sm shrink-0"
                />
                <span className="text-[13px] text-[#282626]/60 flex-1 min-w-0 truncate">
                  <span className="font-bold text-[#282626]">{v.name}</span>
                  <span className="block text-[12px]">
                    +{v.price.toLocaleString("vi-VN")} đ
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center border border-[#E5E1DA] rounded-full">
                  <Button
                    onClick={() => updateVariantQuantity(item.id, v.id, -1)}
                    className=" bg-transparent! text-[#282626]/40 hover:text-[#282626] cursor-pointer transition-colors"
                  >
                    <Minus size={13} />
                  </Button>
                  <span className="text-[13px] font-medium w-4 text-center">
                    {v.quantity}
                  </span>
                  <Button
                    onClick={() => updateVariantQuantity(item.id, v.id, 1)}
                    className="bg-transparent! text-[#282626]/40 hover:text-[#282626] cursor-pointer transition-colors"
                  >
                    <Plus size={13} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
