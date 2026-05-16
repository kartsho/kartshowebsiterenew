import {
  ShieldCheck,
  Zap,
  Cpu,
  Rocket,
} from "lucide-react";

import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Multi-Venture Ecosystem",
    description:
      "Kartsho connects marketing, legal tech, education, commerce, media, and counseling under one brand.",
    icon: Cpu,
  },

  {
    id: 2,
    title: "6+ Active Ventures",
    description:
      "The company operates multiple business lines with shared strategy, execution, and support.",
    icon: Rocket,
  },

  {
    id: 3,
    title: "24h Response",
    description:
      "Business and hiring inquiries are handled with a public 24-hour response commitment.",
    icon: Zap,
  },

  {
    id: 4,
    title: "Official Contact",
    description:
      "Use info@kartsho.com for business and hr@kartsho.com for careers.",
    icon: ShieldCheck,
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="
      relative
      py-32
      overflow-hidden
      bg-white
    "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
        absolute
        top-0
        left-0
        w-[400px]
        h-[400px]
        bg-cyan-100/50
        blur-3xl
        rounded-full
      "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-[300px]
        h-[300px]
        bg-pink-100/40
        blur-3xl
        rounded-full
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
        {/* ================= HEADING ================= */}

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
          max-w-3xl
          mx-auto
          mb-20
        "
        >
          <div
            className="
            inline-block
            px-5
            py-2
            rounded-full
            bg-cyan-100
            text-cyan-700
            text-sm
            font-medium
            mb-6
          "
          >
            Why Choose Kartsho
          </div>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#0B0F19]
            leading-tight
          "
          >
            Building a Future-Ready
            Digital Ecosystem
          </h2>

          <p
            className="
            mt-6
            text-lg
            text-gray-600
            leading-relaxed
          "
          >
            We combine official business contacts,
            multi-venture execution, and scalable
            digital infrastructure to help Kartsho
            grow across industries.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}

        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-4
          gap-8
        "
        >
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{
                  opacity: 0,
                  y: 60,
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
                className="
                group
                relative
                overflow-hidden

                backdrop-blur-xl
                bg-white/70

                border
                border-white/40

                rounded-[32px]

                p-8

                shadow-[0_10px_40px_rgba(0,0,0,0.06)]

                transition-all
                duration-500

                hover:-translate-y-3
                hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)]
              "
              >
                {/* GLOW EFFECT */}

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
                  to-transparent
                "
                />

                {/* ICON */}

                <div
                  className="
                  relative
                  z-10

                  w-16
                  h-16

                  rounded-2xl

                  bg-cyan-100

                  flex
                  items-center
                  justify-center

                  mb-8
                "
                >
                  <Icon
                    size={32}
                    className="
                    text-cyan-600
                  "
                  />
                </div>

                {/* TITLE */}

                <h3
                  className="
                  relative
                  z-10

                  text-2xl
                  font-semibold
                  text-[#0B0F19]

                  mb-4
                "
                >
                  {card.title}
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
                  {card.description}
                </p>

                {/* HOVER LINE */}

                <div
                  className="
                  absolute
                  bottom-0
                  left-0

                  h-1
                  w-0

                  bg-cyan-500

                  transition-all
                  duration-500

                  group-hover:w-full
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

export default WhyChooseUs;
