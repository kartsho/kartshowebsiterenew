import { motion } from "framer-motion";

const stats = [
  {
    id: 1,
    number: "3+",
    label: "Active Ventures",
  },

  {
    id: 2,
    number: "50+",
    label: "Clients Served",
  },

  {
    id: 3,
    number: "4+",
    label: "Core Industries",
  },

  {
    id: 4,
    number: "24h",
    label: "Response Time",
  },
];

const Stats = () => {
  return (
    <section
      className="
      relative
      py-24
      overflow-hidden
      bg-[#F8FAFC]
      border-y
      border-black/5
      text-black
    "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
        absolute
        top-[-150px]
        left-[-150px]

        w-[400px]
        h-[400px]

        rounded-full

        bg-cyan-500/20

        blur-3xl
      "
      />

      <div
        className="
        absolute
        bottom-[-150px]
        right-[-150px]

        w-[400px]
        h-[400px]

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
          max-w-3xl
          mx-auto
          mb-20
        "
        >
          <div
            className="
            inline-block

            px-5
            py-2

            rounded-full

            bg-cyan-500/10
            border
            border-cyan-500/20

            text-cyan-400
            text-sm
            font-medium

            mb-6
          "
          >
            Company Statistics
          </div>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold

            leading-tight
          "
          >
            Delivering Results
            Across Every Venture
          </h2>

          <p
            className="
            mt-6

            text-lg
            text-gray-400

            leading-relaxed
          "
          >
            Our numbers reflect the official
            scale of Kartsho Enterprises across
            ventures, clients, industries, and
            response time.
          </p>
        </motion.div>

        {/* ================= STATS GRID ================= */}

        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-4

          gap-8
        "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
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
              group
              relative
              overflow-hidden

              rounded-[32px]

              border
              border-white/10

              bg-white/5
              backdrop-blur-xl

              p-10

              transition-all
              duration-500

              hover:-translate-y-3
              hover:border-cyan-400/30

              shadow-[0_10px_40px_rgba(0,0,0,0.3)]
            "
            >
              {/* GLOW EFFECT */}

              <div
                className="
                absolute
                inset-0

                opacity-0
                group-hover:opacity-100

                transition-all
                duration-500

                bg-gradient-to-br
                from-cyan-500/10
                to-transparent
              "
              />

              {/* NUMBER */}

              <h3
                className="
                relative
                z-10

                text-6xl
                md:text-7xl

                font-bold

                text-cyan-400

                mb-6
              "
              >
                {stat.number}
              </h3>

              {/* LABEL */}

              <p
                className="
                relative
                z-10

                text-xl
                text-gray-300

                font-medium
              "
              >
                {stat.label}
              </p>

              {/* BOTTOM LINE */}

              <div
                className="
                absolute
                bottom-0
                left-0

                h-1
                w-0

                bg-cyan-400

                transition-all
                duration-500

                group-hover:w-full
              "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
