import { motion } from "framer-motion";

import {
  CalendarDays,
  Clock3,
  Video,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import {
  buildMailtoLink,
  contactEmails,
} from "../../../utils/contactLinks";

const slots = [
  "10:00 AM",
  "11:30 AM",
  "01:00 PM",
  "03:30 PM",
];

const BookCall = () => {
  const calendlyLink = buildMailtoLink({
    to: [contactEmails.business],
    subject: "Discovery Call Request",
    body:
      "Hi Kartsho Team,\n\nI would like to book a free strategy session.\n\nPlease share the available time slots.",
  });

  return (
    <section
      className="
      relative
      py-32
      overflow-hidden
      bg-[#F5F7FB]
    "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
        absolute
        top-[-200px]
        right-[-200px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-cyan-200/40

        blur-3xl
      "
      />

      <div
        className="
        absolute
        bottom-[-150px]
        left-[-150px]

        w-[400px]
        h-[400px]

        rounded-full

        bg-blue-200/30

        blur-3xl
      "
      />

      {/* ================= GRID ================= */}

      

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
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          {/* BADGE */}

          <div
            className="
            inline-flex

            items-center
            gap-2

            px-5
            py-2

            rounded-full

            bg-cyan-100

            text-cyan-700
            text-sm
            font-semibold

            mb-8
          "
          >
            <CalendarDays size={16} />

            Free Strategy Session
          </div>

          {/* HEADING */}

          <h2
            className="
            text-5xl
            md:text-6xl

            font-bold

            leading-tight

            text-[#0B0F19]

            mb-8
          "
          >
            Book a Free
            <br />

            Strategy Session
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            text-lg
            text-gray-600

            leading-relaxed

            max-w-2xl

            mb-10
          "
          >
            Discuss your startup, SaaS platform,
            AI automation, or enterprise system
            directly with our engineering team.
            We’ll help you validate architecture,
            scaling, and execution strategy.
          </p>

          {/* TRUST POINTS */}

          <div
            className="
            grid
            sm:grid-cols-2

            gap-5

            mb-12
          "
          >
            {[
              "Free Discovery Call",
              "Architecture Discussion",
              "NDA Friendly",
              "Enterprise Consultation",
            ].map((item, index) => (
              <div
                key={index}
                className="
                flex
                items-center
                gap-3
              "
              >
                <CheckCircle2
                  size={20}
                  className="
                  text-cyan-500
                "
                />

                <span
                  className="
                  text-gray-700
                  font-medium
                "
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* MEETING PLATFORMS */}

          <div
            className="
            flex
            flex-wrap

            gap-4

            mb-12
          "
          >
            {[
              "Zoom Meeting",
              "Google Meet",
              "Microsoft Teams",
            ].map((platform, index) => (
              <div
                key={index}
                className="
                flex
                items-center
                gap-2

                px-5
                py-3

                rounded-2xl

                bg-white/70
                backdrop-blur-xl

                border
                border-black/5

                shadow-[0_10px_30px_rgba(0,0,0,0.04)]
              "
              >
                <Video
                  size={18}
                  className="
                  text-cyan-500
                "
                />

                <span
                  className="
                  text-sm
                  font-medium
                  text-[#0B0F19]
                "
                >
                  {platform}
                </span>
              </div>
            ))}
          </div>

          {/* BUTTON */}

          <button
            className="
            group

            flex
            items-center
            gap-3

            px-8
            py-4

            rounded-full

            bg-cyan-500

            text-white
            font-semibold

            transition-all
            duration-300

            hover:scale-105
            hover:shadow-[0_0_40px_rgba(6,182,212,0.35)]
          "
          >
            Schedule Meeting

            <ArrowRight
              size={20}
              className="
              transition-transform
              duration-300

              group-hover:translate-x-1
            "
            />
          </button>
        </motion.div>

        {/* ================= RIGHT SIDE ================= */}

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
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="
          relative
        "
        >
          {/* MAIN CARD */}

          <div
            className="
            relative

            p-8
            md:p-10

            rounded-[40px]

            bg-white/70
            backdrop-blur-2xl

            border
            border-white/40

            shadow-[0_30px_80px_rgba(0,0,0,0.08)]

            overflow-hidden
          "
          >
            {/* CARD GLOW */}

            <div
              className="
              absolute
              top-[-100px]
              right-[-100px]

              w-[250px]
              h-[250px]

              rounded-full

              bg-cyan-200/40

              blur-3xl
            "
            />

            {/* HEADER */}

            <div className="relative z-10 mb-10">
              <h3
                className="
                text-3xl
                font-bold
                text-[#0B0F19]

                mb-3
              "
              >
                Available Slots
              </h3>

              <p className="text-gray-600">
                Select your preferred meeting
                time.
              </p>
            </div>

            {/* SLOT LIST */}

            <div
              className="
              relative
              z-10

              grid
              sm:grid-cols-2

              gap-5

              mb-10
            "
            >
              {slots.map((slot, index) => (
                <motion.div
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                  }}
                  key={index}
                  className="
                  p-5

                  rounded-3xl

                  bg-white/80
                  backdrop-blur-xl

                  border
                  border-black/5

                  shadow-[0_10px_30px_rgba(0,0,0,0.05)]

                  cursor-pointer

                  transition-all
                  duration-300
                "
                >
                  <div
                    className="
                    flex
                    items-center
                    gap-3

                    mb-3
                  "
                  >
                    <Clock3
                      size={18}
                      className="
                      text-cyan-500
                    "
                    />

                    <span
                      className="
                      text-sm
                      text-gray-500
                    "
                    >
                      Today
                    </span>
                  </div>

                  <h4
                    className="
                    text-xl
                    font-bold
                    text-[#0B0F19]
                  "
                  >
                    {slot}
                  </h4>
                </motion.div>
              ))}
            </div>

            {/* CALENDLY BUTTON */}

            <a
              href={calendlyLink}
              className="
              relative
              z-10

              inline-flex
              items-center
              justify-center

              w-full

              py-4

              rounded-2xl

              bg-[#0B0F19]

              text-white
              font-semibold

              transition-all
              duration-300

              hover:bg-cyan-500
            "
            >
              Open Calendly
            </a>
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
            -top-6
            -right-6

            px-6
            py-4

            rounded-3xl

            bg-cyan-500

            text-white

            shadow-[0_0_40px_rgba(6,182,212,0.35)]
          "
          >
            <p className="text-sm opacity-80">
              Avg Response
            </p>

            <h4 className="text-2xl font-bold">
              &lt; 2 Hours
            </h4>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookCall;
