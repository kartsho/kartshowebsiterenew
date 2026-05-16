import { motion } from "framer-motion";

const WhyWeExist = () => {
  return (
    <section
      className="
      relative
      py-32
      overflow-hidden
      bg-[#F5F7FB]
    "
    >
      {/* ================= GRID BACKGROUND ================= */}

     

      {/* ================= GLOW EFFECTS ================= */}

      <div
        className="
        absolute
        top-[-200px]
        left-[-200px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-cyan-500/10

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

        bg-blue-500/10

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
        {/* ================= SMALL LABEL ================= */}

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
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="
          mb-12
        "
        >
          <div
            className="
            inline-flex

            px-5
            py-3

            rounded-full

            border
            border-cyan-200

            bg-white/80
            backdrop-blur-xl

            text-cyan-600
            text-sm
            font-semibold

            tracking-[3px]
            uppercase

            shadow-lg
          "
          >
            Why We Exist
          </div>
        </motion.div>

        {/* ================= BIG TYPOGRAPHY ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
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
          max-w-6xl
        "
        >
          {/* LINE 1 */}

          <h2
            className="
            text-5xl
            md:text-7xl
            lg:text-[90px]

            font-bold

            leading-[1.05]

            text-[#0B0F19]/25

            mb-6
          "
          >
            Most companies
            <br />
            build software.
          </h2>

          {/* LINE 2 */}

          <h2
            className="
            text-5xl
            md:text-7xl
            lg:text-[90px]

            font-bold

            leading-[1.05]

            text-[#0B0F19]
          "
          >
            We build
            <span
              className="
              text-cyan-500
            "
            >
              {" "}
              scalable digital
            </span>
            <br />
            ecosystems that help
            <br />
            businesses dominate
            <br />
            markets.
          </h2>
        </motion.div>

        {/* ================= BOTTOM CONTENT ================= */}

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
            duration: 1,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="
          mt-20

          grid
          lg:grid-cols-2

          gap-12

          items-start
        "
        >
          {/* LEFT */}

          <p
            className="
            text-xl
            text-gray-600

            leading-relaxed

            max-w-2xl
          "
          >
            KartSho exists to engineer scalable
            digital ecosystems by combining AI,
            automation, cloud infrastructure,
            and premium product engineering into
            one powerful business growth system.
          </p>

          {/* RIGHT */}

          <div
            className="
            flex
            lg:justify-end
          "
          >
            <div
              className="
              flex
              flex-wrap

              gap-4
            "
            >
              {[
                "AI Systems",
                "Cloud Scaling",
                "Enterprise SaaS",
                "Automation",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                  className="
                  px-6
                  py-4

                  rounded-2xl

                  border
                  border-black/5

                  bg-white/80
                  backdrop-blur-xl

                  text-[#0B0F19]
                  text-sm
                  font-semibold

                  shadow-[0_10px_30px_rgba(0,0,0,0.06)]

                  transition-all
                  duration-300

                  hover:shadow-[0_10px_40px_rgba(6,182,212,0.18)]
                "
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWeExist;