import { motion } from "framer-motion";

import {
  Search,
  Lightbulb,
  PenTool,
  Code2,
  FlaskConical,
  Rocket,
  TrendingUp,
} from "lucide-react";

/* ================================================= */
/* WORKFLOW DATA */
/* ================================================= */

const workflowSteps = [
  {
    title: "Discovery",
    description:
      "Deep research into business goals, users, market opportunities, and product requirements.",
    icon: Search,
  },

  {
    title: "Strategy",
    description:
      "Creating scalable product architecture, AI workflows, roadmap planning, and execution strategy.",
    icon: Lightbulb,
  },

  {
    title: "Design",
    description:
      "Crafting premium user experiences, design systems, wireframes, and interactive interfaces.",
    icon: PenTool,
  },

  {
    title: "Development",
    description:
      "Building high-performance frontend, backend, AI systems, APIs, and cloud infrastructure.",
    icon: Code2,
  },

  {
    title: "Testing",
    description:
      "Performance optimization, QA testing, security audits, and real-world stress testing.",
    icon: FlaskConical,
  },

  {
    title: "Deployment",
    description:
      "Launching scalable production-ready systems with CI/CD and cloud-native infrastructure.",
    icon: Rocket,
  },

  {
    title: "Scaling",
    description:
      "Continuous optimization, analytics, AI automation, and long-term product growth.",
    icon: TrendingUp,
  },
];

const TeamWorkflow = () => {
  return (
    <section
      className="
      relative
      overflow-hidden

      bg-[#F5F7FB]

      py-32
    "
    >
      {/* ================================================= */}
      {/* GRID */}
      {/* ================================================= */}

      <div
        className="
        absolute
        inset-0

        opacity-[0.04]

        [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]

        [background-size:70px_70px]
      "
      />

      {/* ================================================= */}
      {/* GLOWS */}
      {/* ================================================= */}

      <div
        className="
        absolute
        top-[-250px]
        left-[-150px]

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
        right-[-150px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-blue-500/10

        blur-[160px]
      "
      />

      {/* ================================================= */}
      {/* CONTAINER */}
      {/* ================================================= */}

      <div
        className="
        relative
        z-10

        max-w-7xl
        mx-auto

        px-6
      "
      >
        {/* ================================================= */}
        {/* TOP CONTENT */}
        {/* ================================================= */}

        <div
          className="
          max-w-4xl
          mx-auto

          text-center
        "
        >
          {/* SMALL TAG */}

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
            <Rocket size={16} />

            Workflow Process
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
            sm:text-6xl
            lg:text-7xl

            font-black

            leading-[1.05]

            tracking-tight

            text-green-400
          "
          >
            How Our Team
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
              Builds Digital Systems.
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
              duration: 0.9,
            }}
            viewport={{ once: true }}
            className="
            mt-8

            text-lg
            leading-relaxed

            text-[color:var(--text-primary)]

            max-w-3xl
            mx-auto
          "
          >
            From product discovery to
            large-scale deployment,
            our workflow combines
            strategy, engineering,
            AI automation, and rapid
            execution to build scalable
            enterprise-grade products.
          </motion.p>
        </div>

        {/* ================================================= */}
        {/* TIMELINE */}
        {/* ================================================= */}

        <div
          className="
          relative

          mt-28
        "
        >
          {/* ================================================= */}
          {/* GRADIENT LINE */}
          {/* ================================================= */}

          <div
            className="
            absolute
            left-1/2
            top-0

            hidden
            lg:block

            -translate-x-1/2

            w-[5px]
            h-full

            rounded-full

            bg-gradient-to-b
            from-cyan-400
            via-blue-500
            to-cyan-300
          "
          />

          {/* GLOW */}

          <div
            className="
            absolute
            left-1/2
            top-0

            hidden
            lg:block

            -translate-x-1/2

            w-[12px]
            h-full

            rounded-full

            bg-cyan-400/20

            blur-xl
          "
          />

          {/* ================================================= */}
          {/* STEPS */}
          {/* ================================================= */}

          <div className="space-y-24">
            {workflowSteps.map(
              (step, index) => {
                const Icon =
                  step.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 80,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.7,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    className={`
                    relative

                    flex
                    flex-col
                    lg:flex-row

                    items-center

                    gap-10

                    ${
                      index % 2 === 0
                        ? "lg:flex-row"
                        : "lg:flex-row-reverse"
                    }
                  `}
                  >
                    {/* ================================================= */}
                    {/* CARD */}
                    {/* ================================================= */}

                    <div className="flex-1">
                      <div
                        className="
                        group
                        relative

                        overflow-hidden

                        rounded-[34px]

                        border
                        border-white/60

                        bg-white/70
                        backdrop-blur-3xl

                        p-8

                        shadow-[0_20px_80px_rgba(0,0,0,0.05)]

                        transition-all
                        duration-500

                        hover:-translate-y-2
                        hover:shadow-[0_30px_90px_rgba(6,182,212,0.15)]
                      "
                      >
                        {/* GLOW */}

                        <div
                          className="
                          absolute
                          top-[-80px]
                          right-[-80px]

                          w-[200px]
                          h-[200px]

                          rounded-full

                          bg-cyan-400/10

                          blur-3xl

                          opacity-0

                          group-hover:opacity-100

                          transition-all
                          duration-700
                        "
                        />

                        {/* STEP NUMBER */}

                        <div
                          className="
                          absolute
                          top-6
                          right-6

                          text-7xl
                          font-black

                          text-slate-100
                        "
                        >
                          0{index + 1}
                        </div>

                        {/* ICON */}

                        <div
                          className="
                          relative
                          z-10

                          w-20
                          h-20

                          rounded-3xl

                          bg-gradient-to-r
                          from-cyan-500
                          to-blue-500

                          flex
                          items-center
                          justify-center

                          text-white

                          shadow-[0_15px_40px_rgba(6,182,212,0.3)]
                        "
                        >
                          <Icon size={34} />
                        </div>

                        {/* CONTENT */}

                        <div className="relative z-10">
                          <h3
                            className="
                            mt-8

                            text-4xl
                            font-black

                            text-red-500
                          "
                          >
                            {step.title}
                          </h3>

                          <p
                            className="
                            mt-5

                            text-lg
                            leading-relaxed

                            text-[color:var(--text-primary)]
                          "
                          >
                            {
                              step.description
                            }
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ================================================= */}
                    {/* CENTER NODE */}
                    {/* ================================================= */}

                    <div
                      className="
                      relative
                      hidden
                      lg:flex

                      items-center
                      justify-center

                      w-[120px]
                    "
                    >
                      {/* OUTER GLOW */}

                      <div
                        className="
                        absolute

                        w-20
                        h-20

                        rounded-full

                        bg-cyan-400/20

                        blur-2xl
                      "
                      />

                      {/* NODE */}

                      <div
                        className="
                        relative
                        z-10

                        w-14
                        h-14

                        rounded-full

                        border-4
                        border-white

                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-500

                        shadow-[0_10px_40px_rgba(6,182,212,0.35)]
                      "
                      />
                    </div>

                    {/* EMPTY SIDE */}

                    <div className="flex-1 hidden lg:block" />
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

export default TeamWorkflow;
