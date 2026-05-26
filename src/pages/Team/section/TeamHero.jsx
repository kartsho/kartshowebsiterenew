import { useState, useEffect } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import pranav from "../../../assets/images/founderimg/pranav.jpg.jpeg";
import codirector from "../../../assets/images/founderimg/codirector.jpeg";



import {
  ArrowRight,
  Sparkles,
  Globe,
  BrainCircuit,
  ShieldCheck,
  X,
} from "lucide-react";

/* ================================================= */
/* TRUST PILLS */
/* ================================================= */

const trustPills = [
  "20+ Engineers",
  "8 Countries",
  "AI Experts",
  "Enterprise Ready",
];

/* ================================================= */
/* TEAM MEMBERS */
/* ================================================= */

const floatingMembers = [
  {
    id: 1,

    name: "Mr. Pranav Singh",

    shortRole: "Technology",

    fullRole:
      "Chief Technology Officer",

    image: pranav,

    orbitClass:
      "top-[4%] left-1/2 -translate-x-1/2",

    description:
      "Architects the technology infrastructure that powers every Kartsho venture, driving AI integrations that deliver a decisive competitive edge. His engineering leadership ensures the conglomerate remains perpetually ahead of the innovation curve.",
  },

  {
    id: 2,

    name: "Mr. Vikram Sharma",

    shortRole: "Technology",

    fullRole:
      "Chief Technology Officer",

  

    orbitClass:
      "top-[4%] right-1/2 -translate-x-1/2",

    description:
      "Architects the technology infrastructure that powers every Kartsho venture, driving AI integrations that deliver a decisive competitive edge. His engineering leadership ensures the conglomerate remains perpetually ahead of the innovation curve.",
  },

  {
    id: 3,

    name: "Ms. Neha Kapoor",

    shortRole: "CMO",

    fullRole: "Marketing",

    image:
      "https://i.pravatar.cc/300?img=32",

    orbitClass:
      "top-1/2 right-[-40px] -translate-y-1/2",

    description:
      "Commands global brand dominance for Kartsho Solutions Pvt .Ltd, orchestrating high-impact campaigns through Kartsho Counseling's full-service capabilities. Her data-driven strategies have consistently elevated venture visibility across key international markets.",
  },

  {
    id: 4,

    name:
      "Adv. Ravi Shankar Mishra",

    shortRole:
      "Chief Legal Advisor",

    fullRole:
      "CEO, Lawdalat | Chief Legal Advisor",

    image:
      "https://i.pravatar.cc/300?img=15",

    orbitClass:
      "bottom-[2%] left-1/2 -translate-x-1/2",

    description:
      "Orchestrating the legal framework of Kartsho Solutions Pvt .Ltd, Ravi ensures ironclad compliance and corporate integrity across all global operations. In his dual capacity as CEO of Lawdalat, he leads our disruptive legal-tech vertical, architecting scalable platforms designed to revolutionize how the world accesses premium legal counsel.",
  },

  {
    id: 5,

    name: "Mrs. Ananya Desai",

    shortRole: "VP, EdTech",

    fullRole:
      "Educational Technology",

    image:
      "https://i.pravatar.cc/300?img=45",

    orbitClass:
      "top-1/2 left-[-40px] -translate-y-1/2",

    description:
      "Leads the pedagogical vision and curriculum architecture for Kartsho Academy, transforming industry-leading expertise into accessible learning pathways. Her research-driven approach fuses technology with proven learning science to develop world-class talent.",
  },

  {
    id: 6,

    name: "Mr. Rohan Gupta",

    shortRole: "CFO",

    fullRole: "Finance",

    image:
      "https://i.pravatar.cc/300?img=67",

    orbitClass:
      "top-[18%] right-[8%]",

    description:
      "Masters the capital allocation and financial engineering that underpins Kartsho's multi-venture scaling strategy. His disciplined investment frameworks and sharp fiscal governance have consistently unlocked exponential returns across the conglomerate portfolio.",
  },
];

