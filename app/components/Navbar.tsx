"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <div className="bg-[#E6E6E8] absolute w-full">
      <nav className="container px-6 sm:px-0 flex justify-between items-center py-6">
        <motion.div
          initial={{ opacity: 0, x: -75 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.3,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Image src={"/logo.svg"} alt="logo" width={36} height={36} priority />
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, x: 75 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.3,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex gap-14"
        >
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </motion.ul>
      </nav>
    </div>
  );
}
