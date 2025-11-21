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
    <div className="py-4">
      <div className="container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 sm:gap-8 md:gap-28">
          <motion.div
            className="col-span-1 flex gap-4 md:gap-8 justify-center items-end"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <Image
                src={imgLandscape}
                alt={header}
                width={80}
                height={80}
                className="w-40 md:w-64 border-4 border-white shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <Image
                src={imgPortrait}
                alt={header}
                width={80}
                height={80}
                className="w-28 md:w-44 mb-4 md:mb-8 border-4 border-white shadow-xl"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="col-span-1 flex flex-col justify-center items-start md:max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h2
              className="text-lg md:text-2xl text-black mb-2 md:mb-6 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              {header.toUpperCase()}
            </motion.h2>
            <motion.p
              className="text-sm md:text-md text-black/90 drop-shadow-md mb-12 font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <SiteButton text="View Services" href="/services" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
