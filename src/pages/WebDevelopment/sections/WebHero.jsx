import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  BarChart3,
  Globe,
  ShieldCheck,
  Rocket,
  BrainCircuit,
  Code2,
  CheckCircle2,
} from "lucide-react";

const trustPills = [
  "100+ Projects",
  "AI Powered",
  "Enterprise Ready",
  "SEO Optimized",
];

const orbitIcons = [
  BrainCircuit,
  Globe,
  Rocket,
  ShieldCheck,
];

const WebDevelopmentHero = () => {
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
      {/* ================= GRID ================= */}

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
        top-[-200px]
        left-[-100px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-cyan-500/20

        blur-[120px]
      "
      />

      <div
        className="
        absolute
        bottom-[-200px]
        right-[-100px]

        w-[500px]
        h-[500px]

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

        grid
        lg:grid-cols-2

        gap-20
        items-center
      "
      >
        {/* ================================================= */}
        {/* LEFT SIDE */}
        {/* ================================================= */}

        <div>
          {/* TAG */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
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

            text-cyan-700
            text-sm
            font-semibold

            mb-8
          "
          >
            <Sparkles size={16} />

            Elite Web Engineering
          </motion.div>

          {/* HEADING */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
            text-5xl
            sm:text-6xl
            lg:text-7xl

            font-black

            leading-[1]

            tracking-tight

            text-[#0B0F19]
          "
          >
            High-Performance
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
              Web Development
            </span>

            <br />

            For Modern Brands.
          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            className="
            mt-8

            text-lg
            leading-relaxed

            text-gray-600

            max-w-2xl
          "
          >
            We build conversion-focused,
            AI-powered, lightning-fast
            websites and SaaS platforms
            engineered for growth,
            scale, and performance.
          </motion.p>

          {/* BUTTONS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="
            flex
            flex-wrap

            items-center
            gap-5

            mt-12
          "
          >
            {/* BUTTON 1 */}

            <button
              className="
              group

              relative

              px-8
              py-5

              rounded-2xl

              overflow-hidden

              bg-gradient-to-r
              from-cyan-500
              to-blue-500

              text-white
              font-semibold

              shadow-[0_15px_50px_rgba(6,182,212,0.35)]

              hover:scale-105

              transition-all
              duration-500
            "
            >
              <span
                className="
                relative
                z-10

                flex
                items-center
                gap-3
              "
              >
                Start Your Project

                <ArrowRight
                  size={18}
                  className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
                />
              </span>

              <div
                className="
                absolute
                inset-0

                opacity-0

                bg-white/20

                transition-opacity
                duration-500

                group-hover:opacity-100
              "
              />
            </button>

            {/* BUTTON 2 */}

            <button
              className="
              px-8
              py-5

              rounded-2xl

              border
              border-black/10

              bg-white/60
              backdrop-blur-xl

              text-[#0B0F19]
              font-semibold

              hover:border-cyan-400/40
              hover:bg-cyan-500/10

              transition-all
              duration-300
            "
            >
              Book Strategy Call
            </button>
          </motion.div>

          {/* TRUST PILLS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.1,
            }}
            className="
            flex
            flex-wrap

            gap-4

            mt-14
          "
          >
            {trustPills.map(
              (pill, index) => (
                <div
                  key={index}
                  className="
                  px-5
                  py-3

                  rounded-full

                  border
                  border-black/5

                  bg-white/70
                  backdrop-blur-xl

                  text-sm
                  font-medium

                  text-gray-700

                  shadow-[0_10px_30px_rgba(0,0,0,0.05)]

                  hover:border-cyan-400/40
                  hover:text-cyan-600

                  transition-all
                  duration-300
                "
                >
                  {pill}
                </div>
              )
            )}
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
          {/* MAIN GLASS DASHBOARD */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
            relative

            w-full
            max-w-[540px]

            rounded-[40px]

            border
            border-white/40

            bg-white/60
            backdrop-blur-3xl

            overflow-hidden

            p-6

            shadow-[0_30px_80px_rgba(0,0,0,0.12)]
          "
          >
            {/* TOP BAR */}

            <div
              className="
              flex
              items-center
              justify-between
            "
            >
              <div className="flex gap-2">
                <div
                  className="
                  w-3
                  h-3

                  rounded-full

                  bg-red-400
                "
                />

                <div
                  className="
                  w-3
                  h-3

                  rounded-full

                  bg-yellow-400
                "
                />

                <div
                  className="
                  w-3
                  h-3

                  rounded-full

                  bg-green-400
                "
                />
              </div>

              <div
                className="
                text-sm
                font-medium
                text-gray-500
              "
              >
                live-production.jsx
              </div>
            </div>

            {/* CODE CARD */}

            <div
              className="
              mt-6

              rounded-3xl

              bg-[#0B1020]

              p-6

              overflow-hidden

              border
              border-white/10
            "
            >
              <div
                className="
                flex
                items-center
                gap-2

                text-cyan-400
                text-sm

                mb-4
              "
              >
                <Code2 size={16} />

                AI Deployment Engine
              </div>

              <div
                className="
                space-y-3

                font-mono
                text-sm
              "
              >
                <div className="text-cyan-300">
                  const app = buildModernUI()
                </div>

                <div className="text-blue-300">
                  deployToCloud()
                </div>

                <div className="text-green-300">
                  optimizePerformance()
                </div>

                <div className="text-pink-300">
                  AI.generateInsights()
                </div>
              </div>
            </div>

            {/* ANALYTICS */}

            <div
              className="
              mt-6

              grid
              grid-cols-2

              gap-5
            "
            >
              {/* CARD */}

              <div
                className="
                rounded-3xl

                border
                border-black/5

                bg-white/70

                p-5

                shadow-[0_10px_30px_rgba(0,0,0,0.05)]
              "
              >
                <div
                  className="
                  flex
                  items-center
                  justify-between
                "
                >
                  <p
                    className="
                    text-sm
                    text-gray-500
                  "
                  >
                    Growth
                  </p>

                  <BarChart3
                    size={18}
                    className="
                    text-cyan-500
                  "
                  />
                </div>

                <h3
                  className="
                  mt-4

                  text-3xl
                  font-black

                  text-[#0B0F19]
                "
                >
                  +240%
                </h3>

                <div
                  className="
                  mt-4

                  h-2

                  rounded-full

                  bg-cyan-100

                  overflow-hidden
                "
                >
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: "82%",
                    }}
                    transition={{
                      duration: 1.5,
                    }}
                    className="
                    h-full

                    rounded-full

                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-500
                  "
                  />
                </div>
              </div>

              {/* DEPLOYMENT */}

              <div
                className="
                rounded-3xl

                border
                border-black/5

                bg-white/70

                p-5

                shadow-[0_10px_30px_rgba(0,0,0,0.05)]
              "
              >
                <div
                  className="
                  flex
                  items-center
                  justify-between
                "
                >
                  <p
                    className="
                    text-sm
                    text-gray-500
                  "
                  >
                    Deployment
                  </p>

                  <Rocket
                    size={18}
                    className="
                    text-blue-500
                  "
                  />
                </div>

                <div
                  className="
                  mt-6

                  flex
                  items-center
                  gap-3
                "
                >
                  <div
                    className="
                    w-3
                    h-3

                    rounded-full

                    bg-green-400

                    animate-pulse
                  "
                  />

                  <span
                    className="
                    text-sm
                    font-semibold

                    text-[#0B0F19]
                  "
                  >
                    Live Successfully
                    Deployed
                  </span>
                </div>

                <div
                  className="
                  mt-4

                  flex
                  items-center
                  gap-2

                  text-sm
                  text-gray-500
                "
                >
                  <CheckCircle2 size={16} />

                  CI/CD Pipeline Active
                </div>
              </div>
            </div>
          </motion.div>

          {/* FLOATING CARD */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
            absolute
            top-16
            -left-4

            rounded-3xl

            border
            border-white/30

            bg-white/70
            backdrop-blur-2xl

            px-5
            py-4

            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          "
          >
            <div
              className="
              flex
              items-center
              gap-4
            "
            >
              <div
                className="
                w-12
                h-12

                rounded-2xl

                bg-cyan-500/10

                flex
                items-center
                justify-center
              "
              >
                <Sparkles
                  className="
                  text-cyan-500
                "
                />
              </div>

              <div>
                <h4
                  className="
                  font-bold
                  text-[#0B0F19]
                "
                >
                  AI Workflow
                </h4>

                <p
                  className="
                  text-sm
                  text-gray-500
                "
                >
                  Automation Enabled
                </p>
              </div>
            </div>
          </motion.div>

          {/* ORBIT */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            absolute

            w-[650px]
            h-[650px]

            rounded-full

            border
            border-dashed
            border-cyan-500/10
          "
          >
            {orbitIcons.map(
              (Icon, index) => (
                <div
                  key={index}
                  className={`
                  absolute

                  w-14
                  h-14

                  rounded-full

                  bg-white/70
                  backdrop-blur-xl

                  border
                  border-white/40

                  flex
                  items-center
                  justify-center

                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]

                  ${
                    index === 0
                      ? "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      : index === 1
                      ? "right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
                      : index === 2
                      ? "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                      : "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  }
                `}
                >
                  <Icon
                    size={24}
                    className="
                    text-cyan-500
                  "
                  />
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentHero;