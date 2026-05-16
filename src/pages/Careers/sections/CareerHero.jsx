import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  Globe,
  BrainCircuit,
  Users,
  ShieldCheck,
  Play,
} from "lucide-react";

/* ======================================================= */
/* TRUST BADGES */
/* ======================================================= */

const trustBadges = [
  "Remote First",
  "AI Powered Workflow",
  "Global Team",
  "High Ownership",
];

/* ======================================================= */
/* FLOATING TEAM */
/* ======================================================= */

const floatingEmployees = [
  {
    name: "Sophia Lee",
    role: "AI Engineer",
    image:
      "https://i.pravatar.cc/300?img=32",
    className:
      "top-0 left-10 lg:left-24",
  },

  {
    name: "Daniel Kim",
    role: "Cloud Architect",
    image:
      "https://i.pravatar.cc/300?img=15",
    className:
      "top-36 right-0 lg:right-12",
  },

  {
    name: "Emma Watson",
    role: "UI/UX Lead",
    image:
      "https://i.pravatar.cc/300?img=45",
    className:
      "bottom-10 left-0",
  },

  {
    name: "Alex Carter",
    role: "Full Stack Engineer",
    image:
      "https://i.pravatar.cc/300?img=12",
    className:
      "bottom-0 right-16",
  },
];

