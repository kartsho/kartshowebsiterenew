import { motion } from "framer-motion";

import {
  SearchCheck,
  Lightbulb,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  GaugeCircle,
  TrendingUp,
} from "lucide-react";

const workflowSteps = [
  {
    id: "01",
    title: "Discovery",
    icon: SearchCheck,
    desc: "We deeply understand your business goals, users, competitors, and product vision before writing a single line of code.",
  },

  {
    id: "02",
    title: "Strategy",
    icon: Lightbulb,
    desc: "We create scalable architecture, growth strategy, user flows, and technical planning for long-term success.",
  },

  {
    id: "03",
    title: "UI/UX Design",
    icon: Palette,
    desc: "Premium user experiences with modern interfaces, smooth interactions, and conversion-focused layouts.",
  },

  {
    id: "04",
    title: "Development",
    icon: Code2,
    desc: "Frontend + backend engineering using scalable systems, AI workflows, and production-ready architecture.",
  },

  {
    id: "05",
    title: "Testing",
    icon: ShieldCheck,
    desc: "We optimize security, responsiveness, performance, accessibility, and device compatibility.",
  },

  {
    id: "06",
    title: "Deployment",
    icon: Rocket,
    desc: "CI/CD pipelines, cloud deployment, domain setup, monitoring, and live infrastructure scaling.",
  },

  {
    id: "07",
    title: "Optimization",
    icon: GaugeCircle,
    desc: "Advanced SEO, analytics, Core Web Vitals optimization, and conversion improvement systems.",
  },

  {
    id: "08",
    title: "Scaling",
    icon: TrendingUp,
    desc: "We help scale traffic, users, automation systems, and AI-powered growth infrastructure.",
  },
];

const WorkflowSection = () => {
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

        opacity-[0.03]

        [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]

        [background-size:70px_70px]
      "
      />

      {/* ================= BLUR ================= */}

      <div
        className="
        absolute
        top-[-250px]
        left-[-100px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-cyan-500/10

        blur-[140px]
      "
      />

      <div
        className="
        absolute
        bottom-[-250px]
        right-[-100px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-blue-500/10

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
          max-w-3xl
          mx-auto

          text-center

          mb-24
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

            text-cyan-600
            text-sm
            font-semibold

            mb-8
          "
          >
            Elite Development Workflow
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

            text-purple-500
          "
          >
            Our Product
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
              Development Workflow
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

            text-gray-600
          "
          >
            From strategy to scaling —
            every stage is engineered for
            performance, growth, AI
            automation, and enterprise
            reliability.
          </motion.p>
        </div>

        {/* ================= TIMELINE ================= */}

        <div
          className="
          relative

          max-w-5xl
          mx-auto
        "
        >
          {/* LINE */}

          <div
            className="
            absolute
            left-1/2
            top-0

            hidden
            md:block

            -translate-x-1/2

            w-[4px]
            h-full

            rounded-full

            bg-gradient-to-b
            from-cyan-400
            via-blue-500
            to-cyan-300
          "
          >
            {/* GLOW */}

            <motion.div
              animate={{
                y: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
              absolute
              top-0
              left-1/2

              -translate-x-1/2

              w-6
              h-24

              rounded-full

              bg-cyan-400/40

              blur-2xl
            "
            />
          </div>

          {/* STEPS */}

          <div
            className="
            flex
            flex-col

            gap-16
          "
          >
            {workflowSteps.map(
              (step, index) => {
                const Icon =
                  step.icon;

                return (
                  <motion.div
                    key={step.id}
                    initial={{
                      opacity: 0,
                      y: 80,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      delay:
                        index * 0.08,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className={`
                    relative

                    flex
                    flex-col
                    md:flex-row

                    items-center

                    gap-10

                    ${
                      index % 2 === 0
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    }
                  `}
                  >
                    {/* NODE */}

                    <div
                      className="
                      absolute

                      hidden
                      md:flex

                      left-1/2
                      top-1/2

                      -translate-x-1/2
                      -translate-y-1/2

                      z-20

                      w-20
                      h-20

                      rounded-full

                      border
                      border-cyan-400/20

                      bg-white

                      items-center
                      justify-center

                      shadow-[0_15px_50px_rgba(6,182,212,0.2)]
                    "
                    >
                      <div
                        className="
                        absolute
                        inset-0

                        rounded-full

                        bg-cyan-400/10

                        blur-xl
                      "
                      />

                      <Icon
                        size={28}
                        className="
                        relative
                        z-10

                        text-cyan-600
                      "
                      />
                    </div>

                    {/* CARD */}

                    <motion.div
                      whileHover={{
                        y: -8,
                        rotateX: 4,
                        rotateY: 4,
                      }}
                      className="
                      relative

                      w-full
                      md:w-[44%]

                      rounded-[32px]

                      border
                      border-white/50

                      bg-white/70
                      backdrop-blur-3xl

                      overflow-hidden

                      p-8

                      shadow-[0_20px_80px_rgba(0,0,0,0.06)]

                      transition-all
                      duration-500
                    "
                    >
                      {/* GLOW */}

                      <div
                        className="
                        absolute
                        top-[-100px]
                        right-[-50px]

                        w-[220px]
                        h-[220px]

                        rounded-full

                        bg-cyan-400/10

                        blur-3xl
                      "
                      />

                      {/* NUMBER */}

                      <div
                        className="
                        inline-flex

                        px-4
                        py-2

                        rounded-full

                        bg-cyan-500/10

                        text-cyan-600
                        font-bold
                        text-sm

                        mb-6
                      "
                      >
                        STEP {step.id}
                      </div>

                      {/* ICON MOBILE */}

                      <div
                        className="
                        md:hidden

                        mb-6

                        w-16
                        h-16

                        rounded-2xl

                        bg-cyan-500/10

                        flex
                        items-center
                        justify-center
                      "
                      >
                        <Icon
                          size={28}
                          className="
                          text-cyan-600
                        "
                        />
                      </div>

                      {/* TITLE */}

                      <h3
                        className="
                        text-3xl
                        font-black

                        text-pink-500
                      "
                      >
                        {step.title}
                      </h3>

                      {/* DESC */}

                      <p
                        className="
                        mt-5

                        text-gray-600
                        leading-relaxed
                      "
                      >
                        {step.desc}
                      </p>

                      {/* BOTTOM LINE */}

                      <div
                        className="
                        mt-8

                        w-full
                        h-[2px]

                        rounded-full

                        bg-gradient-to-r
                        from-cyan-400
                        via-blue-500
                        to-transparent
                      "
                      />
                    </motion.div>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;