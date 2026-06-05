import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Images, X } from "lucide-react";

import { useTheme } from "../../../context/ThemeContext";
import eventsData from "../../../data/eventsData";

const EventGallery = () => {
  const { isDark } = useTheme();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const galleryEvents = eventsData.galleryEvents;

  const colors = isDark
    ? {
        sectionBg:
          "linear-gradient(135deg, #071120 0%, #050816 55%, #0b1220 100%)",
        sectionText: "#f8fafc",
        radialBg:
          "radial-gradient(circle at top left, rgba(6, 182, 212, 0.12), transparent 25%), radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.12), transparent 25%)",
        glowCyan: "rgba(6, 182, 212, 0.1)",
        cardSurface: "rgba(15, 23, 42, 0.62)",
        modalSurface: "#071120",
        border: "rgba(148, 163, 184, 0.18)",
        mutedText: "#94a3b8",
        subtleText: "#cbd5e1",
        overlay:
          "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0), transparent)",
      }
    : {
        sectionBg:
          "linear-gradient(135deg, #f8fbff 0%, #eef4ff 55%, #ffffff 100%)",
        sectionText: "#0b0f19",
        radialBg:
          "radial-gradient(circle at top left, rgba(8, 145, 178, 0.1), transparent 25%), radial-gradient(circle at bottom right, rgba(37, 99, 235, 0.1), transparent 25%)",
        glowCyan: "rgba(8, 145, 178, 0.1)",
        cardSurface: "rgba(255, 255, 255, 0.8)",
        modalSurface: "#ffffff",
        border: "rgba(15, 23, 42, 0.08)",
        mutedText: "#64748b",
        subtleText: "#475569",
        overlay:
          "linear-gradient(to top, rgba(15, 23, 42, 0.35), rgba(15, 23, 42, 0.04), transparent)",
      };

  return (
    <section
      className="
      relative
      overflow-hidden

      py-28
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

      {/* GLOW */}

      <div
        className="
        absolute
        top-[-200px]
        left-[-200px]

        w-[450px]
        h-[450px]

        rounded-full

        blur-[160px]
      "
        style={{ backgroundColor: colors.glowCyan }}
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
          flex
          flex-col
          lg:flex-row

          lg:items-end
          lg:justify-between

          gap-8

          mb-16
        "
        >
          <div>
            <div
              className="
              inline-flex
              items-center
              gap-3

              rounded-full

              border

              px-5
              py-2

              text-sm

              mb-6
            "
              style={{
                borderColor: colors.border,
                backgroundColor: isDark
                  ? "rgba(6, 182, 212, 0.1)"
                  : "rgba(8, 145, 178, 0.08)",
                color: isDark ? "#67e8f9" : "#0891b2",
              }}
            >
              <Images size={16} />

              Our Event Experiences
            </div>

            <h2
              className="
              text-5xl
              md:text-6xl

              font-black

              leading-tight
            "
            >
              Event
              <span
                className="
                block

                bg-gradient-to-r
                from-cyan-400
                to-blue-500

                bg-clip-text
                text-transparent
              "
              >
                Gallery Showcase
              </span>
            </h2>

            <p
              className="
              mt-6

              max-w-2xl

              text-lg
              leading-relaxed
            "
              style={{ color: colors.mutedText }}
            >
              Explore premium conferences, startup summits, AI expos,
              hackathons, networking sessions, and unforgettable tech moments
              organized by Kartsho.
            </p>
          </div>
        </div>

        {/* ================= EVENT CARDS ================= */}

        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-3

          gap-8
        "
        >
          {galleryEvents.map((event, index) => (
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
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
              group

              overflow-hidden

              rounded-[32px]

              border

              backdrop-blur-2xl

              transition-all
              duration-500

              hover:-translate-y-1
            "
              style={{
                borderColor: colors.border,
                backgroundColor: colors.cardSurface,
                boxShadow: isDark
                  ? "0 18px 60px rgba(0, 0, 0, 0.24)"
                  : "0 18px 60px rgba(15, 23, 42, 0.08)",
              }}
            >
              {/* ================= IMAGE ================= */}

              <div className="relative h-[280px] overflow-hidden">
                <img
                  src={event.cover}
                  alt={event.title}
                  className="
                  h-full
                  w-full

                  object-cover

                  transition-transform
                  duration-700

                  group-hover:scale-110
                "
                />

                {/* OVERLAY */}

                <div
                  className="absolute inset-0"
                  style={{ background: colors.overlay }}
                />

                {/* DATE */}

                <div
                  className="
                  absolute
                  top-5
                  left-5

                  flex
                  items-center
                  gap-2

                  rounded-full

                  px-4
                  py-2

                  text-sm

                  backdrop-blur-xl
                "
                  style={{
                    backgroundColor: isDark
                      ? "rgba(0, 0, 0, 0.4)"
                      : "rgba(255, 255, 255, 0.7)",
                    color: isDark ? "#f8fafc" : "#0b0f19",
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  <CalendarDays size={16} />

                  {event.date}
                </div>
              </div>

              {/* ================= CONTENT ================= */}

              <div className="p-7">
                {/* CATEGORY */}

                <div
                  className="
                  inline-flex

                  rounded-full

                  bg-cyan-500/10

                  px-4
                  py-2

                  text-xs
                  font-medium

                  text-cyan-300
                "
                >
                  {event.category}
                </div>

                {/* TITLE */}

                <h3
                  className="
                  mt-5

                  text-2xl
                  font-black
                "
                  style={{ color: colors.sectionText }}
                >
                  {event.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                  mt-4

                  leading-relaxed
                "
                  style={{ color: colors.mutedText }}
                >
                  {event.description}
                </p>

                {/* BUTTON */}

                <button
                  onClick={() => setSelectedEvent(event)}
                  className="
                  group/btn

                  mt-7

                  flex
                  items-center
                  gap-3

                  font-semibold

                  text-cyan-300

                  transition-all
                  duration-300
                "
                >
                  View Gallery

                  <ArrowUpRight
                    size={18}
                    className="
                    transition-transform
                    duration-300

                    group-hover/btn:translate-x-1
                    group-hover/btn:-translate-y-1
                  "
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
            fixed
            inset-0
            z-[99999]

            overflow-y-auto

            bg-black/80
            backdrop-blur-xl

            p-6
          "
          >
            <div
              className="
              min-h-screen

              flex
              items-center
              justify-center
            "
            >
              <motion.div
                initial={{
                  scale: 0.9,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0.9,
                  opacity: 0,
                }}
                className="
                relative

                w-full
                max-w-7xl

                rounded-[40px]

                border

                p-8
              "
                style={{
                  borderColor: colors.border,
                  backgroundColor: colors.modalSurface,
                  color: colors.sectionText,
                  boxShadow: isDark
                    ? "0 40px 120px rgba(0, 0, 0, 0.45)"
                    : "0 40px 120px rgba(15, 23, 42, 0.18)",
                }}
              >
                {/* CLOSE */}

                <button
                  onClick={() => setSelectedEvent(null)}
                  className="
                  absolute
                  top-6
                  right-6

                  w-12
                  h-12

                  rounded-full

                  flex
                  items-center
                  justify-center

                  transition-all
                  duration-300
                "
                  style={{
                    backgroundColor: isDark
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(15, 23, 42, 0.06)",
                    color: colors.sectionText,
                  }}
                >
                  <X size={20} />
                </button>

                {/* TOP */}

                <div className="mb-12">
                  <div
                    className="
                    inline-flex

                    rounded-full

                    bg-cyan-500/10

                    px-4
                    py-2

                    text-cyan-300
                    text-sm

                    mb-5
                  "
                  >
                    {selectedEvent.category}
                  </div>

                  <h2
                    className="
                    text-5xl
                    font-black
                  "
                    style={{ color: colors.sectionText }}
                  >
                    {selectedEvent.title}
                  </h2>

                  <p
                    className="
                    mt-5

                    max-w-4xl

                    text-lg
                    leading-relaxed
                  "
                    style={{ color: colors.mutedText }}
                  >
                    {selectedEvent.fullDescription}
                  </p>
                </div>

                {/* GALLERY */}

                <div
                  className="
                  grid
                  md:grid-cols-2
                  xl:grid-cols-3

                  gap-6
                "
                >
                  {selectedEvent.images.map((image, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -6,
                      }}
                      className="
                      overflow-hidden

                      rounded-[28px]

                      border
                    "
                      style={{ borderColor: colors.border }}
                    >
                      <img
                        src={image}
                        alt=""
                        className="
                        h-[280px]
                        w-full

                        object-cover

                        hover:scale-110

                        transition-transform
                        duration-700
                      "
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventGallery;
