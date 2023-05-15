'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

import { motion } from 'framer-motion';

import projectsData from '../data';

const Projects = () => {
  return (
    <>
      <div id="work" className="min-h-screen md:mt-20 mt-10 flex-col pt-5">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
          className="sm:text-2xl md:text-3xl lg:text-4xl md:mb-14 mb-6"
        >
          Selected Projects :
        </motion.h1>
        <div className="grid gap-4 xl:gap-x-60 grid-cols-1 md:grid-cols-2 grid-rows-1 w-[100%] justify-items-center">
          {projectsData.map((data, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.9,
                transition: { duration: 0.2 },
              }}
              key={i}
            >
              <Link href={`/projects/${data.id}`}>
                <Image
                  src={data.imageProject}
                  width={600}
                  height={600}
                  alt={data.id}
                  className="border border-black p-4"
                  key={i}
                />
              </Link>
              <h1 className="lg:text-2xl md:text-xl text-center capitalize my-2">
                {data.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
