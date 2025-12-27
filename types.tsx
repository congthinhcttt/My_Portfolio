import type { ReactNode } from "react";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  imageUrl: string; // "/image/blog/xxx.jpg" hoặc "https://..."
};

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];     // ✅ dùng trong UI nên để bắt buộc
  imageUrl: string;        // ✅ bắt buộc để tránh lỗi ảnh
  demoUrl?: string;        // nếu chưa có demo thì bỏ field luôn hoặc để undefined
  sourceUrl?: string;      // github
  role?: string;           // optional, UI không dùng thì thôi
  year?: string | number;  // optional
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string; // "/image/certificates/xxx.jpg"
  verifyUrl?: string;
};

export type SkillCategory = "Frontend" | "Backend" | "Database & Tools" | "UI/UX & Others";

export type Skill = {
  name: string;
  level: number; // 0-100
  category: SkillCategory;
};


export type Profile = {
  name: string;
  // Hero
  role: string;       // ví dụ: "Intern Frontend"
  bio: string;
  avatarUrl: string;  // ✅ "/image/profile/avatar.jpg"
  // Contact
  email: string;
  phone?: string;
  location?: string;
  // Social
  socials: {
    github: string;
    linkedin: string;
    twitter?: string; // ✅ twitter nên optional (nhiều người không có)
  };
};

export type EducationItem = {
  id: string;
  school: string;
  degree: string;
  major: string;
  start: string;
  end: string;
  location?: string;
  highlights?: string[];
};
