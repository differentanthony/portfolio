/**
 * ScrollReveal Component
 * Wraps elements to trigger scroll-based reveal animations
 * respects prefers-reduced-motion for accessibility
 */

"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export const ScrollReveal = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  className = "",
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  // Determine initial position based on direction
  const getInitialState = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 40 };
      case "down":
        return { opacity: 0, y: -40 };
      case "left":
        return { opacity: 0, x: -40 };
      case "right":
        return { opacity: 0, x: 40 };
      default:
        return { opacity: 0, y: 40 };
    }
  };

  // Check if user prefers reduced motion
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  // If reduced motion is preferred, skip animations
  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialState()}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : getInitialState()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75], // cubic-bezier for smooth easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
