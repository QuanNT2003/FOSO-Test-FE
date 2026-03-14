import { fakeFetch } from "./api";
import type { Technician } from "@/lib/types/technician";

export const TechnicianService = {
  async getTechnicians(): Promise<Technician[]> {
    return fakeFetch([
      {
        id: "1",
        name: "Võ Thị Bích Phượng",
        role: "Kỹ thuật viên chuyên nghiệp",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&auto=format&fit=crop",
      },
      {
        id: "2",
        name: "Nguyễn Minh Anh",
        role: "Chuyên gia làm móng",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=50&auto=format&fit=crop",
      },
      {
        id: "3",
        name: "Trần Thị Lan",
        role: "Kỹ thuật viên Massage",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=50&auto=format&fit=crop",
      },
      {
        id: "4",
        name: "Phạm Hồng Nhung",
        role: "Kỹ thuật viên chăm sóc da",
        image:
          "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=50&auto=format&fit=crop",
      },
    ]);
  },
};
