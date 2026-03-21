"use client";

import { motion } from "motion/react";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

export default function About({
  header,
  body_text,
}: {
  header: string;
  body_text: PortableTextBlock[];
}) {
  return (
    <main className="bg-white">
      {/* Header */}
      <div className="relative h-[40vh] min-h-[260px] bg-[#353535] flex items-end">
        <div className="container mx-auto px-8 pb-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xs tracking-[0.3em] uppercase text-[#ffedd2] mb-4 font-light"
          >
            The Photographer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-light uppercase tracking-wide text-white"
          >
            {header}
          </motion.h1>
        </div>
      </div>

      {/* Amber rule */}
      <div className="h-[3px] bg-[#cd7400]" />

      {/* Body */}
      <div className="container mx-auto px-8 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <PortableText
            value={body_text}
            components={{
              block: {
                normal: ({ children }) => (
                  <p className="text-base text-black/70 font-light leading-[1.9] mb-6">
                    {children}
                  </p>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl md:text-3xl font-light uppercase tracking-wide text-[#353535] mt-12 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-lg font-light uppercase tracking-wide text-[#353535] mt-8 mb-3">
                    {children}
                  </h3>
                ),
              },
              marks: {
                strong: ({ children }) => (
                  <strong className="font-semibold text-[#353535]">{children}</strong>
                ),
                em: ({ children }) => (
                  <em className="italic text-black/50">{children}</em>
                ),
              },
            }}
          />
        </motion.div>
      </div>
    </main>
  );
}