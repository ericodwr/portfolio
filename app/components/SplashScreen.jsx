'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const SplashScreen = ({ setLoading }) => {
  const onComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <motion.div className="min-h-screen absolute flex justify-center items-center left-0 right-0 m-auto">
      <motion.img
        className="md:w-[15%] w-[30%]"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.5,
          transition: {
            delay: 0.5,
            duration: 1.5,
          },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 1.5 },
        }}
        // onAnimationComplete={(definition) => {
        //   onComplete();
        // }}
        src={'/logo_2.svg'}
        alt="splash"
      />
      {/* <h1>testing where am i</h1> */}
    </motion.div>
  );
};

export default SplashScreen;
