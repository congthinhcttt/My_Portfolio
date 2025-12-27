import "./globals.css";
import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import ClientEffects from "@/components/layout/ClientEffects";
import MusicPlayer from "@/components/ui/MusicPlayer";

export const metadata: Metadata = {
  title: { default: "DEV.THINH | Portfolio", template: "%s | DEV.THINH" },
  description: "Portfolio",
};



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>
        <ClientEffects />
        <ScrollToTop />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <MusicPlayer />
      </body>
    </html>
  );
}
