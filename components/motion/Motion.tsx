"use client";

import React from "react";
import { motion, type HTMLMotionProps, type Transition } from "framer-motion";

type MotionProps = HTMLMotionProps<"div"> & {
  children?: React.ReactNode;
  className?: string;
  transition?: Transition;
};

export const FadeIn: React.FC<MotionProps> = ({ children, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
    {...props}
  >
    {children}
  </motion.div>
);

export const ScaleIn: React.FC<MotionProps> = ({ children, ...props }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggerContainer: React.FC<MotionProps> = ({ children, ...props }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
      },
    }}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggerItem: React.FC<MotionProps> = ({ children, ...props }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.5 }}
    {...props}
  >
    {children}
  </motion.div>
);
