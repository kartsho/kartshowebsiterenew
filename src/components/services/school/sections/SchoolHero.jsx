import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  GraduationCap,
  ShieldCheck,
  Globe,
  BookOpen,
  Star,
} from "lucide-react";

const SchoolHero = () => {
  const scrollToPricing = () => {
    const section =
      document.getElementById(
        "school-pricing"
      );

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="
      relative
      overflow-hidden

      min-h-screen

      bg-[#050816]

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

        opacity-[0.05]

        [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

        [background-size:70px_70px]
      "
      />

      {/* ================= GLOW ================= */}

      <div
        className="
        absolute
        top-[-220px]
        left-[-140px]

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
        bottom-[-240px]
        right-[-160px]

        w-[520px]
        h-[520px]

        rounded-full

        bg-blue-500/20

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

        grid
        lg:grid-cols-2

        gap-14
        lg:gap-20
        items-center
      "
      >
        {/* ================================================= */}
        {/* LEFT CONTENT */}
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
              duration: 0.5,
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

            text-cyan-300
            text-sm
            font-semibold

            mb-8
          "
          >
            <Sparkles size={16} />

            Smart School Ecosystem
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
              duration: 0.7,
            }}
            className="
            text-5xl
            sm:text-6xl
            lg:text-7xl

            font-black

            leading-[1]

            tracking-tight

            text-white
            text-4xl
            sm:text-6xl
            lg:text-7xl
          "
          >
            Future-Ready
            <br />

            <span
              className="
              bg-gradient-to-r
              from-cyan-400
              via-blue-400
              to-cyan-300

              bg-clip-text
              text-transparent
            "
            >
              School Websites
            </span>
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

            text-gray-400

            max-w-2xl
          "
          >
            AI-powered school
            management systems,
            admissions portals,
            smart attendance,
            student dashboards,
            parent communication,
            and modern educational
            digital ecosystems.
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
            flex-col
            sm:flex-row
            flex-wrap

            items-center
            gap-5

            mt-12
          "
          >
            {/* VIEW PRICING */}

            <button
              onClick={scrollToPricing}
              className="
              group

              relative

              px-8
              py-5
              w-full
              sm:w-auto

              rounded-2xl

              overflow-hidden

              bg-gradient-to-r
              from-cyan-500
              to-blue-500

              text-white
              font-semibold

              shadow-[0_15px_50px_rgba(6,182,212,0.35)]

              transition-all
              duration-500

              hover:scale-105
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
                View Pricing

                <ArrowRight
                  size={18}
                  className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
                />
              </span>
            </button>

            {/* PORTFOLIO */}

            <button
              className="
              px-8
              py-5
              w-full
              sm:w-auto

              rounded-2xl

              border
              border-white/10

              bg-white/5
              backdrop-blur-xl

              text-white
              font-semibold

              hover:border-cyan-400/40
              hover:bg-cyan-500/10

              transition-all
              duration-300
            "
            >
              View Portfolio
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
            justify-center
            sm:justify-start

            gap-4

            mt-14
          "
          >
            {[
              "AI Attendance",
              "ERP Ready",
              "Parent Portal",
              "Cloud Infrastructure",
            ].map((pill, index) => (
              <div
                key={index}
                className="
                px-5
                py-3

                rounded-full

                border
                border-white/10

                bg-white/5
                backdrop-blur-xl

                text-sm
                font-medium

                text-gray-300

                hover:border-cyan-400/30
                hover:text-cyan-300

                transition-all
                duration-300
              "
              >
                {pill}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* RIGHT SIDE */}
        {/* ================================================= */}

        <div
          className="
          relative

          h-[700px]

          hidden
          lg:flex

          items-center
          justify-center
        "
        >
          {/* MAIN STUDENT IMAGE */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="
            relative

            w-[430px]
            h-[560px]

            rounded-[40px]

            overflow-hidden

            border
            border-white/10

            bg-white/5
            backdrop-blur-3xl

            shadow-[0_20px_80px_rgba(6,182,212,0.2)]
          "
          >
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
              alt="Students"

              className="
              w-full
              h-full

              object-cover
            "
            />

            {/* OVERLAY */}

            <div
              className="
              absolute
              inset-0

              bg-gradient-to-t
              from-[#050816]
              via-[#050816]/20
              to-transparent
            "
            />

            {/* BOTTOM CONTENT */}

            <div
              className="
              absolute
              bottom-0
              left-0
              right-0

              p-8
            "
            >
              <div
                className="
                inline-flex
                items-center
                gap-2

                px-4
                py-2

                rounded-full

                bg-cyan-500/20

                text-cyan-300
                text-sm
              "
              >
                <GraduationCap
                  size={16}
                />

                Smart Campus
              </div>

              <h3
                className="
                mt-5

                text-3xl
                font-black

                text-white
              "
              >
                Modern Education
                Digital Systems
              </h3>
            </div>
          </motion.div>

          {/* FLOATING CARD 1 */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
            absolute
            top-12
            left-0

            px-5
            py-4

            rounded-3xl

            border
            border-white/10

            bg-white/10
            backdrop-blur-2xl
          "
          >
            <div
              className="
              flex
              items-center
              gap-3
            "
            >
              <BookOpen
                size={24}
                className="
                text-cyan-300
              "
              />

              <div>
                <p
                  className="
                  text-sm
                  text-gray-400
                "
                >
                  Online Classes
                </p>

                <h4
                  className="
                  text-white
                  font-bold
                "
                >
                  Smart Learning
                </h4>
              </div>
            </div>
          </motion.div>

          {/* FLOATING CARD 2 */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="
            absolute
            bottom-20
            right-0

            px-5
            py-4

            rounded-3xl

            border
            border-white/10

            bg-white/10
            backdrop-blur-2xl
          "
          >
            <div
              className="
              flex
              items-center
              gap-3
            "
            >
              <ShieldCheck
                size={24}
                className="
                text-cyan-300
              "
              />

              <div>
                <p
                  className="
                  text-sm
                  text-gray-400
                "
                >
                  AI Attendance
                </p>

                <h4
                  className="
                  text-white
                  font-bold
                "
                >
                  Face Recognition
                </h4>
              </div>
            </div>
          </motion.div>

          {/* FLOATING CARD 3 */}

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
            absolute
            top-1/2
            right-8

            px-5
            py-4

            rounded-3xl

            border
            border-white/10

            bg-white/10
            backdrop-blur-2xl
          "
          >
            <div
              className="
              flex
              items-center
              gap-3
            "
            >
              <Globe
                size={24}
                className="
                text-cyan-300
              "
              />

              <div>
                <p
                  className="
                  text-sm
                  text-gray-400
                "
                >
                  Cloud ERP
                </p>

                <h4
                  className="
                  text-white
                  font-bold
                "
                >
                  Multi Branch
                </h4>
              </div>
            </div>
          </motion.div>

          {/* FLOATING STAR */}

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

            w-[580px]
            h-[580px]

            rounded-full

            border
            border-dashed
            border-cyan-500/10
          "
          >
            <div
              className="
              absolute
              top-0
              left-1/2

              -translate-x-1/2
              -translate-y-1/2

              w-16
              h-16

              rounded-full

              bg-cyan-500/10

              border
              border-cyan-400/20

              flex
              items-center
              justify-center

              text-cyan-300
            "
            >
              <Star size={24} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SchoolHero;
