"use client";

import Image from "next/image";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function AboutSection() {
  const scope = useRef<HTMLDivElement>(null);
  const [scope2, animate] = useAnimate();
  const isInView = useInView(scope2);

  useEffect(() => {
    if (isInView) {
      animate("h2", { opacity: 1, x: 0 }, { duration: 0.3 });
      animate("p", { opacity: 1, x: 0 }, { duration: 0.3 });
      animate("div", { opacity: 1 }, { duration: 0.3, delay: 0 });
    }
  }, [isInView, animate]);

  return (
    <motion.section
      className="my-12 px-6 sm:px-10 lg:container xl:px-8"
      ref={scope2}
      id="about"
    >
      <motion.div className="grid md:grid-cols-4">
        <motion.h2
          initial={{ x: -75, opacity: 0 }}
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl col-span-1"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ x: 75, opacity: 0 }}
          className="mt-5 sm:text-xl sm:mt-8 sm:leading-10 md:mt-0 xl:text-2xl xl:leading-10 text-justify col-span-3"
        >
          Experienced 2 years' working as Full stack Web Developer handling
          multi-case programs and mostly handling Front End side, blending the
          art of design with programming and coding/writing skills to deliver
          the immersive and engaging user experience through efficient desktop
          and mobile web platforms, reliability performance and proactive
          feature optimization. Eager to learn something new, tackle more
          complex problems, and find a creative way to maximize user interface
          and user efficiency.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        className="mt-12 container flex justify-center items-center sm:px-8"
      >
        <Image
          src={"/me.svg"}
          alt="me"
          width={0}
          height={0}
          className="w-auto h-auto"
          priority
        />
      </motion.div>
    </motion.section>
  );
}
