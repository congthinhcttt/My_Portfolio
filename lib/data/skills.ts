import type { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "PHP", level: 75, category: "Backend" },
  { name: "Laravel", level: 78, category: "Backend" },
  { name: "RESTful API", level: 82, category: "Backend" },

  // Database & Tools
  { name: "PostgreSQL", level: 80, category: "Database & Tools" },
  { name: "MySQL", level: 75, category: "Database & Tools" },
  { name: "Git", level: 90, category: "Database & Tools" },
  { name: "GitHub", level: 88, category: "Database & Tools" },

  // UI/UX & Others
  { name: "UI Design", level: 85, category: "UI/UX & Others" },
  { name: "VS Code", level: 92, category: "UI/UX & Others" },
  { name: "Visual Studio", level: 75, category: "UI/UX & Others" },
];
