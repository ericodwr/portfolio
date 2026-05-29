"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { iconData } from "@/app/constants/data";
import {
  leftVariants,
  rightVariants,
  staggerVariants,
} from "@/app/constants/animations";

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [50, 0, 0, -30]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.95, 1, 1, 0.95]
  );

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y, scale }}
      className="will-change-transform"
    >
      <div className="mt-12 px-6 sm:px-10 lg:container xl:px-8">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="grid md:grid-cols-4"
        >
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl col-span-1"
            variants={leftVariants}
          >
            Skills
          </motion.h2>
          <motion.div className="col-span-3">
            <motion.p
              variants={rightVariants}
              className="mt-5 sm:text-xl sm:mt-8 sm:leading-10 md:mt-0 xl:text-2xl xl:leading-10 text-justify"
            >
              With the experience I have as a Developer, these are the tech
              stack skills I currently have.
            </motion.p>
            <motion.div
              variants={staggerVariants}
              className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12 sm:gap-x-12 sm:gap-y-16 mt-12"
            >
              {iconData.map((icon: string, i: number) => {
                return (
                  <motion.div
                    variants={{
                      offscreen: {
                        opacity: 0,
                      },
                      onscreen: {
                        opacity: 1,
                      },
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -10,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                    key={i}
                    className="flex justify-center items-center"
                  >
                    <Image
                      className={`w-10 sm:w-12 lg:w-14 xl:w-auto h-auto ${
                        ["nextjs", "prisma", "nodejs"].includes(icon) ? "dark-invert" : ""
                      }`}
                      src={`/tech/${icon}.svg`}
                      width={0}
                      height={0}
                      alt={icon}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
