'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';

// import { FaBars } from 'react-icons/fa';
// import { HiX } from 'react-icons/hi';

const Navigation = () => {
  // const [show, setShow] = useState(!false);

  /* transition duration-1000 animate-shows */
  return (
    <motion.nav
      initial={{ opacity: 0, y: -200 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.5 },
      }}
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
      </ul>
    </motion.nav>
  );
};

export default Navigation;
