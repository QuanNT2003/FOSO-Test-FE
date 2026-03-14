import bgAppointment from "@/assets/images/bg-comment.png";

export function AppointmentComponent() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgAppointment}
          alt="Appointment Background"
          className="w-full h-full object-cover"
        />
        {/* Color Overlay #523C14A3 */}
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: "#523C14A3" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 flex flex-col items-center gap-6">
        <h2 className="text-white text-[64px] font-serif leading-tight">
          Đặt lịch hẹn chữa lành
        </h2>
        <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
          Đến The OM Lounge để xả stress và làm mới mình. Vẻ đẹp bắt đầu từ những
          điều nhỏ nhất và lan tỏa đến cả tâm hồn.
        </p>
        <button className="mt-4 bg-white text-[#523C14] px-10 py-4 font-semibold uppercase tracking-widest hover:bg-white/90 transition-all duration-300 rounded-none cursor-pointer">
          Trải nghiệm ngay
        </button>
      </div>
    </section>
  );
}
