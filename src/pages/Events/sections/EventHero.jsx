import { motion } from "framer-motion";

import { useTheme } from "../../../context/ThemeContext";
import eventsData from "../../../data/eventsData";

const EventHero = () => {
  const { isDark } = useTheme();
  const heroEvent = eventsData.hero;

  const colors = isDark
    ? {
        sectionBg:
          "linear-gradient(135deg, #050816 0%, #070b14 55%, #0f172a 100%)",
        sectionText: "#f8fafc",
        radialBg:
          "radial-gradient(circle at top left, rgba(6, 182, 212, 0.15), transparent 30%), radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.15), transparent 30%)",
        glowCyan: "rgba(6, 182, 212, 0.2)",
        glowBlue: "rgba(59, 130, 246, 0.2)",
        mutedText: "#cbd5e1",
        subtleText: "#94a3b8",
        surface: "rgba(15, 23, 42, 0.68)",
        border: "rgba(148, 163, 184, 0.18)",
        cardShadow: "0 40px 100px rgba(0, 0, 0, 0.45)",
        overlay:
          "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1), transparent)",
        floatingSurface: "rgba(0, 0, 0, 0.4)",
      }
    : {
        sectionBg:
          "linear-gradient(135deg, #f8fbff 0%, #eef4ff 55%, #ffffff 100%)",
        sectionText: "#0b0f19",
        radialBg:
          "radial-gradient(circle at top left, rgba(8, 145, 178, 0.12), transparent 30%), radial-gradient(circle at bottom right, rgba(37, 99, 235, 0.12), transparent 30%)",
        glowCyan: "rgba(8, 145, 178, 0.18)",
        glowBlue: "rgba(37, 99, 235, 0.18)",
        mutedText: "#475569",
        subtleText: "#64748b",
        surface: "rgba(255, 255, 255, 0.82)",
        border: "rgba(15, 23, 42, 0.08)",
        cardShadow: "0 30px 90px rgba(15, 23, 42, 0.12)",
        overlay:
          "linear-gradient(to top, rgba(15, 23, 42, 0.2), rgba(15, 23, 42, 0.05), transparent)",
        floatingSurface: "rgba(255, 255, 255, 0.88)",
      };

  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden

      flex
      items-center

      pt-28
    "
      style={{
        background: colors.sectionBg,
        color: colors.sectionText,
      }}
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className="absolute inset-0"
        style={{ background: colors.radialBg }}
      />

      {/* GLOW 1 */}

      <div
        className="
        absolute
        top-[-200px]
        left-[-200px]

        w-[500px]
        h-[500px]

        rounded-full

        blur-[160px]
      "
        style={{ backgroundColor: colors.glowCyan }}
      />

      {/* GLOW 2 */}

      <div
        className="
        absolute
        bottom-[-200px]
        right-[-200px]

        w-[500px]
        h-[500px]

        rounded-full

        blur-[160px]
      "
        style={{ backgroundColor: colors.glowBlue }}
      />

      {/* GRID */}

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
        {/* ================= LEFT CONTENT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          {/* BADGE */}

          <div
            className="
            inline-flex
            items-center
            gap-3

            px-5
            py-2.5

            rounded-full

            border

            backdrop-blur-xl

            text-sm
            font-semibold

            mb-8
          "
            style={{
              borderColor: colors.border,
              backgroundColor: colors.surface,
              color: isDark ? "#67e8f9" : "#0891b2",
            }}
          >
            <span
              className="
              w-2.5
              h-2.5

              rounded-full

              bg-cyan-400

              animate-pulse
            "
            />

            LIVE GLOBAL EVENT
          </div>

          {/* TITLE */}

          <h1
            className="
            text-5xl
            md:text-7xl

            font-black

            leading-[1.05]

            tracking-tight
          "
          >
            {heroEvent.title}
          </h1>

          {/* DESC */}

          <p
            className="
            mt-8

            text-lg
            md:text-xl

            leading-relaxed

            max-w-2xl
          "
            style={{ color: colors.mutedText }}
          >
            {heroEvent.description}
          </p>

          {/* EVENT INFO */}

          <div
            className="
            mt-10

            flex
            flex-wrap

            gap-5
          "
          >
            {/* DATE */}

            <div
              className="
              rounded-2xl

              border

              px-6
              py-4
            "
              style={{
                borderColor: colors.border,
                backgroundColor: colors.surface,
                backdropFilter: "blur(24px)",
              }}
            >
              <p
                className="
                text-sm
              "
                style={{ color: colors.subtleText }}
              >
                Event Date
              </p>

              <h4
                className="
                mt-1

                text-lg
                font-bold
              "
                style={{ color: colors.sectionText }}
              >
                {heroEvent.date}
              </h4>
            </div>

            {/* LOCATION */}

            <div
              className="
              rounded-2xl

              border

              px-6
              py-4
            "
              style={{
                borderColor: colors.border,
                backgroundColor: colors.surface,
                backdropFilter: "blur(24px)",
              }}
            >
              <p
                className="
                text-sm
              "
                style={{ color: colors.subtleText }}
              >
                Location
              </p>

              <h4
                className="
                mt-1

                text-lg
                font-bold
              "
                style={{ color: colors.sectionText }}
              >
                {heroEvent.location}
              </h4>
            </div>
          </div>

          {/* BUTTONS */}

          <div
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

              rounded-full

              bg-gradient-to-r
              from-cyan-500
              to-blue-500

              text-white
              font-semibold

              shadow-[0_0_40px_rgba(6,182,212,0.35)]

              hover:scale-105

              transition-all
              duration-300
            "
            >
              Register Now
            </button>

            {/* SECONDARY */}

            <button
              className="
              px-8
              py-4

              rounded-full

              border

              font-semibold

              transition-all
              duration-300
            "
              style={{
                borderColor: colors.border,
                backgroundColor: colors.surface,
                color: colors.sectionText,
                backdropFilter: "blur(24px)",
              }}
            >
              View Gallery
            </button>
          </div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
          }}
          className="relative"
        >
          {/* CARD */}

          <div
            className="
            relative

            overflow-hidden

            rounded-[40px]

            border

            p-5
          "
            style={{
              borderColor: colors.border,
              backgroundColor: colors.surface,
              backdropFilter: "blur(28px)",
              boxShadow: colors.cardShadow,
            }}
          >
            {/* IMAGE */}

            <img
              src={heroEvent.image}
              alt={heroEvent.title}
              className="
              h-[650px]
              w-full

              rounded-[30px]

              object-cover
            "
            />

            {/* OVERLAY */}

            <div
              className="absolute inset-0"
              style={{ background: colors.overlay }}
            />

            {/* LIVE BADGE */}

            <div
              className="
              absolute
              top-8
              left-8

              flex
              items-center
              gap-2

              rounded-full

              bg-red-500

              px-5
              py-2.5

              text-sm
              font-semibold

              shadow-[0_0_40px_rgba(239,68,68,0.45)]
            "
            >
              <span
                className="
                w-2
                h-2

                rounded-full

                bg-white

                animate-pulse
              "
              />

              LIVE EVENT
            </div>

            {/* FLOATING CARD */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="
              absolute
              bottom-8
              left-1/2

              w-[90%]

              -translate-x-1/2

              rounded-[28px]

              border

              px-6
              py-5
            "
              style={{
                borderColor: colors.border,
                backgroundColor: colors.floatingSurface,
                backdropFilter: "blur(24px)",
              }}
            >
              <p
                className="
                text-sm
                text-cyan-300
              "
              >
                Featured Conference
              </p>

              <h3
                className="
                mt-2

                text-3xl
                font-black
              "
                style={{ color: colors.sectionText }}
              >
                {heroEvent.title}
              </h3>

              <p
                className="
                mt-2
              "
                style={{ color: colors.mutedText }}
              >
                {heroEvent.location}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventHero;
