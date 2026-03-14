import type { TestimonialData } from "@/lib/types/testimonial";

interface TestimonialItemProps {
  testimonial: TestimonialData;
  className?: string;
  onClick?: () => void;
}

export function TestimonialItem({
  testimonial,
  className = "",
  onClick,
}: TestimonialItemProps) {
  return (
    <div
      className={`flex flex-col gap-6 group ${className}`}
      onClick={onClick}
    >
      {/* Image Container with Hanging Quote */}
      <div className="relative">
        {/* Main Image Container */}
        <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-xl">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Hanging Quote Icon */}
        <div className="absolute -bottom-30 -right-2 z-10 transition-transform duration-500 group-hover:translate-y-1">
          <span className="text-[#E1C084] text-[150px] font-serif leading-none select-none drop-shadow-md">
            “
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col gap-4 px-2">
        {/* User Info */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-[#E1C084]/30">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="text-xl font-semibold text-white tracking-wide">
            {testimonial.name}
          </h4>
        </div>

        {/* Comment Text */}
        <p className="text-[#DAD7CD] text-[14px] leading-relaxed line-clamp-4">
          {testimonial.comment}
        </p>

        {/* See More Link */}
        <a
          href="#"
          className="text-[#E1C084] text-[12px] uppercase tracking-widest hover:underline decoration-1 underline-offset-4"
        >
          Xem thêm
        </a>
      </div>
    </div>
  );
}