const CareerHero = () => {
  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden

      bg-[#F5F7FB]

      flex
      items-center

      pt-36
      pb-24
    "
    >
      {/* ======================================================= */}
      {/* ANIMATED GRID */}
      {/* ======================================================= */}

      <div
        className="
        absolute
        inset-0

        opacity-[0.05]

        [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]

        [background-size:70px_70px]
      "
      />

      {/* ======================================================= */}
      {/* LEFT GLOW */}
      {/* ======================================================= */}

      <div
        className="
        absolute
        top-[-250px]
        left-[-180px]

        w-[550px]
        h-[550px]

        rounded-full

        bg-cyan-500/20

        blur-[140px]
      "
      />

      {/* ======================================================= */}
      {/* RIGHT GLOW */}
      {/* ======================================================= */}

      <div
        className="
        absolute
        bottom-[-250px]
        right-[-180px]

        w-[550px]
        h-[550px]

        rounded-full

        bg-blue-500/20

        blur-[160px]
      "
      />

      {/* ======================================================= */}
      {/* SPOTLIGHT */}
      {/* ======================================================= */}

      <div
        className="
        absolute
        top-1/2
        left-1/2

        -translate-x-1/2
        -translate-y-1/2

        w-[700px]
        h-[700px]

        rounded-full

        bg-cyan-400/10

        blur-[180px]
      "
      />

      {/* ======================================================= */}
      {/* CONTAINER */}
      {/* ======================================================= */}

      <div
        className="
        relative
        z-10

        max-w-7xl
        mx-auto

        px-6

        grid
        lg:grid-cols-2

        gap-24
        items-center
      "
      >
        {/* ======================================================= */}
        {/* LEFT CONTENT */}
        {/* ======================================================= */}

        <div>
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
            gap-2

            px-5
            py-3

            rounded-full

            border
            border-cyan-500/20

            bg-white/70
            backdrop-blur-xl

            text-cyan-600
            text-sm
            font-semibold

            shadow-[0_10px_40px_rgba(6,182,212,0.08)]

            mb-8
          "
          >
            <Sparkles size={16} />

            Building Future-Ready Teams
          </motion.div>

          {/* HEADING */}

          <motion.h1
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
            text-5xl
            sm:text-6xl
            lg:text-7xl

            font-black

            leading-[1.05]

            tracking-tight

            text-[color:var(--text-primary)]

            max-w-3xl
          "
          >
            Build Products
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
              That Matter.
            </span>

            <br />

            Work With Elite
            Engineers.
          </motion.h1>

          {/* DESCRIPTION */}

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

            text-[color:var(--text-secondary)]

            max-w-2xl
          "
          >
            Join a global team of
            engineers, AI specialists,
            designers, and product
            strategists building scalable
            digital experiences for the
            next generation of startups
            and enterprises.
          </motion.p>

          {/* CTA */}

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
              duration: 1,
            }}
            viewport={{ once: true }}
            className="
            flex
            flex-wrap

            items-center
            gap-5

            mt-12
          "
          >
            {/* BUTTON 1 */}

            <button
              className="
              group

              relative

              overflow-hidden

              px-8
              py-5

              rounded-2xl

              bg-gradient-to-r
              from-cyan-500
              to-blue-500

              text-white
              font-semibold

              shadow-[0_15px_50px_rgba(6,182,212,0.35)]

              transition-all
              duration-500

              hover:scale-105
            "
            >
              <span
                className="
                relative
                z-10

                flex
                items-center
                gap-3
              "
              >
                View Open Roles

                <ArrowRight
                  size={18}
                  className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
                />
              </span>

              <div
                className="
                absolute
                inset-0

                opacity-0

                bg-white/20

                transition-opacity
                duration-500

                group-hover:opacity-100
              "
              />
            </button>

            {/* BUTTON 2 */}

            <button
              className="
              flex
              items-center
              gap-3

              px-8
              py-5

              rounded-2xl

              border
              border-black/10

              bg-white/70
              backdrop-blur-xl

              text-[color:var(--text-primary)]
              font-semibold

              hover:border-cyan-400/30
              hover:bg-cyan-500/5

              transition-all
              duration-300
            "
            >
              <Play size={18} />

              Meet The Team
            </button>
          </motion.div>

          {/* TRUST BADGES */}

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
              duration: 1.1,
            }}
            viewport={{ once: true }}
            className="
            flex
            flex-wrap

            gap-4

            mt-14
          "
          >
            {trustBadges.map(
              (badge, index) => (
                <div
                  key={index}
                  className="
                  px-5
                  py-3

                  rounded-full

                  border
                  border-black/5

                  bg-white/70
                  backdrop-blur-xl

                  text-sm
                  font-medium

                  text-[color:var(--text-secondary)]

                  shadow-[0_10px_30px_rgba(0,0,0,0.03)]

                  hover:border-cyan-400/30
                  hover:text-cyan-600

                  transition-all
                  duration-300
                "
                >
                  {badge}
                </div>
              )
            )}
          </motion.div>
        </div>

        {/* ======================================================= */}
        {/* RIGHT VISUAL */}
        {/* ======================================================= */}

        <div
          className="
          relative

          h-[700px]

          flex
          items-center
          justify-center
        "
        >
          {/* ======================================================= */}
          {/* ORBIT */}
          {/* ======================================================= */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            absolute

            w-[560px]
            h-[560px]

            rounded-full

            border
            border-dashed
            border-cyan-500/20
          "
          >
            {/* ICON 1 */}

            <div
              className="
              absolute
              top-0
              left-1/2

              -translate-x-1/2
              -translate-y-1/2

              w-16
              h-16

              rounded-full

              bg-white/70
              backdrop-blur-xl

              border
              border-cyan-500/20

              flex
              items-center
              justify-center

              text-cyan-500

              shadow-[0_10px_40px_rgba(6,182,212,0.15)]
            "
            >
              <BrainCircuit size={26} />
            </div>

            {/* ICON 2 */}

            <div
              className="
              absolute
              bottom-0
              left-1/2

              -translate-x-1/2
              translate-y-1/2

              w-16
              h-16

              rounded-full

              bg-white/70

              border
              border-blue-500/20

              flex
              items-center
              justify-center

              text-blue-500

              shadow-[0_10px_40px_rgba(59,130,246,0.15)]
            "
            >
              <Globe size={26} />
            </div>

            {/* ICON 3 */}

            <div
              className="
              absolute
              top-1/2
              left-0

              -translate-x-1/2
              -translate-y-1/2

              w-16
              h-16

              rounded-full

              bg-white/70

              border
              border-cyan-500/20

              flex
              items-center
              justify-center

              text-cyan-500
            "
            >
              <Users size={26} />
            </div>

            {/* ICON 4 */}

            <div
              className="
              absolute
              top-1/2
              right-0

              translate-x-1/2
              -translate-y-1/2

              w-16
              h-16

              rounded-full

              bg-white/70

              border
              border-cyan-500/20

              flex
              items-center
              justify-center

              text-cyan-500
            "
            >
              <ShieldCheck size={26} />
            </div>
          </motion.div>

          {/* ======================================================= */}
          {/* MAIN DASHBOARD */}
          {/* ======================================================= */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="
            relative

            w-[340px]
            h-[340px]

            rounded-[40px]

            border
            border-white/40

            bg-white/60
            backdrop-blur-3xl

            overflow-hidden

            shadow-[0_30px_100px_rgba(6,182,212,0.12)]
          "
          >
            {/* GRADIENT */}

            <div
              className="
              absolute
              inset-0

              bg-gradient-to-br
              from-cyan-500/10
              via-transparent
              to-blue-500/10
            "
            />

            {/* CONTENT */}

            <div
              className="
              relative
              z-10

              h-full

              p-8

              flex
              flex-col
              justify-between
            "
            >
              {/* TOP */}

              <div
                className="
                flex
                items-center
                justify-between
              "
              >
                <div>
                  <p
                    className="
                    text-sm
                    text-[color:var(--text-muted)]
                  "
                  >
                    Team Collaboration
                  </p>

                  <h3
                    className="
                    mt-2

                    text-2xl
                    font-bold

                    text-[color:var(--text-primary)]
                  "
                  >
                    Live AI Workflow
                  </h3>
                </div>

                <div
                  className="
                  w-4
                  h-4

                  rounded-full

                  bg-green-500

                  animate-pulse
                "
                />
              </div>

              {/* CENTER */}

              <div
                className="
                flex
                items-center
                justify-center
              "
              >
                <div
                  className="
                  relative

                  w-32
                  h-32

                  rounded-full

                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500

                  flex
                  items-center
                  justify-center

                  shadow-[0_0_80px_rgba(6,182,212,0.35)]
                "
                >
                  <BrainCircuit
                    size={48}
                    className="
                    text-white
                  "
                  />
                </div>
              </div>

              {/* BOTTOM */}

              <div
                className="
                grid
                grid-cols-2

                gap-4
              "
              >
                <div
                  className="
                  p-4

                  rounded-2xl

                  bg-white/70

                  border
                  border-black/5
                "
                >
                  <p
                    className="
                    text-sm
                    text-[color:var(--text-muted)]
                  "
                  >
                    Active Engineers
                  </p>

                  <h4
                    className="
                    mt-2

                    text-2xl
                    font-bold

                    text-[color:var(--text-primary)]
                  "
                  >
                    20+
                  </h4>
                </div>

                <div
                  className="
                  p-4

                  rounded-2xl

                  bg-white/70

                  border
                  border-black/5
                "
                >
                  <p
                    className="
                    text-sm
                    text-[color:var(--text-muted)]
                  "
                  >
                    AI Productivity
                  </p>

                  <h4
                    className="
                    mt-2

                    text-2xl
                    font-bold

                    text-cyan-500
                  "
                  >
                    94%
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ======================================================= */}
          {/* FLOATING EMPLOYEE CARDS */}
          {/* ======================================================= */}

          {floatingEmployees.map(
            (employee, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                animate={{
                  y: [0, -12, 0],
                }}
                viewport={{ once: true }}
                className={`
                  absolute
                  ${employee.className}
                `}
              >
                <div
                  className="
                  group

                  flex
                  items-center
                  gap-4

                  px-4
                  py-4

                  rounded-3xl

                  border
                  border-white/40

                  bg-white/60
                  backdrop-blur-2xl

                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]

                  hover:border-cyan-400/30
                  hover:bg-cyan-500/5

                  transition-all
                  duration-500
                "
                >
                  {/* IMAGE */}

                  <div
                    className="
                    relative

                    w-16
                    h-16

                    rounded-full

                    overflow-hidden

                    border
                    border-cyan-500/20
                  "
                  >
                    <img
                      src={employee.image}
                      alt={employee.name}
                      className="
                      w-full
                      h-full

                      object-cover
                    "
                    />
                  </div>

                  {/* INFO */}

                  <div>
                    <h4
                      className="
                      font-semibold

                      text-white
                    "
                    >
                      {employee.name}
                    </h4>

                    <p
                      className="
                      text-sm
                      text-white/70
                    "
                    >
                      {employee.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
