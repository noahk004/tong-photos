"use client";

import { motion } from "motion/react";
import SiteButton from "../SiteButton";

export default function CTA({
  header,
  description,
}: {
  header: string;
  description: string;
}) {
  return (
    <section className="bg-white py-32 md:py-48">
      <div className="container mx-auto px-8 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xs tracking-[0.3em] uppercase text-[#cd7400] mb-6 font-light"
        >
          Let&apos;s Work Together
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-light uppercase tracking-wide text-[#353535] mb-6 max-w-2xl"
        >
          {header}
        </motion.h2>
        <div className="w-8 h-px bg-[#cd7400] mb-6" />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-sm md:text-base text-black/60 font-light leading-relaxed max-w-md mb-12"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <SiteButton text="Book an Appointment" href="/contact" type="accent" />
        </motion.div>
      </div>
    </section>
  );
}