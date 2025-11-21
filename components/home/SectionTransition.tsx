"use client";

import { useEffect, useRef, useState, Children } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSection } from "./SectionContext";

interface SectionTransitionProps {
  children: React.ReactNode;
}

export default function SectionTransition({
  children,
}: SectionTransitionProps) {
  const { currentSection, setCurrentSection } = useSection();
  const childrenArray = Children.toArray(children);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);
  const [isInitialMount, setIsInitialMount] = useState(true);

  useEffect(() => {
    const changeSection = (direction: "up" | "down") => {
      if (isScrolling.current) return;

      isScrolling.current = true;

      if (direction === "down") {
        setCurrentSection(
          Math.min(currentSection + 1, childrenArray.length - 1)
        );
      } else {
        setCurrentSection(Math.max(currentSection - 1, 0));
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    };

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;

      // Check if current section has a scrollable container
      const windowWithScroll = window as Window & {
        __currentScrollContainer?: HTMLElement;
      };
      const scrollContainer = windowWithScroll.__currentScrollContainer;

      if (scrollContainer) {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
        const isAtTop = scrollTop === 0;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1; // Allow 1px tolerance

        // If scrolling down and not at bottom, allow normal scroll
        if (e.deltaY > 20 && !isAtBottom) {
          return; // Let the container handle scrolling
        }

        // If scrolling up and not at top, allow normal scroll
        if (e.deltaY < -20 && !isAtTop) {
          return; // Let the container handle scrolling
        }
      }

      e.preventDefault();

      if (e.deltaY > 20) {
        changeSection("down");
      } else if (e.deltaY < -20) {
        changeSection("up");
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling.current) return;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        changeSection("down");
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        changeSection("up");
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling.current) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          changeSection("down");
        } else {
          changeSection("up");
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [childrenArray.length, currentSection, setCurrentSection]);

  useEffect(() => {
    // After first render, disable initial animation for subsequent transitions
    const timer = setTimeout(() => {
      setIsInitialMount(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      <AnimatePresence initial={isInitialMount}>
        <motion.div
          key={currentSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {childrenArray[currentSection]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
