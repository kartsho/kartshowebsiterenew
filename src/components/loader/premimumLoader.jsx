import { motion } from "framer-motion";

import logo from "../../../src/assets/logos/Kartsho K.jpeg"

const PremiumLoader = () => {
  return (
    <div
      className="
      fixed
      inset-0
      z-[99999]

      overflow-hidden

      bg-[#030712]

      flex
      items-center
      justify-center
    "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
        absolute
        top-[-200px]
        left-[-200px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-cyan-500/20

        blur-[160px]
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

        bg-blue-500/20

        blur-[160px]
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
              duration: 5 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.2,
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

      {/* ================= MATRIX LINES ================= */}

      <div
        className="
        absolute
        inset-0

        pointer-events-none
      "
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0, 0.3, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + i,
              delay: i * 0.2,
            }}
            className="
              absolute
              top-0
              bottom-0

              w-px

              bg-cyan-400/10
            "
            style={{
              left: `${i * 7}%`,
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
        {/* ================= ROTATING LOGO CONTAINER ================= */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
          className="
          relative

          w-44
          h-44

          rounded-[45px]

          border
          border-cyan-400/30

          bg-white/5
          backdrop-blur-2xl

          flex
          items-center
          justify-center

          shadow-[0_0_100px_rgba(6,182,212,0.35)]
        "
        >
          {/* INNER RING */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "linear",
            }}
            className="
            absolute

            inset-4

            rounded-[35px]

            border-2
            border-dashed
            border-cyan-400/30
          "
          />

          {/* LOGO IMAGE */}

          <motion.img
            src={logo}
            alt="Kartsho Logo"
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="
            w-24
            h-24

            object-cover

            rounded-2xl

            shadow-[0_0_40px_rgba(255,255,255,0.25)]
          "
          />
        </motion.div>

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
            duration: 1,
          }}
          className="
          mt-10

          text-5xl
          md:text-6xl

          font-black

          tracking-[0.25em]

          text-white
        "
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
            duration: 1,
          }}
          className="
          mt-4

          text-gray-400
          text-sm
          md:text-base

          tracking-[0.35em]
          uppercase
        "
        >
          Engineering Digital Systems
        </motion.p>

        {/* ================= AI SCAN BAR ================= */}

        <div
          className="
          relative

          mt-12

          w-[320px]
          h-[7px]

          rounded-full

          overflow-hidden

          bg-white/10
        "
        >
          {/* MOVING LIGHT */}

          <motion.div
            animate={{
              x: ["-100%", "300%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
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
              duration: 4,
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

        {/* ================= LOADING TEXT ================= */}

        <motion.p
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
          mt-6

          text-cyan-300
          text-sm

          tracking-[0.3em]
          uppercase
        "
        >
          Initializing Premium Experience...
        </motion.p>
      </div>
    </div>
  );
};

export default PremiumLoader;