"use client";

import { MonitorCog, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoids hydration mismatch

  return (
    <motion.button
      animate={{ y: 0 }}
      initial={{ y: 100 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md relative hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-background group"
    >
      {theme === "dark" && <Sun size={20} />}
      {theme === "light" && <Moon size={20} />}
      {theme === "system" && <MonitorCog size={20} />}
      <span
        className="absolute pointer-events-none right-1/2 -translate-x-1/2 top-1/2 w-[4.6rem] -translate-y-1/2 text-start group-hover:flex 
            px-1 py-1 text-xs text-text bg-transparent border border-border rounded-md shadow-lg
            transition-opacity duration-300 opacity-0 md:group-hover:opacity-100 "
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </span>
    </motion.button>
  );
}
