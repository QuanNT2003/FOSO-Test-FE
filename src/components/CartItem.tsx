import { X, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CartItemProps } from "@/lib/types/cart";

export function CartItem({ item, onRemove }: CartItemProps) {
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
              className="text-[#282626]/20 hover:text-[#282626]/40 border-none! bg-transparent! "
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
      {item.variants && (
        <div className="mt-4 space-y-4 ms-14">
          {item.variants.map((v, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between"
            >
              <img
                src={v.image}
                alt={v.name}
                className="w-10 h-10 object-cover rounded-sm shadow-sm"
              />
              <span className="text-[13px] text-[#282626]/60">
                Hiệu ứng:{" "}
                <span className="font-bold text-[#282626]">
                  {v.name}
                </span>
              </span>
              <div className="flex items-center border border-[#E5E1DA] rounded-full px-3 py-1 gap-4">
                <div className="text-[#282626]/40 hover:text-[#282626] cursor-pointer">
                  <Minus size={14} />
                </div>
                <span className="text-[14px] font-medium w-4 text-center">
                  {v.quantity}
                </span>
                <div className="text-[#282626]/40 hover:text-[#282626] cursor-pointer">
                  <Plus size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
