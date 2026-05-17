import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  BadgeCheck,
  Building2,
  ShieldCheck,
} from "lucide-react";

import LegalStrip from "../../legal/LegalStrip";

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "About Company", to: "/about-company" },
      { label: "Careers", to: "/career" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", to: "/services/web-development" },
      { label: "AI Development", to: "/services#services-grid" },
      { label: "SaaS Platforms", to: "/services#services-grid" },
      { label: "Cloud Infrastructure", to: "/services#detailed-services" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms & Conditions", to: "/terms-and-conditions" },
      { label: "About Company", to: "/about-company" },
    ],
  },
];

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "info@kartsho.com",
  },
  {
    icon: Mail,
    label: "Careers",
    value: "hr@kartsho.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9453134901 / +91 9528660578",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Godhoopatti Patti, Pratapgarh, Uttar Pradesh - 230134",
  },
];

const complianceCards = [
  {
    icon: Building2,
    label: "Registered Name",
    value: "Kartsho Solutions Private Limited",
  },
  {
    icon: BadgeCheck,
    label: "CIN",
    value: "Add your CIN here",
  },
  {
    icon: ShieldCheck,
    label: "GSTIN",
    value: "Add your GSTIN here",
  },
  {
    icon: Mail,
    label: "Grievance Officer",
    value: "grievance@kartsho.com",
  },
];

const socials = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    icon: FaXTwitter,
    label: "X",
  },
  {
    icon: FaGithub,
    label: "GitHub",
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050816] text-white">
      <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-400/12 blur-[150px]" />
      <div className="absolute right-[-160px] bottom-[60px] h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <LegalStrip />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              rounded-[36px]
              border
              border-white/10
              bg-white/5
              p-8
              shadow-[0_20px_80px_rgba(0,0,0,0.22)]
              backdrop-blur-2xl
            "
          >
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-300">
              Production Ready Digital Partner
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
              Kartsho builds ventures that look premium and scale cleanly.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
              We design and ship digital products across web development, AI systems, SaaS
              platforms, cloud infrastructure, and enterprise-grade brand experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500
                  px-6
                  py-3.5
                  font-semibold
                  text-white
                  shadow-[0_18px_45px_rgba(6,182,212,0.25)]
                  transition-transform
                  duration-300
                  hover:scale-105
                "
              >
                Start a project
              </Link>

              <Link
                to="/services"
                className="
                  rounded-full
                  border
                  border-white/15
                  bg-white/5
                  px-6
                  py-3.5
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:border-cyan-300/40
                  hover:bg-white/10
                "
              >
                Explore services
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactCards.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="
                      rounded-[24px]
                      border
                      border-white/10
                      bg-black/20
                      p-4
                    "
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                        <Icon size={18} />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-medium leading-relaxed text-white">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-2xl
                "
              >
                <h3 className="text-lg font-bold text-white">
                  {section.title}
                </h3>

                <div className="mt-5 space-y-3">
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        gap-3
                        rounded-2xl
                        px-4
                        py-3
                        text-sm
                        font-medium
                        text-slate-300
                        transition-all
                        duration-300
                        hover:bg-white/10
                        hover:text-white
                      "
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight
                        size={16}
                        className="
                          shrink-0
                          text-cyan-300
                          transition-transform
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            mt-8
            rounded-[36px]
            border
            border-white/10
            bg-white/5
            p-6
            shadow-[0_20px_70px_rgba(0,0,0,0.16)]
            backdrop-blur-2xl
          "
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-300">
                Compliance Essentials
              </p>
              <h3 className="text-2xl font-black text-white">
                Legal identity and grievance details
              </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {complianceCards.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="
                      rounded-[24px]
                      border
                      border-white/10
                      bg-black/20
                      p-4
                    "
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
                        <Icon size={18} />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-medium leading-relaxed text-white">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div
          className="
            mt-8
            flex
            flex-col
            gap-6
            rounded-[28px]
            border
            border-white/10
            bg-black/20
            px-6
            py-5
            backdrop-blur-2xl
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <p className="text-sm text-slate-300">
            © 2026 KartSho Technologies Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socials.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  type="button"
                  aria-label={item.label}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    text-slate-200
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-cyan-300/40
                    hover:bg-cyan-500/10
                    hover:text-cyan-300
                  "
                >
                  <Icon size={18} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
