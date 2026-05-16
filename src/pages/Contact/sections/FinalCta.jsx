import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const FinalCTA = () => {
  return (
    <section
      className="
      relative
      py-32
      overflow-hidden
      bg-white
    "
    >
      {/* ================= GRID TEXTURE ================= */}

      <div
        className="
        absolute
        inset-0

        opacity-[0.05]

        [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

        [background-size:60px_60px]
      "
      />

      {/* ================= GLOW EFFECTS ================= */}

      <div
        className="
        absolute
        top-[-200px]
        left-[-200px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-cyan-500/20

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

        bg-blue-500/20

        blur-3xl
      "
      />

      {/* ================= CONTAINER ================= */}

      <div
        className="
        relative
        z-10

        max-w-6xl
        mx-auto

        px-6
      "
      >
        {/* ================= MAIN CARD ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          viewport={{ once: true }}
          className="
          relative

          overflow-hidden

          rounded-[50px]

          border
          border-white/10

          bg-white/5
          backdrop-blur-3xl

          shadow-[0_30px_100px_rgba(0,0,0,0.4)]

          px-8
          md:px-16

          py-20
          md:py-28
        "
        >
          {/* CARD GLOW */}

          <div
            className="
            absolute
            top-[-100px]
            right-[-100px]

            w-[300px]
            h-[300px]

            rounded-full

            bg-cyan-500/20

            blur-10xl
          "
          />

          <div
            className="
            absolute
            bottom-[-100px]
            left-[-100px]

            w-[300px]
            h-[300px]

            rounded-full

            bg-blue-500/20

            blur-10xl
          "
          />

          {/* ================= CONTENT ================= */}

          <div
            className="
            relative
            z-10

            text-center
          "
          >
            {/* SMALL BADGE */}

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
              border-white/10

              bg-white/5
              backdrop-blur-xl

              text-cyan-400
              text-sm
              font-medium

              mb-10
            "
            >
              <Sparkles size={16} />

              Let’s Build Something Powerful
            </motion.div>

            {/* HEADING */}

            <motion.h2
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
                delay: 0.1,
              }}
              viewport={{ once: true }}
              className="
              text-5xl
              md:text-7xl

              font-bold

              leading-[1.1]

              text-black

              mb-8
            "
            >
              Ready To Scale
              <br />

              <span
                className="
                text-cyan-400
              "
              >
                Your Business?
              </span>
            </motion.h2>

            {/* DESCRIPTION */}

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
                duration: 0.8,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="
              max-w-3xl
              mx-auto

              text-lg
              md:text-xl

              text-gray-900

              leading-relaxed

              mb-14
            "
            >
              Partner with KartSho to build
              scalable digital ventures across
              marketing, legal tech, education,
              commerce, media, and counseling.
            </motion.p>

            {/* TRUST POINTS */}

            <motion.div
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
                delay: 0.3,
              }}
              viewport={{ once: true }}
              className="
              flex
              flex-wrap

              justify-center

              gap-6

              mb-14
            "
            >
              {[
                "6+ Ventures",
                "50+ Clients",
                "4+ Industries",
                "24h Response",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                  flex
                  items-center
                  gap-3

                  px-5
                  py-3

                  rounded-2xl

                  bg-white/5
                  backdrop-blur-xl

                  border
                  border-white/10
                "
                >
                  <CheckCircle2
                    size={18}
                    className="
                    text-cyan-400
                  "
                  />

                  <span
                    className="
                    text-red-400
                    text-sm
                    font-medium
                  "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* BUTTONS */}

            <motion.div
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
                delay: 0.4,
              }}
              viewport={{ once: true }}
              className="
              flex
              flex-wrap

              justify-center

              gap-6
            "
            >
              {/* PRIMARY BUTTON */}

              <button
                className="
                group

                flex
                items-center
                gap-3

                px-10
                py-5

                rounded-full

                bg-cyan-500

                text-white
                font-semibold
                text-lg

                transition-all
                duration-300

                hover:scale-105

                hover:shadow-[0_0_50px_rgba(6,182,212,0.4)]
              "
              >
                Start Your Project

                <ArrowRight
                  size={22}
                  className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
                />
              </button>

              {/* SECONDARY BUTTON */}

              <button
                className="
                px-10
                py-5

                rounded-full

                border
                border-white/10

                bg-white/5
                backdrop-blur-xl

                text-green-500
                font-semibold
                text-lg

                transition-all
                duration-300

                hover:bg-pink-200
              "
              >
                Book Discovery Call
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
