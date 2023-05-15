'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { MdOutlineArrowUpward } from 'react-icons/md';
import Button from './Button';

const contactsData = [
  {
    img: '/contacts/ig.svg',
    link: 'https://www.instagram.com/ericodwr/',
  },
  {
    img: '/contacts/linkedin.svg',
    link: 'https://www.linkedin.com/in/ericodwir/',
  },
  {
    img: '/contacts/github.svg',
    link: 'https://github.com/ericodwr',
  },
];

const handleClick = () => {
  return (document.documentElement.scrollTop = 0);
};

const Contact = () => {
  return (
    <>
      <div className="bg-[#FFCC74] p-1 mt-10"></div>
      <div className="flex justify-center items-center flex-col mt-10">
        <h1 className="sm:text-1xl md:text-3xl lg:text-4xl mb-10">
          Looking for Front End Developer?
        </h1>
        <a
          href={'mailto:erikodwirosadi12@gmail.com'}
          className="mb-10 border border-black py-2 px-4 rounded-full "
        >
          GET IN TOUCH
        </a>
        <div className="flex mt-6 justify-center">
          {contactsData.map((data) => {
            return (
              <Link
                href={data.link}
                passHref
                target="_blank"
                className="mx-6 md:mx-12"
                key={data.link}
              >
                <Image
                  className="md:w-[60%] lg:w-[80%] sm:w-[60%] w-[50%] "
                  src={data.img}
                  alt={data.img}
                  height={600}
                  width={600}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-[100%] relative right-0">
        <button onClick={handleClick} className="absolute right-0">
          <MdOutlineArrowUpward size={'2vh'} />
        </button>
      </div>
    </>
  );
};

export default Contact;
