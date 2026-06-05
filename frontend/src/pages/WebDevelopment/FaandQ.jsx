import {
  useState,
  useRef,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  Plus,
  Minus,
  Sparkles,
  HelpCircle,
} from "lucide-react";

const faqs = [
  {
    question:
      "How long does a website project take?",
    answer:
      "Most premium websites take between 2–8 weeks depending on complexity, animations, integrations, and custom systems.",
  },

  {
    question:
      "What is included in pricing?",
    answer:
      "UI/UX design, frontend development, backend systems, responsive optimization, animations, SEO setup, deployment, and support.",
  },

  {
    question:
      "Do you provide support after launch?",
    answer:
      "Yes. We provide maintenance, scaling support, feature upgrades, monitoring, and optimization after deployment.",
  },

  {
    question:
      "Is SEO included?",
    answer:
      "Absolutely. Every website is optimized for technical SEO, Core Web Vitals, structured content, and performance-first architecture.",
  },

  {
    question:
      "Can you integrate AI features?",
    answer:
      "Yes. We build AI chatbots, AI search systems, automation workflows, resume analyzers, dashboards, and custom AI integrations.",
  },

  {
    question:
      "Do you handle hosting & deployment?",
    answer:
      "Yes. We deploy on Vercel, AWS, Firebase, DigitalOcean, and scalable cloud infrastructures with CI/CD pipelines.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const containerRef = useRef(null);

  return (
    <section
      className="
      relative
      overflow-hidden

      py-32

      bg-[#F5F7FB]
    "
    >
      {/* ================= GRID ================= */}

      <div
        className="
        absolute
        inset-0

        opacity-[0.04]

        [background-image:linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)]

        [background-size:70px_70px]
      "
      />

      {/* ================= TOP GLOW ================= */}

      <div
        className="
        absolute
        top-[-250px]
        left-[-150px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-cyan-500/20

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

        bg-blue-500/20

        blur-[160px]
      "
      />

      {/* ================= CONTAINER ================= */}

      <div
        ref={containerRef}
        className="
        relative
        z-10

        max-w-5xl
        mx-auto

        px-6
      "
      >
        {/* ================= TOP TAG ================= */}

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
          flex
          justify-center
        "
        >
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

            bg-white/70
            backdrop-blur-2xl

            text-cyan-600
            text-sm
            font-semibold

            shadow-[0_10px_40px_rgba(6,182,212,0.08)]

            mb-8
          "
          >
            <Sparkles size={16} />

            Frequently Asked Questions
          </div>
        </motion.div>

        {/* ================= HEADING ================= */}

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
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2
            className="
            text-5xl
            md:text-6xl

            font-black

            leading-tight

            text-[#0B0F19]
          "
          >
            Questions Before
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
              Building Together?
            </span>
          </h2>

          <p
            className="
            mt-6

            text-lg
            leading-relaxed

            text-gray-600

            max-w-3xl
            mx-auto
          "
          >
            Everything clients usually
            ask before starting premium
            web development, AI systems,
            SaaS platforms, and scalable
            digital products.
          </p>
        </motion.div>

        {/* ================= FAQ LIST ================= */}

        <div
          className="
          mt-20

          flex
          flex-col

          gap-6
        "
        >
          {faqs.map((faq, index) => {
            const isActive =
              activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
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
                className="
                group
                relative
              "
              >
                {/* GLOW */}

                <div
                  className={`
                    absolute
                    inset-0

                    rounded-[32px]

                    bg-gradient-to-r
                    from-cyan-500/0
                    via-cyan-500/10
                    to-blue-500/0

                    blur-2xl

                    opacity-0

                    transition-all
                    duration-500

                    ${
                      isActive
                        ? "opacity-100"
                        : "group-hover:opacity-100"
                    }
                  `}
                />

                {/* CARD */}

                <div
                  className={`
                    relative

                    overflow-hidden

                    rounded-[32px]

                    border

                    backdrop-blur-3xl

                    transition-all
                    duration-500

                    ${
                      isActive
                        ? `
                          border-cyan-400/30
                          bg-white/85

                          shadow-[0_20px_60px_rgba(6,182,212,0.12)]
                        `
                        : `
                          border-black/5
                          bg-white/60

                          hover:border-cyan-400/20
                          hover:bg-white/80
                        `
                    }
                  `}
                >
                  {/* BLUR OVERLAY */}

                  <div
                    className="
                    absolute
                    inset-0

                    bg-gradient-to-br
                    from-cyan-500/[0.03]
                    via-transparent
                    to-blue-500/[0.04]
                  "
                  />

                  {/* BUTTON */}

                  <button
                    onClick={() =>
                      setActiveIndex(
                        isActive
                          ? null
                          : index
                      )
                    }
                    className="
                    relative
                    z-10

                    w-full

                    flex
                    items-center
                    justify-between

                    gap-6

                    text-left

                    px-8
                    py-7
                  "
                  >
                    {/* LEFT */}

                    <div
                      className="
                      flex
                      items-center
                      gap-5
                    "
                    >
                      {/* ICON */}

                      <div
                        className={`
                          flex
                          items-center
                          justify-center

                          w-14
                          h-14

                          rounded-2xl

                          transition-all
                          duration-500

                          ${
                            isActive
                              ? `
                                bg-gradient-to-r
                                from-cyan-500
                                to-blue-500

                                text-white

                                shadow-[0_10px_30px_rgba(6,182,212,0.35)]
                              `
                              : `
                                bg-cyan-500/10
                                text-cyan-600
                              `
                          }
                        `}
                      >
                        <HelpCircle
                          size={24}
                        />
                      </div>

                      {/* QUESTION */}

                      <h3
                        className="
                        text-lg
                        md:text-xl

                        font-bold

                        text-[#0B0F19]
                      "
                      >
                        {faq.question}
                      </h3>
                    </div>

                    {/* TOGGLE */}

                    <div
                      className={`
                        flex
                        items-center
                        justify-center

                        min-w-[52px]
                        h-[52px]

                        rounded-2xl

                        transition-all
                        duration-500

                        ${
                          isActive
                            ? `
                              bg-gradient-to-r
                              from-cyan-500
                              to-blue-500

                              text-white

                              rotate-180
                            `
                            : `
                              bg-black/[0.04]
                              text-[#0B0F19]

                              group-hover:bg-cyan-500/10
                              group-hover:text-cyan-600
                            `
                        }
                      `}
                    >
                      {isActive ? (
                        <Minus size={22} />
                      ) : (
                        <Plus size={22} />
                      )}
                    </div>
                  </button>

                  {/* ANSWER */}

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                        className="
                        overflow-hidden
                      "
                      >
                        <div
                          className="
                          relative
                          z-10

                          px-8
                          pb-8

                          pl-[108px]
                        "
                        >
                          <div
                            className="
                            w-full
                            h-[1px]

                            bg-gradient-to-r
                            from-cyan-500/20
                            via-blue-500/30
                            to-transparent

                            mb-6
                          "
                          />

                          <p
                            className="
                            text-gray-600
                            leading-relaxed
                            text-[16px]
                          "
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;