import type { Technician } from "./technician";

export type BookingView = "cart" | "tech" | "confirmation" | "success";

export interface BookingDate {
  label: string;
  date: string;
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
