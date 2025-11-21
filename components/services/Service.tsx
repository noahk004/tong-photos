"use client";

import { motion } from "motion/react";
import SiteButton from "../SiteButton";
import Image from "next/image";
import Footer from "../Footer";

type ServiceData = {
  name: string;
  slug: {
    current: string;
  };
  service_description: string;
  gallery?: Array<{
    asset: {
      url: string;
    };
  }> | null;
};

export default function Service({
  service,
  site_title,
  email_address,
  instagram_url,
}: {
  service: ServiceData;
  site_title: string;
  email_address: string;
  instagram_url: string;
}) {
  return (
    <div className="py-4 h-full overflow-y-auto pt-40 pb-12 md:pt-60">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl mb-16"
        >
          {service.name.toUpperCase()}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mb-16 md:max-w-2/3"
        >
          {service.service_description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <SiteButton
            text="Book an Appointment"
            href={`/contact?service=${service.slug.current}`}
          />
        </motion.div>
        <div className="mb-64">
          {service.gallery && service.gallery.length > 0 && (
            <div className="columns-1 md:columns-2 gap-8 mt-16">
              {service.gallery.map(
                (image: { asset: { url: string } }, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    className="mb-8 break-inside-avoid"
                  >
                    <Image
                      src={image.asset.url}
                      alt={service.name}
                      width={800}
                      height={800}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                )
              )}
            </div>
          )}
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
