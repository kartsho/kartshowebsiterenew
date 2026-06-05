import { motion } from "framer-motion";
import { useTheme } from "../../../context/ThemeContext";

const behindScenes = [
  {
    title: "Remote Product Strategy",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    height: "h-[420px]",
  },

  {
    title: "AI Engineering Setup",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    height: "h-[260px]",
  },

  {
    title: "Whiteboard System Design",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    height: "h-[340px]",
  },

  {
    title: "Late Night Shipping",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    height: "h-[500px]",
  },

  {
    title: "Brainstorming Session",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    height: "h-[320px]",
  },

  {
    title: "Creative UI Workshop",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    height: "h-[380px]",
  },
];

const BehindScenesSection = () => {
  const { isDark } = useTheme();

  const colors = isDark
    ? {
        sectionBg:
          "linear-gradient(135deg, #050816 0%, #070b14 55%, #0f172a 100%)",
        sectionText: "#f8fafc",
        gridLine: "rgba(148, 163, 184, 0.10)",
        tagBg: "rgba(6, 182, 212, 0.12)",
        tagText: "#67e8f9",
        tagBorder: "rgba(103, 232, 249, 0.18)",
        cardSurface: "rgba(15, 23, 42, 0.72)",
        cardBorder: "rgba(148, 163, 184, 0.18)",
        cardShadow: "0 24px 90px rgba(0, 0, 0, 0.38)",
        cardOverlay:
          "linear-gradient(to top, rgba(2, 6, 23, 0.92), rgba(2, 6, 23, 0.18), transparent)",
        quoteSurface: "rgba(15, 23, 42, 0.72)",
        quoteBorder: "rgba(148, 163, 184, 0.18)",
        mutedText: "#cbd5e1",
      }
    : {
        sectionBg:
          "linear-gradient(135deg, #f8fbff 0%, #eef4ff 55%, #ffffff 100%)",
        sectionText: "#0b0f19",
        gridLine: "rgba(15, 23, 42, 0.06)",
        tagBg: "rgba(6, 182, 212, 0.10)",
        tagText: "#0e7490",
        tagBorder: "rgba(6, 182, 212, 0.16)",
        cardSurface: "rgba(255, 255, 255, 0.72)",
        cardBorder: "rgba(15, 23, 42, 0.08)",
        cardShadow: "0 20px 80px rgba(15, 23, 42, 0.08)",
        cardOverlay:
          "linear-gradient(to top, rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.20), transparent)",
        quoteSurface: "rgba(255, 255, 255, 0.72)",
        quoteBorder: "rgba(15, 23, 42, 0.08)",
        mutedText: "#4b5563",
      };

  return (
    <section
      className="
      relative
      overflow-hidden

      py-32
    "
      style={{
        background: colors.sectionBg,
        color: colors.sectionText,
      }}
    >
      {/* ================= GRID ================= */}

      <div
        className="
        absolute
        inset-0
      "
        style={{
          opacity: isDark ? 0.08 : 0.03,
          backgroundImage: `linear-gradient(to right, ${colors.gridLine} 1px, transparent 1px), linear-gradient(to bottom, ${colors.gridLine} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ================= GLOW ================= */}

      <div
        className="
        absolute
        top-[-180px]
        left-[-100px]

        w-[400px]
        h-[400px]

        rounded-full

        bg-cyan-500/10

        blur-[120px]
      "
      />

      <div
        className="
        absolute
        bottom-[-180px]
        right-[-100px]

        w-[400px]
        h-[400px]

        rounded-full

        bg-blue-500/10

        blur-[120px]
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
          max-w-4xl
          mx-auto

          text-center
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

            px-5
            py-3

            rounded-full

            border
            backdrop-blur-xl

            text-sm
            font-semibold

            mb-8
          "
            style={{
              background: colors.tagBg,
              borderColor: colors.tagBorder,
              color: colors.tagText,
            }}
          >
            BEHIND THE SCENES
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
            lg:text-7xl

            font-black

            leading-[1.05]
            tracking-tight

            text-[color:var(--text-primary)]
          "
          >
            Inside The Team
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
              Building The Future.
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
              duration: 0.9,
            }}
            viewport={{ once: true }}
            className="
            mt-8

            text-lg
            leading-relaxed

            text-[color:var(--text-primary)]

            max-w-3xl
            mx-auto
          "
          >
            From whiteboard architecture sessions
            to remote collaboration and late-night
            launches — this is how elite digital
            products actually get built.
          </motion.p>
        </div>

        {/* ================= MASONRY GRID ================= */}

        <div
          className="
          mt-24

          columns-1
          sm:columns-2
          lg:columns-3

          gap-6
          space-y-6
        "
        >
          {behindScenes.map(
            (item, index) => (
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
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                break-inside-avoid
              "
              >
                <div
                  className={`
                  group
                  relative

                  overflow-hidden

                  rounded-[32px]

                  border
                  backdrop-blur-3xl

                  ${item.height}
                `}
                  style={{
                    background: colors.cardSurface,
                    borderColor: colors.cardBorder,
                    boxShadow: colors.cardShadow,
                  }}
                >
                  {/* IMAGE */}

                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                    absolute
                    inset-0

                    w-full
                    h-full

                    object-cover

                    transition-all
                    duration-700

                    group-hover:scale-110
                  "
                  />

                  {/* OVERLAY */}

                  <div
                    className="
                    absolute
                    inset-0
                  "
                    style={{ background: colors.cardOverlay }}
                  />

                  {/* GLASS LIGHT */}

                  <div
                    className="
                    absolute
                    inset-0

                    opacity-0

                    backdrop-blur-[2px]

                    transition-all
                    duration-500

                    group-hover:opacity-100
                  "
                    style={{
                      background: isDark
                        ? "rgba(6, 182, 212, 0.08)"
                        : "rgba(6, 182, 212, 0.10)",
                    }}
                  />

                  {/* TOP LIGHT */}

                  <div
                    className="
                    absolute
                    top-[-60px]
                    right-[-40px]

                    w-[160px]
                    h-[160px]

                    rounded-full

                    bg-cyan-400/20

                    blur-3xl

                    opacity-0

                    transition-all
                    duration-700

                    group-hover:opacity-100
                  "
                  />

                  {/* CONTENT */}

                  <div
                    className="
                    absolute
                    bottom-0
                    left-0

                    w-full

                    p-6
                  "
                  >
                    <div
                      className="
                      inline-flex
                      items-center

                      px-4
                      py-2

                      rounded-full

                      border
                      backdrop-blur-xl

                      text-xs
                      font-medium

                      mb-4
                    "
                      style={{
                        borderColor: isDark
                          ? "rgba(255, 255, 255, 0.16)"
                          : "rgba(255, 255, 255, 0.12)",
                        backgroundColor: isDark
                          ? "rgba(15, 23, 42, 0.44)"
                          : "rgba(255, 255, 255, 0.12)",
                        color: "#ffffff",
                      }}
                    >
                      TEAM CULTURE
                    </div>

                    <h3
                      className="
                      text-2xl
                      font-bold

                      text-white

                      leading-tight
                    "
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* FLOATING GLASS */}

                  <div
                    className="
                    absolute
                    top-5
                    left-5

                    px-4
                    py-3

                    rounded-2xl

                    border
                    backdrop-blur-2xl

                    text-sm
                    font-medium

                    opacity-0
                    -translate-y-5

                    transition-all
                    duration-500

                    group-hover:opacity-100
                    group-hover:translate-y-0
                  "
                    style={{
                      borderColor: isDark
                        ? "rgba(255, 255, 255, 0.16)"
                        : "rgba(255, 255, 255, 0.12)",
                      backgroundColor: isDark
                        ? "rgba(15, 23, 42, 0.44)"
                        : "rgba(255, 255, 255, 0.12)",
                      color: "#ffffff",
                    }}
                  >
                    Live Collaboration
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* ================= BOTTOM QUOTE ================= */}

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
          relative

          mt-24

          rounded-[40px]

          border
          backdrop-blur-3xl

          overflow-hidden

          p-10
          lg:p-16

          text-center
        "
          style={{
            background: colors.quoteSurface,
            borderColor: colors.quoteBorder,
            boxShadow: isDark
              ? "0 20px 80px rgba(0, 0, 0, 0.32)"
              : "0 20px 80px rgba(15, 23, 42, 0.08)",
          }}
        >
          {/* GLOW */}

          <div
            className="
            absolute
            top-[-80px]
            left-1/2
            -translate-x-1/2

            w-[250px]
            h-[250px]

            rounded-full

            bg-cyan-500/10

            blur-[100px]
          "
          />

          {/* CONTENT */}

          <div className="relative z-10">
            <h3
              className="
              text-3xl
              lg:text-5xl

              font-black

              leading-tight

              text-[color:var(--text-primary)]
            "
            >
              Real Teams.
              <br />

              Real Product Execution.
            </h3>

            <p
              className="
              mt-6

              max-w-3xl
              mx-auto

              text-lg
              leading-relaxed
            "
              style={{ color: colors.mutedText }}
            >
              Great software isn’t built by isolated
              freelancers. It’s built by deeply
              collaborative teams obsessed with
              systems, speed, and long-term product
              thinking.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BehindScenesSection;
