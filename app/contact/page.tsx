
import React from 'react';
import ContactSection from '../../components/sections/ContactSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Liên hệ với tôi.",
};

const ContactPage: React.FC = () => {
  return (
    <main className="pt-20">
      <ContactSection />
    </main>
  );
};

export default ContactPage;
