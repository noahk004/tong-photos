// Testimonial.tsx
"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Testimonial({
  name_of_client,
  testimonial_text,
  image_to_display,
  text_position,
}: {
  name_of_client: string;
  testimonial_text: string;
  image_to_display: string;
  text_position: string;
}) {
  const isLeft = text_position === "left";

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background image */}
      <Image
        src={image_to_display}
        alt={name_of_client}
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Gradient overlay — stronger on the text side */}
      <div
        className={`absolute inset-0 ${isLeft
            ? "bg-gradient-to-r from-black/80 via-black/40 to-black/10"
            : "bg-gradient-to-l from-black/80 via-black/40 to-black/10"
          }`}
      />

      {/* Content */}
      <div
        className={`absolute inset-0 z-10 flex items-end container mx-auto px-8 pb-20 ${isLeft ? "justify-start" : "justify-end"
          }`}
      >
        <div className={`max-w-lg ${isLeft ? "text-left" : "text-right"}`}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-sm md:text-base text-white/80 font-light italic leading-relaxed mb-6"
          >
            &quot;{testimonial_text}&quot;
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className={`flex items-center gap-3 ${isLeft ? "justify-start" : "justify-end"}`}
          >
            <div className="w-6 h-px bg-[#cd7400]" />
            <span className="text-xs tracking-[0.25em] uppercase text-[#ffedd2] font-light">
              {name_of_client}
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}