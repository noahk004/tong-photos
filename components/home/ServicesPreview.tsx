"use client";

import Image from "next/image";
import { motion } from "motion/react";
import SiteButton from "../SiteButton";

export default function ServicesPreview({
  imgLandscape,
  imgPortrait,
  header,
  description,
}: {
  imgLandscape: string;
  imgPortrait: string;
  header: string;
  description: string;
}) {
  return (
    <section className="flex py-24 md:py-48 bg-white">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Images */}
          <motion.div
            className="flex gap-4 md:gap-6 justify-center items-end"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Dominant image */}
            <div className="relative w-48 md:w-72 aspect-[3/4] shadow-lg">
              <Image
                src={imgPortrait}
                alt={header}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 192px, 288px"
              />
            </div>
            {/* Secondary image — offset upward */}
            <div className="relative w-32 md:w-48 aspect-[4/3] shadow-md mb-12 md:mb-20">
              <Image
                src={imgLandscape}
                alt={header}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 128px, 192px"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#cd7400] mb-4 font-light">
              What I Offer
            </p>
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-wide text-[#353535] mb-6">
              {header}
            </h2>
            <div className="w-8 h-px bg-[#cd7400] mb-6" />
            <p className="text-sm md:text-base text-black/70 mb-10 font-light leading-relaxed max-w-md">
              {description}
            </p>
            <SiteButton text="View Services" href="/services" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}