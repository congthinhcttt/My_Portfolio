"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal } from "lucide-react";

type NavLink = { name: string; href: string };

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // đóng mobile menu khi đổi route
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // ✅ giữ About + Contact
  const navLinks: NavLink[] = useMemo(
    () => [
      { name: "Trang chủ", href: "/" },
      { name: "Về tôi", href: "/about" },
      { name: "Dự án", href: "/projects" },
      { name: "Blog", href: "/blog" },
      { name: "Chứng chỉ", href: "/certificates" },
      { name: "Liên hệ", href: "/contact" },
    ],
    []
  );

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header
      className={[
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-zinc-950/80 py-3 backdrop-blur-md"
          : "bg-transparent py-5",
      ].join(" ")}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-indigo-400"
            aria-label="Go to home"
          >
            <Terminal size={28} />
            <span className="text-zinc-100">DEV.THINH</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={[
                      "text-sm font-medium transition-colors hover:text-indigo-400",
                      active ? "text-indigo-400" : "text-zinc-400",
                    ].join(" ")}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-100 md:hidden"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-white/10 bg-zinc-950/95 py-6 backdrop-blur md:hidden">
          <ul className="flex flex-col items-center gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href} className="w-full px-6">
                  <Link
                    href={link.href}
                    className={[
                      "block w-full rounded-2xl px-4 py-3 text-center text-lg font-medium transition-colors",
                      active
                        ? "bg-white/5 text-indigo-400"
                        : "text-zinc-300 hover:bg-white/5",
                    ].join(" ")}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
