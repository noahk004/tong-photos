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
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="relative w-full h-full">
        <div className="absolute inset-0">
          <Image
            src={image_to_display}
            alt={name_of_client}
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
      </div>

      {/* Title and Description Overlay */}
      <div
        className={`absolute inset-0 z-10 flex items-center container mx-auto px-4 mt-20 w-full ${text_position === "left" ? "justify-start" : "justify-end"}`}
      >
        <div className="max-w-xl">
          <div
            className={`px-4 max-w-4xl ${text_position === "left" ? "text-left" : "text-right"}`}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg md:text-xl text-white mb-2 drop-shadow-lg"
            >
              {name_of_client.toUpperCase()}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-sm md:text-md text-white/90 drop-shadow-md mb-12 font-light italic"
            >
              &quot;{testimonial_text}&quot;
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
