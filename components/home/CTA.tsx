"use client";

import { motion } from "motion/react";
import SiteButton from "../SiteButton";
import Footer from "../Footer";

export default function CTA({
  header,
  description,
  site_title,
  email_address,
  instagram_url,
}: {
  header: string;
  description: string;
  site_title: string;
  email_address: string;
  instagram_url: string;
}) {
  return (
    <>
      <div className="py-4">
        <div className="container mx-auto px-4 h-screen flex flex-col items-center justify-center relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl text-black mb-4 drop-shadow-lg"
          >
            {header}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-sm md:text-md text-black/90 drop-shadow-md font-light"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex gap-3 my-8"
          >
            <div className="rounded-full bg-black w-[6px] h-[6px]"></div>
            <div className="rounded-full bg-black w-[6px] h-[6px]"></div>
            <div className="rounded-full bg-black w-[6px] h-[6px]"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="flex justify-center mb-10"
          >
            <SiteButton
              text="Book an Appointment"
              href="/contact"
              type="accent"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="absolute bottom-20 md:bottom-24 left-0 right-0"
          >
            <Footer
              site_title={site_title}
              email_address={email_address}
              instagram_url={instagram_url}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
