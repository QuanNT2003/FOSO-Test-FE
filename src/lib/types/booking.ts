import type { Technician } from "./technician";
import type { CartItem } from "./cart";

export type BookingView = "cart" | "tech" | "confirmation" | "success";

export interface BookingDate {
  label: string;
  date: string;
}

export interface BookingSubmission {
  bookingDate: string;
  bookingTime: string;
  items: CartItem[];
  technician: Technician;
}

export interface BookingConfirmationProps {
  isVisible: boolean;
  onBack: () => void;
  dates: BookingDate[];
  bookingDate: string;
  onDateSelect: (date: string) => void;
  timeSlots: string[];
  bookingTime: string;
  onTimeSelect: (time: string) => void;
  onConfirm: () => void;
  cartItems: CartItem[];
  selectedTech: Technician;
}

export interface BookingSuccessProps {
  onClose: () => void;
}

export interface TechnicianSelectionProps {
  isVisible: boolean;
  isConfirmationActive: boolean;
  onBack: () => void;
  technicians: Technician[];
  selectedTech: Technician;
  onSelect: (tech: Technician) => void;
  onConfirm: () => void;
}
