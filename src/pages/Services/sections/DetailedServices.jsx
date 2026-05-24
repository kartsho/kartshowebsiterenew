import { motion } from "framer-motion";

import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import aiAutomation from "../../../assets/images/aiAutomation.jpg";
import saasImage from "../../../assets/images/saas.jpg";
import cloudImage from "../../../assets/images/clouddevops.jpg";

const services = [
  {
    title: "AI Development & Automation",

    desc: "We build intelligent AI systems, smart automation workflows, enterprise chatbots, recommendation engines, and AI-powered business solutions for modern organizations.",

    image: aiAutomation,

    features: [
      "OpenAI Integrations",
      "AI Chatbots",
      "Workflow Automation",
      "Predictive Analytics",
      "AI SaaS Platforms",
    ],

    stats: "98% Automation Efficiency",

    tech: [
      "OpenAI",
      "LangChain",
      "Python",
      "Node.js",
    ],
  },

  {
    title: "Enterprise SaaS Platforms",

    desc: "Scalable SaaS products with enterprise dashboards, subscriptions, analytics systems, billing architecture, cloud scaling, and high-performance infrastructure.",

    image: saasImage,

    features: [
      "Admin Dashboards",
      "Subscription Systems",
      "Cloud Architecture",
      "Analytics Systems",
      "Enterprise APIs",
    ],

    stats: "50K+ Active Users",

    tech: [
      "React",
      "Next.js",
      "MongoDB",
      "AWS",
    ],
  },

  {
    title: "Cloud & DevOps Solutions",

    desc: "We deliver secure cloud infrastructure, CI/CD pipelines, Kubernetes systems, Docker deployment, and scalable DevOps architecture.",

    image: cloudImage,

    features: [
      "Cloud Deployment",
      "Docker Systems",
      "CI/CD Pipelines",
      "Kubernetes",
      "Server Scaling",
    ],

    stats: "99.9% Uptime",

    tech: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Linux",
    ],
  },
];

const DetailedServices = () => {
  return (
    <section
      id="detailed-services"
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

        w-[350px]
        h-[350px]

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

        <div
          className="
          text-center

          max-w-3xl
          mx-auto

          mb-28
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
            Detailed Solutions
          </div>

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
            Enterprise Services
            Built For Scale
          </h2>

          <p
            className="
            text-lg

            text-gray-600

            leading-relaxed
          "
          >
            We design scalable systems,
            enterprise software, and modern
            digital products engineered for
            performance, automation, and growth.
          </p>
        </div>

        {/* ================= SERVICES ================= */}

        <div className="space-y-40">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
              grid
              lg:grid-cols-2

              gap-20

              items-center

              ${
                index % 2 !== 0
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }
            `}
            >
              {/* ================= CONTENT ================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
                viewport={{ once: true }}
              >
                {/* TAG */}

                <div
                  className="
                  inline-flex

                  px-4
                  py-2

                  rounded-full

                  bg-white

                  border
                  border-black/5

                  text-sm
                  font-medium

                  text-cyan-700

                  mb-6
                "
                >
                  Premium Solution
                </div>

                {/* TITLE */}

                <h3
                  className="
                  text-4xl
                  md:text-5xl

                  font-bold

                  leading-tight

                  text-[#0B0F19]

                  mb-8
                "
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                  text-lg

                  text-gray-600

                  leading-relaxed

                  mb-10
                "
                >
                  {service.desc}
                </p>

                {/* FEATURES */}

                <div
                  className="
                  grid
                  sm:grid-cols-2

                  gap-5

                  mb-10
                "
                >
                  {service.features.map(
                    (feature, i) => (
                      <div
                        key={i}
                        className="
                        flex
                        items-center
                        gap-3
                      "
                      >
                        <CheckCircle2
                          size={20}
                          className="
                          text-cyan-500
                        "
                        />

                        <span
                          className="
                          text-gray-700
                          font-medium
                        "
                        >
                          {feature}
                        </span>
                      </div>
                    )
                  )}
                </div>

                {/* TECH STACK */}

                <div
                  className="
                  flex
                  flex-wrap

                  gap-4

                  mb-12
                "
                >
                  {service.tech.map(
                    (tech, i) => (
                      <div
                        key={i}
                        className="
                        px-5
                        py-3

                        rounded-full

                        bg-white

                        border
                        border-black/5

                        text-sm
                        font-medium

                        text-[#0B0F19]

                        transition-all
                        duration-300

                        hover:bg-cyan-500
                        hover:text-white
                        hover:-translate-y-1
                      "
                      >
                        {tech}
                      </div>
                    )
                  )}
                </div>

                {/* BUTTON */}

                <button
                  className="
                  group

                  flex
                  items-center
                  gap-3

                  text-cyan-600
                  font-semibold
                  text-lg
                "
                >
                  Explore Solution

                  <ArrowRight
                    className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                  />
                </button>
              </motion.div>

              {/* ================= IMAGE ================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                viewport={{ once: true }}
                className="
                relative
              "
              >
                {/* IMAGE CARD */}

                <div
                className="
                relative

                overflow-hidden

                  rounded-[28px]
                  sm:rounded-[40px]

                  bg-white

                  border
                  border-black/5
                  p-3
                  sm:p-6
                  lg:p-10
                  shadow-[0_30px_80px_rgba(0,0,0,0.12)]

                  group
                "
                >
                  {/* IMAGE */}

                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                    w-full
                    h-[260px]
                    sm:h-[380px]
                    lg:h-[520px]
                    object-cover
                    object-center
                    transition-all
                    duration-700
                    rounded-3xl
                    scale-[1.10]
                    border-4
                    border-b-fuchsia-400
                    border-l-cyan-300
                    border-r-lime-500
                    border-t-red-400
                  "
                  />

                  {/* OVERLAY */}

                  <div
                    className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-black/30
                    to-transparent
                  "
                  />
                </div>

                {/* FLOATING STATS CARD */}

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                  }}
                  className="
                  hidden
                  lg:block

                  absolute
                  bottom-[-110px]
                  left-[-20px]

                  backdrop-blur-xl

                  bg-white/80

                  border-4
                  border-green-400

                  rounded-3xl
                  
                  px-6
                  py-5

                  shadow-xl
                "
                >
                  <p
                    className="
                    text-sm
                    text-gray-500

                    mb-2
                  "
                  >
                    Enterprise Performance
                  </p>

                  <h4
                    className="
                    text-2xl

                    font-bold

                    text-cyan-600
                  "
                  >
                    {service.stats}
                  </h4>
                </motion.div>

                {/* FLOATING BADGE */}

                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                  className="
                  hidden
                  lg:block

                  absolute
                  top-[-85px]
                  right-[-20px]

                  px-6
                  py-4

                  rounded-3xl

                  bg-cyan-500

                  text-white
                    border-4
                  border-be-fuchsia-400
                  border-e-emerald-500
                  border-t-cyan-200
                  border-r-indigo-500
                  border-l-blue-700

                  shadow-[0_0_40px_rgba(6,182,212,0.35)]
                "
                >
                  Enterprise Ready
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;
