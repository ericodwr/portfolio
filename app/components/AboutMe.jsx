'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5, duration: 0.5 },
        }}
        exit={{ opacity: 0, x: 20 }}
      >
        <Image src={'/about.svg'} height={600} width={600} alt="about" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { delay: 1, duration: 0.5 },
        }}
        exit={{ opacity: 0, x: 20 }}
        className="flex flex-col justify-between items-start"
      >
        <h1 className="mb-6 sm:text-1xl md:text-3xl lg:text-4xl text-xl">
          Hi, I'm Erico
        </h1>
        <p className="my-6 text-justify sm:text-base text-xs ">
          I am Front End Developer from Indonesia and specialize in Javascript,
          React Js. Currently Undergraduate at UPN Veteran Jakarta Majoring
          Information Systems. Rapid learner who eager to grow as a developer. I
          am flexible person who can communicate and adapt easily with others, i
          am looking for new experience and oppoturnities to expand my knowledge
          and my relation.
        </p>
        <p className="text-justify sm:text-base text-xs">
          I've been learning about Front End Developer since year and a half ago
          from many resources, such as online courses, e-book, video content
          from front end expert. I had experienced internship as Software
          Developer in a Software House Company with 5 months contract last
          year, since the internship contract finished, i continue to learn more
          about Front End Developer while looking for more internship to gain my
          experiences.
        </p>
        <p className="my-6 text-justify sm:text-base text-xs">
          Looking forward for more developer skills such as Full Stack
          Developer, Software Developer, Mobile App Developer, etc. I spend my
          time reading books, learning new tech that useful for me, and
          exploring places. Other times, I’m working on becoming better version
          of myself everyday.
        </p>
      </motion.div>
    </>
  );
};

export default AboutMe;
