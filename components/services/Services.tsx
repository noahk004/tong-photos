// Services.tsx
"use client";

import { motion } from "motion/react";
import ServicePane from "./ServicePane";

type Service = {
  _id: string;
  slug: { current: string };
  name: string;
  service_image: { asset: { url: string } };
};

export default function Services({ services }: { services: Service[] }) {
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
            What I Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-light uppercase tracking-wide text-white"
          >
            Services
          </motion.h1>
        </div>
      </div>

      {/* Amber rule */}
      <div className="h-[3px] bg-[#cd7400]" />

      {/* Grid */}
      <div className="container mx-auto px-8 py-20 md:py-28">
        <div
          className={`grid grid-cols-1 gap-6 ${services.length === 1
              ? "max-w-md mx-auto"
              : "md:grid-cols-2"
            }`}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.slug.current}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <ServicePane
                serviceImage={service.service_image.asset.url}
                serviceName={service.name}
                serviceSlug={service.slug.current}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}