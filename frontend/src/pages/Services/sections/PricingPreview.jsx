import { motion } from "framer-motion";

import {
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Rocket,
  Crown,
} from "lucide-react";

const pricingPlans = [
  {
    icon: <Rocket size={24} />,

    title: "Startup",

    price: "$999",

    subtitle: "Perfect for MVP launch",

    features: [
      "Landing Page",
      "Responsive UI",
      "Backend APIs",
      "Deployment",
    ],

    gradient: "from-cyan-500 to-blue-500",

    popular: false,
  },

  {
    icon: <Sparkles size={24} />,

    title: "Business",

    price: "$2999",

    subtitle: "Best for SaaS products",

    features: [
      "Full Stack SaaS",
      "Dashboard",
      "Cloud Deployment",
      "AI Integration",
    ],

    gradient: "from-violet-500 to-fuchsia-500",

    popular: true,
  },

  {
    icon: <Crown size={24} />,

    title: "Enterprise",

    price: "Custom",

    subtitle: "Enterprise scaling systems",

    features: [
      "Microservices",
      "Cloud Infra",
      "Security",
      "Dedicated Team",
    ],

    gradient: "from-orange-500 to-red-500",

    popular: false,
  },
];

const processSteps = [
  {
    step: "01",

    title: "Discovery",

    desc: "Understanding goals & requirements.",
  },

  {
    step: "02",

    title: "Planning",

    desc: "Architecture & roadmap creation.",
  },

  {
    step: "03",

    title: "Development",

    desc: "UI, backend & cloud systems.",
  },

  {
    step: "04",

    title: "Launch",

    desc: "Deployment & scaling support.",
  },
];

