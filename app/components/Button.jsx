'use client';
import { motion } from 'framer-motion';
const Button = () => {
  return (
    <>
      <motion.button
        className="border border-black py-2 px-4 rounded-full"
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        tap mih
      </motion.button>
    </>
  );
};

export default Button;
