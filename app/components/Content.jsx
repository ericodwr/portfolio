'use client';

import { usePathname } from 'next/navigation';

import React, { useEffect, useState } from 'react';
import SplashScreen from './SplashScreen';
import BackgroundAnimation from './BackgroundAnimation';
import Navigation from './Navigation';
import Footer from './Footer';
import { AnimatePresence } from 'framer-motion';
import Testt from './Testt';

const Content = ({ children }) => {
  const pathName = usePathname();
  const isHome = pathName === '/';
  const [loading, setLoading] = useState(isHome);

  useEffect(() => {
    if (loading) return;
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && <SplashScreen setLoading={setLoading} />}
      </AnimatePresence>
      {!loading && (
        <>
          <div className="fixed w-[89%] h-[100%] -z-10 flex justify-center items-center">
            <div className="w-[100%] lg:w-[50%]">
              <BackgroundAnimation />
            </div>
          </div>

          <Navigation />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default Content;
