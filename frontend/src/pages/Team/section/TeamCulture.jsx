import { motion } from "framer-motion";

import {
  Sparkles,
  Rocket,
  Globe,
  BrainCircuit,
  Zap,
  ShieldCheck,
} from "lucide-react";

/* ================= FLOATING CULTURE CARDS ================= */

const cultureCards = [
  {
    title: "Remote First",
    desc: "Collaborating globally across timezones.",
    icon: Globe,
    className:
      "top-0 left-8 lg:left-16",
  },

  {
    title: "AI Workflow",
    desc: "Automation + intelligence in every process.",
    icon: BrainCircuit,
    className:
      "top-32 right-0 lg:right-10",
  },

  {
    title: "Fast Execution",
    desc: "Rapid iteration with startup speed.",
    icon: Rocket,
    className:
      "bottom-20 left-0",
  },

  {
    title: "Ownership",
    desc: "Every engineer thinks like a founder.",
    icon: ShieldCheck,
    className:
      "bottom-0 right-14",
  },
];

const TeamCulture = () => {
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


      {/* ================= TOP GLOW ================= */}

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

      {/* ================= BOTTOM GLOW ================= */}

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

      {/* ================= CONTAINER ================= */}

      <div
        className="
        relative
        z-10

        max-w-7xl
        mx-auto

        px-6

        grid
        lg:grid-cols-2

        gap-24
        items-center
      "
      >
        {/* ================================================= */}
        {/* LEFT CONTENT */}
        {/* ================================================= */}

        <div>
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
            <Sparkles size={16} />

            Team Culture
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

            text-[color:var(--text-primary)]
          "
          >
            We Build Fast.
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
              We Think Long-Term.
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

            max-w-2xl
          "
          >
            We operate like a modern
            product lab — blending
            engineering, AI, design,
            and strategy into one
            high-performance workflow.

            <br />
            <br />

            Our culture is built around
            ownership, experimentation,
            fast execution, and
            long-term thinking.

            We move with startup speed
            while building systems that
            scale globally.
          </motion.p>

          {/* FEATURE LIST */}

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
            mt-12

            grid
            sm:grid-cols-2

            gap-5
          "
          >
            {[
              "Innovation Driven",
              "Remote-First Culture",
              "AI-Powered Workflow",
              "Product Mindset",
              "Rapid Experimentation",
              "Founder-Level Ownership",
            ].map((item, index) => (
              <div
                key={index}
                className="
                flex
                items-center
                gap-3

                p-5

                rounded-3xl

                border
                border-white/60

                bg-white/70
                backdrop-blur-2xl

                shadow-[0_10px_40px_rgba(0,0,0,0.04)]

                hover:-translate-y-1
                hover:shadow-[0_20px_60px_rgba(6,182,212,0.12)]

                transition-all
                duration-300
              "
              >
                <div
                  className="
                  w-11
                  h-11

                  rounded-2xl

                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500

                  flex
                  items-center
                  justify-center

                  text-white

                  shadow-[0_10px_30px_rgba(6,182,212,0.25)]
                "
                >
                  <Zap size={18} />
                </div>

                <span
                  className="
                  text-[color:var(--text-primary)]
                  font-semibold
                "
                >
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* RIGHT SIDE */}
        {/* ================================================= */}

        <div
          className="
          relative

          h-[700px]

          flex
          items-center
          justify-center
        "
        >
          {/* ================= MAIN GLASS CARD ================= */}

          <motion.div
            animate={{
              y: [0, -14, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="
            relative

            w-[340px]
            h-[420px]

            rounded-[40px]

            overflow-hidden

            border
            border-white/60

            bg-white/70
            backdrop-blur-3xl

            shadow-[0_20px_80px_rgba(0,0,0,0.08)]
          "
          >
            {/* IMAGE */}

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
              alt="Team Culture"

              className="
              w-full
              h-full

              object-cover
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

            {/* TEXT */}

            <div
              className="
              absolute
              bottom-8
              left-8
              right-8
            "
            >
              <h3
                className="
                text-3xl
                font-bold

                text-white
              "
              >
                Modern Product Teams
              </h3>

              <p
                className="
                mt-3

                text-white/70
                leading-relaxed
              "
              >
                Building scalable digital
                systems with elite
                collaboration & AI-powered
                workflows.
              </p>
            </div>
          </motion.div>

          {/* ================= FLOATING CARDS ================= */}

          {cultureCards.map(
            (card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                  }}
                  viewport={{ once: true }}
                  className={`
                    absolute
                    ${card.className}
                  `}
                >
                  <div
                    className="
                    group

                    w-[250px]

                    p-5

                    rounded-3xl

                    border
                    border-white/60

                    bg-white/70
                    backdrop-blur-3xl

                    shadow-[0_15px_50px_rgba(0,0,0,0.06)]

                    hover:-translate-y-2
                    hover:shadow-[0_25px_70px_rgba(6,182,212,0.15)]

                    transition-all
                    duration-500
                  "
                  >
                    {/* ICON */}

                    <div
                      className="
                      w-14
                      h-14

                      rounded-2xl

                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-500

                      flex
                      items-center
                      justify-center

                      text-white

                      shadow-[0_10px_30px_rgba(6,182,212,0.25)]
                    "
                    >
                      <Icon size={24} />
                    </div>

                    {/* CONTENT */}

                    <h4
                      className="
                      mt-5

                      text-xl
                      font-bold

                      text-[#0B1220]
                    "
                    >
                      {card.title}
                    </h4>

                    <p
                      className="
                      mt-2

                      text-[color:var(--text-primary)]
                      leading-relaxed
                    "
                    >
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              );
            }
          )}

          {/* ================= ORBIT RING ================= */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            absolute

            w-[620px]
            h-[620px]

            rounded-full

            border
            border-dashed
            border-cyan-500/10
          "
          />
        </div>
      </div>
    </section>
  );
};

export default TeamCulture;
