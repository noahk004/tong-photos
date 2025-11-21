"use client";

import { motion } from "motion/react";
import ServicePane from "./ServicePane";
import Footer from "../Footer";

type Service = {
  _id: string;
  slug: { current: string };
  name: string;
  service_image: { asset: { url: string } };
};

export default function Services({
  services,
  site_title,
  email_address,
  instagram_url,
}: {
  services: Service[];
  site_title: string;
  email_address: string;
  instagram_url: string;
}) {
  const isSingleService = services.length === 1;

  return (
    <div className="py-4 h-full overflow-y-auto pt-32 pb-12 md:pt-44">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl mb-16"
        >
          SERVICES
        </motion.h1>

        <div
          className={`grid grid-cols-1 ${isSingleService ? "justify-items-center" : "md:grid-cols-2"} gap-8 mb-40 md:mb-64`}
        >
          {services.map((service: Service, index: number) => (
            <motion.div
              key={service.slug.current}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <ServicePane
                serviceImage={service.service_image.asset.url}
                serviceName={service.name}
                serviceSlug={service.slug.current}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="absolute bottom-20 md:bottom-24 left-0 right-0 container mx-auto"
        >
          <Footer
            site_title={site_title}
            email_address={email_address}
            instagram_url={instagram_url}
          />
        </motion.div>
      </div>
    </div>
  );
}
