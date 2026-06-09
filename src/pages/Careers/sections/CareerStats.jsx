import { motion } from "framer-motion";

import ReactCountUp from "react-countup";

import {
  Users,
  Globe2,
  Boxes,
  Star,
  HeartHandshake,
  Wifi,
  TrendingUp,
} from "lucide-react";

const CountUp =
  ReactCountUp?.default ?? ReactCountUp;

/* ======================================================= */
/* STATS DATA */
/* ======================================================= */

const stats = [
  {
    title: "Engineers",
    value: 20,
    suffix: "+",
    icon: Users,
    description:
      "Elite product engineers worldwide.",
  },

  {
    title: "Countries",
    value: 8,
    suffix: "",
    icon: Globe2,
    description:
      "Remote-first global collaboration.",
  },

  {
    title: "Products",
    value: 50,
    suffix: "+",
    icon: Boxes,
    description:
      "Scalable SaaS & AI systems launched.",
  },

  {
    title: "Glassdoor Rating",
    value: 4.9,
    suffix: "",
    decimal: true,
    icon: Star,
    description:
      "Loved by engineers & creators.",
  },

  {
    title: "Retention",
    value: 95,
    suffix: "%",
    icon: HeartHandshake,
    description:
      "High ownership & long-term culture.",
  },

  {
    title: "Remote Friendly",
    value: 100,
    suffix: "%",
    icon: Wifi,
    description:
      "Work from anywhere worldwide.",
  },
];

const CareerStats = () => {
  return (
    <section
      className="
      relative
      overflow-hidden

      bg-[#F5F7FB]

      py-28
    "
    >
      {/* ======================================================= */}
      {/* GRID */}
      {/* ======================================================= */}

      <div
        className="
        absolute
        inset-0

        opacity-[0.04]

        [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]

        [background-size:70px_70px]
      "
      />

      {/* ======================================================= */}
      {/* TOP GLOW */}
      {/* ======================================================= */}

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

      {/* ======================================================= */}
      {/* BOTTOM GLOW */}
      {/* ======================================================= */}

      <div
        className="
        absolute
        bottom-[-200px]
        right-[-100px]

        w-[450px]
        h-[450px]

        rounded-full

        bg-blue-500/10

        blur-[120px]
      "
      />

      {/* ======================================================= */}
      {/* CONTAINER */}
      {/* ======================================================= */}

      <div
        className="
        relative
        z-10

        max-w-7xl
        mx-auto

        px-6
      "
      >
        {/* ======================================================= */}
        {/* TOP CONTENT */}
        {/* ======================================================= */}

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

          mb-20
        "
        >
          {/* TAG */}

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
            backdrop-blur-xl

            text-cyan-600
            text-sm
            font-semibold

            shadow-[0_10px_40px_rgba(6,182,212,0.08)]

            mb-8
          "
          >
            <TrendingUp size={16} />

            Team Performance Metrics
          </div>

          {/* HEADING */}

          <h2
            className="
            text-4xl
            sm:text-5xl
            lg:text-6xl

            font-black

            leading-tight

            text-white
          "
          >
            Built By
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
              {" "}
              Elite Talent
            </span>
          </h2>

          {/* DESC */}

          <p
            className="
            mt-8

            text-lg
            leading-relaxed

            text-white/80
          "
          >
            A remote-first engineering
            culture trusted by startups,
            enterprises, and AI-driven
            companies worldwide.
          </p>
        </motion.div>

        {/* ======================================================= */}
        {/* STATS GRID */}
        {/* ======================================================= */}

        <div
          className="
          grid
          sm:grid-cols-2
          lg:grid-cols-3

          gap-8
        "
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
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
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="
                group

                relative

                overflow-hidden

                rounded-[32px]

                border
                border-white/40

                bg-white/65
                backdrop-blur-3xl

                p-8

                shadow-[0_20px_60px_rgba(0,0,0,0.06)]

                transition-all
                duration-500
              "
              >
                {/* ======================================================= */}
                {/* CARD GLOW */}
                {/* ======================================================= */}

                <div
                  className="
                  absolute
                  inset-0

                  opacity-0

                  bg-gradient-to-br
                  from-cyan-500/10
                  to-blue-500/10

                  transition-opacity
                  duration-500

                  group-hover:opacity-100
                "
                />

                {/* ======================================================= */}
                {/* TOP */}
                {/* ======================================================= */}

                <div
                  className="
                  relative
                  z-10

                  flex
                  items-start
                  justify-between
                "
                >
                  {/* ICON */}

                  <div
                    className="
                    relative

                    w-16
                    h-16

                    rounded-2xl

                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-500

                    flex
                    items-center
                    justify-center

                    shadow-[0_10px_40px_rgba(6,182,212,0.25)]
                  "
                  >
                    <Icon
                      size={28}
                      className="
                      text-white
                    "
                    />
                  </div>

                  {/* LIVE DOT */}

                  <div
                    className="
                    flex
                    items-center
                    gap-2
                  "
                  >
                    <div
                      className="
                      w-3
                      h-3

                      rounded-full

                      bg-green-500

                      animate-pulse
                    "
                    />

                    <span
                      className="
                      text-xs
                      font-semibold

                      text-white/70
                    "
                    >
                      LIVE
                    </span>
                  </div>
                </div>

                {/* ======================================================= */}
                {/* VALUE */}
                {/* ======================================================= */}

                <div
                  className="
                  relative
                  z-10

                  mt-10
                "
                >
                  <h3
                    className="
                    text-5xl
                    font-black

                    tracking-tight

                    text-white
                  "
                  >
                    <CountUp
                      end={item.value}
                      duration={2.5}
                      decimals={
                        item.decimal
                          ? 1
                          : 0
                      }
                    />

                    {item.suffix}
                  </h3>

                  <p
                    className="
                    mt-3

                    text-lg
                    font-semibold

                    text-white
                  "
                  >
                    {item.title}
                  </p>

                  <p
                    className="
                    mt-3

                    text-sm
                    leading-relaxed

                    text-white/70
                  "
                  >
                    {item.description}
                  </p>
                </div>

                {/* ======================================================= */}
                {/* MINI CHART */}
                {/* ======================================================= */}

                <div
                  className="
                  relative
                  z-10

                  mt-8

                  flex
                  items-end
                  gap-2

                  h-16
                "
                >
                  {[35, 60, 45, 80, 55, 95]
                    .map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{
                          height: 0,
                        }}
                        whileInView={{
                          height,
                        }}
                        transition={{
                          duration: 0.8,
                          delay:
                            i * 0.1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        className="
                        flex-1

                        rounded-full

                        bg-gradient-to-t
                        from-cyan-500
                        to-blue-500

                        opacity-80
                      "
                      />
                    ))}
                </div>

                {/* ======================================================= */}
                {/* BOTTOM SHINE */}
                {/* ======================================================= */}

                <div
                  className="
                  absolute
                  bottom-[-80px]
                  right-[-80px]

                  w-[180px]
                  h-[180px]

                  rounded-full

                  bg-cyan-500/10

                  blur-3xl
                "
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareerStats;
