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
  return (
    <div className="bg-background-2 py-4">
      <div className="container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
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
              <SiteButton text="See Testimonials" href="/testimonials" />
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden md:block md:w-full relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="grid grid-cols-3 auto-rows-[110px] gap-2 p-8">
              {/* Row 1 */}
              <motion.div
                className="col-span-2 row-span-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              >
                <Image
                  src={images[0]}
                  alt={header}
                  className="w-full h-full object-cover"
                  width={400}
                  height={150}
                />
              </motion.div>
              <motion.div
                className="col-span-1 row-span-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              >
                <Image
                  src={images[1]}
                  alt={header}
                  className="w-full h-full object-cover"
                  width={200}
                  height={250}
                />
              </motion.div>

              {/* Row 2 */}
              <motion.div
                className="col-span-1 row-span-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              >
                <Image
                  src={images[2]}
                  alt={header}
                  className="w-full h-full object-cover"
                  width={200}
                  height={250}
                />
              </motion.div>
              <motion.div
                className="col-span-1 row-span-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              >
                <Image
                  src={images[3]}
                  alt={header}
                  className="w-full h-full object-cover"
                  width={200}
                  height={150}
                />
              </motion.div>

              {/* Row 3 */}
              <motion.div
                className="col-span-1 row-span-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              >
                <Image
                  src={images[4]}
                  alt={header}
                  className="w-full h-full object-cover"
                  width={200}
                  height={150}
                />
              </motion.div>
              <motion.div
                className="col-span-1 row-span-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              >
                <Image
                  src={images[5]}
                  alt={header}
                  className="w-full h-full object-cover"
                  width={200}
                  height={150}
                />
              </motion.div>

              {/* Row 4 */}
              <motion.div
                className="col-span-1 row-span-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
              >
                <Image
                  src={images[6]}
                  alt={header}
                  className="w-full h-full object-cover"
                  width={200}
                  height={150}
                />
              </motion.div>
              <motion.div
                className="col-span-2 row-span-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
              >
                <Image
                  src={images[7]}
                  alt={header}
                  className="w-full h-full object-cover"
                  width={400}
                  height={150}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
