import { useState } from "react";
import { TestimonialItem } from "./TestimonialItem";
import type { TestimonialData } from "@/lib/types/testimonial";
import bgComment from "@/assets/images/bg-comment.png";

// Import generated images
import customer1 from "@/assets/images/comment_thuydo2.png";
import customer2 from "@/assets/images/comment_thuydo.png";
import customer3 from "@/assets/images/comment_johndoe.png";
import avatar1 from "@/assets/images/avatar_thuydo2.png";
import avatar2 from "@/assets/images/avatar_thuydo.png";
import avatar3 from "@/assets/images/avatar_johndoe.png";

export function TestimonialComponent() {
  const [activeIndex, setActiveIndex] = useState(1);

  const testimonials: TestimonialData[] = [
    {
      id: "1",
      name: "Thuỳ Đỗ",
      avatar: avatar1,
      image: customer1,
      comment:
        "Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân. Mình rất thích không gian ở đây, vừa sang trọng vừa ấm cúng. Bộ nail thì khỏi chê luôn, nhân viên tay nghề rất cao và vô cùng tỉ mỉ.",
    },
    {
      id: "2",
      name: "Thuỳ Đỗ",
      avatar: avatar2,
      image: customer2,
      comment:
        "Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân. Mình rất thích không gian ở đây, vừa sang trọng vừa ấm cúng. Bộ nail thì khỏi chê luôn, nhân viên tay nghề rất cao và vô cùng tỉ mỉ.",
    },
    {
      id: "3",
      name: "John Doe",
      avatar: avatar3,
      image: customer3,
      comment:
        "Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân. Mình rất thích không gian ở đây, vừa sang trọng vừa ấm cúng. Bộ nail thì khỏi chê luôn, nhân viên tay nghề rất cao và vô cùng tỉ mỉ.",
    },
  ];

  return (
    <section className="relative w-full py-24 px-[96px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgComment}
          alt="Testimonials Background"
          className="w-full h-full object-cover"
        />
        {/* Linear Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-[#81694B33] to-[#614F38]"></div>
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-white text-[24px] uppercase tracking-[0.5em]">
            NHẬN XÉT TỪ
          </span>
          <h2 className="text-[64px] font-serif text-white font-normal mt-4">
            Khách Hàng
          </h2>
        </div>

        {/* Testimonials Carousel Track */}
        <div className="relative overflow-visible min-h-[600px] flex items-end">
          <div
            className="flex transition-transform duration-700 ease-in-out w-full"
            style={{
              transform: `translateX(${(Math.floor(testimonials.length / 2) - activeIndex) * (100 / testimonials.length)}%)`,
            }}
          >
            {testimonials.map((t, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div key={t.id} className="w-1/3 shrink-0 px-6">
                  <TestimonialItem
                    testimonial={t}
                    className={`transition-all duration-700 cursor-pointer ${
                      isActive
                        ? "mb-16 scale-110 origin-bottom opacity-100 z-20"
                        : "mb-0 scale-90 opacity-60 hover:opacity-80 z-10"
                    }`}
                    onClick={() => setActiveIndex(idx)}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-6 mt-12">
          {testimonials.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="p-0 bg-transparent border-none cursor-pointer flex items-center justify-center w-8 h-8 transition-all duration-300"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <div
                className={`relative flex items-center justify-center w-6 h-6  transition-all duration-300 ${
                  idx === activeIndex
                    ? "rounded-full border"
                    : "border-white/20 hover:border-white/40 "
                }`}
              >
                <div
                  className={`rounded-full bg-white transition-all duration-300 w-1.5 h-1.5 ${
                    idx === activeIndex ? "" : " opacity-40"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
