import React from 'react';

import projectsData from '../../data';
import Image from 'next/image';
import Button from '@/app/components/Button';

const page = ({ params }) => {
  const data = projectsData.find((data) => data.id == params.id);
  return (
    <div className="min-h-screen flex justify-between items-center">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <Image
            src={data.imageProject}
            priority
            height={600}
            width={600}
            alt={data.id}
            className="w-[100%] border border-black"
          />
          <div className="flex justify-between items-center mt-12">
            <button>Demo</button>
            <button>Code</button>
            <Button />
          </div>
        </div>
        <div className="flex-1 w-[100%] flex justify-end">
          <div className="w-[75%]">
            <h1 className="sm:text-1xl md:text-3xl lg:text-4xl pb-5">
              {data.title}
            </h1>
            <p className="text-justify text-base">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
