
import React from 'react';
import Hero from '../../components/sections/Hero';
import ProjectsSection from '../../components/sections/ProjectsSection';
import Skills from '../../components/sections/Skills';
import ContactSection from '../../components/sections/ContactSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Trang chủ portfolio của tôi.",
};

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
