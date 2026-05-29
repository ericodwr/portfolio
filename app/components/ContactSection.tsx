"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { contactsData } from "@/app/constants/data";
import { Contact } from "@/app/types";

export function ContactSection() {
  return (
    <section className="my-28" id="contact">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="mt-12 container px-8"
      >
        <motion.h1
          variants={{
            offscreen: {
              opacity: 0,
              y: -50,
            },
            onscreen: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
              },
            },
          }}
          className="leading-normal text-3xl sm:text-5xl sm:leading-normal md:text-6xl md:leading-normal lg:text-7xl lg:leading-normal xl:text-8xl xl:leading-normal text-center"
        >
          Unleash Creativity: Your Gateway to Collaboration
        </motion.h1>

        <motion.div className="flex justify-center items-center flex-col gap-8 mt-10">
          <motion.div
            variants={{
              offscreen: {
                opacity: 0,
                y: 30,
              },
              onscreen: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.2,
                },
              },
            }}
            className="flex justify-center items-center gap-10"
          >
            {contactsData.map((data: Contact, i: number) => {
              return (
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  key={i}
                >
                  <a href={data.link} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={`/contacts/${data.imgUrl}.svg`}
                      alt={data.imgUrl}
                      width={0}
                      height={0}
                      className={`w-8 md:w-auto h-auto ${data.imgUrl === 'github' ? 'dark-invert' : ''}`}
                    />
                  </a>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.button
            variants={{
              offscreen: {
                opacity: 0,
                y: 30,
              },
              onscreen: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.4,
                },
              },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-36 h-9 sm:w-40 sm:h-10 md:w-44 md:h-12 lg:w-48 lg:h-14 bg-[var(--foreground)] text-[var(--background)] rounded-lg transition-colors duration-300"
          >
            <a href="mailto:erikodwirosadi12@gmail.com">Contact Me</a>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
