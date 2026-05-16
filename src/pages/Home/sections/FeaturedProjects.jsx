import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Globe,
} from "lucide-react";

import heroImage from "../../../assets/images/hero.jpg";

const liveProjects = [
  {
    title: "AI Analytics Platform",
    url: "https://example.com",
  },

  {
    title: "Cloud CRM System",
    url: "https://example.com",
  },

  {
    title: "Enterprise SaaS",
    url: "https://example.com",
  },
];

const FeaturedProjects = () => {
  return (
    <section
      className="
      relative
      py-32
      overflow-hidden
      bg-white
    "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
        absolute
        top-[-150px]
        right-[-150px]

        w-[400px]
        h-[400px]

        rounded-full

        bg-cyan-100/50

        blur-3xl
      "
      />

      <div
        className="
        absolute
        bottom-[-100px]
        left-[-100px]

        w-[350px]
        h-[350px]

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
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          {/* BADGE */}

          <div
            className="
            inline-block

            px-5
            py-2

            rounded-full

            bg-cyan-100

            text-cyan-700
            text-sm
            font-medium

            mb-6
          "
          >
            Featured Project
          </div>

          {/* HEADING */}

          <h2
            className="
            text-4xl
            md:text-5xl

            font-bold

            text-[#0B0F19]

            leading-tight

            mb-8
          "
          >
            AI SaaS Dashboard
            for Enterprise Growth
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            text-lg
            text-gray-600

            leading-relaxed

            mb-10
          "
          >
            We designed and developed a modern
            AI-powered SaaS dashboard with
            analytics, automation, cloud scaling,
            and enterprise-grade performance.
          </p>

          {/* TAGS */}

          <div
            className="
            flex
            flex-wrap
            gap-4

            mb-12
          "
          >
            {[
              "React JS",
              "Node JS",
              "AI Automation",
              "Cloud System",
            ].map((tag, index) => (
              <div
                key={index}
                className="
                px-5
                py-3

                rounded-full

                bg-[#F5F7FB]

                border
                border-black/5

                text-sm
                font-medium

                text-[#0B0F19]
              "
              >
                {tag}
              </div>
            ))}
          </div>

          {/* ================= STATS ================= */}

          <div
            className="
            grid
            grid-cols-2

            gap-8

            mb-12
          "
          >
            <div>
              <h3
                className="
                text-4xl
                font-bold
                text-cyan-500
              "
              >
                6+
              </h3>

              <p className="text-gray-600 mt-2">
                Active Ventures
              </p>
            </div>

            <div>
              <h3
                className="
                text-4xl
                font-bold
                text-cyan-500
              "
              >
                50+
              </h3>

              <p className="text-gray-600 mt-2">
                Clients Served
              </p>
            </div>
          </div>

          {/* ================= PROJECT TIMELINE ================= */}

          <div
            className="
            grid
            grid-cols-3
            gap-6

            mb-12
          "
          >
            {/* ITEM */}

            <div
              className="
              p-5

              rounded-3xl

              bg-[#F5F7FB]

              border
              border-black/5
            "
            >
              <h3
                className="
                text-3xl
                font-bold
                text-cyan-500
              "
              >
                6
              </h3>

              <p className="text-gray-600 mt-2">
                Weeks
              </p>
            </div>

            {/* ITEM */}

            <div
              className="
              p-5

              rounded-3xl

              bg-[#F5F7FB]

              border
              border-black/5
            "
            >
              <h3
                className="
                text-3xl
                font-bold
                text-cyan-500
              "
              >
                12
              </h3>

              <p className="text-gray-600 mt-2">
                Developers
              </p>
            </div>

            {/* ITEM */}

            <div
              className="
              p-5

              rounded-3xl

              bg-[#F5F7FB]

              border
              border-black/5
            "
            >
              <h3
                className="
                text-3xl
                font-bold
                text-cyan-500
              "
              >
                4
              </h3>

              <p className="text-gray-600 mt-2">
                Countries
              </p>
            </div>
          </div>

          {/* ================= BUTTONS ================= */}

          <div className="flex flex-wrap gap-5">
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
              View Case Study
            </button>

            <button
              className="
              px-8
              py-4

              rounded-full

              border
              border-gray-300

              font-semibold

              transition-all
              duration-300

              hover:bg-[#F5F7FB]
            "
            >
              Live Preview
            </button>
          </div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="
          relative
        "
        >
          {/* IMAGE CONTAINER */}

          <div
            className="
            relative
            overflow-hidden

            rounded-[40px]

            shadow-[0_30px_80px_rgba(0,0,0,0.15)]
          "
          >
            {/* IMAGE */}

            <img
              src={heroImage}
              alt="Project"
              className="
              w-full
              h-full
              object-cover

              transition-all
              duration-700

              hover:scale-105
            "
            />

            {/* OVERLAY */}

            <div
              className="
              absolute
              inset-0

              bg-gradient-to-t
              from-black/20
              to-transparent
            "
            />
          </div>

          {/* FLOATING CARD 1 */}

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
            top-8
            -left-10

            backdrop-blur-xl
            bg-white/80

            border
            border-white/40

            rounded-3xl

            px-6
            py-5

            shadow-xl
          "
          >
            <p className="text-gray-500 text-sm">
              Active Users
            </p>

            <h3
              className="
              text-3xl
              font-bold
              text-[#0B0F19]
            "
            >
              50K+
            </h3>
          </motion.div>

          {/* FLOATING CARD 2 */}

          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="
            absolute
            bottom-10
            right-0

            backdrop-blur-xl
            bg-white/80

            border
            border-white/40

            rounded-3xl

            px-6
            py-5

            shadow-xl
          "
          >
            <p className="text-gray-500 text-sm">
              Performance
            </p>

            <h3
              className="
              text-3xl
              font-bold
              text-cyan-500
            "
            >
              +89%
            </h3>
          </motion.div>

          {/* ================= LIVE PROJECTS PANEL ================= */}

          <motion.div
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
            absolute

            -bottom-24
            left-10

            w-[320px]

            backdrop-blur-xl
            bg-white/80

            border
            border-white/40

            rounded-[32px]

            p-6

            shadow-[0_20px_50px_rgba(0,0,0,0.12)]
          "
          >
            {/* TITLE */}

            <div
              className="
              flex
              items-center
              gap-3

              mb-6
            "
            >
              <div
                className="
                w-12
                h-12

                rounded-2xl

                bg-cyan-100

                flex
                items-center
                justify-center
              "
              >
                <Globe className="text-cyan-600" />
              </div>

              <div>
                <h3
                  className="
                  font-bold
                  text-[#0B0F19]
                "
                >
                  Live Projects
                </h3>

                <p className="text-sm text-gray-500">
                  Explore deployed products
                </p>
              </div>
            </div>

            {/* PROJECT LIST */}

            <div className="flex flex-col gap-4">
              {liveProjects.map(
                (project, index) => (
                  <a
                    key={index}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    group

                    flex
                    items-center
                    justify-between

                    p-4

                    rounded-2xl

                    bg-[#F5F7FB]

                    hover:bg-cyan-50

                    transition-all
                    duration-300
                  "
                  >
                    <div>
                      <h4
                        className="
                        font-semibold
                        text-[#0B0F19]
                      "
                      >
                        {project.title}
                      </h4>

                      <p
                        className="
                        text-sm
                        text-gray-500
                      "
                      >
                        Live Preview
                      </p>
                    </div>

                    <ArrowUpRight
                      className="
                      text-cyan-500

                      transition-all
                      duration-300

                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                    />
                  </a>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
