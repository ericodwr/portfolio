import React from 'react';

import projectsData from '../../data';
import Image from 'next/image';
import Button from '@/app/components/Button';

import { AiFillGithub } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import Link from 'next/link';

// AiFillGithub

const page = ({ params }) => {
  const data = projectsData.find((data) => data.id == params.id);
  return (
    <div className="h-[90vh] flex justify-between items-center">
      <div className="flex justify-between lg:items-start lg:flex-row flex-col">
        <div className="flex-1">
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
          <div className="flex justify-between items-center lg:mt-12 mt-4 mb-6">
            <Link href={`${data.demo}`} target="_blank">
              <div className="flex justify-center items-center flex-col">
                <BsFillPlayFill size={'3vh'} />
                <p>Demo</p>
              </div>
            </Link>
            <Link href={`${data.code}`} target="_blank">
              <div className="w-[100%] flex justify-center items-center flex-col">
                <AiFillGithub size={'3vh'} />
                <p>Code</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex-1 w-[100%] flex lg:justify-end">
          <div className="lg:w-[75%]">
            <h1 className="sm:text-1xl md:text-3xl lg:text-4xl sm:text-xl lg:block hidden sm:pb-5 pb-2">
              {data.title}
            </h1>
            <p className="text-justify sm:text-base text-xs">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
