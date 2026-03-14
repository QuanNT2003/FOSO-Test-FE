import { X, Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BookingSuccessProps } from "@/lib/types/booking";

export function BookingSuccess({ onClose }: BookingSuccessProps) {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-[500px] bg-[#FDFBF7] rounded-sm shadow-2xl overflow-hidden p-12 flex flex-col items-center text-center animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <Button
          onClick={onClose}
          className="absolute right-6 top-6 text-[#824C08]/40 hover:text-[#824C08] border-none! bg-transparent!"
        >
          <X size={24} />
        </Button>

        {/* Success Icon */}
        <div className="relative mb-8">
          <div className="w-24 h-24 rounded-full bg-[#EAE4D9] flex items-center justify-center">
            <Send
              size={40}
              className="text-[#824C08] -rotate-12 translate-x-[-2px] translate-y-[2px]"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#4CAF50] rounded-full border-4 border-[#FDFBF7] flex items-center justify-center">
            <Check size={16} className="text-white" strokeWidth={3} />
          </div>

          {/* Decorative Sparks (simplified) */}
          <div className="absolute -top-2 -left-2 w-2 h-2 rounded-full bg-[#824C08]/20" />
          <div className="absolute top-4 -right-4 w-1.5 h-1.5 rounded-full bg-[#FCE48C]" />
          <div className="absolute -bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-[#824C08]/10" />
        </div>

        {/* Content */}
        <div className="space-y-4 max-w-[540px]">
          <h2 className="text-[32px] text-[#282626] ">
            Gửi Yêu Cầu Thành Công!
          </h2>
          <p className="text-[15px] text-[#715E28] ">
            Cảm ơn bạn đã đặt dịch vụ tại The OM Lounge. Chúng tôi đã nhận được
            thông tin đặt lịch từ bạn và sẽ liên hệ lại trong thời gian sớm
            nhất.
          </p>
        </div>
      </div>
    </div>
  );
}