const PricingPreview = () => {
  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#F5F7FB]
      flex
      items-center
      pt-32
      pb-24
    "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
        absolute
        top-[-200px]
        right-[-200px]

        w-[450px]
        h-[450px]

        rounded-full

        bg-cyan-200/30

        blur-3xl
      "
      />

      <div
        className="
        absolute
        bottom-[-200px]
        left-[-200px]

        w-[400px]
        h-[400px]

        rounded-full

        bg-violet-200/30

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
            font-semibold

            mb-6
          "
          >
            <ShieldCheck size={16} />

            Flexible Pricing
          </div>

          {/* HEADING */}

          <h2
            className="
            text-4xl
            md:text-5xl

            font-bold

            leading-tight

            text-[#0B0F19]

            mb-6
          "
          >
            Pricing Plans
            For Every Business
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            text-lg

            text-gray-600

            leading-relaxed
          "
          >
            Choose scalable development
            packages tailored for startups,
            SaaS products, and enterprises.
          </p>
        </motion.div>

        {/* ================= PRICING GRID ================= */}

        <div
          className="
          grid
          lg:grid-cols-3

          gap-6

          mb-24
        "
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
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
              className={`
              group
              relative

              overflow-hidden

              rounded-[32px]

              border

              p-8

              transition-all
              duration-500

              hover:-translate-y-3

              ${
                plan.popular
                  ? "bg-[#0B0F19] border-black text-white scale-[1.02]"
                  : "bg-white border-black/5"
              }
            `}
            >
              {/* POPULAR */}

              {plan.popular && (
                <div
                  className="
                  absolute
                  top-5
                  right-5

                  px-3
                  py-1

                  rounded-full

                  bg-cyan-500

                  text-white
                  text-xs
                  font-semibold
                "
                >
                  Popular
                </div>
              )}

              {/* GLOW */}

              <div
                className={`
                absolute
                -top-20
                -right-20

                w-44
                h-44

                rounded-full

                blur-3xl

                opacity-20

                bg-gradient-to-br
                ${plan.gradient}
              `}
              />

              {/* ICON */}

              <div
                className={`
                relative
                z-10

                w-14
                h-14

                rounded-2xl

                flex
                items-center
                justify-center

                text-white

                bg-gradient-to-br
                ${plan.gradient}

                mb-6
              `}
              >
                {plan.icon}
              </div>

              {/* TITLE */}

              <h3
                className="
                text-2xl

                font-bold

                mb-3
              "
              >
                {plan.title}
              </h3>

              {/* SUBTITLE */}

              <p
                className={`
                text-sm

                mb-6

                ${
                  plan.popular
                    ? "text-white/70"
                    : "text-gray-600"
                }
              `}
              >
                {plan.subtitle}
              </p>

              {/* PRICE */}

              <div className="mb-8">
                <h2
                  className="
                  text-5xl

                  font-black
                "
                >
                  {plan.price}
                </h2>

                <p
                  className={`
                  mt-2
                  text-sm

                  ${
                    plan.popular
                      ? "text-white/60"
                      : "text-gray-500"
                  }
                `}
                >
                  Starting Price
                </p>
              </div>

              {/* FEATURES */}

              <div
                className="
                flex
                flex-col

                gap-4

                mb-8
              "
              >
                {plan.features.map(
                  (feature, i) => (
                    <div
                      key={i}
                      className="
                      flex
                      items-center

                      gap-3
                    "
                    >
                      <div
                        className="
                        w-7
                        h-7

                        rounded-full

                        bg-cyan-500/10

                        flex
                        items-center
                        justify-center

                        text-cyan-500
                      "
                      >
                        <Check size={14} />
                      </div>

                      <p
                        className={`
                        text-sm

                        ${
                          plan.popular
                            ? "text-white/80"
                            : "text-gray-700"
                        }
                      `}
                      >
                        {feature}
                      </p>
                    </div>
                  )
                )}
              </div>

              {/* BUTTON */}

              <button
                className={`
                w-full

                py-3

                rounded-full

                text-sm
                font-semibold

                transition-all
                duration-300

                flex
                items-center
                justify-center
                gap-2

                ${
                  plan.popular
                    ? "bg-cyan-500 text-white hover:scale-105"
                    : "bg-[#0B0F19] text-white hover:scale-105"
                }
              `}
              >
                Get Started

                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* ================= PROCESS ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
          relative

          overflow-hidden

          rounded-[40px]

          bg-[#0B0F19]

          px-6
          md:px-12

          py-16
        "
        >
          {/* GLOW */}

          <div
            className="
            absolute
            top-[-100px]
            right-[-100px]

            w-[250px]
            h-[250px]

            rounded-full

            bg-cyan-500/20

            blur-3xl
          "
          />

          {/* TOP */}

          <div
            className="
            relative
            z-10

            text-center

            max-w-3xl
            mx-auto

            mb-16
          "
          >
            <div
              className="
              inline-flex

              items-center
              gap-2

              px-5
              py-2

              rounded-full

              bg-white/10

              text-cyan-400
              text-sm
              font-semibold

              mb-6
            "
            >
              Development Process
            </div>

            <h2
              className="
              text-4xl
              md:text-5xl

              font-bold

              text-white

              mb-6
            "
            >
              How We Build
              Digital Products
            </h2>

            <p
              className="
              text-white/70

              text-lg
            "
            >
              Structured workflow for scalable,
              modern, and enterprise-grade
              product development.
            </p>
          </div>

          {/* PROCESS GRID */}

          <div
            className="
            relative
            z-10

            grid
            md:grid-cols-2
            xl:grid-cols-4

            gap-6
          "
          >
            {processSteps.map(
              (step, index) => (
                <motion.div
                  key={index}
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
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="
                  rounded-[28px]

                  bg-white/5

                  border
                  border-white/10

                  backdrop-blur-xl

                  p-6

                  transition-all
                  duration-500

                  hover:-translate-y-2

                  hover:border-cyan-400/30
                "
                >
                  {/* STEP */}

                  <h2
                    className="
                    text-5xl

                    font-black

                    text-cyan-400/20

                    mb-5
                  "
                  >
                    {step.step}
                  </h2>

                  {/* TITLE */}

                  <h3
                    className="
                    text-xl

                    font-bold

                    text-white

                    mb-4
                  "
                  >
                    {step.title}
                  </h3>

                  {/* DESC */}

                  <p
                    className="
                    text-white/70

                    text-sm

                    leading-relaxed
                  "
                  >
                    {step.desc}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPreview;