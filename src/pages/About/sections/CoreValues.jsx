import { motion } from "framer-motion";

import {
  Lightbulb,
  ShieldCheck,
  Rocket,
  Users,
  BrainCircuit,
  Layers3,
} from "lucide-react";

const values = [
  {
    title: "Innovation First",
    desc: "We constantly push boundaries with AI, automation, and modern engineering solutions.",
    icon: Lightbulb,
  },

  {
    title: "Enterprise Security",
    desc: "Every system is designed with security, scalability, and long-term reliability in mind.",
    icon: ShieldCheck,
  },

  {
    title: "Fast Execution",
    desc: "We move quickly without compromising product quality or engineering standards.",
    icon: Rocket,
  },

  {
    title: "Client Partnership",
    desc: "We work as long-term strategic technology partners, not just service providers.",
    icon: Users,
  },

  {
    title: "AI Driven Thinking",
    desc: "We integrate intelligent systems and automation into modern business ecosystems.",
    icon: BrainCircuit,
  },

  {
    title: "Scalable Architecture",
    desc: "Our infrastructure and systems are built to scale globally with high performance.",
    icon: Layers3,
  },
];

const CoreValues = () => {
  return (
    <section
      className="
      relative
      py-32
      overflow-hidden
      bg-white
    "
    >
      {/* ================= GRID BACKGROUND ================= */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
      "
        style={{
          backgroundImage: `
            linear-gradient(to right, #0B0F19 1px, transparent 1px),
            linear-gradient(to bottom, #0B0F19 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* ================= GLOW ================= */}

      <div
        className="
        absolute
        top-[-150px]
        right-[-150px]

        w-[400px]
        h-[400px]

        rounded-full

        bg-cyan-200/40

        blur-3xl
      "
      />

      <div
        className="
        absolute
        bottom-[-150px]
        left-[-150px]

        w-[400px]
        h-[400px]

        rounded-full

        bg-blue-200/30

        blur-3xl
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

          max-w-3xl
          mx-auto

          mb-24
        "
        >
          {/* BADGE */}

          <div
            className="
            inline-flex
            items-center

            px-5
            py-3

            rounded-full

            bg-cyan-100

            text-cyan-700
            text-sm
            font-semibold

            tracking-wide

            mb-8
          "
          >
            Core Values
          </div>

          {/* HEADING */}

          <h2
            className="
            text-4xl
            md:text-6xl

            font-bold

            leading-tight

            text-[#0B0F19]

            mb-6
          "
          >
            Principles That
            <span
              className="
              text-cyan-500
            "
            >
              {" "}
              Drive Us
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            text-lg

            text-gray-600

            leading-relaxed
          "
          >
            Our company culture is built around
            innovation, engineering excellence,
            scalability, and long-term business
            impact.
          </p>
        </motion.div>

        {/* ================= VALUES GRID ================= */}

        <div
          className="
          grid
          sm:grid-cols-2
          lg:grid-cols-3

          gap-8
        "
        >
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="
                group
                relative

                overflow-hidden

                rounded-[35px]

                bg-[#F5F7FB]

                border
                border-black/5

                p-8

                shadow-[0_20px_50px_rgba(0,0,0,0.05)]

                transition-all
                duration-500

                hover:shadow-[0_25px_70px_rgba(6,182,212,0.15)]
              "
              >
                {/* GLOW */}

                <div
                  className="
                  absolute
                  top-[-70px]
                  right-[-70px]

                  w-[180px]
                  h-[180px]

                  rounded-full

                  bg-cyan-300/20

                  blur-3xl

                  opacity-0

                  transition-all
                  duration-500

                  group-hover:opacity-100
                "
                />

                {/* ICON */}

                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                  className="
                  relative
                  z-10

                  w-16
                  h-16

                  rounded-2xl

                  bg-cyan-500

                  flex
                  items-center
                  justify-center

                  text-white

                  shadow-[0_10px_30px_rgba(6,182,212,0.3)]

                  mb-8
                "
                >
                  <Icon size={28} />
                </motion.div>

                {/* TITLE */}

                <h3
                  className="
                  relative
                  z-10

                  text-2xl
                  font-bold

                  text-[#0B0F19]

                  mb-5
                "
                >
                  {value.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                  relative
                  z-10

                  text-gray-600

                  leading-relaxed
                "
                >
                  {value.desc}
                </p>

                {/* BOTTOM LINE */}

                <div
                  className="
                  relative
                  z-10

                  w-full
                  h-[2px]

                  mt-8

                  bg-gradient-to-r
                  from-cyan-500
                  to-transparent

                  opacity-40
                "
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;