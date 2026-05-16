import { motion } from "framer-motion";

const processSteps = [
  {
    id: "01",
    title: "Discovery",
    description:
      "We understand your business goals, audience, and technical requirements before planning the roadmap.",
  },

  {
    id: "02",
    title: "Strategy",
    description:
      "Our team creates scalable product architecture, UI systems, and execution strategies.",
  },

  {
    id: "03",
    title: "Development",
    description:
      "We build modern AI-powered scalable solutions with clean production-level engineering.",
  },

  {
    id: "04",
    title: "Launch & Growth",
    description:
      "After deployment we optimize performance, scaling, analytics, and business growth systems.",
  },
];

const HowWeWork = () => {
  return (
    <section
      className="
      relative
      py-32
      overflow-hidden
      bg-[#F8FAFC]
    "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
        absolute
        top-0
        right-0
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
        left-0
        w-[350px]
        h-[350px]
        bg-blue-100/40
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
          mb-24
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
            How We Work
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
            Our Proven Process for
            Building Digital Products
          </h2>

          <p
            className="
            mt-6
            text-lg
            text-gray-600
            leading-relaxed
          "
          >
            We follow a modern scalable workflow
            that helps startups and enterprises
            move faster with better results.
          </p>
        </motion.div>

        {/* ================= PROCESS STEPS ================= */}

        <div
          className="
          relative
          flex
          flex-col
          gap-16
        "
        >
          {/* CENTER LINE */}

          <div
            className="
            hidden lg:block

            absolute
            left-1/2
            top-0

            -translate-x-1/2

            w-[2px]
            h-full

            bg-gradient-to-b
            from-cyan-200
            via-cyan-400
            to-cyan-200
          "
          />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
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
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
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
              {/* CONTENT CARD */}

              <div
                className="
                w-full
                lg:w-1/2
              "
              >
                <div
                  className="
                  group
                  relative
                  overflow-hidden

                  rounded-[32px]

                  bg-white/70
                  backdrop-blur-xl

                  border
                  border-white/40

                  p-10

                  shadow-[0_10px_40px_rgba(0,0,0,0.06)]

                  transition-all
                  duration-500

                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)]
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
                    from-cyan-100/50
                    to-transparent
                  "
                  />

                  {/* STEP NUMBER */}

                  <div
                    className="
                    relative
                    z-10

                    text-6xl
                    font-bold

                    text-cyan-500/20

                    mb-6
                  "
                  >
                    {step.id}
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                    relative
                    z-10

                    text-3xl
                    font-bold
                    text-[#0B0F19]

                    mb-5
                  "
                  >
                    {step.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                    relative
                    z-10

                    text-gray-600
                    leading-relaxed
                    text-lg
                  "
                  >
                    {step.description}
                  </p>

                  {/* BOTTOM LINE */}

                  <div
                    className="
                    absolute
                    bottom-0
                    left-0

                    w-0
                    h-1

                    bg-cyan-500

                    transition-all
                    duration-500

                    group-hover:w-full
                  "
                  />
                </div>
              </div>

              {/* CENTER DOT */}

              <div
                className="
                hidden lg:flex

                relative
                z-20

                w-8
                h-8

                rounded-full

                bg-cyan-500

                border-[6px]
                border-white

                shadow-lg
              "
              />

              {/* EMPTY SIDE */}

              <div className="hidden lg:block lg:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;