import { motion } from "framer-motion";
import { useTheme } from "../../../context/ThemeContext";

const companies = [
  "Metconnect",
  "vilve",
];

const TrustedCompanies = () => {
  const { isDark } = useTheme();

  return (
    <section
      className="
      relative
      py-24
      overflow-hidden
    "
      style={{
        backgroundColor: isDark ? "#0f172a" : "#f8fafc",
        borderTop: `1px solid ${isDark ? "rgba(148, 163, 184, 0.18)" : "rgba(15, 23, 42, 0.05)"}`,
        borderBottom: `1px solid ${isDark ? "rgba(148, 163, 184, 0.18)" : "rgba(15, 23, 42, 0.05)"}`,
      }}
    >
      {/* ================= TOP GRADIENT ================= */}

      <div
        className="
        absolute
        top-0
        left-0
        w-full
        h-full
        pointer-events-none
      "
        style={{
          background: isDark
            ? "linear-gradient(to bottom, rgba(15, 23, 42, 0.95), transparent, rgba(15, 23, 42, 0.95))"
            : "linear-gradient(to bottom, rgba(255, 255, 255, 0.95), transparent, rgba(255, 255, 255, 0.95))",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
      "
      >
        {/* ================= HEADING ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="
          text-center
          mb-14
        "
        >
          <p
            className="
            text-sm
            uppercase
            tracking-[4px]
            font-semibold
            mb-4
          "
            style={{
              color: isDark ? "#67e8f9" : "#0891b2",
            }}
          >
            Trusted Worldwide
          </p>

          <h2
            className="
            text-3xl
            md:text-5xl
            font-bold
          "
            style={{
              color: isDark ? "#f8fafc" : "#0b0f19",
            }}
          >
            Trusted by Innovative Companies
          </h2>
        </motion.div>

        {/* ================= MARQUEE ================= */}

        <div
          className="
          relative
          overflow-hidden
        "
        >
          {/* LEFT FADE */}

          <div
            className="
            absolute
            left-0
            top-0
            z-20
            h-full
            w-32
          "
            style={{
              background: isDark
                ? "linear-gradient(to right, #0f172a, transparent)"
                : "linear-gradient(to right, #f8fafc, transparent)",
            }}
          />

          {/* RIGHT FADE */}

          <div
            className="
            absolute
            right-0
            top-0
            z-20
            h-full
            w-32
          "
            style={{
              background: isDark
                ? "linear-gradient(to left, #0f172a, transparent)"
                : "linear-gradient(to left, #f8fafc, transparent)",
            }}
          />

          {/* MARQUEE TRACK */}

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
            className="
            flex
            gap-6
            sm:gap-12
            w-max
          "
          >
            {[...companies, ...companies].map(
              (company, index) => (
                <div
                  key={index}
                  className="
                  group

                  flex
                  items-center
                  justify-center

                  min-w-[160px]
                  h-[96px]
                  sm:min-w-[220px]
                  sm:h-[120px]

                  rounded-3xl

                  border

                  backdrop-blur-xl

                  transition-all
                  duration-500

                  hover:-translate-y-2
                  hover:shadow-[0_20px_50px_rgba(6,182,212,0.12)]
                "
                  style={{
                    backgroundColor: isDark
                      ? "rgba(15, 23, 42, 0.72)"
                      : "rgba(255, 255, 255, 0.7)",
                    borderColor: isDark
                      ? "rgba(148, 163, 184, 0.18)"
                      : "rgba(15, 23, 42, 0.05)",
                    boxShadow: isDark
                      ? "0 10px 40px rgba(0, 0, 0, 0.25)"
                      : "0 10px 40px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <h3
                    className="
                    text-lg
                    sm:text-2xl
                    font-bold

                    transition-all
                    duration-500

                    group-hover:text-cyan-600
                  "
                    style={{
                      color: isDark ? "#cbd5e1" : "#94a3b8",
                    }}
                  >
                    {company}
                  </h3>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
