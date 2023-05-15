import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import projectsData from '../data';

const Projects = () => {
  return (
    <>
      <div id="work" className="min-h-screen md:mt-20 mt-10 flex-col">
        <h1 className="sm:text-2xl md:text-3xl lg:text-4xl md:mb-14 mb-6">
          Selected Projects :
        </h1>
        <div className="grid gap-4 xl:gap-x-60 grid-cols-1 md:grid-cols-2 grid-rows-1 w-[100%] justify-items-center">
          {projectsData.map((data, i) => (
            <div key={i}>
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
