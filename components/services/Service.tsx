// Service.tsx
"use client";

import { motion } from "motion/react";
import SiteButton from "../SiteButton";
import Image from "next/image";

type ServiceData = {
  name: string;
  slug: { current: string };
  service_description: string;
  gallery?: Array<{ asset: { url: string } }> | null;
};

export default function Service({ service }: { service: ServiceData }) {
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
            Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-light uppercase tracking-wide text-white"
          >
            {service.name}
          </motion.h1>
        </div>
      </div>

      {/* Amber rule */}
      <div className="h-[3px] bg-[#cd7400]" />

      {/* Content */}
      <div className="container mx-auto px-8 py-20 md:py-28">
        <div className="max-w-2xl mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-base text-black/70 font-light leading-[1.9] mb-10"
          >
            {service.service_description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          >
            <SiteButton
              text="Book an Appointment"
              href={`/contact?service=${service.slug.current}`}
            />
          </motion.div>
        </div>

        {/* Gallery */}
        {service.gallery && service.gallery.length > 0 && (
          <div className="columns-1 md:columns-2 gap-6 mt-20">
            {service.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                className="mb-6 break-inside-avoid overflow-hidden"
              >
                <Image
                  src={image.asset.url}
                  alt={`${service.name} ${index + 1}`}
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}