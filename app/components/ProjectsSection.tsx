"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/app/constants/data";
import {
  leftVariants,
  rightVariants,
} from "@/app/constants/animations";
import { Project } from "@/app/types";

export function ProjectsSection() {
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
    [60, 0, 0, -40]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.9, 1, 1, 0.95]
  );

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y, scale }}
      className="mt-32 will-change-transform"
      id="projects"
    >
      <div className="mt-12 sm:px-10 lg:container xl:px-8">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="grid px-6 sm:px-0 md:grid-cols-4"
        >
          <motion.h2
            variants={leftVariants}
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl col-span-1"
          >
            Projects Result
          </motion.h2>
          <motion.p
            variants={rightVariants}
            className="tsm:text-xl sm:mt-8 sm:leading-10 md:mt-0 xl:text-2xl xl:leading-10 text-justify col-span-3"
          >
            Here's some projects that i've been develop lately.
          </motion.p>
        </motion.div>

        <motion.div className="my-20">
          {projects.map((project: Project[], i: number) => {
            return (
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                key={i}
                className="flex flex-col items-center md:items-end md:flex-row md:justify-between md:mb-20"
              >
                {project.map((p: Project, j: number) => {
                  return (
                    <motion.div
                      variants={{
                        offscreen: {
                          opacity: 0,
                        },
                        onscreen: {
                          opacity: 1,
                          transition: {
                            duration: 0.3,
                            delay: 0,
                            ease: "easeInOut",
                          },
                        },
                      }}
                      key={j}
                      className={`flex flex-col md:justify-end w-10/12 mb-10 md:m-0 ${
                        p.large ? "md:w-1/2" : "md:w-[40%]"
                      }`}
                    >
                      <Image
                        src={p.imgUrl}
                        alt={p.title}
                        width={0}
                        height={0}
                        className="h-auto w-auto"
                      />
                      <div className="flex justify-between items-center mt-6">
                        <div className="flex flex-col justify-between">
                          <motion.h2
                            variants={{
                              offscreen: {
                                opacity: 0,
                                y: -75,
                              },
                              onscreen: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                  duration: 0.4,
                                  delay: 0,
                                  ease: [0, 0.71, 0.2, 1.01],
                                },
                              },
                            }}
                            className="font-bold md:text-xl lg:text-2xl xl:text-3xl"
                          >
                            {p.title}
                          </motion.h2>
                          <motion.div
                            variants={{
                              offscreen: {
                                opacity: 0,
                                y: 75,
                              },
                              onscreen: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                  duration: 0.4,
                                  delay: 0,
                                  ease: [0, 0.71, 0.2, 1.01],
                                },
                              },
                            }}
                            className="flex gap-2 sm:gap-5"
                          >
                            {p.tech.map((t: string, k: number) => {
                              return (
                                <p key={k} className="text-sm">
                                  {t}
                                </p>
                              );
                            })}
                          </motion.div>
                        </div>
                        <motion.a
                          variants={{
                            offscreen: {
                              opacity: 0,
                              x: -75,
                            },
                            onscreen: {
                              opacity: 1,
                              x: 0,
                              transition: {
                                duration: 0.3,
                                delay: 0,
                                ease: [0, 0.71, 0.2, 1.01],
                              },
                            },
                          }}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.8 }}
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={"/arrow.svg"}
                            alt="arrow"
                            width={0}
                            height={0}
                            className="w-[2rem] sm:w-[3rem] lg:w-auto h-auto dark-invert"
                          />
                        </motion.a>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
