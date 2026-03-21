"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavDesktop({
  logo,
  darkTop = true,
}: {
  logo: string;
  darkTop?: boolean;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const invertedAtTop = darkTop && !isScrolled;

  return (
    <div
      className={`hidden md:flex md:items-center md:justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between w-full">
        <Image
          src={logo}
          alt="Logo"
          width={100}
          height={100}
          className={`w-24 transition-all duration-500 ${
            invertedAtTop ? "brightness-0 invert" : "brightness-0"
          }`}
        />
        <nav
          className={`flex items-center gap-6 text-sm font-light transition-colors duration-500 ${
            invertedAtTop ? "text-white/90" : "text-black"
          }`}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/testimonials", label: "Testimonials" },
            { href: "/contact", label: "Book Now" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors duration-200 hover:opacity-60 ${
                pathname === href ? "border-b border-current pb-px" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}