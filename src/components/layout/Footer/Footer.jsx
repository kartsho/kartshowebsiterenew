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
  Send,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import LegalStrip from "../../legal/LegalStrip";

const footerLinks = [
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
      { label: "AI Development", to: "/services#services-grid" },
      { label: "Cloud Solutions", to: "/services#detailed-services" },
      { label: "SaaS Platforms", to: "/services#services-grid" },
      { label: "UI/UX Design", to: "/services#services-grid" },
    ],
  },

  {
    title: "Resources",

    links: [
      { label: "Blog" },
      { label: "FAQs" },
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms & Conditions", to: "/terms-and-conditions" },
    ],
  },
];

const legalQuickLinks = [
  { label: "About Company", to: "/about-company" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
];

const Footer = () => {
  return (
    <footer
      className="
      relative
      overflow-hidden
      bg-white
      pt-28
      pb-10
    "
    >
      {/* ================= GLOW EFFECTS ================= */}

      <div
        className="
        absolute
        top-[-200px]
        left-[-200px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-cyan-400/20

        blur-[140px]
      "
      />

      <div
        className="
        absolute
        bottom-[-250px]
        right-[-250px]

        w-[550px]
        h-[550px]

        rounded-full

        bg-blue-400/20

        blur-[160px]
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
        <LegalStrip />

        {/* ================= TOP AREA ================= */}

        <div
          className="
          grid
          lg:grid-cols-[1.2fr_1fr]

          gap-20

          pb-20

          border-b
          border-black/10
        "
        >
          {/* ================= LEFT ================= */}

          <div>
            {/* LOGO */}

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
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="
              mb-8
            "
            >
              <h2
                className="
                text-5xl
                font-black

                tracking-tight

                bg-gradient-to-r
                from-cyan-500
                via-blue-500
                to-cyan-400

                bg-clip-text
                text-transparent
              "
              >
                Kartsho
              </h2>
            </motion.div>

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
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className="
              text-gray-600
              text-lg

              leading-relaxed

              max-w-xl

              mb-10
            "
            >
              Kartsho Enterprises is a multi-venture
              digital ecosystem spanning marketing,
              legal tech, education, commerce, media,
              and counseling.
            </motion.p>

            {/* CONTACT INFO */}

            <div className="space-y-5">
              {/* EMAIL */}

              <div
                className="
                flex
                items-center
                gap-4
              "
              >
                <div
                  className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-white/70
                  backdrop-blur-2xl

                  border
                  border-black/5

                  flex
                  items-center
                  justify-center

                  text-cyan-500

                  shadow-[0_10px_30px_rgba(6,182,212,0.12)]
                "
                >
                  <Mail size={22} />
                </div>

                <div>
                  <p
                    className="
                    text-sm
                    text-gray-500
                  "
                  >
                    Email
                  </p>

                <p className="text-[#0B0F19] font-medium">
                    info@kartsho.com
                  </p>
                </div>
              </div>

              {/* HR EMAIL */}

              <div
                className="
                flex
                items-center
                gap-4
              "
              >
                <div
                  className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-white/70
                  backdrop-blur-2xl

                  border
                  border-black/5

                  flex
                  items-center
                  justify-center

                  text-cyan-500

                  shadow-[0_10px_30px_rgba(6,182,212,0.12)]
                "
                >
                  <Mail size={22} />
                </div>

                <div>
                  <p
                    className="
                    text-sm
                    text-gray-500
                  "
                  >
                    Careers
                  </p>

                  <p className="text-[#0B0F19] font-medium">
                    hr@kartsho.com
                  </p>
                </div>
              </div>

              {/* PHONE */}

              <div
                className="
                flex
                items-center
                gap-4
              "
              >
                <div
                  className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-white/70
                  backdrop-blur-2xl

                  border
                  border-black/5

                  flex
                  items-center
                  justify-center

                  text-cyan-500

                  shadow-[0_10px_30px_rgba(6,182,212,0.12)]
                "
                >
                  <Phone size={22} />
                </div>

                <div>
                  <p
                    className="
                    text-sm
                    text-gray-500
                  "
                  >
                    Phone
                  </p>

                  <p className="text-[#0B0F19] font-medium">
                    +91 9453134901 / +91 9528660578
                  </p>
                </div>
              </div>

              {/* LOCATION */}

              <div
                className="
                flex
                items-center
                gap-4
              "
              >
                <div
                  className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-white/70
                  backdrop-blur-2xl

                  border
                  border-black/5

                  flex
                  items-center
                  justify-center

                  text-cyan-500

                  shadow-[0_10px_30px_rgba(6,182,212,0.12)]
                "
                >
                  <MapPin size={22} />
                </div>

                <div>
                  <p
                    className="
                    text-sm
                    text-gray-500
                  "
                  >
                    Office
                  </p>

                  <p className="text-[#0B0F19] font-medium">
                    Godhoopatti Patti, Pratapgarh, Uttar Pradesh - 230134
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div
            className="
            grid
            sm:grid-cols-3

            gap-10
          "
          >
            {footerLinks.map((section, index) => (
              <motion.div
                key={index}
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
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                {/* TITLE */}

                <h3
                  className="
                  text-[#0B0F19]
                  text-lg
                  font-bold

                  mb-6
                "
                >
                  {section.title}
                </h3>

                {/* LINKS */}

                <div className="space-y-4">
                  {section.links.map((link, i) =>
                    link.to ? (
                      <Link
                        key={link.label}
                        to={link.to}
                        className="
                          group

                          flex
                          items-center
                          gap-2

                          text-gray-600

                          transition-all
                          duration-300

                          hover:text-cyan-500
                        "
                      >
                        {link.label}

                        <ArrowUpRight
                          size={16}
                          className="
                            opacity-0

                            transition-all
                            duration-300

                            group-hover:opacity-100
                            group-hover:-translate-y-1
                            group-hover:translate-x-1
                          "
                        />
                      </Link>
                    ) : (
                      <button
                        key={link.label}
                        className="
                          group

                          flex
                          items-center
                          gap-2

                          text-gray-600

                          transition-all
                          duration-300

                          hover:text-cyan-500
                        "
                      >
                        {link.label}

                        <ArrowUpRight
                          size={16}
                          className="
                            opacity-0

                            transition-all
                            duration-300

                            group-hover:opacity-100
                            group-hover:-translate-y-1
                            group-hover:translate-x-1
                          "
                        />
                      </button>
                    )
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= NEWSLETTER ================= */}

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
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="
          py-16

          flex
          flex-col
          lg:flex-row

          items-center
          justify-between

          gap-10
        "
        >
          {/* LEFT */}

          <div>
            <h3
              className="
              text-3xl
              font-bold

              text-[#0B0F19]

              mb-4
            "
            >
              Join Our Newsletter
            </h3>

            <p
              className="
              text-gray-600
            "
            >
              Insights on AI, SaaS, cloud systems,
              and enterprise innovation.
            </p>
          </div>

          {/* RIGHT */}

          <div
            className="
            relative

            flex
            items-center

            w-full
            max-w-2xl

            rounded-full

            border
            border-black/10

            bg-white/80
            backdrop-blur-2xl

            overflow-hidden

            shadow-[0_10px_40px_rgba(6,182,212,0.08)]
          "
          >
            {/* INPUT */}

            <input
              type="email"
              placeholder="Enter your email"

              className="
              flex-1

              bg-transparent

              px-7
              py-5

              outline-none

              text-[#0B0F19]

              placeholder:text-gray-400
            "
            />

            {/* BUTTON */}

            <button
              className="
              group

              relative

              m-2

              px-8
              py-4

              rounded-full

              bg-gradient-to-r
              from-cyan-500
              to-blue-500

              text-white

              font-semibold

              flex
              items-center
              gap-3

              overflow-hidden

              transition-all
              duration-500

              hover:scale-105
              hover:shadow-[0_0_40px_rgba(6,182,212,0.35)]
            "
            >
              <span className="relative z-10">
                Subscribe
              </span>

              <Send
                size={18}
                className="
                relative
                z-10

                transition-transform
                duration-300

                group-hover:translate-x-1
              "
              />

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
          </div>
        </motion.div>

        {/* ================= LEGAL FOOTER ================= */}

        <div
          className="
          rounded-[36px]
          border
          border-black/10
          bg-white/70
          backdrop-blur-2xl
          p-8
          shadow-[0_16px_60px_rgba(15,23,42,0.06)]
        "
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-500">
                Company Details
              </p>

              <h3 className="mt-3 text-3xl font-black text-[#0B0F19]">
                Kartsho Solutions Private Limited
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Keep these legal details updated with the final registered entity information
                before using the site in production, ad platforms, or payment flows.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-black/5 bg-white/80 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
                    CIN
                  </p>
                  <p className="mt-2 font-semibold text-[#0B0F19]">
                    Add your CIN here
                  </p>
                </div>

                <div className="rounded-3xl border border-black/5 bg-white/80 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
                    GSTIN
                  </p>
                  <p className="mt-2 font-semibold text-[#0B0F19]">
                    Add your GSTIN here
                  </p>
                </div>

                <div className="rounded-3xl border border-black/5 bg-white/80 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
                    Grievance Officer
                  </p>
                  <p className="mt-2 font-semibold text-[#0B0F19]">
                    grievance@kartsho.com
                  </p>
                </div>

                <div className="rounded-3xl border border-black/5 bg-white/80 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
                    Response Time
                  </p>
                  <p className="mt-2 font-semibold text-[#0B0F19]">
                    Within 30 days
                  </p>
                </div>
              </div>
            </div>

            <div className="min-w-[260px]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-500">
                Legal Links
              </p>

              <div className="mt-4 flex flex-col gap-3">
                {legalQuickLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="
                      rounded-2xl
                      border
                      border-black/5
                      bg-white/80
                      px-5
                      py-4
                      font-semibold
                      text-[#0B0F19]
                      transition-all
                      duration-300
                      hover:border-cyan-300
                      hover:text-cyan-600
                    "
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div
          className="
          pt-10

          border-t
          border-black/10

          flex
          flex-col
          lg:flex-row

          items-center
          justify-between

          gap-8
        "
        >
          {/* COPYRIGHT */}

          <p
            className="
            text-gray-500
            text-sm
          "
          >
            © 2026 KartSho Technologies Pvt.
            Ltd. All rights reserved.
          </p>

          {/* SOCIALS */}

          <div
            className="
            flex
            items-center
            gap-4
          "
          >
            {[
              FaLinkedin,
              FaInstagram,
              FaXTwitter,
              FaGithub,
            ].map((Icon, index) => (
              <motion.button
                key={index}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                }}
                className="
                w-14
                h-14

                rounded-2xl

                bg-white/80
                backdrop-blur-2xl

                border
                border-black/5

                flex
                items-center
                justify-center

                text-gray-600

                transition-all
                duration-300

                hover:text-cyan-500
                hover:border-cyan-300
                hover:bg-cyan-50
                hover:shadow-[0_0_40px_rgba(6,182,212,0.18)]
              "
              >
                <Icon size={20} />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
