'use client'

import { useTheme } from 'next-themes'
import { FiMoon, FiSun } from 'react-icons/fi'
import { motion } from "framer-motion";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <SliderToggle theme={theme} setTheme={setTheme} />
    )
}

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-1 md:py-1.5 transition-colors relative z-10";

const SliderToggle = ({ theme, setTheme }: { theme: string | undefined; setTheme: (theme: string) => void }) => {
    return (
      <div className="relative flex w-fit items-center rounded-full">
        <button
          className={`${TOGGLE_CLASSES} ${
            theme === "light" ? "text-white" : "text-slate-300"
          }`}
          onClick={() => {
            setTheme("light");
          }}
        >
  <FiSun className="relative z-10 text-lg md:text-sm" />
  <span className="relative z-10">Light</span>

        </button>
        <button
          className={`${TOGGLE_CLASSES} ${
              theme === "dark" ? "text-white" : "text-slate-800"
            }`}
          onClick={() => {
              setTheme("dark");
            }}
        >
          <FiMoon className="relative z-10 text-lg md:text-sm" />
          <span className="relative z-10">Dark</span>
        </button>
        <div
          className={`absolute inset-0 z-0 p-0 md:py-2 flex ${
            theme === "dark" ? "justify-end" : "justify-start"
          }`}
        >
          <motion.span
            layout
            transition={{ type: "spring", damping: 15, stiffness: 250 }}
            className="h-full w-1/2 rounded-full border shadow-lg dark:bg-violet-900 dark:border-white/30 border-black/10 bg-amber-500"
          />
        </div>
      </div>
    );
};
