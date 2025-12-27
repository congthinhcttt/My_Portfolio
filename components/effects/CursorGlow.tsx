"use client";

import React, { useEffect } from "react";
import { motion, useSpring, useMotionTemplate, useMotionValue } from "framer-motion";

const CursorGlow: React.FC = () => {
  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => {
      mouseX.set(-9999);
      mouseY.set(-9999);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(400px at ${springX}px ${springY}px, rgba(99, 102, 241, 0.18), transparent 80%)`;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 overflow-hidden"
      style={{ background }}
    />
  );
};

export default CursorGlow;
