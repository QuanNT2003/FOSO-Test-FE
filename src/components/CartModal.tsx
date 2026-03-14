import { useState, useEffect } from "react";
import { X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechnicianSelection } from "./TechnicianSelection";
import { BookingConfirmation } from "./BookingConfirmation";
import { BookingSuccess } from "./BookingSuccess";
import type { CartModalProps } from "@/lib/types/cart";
import type { Technician } from "@/lib/types/technician";
import type { BookingDate, BookingView } from "@/lib/types/booking";
import { TechnicianService } from "@/lib/services/technician.service";
import { BookingService } from "@/lib/services/booking.service";
import { useCart } from "@/lib/contexts/CartContext";
import { CartItem as CartItemComponent } from "./CartItem";

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const [currentView, setCurrentView] = useState<BookingView>("cart");
  const [technicians, setTechnicians] = useState<Technician[]>([]);
  const [dates, setDates] = useState<BookingDate[]>([]);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [selectedTech, setSelectedTech] = useState<Technician | null>(null);
  const { cartItems, isLoading: isCartLoading, removeItem, totalPrice } = useCart();
  const [isDataLoading, setIsDataLoading] = useState(true);

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
        setIsDataLoading(false);
      }
    };

    if (isOpen) {
      fetchBookingData();
    }
  }, [isOpen]);

  const [bookingDate, setBookingDate] = useState("Thứ 7 06/09");
  const [bookingTime, setBookingTime] = useState("10:00 AM");

  const isLoading = isCartLoading || isDataLoading;

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
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-[#824C08]/40 space-y-4">
                <div className="w-20 h-20 border-2 border-dashed border-current rounded-full flex items-center justify-center">
                  <X size={40} className="rotate-45" />
                </div>
                <p className="text-[15px] italic">Giỏ hàng đang trống</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <CartItemComponent 
                  key={item.id} 
                  item={item} 
                  onRemove={removeItem} 
                />
              ))
            )}
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
                {totalPrice.toLocaleString("vi-VN")} đ
              </span>
            </div>

            <Button
              onClick={() => setCurrentView("confirmation")}
              disabled={cartItems.length === 0}
              className="w-full bg-[#824C08]! hover:bg-[#824C08]/90! text-white h-[56px] rounded-sm flex items-center justify-between px-6 group disabled:opacity-50"
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
