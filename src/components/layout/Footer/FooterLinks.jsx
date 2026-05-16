import { motion } from "framer-motion";
import { MoonStar, SunMedium } from "lucide-react";

import { useTheme } from "../../../context/ThemeContext";

const ThemeToggleButton = ({ compact = false }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      aria-label={
        isDark ? "Switch to light mode" : "Switch to dark mode"
      }
      className="
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-[color:var(--border)]
        bg-[color:var(--surface)]
        px-4
        py-2.5
        text-sm
        font-semibold
        text-[color:var(--text-primary)]
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        transition-all
        duration-300
        hover:-translate-y-0.5
      "
      style={
        compact
          ? {
              width: "44px",
              height: "44px",
              padding: 0,
              justifyContent: "center",
            }
          : undefined
      }
    >
      {isDark ? (
        <>
          <SunMedium size={16} />
          {!compact && "Light Mode"}
        </>
      ) : (
        <>
          <MoonStar size={16} />
          {!compact && "Dark Mode"}
        </>
      )}
    </motion.button>
  );
};

export default ThemeToggleButton;
