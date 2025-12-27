import type { Project } from "../../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Detecting Violence in Videos",
    description:
      "Bài toán nhận diện hành vi bạo lực trong video bằng LSTM kết hợp pose landmarks; gồm tiền xử lý dữ liệu, huấn luyện và đánh giá mô hình.",
    imageUrl: "/image/project/phat_hien_bao_luc.jpg",
    techStack: ["Python", "TensorFlow/Keras", "OpenCV", "MediaPipe", "LSTM"],
    sourceUrl: "https://github.com/congthinhcttt/Detecting-Violence-in-Videos",
    demoUrl: "",

    // có cũng được, UI không dùng thì bỏ cũng ok
    role: "Frontend (Intern)",
    year: "2024",
  },
  {
    id: "2",
    title: "DoAnCoSo_Web (Web Sửa Xe)",
    description:
      "Website quản lý/giới thiệu dịch vụ sửa xe, hỗ trợ các trang chức năng cơ bản như hiển thị nội dung, điều hướng và tổ chức cấu trúc dự án dạng web app. Dự án phục vụ môn Đồ án cơ sở.",
    imageUrl: "/image/project/logo_suaxe.jpg",
    techStack: ["JavaScript", "HTML", "CSS"],
    demoUrl: "", // chưa có demo thì để rỗng
    sourceUrl: "https://github.com/congthinhcttt/DoAnCoSo_Web",

    // có cũng được, UI không dùng thì bỏ cũng ok
    role: "Frontend (Intern)",
    year: "2024",
  },
  {
    id: "3",
    title: "DoAnMobile_QLCT (Quản Lý Chi Tiêu)",
    description:
      "Ứng dụng mobile quản lý chi tiêu cá nhân: ghi nhận khoản thu/chi, phân loại theo danh mục, xem lịch sử giao dịch và thống kê theo thời gian. Dự án xây dựng bằng Flutter, có cấu trúc đa nền tảng (android/ios/web) và cấu hình Firebase trong repo.",
    imageUrl: "/image/project/quan_ly_chi_tieu.jpg", // hoặc bạn tự chụp ảnh app rồi để /projects/qlct.jpg
    techStack: ["Flutter", "Dart", "Firebase"],
    demoUrl: "", // nếu chưa deploy demo thì để rỗng
    sourceUrl: "https://github.com/congthinhcttt/DoAnMobile_QLCT",
    role: "Frontend (Intern)",
    year: "2025",
  },
  {
    id: "4",
    title: "App Sửa Xe (Booking & Services)",
    description:
      "Ứng dụng Flutter hỗ trợ đặt lịch sửa xe: xem dịch vụ, tạo booking, theo dõi lịch hẹn. Dự án đa nền tảng Android/iOS/Web và có cấu hình Firebase trong repo.",
    imageUrl: "/image/project/logo_suaxe.jpg", // hoặc ảnh screenshot app bạn chụp
    techStack: ["Flutter", "Dart", "Firebase"],
    demoUrl: "", // chưa deploy thì để rỗng
    sourceUrl: "https://github.com/congthinhcttt/sua_xe_app",
    role: "Intern Frontend (Flutter)",
    year: "2025",
  }

];
