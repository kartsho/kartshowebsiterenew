import {
  Code2,
  Cpu,
  Cloud,
  PenTool,
  Layers3,
  Bot,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Lawdalat",
    description:
      "A legal access ecosystem designed to connect clients with expert legal guidance.",
    icon: Cpu,
    href: "https://advocate.kartsho.com/",
  },

  {
    id: 2,
    title: "Kartsho Academy",
    description:
      "Career-focused learning pathways for people entering the digital workforce.",
    icon: Cloud,
    href: "https://academy.kartsho.com/",
  },

  {
    id: 3,
    title: "Kartsho Counseling",
    description:
      "Strategic academic consulting and mentorship for ambitious learners.",
    icon: Bot,
    href: "https://counselling.kartsho.com/",
  },
];

const ServicesPreview = () => {
  return (
    <section
      id="services-preview"
      className="
       relative
      scroll-mt-28
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
        top-[-100px]
        right-[-100px]
        w-[400px]
        h-[400px]
        bg-cyan-500/20
        rounded-full
        blur-3xl
      "
      />

      <div
        className="
        absolute
        bottom-[-150px]
        left-[-150px]
        w-[350px]
        h-[350px]
        bg-blue-500/20
        rounded-full
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
        {/* ================= HEADING ================= */}

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
            Our Services
          </div>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            leading-tight
          "
          >
            Kartsho Ventures
            <br />
            Built for Modern Growth
          </h2>

          <p
            className="
            mt-6
            text-lg
            text-gray-400
            leading-relaxed
          "
          >
            We help startups and enterprises
            grow through marketing, legal tech,
            and education ventures.
          </p>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}

        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
        "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
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

                p-8

                transition-all
                duration-500

                hover:-translate-y-3
                hover:border-cyan-400/30
                hover:bg-white/[0.08]

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

                {/* ICON */}

                <div
                  className="
                  relative
                  z-10

                  w-16
                  h-16

                  rounded-2xl

                  bg-cyan-500/10
                  border
                  border-cyan-500/20

                  flex
                  items-center
                  justify-center

                  mb-8
                "
                >
                  <Icon
                    size={32}
                    className="
                    text-cyan-400
                  "
                  />
                </div>

                {/* TITLE */}

                <h3
                  className="
                  relative
                  z-10

                  text-2xl
                  font-semibold

                  mb-4
                "
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                  relative
                  z-10

                  text-gray-400
                  leading-relaxed
                "
                >
                  {service.description}
                </p>
                <a
                  href={service.href}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    relative
                    z-10

                    mt-8
                    inline-flex
                    items-center
                    gap-3

                    rounded-full
                    border
                    border-cyan-400/20
                    bg-cyan-500/10
                    px-5
                    py-3

                    text-cyan-300
                    font-semibold

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:border-cyan-300/40
                    hover:bg-cyan-500/15
                    hover:text-cyan-200
                  "
                >
                  Explore

                  <ArrowUpRight size={18} />
                </a>

                {/* HOVER LINE */}

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
            );
          })}
        </div>

        {/* ================= CTA ================= */}

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
          flex
          justify-center
          mt-20
        "
        >
          <button
            className="
            px-8
            py-4

            rounded-full

            bg-cyan-500
            text-white

            font-semibold

            transition-all
            duration-300

            hover:scale-105
            hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]
          "
          >
            Explore All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
