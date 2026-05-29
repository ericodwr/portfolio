"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <>
      <div id={"globalLoader"}>
        <div className="loader animate-pulse">
          <Image
            src={"/logo.svg"}
            alt="splash"
            width={150}
            height={150}
            className="dark-invert"
            priority
          />
        </div>
      </div>
      <section className="bg-[var(--background)] h-screen flex items-center justify-center transition-colors duration-300">
        <div className="container px-10 text-[var(--foreground)] transition-colors duration-300">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2,
            }}
            className="text-center leading-normal text-4xl  sm:text-5xl sm:leading-normal md:text-7xl md:leading-normal lg:text-8xl lg:leading-normal xl:text-9xl xl:leading-normal"
          >
            Creative Fullstack Developer
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.5,
            }}
            className="text-center md:text-2xl text-xl mt-12"
          >
            Hi, My name is Erico Dwi and I'm a Fullstack Developer
          </motion.h3>
        </div>
      </section>
    </>
  );
}
