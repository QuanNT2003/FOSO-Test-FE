import { fakeFetch } from "./api";
import type { BookingDate, BookingSubmission } from "@/lib/types/booking";

export const BookingService = {
  async getBookingDates(): Promise<BookingDate[]> {
    return fakeFetch([
      { label: "Thứ 5", date: "04/09" },
      { label: "Thứ 6", date: "05/09" },
      { label: "Thứ 7", date: "06/09" },
      { label: "Chủ Nhật", date: "07/09" },
    ]);
  },

  async getTimeSlots(): Promise<string[]> {
    return fakeFetch([
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 PM",
      "12:30 PM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
      "04:00 PM",
      "04:30 PM",
      "05:00 PM",
      "05:30 PM",
      "06:00 PM",
      "06:30 PM",
    ]);
  },

  async confirmBooking(bookingInfo: BookingSubmission): Promise<{ success: boolean; id: string }> {
    console.log("Confirming booking:", bookingInfo);
    return fakeFetch(
      {
        success: true,
        id: Math.random().toString(36).substr(2, 9),
      },
      800,
    );
  },
};
