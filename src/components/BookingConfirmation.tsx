import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookingConfirmationProps {
  isVisible: boolean;
  onBack: () => void;
  dates: { label: string; date: string }[];
  bookingDate: string;
  onDateSelect: (date: string) => void;
  timeSlots: string[];
  bookingTime: string;
  onTimeSelect: (time: string) => void;
  onConfirm: () => void;
}

export function BookingConfirmation({
  isVisible,
  onBack,
  dates,
  bookingDate,
  onDateSelect,
  timeSlots,
  bookingTime,
  onTimeSelect,
  onConfirm,
}: BookingConfirmationProps) {
  return (
    <div
      className={`absolute inset-0 flex flex-col w-[450px] h-full bg-[#FAF5EB] transition-transform duration-300 ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="p-6 border-b border-[#E5E1DA] text-center relative">
        <Button
          onClick={onBack}
          className="bg-transparent! absolute left-6 top-1/2 -translate-y-1/2 text-[#824C08]/60 hover:text-[#824C08]"
        >
          <ChevronRight size={24} className="rotate-180" />
        </Button>
        <h2 className="text-[24px] font-serif text-[#824C08]">
          Xác Nhận Đặt Lịch
        </h2>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-thin scrollbar-thumb-[#E5E1DA]">
        {/* Customer Info */}
        <div className="space-y-6">
          <div className="space-y-1 border-b border-[#E5E1DA] pb-2">
            <label className="text-[12px] text-[#282626]/40 uppercase tracking-widest">
              Tên khách hàng
            </label>
            <input
              type="text"
              defaultValue="Thuỳ Đỗ"
              className="w-full bg-transparent border-none text-[18px] font-bold text-[#282626] focus:outline-none p-0"
            />
          </div>
          <div className="space-y-1 border-b border-[#E5E1DA] pb-2">
            <label className="text-[12px] text-[#282626]/40 uppercase tracking-widest">
              Số điện thoại
            </label>
            <input
              type="text"
              defaultValue="0969-886-969"
              className="w-full bg-transparent border-none text-[18px] font-bold text-[#282626] focus:outline-none p-0"
            />
          </div>
        </div>

        {/* Date Selection */}
        <div className="space-y-4">
          <h3 className="text-[14px] text-[#282626]/60">Chọn ngày</h3>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
            {dates.map((d, idx) => (
              <div
                key={idx}
                onClick={() => onDateSelect(`${d.label} ${d.date}`)}
                className={`shrink-0 w-24 h-20 rounded-sm flex flex-col items-center justify-center cursor-pointer transition-all border ${
                  bookingDate === `${d.label} ${d.date}`
                    ? "bg-[#FCE48C] border-[#FCE48C]"
                    : "bg-[#EAE4D9]/50 border-transparent hover:border-[#824C08]/20"
                }`}
              >
                <span
                  className={`text-[14px] font-bold ${
                    bookingDate === `${d.label} ${d.date}`
                      ? "text-[#282626]"
                      : "text-[#282626]/80"
                  }`}
                >
                  {d.label}
                </span>
                <span
                  className={`text-[12px] ${
                    bookingDate === `${d.label} ${d.date}`
                      ? "text-[#282626]/60"
                      : "text-[#282626]/40"
                  }`}
                >
                  {d.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div className="space-y-4">
          <h3 className="text-[14px] text-[#282626]/60">Chọn khung giờ</h3>
          <div className="grid grid-cols-4 gap-2">
            {timeSlots.map((time, idx) => (
              <div
                key={idx}
                onClick={() => onTimeSelect(time)}
                className={`h-14 rounded-sm flex flex-col items-center justify-center cursor-pointer transition-all ${
                  bookingTime === time
                    ? "bg-[#B47C54] text-white"
                    : "bg-[#EAE4D9]/50 text-[#282626]/60 hover:bg-[#EAE4D9]"
                }`}
              >
                <span className="text-[13px] font-bold">
                  {time.split(" ")[0]}
                </span>
                <span className="text-[10px] opacity-60">
                  {time.split(" ")[1]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="p-6 border-t border-[#E5E1DA]">
        <Button
          onClick={onConfirm}
          className="w-full bg-[#824C08]! text-white h-[56px] rounded-sm flex items-center justify-center gap-3 group"
        >
          <span className="text-[15px] font-bold uppercase tracking-widest">
            Đặt Lịch
          </span>
          <ChevronRight
            size={20}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Button>
      </div>
    </div>
  );
}
