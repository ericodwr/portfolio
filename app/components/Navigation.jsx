'use client';

import Link from 'next/link';

// import { useEffect, useState } from 'react';

// import { FaBars } from 'react-icons/fa';
// import { HiX } from 'react-icons/hi';

const Navigation = () => {
  // const [show, setShow] = useState(!false);

  return (
    <>
      {/* transition duration-1000 animate-shows */}
      <nav
        className={`bg-inherit lg:text-2xl md:text-xl w-[100%]
        `}
      >
        <ul className=" flex justify-between sm:p-5 pt-2">
          <div>
            <Link href={'/'}>
              <li>ercdwr</li>
            </Link>
          </div>
          <div className="md:flex justify-around flex">
            <Link
              passHref={true}
              scroll={false}
              href={'/#work'}
              className="sm:mr-16 mr-6 hover:border-b-2 hover:border-black transition duration-1000 ease-in-out"
            >
              <li>Work.</li>
            </Link>
            <Link
              href={'/about'}
              className="hover:border-b-2 hover:border-black transition duration-1000 ease-in-out"
            >
              <li>Me.</li>
            </Link>
          </div>
          {/* <div className="md:hidden cursor-pointer">
            {show ? <HiX /> : <FaBars />}
          </div> */}
        </ul>
      </nav>
      {/* {show && (
        <div className="h-[94%] fixed w-[100%] bg-white flex flex-col justify-between items-center">
          <div />
          <div>
            <ul className="flex flex-col justify-around items-center">
              <li className="mb-[100px]">
                <Link href={'/about'} className="hover:border-b-2 border-black">
                  some of my Work.
                </Link>
              </li>
              <li>
                <Link
                  href={'/projects'}
                  className="hover:border-b-2 border-black"
                >
                  About Me.
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h1>some of linked</h1>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Navigation;
