import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  Globe,
  BrainCircuit,
  ShieldCheck,
} from "lucide-react";

const trustPills = [
  "20+ Engineers",
  "8 Countries",
  "AI Experts",
  "Enterprise Ready",
];

const floatingMembers = [
  {
    name: "Alex",
    role: "AI Engineer",
    image:
      "https://i.pravatar.cc/300?img=12",
    className:
      "top-0 left-10 lg:left-20",
  },

  {
    name: "Sophia",
    role: "UI/UX Designer",
    image:
      "https://i.pravatar.cc/300?img=32",
    className:
      "top-32 right-0 lg:right-10",
  },

  {
    name: "Daniel",
    role: "Cloud Architect",
    image:
      "bottom-10 left-0",
    image:
      "https://i.pravatar.cc/300?img=15",
  },

  {
    name: "Emma",
    role: "Product Strategist",
    image:
      "https://i.pravatar.cc/300?img=45",
    className:
      "bottom-0 right-16",
  },
];

const TeamHero = () => {
  const noiseUrl = `${import.meta.env.BASE_URL}noise.svg`;

  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden

      bg-[#F5F7FB]

      flex
      items-center

      pt-32
      pb-24
    "
    >
      {/* ================= GRID ================= */}


      {/* ================= TOP GLOW ================= */}

      <div
        className="
        absolute
        top-[-250px]
        left-[-150px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-cyan-500/20

        blur-[140px]
      "
      />

      {/* ================= RIGHT GLOW ================= */}

      <div
        className="
        absolute
        bottom-[-250px]
        right-[-150px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-blue-500/20

        blur-[160px]
      "
      />

      {/* ================= NOISE ================= */}

      <div
        className="
        absolute
        inset-0

        opacity-[0.03]
      "
        style={{
          backgroundImage: `url("${noiseUrl}")`,
        }}
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

        gap-24
        items-center
      "
      >
        {/* ================================================= */}
        {/* LEFT CONTENT */}
        {/* ================================================= */}

        <div>
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

            text-cyan-700
            text-sm
            font-semibold

            shadow-[0_10px_40px_rgba(6,182,212,0.08)]

            mb-8
          "
          >
            <Sparkles size={16} />

            Elite Product Engineering Team
          </motion.div>

          {/* HEADING */}

          <motion.h1
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
            text-5xl
            sm:text-6xl
            lg:text-7xl

            font-black

            leading-[1.05]

            tracking-tight

            text-[color:var(--text-primary)]

            max-w-2xl
          "
          >
            Meet The Minds
            <br />

            <span
              className="
              bg-gradient-to-r
              from-cyan-600
              via-blue-600
              to-cyan-500

              bg-clip-text
              text-transparent
            "
            >
              Building The Future.
            </span>
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
            A team of engineers,
            designers, AI specialists,
            and product strategists
            creating scalable digital
            systems worldwide.
          </motion.p>

          {/* BUTTONS */}

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

              px-8
              py-5

              rounded-2xl

              overflow-hidden

              bg-gradient-to-r
              from-cyan-500
              to-blue-500

              text-white
              font-semibold

              shadow-[0_15px_50px_rgba(6,182,212,0.25)]

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
                Join Our Team

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
              px-8
              py-5

              rounded-2xl

              border
              border-black/10

              bg-white/70
              backdrop-blur-xl

              text-[color:var(--text-primary)]
              font-semibold

              shadow-[0_10px_40px_rgba(0,0,0,0.04)]

              hover:border-cyan-400/40
              hover:bg-cyan-500/5

              transition-all
              duration-300
            "
            >
              Book a Strategy Call
            </button>
          </motion.div>

          {/* TRUST PILLS */}

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
            {trustPills.map(
              (pill, index) => (
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
                  font-semibold

                  text-[color:var(--text-secondary)]

                  shadow-[0_8px_30px_rgba(0,0,0,0.03)]

                  hover:border-cyan-400/30
                  hover:text-cyan-600
                  hover:-translate-y-1

                  transition-all
                  duration-300
                "
                >
                  {pill}
                </div>
              )
            )}
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* RIGHT SIDE */}
        {/* ================================================= */}

        <div
          className="
          relative

          h-[650px]

          flex
          items-center
          justify-center
        "
        >
          {/* ================= CENTER GLASS ================= */}

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

            w-[320px]
            h-[320px]

            rounded-[40px]

            border
            border-white/60

            bg-white/70
            backdrop-blur-3xl

            overflow-hidden

            shadow-[0_20px_80px_rgba(6,182,212,0.08)]
          "
          >
            {/* GLOW */}

            <div
              className="
              absolute
              inset-0

              bg-gradient-to-br
              from-cyan-500/10
              to-blue-500/10
            "
            />

            {/* CENTER CONTENT */}

            <div
              className="
              relative
              z-10

              h-full

              flex
              flex-col

              items-center
              justify-center
            "
            >
              {/* MAIN IMAGE */}

              <div
                className="
                relative

                w-36
                h-36

                rounded-full

                overflow-hidden

                border-4
                border-cyan-400/30

                shadow-[0_0_60px_rgba(6,182,212,0.25)]
              "
              >
                <img
                  src="https://i.pravatar.cc/400?img=68"
                  alt="Founder"
                  className="
                  w-full
                  h-full

                  object-cover
                "
                />
              </div>

              <h3
                className="
                mt-8

                text-2xl
                font-bold

                text-[color:var(--text-primary)]
              "
              >
                Core Leadership
              </h3>

              <p
                className="
                mt-3

                text-[color:var(--text-secondary)]

                text-center

                max-w-[240px]
              "
              >
                Elite engineers &
                strategists building
                next-gen digital products.
              </p>
            </div>
          </motion.div>

          {/* ================= FLOATING MEMBERS ================= */}

          {floatingMembers.map(
            (member, index) => (
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
                  ${member.className}
                `}
                style={{
                  animationDuration: `${
                    4 + index
                  }s`,
                }}
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
                  border-white/60

                  bg-white/70
                  backdrop-blur-2xl

                  shadow-[0_15px_50px_rgba(0,0,0,0.08)]

                  hover:border-cyan-400/30
                  hover:bg-cyan-500/5
                  hover:-translate-y-2

                  transition-all
                  duration-500
                "
                >
                  {/* AVATAR */}

                  <div
                    className="
                    relative

                    w-16
                    h-16

                    rounded-full

                    overflow-hidden

                    border
                    border-cyan-400/30
                  "
                  >
                    <img
                      src={member.image}
                      alt={member.name}
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
                      text-[color:var(--text-primary)]
                      font-semibold
                    "
                    >
                      {member.name}
                    </h4>

                    <p
                      className="
                      text-sm
                      text-[color:var(--text-muted)]
                    "
                    >
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          )}

          {/* ================= ORBIT ================= */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            absolute

            w-[520px]
            h-[520px]

            rounded-full

            border
            border-dashed
            border-cyan-500/10
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

              w-14
              h-14

              rounded-full

              bg-white/80

              border
              border-cyan-400/20

              flex
              items-center
              justify-center

              text-cyan-500

              shadow-lg
            "
            >
              <BrainCircuit size={24} />
            </div>

            {/* ICON 2 */}

            <div
              className="
              absolute
              bottom-0
              left-1/2
              -translate-x-1/2
              translate-y-1/2

              w-14
              h-14

              rounded-full

              bg-white/80

              border
              border-blue-400/20

              flex
              items-center
              justify-center

              text-blue-500

              shadow-lg
            "
            >
              <Globe size={24} />
            </div>

            {/* ICON 3 */}

            <div
              className="
              absolute
              top-1/2
              left-0
              -translate-x-1/2
              -translate-y-1/2

              w-14
              h-14

              rounded-full

              bg-white/80

              border
              border-cyan-400/20

              flex
              items-center
              justify-center

              text-cyan-500

              shadow-lg
            "
            >
              <ShieldCheck size={24} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
