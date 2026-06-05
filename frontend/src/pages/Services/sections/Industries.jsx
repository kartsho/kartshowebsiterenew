import { motion } from "framer-motion";

import {
  Building2,
  ShoppingCart,
  HeartPulse,
  Landmark,
  GraduationCap,
  Truck,
  Smartphone,
  Globe2,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    icon: <Building2 size={34} />,

    title: "LawDalat",

    desc: "Scalable enterprise platforms, internal dashboards, workflow automation, and cloud infrastructure for large organizations.",

    tags: [
      "ERP Systems",
      "Automation",
      "Cloud Scaling",
    ],
  },

  {
    icon: <GraduationCap size={34} />,

    title: "Kartsho Academy",

    desc: "Modern LMS platforms, virtual learning systems, AI-powered education tools, and scalable EdTech ecosystems.",

    tags: [
      "LMS",
      "AI Learning",
      "Courses",
    ],
  },

  {
    icon: <Globe2 size={34} />,

    title: "Kartsho Councling",

    desc: "Enterprise SaaS systems with subscriptions, cloud scaling, analytics, and multi-region infrastructure.",

    tags: [
      "SaaS",
      "Cloud",
      "Scalable APIs",
    ],
  },
];

const Industries = () => {
  return (
    <section
      className="
      relative
      py-36

      overflow-hidden

      bg-[#F5F7FB]
    "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
        absolute
        top-[-200px]
        left-[-200px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-cyan-200/30

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

        bg-blue-200/30

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
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="
          text-center

          max-w-4xl
          mx-auto

          mb-24
        "
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

            mb-6
          "
          >
            Our Ecosystem
          </div>

          {/* HEADING */}

          <h2
            className="
            text-4xl
            md:text-6xl

            font-bold

            leading-tight

            text-[#0B0F19]

            mb-8
          "
          >
            Scalable Solutions
            Across Multiple
            Industries
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            text-lg
            md:text-xl

            leading-relaxed

            text-gray-600
          "
          >
            We help startups, enterprises,
            and global businesses build
            high-performance digital products,
            automation systems, AI platforms,
            and cloud solutions.
          </p>
        </motion.div>

        {/* ================= INDUSTRIES GRID ================= */}

        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-4

          gap-8
        "
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="
              group
              relative

              overflow-hidden

              rounded-[36px]

              bg-white/80

              backdrop-blur-xl

              border
              border-white/40

              p-8

              shadow-[0_20px_60px_rgba(0,0,0,0.06)]

              transition-all
              duration-500

              hover:-translate-y-4

              hover:shadow-[0_30px_90px_rgba(0,0,0,0.12)]
            "
            >
              {/* HOVER GLOW */}

              <div
                className="
                absolute
                inset-0

                opacity-0
                group-hover:opacity-100

                transition-opacity
                duration-500

                bg-gradient-to-br
                from-cyan-100/40
                via-transparent
                to-transparent
              "
              />

              {/* ICON */}

              <div
                className="
                relative
                z-10

                w-20
                h-20

                rounded-3xl

                bg-cyan-100

                flex
                items-center
                justify-center

                text-cyan-600

                mb-8

                transition-all
                duration-500

                group-hover:rotate-6
                group-hover:scale-110
              "
              >
                {industry.icon}
              </div>

              {/* TITLE */}

              <h3
                className="
                relative
                z-10

                text-2xl

                font-bold

                text-[#0B0F19]

                mb-5
              "
              >
                {industry.title}
              </h3>

              {/* DESC */}

              <p
                className="
                relative
                z-10

                text-gray-600

                leading-relaxed

                mb-8
              "
              >
                {industry.desc}
              </p>

              {/* TAGS */}

              <div
                className="
                relative
                z-10

                flex
                flex-wrap

                gap-3

                mb-8
              "
              >
                {industry.tags.map(
                  (tag, i) => (
                    <div
                      key={i}
                      className="
                      px-4
                      py-2

                      rounded-full

                      bg-[#F5F7FB]

                      border
                      border-black/5

                      text-sm
                      font-medium

                      text-[#0B0F19]

                      transition-all
                      duration-300

                      hover:bg-cyan-500
                      hover:text-white
                    "
                    >
                      {tag}
                    </div>
                  )
                )}
              </div>

              {/* BUTTON */}

              <button
                className="
                relative
                z-10

                flex
                items-center
                gap-3

                text-cyan-600
                font-semibold

                group/btn
              "
              >
                Explore Industry

                <ArrowRight
                  size={18}
                  className="
                  transition-transform
                  duration-300

                  group-hover/btn:translate-x-1
                "
                />
              </button>

              {/* CORNER GLOW */}

              <div
                className="
                absolute
                -bottom-20
                -right-20

                w-40
                h-40

                rounded-full

                bg-cyan-200/30

                blur-3xl

                opacity-0

                group-hover:opacity-100

                transition-all
                duration-700
              "
              />
            </motion.div>
          ))}
        </div>

        {/* ================= BOTTOM STATS ================= */}

        <motion.div
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
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="
          mt-28

          grid
          md:grid-cols-4

          gap-8
        "
        >
          {[
            {
              number: "3+",
              label: "Active Ventures",
            },

            {
              number: "50+",
              label: "Clients Served",
            },

            {
              number: "4+",
              label: "Core Industries",
            },

            {
              number: "24h",
              label: "Response Time",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
              relative

              overflow-hidden

              rounded-[32px]

              bg-[#0B0F19]

              px-8
              py-10

              text-center
            "
            >
              {/* GLOW */}

              <div
                className="
                absolute
                top-[-50px]
                right-[-50px]

                w-40
                h-40

                rounded-full

                bg-cyan-500/20

                blur-3xl
              "
              />

              <h3
                className="
                relative
                z-10

                text-5xl

                font-black

                text-white

                mb-4
              "
              >
                {item.number}
              </h3>

              <p
                className="
                relative
                z-10

                text-white/70

                text-lg
              "
              >
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
