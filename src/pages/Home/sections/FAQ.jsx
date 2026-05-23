import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  Plus,
  Minus,
} from "lucide-react";

const faqData = [
  {
    question:
      "What does Kartsho Enterprises provide?",

    answer:
      "Kartsho is a multi-venture digital enterprise centered on marketing, legal tech, and education.",
  },

  {
    question:
      "How long does a typical project take?",

    answer:
      "Project timelines depend on the venture and scope, but the team emphasizes fast response, clear execution, and practical delivery.",
  },

  {
    question:
      "Do you provide AI integrations?",

    answer:
      "The public brand focuses more on digital ventures and enterprise systems than on a fixed technical stack.",
  },

  {
    question:
      "Can you scale products for enterprise usage?",

    answer:
      "Kartsho positions its work around scalable systems, measurable growth, and long-term support across multiple industries.",
  },

  {
    question:
      "Do you offer ongoing support and maintenance?",

    answer:
      "Yes. The company highlights a 24-hour response promise and ongoing support for active inquiries.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] =
    useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(
      activeIndex === index
        ? null
        : index
    );
  };

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
        top-[-100px]
        left-[-100px]

        w-[300px]
        h-[300px]

        rounded-full

        bg-cyan-100/40

        blur-3xl
      "
      />

      <div
        className="
        absolute
        bottom-[-120px]
        right-[-120px]

        w-[350px]
        h-[350px]

        rounded-full

        bg-blue-100/40

        blur-3xl
      "
      />

      {/* ================= CONTAINER ================= */}

      <div
        className="
        relative
        z-10

        max-w-4xl
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
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="
          text-center
          mb-20
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

            bg-cyan-100

            text-cyan-700
            text-sm
            font-medium

            mb-6
          "
          >
            Frequently Asked Questions
          </div>

          {/* HEADING */}

          <h2
            className="
            text-4xl
            md:text-5xl

            font-bold

            text-[#0B0F19]

            leading-tight

            mb-6
          "
          >
            Everything You Need
            To Know
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            max-w-2xl
            mx-auto

            text-lg
            text-gray-600

            leading-relaxed
          "
          >
            We help startups and enterprises
            understand our development process,
            AI systems, cloud scaling, and
            enterprise-grade solutions.
          </p>
        </motion.div>

        {/* ================= FAQ LIST ================= */}

        <div className="flex flex-col gap-6">
          {faqData.map((faq, index) => {
            const isOpen =
              activeIndex === index;

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
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                overflow-hidden

                rounded-[28px]

                border
                border-white/40

                bg-white/70
                backdrop-blur-xl

                shadow-[0_20px_60px_rgba(0,0,0,0.06)]
              "
              >
                {/* QUESTION */}

                <button
                  onClick={() =>
                    toggleFAQ(index)
                  }
                  className="
                  w-full

                  flex
                  items-center
                  justify-between

                  gap-6

                  px-8
                  py-7

                  text-left

                  transition-all
                  duration-300

                  hover:bg-cyan-50/40
                "
                >
                  <h3
                    className="
                    text-lg
                    md:text-xl

                    font-semibold

                    text-[#0B0F19]
                  "
                  >
                    {faq.question}
                  </h3>

                  {/* ICON */}

                  <div
                    className="
                    flex
                    items-center
                    justify-center

                    min-w-[48px]
                    min-h-[48px]

                    rounded-2xl

                    bg-cyan-100

                    text-cyan-600
                  "
                  >
                    {isOpen ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </div>
                </button>

                {/* ANSWER */}

                <AnimatePresence>
                  {isOpen && (
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
                        duration: 0.4,
                      }}
                    >
                      <div
                        className="
                        px-8
                        pb-8

                        text-gray-600

                        leading-relaxed
                      "
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
