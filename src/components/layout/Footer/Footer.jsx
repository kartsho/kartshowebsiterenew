import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  Send,
  BadgeCheck,
  ShieldCheck,
  Building2,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa6";

const socialLinks = [
  {
    icon: FaFacebookF,
    link: "https://facebook.com",
  },
  {
    icon: FaGithub,
    link: "https://github.com/kartsho",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/kartshoenterprises?igsh=NWJubWZ0b2M3NzJh",
  },
  {
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/company/kartshoenterprises/posts/?feedView=all",
  },
];

const companyLinks = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Us",
    to: "/about",
  },
  {
    label: "Our Services",
    to: "/services",
  },
  {
    label: "Career Opportunities",
    to: "/career",
  },
  {
    label: "Contact Us",
    to: "/contact",
  },
];

const serviceLinks = [
  {
    label: "Web Development",
    to: "/services/web-development",
  },
  {
    label: "AI Development",
    to: "/services",
  },
  {
    label: "SaaS Platforms",
    to: "/services",
  },
  {
    label: "Cloud Infrastructure",
    to: "/services",
  },
  {
    label: "Enterprise Systems",
    to: "/services",
  },
];

const legalLinks = [
  {
    label: "Privacy Policy",
    to: "/privacy-policy",
  },
  {
    label: "Terms of Service",
    to: "/terms-and-conditions",
  },
  {
    label: "Refund Policy",
    to: "/refund-policy",
  },
  {
    label: "About Company",
    to: "/about-company",
  },
];

