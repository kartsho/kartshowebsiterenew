import { motion } from "framer-motion";

import { useTheme } from "../../context/ThemeContext";
import logo from "../../assets/logos/Kartsho K.png";

const PremiumLoader = () => {
  const { isDark } = useTheme();

  const titleClass = isDark
    ? "text-white"
    : "text-[color:var(--text-primary)]";

  const subtitleClass = isDark
    ? "text-gray-400"
    : "text-[color:var(--text-secondary)]";

  const messageClass = isDark
    ? "text-cyan-300"
    : "text-cyan-700";

  const cardClass = isDark
    ? "border-cyan-400/30 bg-white/5 shadow-[0_0_80px_rgba(6,182,212,0.18)]"
    : "border-cyan-500/15 bg-white/70 shadow-[0_0_80px_rgba(15,23,42,0.08)]";

  const ringClass = isDark
    ? "border-cyan-400/30"
    : "border-cyan-500/20";

  const progressClass = isDark
    ? "bg-white/10"
    : "bg-black/[0.04]";

  return (
    <div
      className="
      fixed
      inset-0
      z-[99999]
      overflow-hidden
      bg-[color:var(--page-bg)]
      flex
      items-center
      justify-center
    "
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.1),transparent_30%)]" />

      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
        absolute
        top-[-200px]
        left-[-200px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-cyan-400/15
        blur-[180px]
      "
      />

      <div
        className="
        absolute
        bottom-[-200px]
        right-[-200px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-blue-400/15
        blur-[180px]
      "
      />

      {/* ================= PARTICLES ================= */}

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -1000],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3.2 + i * 0.08,
              repeat: Infinity,
              delay: i * 0.06,
            }}
            className="
              absolute
              w-1
              h-1
              rounded-full
              bg-cyan-400
            "
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "-20px",
            }}
          />
        ))}
      </div>

      {/* ================= CONTENT ================= */}

      <div
        className="
        relative
        z-10
        flex
        flex-col
        items-center
        justify-center
      "
      >
        {/* ================= ROTATING CONTAINER ================= */}

        <div className="relative flex h-44 w-44 items-center justify-center">
          
          {/* OUTER ROTATING BOX */}

          <motion.div
            animate={{
              rotate: 360,
            }}
          transition={{
            repeat: Infinity,
            duration: 7,
            ease: "linear",
          }}
            className={`absolute inset-0 rounded-[42px] border backdrop-blur-3xl ${cardClass}`}
          />

          {/* INNER ROTATING RING */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "linear",
            }}
            className={`absolute inset-4 rounded-[34px] border-2 border-dashed ${ringClass}`}
          />

          {/* STATIC LOGO */}

          <motion.img
            src={logo}
            alt="Kartsho Logo"
            animate={{
              scale: [1, 1.04, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
            }}
            className="
            relative
            z-20

            h-28
            w-28

            rounded-2xl
            bg-transparent
            object-contain
            p-1
            mix-blend-normal
            drop-shadow-[0_0_18px_rgba(255,255,255,0.08)]

            shadow-[0_0_22px_rgba(6,182,212,0.16)]
          "
          />
        </div>

        {/* ================= BRAND ================= */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className={`mt-10 text-5xl md:text-6xl font-black tracking-[0.25em] ${titleClass}`}
        >
          KARTSHO
        </motion.h1>

        {/* ================= SUBTEXT ================= */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.7,
          }}
          className={`mt-4 text-sm md:text-base tracking-[0.35em] uppercase ${subtitleClass}`}
        >
          Engineering Digital Systems
        </motion.p>

        {/* ================= AI BAR ================= */}

        <div
          className={`relative mt-12 h-[7px] w-[320px] overflow-hidden rounded-full ${progressClass}`}
        >
          {/* MOVING LIGHT */}

          <motion.div
            animate={{
              x: ["-100%", "300%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.1,
              ease: "linear",
            }}
            className="
            absolute
            top-0
            left-0

            w-[120px]
            h-full

            bg-gradient-to-r
            from-transparent
            via-cyan-300
            to-transparent

            blur-[2px]
          "
          />

          {/* PROGRESS */}

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 1.6,
              ease: "easeInOut",
            }}
            className="
            absolute
            top-0
            left-0

            h-full

            rounded-full

            bg-gradient-to-r
            from-cyan-500
            to-blue-500
          "
          />
        </div>

        {/* ================= TEXT ================= */}

        <motion.p
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.1,
          }}
          className={`mt-6 text-sm tracking-[0.3em] uppercase ${messageClass}`}
        >
          Initializing Premium Experience...
        </motion.p>
      </div>
    </div>
  );
};

export default PremiumLoader;
