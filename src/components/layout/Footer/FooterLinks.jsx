import { motion } from "framer-motion";
import { MoonStar, SunMedium } from "lucide-react";

import { useTheme } from "../../../context/ThemeContext";

const ThemeToggleButton = ({ compact = false }) => {
  const { isDark, toggleTheme } = useTheme();
  const themeLabel = isDark ? "Dark Mode" : "Light Mode";
  const nextThemeLabel = isDark ? "light mode" : "dark mode";
  const buttonClasses = isDark
    ? `
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-cyan-400/25
        bg-gradient-to-r
        from-slate-950/90
        to-slate-900/80
        px-4
        py-2.5
        text-sm
        font-semibold
        text-white
        shadow-[0_14px_40px_rgba(6,182,212,0.16),0_0_0_1px_rgba(34,211,238,0.08)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-cyan-300/40
        hover:shadow-[0_18px_50px_rgba(6,182,212,0.24),0_0_28px_rgba(6,182,212,0.18)]
      `
    : `
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
        shadow-[0_10px_30px_rgba(15,23,42,0.08)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-[rgba(148,163,184,0.28)]
        hover:shadow-[0_14px_34px_rgba(15,23,42,0.12)]
      `;

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      aria-label={`Switch to ${nextThemeLabel}`}
      title={themeLabel}
      className={buttonClasses}
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
          <MoonStar size={16} />
          {!compact && themeLabel}
        </>
      ) : (
        <>
          <SunMedium size={16} />
          {!compact && themeLabel}
        </>
      )}
    </motion.button>
  );
};

export default ThemeToggleButton;
