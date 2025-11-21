"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function NavMobile({ logo, inverted_colors }: { logo: string, inverted_colors?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  const buttonColor = inverted_colors ? "text-white/90" : "text-black";

  return (
    <div className="md:hidden">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 text-foreground transition"
      >
        {isOpen ? <X className={buttonColor}/> : <Menu className={buttonColor}/>}
      </button>

      {/* Sidebar backdrop (optional) */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <motion.aside
        className="fixed top-0 right-0 h-full w-64 bg-background-2 text-foreground z-50 shadow-lg p-6 flex flex-col space-y-4"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Image src={logo} alt="Logo" width={100} height={100} className="w-24 mb-8" />
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link href="/services" className="hover:text-gray-300">
          Services
        </Link>
        <Link href="/testimonials" className="hover:text-gray-300">
          Testimonials
        </Link>
        <Link href="/contact" className="hover:text-gray-300">
          Book Now
        </Link>
      </motion.aside>
    </div>
  );
}
