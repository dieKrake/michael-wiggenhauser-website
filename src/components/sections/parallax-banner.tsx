"use client";

import { FC, ReactNode, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Container from "@/components/layout/container";
import Heading from "@/components/ui/heading";

interface ParallaxBannerProps {
  id?: string;
  src: string;
  alt: string;
  heading: string;
  children: ReactNode;
  priority?: boolean;
}

const revealContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const revealItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const ParallaxBanner: FC<ParallaxBannerProps> = ({
  id,
  src,
  alt,
  heading,
  children,
  priority,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["-12%", "12%"]
  );

  return (
    <section
      ref={sectionRef}
      id={id}
      className="relative overflow-hidden py-24 text-white sm:py-32 lg:py-40"
    >
      {/* Parallax-Bild (überdimensioniert, damit beim Verschieben keine Kanten sichtbar werden) */}
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 top-[-14%] h-[128%] will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-[center_60%]"
          fetchPriority={priority ? "high" : "auto"}
          priority={priority}
          sizes="100vw"
        />
      </motion.div>

      {/* Eleganter, mehrschichtiger Verlaufs-Overlay statt flachem Schwarz */}
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/55 to-black/30" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_50%,transparent_30%,rgba(0,0,0,0.45)_100%)]" />

      <Container className="relative z-10">
        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div variants={revealItem}>
            <Heading as="h2" className="text-white lg:text-center">
              {heading}
            </Heading>
          </motion.div>
          <motion.div variants={revealItem}>
            <p className="mt-4 max-w-2xl text-lg text-white/90 lg:mx-auto lg:text-center">
              {children}
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ParallaxBanner;
