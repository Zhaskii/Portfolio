"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { CSSProperties, PointerEvent, ReactNode } from "react";

export function MotionSurface({
  children,
  className,
  delay = 0,
  strength = 4,
}: {
  children: ReactNode;
  className: string;
  delay?: number;
  strength?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const rotateXTarget = useMotionValue(0);
  const rotateYTarget = useMotionValue(0);
  const rotateX = useSpring(rotateXTarget, { stiffness: 180, damping: 22 });
  const rotateY = useSpring(rotateYTarget, { stiffness: 180, damping: 22 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    rotateXTarget.set((0.5 - y) * strength);
    rotateYTarget.set((x - 0.5) * strength);
    event.currentTarget.style.setProperty("--pointer-x", `${x * 100}%`);
    event.currentTarget.style.setProperty("--pointer-y", `${y * 100}%`);
  };

  const resetTilt = () => {
    rotateXTarget.set(0);
    rotateYTarget.set(0);
  };

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 0, y: 38, filter: "blur(9px)" }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -5% 0px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.9,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      style={
        {
          rotateX,
          rotateY,
          transformPerspective: 1200,
          transformStyle: "preserve-3d",
          "--pointer-x": "50%",
          "--pointer-y": "50%",
        } as CSSProperties
      }
    >
      {children}
    </motion.div>
  );
}