const TeamHero = () => {
  const noiseUrl = `${import.meta.env.BASE_URL}noise.svg`;

  const [selectedMember, setSelectedMember] =
    useState(null);

  const [visibleCards, setVisibleCards] =
    useState([]);

  /* ================================================= */
  /* AUTO POPUP ANIMATION */
  /* ================================================= */

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      const member =
        floatingMembers[current];

      setVisibleCards((prev) => [
        ...prev,
        member.id,
      ]);

      setTimeout(() => {
        setVisibleCards((prev) =>
          prev.filter(
            (id) => id !== member.id
          )
        );
      }, 3500);

      current =
        (current + 1) %
        floatingMembers.length;
    }, 1800);

    return () =>
      clearInterval(interval);
  }, []);

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
      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.04]

        [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]

        [background-size:70px_70px]
      "
      />

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

      {/* ================================================= */}
      {/* MAIN CONTAINER */}
      {/* ================================================= */}

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

            Elite Product Engineering
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
            className="
            text-5xl
            sm:text-6xl
            lg:text-7xl

            font-black

            leading-[1.05]

            tracking-tight

            text-[color:var(--text-primary)]
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
            className="
            mt-8

            text-lg
            leading-relaxed

            text-[color:var(--text-secondary)]

            max-w-2xl
          "
          >
            A world-class team of
            strategists, engineers,
            marketers, financial experts,
            and legal innovators shaping
            the future of the Kartsho
            ecosystem globally.
          </motion.p>

          {/* BUTTONS */}

          <div
            className="
            flex
            flex-wrap
            gap-5

            mt-12
          "
          >
            <button
              className="
              group

              px-8
              py-5

              rounded-2xl

              bg-gradient-to-r
              from-cyan-500
              to-blue-500

              text-white
              font-semibold

              shadow-[0_15px_50px_rgba(6,182,212,0.25)]

              hover:scale-105

              transition-all
              duration-500
            "
            >
              <span
                className="
                flex
                items-center
                gap-3
              "
              >
                Join Our Team

                <ArrowRight
                  size={18}
                  className="
                  group-hover:translate-x-1
                  transition-transform
                "
                />
              </span>
            </button>

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

              hover:border-cyan-400/40
              hover:bg-cyan-500/5

              transition-all
              duration-300
            "
            >
              Book a Strategy Call
            </button>
          </div>

          {/* TRUST PILLS */}

          <div
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

                  hover:border-cyan-400/30
                  hover:text-cyan-600

                  transition-all
                  duration-300
                "
                >
                  {pill}
                </div>
              )
            )}
          </div>
        </div>

        {/* ================================================= */}
        {/* RIGHT SECTION */}
        {/* ================================================= */}

        <div
          className="
          relative

          h-[720px]

          flex
          items-center
          justify-center
        "
        >
          {/* ORBIT */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            absolute

            w-[540px]
            h-[540px]

            rounded-full

            border
            border-dashed
            border-cyan-500/10
          "
          />

          {/* CENTER CARD */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
            relative

            z-20

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
            <div
              className="
              absolute
              inset-0

              bg-gradient-to-br
              from-cyan-500/10
              to-blue-500/10
            "
            />

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
              <div
                className="
                w-36
                h-36

                rounded-full

                overflow-hidden

                border-4
                border-cyan-400/30
              "
              >
                <img
                  src={codirector}
                  alt="heroimage"
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

                text-center

                text-[color:var(--text-secondary)]

                max-w-[240px]
              "
              >
                Tap floating popups to
                explore leadership details.
              </p>
            </div>
          </motion.div>

          {/* FLOATING POPUP MEMBERS */}

          {floatingMembers.map(
            (member, index) => (
              <AnimatePresence
                key={member.id}
              >
                {visibleCards.includes(
                  member.id
                ) && (
                  <motion.button
                    onClick={() =>
                      setSelectedMember(
                        member
                      )
                    }
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                      y: 30,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.5,
                      y: -20,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className={`
                      absolute
                      z-30

                      ${member.orbitClass}
                    `}
                  >
                    <div
                      className="
                      group

                      flex
                      items-center
                      gap-4

                      px-5
                      py-4

                      rounded-full

                      border
                      border-white/50

                      bg-white/80
                      backdrop-blur-2xl

                      shadow-[0_15px_50px_rgba(0,0,0,0.12)]

                      hover:scale-105
                      hover:border-cyan-400/40

                      transition-all
                      duration-500
                    "
                    >
                      {/* IMAGE */}

                      <div
                        className="
                        w-14
                        h-14

                        rounded-full

                        overflow-hidden

                        border-2
                        border-cyan-400/30
                      "
                      >
                        <img
                          src={
                            member.image
                          }
                          alt={
                            member.name
                          }
                          className="
                          w-full
                          h-full

                          object-cover
                        "
                        />
                      </div>

                      {/* TEXT */}

                      <div className="text-left">
                        <h4
                          className="
                          text-sm
                          font-bold

                          text-slate-900
                        "
                        >
                          {member.name}
                        </h4>

                        <p
                          className="
                          text-xs

                          text-cyan-600
                        "
                        >
                          {
                            member.shortRole
                          }
                        </p>
                      </div>
                    </div>
                  </motion.button>
                )}
              </AnimatePresence>
            )
          )}

          {/* ICONS */}

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

            flex
            items-center
            justify-center

            text-cyan-500
          "
          >
            <BrainCircuit size={24} />
          </div>

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

            flex
            items-center
            justify-center

            text-blue-500
          "
          >
            <Globe size={24} />
          </div>

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

            flex
            items-center
            justify-center

            text-cyan-500
          "
          >
            <ShieldCheck size={24} />
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* MODAL */}
      {/* ================================================= */}

      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
            fixed
            inset-0
            z-50

            flex
            items-center
            justify-center

            bg-black/60
            backdrop-blur-md

            p-6
          "
          >
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              className="
              relative

              w-full
              max-w-2xl

              rounded-[40px]

              border
              border-white/20

              bg-white/10
              backdrop-blur-3xl

              p-10

              overflow-hidden
            "
            >
              {/* CLOSE */}

              <button
                onClick={() =>
                  setSelectedMember(
                    null
                  )
                }
                className="
                absolute
                top-5
                right-5

                w-12
                h-12

                rounded-full

                bg-white/10

                flex
                items-center
                justify-center

                text-white
              "
              >
                <X size={22} />
              </button>

              {/* IMAGE */}

              <div
                className="
                w-32
                h-32

                rounded-full

                overflow-hidden

                border-4
                border-cyan-400/30

                mx-auto
              "
              >
                <img
                  src={
                    selectedMember.image
                  }
                  alt={
                    selectedMember.name
                  }
                  className="
                  w-full
                  h-full

                  object-cover
                "
                />
              </div>

              {/* INFO */}

              <div className="text-center mt-8">
                <h2
                  className="
                  text-4xl
                  font-black

                  text-white
                "
                >
                  {
                    selectedMember.name
                  }
                </h2>

                <p
                  className="
                  mt-3

                  text-cyan-300
                  text-lg
                  font-semibold
                "
                >
                  {
                    selectedMember.fullRole
                  }
                </p>

                <p
                  className="
                  mt-8

                  text-white/80
                  leading-relaxed
                  text-lg
                "
                >
                  {
                    selectedMember.description
                  }
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamHero;
