import { motion } from "framer-motion";

import {
  Atom,
  Database,
  Cloud,
  Layers3,
  Flame,
  Wand2,
  Cpu,
  Box,
} from "lucide-react";

const techStacks = [
  {
    name: "React",
    icon: Atom,
  },

  {
    name: "Next.js",
    icon: Layers3,
  },

  {
    name: "Node.js",
    icon: Cpu,
  },

  {
    name: "MongoDB",
    icon: Database,
  },

  {
    name: "AWS",
    icon: Cloud,
  },

  {
    name: "Docker",
    icon: Box,
  },

  {
    name: "GSAP",
    icon: Wand2,
  },

  {
    name: "Three.js",
    icon: Atom,
  },

  {
    name: "Tailwind",
    icon: Flame,
  },

  {
    name: "Firebase",
    icon: Database,
  },

  {
    name: "Framer Motion",
    icon: Layers3,
  },

  {
    name: "OpenAI",
    icon: Cpu,
  },
];

const duplicatedStacks = [
  ...techStacks,
  ...techStacks,
];

const TechStackSection = () => {
  return (
    <section
      className="
      relative
      overflow-hidden

      bg-[#060816]

      py-32
    "
    >
      {/* ================= GRID ================= */}

      <div
        className="
        absolute
        inset-0

        opacity-[0.04]

        [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

        [background-size:70px_70px]
      "
      />

      {/* ================= BLUR ================= */}

      <div
        className="
        absolute
        top-[-250px]
        left-[-120px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-cyan-500/20

        blur-[150px]
      "
      />

      <div
        className="
        absolute
        bottom-[-250px]
        right-[-120px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-blue-500/20

        blur-[160px]
      "
      />

      {/* ================= CONTAINER ================= */}

      <div
        className="
        relative
        z-10

        max-w-7xl
        mx-auto

        px-6
      "
      >
        {/* ================= TOP ================= */}

        <div
          className="
          text-center

          max-w-3xl
          mx-auto

          mb-20
        "
        >
          {/* TAG */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="
            inline-flex
            items-center
            gap-2

            px-5
            py-3

            rounded-full

            border
            border-cyan-500/20

            bg-cyan-500/10
            backdrop-blur-xl

            text-cyan-300
            text-sm
            font-semibold

            mb-8
          "
          >
            Modern Engineering Stack
          </motion.div>

          {/* HEADING */}

          <motion.h2
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
            text-5xl
            md:text-6xl

            font-black

            leading-[1.1]

            tracking-tight

            text-white
          "
          >
            Technologies Powering
            <br />

            <span
              className="
              bg-gradient-to-r
              from-cyan-400
              via-blue-400
              to-cyan-300

              bg-clip-text
              text-transparent
            "
            >
              Elite Digital Products
            </span>
          </motion.h2>

          {/* DESC */}

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="
            mt-8

            text-lg
            leading-relaxed

            text-gray-400
          "
          >
            We build scalable platforms
            using modern frontend,
            backend, cloud, AI, and
            animation technologies
            trusted by fast-growing
            startups and enterprises.
          </motion.p>
        </div>

        {/* ================= TOP MARQUEE ================= */}

        <div
          className="
          relative

          overflow-hidden

          mb-10
        "
        >
          {/* FADE */}

          <div
            className="
            absolute
            left-0
            top-0

            z-20

            w-32
            h-full

            bg-gradient-to-r
            from-[#060816]
            to-transparent
          "
          />

          <div
            className="
            absolute
            right-0
            top-0

            z-20

            w-32
            h-full

            bg-gradient-to-l
            from-[#060816]
            to-transparent
          "
          />

          {/* MARQUEE */}

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 24,
              ease: "linear",
            }}
            className="
            flex
            gap-6

            w-max
          "
          >
            {duplicatedStacks.map(
              (tech, index) => {
                const Icon =
                  tech.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -10,
                      scale: 1.04,
                    }}
                    className="
                    group

                    relative

                    flex
                    items-center
                    gap-4

                    px-7
                    py-5

                    rounded-[28px]

                    border
                    border-white/10

                    bg-white/5
                    backdrop-blur-2xl

                    overflow-hidden

                    shadow-[0_15px_60px_rgba(0,0,0,0.2)]

                    transition-all
                    duration-500
                  "
                  >
                    {/* GLOW */}

                    <div
                      className="
                      absolute
                      inset-0

                      opacity-0

                      bg-gradient-to-r
                      from-cyan-500/10
                      via-blue-500/10
                      to-cyan-500/10

                      transition-all
                      duration-500

                      group-hover:opacity-100
                    "
                    />

                    {/* ICON */}

                    <div
                      className="
                      relative
                      z-10

                      w-14
                      h-14

                      rounded-2xl

                      border
                      border-cyan-400/20

                      bg-cyan-500/10

                      flex
                      items-center
                      justify-center

                      text-cyan-300

                      shadow-[0_0_30px_rgba(6,182,212,0.15)]
                    "
                    >
                      <Icon size={26} />
                    </div>

                    {/* TEXT */}

                    <div className="relative z-10">
                      <h3
                        className="
                        text-lg
                        font-bold

                        text-white
                      "
                      >
                        {tech.name}
                      </h3>

                      <p
                        className="
                        text-sm
                        text-gray-400
                      "
                      >
                        Production Ready
                      </p>
                    </div>

                    {/* HOVER BORDER */}

                    <div
                      className="
                      absolute
                      inset-0

                      rounded-[28px]

                      border
                      border-cyan-400/0

                      transition-all
                      duration-500

                      group-hover:border-cyan-400/30
                    "
                    />
                  </motion.div>
                );
              }
            )}
          </motion.div>
        </div>

        {/* ================= BOTTOM FLOATING PILLS ================= */}

        <div
          className="
          mt-20

          flex
          flex-wrap
          justify-center

          gap-5
        "
        >
          {techStacks.map(
            (tech, index) => {
              const Icon =
                tech.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay:
                      index * 0.05,
                  }}
                  whileHover={{
                    scale: 1.08,
                    y: -8,
                  }}
                  viewport={{ once: true }}
                  className="
                  group

                  relative

                  px-6
                  py-4

                  rounded-full

                  border
                  border-white/10

                  bg-white/5
                  backdrop-blur-xl

                  overflow-hidden

                  shadow-[0_10px_40px_rgba(0,0,0,0.2)]

                  transition-all
                  duration-500
                "
                >
                  {/* GLOW */}

                  <div
                    className="
                    absolute
                    inset-0

                    opacity-0

                    bg-gradient-to-r
                    from-cyan-500/10
                    to-blue-500/10

                    transition-all
                    duration-500

                    group-hover:opacity-100
                  "
                  />

                  {/* CONTENT */}

                  <div
                    className="
                    relative
                    z-10

                    flex
                    items-center
                    gap-3
                  "
                  >
                    <div
                      className="
                      w-10
                      h-10

                      rounded-full

                      bg-cyan-500/10

                      flex
                      items-center
                      justify-center

                      text-cyan-300
                    "
                    >
                      <Icon size={18} />
                    </div>

                    <span
                      className="
                      text-white
                      font-semibold
                    "
                    >
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;