import { X } from "lucide-react";
import { useCart } from "@/lib/contexts/CartContext";
import type { ServiceData } from "@/lib/types/service";
import { useTranslation } from "react-i18next";

const MAIN_SECTIONS = ["combo", "medicure", "pedicure"];

interface EffectTargetModalProps {
  isOpen: boolean;
  onClose: () => void;
  effectItem: ServiceData;
  effectImage: string;
}

export function EffectTargetModal({
  isOpen,
  onClose,
  effectItem,
  effectImage,
}: EffectTargetModalProps) {
  const { cartItems, addVariant } = useCart();
  const { t } = useTranslation();

  if (!isOpen) return null;

  const mainItems = cartItems.filter(
    (item) => item.sectionId && MAIN_SECTIONS.includes(item.sectionId),
  );

  const handleSelect = (itemId: string) => {
    addVariant(itemId, {
      id: `effect-${effectItem.id}`,
      name: effectItem.name,
      image: effectImage,
      quantity: 1,
      price: parseInt(effectItem.price) * 1000,
    });
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-200 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-210 flex items-center justify-center px-4">
        <div className="bg-[#FAF5EB] rounded-sm shadow-2xl w-full max-w-[420px] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#E5E1DA]">
            <div>
              <h3 className="text-[20px] font-serif text-[#824C08]">
                {t("cart.add_effect")}
              </h3>
              <p className="text-[13px] text-[#282626]/50 mt-0.5">
                {t("cart.select_service")}{" "}
                <span className="font-semibold text-[#282626]/70">
                  {effectItem.name}
                </span>
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-[#282626]/30 hover:text-[#282626]/60 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Effect preview */}
          <div className="px-6 pt-4 pb-2 flex items-center gap-4">
            <img
              src={effectImage}
              alt={effectItem.name}
              className="w-14 h-14 object-cover rounded-sm shadow"
            />
            <div>
              <p className="text-[15px] font-bold text-[#282626]">
                {effectItem.name}
              </p>
              <p className="text-[14px] text-[#824C08] font-medium">
                +{parseInt(effectItem.price).toLocaleString("vi-VN")}k
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="mx-6 border-t border-[#E5E1DA] my-3" />

          {/* Cart Items List */}
          <div className="px-6 pb-6 space-y-2 max-h-[320px] overflow-y-auto">
            {mainItems.length === 0 ? (
              <div className="py-8 text-center text-[#282626]/40">
                <p className="text-[14px] italic">
                  {t("cart.main_service_required")}
                </p>
                <p className="text-[12px] mt-1">
                  {t("cart.main_service_hint")}
                </p>
              </div>
            ) : (
              <>
                <p className="text-[12px] uppercase tracking-widest text-[#282626]/40 mb-3">
                  {t("cart.select_service_cta")}
                </p>
                {mainItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className="w-full flex items-center gap-4 p-3 rounded-sm border border-[#E5E1DA] hover:border-[#824C08] hover:bg-[#824C08]/5 transition-all group text-left"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-sm"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-[14px] font-bold text-[#282626] truncate">
                        {item.name}
                      </p>
                      <p className="text-[13px] text-[#282626]/50">
                        {item.price.toLocaleString("vi-VN")} đ
                      </p>
                    </div>
                    <div className="w-6 h-6 rounded-full border-2 border-[#E5E1DA] group-hover:border-[#824C08] flex items-center justify-center transition-colors shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-transparent group-hover:bg-[#824C08] transition-colors" />
                    </div>
                  </button>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
