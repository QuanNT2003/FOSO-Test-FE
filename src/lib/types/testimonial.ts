export interface TestimonialData {
  id: string;
  name: string;
  avatar: string;
  comment: string;
  image: string;
  isFeatured?: boolean;
}

export interface TestimonialItemProps {
  testimonial: TestimonialData;
  className?: string;
  onClick?: () => void;
}
