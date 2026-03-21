"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import SiteButton from "../SiteButton";

interface HeroProps {
  title: string;
  description: string;
  images: string[];
}

export default function Hero({ title, description, images }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Image Carousel */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            fill
            className="object-cover scale-[1.02]"
            priority={currentIndex === 0}
            sizes="100vw"
          />
          {/* Gradient overlay — dark at bottom and edges, subtle center */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Text Content */}
      <div className="absolute inset-0 z-10 flex items-end justify-start container mx-auto px-8 pb-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase text-[#ffedd2] mb-4 font-light"
          >
            Photography
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 drop-shadow-lg font-light uppercase tracking-wide"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm md:text-base text-white/70 mb-10 font-light leading-relaxed max-w-md"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <SiteButton text="Browse Services" href="/services" type="clear" />
          </motion.div>
        </div>
      </div>

      {/* Carousel indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-8 right-8 z-10 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-px transition-all duration-300 ${i === currentIndex
                  ? "w-8 bg-white"
                  : "w-4 bg-white/40 hover:bg-white/70"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}