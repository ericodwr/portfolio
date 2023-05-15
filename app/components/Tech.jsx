'use client';

import React from 'react';
import { motion } from 'framer-motion';
// import html from '/techs/html.svg';
import Image from 'next/image';

const techIcons = ['html', 'css', 'js', 'node', 'react', 'redux', 'next'];

const Tech = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1, duration: 0.5 },
        }}
        exit={{ opacity: 0, y: 20 }}
        className="flex justify-center items-center flex-col"
      >
        <h1 className="sm:text-1xl md:text-3xl lg:text-4xl">Skills:</h1>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 1.5, duration: 0.7 },
          }}
          exit={{ opacity: 0, y: 20 }}
          className="flex mt-6 w-[15%] justify-center"
        >
          {techIcons.map((icon) => (
            <Image
              key={icon}
              src={`/techs/${icon}.svg`}
              alt={icon}
              height={1000}
              width={1000}
              className="md:w-[30%] lg:w-[30%] xl:w-[25%] sm:w-[30%] w-[40%] sm:mx-3 md:mx-8 mx-1.5 hover:scale-105 hover:animate-spin"
            />
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 2, duration: 1 },
        }}
        className="bg-[#FFCC74] p-1 mt-10"
      ></motion.div>
    </>
  );
};

export default Tech;
