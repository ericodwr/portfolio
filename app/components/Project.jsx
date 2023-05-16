'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';

const Project = ({ data }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.5, duration: 0.5 },
        }}
        className="flex-1"
      >
        <h1 className="sm:text-1xl md:text-3xl lg:text-4xl sm:text-xl lg:hidden sm:pb-5 pb-2">
          {data.title}
        </h1>
        <Image
          src={data.imageProject}
          priority
          height={1000}
          width={1000}
          alt={data.id}
          className="w-[100%] border border-black"
        />
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 1, duration: 0.5 },
          }}
          className="flex justify-between items-center lg:mt-12 mt-4 mb-6"
        >
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            href={`${data.demo}`}
            target="_blank"
          >
            <div className="flex justify-center items-center flex-col">
              <BsFillPlayFill size={'3vh'} />
              <p>Demo</p>
            </div>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            href={`${data.code}`}
            target="_blank"
          >
            <div className="w-[100%] flex justify-center items-center flex-col">
              <AiFillGithub size={'3vh'} />
              <p>Code</p>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 500 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.5, duration: 0.5 },
        }}
        className="flex-1 w-[100%] flex lg:justify-end"
      >
        <div className="lg:w-[75%]">
          <h1 className="sm:text-1xl md:text-3xl lg:text-4xl sm:text-xl lg:block hidden sm:pb-5 pb-2">
            {data.title}
          </h1>
          <p className="text-justify sm:text-base text-xs">
            {data.description}
          </p>
          <div className="mt-4 flex justify-around items-center text-xs">
            {data.tech.map((name, i) => (
              <span
                key={i}
                className="bg-slate-400 py-1 px-2 rounded-full text-slate-700 capitalize"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Project;
