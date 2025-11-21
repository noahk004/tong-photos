"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSection } from "@/components/home/SectionContext";

export default function NavDesktop({ logo, inverted_colors, clear_len }: { logo: string, inverted_colors?: boolean, clear_len?: number }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentSection } = useSection();
  // Use clear_len to determine how many sections stay clear (default to 1 for section 0)
  const isClearSection = currentSection < (clear_len ?? 1);

  const textColor = inverted_colors ? "text-white/90" : "text-black";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`hidden md:flex md:items-center md:justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled || !isClearSection
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent text-white/90"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between w-full">
        <Image
          src={logo}
          alt="Logo"
          width={100}
          height={100}
          className="w-24"
        />
        <nav
          className={`flex items-center gap-6 text-sm font-light ${
            isClearSection ? textColor : "text-black"
          }`}
        >
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Book Now</Link>
        </nav>
      </div>
    </div>
  );
}