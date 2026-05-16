import { motion } from "framer-motion";

import {
  Atom,
  Server,
  Cloud,
  Brain,
  Database,
  Smartphone,
  PenTool,
  Boxes,
} from "lucide-react";

const techCategories = [
  {
    title: "Frontend",

    icon: <Atom size={28} />,

    technologies: [
      "React JS",
      "Next JS",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Three JS",
    ],
  },

  {
    title: "Backend",

    icon: <Server size={28} />,

    technologies: [
      "Node JS",
      "Express JS",
      "Nest JS",
      "REST APIs",
      "GraphQL",
      "Socket.IO",
    ],
  },

  {
    title: "Cloud & DevOps",

    icon: <Cloud size={28} />,

    technologies: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Vercel",
      "CI/CD",
      "NGINX",
    ],
  },

  {
    title: "AI & Automation",

    icon: <Brain size={28} />,

    technologies: [
      "OpenAI",
      "LangChain",
      "Python",
      "TensorFlow",
      "AI Agents",
      "Automation",
    ],
  },

  {
    title: "Databases",

    icon: <Database size={28} />,

    technologies: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Firebase",
      "Supabase",
    ],
  },

  {
    title: "Mobile Apps",

    icon: <Smartphone size={28} />,

    technologies: [
      "React Native",
      "Flutter",
      "Expo",
      "Android",
      "iOS",
      "PWA",
    ],
  },

  {
    title: "Design Tools",

    icon: <PenTool size={28} />,

    technologies: [
      "Figma",
      "Adobe XD",
      "Illustrator",
      "Photoshop",
      "Spline",
      "UI Systems",
    ],
  },

  {
    title: "Architecture",

    icon: <Boxes size={28} />,

    technologies: [
      "Microservices",
      "Scalable Systems",
      "System Design",
      "Caching",
      "Security",
      "Optimization",
    ],
  },
];

const marqueeItems = [
  "React JS",
  "Next JS",
  "Node JS",
  "AWS",
  "Docker",
  "OpenAI",
  "MongoDB",
  "Kubernetes",
  "GSAP",
  "Three JS",
  "Tailwind CSS",
  "Framer Motion",
];

const TechStack = () => {
  return (
    <section
      className="
      relative
      py-36

      overflow-hidden

      bg-white
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

        bg-cyan-100/50

        blur-3xl
      "
      />

      <div
        className="
        absolute
        bottom-[-200px]
        left-[-200px]

        w-[450px]
        h-[450px]

        rounded-full

        bg-blue-100/40

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
            Modern Engineering Stack
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
            Technologies Powering
            Enterprise Innovation
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            text-lg
            md:text-xl

            text-gray-600

            leading-relaxed
          "
          >
            We build scalable digital products
            using enterprise-grade technologies,
            AI systems, cloud infrastructure,
            and modern engineering architecture.
          </p>
        </motion.div>

        {/* ================= TECH GRID ================= */}

        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-4

          gap-8
        "
        >
          {techCategories.map(
            (category, index) => (
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

                bg-[#F8FAFC]

                border
                border-black/5

                p-8

                transition-all
                duration-500

                hover:-translate-y-3

                hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]
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

                  w-18
                  h-18

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
                  {category.icon}
                </div>

                {/* TITLE */}

                <h3
                  className="
                  relative
                  z-10

                  text-2xl

                  font-bold

                  text-[#0B0F19]

                  mb-8
                "
                >
                  {category.title}
                </h3>

                {/* TECH TAGS */}

                <div
                  className="
                  relative
                  z-10

                  flex
                  flex-wrap

                  gap-3
                "
                >
                  {category.technologies.map(
                    (tech, i) => (
                      <div
                        key={i}
                        className="
                        px-4
                        py-2

                        rounded-full

                        bg-white

                        border
                        border-black/5

                        text-sm
                        font-medium

                        text-[#0B0F19]

                        transition-all
                        duration-300

                        hover:bg-cyan-500
                        hover:text-white
                        hover:scale-105
                      "
                      >
                        {tech}
                      </div>
                    )
                  )}
                </div>

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
            )
          )}
        </div>

        {/* ================= ADVANCED TECH MARQUEE ================= */}

        <div
          className="
          relative

          mt-28

          overflow-hidden

          rounded-[40px]

          bg-[#0B0F19]

          border
          border-white/10

          py-12
        "
        >
          {/* TOP BLUR */}

          <div
            className="
            absolute
            inset-0

            bg-gradient-to-r
            from-cyan-500/10
            via-transparent
            to-cyan-500/10
          "
          />

          {/* LEFT FADE */}

          <div
            className="
            absolute
            left-0
            top-0

            w-40
            h-full

            z-20

            bg-gradient-to-r
            from-[#0B0F19]

          "
          />

          {/* RIGHT FADE */}

          <div
            className="
            absolute
            right-0
            top-0

            w-40
            h-full

            z-20

            bg-gradient-to-l
            from-[#0B0F19]
            to-transparent
          "
          />

          {/* MARQUEE */}

          <div
            className="
            flex

            w-max

            animate-[marquee_18s_linear_infinite]
          "
          >
            {[...marqueeItems, ...marqueeItems].map(
              (item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                  }}
                  className="
                  relative

                  flex
                  items-center
                  justify-center

                  min-w-[260px]

                  mx-4

                  px-8
                  py-6

                  rounded-3xl

                  bg-white/5

                  backdrop-blur-xl

                  border
                  border-white/10

                  shadow-[0_10px_40px_rgba(0,0,0,0.2)]

                  transition-all
                  duration-500

                  hover:border-cyan-400/40
                  hover:bg-cyan-500/10
                "
                >
                  {/* INNER GLOW */}

                  <div
                    className="
                    absolute
                    inset-0

                    rounded-3xl

                    opacity-0
                    hover:opacity-100

                    transition-opacity
                    duration-500

                    bg-gradient-to-br
                    from-cyan-400/20
                    via-transparent
                    to-transparent
                  "
                  />

                  {/* DOT */}

                  <div
                    className="
                    relative
                    z-10

                    w-3
                    h-3

                    rounded-full

                    bg-cyan-400

                    mr-4

                    shadow-[0_0_20px_rgba(6,182,212,0.8)]
                  "
                  />

                  {/* TEXT */}

                  <h3
                    className="
                    relative
                    z-10

                    text-2xl
                    md:text-3xl

                    font-bold

                    text-white
                  "
                  >
                    {item}
                  </h3>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;