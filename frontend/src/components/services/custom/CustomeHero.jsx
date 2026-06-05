import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  Globe,
  ShieldCheck,
  Code2,
  MonitorSmartphone,
  Star,
} from "lucide-react";

const CustomWebsiteHero = () => {
  return (
    <section
      className="
      relative
      overflow-hidden

      bg-[#050816]

      min-h-screen
      top-30
       mb-40
      flex
      items-center
    "
    >
      {/* ======================================================
          GLOW EFFECTS
      ====================================================== */}

      <div
        className="
        absolute
        top-[-200px]
        left-[-120px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-cyan-500/20

        blur-[140px]
      "
      />

      <div
        className="
        absolute
        bottom-[-250px]
        right-[-150px]

        w-[550px]
        h-[550px]

        rounded-full

        bg-blue-500/20

        blur-[160px]
      "
      />

      {/* ======================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
        relative
        z-10

        max-w-9xl
        mx-auto

        px-6

        grid
        lg:grid-cols-2

        gap-20
        items-center
      "
      >
        {/* ======================================================
            LEFT CONTENT
        ====================================================== */}

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
            border-cyan-400/20

            bg-cyan-500/10

            text-cyan-300
            text-sm
            font-semibold

            backdrop-blur-xl
          "
          >
            <Sparkles size={16} />

            Premium Custom Website Development
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
              delay: 0.1,
            }}
            className="
            mt-8

            text-5xl
            md:text-7xl

            font-black

            leading-[1.05]

            text-white
          "
          >
            We Build
            <span
              className="
              block

              bg-gradient-to-r
              from-cyan-400
              via-blue-400
              to-cyan-300

              bg-clip-text
              text-transparent
            "
            >
              Next-Level
            </span>

            Digital Experiences
          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="
            mt-8

            max-w-2xl

            text-lg
            md:text-xl

            leading-relaxed

            text-white/70
          "
          >
            High-performance custom websites crafted for
            startups, brands, businesses, creators, and
            enterprises with premium UI/UX, animations,
            responsive systems, and modern technologies.
          </motion.p>

          {/* BUTTONS */}

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
              duration: 0.8,
              delay: 0.3,
            }}
            className="
            mt-12

            flex
            flex-wrap

            gap-5
          "
          >
            {/* PRIMARY */}

            <button
              className="
              group

              px-8
              py-4

              rounded-2xl

              bg-gradient-to-r
              from-cyan-500
              to-blue-500

              text-white
              font-semibold

              shadow-[0_15px_50px_rgba(6,182,212,0.35)]

              hover:scale-105

              transition-all
              duration-300
            "
            >
              <span className="flex items-center gap-3">
                Start Your Project

                <ArrowRight
                  className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
                />
              </span>
            </button>

            {/* SECONDARY */}

            <button
              className="
              px-8
              py-4

              rounded-2xl

              border
              border-white/10

              bg-white/5
              backdrop-blur-xl

              text-white
              font-semibold

              hover:bg-white/10

              transition-all
              duration-300
            "
            >
              View Portfolio
            </button>
          </motion.div>

          {/* STATS */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="
            mt-16

            flex
            flex-wrap

            gap-10
          "
          >
            {[
              {
                number: "150+",
                label: "Projects",
              },
              {
                number: "98%",
                label: "Client Satisfaction",
              },
              {
                number: "24/7",
                label: "Support",
              },
            ].map((item, index) => (
              <div key={index}>
                <h3
                  className="
                  text-4xl
                  font-black

                  text-white
                "
                >
                  {item.number}
                </h3>

                <p
                  className="
                  mt-2

                  text-white/60
                "
                >
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ======================================================
            RIGHT SIDE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="relative"
        >
          {/* MAIN CARD */}

          <div
            className="
            relative
border-4
border-b-blue-500
            overflow-hidden

            rounded-[40px]

            border
            border-white/10

            bg-white/5
            backdrop-blur-2xl

            p-6

            shadow-[0_30px_100px_rgba(0,0,0,0.45)]
          "
          >
            {/* IMAGE */}

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Website Development"
              className="
              h-[600px]
              w-full
              border-4
              border-b-cyan-600
              rounded-[30px]
              border-l-emerald-600
              border-t-fuchsia-600
              border-r-orange-500

              object-cover
            "
            />

            {/* FLOATING CARD 1 */}

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="
              absolute
              top-10
              left-10

              flex
              items-center
              gap-4

              rounded-3xl

              border
              border-white/10

              bg-black/40
              backdrop-blur-xl

              px-5
              py-4
            "
            >
              <div
                className="
                w-14
                h-14

                rounded-2xl

                bg-cyan-500

                flex
                items-center
                justify-center

                text-white
              "
              >
                <Code2 size={28} />
              </div>

              <div>
                <p className="text-sm text-gray-300">
                  Modern Stack
                </p>

                <h3 className="text-xl font-bold text-white">
                  React + AI
                </h3>
              </div>
            </motion.div>

            {/* FLOATING CARD 2 */}

            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="
              absolute
              bottom-10
              right-10

              flex
              items-center
              gap-4

              rounded-3xl

              border
              border-white/10

              bg-black/40
              backdrop-blur-xl

              px-5
              py-4
            "
            >
              <div
                className="
                w-14
                h-14

                rounded-2xl

                bg-blue-500

                flex
                items-center
                justify-center

                text-white
              "
              >
                <MonitorSmartphone size={28} />
              </div>

              <div>
                <p className="text-sm text-gray-300">
                  Responsive UI
                </p>

                <h3 className="text-xl font-bold text-white">
                  Premium Experience
                </h3>
              </div>
            </motion.div>
          </div>

          {/* SIDE MINI CARD */}

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
            xl:flex

            absolute
            -right-20
            top-1/2

            px-6
            py-5

            rounded-3xl

            backdrop-blur-2xl
            bg-white/10

            border
            border-white/10

            shadow-[0_20px_60px_rgba(0,0,0,0.2)]

            items-center
            gap-4
          "
          >
            <div
              className="
              w-14
              h-14

              rounded-2xl

              bg-cyan-500

              flex
              items-center
              justify-center

              text-white
            "
            >
              <Globe size={28} />
            </div>

            <div>
              <p className="text-sm text-gray-300">
                Global Reach
              </p>

              <h3
                className="
                text-2xl
                font-bold
                text-white
              "
              >
                50+ Brands
              </h3>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomWebsiteHero;