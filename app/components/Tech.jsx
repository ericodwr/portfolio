import React from 'react';

// import html from '/techs/html.svg';
import Image from 'next/image';

const techIcons = ['html', 'css', 'js', 'node', 'react', 'redux', 'next'];

const Tech = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <h1 className="sm:text-1xl md:text-3xl lg:text-4xl">Skills:</h1>
        <div className="flex mt-6 w-[15%] justify-center">
          {techIcons.map((icon) => (
            <Image
              key={icon}
              src={`/techs/${icon}.svg`}
              alt={icon}
              height={1000}
              width={1000}
              className="md:w-[40%] w-[50%] sm:mx-3 md:mx-8 mx-1.5"
            />
          ))}
        </div>
      </div>
      <div className="bg-[#FFCC74] p-1 mt-10"></div>
    </>
  );
};

export default Tech;
