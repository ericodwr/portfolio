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
    <>
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
          <li>
            <Link href={'/'}>
              <p>ercdwr</p>
            </Link>
          </li>
          <li className="md:flex justify-around flex">
            <motion.a
              whileHover={{
                borderBottom: '1px solid black',
              }}
              href={'/#work'}
              className="sm:mr-16 mr-6
            "
            >
              <p>Work.</p>
            </motion.a>
            <motion.a
              whileHover={{
                borderBottom: '1px solid black',
                transition: { ease: 'linear', duration: 0.5 },
              }}
              href={'/about'}
            >
              <p>Me.</p>
            </motion.a>
          </li>
        </ul>
      </motion.nav>
      <div className="p-5" />
    </>
  );
};

export default Navigation;
