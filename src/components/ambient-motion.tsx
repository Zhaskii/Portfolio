"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";

export function AmbientMotion() {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(-500);
  const pointerY = useMotionValue(-500);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 24 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 24 });
  const auraX = useTransform(smoothX, (value) => value - 210);
  const auraY = useTransform(smoothY, (value) => value - 210);
  const cursorX = useTransform(smoothX, (value) => value - 18);
  const cursorY = useTransform(smoothY, (value) => value - 18);
  const [isInteractive, setIsInteractive] = useState(false);
  const [showsRedirect, setShowsRedirect] = useState(false);
  const { scrollYProgress } = useScroll();
  const orbitRotation = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const orbitRotationReverse = useTransform(scrollYProgress, [0, 1], [30, -110]);

  useEffect(() => {
    if (shouldReduceMotion || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      setIsInteractive(
        event.target instanceof Element &&
          Boolean(event.target.closest("a, button")),
      );
      setShowsRedirect(
        event.target instanceof Element &&
          Boolean(event.target.closest('[data-cursor-redirect="true"]')),
      );
    };

    const handlePointerLeave = () => {
      pointerX.set(-500);
      pointerY.set(-500);
      setIsInteractive(false);
      setShowsRedirect(false);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, [pointerX, pointerY, shouldReduceMotion]);

  return (
    <div className="ambient-motion" aria-hidden="true">
      <div className="page-curtain"><span /></div>
      <motion.div className="pointer-aura" style={{ x: auraX, y: auraY }} />
      <motion.div
        className={`cursor-ring ${isInteractive ? "is-interactive" : ""} ${showsRedirect ? "shows-redirect" : ""}`}
        style={{ x: cursorX, y: cursorY }}
      >
        <span>↗</span>
      </motion.div>
      <motion.div className="ambient-orbit ambient-orbit-one" style={{ rotate: orbitRotation }} />
      <motion.div
        className="ambient-orbit ambient-orbit-two"
        style={{ rotate: orbitRotationReverse }}
      />
    </div>
  );
}
