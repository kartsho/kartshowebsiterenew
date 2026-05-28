import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { useTheme } from "../../../context/ThemeContext";

import {
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
} from "react-icons/fa6";

import directorImage from "../../../assets/images/founderimg/director.jpg";
import codirectorImg from "../../../assets/images/founderimg/codirector.jpeg";
import salusingh from "../../../assets/images/founderimg/Salu2.jpeg";
import sateesh2 from "../../../assets/images/founderimg/sateesh2.jpeg";
import princeKumar from "../../../assets/images/founderimg/pranav.jpg.jpeg";
import Ravi from "../../../assets/images/founderimg/Ravi.jpg";

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

    imageStyle:
      "object-contain scale-[1.05] object-center sm:object-[center_top]",

    mediaHeight:
      "h-[420px] sm:h-[390px] md:h-[430px]",

    imagePadding:
      "p-2 sm:p-4 md:p-5",

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

    imageStyle:
      "object-cover object-top scale-105",

    mediaHeight:
      "h-[320px] sm:h-[390px] md:h-[430px]",

    imagePadding: "p-0",

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

    portfolio: "",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/salusingh-7869142b8?utm_source=share_via&utm_content=profile&utm_medium=member_android",

      instagram:
        "https://www.instagram.com/salu_singh18?igsh=MWF3eDB5bzhxcXhsNQ==",
    },

    imageStyle:
      "object-cover object-top scale-[1.02]",

    mediaHeight:
      "h-[540px] sm:h-[430px] md:h-[470px]",

    imagePadding: "p-0",

    experience: "1+ Years",

    bio: "Building intelligent AI workflows and automation systems.",

    expertise: [
      "Hr",
    ],
  },

  {
    name: "Adv. Ravi Shankar Mishra",
    role: "Chief Legal Advisor",
    image: Ravi,

    portfolio:
      "https://ravimishra.kartsho.com",

    socials: {
      instagram:
        "https://www.instagram.com/ayushatkartsho?igsh=MXM4dzBlODN2d291Zw==",

      facebook:
        "https://www.facebook.com/share/18H9fondJH/",
    },

    imageStyle:
      "object-cover object-top scale-[1.03]",

    mediaHeight:
      "h-[330px] sm:h-[400px] md:h-[440px]",

    imagePadding: "p-0",

    experience: "15+ Years",

    bio: "Providing strategic legal advisory and corporate compliance leadership for enterprise operations and digital ventures.",

    expertise: [
      "Corporate Law",
      "Legal Advisory",
      "Business Compliance",
    ],
  },

  {
    name: "Mr. Sateesh Yadav",
    role: "Technical Head",
    image: sateesh2,

    portfolio:
      "https://sateeshkumaryadav.netlify.app/",

    socials: {
      linkedin:
        "https://www.linkedin.com/in/sateesh-yadav-5a69a6308/",

      github:
        "https://github.com",

      instagram:
        "https://www.instagram.com/sateesh_____yadav?igsh=MWtlaHRsOWVpb3JocA==",

      twitter:
        "https://x.com",
    },

    imageStyle:
      "object-cover object-top scale-105",

    mediaHeight:
      "h-[340px] sm:h-[420px] md:h-[460px]",

    imagePadding: "pb-400",

    experience: "2+ Years",

    bio: "Engineering student | Full-Stack Developer | React & Node.js Enthusiast building scalable startup products and premium UI systems.",

    expertise: [
      "UI Systems",
      "React Ecosystem",
      "Motion Design",
    ],
  },
];

