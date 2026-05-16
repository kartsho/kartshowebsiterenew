import { useState } from "react";

import { motion } from "framer-motion";

import {
  Check,
  Sparkles,
} from "lucide-react";

import { gymPricingPlans } from "../../../data/gymPricingPlans";

const GymPricing = () => {
  const [currency, setCurrency] =
    useState("INR");

  return (
    <section
      className="
      relative
      overflow-hidden

      bg-[#F5F7FB]

      py-32
    "
    >
      {/* ================= BACKGROUND GRID ================= */}

      <div
        className="
        absolute
        inset-0

        opacity-[0.04]

        [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]

        [background-size:70px_70px]
      "
      />

      {/* ================= GLOW ================= */}

      <div
        className="
        absolute
        top-[-180px]
        left-[-120px]

        w-[400px]
        h-[400px]

        rounded-full

        bg-cyan-500/20

        blur-[120px]
      "
      />

      <div
        className="
        absolute
        bottom-[-180px]
        right-[-120px]

        w-[400px]
        h-[400px]

        rounded-full

        bg-blue-500/20

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

        <div className="text-center">
          {/* TAG */}

          <div
            className="
            inline-flex
            items-center
            gap-2

            px-5
            py-3

            rounded-full

            bg-cyan-500/10

            text-cyan-700
            font-semibold
            text-sm

            mb-8
          "
          >
            <Sparkles size={16} />

            Gym Website Pricing
          </div>

          {/* HEADING */}

          <h2
            className="
            text-5xl
            lg:text-6xl

            font-black

            leading-[1.05]

            text-[#0B0F19]
          "
          >
            Pricing Built
            <br />

            For Every Gym Size.
          </h2>

          {/* DESC */}

          <p
            className="
            mt-6

            text-lg
            text-gray-600

            max-w-3xl
            mx-auto

            leading-relaxed
          "
          >
            Premium gym management
            systems, AI automation,
            membership platforms,
            analytics dashboards, and
            enterprise fitness
            solutions engineered for
            scale.
          </p>

          {/* ================= CURRENCY SWITCH ================= */}

          <div
            className="
            mt-10

            inline-flex

            rounded-2xl

            bg-white/80
            backdrop-blur-2xl

            p-2

            border
            border-white/50

            shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          "
          >
            {/* INR */}

            <button
              onClick={() =>
                setCurrency("INR")
              }
              className={`
                px-6
                py-3

                rounded-xl

                font-semibold

                transition-all
                duration-300

                ${
                  currency === "INR"
                    ? `
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-500

                      text-white

                      shadow-[0_10px_30px_rgba(6,182,212,0.25)]
                    `
                    : `
                      text-gray-600
                    `
                }
              `}
            >
              ₹ INR
            </button>

            {/* USD */}

            <button
              onClick={() =>
                setCurrency("USD")
              }
              className={`
                px-6
                py-3

                rounded-xl

                font-semibold

                transition-all
                duration-300

                ${
                  currency === "USD"
                    ? `
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-500

                      text-white

                      shadow-[0_10px_30px_rgba(6,182,212,0.25)]
                    `
                    : `
                      text-gray-600
                    `
                }
              `}
            >
              $ USD
            </button>
          </div>
        </div>

        {/* ================= PRICING GRID ================= */}

        <div
          className="
          mt-24

          grid
          md:grid-cols-2
          xl:grid-cols-4

          gap-6
        "
        >
          {gymPricingPlans[
            currency
          ].map((plan, index) => (
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
                delay:
                  index * 0.08,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -10,
              }}
              className={`
                group

                relative

                overflow-hidden

                rounded-[28px]

                border

                p-6

                backdrop-blur-3xl

                transition-all
                duration-500

                ${
                  plan.highlighted
                    ? `
                      border-cyan-400/40
                      bg-gradient-to-b
                      from-cyan-500/10
                      to-blue-500/10

                      scale-[1.02]

                      shadow-[0_20px_80px_rgba(6,182,212,0.20)]
                    `
                    : `
                      border-white/40
                      bg-white/70

                      shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                    `
                }
              `}
            >
              {/* GLOW */}

              <div
                className="
                absolute
                -top-20
                -right-20

                w-40
                h-40

                rounded-full

                bg-cyan-400/10

                blur-3xl

                opacity-0

                group-hover:opacity-100

                transition-all
                duration-700
              "
              />

              {/* BADGE */}

              <div
                className="
                inline-flex

                px-4
                py-2

                rounded-full

                bg-cyan-500/10

                text-cyan-700
                text-sm
                font-semibold
              "
              >
                {plan.badge}
              </div>

              {/* TITLE */}

              <h3
                className="
                mt-5

                text-2xl
                font-black

                text-[#0B0F19]
              "
              >
                {plan.title}
              </h3>

              {/* SUBTITLE */}

              <p
                className="
                mt-4

                text-gray-600
                leading-relaxed

                text-sm
              "
              >
                {plan.subtitle}
              </p>

              {/* PRICE */}

              <div className="mt-7">
                <h4
                  className="
                  text-4xl
                  font-black

                  leading-tight

                  text-[#0B0F19]
                "
                >
                  {plan.price}
                </h4>

                <p
                  className="
                  mt-2

                  text-sm
                  text-gray-500
                "
                >
                  {plan.hosting}
                </p>
              </div>

              {/* FEATURES */}

              <div
                className="
                mt-8

                flex
                flex-col

                gap-3
              "
              >
                {plan.features.map(
                  (
                    feature,
                    featureIndex
                  ) => (
                    <div
                      key={featureIndex}
                      className="
                      flex
                      items-start
                      gap-3
                    "
                    >
                      <div
                        className="
                        mt-1

                        text-cyan-600
                      "
                      >
                        <Check
                          size={17}
                        />
                      </div>

                      <p
                        className="
                        text-sm
                        text-gray-700

                        leading-relaxed
                      "
                      >
                        {feature}
                      </p>
                    </div>
                  )
                )}
              </div>

              {/* TIMELINE */}

              <div
                className="
                mt-8

                rounded-2xl

                bg-black/[0.03]

                px-5
                py-4
              "
              >
                <p
                  className="
                  text-xs
                  uppercase
                  tracking-wider

                  text-gray-500
                "
                >
                  Timeline
                </p>

                <h4
                  className="
                  mt-1

                  font-bold

                  text-[#0B0F19]
                "
                >
                  {plan.timeline}
                </h4>
              </div>

              {/* BUTTONS */}

              <div
                className="
                mt-8

                flex
                flex-col

                gap-3
              "
              >
                {/* MAIN BUTTON */}

                <button
                  className={`
                    w-full

                    py-4

                    rounded-2xl

                    font-semibold
                    text-sm

                    transition-all
                    duration-300

                    ${
                      plan.highlighted
                        ? `
                          bg-gradient-to-r
                          from-cyan-500
                          to-blue-500

                          text-white

                          shadow-[0_10px_40px_rgba(6,182,212,0.35)]
                        `
                        : `
                          bg-[#0B0F19]
                          text-white
                        `
                    }
                  `}
                >
                  {plan.buttonText}
                </button>

                {/* PRESS KIT */}

                <a
                  href="/presskit/GMS Proposal Simple.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  w-full

                  py-4

                  rounded-2xl

                  border
                  border-black/10

                  bg-white/70

                  text-center
                  text-[#0B0F19]
                  text-sm
                  font-semibold

                  hover:border-cyan-400/30
                  hover:text-cyan-600

                  transition-all
                  duration-300
                "
                >
                  Check Press Kit
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GymPricing;