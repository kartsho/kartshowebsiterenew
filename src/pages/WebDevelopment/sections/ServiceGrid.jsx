import { motion } from "framer-motion";

import {
  Code2,
  ServerCog,
  Layers3,
  BrainCircuit,
  DatabaseZap,
  CloudCog,
  Palette,
  Gauge,
  SearchCheck,
  LayoutDashboard,
} from "lucide-react";

/* ================= SERVICES DATA ================= */

const services = [
  {
    icon: Code2,
    title: "Frontend Development",

    description:
      "Modern React, Next.js & animated interfaces engineered for premium user experiences.",
  },

  {
    icon: ServerCog,
    title: "Backend Architecture",

    description:
      "Scalable backend systems with secure APIs, authentication & cloud-ready infrastructure.",
  },

  {
    icon: Layers3,
    title: "Full Stack Systems",

    description:
      "Enterprise-grade applications combining frontend, backend, database & DevOps workflows.",
  },

  {
    icon: BrainCircuit,
    title: "AI Integration",

    description:
      "AI-powered automations, chat systems, recommendation engines & intelligent workflows.",
  },

  {
    icon: DatabaseZap,
    title: "API Development",

    description:
      "High-performance REST & realtime APIs optimized for scalability and integrations.",
  },

  {
    icon: CloudCog,
    title: "Cloud Deployment",

    description:
      "Production deployment pipelines with AWS, Docker, CI/CD and performance monitoring.",
  },

  {
    icon: Palette,
    title: "UI/UX Systems",

    description:
      "Conversion-focused interfaces with motion design, glassmorphism & premium branding.",
  },

  {
    icon: Gauge,
    title: "Performance Optimization",

    description:
      "Lightning-fast loading, Core Web Vitals optimization & production-level performance tuning.",
  },

  {
    icon: SearchCheck,
    title: "SEO Optimization",

    description:
      "Technical SEO architecture engineered for visibility, indexing and organic growth.",
  },

  {
    icon: LayoutDashboard,
    title: "CMS Development",

    description:
      "Custom dashboards & CMS platforms built for teams, automation and easy management.",
  },
];

/* ================= COMPONENT ================= */

const ServicesGrid = () => {
  return (
    <section
      className="
      relative
      overflow-hidden

      bg-[#F5F7FB]

      py-32
    "
    >
      {/* ================= GRID BG ================= */}

      <div
        className="
        absolute
        inset-0

        opacity-[0.04]

        [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]

        [background-size:70px_70px]
      "
      />

      {/* ================= GLOW ================= */}

      <div
        className="
        absolute
        top-[-200px]
        left-[-100px]

        w-[450px]
        h-[450px]

        rounded-full

        bg-cyan-500/10

        blur-[120px]
      "
      />

      <div
        className="
        absolute
        bottom-[-250px]
        right-[-100px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-blue-500/10

        blur-[140px]
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
        {/* ================= TOP ================= */}

        <div
          className="
          max-w-3xl
        "
        >
          {/* SMALL TAG */}

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
              duration: 0.5,
            }}
            viewport={{ once: true }}
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

            text-cyan-700
            text-sm
            font-semibold

            backdrop-blur-xl

            mb-8
          "
          >
            ⚡ Elite Development Services
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
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="
            text-5xl
            lg:text-6xl

            font-black

            leading-[1.05]
            tracking-tight

            text-yellow-700
          "
          >
            Engineering Digital
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
              Systems For Scale.
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

            text-gray-600

            max-w-2xl
          "
          >
            From AI-powered SaaS
            platforms to enterprise-grade
            architectures — we build
            scalable, secure and
            high-performance digital
            products engineered for
            modern growth.
          </motion.p>
        </div>

        {/* ================= SERVICES GRID ================= */}

        <div
          className="
          mt-20

          grid
          md:grid-cols-2
          xl:grid-cols-3

          gap-7
        "
        >
          {services.map(
            (service, index) => {
              const Icon =
                service.icon;

              return (
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
                    duration: 0.5,
                    delay:
                      index * 0.06,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -10,
                    rotateX: 4,
                    rotateY: -4,
                  }}
                  className="
                  group
                  relative

                  overflow-hidden

                  rounded-[32px]

                  border
                  border-white/40

                  bg-white/70
                  backdrop-blur-3xl

                  p-8

                  shadow-[0_15px_50px_rgba(0,0,0,0.06)]

                  transition-all
                  duration-500
                "
                  style={{
                    transformStyle:
                      "preserve-3d",
                  }}
                >
                  {/* ANIMATED BORDER */}

                  <div
                    className="
                    absolute
                    inset-0

                    rounded-[32px]

                    p-[1px]

                    bg-gradient-to-br
                    from-cyan-500/40
                    via-transparent
                    to-blue-500/40

                    opacity-0

                    transition-all
                    duration-500

                    group-hover:opacity-100
                  "
                  />

                  {/* SPOTLIGHT */}

                  <div
                    className="
                    absolute
                    -top-24
                    -left-20

                    w-[220px]
                    h-[220px]

                    rounded-full

                    bg-cyan-400/10

                    blur-3xl

                    opacity-0

                    transition-all
                    duration-700

                    group-hover:opacity-100
                  "
                  />

                  {/* HOVER GLOW */}

                  <div
                    className="
                    absolute
                    inset-0

                    bg-gradient-to-br
                    from-cyan-500/[0.08]
                    to-blue-500/[0.03]

                    opacity-0

                    transition-all
                    duration-500

                    group-hover:opacity-100
                  "
                  />

                  {/* CONTENT */}

                  <div
                    className="
                    relative
                    z-10
                  "
                  >
                    {/* ICON */}

                    <div
                      className="
                      relative

                      w-16
                      h-16

                      rounded-2xl

                      bg-gradient-to-br
                      from-cyan-500
                      to-blue-500

                      flex
                      items-center
                      justify-center

                      shadow-[0_10px_40px_rgba(6,182,212,0.35)]

                      group-hover:scale-110
                      group-hover:rotate-6

                      transition-all
                      duration-500
                    "
                    >
                      <Icon
                        size={30}
                        className="
                        text-white
                      "
                      />

                      {/* ICON BLUR */}

                      <div
                        className="
                        absolute
                        inset-0

                        rounded-2xl

                        bg-cyan-400/30

                        blur-2xl
                      "
                      />
                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                      mt-8

                      text-2xl
                      font-bold

                      text-[#0B1220]
                    "
                    >
                      {service.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      className="
                      mt-5

                      leading-relaxed

                      text-gray-600
                    "
                    >
                      {
                        service.description
                      }
                    </p>

                    {/* BOTTOM */}

                    <div
                      className="
                      mt-8

                      flex
                      items-center
                      justify-between
                    "
                    >
                      <span
                        className="
                        text-sm
                        font-semibold

                        text-cyan-600
                      "
                      >
                        Explore Service
                      </span>

                      <div
                        className="
                        w-11
                        h-11

                        rounded-full

                        border
                        border-cyan-500/20

                        bg-cyan-500/10

                        flex
                        items-center
                        justify-center

                        text-cyan-600

                        transition-all
                        duration-500

                        group-hover:translate-x-1
                      "
                      >
                        →
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;