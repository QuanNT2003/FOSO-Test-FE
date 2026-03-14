import { fakeFetch } from "./api";
import type { TestimonialData } from "@/lib/types/testimonial";

// Import generated images
import customer1 from "@/assets/images/comment_thuydo2.png";
import customer2 from "@/assets/images/comment_thuydo.png";
import customer3 from "@/assets/images/comment_johndoe.png";
import avatar1 from "@/assets/images/avatar_thuydo2.png";
import avatar2 from "@/assets/images/avatar_thuydo.png";
import avatar3 from "@/assets/images/avatar_johndoe.png";

export const TestimonialService = {
  async getTestimonials(): Promise<TestimonialData[]> {
    return fakeFetch([
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
    ]);
  },
};
