'use client';

import { motion } from 'framer-motion';

const Button = () => {
  return (
    <motion.div
      animate={{
        x: 0,
        backgroundColor: '#FFCC74',
        boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
        position: 'fixed',
        transitionEnd: {
          display: 'none',
        },
      }}
    />
  );
};

export default Button;
