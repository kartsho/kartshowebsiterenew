import { motion } from "framer-motion";

import {
  Gauge,
  Zap,
  Search,
  Smartphone,
  Activity,
  CheckCircle2,
  TrendingUp,
  BarChart3,
} from "lucide-react";

const performanceMetrics = [
  {
    title: "95+ Lighthouse Score",
    value: "95+",
    icon: Gauge,
    desc: "Blazing fast performance engineered for Core Web Vitals and user retention.",
  },

  {
    title: "0.8s Load Time",
    value: "0.8s",
    icon: Zap,
    desc: "Ultra-fast loading experiences optimized with modern rendering systems.",
  },

  {
    title: "SEO Optimized",
    value: "100%",
    icon: Search,
    desc: "Technical SEO architecture designed for search visibility and growth.",
  },

  {
    title: "Core Web Vitals Ready",
    value: "CWV",
    icon: Activity,
    desc: "Optimized CLS, LCP, and INP scores for Google's ranking systems.",
  },

  {
    title: "Mobile Optimized",
    value: "A+",
    icon: Smartphone,
    desc: "Pixel-perfect responsive systems for every modern mobile device.",
  },
];

const chartBars = [
  "92%",
  "96%",
  "98%",
  "95%",
  "99%",
];

const PerformanceSEOSection = () => {
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

      <div
        className="
        absolute
        inset-0

        opacity-[0.03]

        [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]

        [background-size:70px_70px]
      "
      />

      {/* ================= BLURS ================= */}

      <div
        className="
        absolute
        top-[-250px]
        left-[-120px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-cyan-500/10

        blur-[150px]
      "
      />

      <div
        className="
        absolute
        bottom-[-250px]
        right-[-120px]

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
      "
      >
        {/* ================= TOP ================= */}

        <div
          className="
          text-center

          max-w-3xl
          mx-auto

          mb-24
        "
        >
          {/* TAG */}

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
            Performance Engineering
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
            md:text-6xl

            font-black

            leading-[1.1]

            tracking-tight

            text-blue-600
          "
          >
            Built For Speed,
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
              SEO & Scale
            </span>
          </motion.h2>

          {/* DESC */}

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
              duration: 1,
            }}
            viewport={{ once: true }}
            className="
            mt-8

            text-lg
            leading-relaxed

            text-gray-600
          "
          >
            Every product we build is
            engineered for lightning-fast
            performance, search engine
            dominance, and enterprise-grade
            scalability.
          </motion.p>
        </div>

        {/* ================= MAIN GRID ================= */}

        <div
          className="
          grid
          lg:grid-cols-2

          gap-10
          items-center
        "
        >
          {/* ================================================= */}
          {/* LEFT DASHBOARD */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            viewport={{ once: true }}
            className="
            relative

            rounded-[40px]

            border
            border-white/50

            bg-white/70
            backdrop-blur-3xl

            overflow-hidden

            p-8

            shadow-[0_20px_80px_rgba(0,0,0,0.06)]
          "
          >
            {/* GLOW */}

            <div
              className="
              absolute
              top-[-100px]
              right-[-50px]

              w-[260px]
              h-[260px]

              rounded-full

              bg-cyan-400/10

              blur-3xl
            "
            />

            {/* HEADER */}

            <div
              className="
              flex
              items-center
              justify-between

              mb-10
            "
            >
              <div>
                <p
                  className="
                  text-sm
                  text-gray-500
                "
                >
                  Performance Dashboard
                </p>

                <h3
                  className="
                  mt-2

                  text-3xl
                  font-black

                  text-[#0B1220]
                "
                >
                  Live Metrics
                </h3>
              </div>

              {/* LIVE DOT */}

              <div
                className="
                flex
                items-center
                gap-3
              "
              >
                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="
                  w-3
                  h-3

                  rounded-full

                  bg-green-500
                "
                />

                <span
                  className="
                  text-sm
                  font-semibold

                  text-green-600
                "
                >
                  LIVE
                </span>
              </div>
            </div>

            {/* SCORE CARD */}

            <div
              className="
              relative

              rounded-[32px]

              border
              border-cyan-500/10

              bg-gradient-to-br
              from-cyan-500/10
              to-blue-500/10

              p-8

              overflow-hidden

              mb-8
            "
            >
              <div
                className="
                absolute
                right-[-30px]
                top-[-30px]

                w-40
                h-40

                rounded-full

                bg-cyan-400/20

                blur-3xl
              "
              />

              <div
                className="
                relative
                z-10
              "
              >
                <div
                  className="
                  flex
                  items-center
                  gap-3
                "
                >
                  <Gauge
                    size={28}
                    className="
                    text-cyan-600
                  "
                  />

                  <p
                    className="
                    text-lg
                    font-semibold

                    text-[#0B1220]
                  "
                  >
                    Lighthouse Performance
                  </p>
                </div>

                <div
                  className="
                  mt-8

                  flex
                  items-end
                  gap-4
                "
                >
                  <h2
                    className="
                    text-7xl
                    font-black

                    text-[#0B1220]
                  "
                  >
                    98
                  </h2>

                  <span
                    className="
                    mb-3

                    text-green-600
                    font-semibold
                  "
                  >
                    +12%
                  </span>
                </div>
              </div>
            </div>

            {/* CHART */}

            <div
              className="
              rounded-[32px]

              border
              border-black/5

              bg-white/80

              p-8
            "
            >
              {/* TOP */}

              <div
                className="
                flex
                items-center
                justify-between

                mb-10
              "
              >
                <div>
                  <p
                    className="
                    text-sm
                    text-gray-500
                  "
                  >
                    Optimization Report
                  </p>

                  <h4
                    className="
                    mt-2

                    text-2xl
                    font-bold

                    text-[#0B1220]
                  "
                  >
                    Core Metrics
                  </h4>
                </div>

                <TrendingUp
                  size={30}
                  className="
                  text-cyan-600
                "
                />
              </div>

              {/* BARS */}

              <div
                className="
                flex
                items-end
                justify-between

                gap-5

                h-[220px]
              "
              >
                {chartBars.map(
                  (height, index) => (
                    <div
                      key={index}
                      className="
                      flex
                      flex-col
                      items-center

                      gap-4

                      w-full
                    "
                    >
                      <motion.div
                        initial={{
                          height: 0,
                        }}
                        whileInView={{
                          height,
                        }}
                        transition={{
                          duration: 1,
                          delay:
                            index * 0.1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        className="
                        w-full

                        rounded-t-[20px]

                        bg-gradient-to-t
                        from-cyan-500
                        to-blue-500

                        shadow-[0_10px_40px_rgba(6,182,212,0.25)]
                      "
                      />

                      <span
                        className="
                        text-sm
                        font-semibold

                        text-gray-500
                      "
                      >
                        {
                          [
                            "SEO",
                            "Speed",
                            "UX",
                            "CWV",
                            "Mobile",
                          ][index]
                        }
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* RIGHT METRICS */}
          {/* ================================================= */}

          <div
            className="
            grid
            sm:grid-cols-2

            gap-6
          "
          >
            {performanceMetrics.map(
              (metric, index) => {
                const Icon =
                  metric.icon;

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
                      delay:
                        index * 0.08,
                    }}
                    whileHover={{
                      y: -10,
                      rotateX: 4,
                      rotateY: 4,
                    }}
                    viewport={{ once: true }}
                    className="
                    group

                    relative

                    rounded-[32px]

                    border
                    border-white/40

                    bg-white/70
                    backdrop-blur-3xl

                    overflow-hidden

                    p-7

                    shadow-[0_15px_60px_rgba(0,0,0,0.06)]

                    transition-all
                    duration-500
                  "
                  >
                    {/* GLOW */}

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

                    {/* ICON */}

                    <div
                      className="
                      relative
                      z-10

                      w-16
                      h-16

                      rounded-2xl

                      bg-cyan-500/10

                      flex
                      items-center
                      justify-center

                      text-cyan-600

                      shadow-[0_0_30px_rgba(6,182,212,0.12)]
                    "
                    >
                      <Icon size={28} />
                    </div>

                    {/* VALUE */}

                    <h3
                      className="
                      relative
                      z-10

                      mt-8

                      text-5xl
                      font-black

                      text-red-500
                    "
                    >
                      {metric.value}
                    </h3>

                    {/* TITLE */}

                    <h4
                      className="
                      relative
                      z-10

                      mt-4

                      text-xl
                      font-bold

                      text-green-600
                    "
                    >
                      {metric.title}
                    </h4>

                    {/* DESC */}

                    <p
                      className="
                      relative
                      z-10

                      mt-4

                      text-gray-300
                      leading-relaxed
                    "
                    >
                      {metric.desc}
                    </p>

                    {/* BOTTOM */}

                    <div
                      className="
                      relative
                      z-10

                      mt-8

                      flex
                      items-center
                      gap-3
                    "
                    >
                      <CheckCircle2
                        size={18}
                        className="
                        text-green-500
                      "
                      />

                      <span
                        className="
                        text-sm
                        font-semibold

                        text-green-600
                      "
                      >
                        Production Optimized
                      </span>
                    </div>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSEOSection;