import { useState, useEffect } from "react";
import { TestimonialItem } from "./TestimonialItem";
import type { TestimonialData } from "@/lib/types/testimonial";
import { TestimonialService } from "@/lib/services/testimonial.service";
import bgComment from "@/assets/images/bg-service.png";
import { useTranslation } from "react-i18next";

export function TestimonialComponent() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await TestimonialService.getTestimonials();
        setTestimonials(data);
        // Default active index to center if possible
        if (data.length > 0) {
          setActiveIndex(Math.floor(data.length / 2));
        }
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

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
            {t("testimonial.subtitle")}
          </span>
          <h2 className="text-[64px] font-serif text-white font-normal mt-4">
            {t("testimonial.title")}
          </h2>
        </div>

        {/* Testimonials Carousel Track */}
        <div className="relative overflow-visible min-h-[600px] flex items-end">
          {isLoading ? (
            <div className="w-full flex justify-center py-20">
              <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
            </div>
          ) : testimonials.length === 0 ? (
            <div className="w-full text-center text-white/60 py-20">
              {t("testimonial.empty")}
            </div>
          ) : (
            <div
              className={`flex transition-transform duration-700 ease-in-out w-full`}
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
          )}
        </div>

        {/* Pagination Dots */}
        {!isLoading && testimonials.length > 0 && (
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
        )}
      </div>
    </section>
  );
}