const scrollToTop = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    <footer
      className="
      relative
      overflow-hidden
      bg-[#071120]
      text-white
    "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
        absolute
        top-[-250px]
        left-[-250px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-cyan-500/10

        blur-[160px]
      "
      />

      <div
        className="
        absolute
        bottom-[-250px]
        right-[-250px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-blue-500/10

        blur-[160px]
      "
      />

      {/* ================= GRID ================= */}

     
      {/* ================= MAIN ================= */}

      <div
        className="
        relative
        z-10

        max-w-7xl
        mx-auto

        px-6
        py-20
      "
      >
        {/* ================= TRUST STRIP ================= */}

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
          mb-16

          grid
          md:grid-cols-3

          gap-5
        "
        >
          {/* MCA */}

          <div
            className="
            flex
            items-start
            gap-4

            rounded-3xl

            border
            border-white/10

            bg-white/5

            backdrop-blur-xl

            p-5

            hover:border-cyan-400/30

            transition-all
            duration-300
          "
          >
            <div
              className="
              w-14
              h-14

              rounded-2xl

              bg-cyan-500/10

              flex
              items-center
              justify-center

              text-cyan-400
            "
            >
              <Building2 size={24} />
            </div>

            <div>
              <p
                className="
                text-sm
                text-gray-400
              "
              >
                MCA Registered
              </p>

              <h4
                className="
                mt-1

                font-semibold
              "
              >
                Kartsho Solutions Pvt. Ltd.
              </h4>

              <p
                className="
                mt-2

                text-xs
                text-gray-500
              "
              >
                CIN: U74999UP2026PTCXXXXXX
              </p>
            </div>
          </div>

          {/* GST */}

          <div
            className="
            flex
            items-start
            gap-4

            rounded-3xl

            border
            border-white/10

            bg-white/5

            backdrop-blur-xl

            p-5

            hover:border-cyan-400/30

            transition-all
            duration-300
          "
          >
            <div
              className="
              w-14
              h-14

              rounded-2xl

              bg-cyan-500/10

              flex
              items-center
              justify-center

              text-cyan-400
            "
            >
              <BadgeCheck size={24} />
            </div>

            <div>
              <p
                className="
                text-sm
                text-gray-400
              "
              >
                GST Verified
              </p>

              <h4
                className="
                mt-1

                font-semibold
              "
              >
                GSTIN: 09XXXXXXXXX
              </h4>

              <p
                className="
                mt-2

                text-xs
                text-gray-500
              "
              >
                Verified Business Identity
              </p>
            </div>
          </div>

          {/* SECURITY */}

          <div
            className="
            flex
            items-start
            gap-4

            rounded-3xl

            border
            border-white/10

            bg-white/5

            backdrop-blur-xl

            p-5

            hover:border-cyan-400/30

            transition-all
            duration-300
          "
          >
            <div
              className="
              w-14
              h-14

              rounded-2xl

              bg-cyan-500/10

              flex
              items-center
              justify-center

              text-cyan-400
            "
            >
              <ShieldCheck size={24} />
            </div>

            <div>
              <p
                className="
                text-sm
                text-gray-400
              "
              >
                Enterprise Security
              </p>

              <h4
                className="
                mt-1

                font-semibold
              "
              >
                Secure Digital Infrastructure
              </h4>

              <p
                className="
                mt-2

                text-xs
                text-gray-500
              "
              >
                SSL • Cloud • AI Systems
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= TOP ================= */}

        <div
          className="
          grid
          lg:grid-cols-4

          gap-14
        "
        >
          {/* ================= COMPANY ================= */}

          <div>
            {/* LOGO */}

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

                bg-gradient-to-r
                from-cyan-500
                to-blue-500

                flex
                items-center
                justify-center

                text-white
                font-black
                text-xl

                shadow-[0_10px_40px_rgba(6,182,212,0.35)]
              "
              >
                K
              </div>

              <div>
                <h2
                  className="
                  text-3xl
                  font-black
                "
                >
                  Kartsho
                </h2>

                <p
                  className="
                  text-sm
                  text-gray-400
                "
                >
                  Solutions Pvt. Ltd.
                </p>
              </div>
            </div>

            {/* DESC */}

            <p
              className="
              mt-8

              text-gray-400
              leading-relaxed
            "
            >
              Empowering businesses
              through AI systems,
              SaaS platforms,
              enterprise software,
              automation,
              and scalable
              digital ecosystems.
            </p>

            {/* SOCIAL */}

            <div className="mt-10">
              <h3
                className="
                text-xl
                font-bold
              "
              >
                Connect With Us
              </h3>

              <div
                className="
                mt-5

                flex
                items-center
                gap-4
              "
              >
                {socialLinks.map(
                  (
                    item,
                    index
                  ) => {
                    const Icon =
                      item.icon;

                    return (
                      <motion.a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{
                          y: -6,
                          scale: 1.08,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                        className="
                        group

                        relative

                        w-12
                        h-12

                        rounded-2xl

                        border
                        border-white/10

                        bg-white/5

                        flex
                        items-center
                        justify-center

                        text-gray-300

                        overflow-hidden

                        transition-all
                        duration-300

                        hover:border-cyan-400/40
                        hover:text-cyan-400
                      "
                      >
                        <div
                          className="
                          absolute
                          inset-0

                          bg-gradient-to-r
                          from-cyan-500/20
                          to-blue-500/20

                          opacity-0

                          group-hover:opacity-100

                          transition-all
                          duration-300
                        "
                        />

                        <Icon
                          className="
                          relative
                          z-10
                        "
                        />
                      </motion.a>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          {/* ================= COMPANY LINKS ================= */}

          <div>
            <h3
              className="
              text-2xl
              font-bold
            "
            >
              Company
            </h3>

            <div
              className="
              mt-8

              flex
              flex-col

              gap-5
            "
            >
              {companyLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  onClick={scrollToTop}
                  className="
                  group

                  flex
                  items-center
                  justify-between

                  text-gray-400

                  hover:text-cyan-400

                  transition-all
                  duration-300
                "
                >
                  {item.label}

                  <ArrowUpRight
                    size={16}
                    className="
                    opacity-0

                    group-hover:opacity-100

                    transition-all
                    duration-300
                  "
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* ================= SERVICES ================= */}

          <div>
            <h3
              className="
              text-2xl
              font-bold
            "
            >
              Services
            </h3>

            <div
              className="
              mt-8

              flex
              flex-col

              gap-5
            "
            >
              {serviceLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  onClick={scrollToTop}
                  className="
                  group

                  flex
                  items-center
                  justify-between

                  text-gray-400

                  hover:text-cyan-400

                  transition-all
                  duration-300
                "
                >
                  {item.label}

                  <ArrowUpRight
                    size={16}
                    className="
                    opacity-0

                    group-hover:opacity-100

                    transition-all
                    duration-300
                  "
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* ================= NEWSLETTER ================= */}

          <div>
            <h3
              className="
              text-2xl
              font-bold
            "
            >
              Stay Updated
            </h3>

            <p
              className="
              mt-6

              text-gray-400
              leading-relaxed
            "
            >
              Get startup insights,
              AI updates,
              product launches,
              and business news.
            </p>

            {/* INPUT */}

            <div
              className="
              mt-8

              overflow-hidden

              rounded-2xl

              border
              border-white/10

              bg-white/5

              backdrop-blur-xl
            "
            >
              <div
                className="
                flex
                items-center
              "
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                  flex-1

                  bg-transparent

                  px-5
                  py-4

                  text-white

                  outline-none

                  placeholder:text-gray-500
                "
                />

                <button
                  className="
                  m-2

                  w-12
                  h-12

                  rounded-xl

                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500

                  flex
                  items-center
                  justify-center

                  hover:scale-105

                  transition-all
                  duration-300
                "
                >
                  <Send size={18} />
                </button>
              </div>
            </div>

            {/* EMAIL */}

            <div
              className="
              mt-8

              flex
              flex-col

              gap-4
            "
            >
              <a
                href="mailto:info@kartsho.com"
                className="
                text-gray-400

                hover:text-cyan-400

                transition-all
                duration-300
              "
              >
                info@kartsho.com
              </a>

              <a
                href="tel:+919453134901"
                className="
                text-gray-400

                hover:text-cyan-400

                transition-all
                duration-300
              "
              >
                +91 9453134901
              </a>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div
          className="
          mt-20

          border-t
          border-white/10

          pt-8

          flex
          flex-col
          lg:flex-row

          items-center
          justify-between

          gap-6
        "
        >
          {/* LEGAL */}

          <div
            className="
            flex
            flex-wrap

            items-center

            gap-6
          "
          >
            {legalLinks.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                onClick={scrollToTop}
                className="
                flex
                items-center
                gap-2

                text-gray-400
                text-sm

                hover:text-cyan-400

                transition-all
                duration-300
              "
              >
                {item.label}

                <ArrowUpRight
                  size={14}
                />
              </Link>
            ))}
          </div>

          {/* COPYRIGHT */}

          <p
            className="
            text-sm
            text-gray-500
          "
          >
            © 2026 Kartsho Solutions
            Pvt. Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
