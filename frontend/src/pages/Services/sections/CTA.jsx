import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

import {
  buildMailtoLink,
  contactEmails,
} from "../../../utils/contactLinks";

const CTA = () => {
  const emailLink = buildMailtoLink({
    to: [contactEmails.business],
    subject: "Project Inquiry from Services Page",
    body:
      "Hi Kartsho Team,\n\nI would like to enquire about a project.\n\nPlease get back to me with the next steps.",
  });

  return (
    <section

      className="
      relative
      py-32
      overflow-hidden
      bg-[#F8FAFC]
      font-black
      text-black
    "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
        absolute
        top-[-100px]
        left-[-100px]

        w-[350px]
        h-[350px]

        rounded-full

        bg-cyan-500/20

        blur-3xl
      "
      />

      <div
        className="
        absolute
        bottom-[-120px]
        right-[-120px]

        w-[400px]
        h-[400px]

        rounded-full

        bg-blue-500/20

        blur-3xl
      "
      />

      {/* GRID BACKGROUND */}

      <div
        className="
        absolute
        inset-0

        opacity-[0.04]

        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

        bg-[size:80px_80px]
      "
      />

      {/* ================= CONTAINER ================= */}

      <div
        className="
        relative
        z-10

        max-w-6xl
        mx-auto
        px-6
      "
      >
        {/* ================= CTA CARD ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
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
          relative

          overflow-hidden

          rounded-[40px]

          border
          border-white/10

          bg-white/5
          backdrop-blur-xl

          px-8
          md:px-16

          py-20

          text-center

          shadow-[0_30px_100px_rgba(0,0,0,0.35)]
        "
        >
          {/* INNER GLOW */}

          <div
            className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2

            w-[400px]
            h-[400px]

            rounded-full

            bg-cyan-500/10

            blur-3xl
          "
          />

          {/* BADGE */}

          <div
            className="
            relative
            z-10

            inline-flex
            items-center
            gap-2

            px-5
            py-2

            rounded-full

            bg-cyan-500/10

            border
            border-cyan-400/20

            text-cyan-600
            text-sm
            font-medium

            mb-8
          "
          >
            <Sparkles size={16} />

            Build Smarter With Kartsho
          </div>

          {/* HEADING */}

          <h2
            className="
            relative
            z-10

            text-4xl
            md:text-6xl

            font-bold

            leading-tight

            text-black

            mb-8
          "
          >
            Launch Your Next
            <br />

            Digital Venture Faster
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            relative
            z-10

            max-w-3xl
            mx-auto

            text-lg
            md:text-xl

            text-gray-600

            leading-relaxed

            mb-12
          "
          >
            We help startups and enterprises
            design, build, and scale ventures
            across marketing, legal tech, and
            education.
          </p>

          {/* BUTTONS */}

          <div
            className="
            relative
            z-10

            flex
            flex-wrap
            justify-center

            gap-5

            mb-16
          "
          >
            {/* PRIMARY BUTTON */}

            <Link
              to="/contact#contact-form"
              className="
              group

              flex
              items-center
              gap-3

              px-8
              py-4

              rounded-full

              bg-cyan-500
              text-white

              font-semibold

              transition-all
              duration-300

              hover:scale-105

              hover:shadow-[0_0_50px_rgba(6,182,212,0.45)]
            "
            >
              Start Your Project

              <ArrowRight
                className="
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
              />
            </Link>

            {/* SECONDARY BUTTON */}

            <a
              href={emailLink}
              className="inline-flex
           items-center
           rounded-full
           justify-center
           px-8
           py-4
           bg-white
           border-4
           border-b-emerald-500
            font-semibold
            text-[#0B0F19]
            transition-all
            duration-300
            
             hover:text-1xl
             hover:border-8
             hover:border-b-cyan-500
             
              hover:shadow-[0_0_50px_rgba(6,182,212,0.45)]
           ">
           Email Info@kartsho.com
            </a>

          </div>

          {/* STATS */}

          <div
            className="
            relative
            z-10

            grid
            md:grid-cols-3

            gap-8
          "
          >
            {/* ITEM */}

            <div>
              <h3
                className="
                text-4xl
                font-bold

                text-cyan-400

                mb-2
              "
              >
                3+
              </h3>

              <p className="text-gray-400">
                Active Ventures
              </p>
            </div>

            {/* ITEM */}

            <div>
              <h3
                className="
                text-4xl
                font-bold

                text-cyan-400

                mb-2
              "
              >
                50+
              </h3>

              <p className="text-gray-400">
                Clients Served
              </p>
            </div>

            {/* ITEM */}

            <div>
              <h3
                className="
                text-4xl
                font-bold

                text-cyan-400

                mb-2
              "
              >
                24h
              </h3>

              <p className="text-gray-400">
                Response Time
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
