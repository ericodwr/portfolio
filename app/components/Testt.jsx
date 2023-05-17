'use client';

import { motion, AnimatePresence } from 'framer-motion';

import React, { useState } from 'react';

const Testt = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="min-h-screen bg-slate-200 flex justify-center items-center flex-col">
      <h1>framer motion exit enter</h1>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: -100 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{
              duration: 1,
            }}
            className="p-5 bg-slate-600"
          >
            test
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={() => setShow(!show)}>TEST ME</button>
    </div>
  );
};

export default Testt;
