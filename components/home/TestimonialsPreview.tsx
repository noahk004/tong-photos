"use client";

import Image from "next/image";
import { motion } from "motion/react";
import SiteButton from "../SiteButton";

export default function TestimonialsPreview({
  images,
  header,
  description,
}: {
  images: string[];
  header: string;
  description: string;
}) {
  const gridImages = images.slice(0, 8);

  const gridLayout = [
    { colSpan: "col-span-2", rowSpan: "row-span-1", index: 0 },
    { colSpan: "col-span-1", rowSpan: "row-span-2", index: 1 },
    { colSpan: "col-span-1", rowSpan: "row-span-2", index: 2 },
    { colSpan: "col-span-1", rowSpan: "row-span-1", index: 3 },
    { colSpan: "col-span-1", rowSpan: "row-span-1", index: 4 },
    { colSpan: "col-span-1", rowSpan: "row-span-1", index: 5 },
    { colSpan: "col-span-1", rowSpan: "row-span-1", index: 6 },
    { colSpan: "col-span-2", rowSpan: "row-span-1", index: 7 },
  ];

  return (
    <section className="bg-[#f8f8f8] py-24 md:py-48">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Text */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#cd7400] mb-4 font-light">
              Kind Words
            </p>
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-wide text-[#353535] mb-6">
              {header}
            </h2>
            <div className="w-8 h-px bg-[#cd7400] mb-6" />
            <p className="text-sm md:text-base text-black/70 mb-10 font-light leading-relaxed max-w-md">
              {description}
            </p>
            <SiteButton text="See Testimonials" href="/testimonials" />
          </motion.div>

          {/* Image grid */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <div className="grid grid-cols-3 auto-rows-[100px] gap-2">
              {gridLayout.map(({ colSpan, rowSpan, index }) => {
                const src = gridImages[index];
                if (!src) return null;
                return (
                  <div
                    key={index}
                    className={`${colSpan} ${rowSpan} overflow-hidden`}
                  >
                    <Image
                      src={src}
                      alt={`${header} ${index + 1}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}