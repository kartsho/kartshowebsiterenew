import { motion } from "framer-motion";

import {
  Search,
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
  ShieldCheck,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Research",

    icon: <Search size={30} />,

    desc: "We deeply analyze your business model, audience, competitors, workflows, and product requirements before planning architecture.",

    tags: [
      "Market Research",
      "Business Goals",
      "User Analysis",
    ],

    stats: "2-5 Days",
  },

  {
    number: "02",
    title: "Strategy & Planning",

    icon: <Lightbulb size={30} />,

    desc: "Our architects prepare scalable system flows, project roadmap, feature planning, and cloud infrastructure strategy.",

    tags: [
      "Roadmap",
      "Architecture",
      "Scalable Systems",
    ],

    stats: "Enterprise Ready",
  },

  {
    number: "03",
    title: "UI/UX Experience",

    icon: <PenTool size={30} />,

    desc: "We craft premium interfaces, smooth interactions, responsive layouts, and high-converting user experiences.",

    tags: [
      "Figma Design",
      "UX Flow",
      "Premium UI",
    ],

    stats: "Modern Design",
  },

  {
    number: "04",
    title: "Development Phase",

    icon: <Code2 size={30} />,

    desc: "Frontend, backend, APIs, authentication, databases, cloud systems, dashboards, and enterprise logic are developed.",

    tags: [
      "React",
      "Node.js",
      "Cloud APIs",
    ],

    stats: "Agile Development",
  },

  {
    number: "05",
    title: "Testing & Security",

    icon: <ShieldCheck size={30} />,

    desc: "Every module goes through performance testing, security validation, optimization, and enterprise-grade QA checks.",

    tags: [
      "Performance",
      "Security",
      "QA Testing",
    ],

    stats: "99.9% Stable",
  },

  {
    number: "06",
    title: "Deployment & Scaling",

    icon: <Rocket size={30} />,

    desc: "We deploy your product with cloud optimization, CI/CD pipelines, scalability systems, and monitoring infrastructure.",

    tags: [
      "AWS",
      "Docker",
      "CI/CD",
    ],

    stats: "Cloud Optimized",
  },

  {
    number: "07",
    title: "Growth & Optimization",

    icon: <BarChart3 size={30} />,

    desc: "After launch, we continuously monitor analytics, improve performance, scale infrastructure, and optimize conversions.",

    tags: [
      "Analytics",
      "Optimization",
      "Growth",
    ],

    stats: "Long-Term Support",
  },
];

