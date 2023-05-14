import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <main className="flex h-[70vh] w-[100%] items-center md:justify-between justify-center md:flex-row flex-col">
      <div className=" w-[100%] flex md:justify-normal justify-center">
        <div className="flex md:justify-normal justify-center">
          <Image
            priority
            src={'/me.svg'}
            alt="me"
            width={2000}
            height={2000}
            className="border lg:w-[40%] sm:w-[40%] md:w-[60%] w-[40%] border-black"
          />
        </div>
      </div>
      <div className="flex flex-col md:justify-between justify-center h-[30vh] md:ml-12 items-start">
        <h1 className="sm:text-1xl md:text-3xl lg:text-4xl text-lg">
          FRONT END DEVELOPER
        </h1>
        <p className="lg:text-2xl sm:text-lg text-sm md:m-0 ">
          My name Erico Dwi and I'm Front End Developer whom specialist on React
          JS.
        </p>
        <Link
          href={'#work'}
          className="lg:text-2xl text-lg border-b-2 md:m-0 mt-5 border-black hover:text-[#FFCC74] hover:border-[#FFCC74] transition duration-1000 ease-in-out"
        >
          Here's some of my projects
        </Link>
      </div>
    </main>
  );
};

export default Hero;
