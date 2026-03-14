import { useState, useEffect } from "react";
import { X, Minus, Plus, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechnicianSelection } from "./TechnicianSelection";
import { BookingConfirmation } from "./BookingConfirmation";
import { BookingSuccess } from "./BookingSuccess";
import type { CartItem, CartModalProps } from "@/lib/types/cart";
import type { Technician } from "@/lib/types/technician";
import type { BookingDate, BookingView } from "@/lib/types/booking";
import { TechnicianService } from "@/lib/services/technician.service";
import { BookingService } from "@/lib/services/booking.service";

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const [currentView, setCurrentView] = useState<BookingView>("cart");
  const [technicians, setTechnicians] = useState<Technician[]>([]);
  const [dates, setDates] = useState<BookingDate[]>([]);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [selectedTech, setSelectedTech] = useState<Technician | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const [techs, bDates, slots] = await Promise.all([
          TechnicianService.getTechnicians(),
          BookingService.getBookingDates(),
          BookingService.getTimeSlots(),
        ]);
        setTechnicians(techs);
        setDates(bDates);
        setTimeSlots(slots);
        
        if (techs.length > 0) {
          setSelectedTech(techs[0]);
        }
      } catch (error) {
        console.error("Failed to fetch booking data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (isOpen) {
      fetchBookingData();
    }
  }, [isOpen]);

  const [bookingDate, setBookingDate] = useState("Thứ 7 06/09");
  const [bookingTime, setBookingTime] = useState("10:00 AM");

  const cartItems: CartItem[] = [
    {
      id: "1",
      name: "Sơn gel",
      price: 264000,
      image:
        "https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=200&auto=format&fit=crop",
      duration: "10 phút",
      variants: [
        {
          image:
            "https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=200&auto=format&fit=crop",
          name: "Da beo",
          quantity: 1,
        },
        {
          image:
            "https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=200&auto=format&fit=crop",
          name: "Da beo",
          quantity: 2,
        },
      ],
    },
    {
      id: "2",
      name: "Mắt mèo",
      price: 88000,
      image:
        "https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: "3",
      name: "Sơn nhũ",
      price: 88000,
      image:
        "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=200&auto=format&fit=crop",
      duration: "10 phút",
    },
    {
      id: "4",
      name: "Sơn gel",
      price: 88000,
      image:
        "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=200&auto=format&fit=crop",
      duration: "10 phút",
    },
  ];

  if (!isOpen) return null;

  const handleClose = () => {
    setCurrentView("cart");
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[80] bg-black/20 backdrop-blur-[2px]"
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div
        className={`top-[60px] fixed right-0 z-90 w-[450px] h-[calc(100vh-60px)] bg-[#FAF5EB] shadow-2xl transition-all duration-300 ease-in-out flex flex-col overflow-hidden`}
      >
        {/* Main Cart View */}
        <div
          className={`shrink-0 flex flex-col w-[450px] h-full bg-[#FAF5EB] transition-transform duration-300 ${currentView !== "cart" ? "-translate-x-full" : "translate-x-0"}`}
        >
          {isLoading && (
            <div className="absolute inset-0 z-100 bg-[#FAF5EB]/80 flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-[#824C08]/20 border-t-[#824C08] rounded-full animate-spin"></div>
            </div>
          )}
          {/* Header */}
          <div className="p-6 border-b border-[#E5E1DA] text-center relative bg-[#FAF5EB]">
            <h2 className="text-[32px] font-serif text-[#824C08]">Giỏ Hàng</h2>
            <Button
              onClick={handleClose}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-[#824C08]/60 hover:text-[#824C08] border-none! bg-transparent!"
            >
              <X size={24} />
            </Button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-thin scrollbar-thumb-[#E5E1DA]">
            {cartItems.map((item) => (
              <div key={item.id} className="relative">
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
                      <Button className="text-[#282626]/20 hover:text-[#282626]/40 border-none! bg-transparent! ">
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
            ))}
          </div>

          {/* Bottom Section */}
          <div className="p-6 bg-[#FAF5EB] border-t border-[#E5E1DA] space-y-6">
            <div
              onClick={() => setCurrentView("tech")}
              className="flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="text-[14px] text-[#282626]/40">
                  Kỹ thuật viên
                </span>
                {selectedTech && (
                  <div className="flex items-center gap-2">
                    <img
                      src={selectedTech.image}
                      alt={selectedTech.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-[14px] font-bold text-[#282626]">
                      {selectedTech.name}
                    </span>
                  </div>
                )}
              </div>
              <ChevronRight
                size={18}
                className="text-[#282626]/40 group-hover:translate-x-1 transition-transform"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[16px] text-[#282626]">
                Tổng thanh toán
              </span>
              <span className="text-[18px] font-bold text-[#E24C4C]">
                440,000 đ
              </span>
            </div>

            <Button
              onClick={() => setCurrentView("confirmation")}
              className="w-full bg-[#824C08]! hover:bg-[#824C08]/90! text-white h-[56px] rounded-sm flex items-center justify-between px-6 group"
            >
              <span className="text-[15px] font-bold uppercase tracking-widest">
                Tiếp Tục
              </span>
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </div>
        </div>

        {/* Technician Selection View */}
        <TechnicianSelection
          isVisible={currentView === "tech"}
          isConfirmationActive={currentView === "confirmation" || currentView === "success"}
          onBack={() => setCurrentView("cart")}
          technicians={technicians}
          selectedTech={selectedTech!}
          onSelect={(tech) => {
            setSelectedTech(tech);
            setCurrentView("cart");
          }}
          onConfirm={() => setCurrentView("confirmation")}
        />

        {/* Booking Confirmation View */}
        <BookingConfirmation
          isVisible={currentView === "confirmation"}
          onBack={() => setCurrentView("cart")}
          dates={dates}
          bookingDate={bookingDate}
          onDateSelect={setBookingDate}
          timeSlots={timeSlots}
          bookingTime={bookingTime}
          onTimeSelect={setBookingTime}
          onConfirm={() => setCurrentView("success")}
          cartItems={cartItems}
          selectedTech={selectedTech!}
        />

        {/* Success State */}
        {currentView === "success" && (
          <BookingSuccess onClose={handleClose} />
        )}
      </div>
    </>
  );
}
