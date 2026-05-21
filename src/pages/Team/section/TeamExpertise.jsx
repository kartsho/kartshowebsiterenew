import { motion } from "framer-motion";

const expertise = [
  "React",
  "Next.js",
  "Node.js",
  "AI/ML",
  "OpenAI",
  "AWS",
  "DevOps",
  "Docker",
  "Kubernetes",
  "Three.js",
  "GSAP",
  "Tailwind CSS",
  "UI/UX",
  "Cloud",
  "Automation",
  "SaaS",
  "System Design",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "TypeScript",
  "Framer Motion",
];

const ExpertiseSection = () => {
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

    

      {/* ================= GLOW ================= */}

      <div
        className="
        absolute
        top-[-200px]
        left-[-100px]

        w-[450px]
        h-[450px]

        rounded-full

        bg-cyan-500/10

        blur-[120px]
      "
      />

      <div
        className="
        absolute
        bottom-[-250px]
        right-[-100px]

        w-[450px]
        h-[450px]

        rounded-full

        bg-blue-500/10

        blur-[140px]
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

          max-w-4xl
          mx-auto
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
            TEAM EXPERTISE
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
            lg:text-7xl

            font-black

            leading-[1.05]
            tracking-tight

            text-blue-400
          "
          >
            Engineering Skills
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

            text-3xl
            leading-relaxed
             
            text-[color:var(--text-primary)]

            max-w-3xl
            mx-auto
          "
          >
            Our team combines modern engineering,
            AI-first workflows, scalable cloud
            architecture, and product-driven
            execution to build systems that perform
            globally.
          </motion.p>
        </div>

        {/* ================= FLOATING PILLS ================= */}

        <div
          className="
          relative

          mt-24
        "
        >
          {/* TOP MARQUEE */}

          <div
            className="
            relative
            overflow-hidden

            py-5
          "
          >
            <motion.div
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
              flex
              gap-5

              w-max
            "
            >
              {[...expertise, ...expertise].map(
                (skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -10,
                      scale: 1.05,
                    }}
                    className="
                    group

                    relative

                    px-7
                    py-4

                    rounded-2xl

                    border
                    border-white/40

                    bg-white/70
                    backdrop-blur-2xl

                    shadow-[0_10px_40px_rgba(0,0,0,0.06)]

                    overflow-hidden

                    cursor-pointer
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

                    {/* BLUR ORB */}

                    <div
                      className="
                      absolute
                      top-[-40px]
                      right-[-20px]

                      w-20
                      h-20

                      rounded-full

                      bg-cyan-400/20

                      blur-2xl

                      opacity-0

                      transition-all
                      duration-500

                      group-hover:opacity-100
                    "
                    />

                    {/* TEXT */}

                    <span
                      className="
                      relative
                      z-10

                      text-[#0B1220]
                      font-semibold
                      text-lg

                      transition-all
                      duration-300

                      group-hover:text-cyan-600
                    "
                    >
                      {skill}
                    </span>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>

          {/* BOTTOM MARQUEE */}

          <div
            className="
            relative
            overflow-hidden

            py-5
            mt-6
          "
          >
            <motion.div
              animate={{
                x: ["-50%", "0%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
              flex
              gap-5

              w-max
            "
            >
              {[...expertise, ...expertise].map(
                (skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -10,
                      scale: 1.05,
                    }}
                    className="
                    group

                    relative

                    px-7
                    py-4

                    rounded-2xl

                    border
                    border-cyan-500/10

                    bg-gradient-to-br
                    from-white
                    to-cyan-50

                    shadow-[0_10px_40px_rgba(6,182,212,0.08)]

                    overflow-hidden

                    cursor-pointer
                  "
                  >
                    {/* LIGHT */}

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

                    {/* TEXT */}

                    <span
                      className="
                      relative
                      z-10

                      text-[#0B1220]
                      font-semibold
                      text-lg

                      transition-all
                      duration-300

                      group-hover:text-cyan-600
                    "
                    >
                      {skill}
                    </span>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </div>

        {/* ================= BOTTOM GLASS ================= */}

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
            duration: 1,
          }}
          viewport={{ once: true }}
          className="
          relative

          mt-24

          rounded-[40px]

          border
          border-white/50

          bg-white/60
          backdrop-blur-3xl

          overflow-hidden

          shadow-[0_20px_80px_rgba(0,0,0,0.08)]

          p-10
          lg:p-16
        "
        >
          {/* BG GLOW */}

          <div
            className="
            absolute
            top-[-100px]
            left-[10%]

            w-[250px]
            h-[250px]

            rounded-full

            bg-cyan-500/10

            blur-[100px]
          "
          />

          <div
            className="
            absolute
            bottom-[-100px]
            right-[10%]

            w-[250px]
            h-[250px]

            rounded-full

            bg-blue-500/10

            blur-[100px]
          "
          />

          {/* CONTENT */}

          <div
            className="
            relative
            z-10
     
            grid
            lg:grid-cols-3

            gap-8
          "
          >
            {[
              {
                title: "Frontend Systems",
                desc: "High-performance interfaces with React, Three.js, animation systems, and scalable UI architecture.",
              },

              {
                title: "AI & Automation",
                desc: "AI-powered workflows, automation pipelines, LLM integrations, and enterprise productivity systems.",
              },

              {
                title: "Cloud Infrastructure",
                desc: "Scalable cloud-native platforms using AWS, DevOps pipelines, Docker, Kubernetes, and CI/CD systems.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                className="
                group

                relative

                rounded-3xl

                border
                border-white/40

                bg-white/50
                backdrop-blur-2xl

                p-8

                overflow-hidden

                transition-all
                duration-500
              "
              >
                {/* HOVER LIGHT */}

                <div
                  className="
                  absolute
                  inset-0

                  opacity-0

                  bg-gradient-to-br
                  from-cyan-500/10
                  to-blue-500/10

                  transition-all
                  duration-500

                  group-hover:opacity-100
                "
                />

                <div className="relative z-10">
                  <h3
                    className="
                    text-2xl
                    font-bold

                    text-[#3b64b4]
                  "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                    mt-5

                    text-[color:var(--text-primary)]
                    leading-relaxed
                  "
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
