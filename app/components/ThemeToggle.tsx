"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-10 h-10" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-14 h-8 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300"
      aria-label="Toggle Theme"
    >
      <motion.div
        animate={{ x: isDark ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-6 h-6 bg-white dark:bg-yellow-400 rounded-full flex items-center justify-center shadow-md"
      >
        {isDark ? (
          <span className="text-[10px]">🌙</span>
        ) : (
          <span className="text-[10px]">☀️</span>
        )}
      </motion.div>
    </button>
  );
}
