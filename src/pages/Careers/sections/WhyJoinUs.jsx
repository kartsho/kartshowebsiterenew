import { motion } from "framer-motion";

import {
  BrainCircuit,
  Globe2,
  Rocket,
  Sparkles,
  Cpu,
  BriefcaseBusiness,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const perks = [
  {
    title: "AI-First Workflow",
    desc: "Ship faster with AI copilots, automation pipelines, intelligent tooling, and scalable engineering systems.",
    icon: BrainCircuit,
    size: "large",
  },

  {
    title: "Remote Flexibility",
    desc: "Work from anywhere with async collaboration, deep-focus culture, and global communication systems.",
    icon: Globe2,
    size: "small",
  },

  {
    title: "Fast Growth",
    desc: "Direct exposure to high-impact products, startup execution, leadership mentorship, and rapid career progression.",
    icon: Rocket,
    size: "medium",
  },

  {
    title: "Product Ownership",
    desc: "No micro-management. Engineers own architecture, decisions, deployment, and product direction.",
    icon: BriefcaseBusiness,
    size: "medium",
  },

  {
    title: "Innovation Culture",
    desc: "Experimentation, rapid prototyping, R&D thinking, and future-focused product engineering mindset.",
    icon: Sparkles,
    size: "small",
  },

  {
    title: "Global Team",
    desc: "Collaborate with engineers, designers, AI specialists, and founders across multiple countries.",
    icon: Cpu,
    size: "large",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const WhyJoinUs = () => {
  return (
    <section
      className="
      relative
      overflow-hidden

      bg-[#F5F7FB]

      py-32
    "
    >
      {/* =========================================================
          BACKGROUND GRID
      ========================================================= */}

      <div
        className="
        absolute
        inset-0

        opacity-[0.04]

        [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]

        [background-size:80px_80px]
      "
      />

      {/* =========================================================
          TOP BLUR
      ========================================================= */}

      <div
        className="
        absolute
        top-[-200px]
        left-[-120px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-cyan-400/20

        blur-[120px]
      "
      />

      {/* =========================================================
          BOTTOM BLUR
      ========================================================= */}

      <div
        className="
        absolute
        bottom-[-220px]
        right-[-120px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-blue-400/20

        blur-[130px]
      "
      />

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div
        className="
        relative
        z-10

        max-w-7xl
        mx-auto

        px-6
      "
      >
        {/* =========================================================
            TOP CONTENT
        ========================================================= */}

        <div
          className="
          max-w-3xl
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

            text-cyan-700
            text-sm
            font-semibold

            mb-8
          "
          >
            <Sparkles size={16} />

            Why Engineers Love Working Here
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
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="
            text-5xl
            md:text-6xl

            font-black

            leading-[1.05]
            tracking-tight

            text-white
          "
          >
            Build Faster.
            <br />

            <span
              className="
              bg-gradient-to-r
              from-cyan-600
              via-blue-600
              to-cyan-500

              bg-clip-text
              text-transparent
            "
            >
              Think Bigger.
            </span>
          </motion.h2>

          {/* DESCRIPTION */}

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
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="
            mt-8

            text-lg
            leading-relaxed

            text-white/80

            max-w-2xl
          "
          >
            We’re building a high-performance
            product engineering culture where
            elite execution, innovation, and
            ownership come first.
          </motion.p>
        </div>

        {/* =========================================================
            BENTO GRID
        ========================================================= */}

        <div
          className="
          mt-20

          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4

          auto-rows-[280px]

          gap-6
        "
        >
          {perks.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  rotateX: 4,
                  rotateY: -4,
                }}
                className={`
                  group
                  relative

                  overflow-hidden

                  rounded-[32px]

                  border
                  border-white/60

                  bg-white/60
                  backdrop-blur-3xl

                  shadow-[0_20px_80px_rgba(15,23,42,0.08)]

                  transition-all
                  duration-500

                  ${
                    item.size === "large"
                      ? "xl:col-span-2"
                      : ""
                  }

                  ${
                    item.size === "medium"
                      ? "xl:row-span-2"
                      : ""
                  }
                `}
              >
                {/* =========================================================
                    SPOTLIGHT
                ========================================================= */}

                <div
                  className="
                  absolute
                  inset-0

                  opacity-0

                  bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.18),transparent_70%)]

                  transition-opacity
                  duration-500

                  group-hover:opacity-100
                "
                />

                {/* =========================================================
                    GRADIENT BORDER
                ========================================================= */}

                <div
                  className="
                  absolute
                  inset-0

                  rounded-[32px]

                  p-[1px]

                  bg-gradient-to-br
                  from-cyan-400/30
                  via-transparent
                  to-blue-500/30
                "
                >
                  <div
                    className="
                    w-full
                    h-full

                    rounded-[32px]

                    bg-transparent
                  "
                  />
                </div>

                {/* =========================================================
                    FLOATING BLUR
                ========================================================= */}

                <div
                  className="
                  absolute
                  -top-10
                  -right-10

                  w-40
                  h-40

                  rounded-full

                  bg-cyan-400/20

                  blur-3xl

                  group-hover:scale-150

                  transition-all
                  duration-700
                "
                />

                {/* =========================================================
                    CONTENT
                ========================================================= */}

                <div
                  className="
                  relative
                  z-10

                  h-full

                  p-8

                  flex
                  flex-col
                  justify-between
                "
                >
                  {/* TOP */}

                  <div>
                    {/* ICON */}

                    <div
                      className="
                      w-16
                      h-16

                      rounded-2xl

                      border
                      border-cyan-500/10

                      bg-cyan-500/10

                      flex
                      items-center
                      justify-center

                      text-cyan-600

                      shadow-[0_10px_30px_rgba(6,182,212,0.15)]

                      group-hover:scale-110
                      group-hover:rotate-6

                      transition-all
                      duration-500
                    "
                    >
                      <Icon size={30} />
                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                      mt-8

                      text-2xl
                      font-bold

                      text-white
                    "
                    >
                      {item.title}
                    </h3>

                    {/* DESC */}

                    <p
                      className="
                      mt-4

                      text-white/80
                      leading-relaxed
                    "
                    >
                      {item.desc}
                    </p>
                  </div>

                  {/* BOTTOM */}

                  <div
                    className="
                    mt-10

                    flex
                    items-center
                    gap-3
                  "
                  >
                    {/* PULSE */}

                    <div
                      className="
                      relative

                      flex
                      items-center
                      justify-center
                    "
                    >
                      <span
                        className="
                        absolute

                        w-4
                        h-4

                        rounded-full

                        bg-cyan-500

                        animate-ping
                      "
                      />

                      <span
                        className="
                        relative

                        w-3
                        h-3

                        rounded-full

                        bg-cyan-500
                      "
                      />
                    </div>

                    <span
                      className="
                      text-sm
                      font-medium

                      text-cyan-700
                    "
                    >
                      High Performance Culture
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
