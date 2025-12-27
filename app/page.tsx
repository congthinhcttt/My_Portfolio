import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import EducationSection from "@/components/sections/EducationSection";


export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <Skills />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