const Process = () => {
  return (
    <section
      className="
      relative
      py-36

      overflow-hidden

      bg-[#F5F7FB]
    "
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className="
        absolute
        top-[-200px]
        left-[-200px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-cyan-200/30

        blur-3xl
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

        bg-blue-200/30

        blur-3xl
      "
      />

      {/* GRID BACKGROUND */}

      <div
        className="
        absolute
        inset-0

        opacity-[0.03]

        [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]

        [background-size:80px_80px]
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
        {/* ================= TOP CONTENT ================= */}

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
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="
          text-center

          max-w-4xl
          mx-auto

          mb-28
        "
        >
          {/* BADGE */}

          <div
            className="
            inline-flex

            items-center
            gap-2

            px-5
            py-2

            rounded-full

            bg-white

            border
            border-cyan-100

            text-cyan-700
            text-sm
            font-semibold

            shadow-sm

            mb-6
          "
          >
            Enterprise Workflow
          </div>

          {/* HEADING */}

          <h2
            className="
            text-4xl
            md:text-6xl

            font-bold

            leading-tight

            text-[#0B0F19]

            mb-8
          "
          >
            Our Process For
            Building Scalable
            Digital Products
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            text-lg
            md:text-xl

            leading-relaxed

            text-gray-600
          "
          >
            From strategy and design to
            deployment and scaling — our workflow
            is engineered for startups,
            enterprises, and modern digital
            businesses.
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}

        <div
          className="
          relative
        "
        >
          {/* CENTER LINE */}

          <div
            className="
            hidden
            lg:block

            absolute
            left-1/2
            top-0

            -translate-x-1/2

            w-[4px]
            h-full

            rounded-full

            bg-gradient-to-b
            from-cyan-200
            via-cyan-500
            to-cyan-200
          "
          />

          {/* STEPS */}

          <div className="space-y-24">
            {processSteps.map((step, index) => (
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
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className={`
                  relative

                  grid
                  lg:grid-cols-2

                  gap-16

                  items-center

                  ${
                    index % 2 !== 0
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }
                `}
              >
                {/* ================= CARD ================= */}

                <div
                  className={`
                    ${
                      index % 2 === 0
                        ? "lg:pr-24"
                        : "lg:pl-24"
                    }
                  `}
                >
                  <div
                    className="
                    group
                    relative

                    overflow-hidden

                    rounded-[36px]

                    bg-white/80

                    backdrop-blur-xl

                    border
                    border-white/40

                    p-10

                    shadow-[0_20px_60px_rgba(0,0,0,0.08)]

                    transition-all
                    duration-500

                    hover:-translate-y-3

                    hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]
                  "
                  >
                    {/* GLOW */}

                    <div
                      className="
                      absolute
                      inset-0

                      opacity-0
                      group-hover:opacity-100

                      transition-all
                      duration-500

                      bg-gradient-to-br
                      from-cyan-100/40
                      via-transparent
                      to-transparent
                    "
                    />

                    {/* BIG NUMBER */}

                    <div
                      className="
                      absolute
                      top-4
                      right-6

                      text-[90px]

                      font-black

                      text-cyan-50
                    "
                    >
                      {step.number}
                    </div>

                    {/* ICON */}

                    <div
                      className="
                      relative
                      z-10

                      w-20
                      h-20

                      rounded-3xl

                      bg-cyan-100

                      flex
                      items-center
                      justify-center

                      text-cyan-600

                      mb-8

                      transition-all
                      duration-500

                      group-hover:rotate-6
                      group-hover:scale-110
                    "
                    >
                      {step.icon}
                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                      relative
                      z-10

                      text-3xl
                      md:text-4xl

                      font-bold

                      text-[#0B0F19]

                      mb-6
                    "
                    >
                      {step.title}
                    </h3>

                    {/* DESC */}

                    <p
                      className="
                      relative
                      z-10

                      text-gray-600

                      leading-relaxed

                      text-lg

                      mb-8
                    "
                    >
                      {step.desc}
                    </p>

                    {/* TAGS */}

                    <div
                      className="
                      relative
                      z-10

                      flex
                      flex-wrap

                      gap-4

                      mb-8
                    "
                    >
                      {step.tags.map(
                        (tag, i) => (
                          <div
                            key={i}
                            className="
                            px-4
                            py-2

                            rounded-full

                            bg-[#F5F7FB]

                            border
                            border-black/5

                            text-sm
                            font-medium

                            text-[#0B0F19]
                          "
                          >
                            {tag}
                          </div>
                        )
                      )}
                    </div>

                    {/* FOOTER */}

                    <div
                      className="
                      relative
                      z-10

                      flex
                      items-center
                      justify-between

                      pt-6

                      border-t
                      border-black/5
                    "
                    >
                      <div>
                        <p
                          className="
                          text-sm
                          text-gray-500
                        "
                        >
                          Delivery Phase
                        </p>

                        <h4
                          className="
                          text-lg
                          font-bold

                          text-cyan-600
                        "
                        >
                          {step.stats}
                        </h4>
                      </div>

                      <button
                        className="
                        flex
                        items-center
                        gap-2

                        text-cyan-600
                        font-semibold

                        group/btn
                      "
                      >
                        Learn More

                        <ArrowRight
                          size={18}
                          className="
                          transition-transform
                          duration-300

                          group-hover/btn:translate-x-1
                        "
                        />
                      </button>
                    </div>

                    {/* CORNER GLOW */}

                    <div
                      className="
                      absolute
                      -bottom-20
                      -right-20

                      w-40
                      h-40

                      rounded-full

                      bg-cyan-200/30

                      blur-3xl

                      opacity-0

                      group-hover:opacity-100

                      transition-all
                      duration-700
                    "
                    />
                  </div>
                </div>

                {/* ================= TIMELINE DOT ================= */}

                <div
                  className="
                  hidden
                  lg:flex

                  absolute
                  left-1/2
                  top-1/2

                  -translate-x-1/2
                  -translate-y-1/2

                  w-10
                  h-10

                  rounded-full

                  bg-white

                  border-[6px]
                  border-cyan-500

                  shadow-[0_0_50px_rgba(6,182,212,0.45)]
                "
                >
                  <div
                    className="
                    w-full
                    h-full

                    rounded-full

                    bg-cyan-500
                  "
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;