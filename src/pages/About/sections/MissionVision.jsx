import { motion } from "framer-motion";

import {
  Rocket,
  Eye,
  ArrowUpRight,
} from "lucide-react";

const MissionVision = () => {
  return (
    <section
      className="
      relative
      py-32
      overflow-hidden
      bg-[#F5F7FB]
    "
    >
      {/* ================= BACKGROUND GRID ================= */}

     

      {/* ================= GLOW ================= */}

      <div
        className="
        absolute
        top-[-120px]
        right-[-120px]

        w-[350px]
        h-[350px]

        rounded-full

        bg-cyan-200/40

        blur-3xl
      "
      />

      <div
        className="
        absolute
        bottom-[-120px]
        left-[-120px]

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
            gap-3

            px-5
            py-3

            rounded-full

            bg-cyan-100

            text-cyan-700

            text-sm
            font-medium

            mb-8
          "
          >
            Corporate Vision
          </div>

          {/* HEADING */}

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
            Mission &
            <span
              className="
              text-cyan-500
            "
            >
              {" "}
              Vision
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            text-lg

            text-gray-600

            leading-relaxed
          "
          >
            We combine innovation, engineering,
            and scalable technology to help
            businesses build future-ready digital
            ecosystems.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}

        <div
          className="
          grid
          lg:grid-cols-2

          gap-10
        "
        >
          {/* ================= MISSION CARD ================= */}

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
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="
            group
            relative

            overflow-hidden

            rounded-[40px]

            backdrop-blur-2xl
            bg-white/70

            border
            border-white/40

            p-10

            shadow-[0_20px_60px_rgba(0,0,0,0.08)]

            transition-all
            duration-500

            hover:-translate-y-3
            hover:shadow-[0_30px_80px_rgba(6,182,212,0.18)]
          "
          >
            {/* GLOW */}

            <div
              className="
              absolute
              top-[-80px]
              right-[-80px]

              w-[220px]
              h-[220px]

              rounded-full

              bg-cyan-300/20

              blur-3xl

              opacity-0

              transition-all
              duration-500

              group-hover:opacity-100
            "
            />

            {/* ICON */}

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="
              relative
              z-10

              w-20
              h-20

              rounded-3xl

              bg-cyan-500

              flex
              items-center
              justify-center

              text-white

              shadow-[0_10px_40px_rgba(6,182,212,0.35)]

              mb-10
            "
            >
              <Rocket size={34} />
            </motion.div>

            {/* CONTENT */}

            <div className="relative z-10">
              <div
                className="
                flex
                items-center
                justify-between

                mb-6
              "
              >
                <h3
                  className="
                  text-4xl
                  font-bold

                  text-[#0B0F19]
                "
                >
                  Mission
                </h3>

                <ArrowUpRight
                  className="
                  text-cyan-500

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
                  size={30}
                />
              </div>

              <p
                className="
                text-lg
                leading-relaxed

                text-gray-600
              "
              >
                Helping businesses scale through
                AI, cloud systems, automation,
                and modern engineering solutions
                designed for long-term growth and
                enterprise performance.
              </p>
            </div>
          </motion.div>

          {/* ================= VISION CARD ================= */}

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
            group
            relative

            overflow-hidden

            rounded-[40px]

            backdrop-blur-2xl
            bg-[#0B0F19]

            border
            border-white/10

            p-10

            shadow-[0_20px_60px_rgba(0,0,0,0.18)]

            transition-all
            duration-500

            hover:-translate-y-3
            hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)]
          "
          >
            {/* GLOW */}

            <div
              className="
              absolute
              bottom-[-80px]
              left-[-80px]

              w-[220px]
              h-[220px]

              rounded-full

              bg-cyan-400/20

              blur-3xl

              opacity-0

              transition-all
              duration-500

              group-hover:opacity-100
            "
            />

            {/* ICON */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="
              relative
              z-10

              w-20
              h-20

              rounded-3xl

              bg-cyan-500

              flex
              items-center
              justify-center

              text-white

              shadow-[0_10px_40px_rgba(6,182,212,0.35)]

              mb-10
            "
            >
              <Eye size={34} />
            </motion.div>

            {/* CONTENT */}

            <div className="relative z-10">
              <div
                className="
                flex
                items-center
                justify-between

                mb-6
              "
              >
                <h3
                  className="
                  text-4xl
                  font-bold

                  text-white
                "
                >
                  Vision
                </h3>

                <ArrowUpRight
                  className="
                  text-cyan-400

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
                  size={30}
                />
              </div>

              <p
                className="
                text-lg
                leading-relaxed

                text-gray-300
              "
              >
                Building future-ready digital
                ecosystems that empower global
                innovation through scalable
                technology, intelligent systems,
                and enterprise transformation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;