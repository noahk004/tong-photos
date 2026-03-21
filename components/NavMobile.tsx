"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

export default function NavMobile({ logo }: { logo: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Book Now" },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 transition"
        style={{ mixBlendMode: "difference" }}
      >
        {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => setIsOpen(false)}
            />
            {/* Sidebar */}
            <motion.aside
              className="fixed top-0 right-0 h-full w-64 bg-background-2 text-foreground z-50 shadow-xl flex flex-col px-8 py-10"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            >
              <Image src={logo} alt="Logo" width={100} height={100} className="w-20 mb-12" />

              <nav className="flex flex-col gap-6">
                {links.map(({ href, label }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm tracking-widest uppercase transition-colors duration-200 ${isActive
                        ? "text-[#cd7400]"
                        : "text-foreground hover:text-[#cd7400]"
                        }`}
                    >
                      {label}
                    </Link>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}