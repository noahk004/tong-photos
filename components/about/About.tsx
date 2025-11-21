"use client";

import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

interface WindowWithScrollContainer extends Window {
  __currentScrollContainer?: HTMLElement;
}

export default function About({
  header,
  body_text,
}: {
  header: string;
  body_text: PortableTextBlock[];
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const windowWithScroll = window as WindowWithScrollContainer;

    // Store ref - this component is only mounted when it's the current section
    if (scrollContainer) {
      windowWithScroll.__currentScrollContainer = scrollContainer;
    }
    return () => {
      if (windowWithScroll.__currentScrollContainer === scrollContainer) {
        delete windowWithScroll.__currentScrollContainer;
      }
    };
  }, []);

  return (
    <div className="py-4 h-full overflow-y-auto" ref={scrollContainerRef}>
      <div className="container mx-auto px-4 min-h-screen flex flex-col items-start">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-2xl md:text-4xl mb-8 mt-28 md:mb-32 md:mt-64"
        >
          {header.toUpperCase()}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-sm md:text-base text-gray-700 leading-relaxed pb-32"
        >
          <PortableText
            value={body_text}
            components={{
              block: {
                normal: ({ children }) => <p className="mb-4">{children}</p>,
              },
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
