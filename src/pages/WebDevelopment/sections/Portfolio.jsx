import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Play,
  Eye,
  Sparkles,
  BarChart3,
  Globe,
} from "lucide-react";

const portfolioProjects = [
  {
    title: "AI SaaS Dashboard",
    category: "AI Platform",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",

    stats: [
      "98 Lighthouse",
      "0.9s Load",
      "40% More Conversion",
    ],

    tech: [
      "React",
      "Node.js",
      "OpenAI",
    ],

    video:
      "Hover Preview",
  },

  {
    title: "Luxury Brand Website",
    category: "Corporate Website",

    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",

    stats: [
      "SEO Optimized",
      "3x Faster",
      "Enterprise Ready",
    ],

    tech: [
      "Next.js",
      "GSAP",
      "Tailwind",
    ],

    video:
      "Hover Preview",
  },

  {
    title: "AI Resume Analyzer",
    category: "AI Automation",

    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",

    stats: [
      "AI Workflow",
      "ATS Ready",
      "Automation",
    ],

    tech: [
      "Firebase",
      "OpenAI",
      "MongoDB",
    ],

    video:
      "Hover Preview",
  },
];

const PortfolioSection = () => {
  return (
    <section
      className="
      relative
      overflow-hidden

      bg-[#F5F7FB]

      py-32
    "
    >
      {/* ================= GRID ================= */}

      <div
        className="
        absolute
        inset-0

        opacity-[0.04]

        [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]

        [background-size:70px_70px]
      "
      />

      {/* ================= GLOW ================= */}

      <div
        className="
        absolute
        top-[-200px]
        left-[-120px]

        w-[450px]
        h-[450px]

        rounded-full

        bg-cyan-400/20

        blur-[140px]
      "
      />

      <div
        className="
        absolute
        bottom-[-200px]
        right-[-120px]

        w-[450px]
        h-[450px]

        rounded-full

        bg-blue-400/20

        blur-[150px]
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

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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

          max-w-4xl
          mx-auto
        "
        >
          {/* TAG */}

          <div
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

            text-cyan-600
            text-sm
            font-semibold

            backdrop-blur-xl

            mb-8
          "
          >
            <Sparkles size={16} />

            Premium Portfolio
          </div>

          {/* HEADING */}

          <h2
            className="
            text-5xl
            lg:text-7xl

            font-black

            leading-[1.05]
            tracking-tight

            text-[#0B0F19]
          "
          >
            Digital Products
            <br />

            <span
              className="
              bg-gradient-to-r
              from-cyan-500
              via-blue-500
              to-cyan-400

              bg-clip-text
              text-transparent
            "
            >
              Built For Scale.
            </span>
          </h2>

          {/* DESC */}

          <p
            className="
            mt-8

            text-lg
            leading-relaxed

            text-gray-600
          "
          >
            We craft high-performance
            AI systems, SaaS platforms,
            enterprise websites, and
            conversion-focused digital
            experiences for modern
            brands worldwide.
          </p>
        </motion.div>

        {/* ================= PROJECT GRID ================= */}

        <div
          className="
          mt-24

          grid
          lg:grid-cols-3

          gap-8
        "
        >
          {portfolioProjects.map(
            (project, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="
                group
                relative
              "
              >
                {/* CARD */}

                <div
                  className="
                  relative

                  overflow-hidden

                  rounded-[34px]

                  border
                  border-white/40

                  bg-white/70
                  backdrop-blur-3xl

                  shadow-[0_20px_80px_rgba(0,0,0,0.08)]

                  transition-all
                  duration-700

                  hover:-translate-y-4
                "
                >
                  {/* IMAGE */}

                  <div
                    className="
                    relative

                    h-[300px]

                    overflow-hidden
                  "
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                      w-full
                      h-full

                      object-cover

                      transition-transform
                      duration-700

                      group-hover:scale-110
                    "
                    />

                    {/* OVERLAY */}

                    <div
                      className="
                      absolute
                      inset-0

                      bg-gradient-to-t
                      from-black/70
                      via-black/10
                      to-transparent
                    "
                    />

                    {/* HOVER VIDEO */}

                    <div
                      className="
                      absolute
                      inset-0

                      flex
                      items-center
                      justify-center

                      opacity-0

                      transition-all
                      duration-500

                      group-hover:opacity-100
                    "
                    >
                      <motion.button
                        whileHover={{
                          scale: 1.08,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                        className="
                        flex
                        items-center
                        gap-3

                        px-6
                        py-4

                        rounded-2xl

                        bg-white/15
                        backdrop-blur-xl

                        border
                        border-white/20

                        text-white
                        font-semibold
                      "
                      >
                        <Play size={18} />

                        Live Preview
                      </motion.button>
                    </div>

                    {/* CATEGORY */}

                    <div
                      className="
                      absolute
                      top-5
                      left-5

                      px-4
                      py-2

                      rounded-full

                      bg-white/15
                      backdrop-blur-xl

                      border
                      border-white/20

                      text-white
                      text-sm
                      font-medium
                    "
                    >
                      {project.category}
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div
                    className="
                    relative

                    p-7
                  "
                  >
                    {/* TITLE */}

                    <div
                      className="
                      flex
                      items-start
                      justify-between

                      gap-4
                    "
                    >
                      <div>
                        <h3
                          className="
                          text-2xl
                          font-bold

                          text-[#0B0F19]
                        "
                        >
                          {project.title}
                        </h3>

                        <p
                          className="
                          mt-2

                          text-gray-500
                        "
                        >
                          Enterprise-grade
                          scalable digital
                          product system.
                        </p>
                      </div>

                      <button
                        className="
                        w-12
                        h-12

                        rounded-2xl

                        bg-cyan-500/10

                        flex
                        items-center
                        justify-center

                        text-cyan-600

                        transition-all
                        duration-300

                        hover:scale-110
                        hover:bg-cyan-500
                        hover:text-white
                      "
                      >
                        <ArrowUpRight
                          size={20}
                        />
                      </button>
                    </div>

                    {/* STATS */}

                    <div
                      className="
                      mt-8

                      flex
                      flex-wrap

                      gap-3
                    "
                    >
                      {project.stats.map(
                        (
                          stat,
                          statIndex
                        ) => (
                          <div
                            key={statIndex}
                            className="
                            px-4
                            py-2

                            rounded-full

                            bg-black/[0.03]

                            text-sm
                            font-medium

                            text-[#0B0F19]
                          "
                          >
                            {stat}
                          </div>
                        )
                      )}
                    </div>

                    {/* TECH STACK */}

                    <div
                      className="
                      mt-7

                      flex
                      flex-wrap

                      gap-2
                    "
                    >
                      {project.tech.map(
                        (
                          tech,
                          techIndex
                        ) => (
                          <div
                            key={techIndex}
                            className="
                            px-3
                            py-2

                            rounded-xl

                            border
                            border-cyan-500/10

                            bg-cyan-500/5

                            text-xs
                            font-semibold

                            text-cyan-700
                          "
                          >
                            {tech}
                          </div>
                        )
                      )}
                    </div>

                    {/* FOOTER */}

                    <div
                      className="
                      mt-8

                      flex
                      items-center
                      justify-between
                    "
                    >
                      <div
                        className="
                        flex
                        items-center
                        gap-2

                        text-gray-500
                        text-sm
                      "
                      >
                        <BarChart3
                          size={16}
                        />

                        High Performance
                      </div>

                      <div
                        className="
                        flex
                        items-center
                        gap-2

                        text-gray-500
                        text-sm
                      "
                      >
                        <Globe size={16} />

                        Global Ready
                      </div>
                    </div>

                    {/* GLOW */}

                    <div
                      className="
                      absolute
                      bottom-[-80px]
                      right-[-80px]

                      w-[180px]
                      h-[180px]

                      rounded-full

                      bg-cyan-400/10

                      blur-3xl

                      opacity-0

                      transition-all
                      duration-700

                      group-hover:opacity-100
                    "
                    />
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* ================= BOTTOM BUTTON ================= */}

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
            duration: 1,
          }}
          viewport={{ once: true }}
          className="
          flex
          justify-center

          mt-20
        "
        >
          <button
            className="
            group

            relative

            px-8
            py-5

            rounded-2xl

            overflow-hidden

            bg-gradient-to-r
            from-cyan-500
            to-blue-500

            text-white
            font-semibold

            shadow-[0_15px_50px_rgba(6,182,212,0.35)]

            transition-all
            duration-500

            hover:scale-105
          "
          >
            <span
              className="
              relative
              z-10

              flex
              items-center
              gap-3
            "
            >
              View Full Portfolio

              <Eye size={18} />
            </span>

            <div
              className="
              absolute
              inset-0

              opacity-0

              bg-white/20

              transition-opacity
              duration-500

              group-hover:opacity-100
            "
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;