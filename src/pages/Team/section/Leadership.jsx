import { motion } from "framer-motion";

import Tilt from "react-parallax-tilt";

import {
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

import directorImage from "../../../assets/images/founderimg/director.jpg";
import codirectorImg from "../../../assets/images/founderimg/codirector.jpeg"
/* ================================================= */
/* TEAM DATA */
/* ================================================= */

const leaders = [
  {
    name: "Aayush Mishara",
    role: "Director",
    image: directorImage,
    experience: "7+ Years",
    bio: "Leading AI-first digital products, enterprise systems, and scalable SaaS ecosystems globally.",
    expertise: [
      "Product Strategy",
      "AI Systems",
      "Startup Scaling",
    ],
  },

  {
    name: "Ranjan kumar",
    role: "Co-Director",
    image:codirectorImg,

    experience: "5+ Years",

    bio: "Architecting high-performance cloud infrastructure and scalable engineering systems.",

    expertise: [
      "Cloud Architecture",
      "DevOps",
      "Distributed Systems",
    ],
  },

  {
    name: "Salu singh",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",

    experience: "6+ Years",

    bio: "Building intelligent AI workflows, LLM systems, and automation pipelines for enterprises.",

    expertise: [
      "LLMs",
      "Automation",
      "Machine Learning",
    ],
  },

  {
    name: "Emma Watson",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",

    experience: "5+ Years",

    bio: "Designing immersive user experiences with premium modern interfaces and product-first thinking.",

    expertise: [
      "UI Systems",
      "Product Design",
      "Motion Design",
    ],
  },
];

const LeadershipTeam = () => {
  return (
    <section
      className="
      relative
      overflow-hidden

      bg-[#F5F7FB]

      py-32
    "
    >
      {/* ================================================= */}
      {/* GRID */}
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

      {/* ================================================= */}
      {/* GLOWS */}
      {/* ================================================= */}

      <div
        className="
        absolute
        top-[-250px]
        left-[-150px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-cyan-500/10

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

        bg-blue-500/10

        blur-[160px]
      "
      />

      {/* ================================================= */}
      {/* CONTAINER */}
      {/* ================================================= */}

      <div
        className="
        relative
        z-10

        max-w-7xl
        mx-auto

        px-6
      "
      >
        {/* ================================================= */}
        {/* TOP CONTENT */}
        {/* ================================================= */}

        <div
          className="
          max-w-4xl
          mx-auto

          text-center
        "
        >
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

            bg-cyan-500/10
            backdrop-blur-xl

            text-cyan-600
            text-sm
            font-semibold

            mb-8
          "
          >
            <Sparkles size={16} />

            Leadership Team
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
          "
          >
            The Leadership
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
              Driving Innovation.
            </span>
          </motion.h2>

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

            text-[color:var(--text-primary)]

            max-w-3xl
            mx-auto
          "
          >
            A global team of engineers,
            AI specialists, architects,
            and product thinkers building
            next-generation digital systems
            with startup speed and
            enterprise-grade execution.
          </motion.p>
        </div>

        {/* ================================================= */}
        {/* TEAM GRID */}
        {/* ================================================= */}

        <div
          className="
          mt-24

          grid
          md:grid-cols-2

          gap-10
        "
        >
          {leaders.map(
            (leader, index) => (
              <Tilt
                key={index}
                glareEnable={true}
                glareMaxOpacity={0.15}
                scale={1.02}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                transitionSpeed={2500}
                className="group"
              >
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
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="
                  relative

                  overflow-hidden

                  rounded-[38px]

                  border
                  border-white/60

                  bg-white/70
                  backdrop-blur-3xl

                  shadow-[0_20px_80px_rgba(0,0,0,0.06)]

                  transition-all
                  duration-500

                  hover:-translate-y-3
                  hover:shadow-[0_30px_100px_rgba(6,182,212,0.18)]
                "
                >
                  {/* ================================================= */}
                  {/* GRADIENT BORDER */}
                  {/* ================================================= */}

                  <div
                    className="
                    absolute
                    inset-0

                    rounded-[38px]

                    p-[1px]

                    bg-gradient-to-br
                    from-cyan-400/30
                    via-transparent
                    to-blue-500/30
                  "
                  />

                  {/* ================================================= */}
                  {/* SPOTLIGHT */}
                  {/* ================================================= */}

                  <div
                    className="
                    absolute
                    top-[-120px]
                    right-[-120px]

                    w-[250px]
                    h-[250px]

                    rounded-full

                    bg-cyan-400/20

                    blur-3xl

                    opacity-0

                    group-hover:opacity-100

                    transition-all
                    duration-700
                  "
                  />

                  {/* ================================================= */}
                  {/* CONTENT */}
                  {/* ================================================= */}

                  <div
                    className="
                    relative
                    z-10
                  "
                  >
                    {/* ================================================= */}
                    {/* IMAGE */}
                    {/* ================================================= */}

                    <div
                      className="
                      relative

                      h-[420px]

                      overflow-hidden
                    "
                    >
                      <img
                        src={leader.image}
                        alt={leader.name}

                        className="
                        w-full
                        h-full

                        object-cover

                        transition-transform
                        duration-700

                        group-hover:scale-110
                      "
                      />

                      {/* OVERLAY */}

                      <div
                        className="
                        absolute
                        inset-0

                        bg-gradient-to-t
                        from-black/80
                        via-black/20
                        to-transparent
                      "
                      />

                      {/* EXPERIENCE */}

                      <div
                        className="
                        absolute
                        top-6
                        left-6

                        px-4
                        py-2

                        rounded-full

                        border
                        border-white/20

                        bg-white/10
                        backdrop-blur-xl

                        text-sm
                        font-medium

                        text-white
                      "
                      >
                        {leader.experience}
                      </div>

                      {/* SOCIALS */}

                      <div
                        className="
                        absolute
                        bottom-6
                        right-6

                        flex
                        items-center
                        gap-3
                      "
                      >
                        {[
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaXTwitter,
].map(
                          (Icon, i) => (
                            <motion.button
                              key={i}
                              whileHover={{
                                y: -4,
                                scale: 1.08,
                              }}
                              className="
                              w-12
                              h-12

                              rounded-2xl

                              border
                              border-white/10

                              bg-white/10
                              backdrop-blur-xl

                              text-white

                              flex
                              items-center
                              justify-center

                              transition-all
                              duration-300

                              hover:bg-cyan-500
                              hover:border-cyan-400
                            "
                            >
                              <Icon
                                size={18}
                              />
                            </motion.button>
                          )
                        )}
                      </div>
                    </div>

                    {/* ================================================= */}
                    {/* BOTTOM CONTENT */}
                    {/* ================================================= */}

                    <div className="p-8">
                      {/* ROLE */}

                      <p
                        className="
                        text-cyan-600
                        font-semibold
                      "
                      >
                        {leader.role}
                      </p>

                      {/* NAME */}

                      <h3
                        className="
                        mt-2

                        text-3xl
                        font-black

                        text-[color:var(--text-primary)]
                      "
                      >
                        {leader.name}
                      </h3>

                      {/* BIO */}

                      <p
                        className="
                        mt-5

                        text-[color:var(--text-primary)]
                        leading-relaxed
                      "
                      >
                        {leader.bio}
                      </p>

                      {/* EXPERTISE */}

                      <div
                        className="
                        flex
                        flex-wrap

                        gap-3

                        mt-7
                      "
                      >
                        {leader.expertise.map(
                          (
                            skill,
                            skillIndex
                          ) => (
                            <div
                              key={skillIndex}
                              className="
                              px-4
                              py-2

                              rounded-full

                              border
                              border-cyan-500/10

                              bg-cyan-500/5

                              text-sm
                              font-medium

                              text-cyan-700

                              hover:bg-cyan-500/10

                              transition-all
                              duration-300
                            "
                            >
                              {skill}
                            </div>
                          )
                        )}
                      </div>

                      {/* BUTTON */}

                      <motion.button
                        whileHover={{
                          x: 5,
                        }}
                        className="
                        mt-8

                        flex
                        items-center
                        gap-3

                        text-[color:var(--text-primary)]
                        font-semibold

                        group/button
                      "
                      >
                        View Profile

                        <ArrowUpRight
                          size={18}
                          className="
                          transition-transform
                          duration-300

                          group-hover/button:translate-x-1
                          group-hover/button:-translate-y-1
                        "
                        />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
