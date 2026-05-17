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
            priority
          />
        </div>
      </div>
      <section className="bg-[#E6E6E8] h-screen flex items-center justify-center">
        <div className="container px-10 text-[#141010]">
          <motion.h1
            initial={{ opacity: 0, y: -75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0,
              ease: "easeInOut",
            }}
            className="text-center leading-normal text-4xl  sm:text-5xl sm:leading-normal md:text-7xl md:leading-normal lg:text-8xl lg:leading-normal xl:text-9xl xl:leading-normal"
          >
            Creative Fullstack Developer
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1,
              ease: "easeInOut",
            }}
            className="text-center md:text-2xl text-xl mt-12"
          >
            Hi, My name is Erico Dwi and I'am Fullstack Developer
          </motion.h3>
        </div>
      </section>
    </>
  );
}
