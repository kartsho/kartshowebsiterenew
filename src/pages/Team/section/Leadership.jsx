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
  FaFacebook
} from "react-icons/fa6";

import directorImage from "../../../assets/images/founderimg/director.jpg";
import codirectorImg from "../../../assets/images/founderimg/codirector.jpeg";
import salusingh from "../../../assets/images/founderimg/Salu.jpeg";
import sateesh2 from "../../../assets/images/founderimg/sateesh2.jpeg"
import princeKumar from "../../../assets/images/founderimg/pranav.jpg.jpeg";
import Ravi from "../../../assets/images/founderimg/Ravi.jpg"

/* ================================================= */
/* TEAM DATA */
/* ================================================= */

const leaders = [
  {
    name: "Mr. Ayush Misra",
    role: "Founder & Director",
    image: directorImage,

     portfolio:
           "https://portfolio.kartsho.com/",

    socials: {
     
      linkedin:
        "https://www.linkedin.com/in/misraayush",

      github:
        "https://github.com/ayushrajmisra",

      instagram:
        "https://www.instagram.com/ayushatkartsho?igsh=MXM4dzBlODN2d291Zw==",

      facebook:
        "https://www.facebook.com/share/18H9fondJH/",
    },

    imageStyle: `
      object-cover
      object-top
      pt-20
      scale-[1.27]
    `,

    experience: "3+ Years",

    bio: "Leading AI-first digital products, enterprise systems, and scalable SaaS ecosystems globally.",

    expertise: [
      "Product Strategy",
      "AI Systems",
      "Startup Scaling",
    ],
  },

  {
    name: "Mr. Ranjan Kumar",
    role: "Co-Founder & Director",
    image: codirectorImg,
     portfolio:
           "https://ranjanshah.kartsho.com/",

    socials: {
     
      linkedin:
        "https://linkedin.com/in/ranjan",

      github:
        "https://github.com/ranjan",

      instagram:
        "https://instagram.com/ranjan",

      twitter:
        "https://x.com/ranjan",
    },

    imageStyle: `
      object-cover
      object-top
      pt-10

      scale-[1.30]
      translate-y-[30px]
    `,

    experience: "2+ Years",

    bio: "Architecting high-performance cloud infrastructure and scalable engineering systems.",

    expertise: [
      "Cloud Architecture",
      "DevOps",
      "Distributed Systems",
    ],
  },

  {
    name: "Ms. Salu Singh",
    role: "CEO",
    image: salusingh,
portfolio:
           "",
    socials: {
       

      linkedin:
        "https://www.linkedin.com/in/salusingh-7869142b8?utm_source=share_via&utm_content=profile&utm_medium=member_android",


      instagram:
        "https://www.instagram.com/salu_singh18?igsh=MWF3eDB5bzhxcXhsNQ==",

    },

    imageStyle: `
      object-cover
      object-top
      scale-[1.30]
      pb-500
      pt-15
      translate-y-[80px]
    `,

    experience: "1+ Years",

    bio: "Building intelligent AI workflows and automation systems.",

    expertise: [
      "LLMs",
      "Automation",
      "Machine Learning",
    ],
  },
    {
    name: "Adv. Ravi Shankar Mishra",
    role: "Chief Legal Advisor",
    image: Ravi,

     portfolio:
           "ravimishra.kartsho.com",

    socials: {
     
      

     
      instagram:
        "https://www.instagram.com/ayushatkartsho?igsh=MXM4dzBlODN2d291Zw==",

      facebook:
        "https://www.facebook.com/share/18H9fondJH/",
    },

    imageStyle: `
      object-cover
      object-top
      pt-10
      scale-[1.30]
    `,

    experience: "15+ Years",

    bio: "Leading AI-first digital products, enterprise systems, and scalable SaaS ecosystems globally.",

    expertise: [
      "Product Strategy",
      "AI Systems",
      "Startup Scaling",
    ],
  },

  {
    name: "Mr. Sateesh Yadav",
    role: "Teachnical Head",
    image:sateesh2,
portfolio:"https://sateeshkumaryadav.netlify.app/",
    socials:
     {
      

      linkedin:
        "https://www.linkedin.com/in/sateesh-yadav-5a69a6308/",

      github:
        "https://github.com",

      instagram:
        "https://www.instagram.com/sateesh_____yadav?igsh=MWtlaHRsOWVpb3JocA==",

      twitter:
        "https://x.com",
    },

    imageStyle: `
      object-cover
      object-center
      pt-10
      scale-[1.30]
    `,

    experience: "2+ Years",

    bio: "Engineering student | Full-Stack Developer | React & Node.js Enthusiast Passionate about building modern web applications, startup products, and scalable digital platforms using React.js, JavaScript, Tailwind CSS, Node.js, Express, MongoDB, and Firebase. Focused on clean UI, animations, real-world problem solving, and continuous learning.",

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
      {/* GRID */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.04]

        [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]

        [background-size:70px_70px]
      "
      />

      {/* GLOWS */}

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

      {/* CONTAINER */}

      <div
        className="
        relative
        z-10

        max-w-7xl
        mx-auto

        px-6
      "
      >
        {/* TOP CONTENT */}

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

        {/* TEAM GRID */}

        <div
          className="
          mt-24

          grid
          md:grid-cols-2
          gap-10
        "
        >
          {leaders.map(
            (
              leader,
              index
            ) => (
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
                  {/* BORDER */}

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
                    border-4
                    border-b-cyan-400
                    border-r-emerald-400
                    border-l-orange-500
                  "
                  />

                  {/* SPOTLIGHT */}

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

                  {/* CONTENT */}

                  <div
                    className="
                    relative
                    z-10
                  "
                  >
                    {/* IMAGE */}

                    <div
                      className="
                      relative

                      h-[500px]
                      sm:h-[550px]

                      overflow-hidden
                    "
                    >
                      <img
                        src={leader.image}
                        alt={leader.name}
                        loading="lazy"
                        className={`
                          w-full
                          h-full

                          transition-all
                          duration-700

                          grayscale
                          group-hover:grayscale-0
                         

                          ${leader.imageStyle}
                        `}
                      />

                      {/* OVERLAY */}

                      <div
                        className="
                        absolute
                        inset-0

                        bg-gradient-to-t
                        from-black/85
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

                      <div
                        className="
                        absolute
                        inset-x-0
                        bottom-0

                        p-4
                        sm:p-6
                      "
                      >
                        <div
                          className="
                          flex
                          flex-col
                          gap-4

                          sm:flex-row
                          sm:items-end
                          sm:justify-between
                        "
                        >
                          {/* NAME */}

                          <div
                            className="
                            w-full
                            sm:max-w-[70%]
                          "
                          >
                            <h3
                              className="
                              text-2xl
                              sm:text-4xl

                              font-black
                              leading-tight
                              text-white

                              drop-shadow-lg
                            "
                            >
                              {leader.name}
                            </h3>

                            <p
                              className="
                              mt-1

                              text-sm
                              sm:text-lg
                              leading-snug

                              text-cyan-300
                              font-semibold
                            "
                            >
                              {leader.role}
                            </p>
                          </div>

                          {/* SOCIAL ICONS */}

                          <div
                            className="
                            flex
                            flex-wrap
                            items-center
                            gap-2

                            sm:gap-3
                          "
                          >
                            {[
                              {
                                icon:
                                  FaLinkedin,
                                link:
                                  leader
                                    .socials
                                    ?.linkedin,
                              },

                              {
                                icon:
                                  FaGithub,
                                link:
                                  leader
                                    .socials
                                    ?.github,
                              },

                              {
                                icon:
                                  FaInstagram,
                                link:
                                  leader
                                    .socials
                                    ?.instagram,
                              },

                              {
                                icon:
                                  FaXTwitter,
                                link:
                                  leader
                                    .socials
                                    ?.twitter,
                              },
                               {
                                icon:
                                  FaFacebook,
                                link:
                                  leader
                                    .socials
                                    ?.facebook,
                              },
                            ]
                              .filter(
                                (item) =>
                                  item.link
                              )
                              .map(
                                (
                                  item,
                                  i
                                ) => {
                                  const Icon =
                                    item.icon;

                                  return (
                                    <motion.a
                                      key={i}
                                      href={
                                        item.link
                                      }
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      whileHover={{
                                        y: -4,
                                        scale: 1.08,
                                      }}
                                      whileTap={{
                                        scale: 0.95,
                                      }}
                                      className="
                                      w-9
                                      h-9
                                      sm:w-12
                                      sm:h-12

                                      rounded-xl
                                      sm:rounded-2xl

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
                                      hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]
                                    "
                                    >
                                      <Icon
                                        size={
                                          18
                                        }
                                        className="
                                        h-4
                                        w-4

                                        sm:h-[18px]
                                        sm:w-[18px]
                                      "
                                      />
                                    </motion.a>
                                  );
                                }
                              )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* BOTTOM */}

                    <div className="p-8">
                      <p
                        className="
                        text-[color:var(--text-primary)]
                        leading-relaxed
                        text-[15px]
                      "
                      >
                        {leader.bio}
                      </p>

                      {/* SKILLS */}

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
                              key={
                                skillIndex
                              }
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
<motion.a
href={leader.portfolio}
target="_blank"
rel="noopener noreferrer"
  whileHover={{
    x: 5,
  }}
  whileTap={{
    scale:0.96
  }}

  className="
    flex
    items-center
    gap-3

    mt-8
    px-6
    py-4
    inline-45

    rounded-2xl

    border
    border-cyan-400/40

    bg-white/10
    backdrop-blur-xl

    text-white
    font-semibold

    shadow-[0_0_20px_rgba(34,211,238,0.25)]

    hover:border-cyan-300
    hover:shadow-[0_0_35px_rgba(34,211,238,0.55)]
    transition-all
    duration-300
  "
>
  View Profile
  <ArrowUpRight
   size={18}
    className="transition-transform
  duration-300
  text-green-600
    group-hover/button:translate-x-1
    group-hover/button:-translate-y-1"
  
  />
</motion.a>
                      
                    
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
