import { motion } from "framer-motion";

import {
  Globe2,
  Users,
  Smile,
  Clock3,
  BriefcaseBusiness,
} from "lucide-react";

const stats = [
  {
    icon: <Users size={28} />,
    number: "50+",
    label: "Clients Served",
  },

  {
    icon: <Globe2 size={28} />,
    number: "4+",
    label: "Core Industries",
  },

  {
    icon: <Smile size={28} />,
    number: "3+",
    label: "Active Ventures",
  },

  {
    icon: <Clock3 size={28} />,
    number: "24h",
    label: "Response Time",
  },
   {
  icon: <Users size={28} />,
  number: "28+",
  label: "Team Members",
},

 
];

const GlobalPresence = () => {
  return (
    <section
      id="global-presence"
      className="
      relative
      py-32
      overflow-hidden
      bg-[#F5F7FB]
    "
    >
      {/* ================= GRID BACKGROUND ================= */}

    
      {/* ================= GLOW EFFECT ================= */}

      <div
        className="
        absolute
        top-[-200px]
        right-[-200px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-cyan-300/30

        blur-3xl
      "
      />

      <div
        className="
        absolute
        bottom-[-200px]
        left-[-200px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-blue-300/20

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
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="
          text-center

          max-w-4xl
          mx-auto

          mb-20
        "
        >
          {/* BADGE */}

          <div
            className="
            inline-flex

            px-5
            py-3

            rounded-full

            bg-white/70
            backdrop-blur-xl

            border
            border-black/5

            text-cyan-600
            text-sm
            font-semibold

            mb-8
          "
          >
            Global Presence
          </div>

          {/* HEADING */}

          <h2
            className="
            text-5xl
            md:text-6xl

            font-bold

            leading-[1.1]

            text-[#0B0F19]

            mb-8
          "
          >
            Serving Clients Across
            <br />

            <span className="text-cyan-500">
              Multiple Ventures
            </span>

            {" "}Worldwide.
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            text-xl

            text-gray-600

            leading-relaxed
          "
          >
            Kartsho partners with startups,
            enterprises, and growing teams to
            engineer scalable digital systems,
            business support, and official
            contact channels.
          </p>
        </motion.div>

        {/* ================= STATS CARDS ================= */}

        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-5

          gap-6
        "
        >
          {stats.map((item, index) => (
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
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
              relative

              overflow-hidden
              
              rounded-[32px]

              bg-white/70
              backdrop-blur-2xl

              border
              border-white/40

              p-8

              shadow-[0_20px_60px_rgba(0,0,0,0.06)]

              transition-all
              duration-500

              text-center
              flex
              flex-col
              items-center
            "
            >
              {/* INNER GLOW */}

              <div
                className="
                absolute
                top-[-40px]
                right-[-40px]

                w-[120px]
                h-[120px]

                rounded-full

                bg-cyan-300/20

                blur-3xl
              "
              />

              {/* ICON */}

              <div
                className="
                relative
                z-10

                w-16
                h-16

                rounded-2xl

                bg-cyan-500

                flex
                items-center
                justify-center

                text-white

                shadow-[0_10px_30px_rgba(6,182,212,0.3)]

                mb-8
              "
              >
                {item.icon}
              </div>

              {/* NUMBER */}

              <h3
                className="
                relative
                z-10

                text-5xl

                font-bold

                text-[#0B0F19]

                mb-3

                text-center
              "
              >
                {item.number}
              </h3>

              {/* LABEL */}

              <p
                className="
                relative
                z-10

                text-gray-600

                font-medium
              "
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
