import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  Plus,
  Minus,
} from "lucide-react";

const faqs = [
  {
    question:
      "How fast do you respond?",
    answer:
      "Our team usually responds within 2 hours during business hours. Enterprise clients receive priority support and faster communication channels.",
  },

  {
    question:
      "Do you work globally?",
    answer:
      "Yes. We work with startups, enterprises, and organizations across 12+ countries worldwide through remote-first collaboration.",
  },

  {
    question:
      "Can you sign NDA agreements?",
    answer:
      "Absolutely. We regularly work under NDA contracts for confidential enterprise systems, SaaS products, and AI platforms.",
  },

  {
    question:
      "What industries do you serve?",
    answer:
      "We build solutions for SaaS, fintech, healthcare, logistics, eCommerce, AI startups, enterprise software, and cloud infrastructure companies.",
  },

  {
    question:
      "Do you provide maintenance?",
    answer:
      "Yes. We provide long-term maintenance, cloud monitoring, scaling support, security updates, and continuous optimization.",
  },

  {
    question:
      "What technologies do you use?",
    answer:
      "Our stack includes React, Next.js, Node.js, AWS, Docker, Kubernetes, OpenAI APIs, MongoDB, PostgreSQL, and modern cloud systems.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(
      activeIndex === index ? null : index
    );
  };

  return (
    <section
      className="
      relative
      py-32
      overflow-hidden
      bg-[#F5F7FB]
    "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
        absolute
        top-[-200px]
        left-[-200px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-cyan-200/40

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

      {/* ================= GRID TEXTURE ================= */}

     
      {/* ================= CONTAINER ================= */}

      <div
        className="
        relative
        z-10

        max-w-5xl
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
            inline-block

            px-5
            py-2

            rounded-full

            bg-cyan-100

            text-cyan-700
            text-sm
            font-semibold

            mb-6
          "
          >
            Frequently Asked Questions
          </div>

          {/* HEADING */}

          <h2
            className="
            text-5xl
            md:text-6xl

            font-bold

            text-[#0B0F19]

            leading-tight

            mb-6
          "
          >
            Everything You
            <br />
            Need To Know
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            text-lg
            text-gray-600

            leading-relaxed

            max-w-3xl
            mx-auto
          "
          >
            Answers to common questions about
            our process, support, technologies,
            enterprise systems, and global
            collaboration.
          </p>
        </motion.div>

        {/* ================= FAQ LIST ================= */}

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isActive =
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
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="
                overflow-hidden

                rounded-[32px]

                bg-white/70
                backdrop-blur-2xl

                border
                border-white/40

                shadow-[0_15px_50px_rgba(0,0,0,0.06)]
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
                "
                >
                  <h3
                    className="
                    text-xl
                    md:text-2xl

                    font-semibold

                    text-[#0B0F19]
                  "
                  >
                    {faq.question}
                  </h3>

                  <div
                    className="
                    min-w-[52px]
                    min-h-[52px]

                    rounded-2xl

                    bg-cyan-500

                    flex
                    items-center
                    justify-center

                    text-white

                    shadow-[0_10px_30px_rgba(6,182,212,0.35)]
                  "
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
                    >
                      <div
                        className="
                        px-8
                        pb-8

                        text-gray-600
                        text-lg

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