const LeadershipTeam = () => {
  const { isDark } = useTheme();

  const colors = isDark
    ? {
        sectionBg:
          "linear-gradient(135deg, #050816 0%, #070b14 55%, #0f172a 100%)",
        sectionText: "#f8fafc",
        gridLine: "rgba(148, 163, 184, 0.10)",
        tagBg: "rgba(6, 182, 212, 0.12)",
        tagBorder: "rgba(103, 232, 249, 0.18)",
        tagText: "#67e8f9",
        cardBg: "rgba(15, 23, 42, 0.78)",
        cardBorder: "rgba(148, 163, 184, 0.18)",
        cardShadow:
          "0 24px 90px rgba(0, 0, 0, 0.38)",
        mediaBg:
          "linear-gradient(180deg, #020617 0%, #0f172a 100%)",
        mediaOverlay:
          "linear-gradient(to top, rgba(2, 6, 23, 0.92), rgba(2, 6, 23, 0.16), transparent)",
        infoBg:
          "linear-gradient(180deg, rgba(15, 23, 42, 0.96), rgba(15, 23, 42, 0.90))",
        infoBorder:
          "rgba(148, 163, 184, 0.16)",
        textPrimary: "#f8fafc",
        textSecondary: "#cbd5e1",
        chipBg:
          "rgba(148, 163, 184, 0.12)",
        chipBorder:
          "rgba(148, 163, 184, 0.16)",
        chipText: "#e2e8f0",
        iconBg:
          "rgba(15, 23, 42, 0.84)",
        iconBorder:
          "rgba(148, 163, 184, 0.18)",
        iconText: "#f8fafc",
      }
    : {
        sectionBg:
          "linear-gradient(135deg, #f8fbff 0%, #eef4ff 55%, #ffffff 100%)",
        sectionText: "#0b0f19",
        gridLine:
          "rgba(15, 23, 42, 0.06)",
        tagBg:
          "rgba(6, 182, 212, 0.10)",
        tagBorder:
          "rgba(6, 182, 212, 0.16)",
        tagText: "#0e7490",
        cardBg:
          "rgba(255, 255, 255, 0.72)",
        cardBorder:
          "rgba(15, 23, 42, 0.08)",
        cardShadow:
          "0 20px 80px rgba(15, 23, 42, 0.08)",
        mediaBg:
          "linear-gradient(180deg, #f8fbff 0%, #eaf2ff 100%)",
        mediaOverlay:
          "linear-gradient(to top, rgba(15, 23, 42, 0.84), rgba(15, 23, 42, 0.14), transparent)",
        infoBg:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(245, 247, 251, 0.96))",
        infoBorder:
          "rgba(15, 23, 42, 0.08)",
        textPrimary: "#0b0f19",
        textSecondary: "#4b5563",
        chipBg:
          "rgba(248, 250, 252, 0.96)",
        chipBorder:
          "rgba(148, 163, 184, 0.22)",
        chipText: "#334155",
        iconBg: "#ffffff",
        iconBorder:
          "rgba(148, 163, 184, 0.22)",
        iconText: "#334155",
      };

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
      style={{
        background: colors.sectionBg,
        color: colors.sectionText,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          opacity: isDark ? 0.08 : 0.04,
          backgroundImage: `linear-gradient(to right, ${colors.gridLine} 1px, transparent 1px), linear-gradient(to bottom, ${colors.gridLine} 1px, transparent 1px)`,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight"
          >
            Leadership Team
          </motion.h2>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {leaders.map((leader, index) => {
            const profileLink =
              leader.portfolio?.trim()
                ? leader.portfolio.startsWith(
                    "http"
                  )
                  ? leader.portfolio
                  : `https://${leader.portfolio}`
                : null;

            return (
              <Tilt
                key={index}
                glareEnable
                glareMaxOpacity={0.15}
                scale={1.02}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                transitionSpeed={2500}
                className="group h-full"
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
                  className="relative overflow-hidden rounded-[32px] border"
                  style={{
                    background: colors.cardBg,
                    borderColor:
                      colors.cardBorder,
                    boxShadow:
                      colors.cardShadow,
                  }}
                >
                  {/* IMAGE SECTION */}

                  <div
                    className={`relative overflow-hidden ${leader.mediaHeight}`}
                    style={{
                      background:
                        colors.mediaBg,
                    }}
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
                        group-hover:scale-105
                        ${leader.imagePadding}
                        ${leader.imageStyle}
                      `}
                    />

                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          colors.mediaOverlay,
                      }}
                    />

                    <div className="absolute left-5 top-5 rounded-full bg-black/50 backdrop-blur-xl px-4 py-2 text-sm font-semibold text-white">
                      {leader.experience}
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="p-6">
                    <h3
                      className="text-3xl font-black"
                      style={{
                        color:
                          colors.textPrimary,
                      }}
                    >
                      {leader.name}
                    </h3>

                    <p
                      className="mt-2 font-semibold"
                      style={{
                        color: colors.tagText,
                      }}
                    >
                      {leader.role}
                    </p>

                    <p
                      className="mt-4 leading-relaxed text-sm"
                      style={{
                        color:
                          colors.textSecondary,
                      }}
                    >
                      {leader.bio}
                    </p>

                    {/* EXPERTISE */}

                    <div className="mt-5 flex flex-wrap gap-2">
                      {leader.expertise.map(
                        (
                          skill,
                          skillIndex
                        ) => (
                          <span
                            key={skillIndex}
                            className="rounded-full border px-4 py-2 text-sm"
                            style={{
                              background:
                                colors.chipBg,
                              borderColor:
                                colors.chipBorder,
                              color:
                                colors.chipText,
                            }}
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>

                    {/* SOCIALS */}

                    <div className="mt-6 flex flex-wrap gap-3">
                      {[
                        {
                          icon:
                            FaLinkedin,
                          link:
                            leader.socials
                              ?.linkedin,
                        },
                        {
                          icon: FaGithub,
                          link:
                            leader.socials
                              ?.github,
                        },
                        {
                          icon:
                            FaInstagram,
                          link:
                            leader.socials
                              ?.instagram,
                        },
                        {
                          icon:
                            FaXTwitter,
                          link:
                            leader.socials
                              ?.twitter,
                        },
                        {
                          icon:
                            FaFacebook,
                          link:
                            leader.socials
                              ?.facebook,
                        },
                      ]
                        .filter(
                          (item) =>
                            item.link
                        )
                        .map(
                          (item, i) => {
                            const Icon =
                              item.icon;

                            return (
                              <a
                                key={i}
                                href={
                                  item.link
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-11 w-11 rounded-2xl border flex items-center justify-center transition-all duration-300 hover:bg-cyan-500 hover:text-white"
                                style={{
                                  background:
                                    colors.iconBg,
                                  borderColor:
                                    colors.iconBorder,
                                  color:
                                    colors.iconText,
                                }}
                              >
                                <Icon
                                  size={18}
                                />
                              </a>
                            );
                          }
                        )}
                    </div>

                    {/* BUTTON */}

                   {/* BUTTON */}

{profileLink ? (
  <motion.a
    href={profileLink}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{
      x: 4,
    }}
    className="
      mt-7
      inline-flex
      items-center
      gap-3

      rounded-2xl

      bg-gradient-to-r
      from-cyan-500
      to-blue-500

      px-6
      py-4

      text-sm
      font-semibold
      text-white

      shadow-[0_12px_30px_rgba(6,182,212,0.25)]

      transition-all
      duration-300

      hover:shadow-[0_18px_40px_rgba(6,182,212,0.35)]
    "
  >
    View Profile

    <ArrowUpRight size={18} />
  </motion.a>
) : (
  <div
    className="
      mt-7
      inline-flex
      items-center
      gap-2

      rounded-2xl

      border

      px-6
      py-4

      text-sm
      font-semibold

      backdrop-blur-xl
    "
    style={{
      background: isDark
        ? "rgba(15,23,42,0.7)"
        : "rgba(255,255,255,0.85)",

      borderColor: colors.infoBorder,

      color: colors.textSecondary,
    }}
  >
    <Sparkles size={16} />
    Profile Coming Soon
  </div>
)}
                    
                  </div>
                </motion.div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;