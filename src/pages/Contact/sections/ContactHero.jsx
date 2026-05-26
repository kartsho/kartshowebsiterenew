import { motion } from "framer-motion";

import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Clock3,
  Globe2,
} from "lucide-react";

import {
  buildMailtoLink,
  contactEmails,
  contactPhones,
} from "../../../utils/contactLinks";

const ContactHero = () => {
  const discoveryMailLink = buildMailtoLink({
    to: [contactEmails.business],
    subject: "Discovery Call Request",
    body:
      "Hi Kartsho Team,\n\nI would like to book a discovery call.\n\nPlease share the available slots.",
  });

  const projectMailLink = buildMailtoLink({
    to: [contactEmails.business, contactEmails.hr],
    subject: "Project Enquiry from Kartsho Website",
    body:
      "Hi Kartsho Team,\n\nI would like to discuss a project.\n\nPlease get back to me with the next steps.",
  });

  return (
    <section
      id="contact-hero"
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#F5F7FB]

      flex
      items-center

      pt-32
    "
    >
      {/* ================= GRID BACKGROUND ================= */}

      
      {/* ================= GLOW EFFECTS ================= */}

      <div
        className="
        absolute
        top-[-180px]
        left-[-180px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-cyan-300/30

        blur-3xl
      "
      />

      <div
        className="
        absolute
        bottom-[-180px]
        right-[-180px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-blue-300/20

        blur-3xl
      "
      />

      {/* ================= FLOATING CARD ================= */}

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="
        hidden
        xl:flex
          overflow-visible
          relative
        absolute
        top-80
        right-80
        
        px-6
        py-5

        rounded-3xl

        backdrop-blur-2xl
        bg-white/70

        border
        border-white/40

        shadow-[0_20px_60px_rgba(0,0,0,0.08)]

        items-center
        gap-4
      "
      >
        <div
          className="
          w-14
          h-14

          rounded-2xl

          bg-cyan-500

          flex
          items-center
          justify-center

          text-white
        "
        >
          <Globe2 size={28} />
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Global Clients
          </p>

          <h3
            className="
            text-2xl
            font-bold
            text-[#0B0F19]
          "
          >
            3+ Ventures
          </h3>
        </div>
      </motion.div>

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

        gap-14
        lg:gap-20

        items-center
      "
      >
        {/* ================= LEFT CONTENT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
          }}
        >
          {/* BADGE */}

          <div
            className="
            inline-flex
            items-center
            gap-3

            px-5
            py-3

            rounded-full

            bg-white/80
            backdrop-blur-xl

            border
            border-black/5

            text-cyan-600
            text-sm
            font-semibold

            mb-8
          "
          >
            Enterprise Contact
          </div>

          {/* HEADING */}

          <h1
            className="
            text-4xl
            sm:text-6xl
            md:text-7xl

            font-bold

            leading-[1.05]

            text-[#0B0F19]

            mb-8
          "
          >
            Let’s Build
            <br />

            Something
            <span
              className="
              text-cyan-500
            "
            >
              {" "}
              Scalable
            </span>

            <br />
            Together.
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
            text-lg
            sm:text-xl

            leading-relaxed

            text-gray-600

            max-w-2xl

            mb-10
          "
          >
            Tell us about your project,
            business goals, or technical
            challenges — our team will reach
            out within 24 hours with the next
            steps.
          </p>

          {/* BUTTONS */}

          <div
            className="
            flex
            flex-col
            sm:flex-row
            flex-wrap

            gap-5

            mb-14
          "
          >
            {/* BUTTON 1 */}

            <a
              href={discoveryMailLink}
              className="
              group

              px-8
              py-4
              w-full
              sm:w-auto

              rounded-full

              bg-cyan-500

              text-white
              font-semibold

              flex
              items-center
              gap-3

              shadow-[0_10px_40px_rgba(6,182,212,0.3)]

              transition-all
              duration-300

              hover:scale-105
            "
            >
              Book Discovery Call

              <ArrowRight
                size={20}
                className="
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
              />
            </a>

            {/* BUTTON 2 */}

            <a
              href={projectMailLink}
              className="
              inline-flex
              items-center
              justify-center

              px-8
              py-4
              w-full
              sm:w-auto

              rounded-full

              bg-white/80
              backdrop-blur-xl

              border
              border-black/5

              text-[#0B0F19]
              font-semibold

              transition-all
              duration-300

              hover:shadow-lg
              hover:-translate-y-1
            "
            >
              Start Your Project
            </a>
          </div>

          {/* TRUST BADGES */}

          <div
            className="
            grid
            sm:grid-cols-2

            gap-5
          "
          >
            {[
              "3+ Active Ventures",
              "50+ Clients Served",
              "4+ Core Industries",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -4,
                }}
                className="
                flex
                items-center
                gap-3

                rounded-2xl

                bg-white/70
                backdrop-blur-xl

                border
                border-black/5

                px-5
                py-4

                shadow-[0_10px_30px_rgba(0,0,0,0.04)]
              "
              >
                <CheckCircle2
                  size={20}
                  className="
                  text-cyan-500
                "
                />

                <span
                  className="
                  text-gray-700
                  font-medium
                "
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= RIGHT CARD ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
        className="
          relative
          mt-10
          lg:mt-0
          w-full
          max-w-[560px]
          mx-auto
        "
        >
          {/* MAIN CARD */}

          <div
            className="
            relative

            overflow-hidden

            rounded-[28px]
            sm:rounded-[40px]

            backdrop-blur-2xl
            bg-white/70

            border-2
            border-b-blue-400
            border-l-cyan-300
            border-r-emerald-500
            border-t-fuchsia-600

            p-6
            sm:p-8
            md:p-10

            shadow-[0_30px_80px_rgba(0,0,0,0.08)]
          "
          >
            {/* INNER GLOW */}

            <div
              className="
              absolute
              top-[-80px]
              right-[-80px]

              w-[220px]
              h-[220px]

              rounded-full

              bg-cyan-300/20

              blur-3xl
            "
            />

            {/* TOP */}

            <div className="relative z-10 mb-10">
              <div
                className="
                w-16
                h-16
                sm:w-20
                sm:h-20

                rounded-3xl

                bg-cyan-500

                flex
                items-center
                justify-center

                text-white

                shadow-[0_10px_40px_rgba(6,182,212,0.35)]

                mb-8
              "
              >
                <Mail size={34} />
              </div>

              <h2
                className="
                text-3xl
                sm:text-4xl
                font-bold

                text-[#0B0F19]

                mb-4
              "
              >
                Contact
                <br />
                Information
              </h2>

              <p
                className="
                text-gray-600
                leading-relaxed
              "
              >
                Reach out to our enterprise team
                for partnerships, product
                development, AI solutions, and
                scalable cloud systems.
              </p>
            </div>

            {/* INFO LIST */}

            <div
              className="
              relative
              z-10

              flex
              flex-col

              gap-6
            "
            >
              {/* EMAIL */}

              <div
                className="
                flex
                items-start
                gap-4
              "
              >
                <div
                  className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-cyan-100

                  flex
                  items-center
                  justify-center

                  text-cyan-600
                "
                >
                  <Mail size={24} />
                </div>

                <div>
                  <p className="text-gray-500 text-sm mb-1">
                    Email Address
                  </p>

                  <h3
                    className="
                    text-lg
                    font-semibold
                    text-[#0B0F19]
                  "
                  >
                    <a
                      href={buildMailtoLink({ to: [contactEmails.business] })}
                      className="hover:text-cyan-500 transition-colors"
                    >
                      info@kartsho.com
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    HR:{" "}
                    <a
                      href={buildMailtoLink({ to: [contactEmails.hr] })}
                      className="hover:text-cyan-500 transition-colors"
                    >
                      hr@kartsho.com
                    </a>
                  </p>
                </div>
              </div>

              {/* PHONE */}

              <div
                className="
                flex
                items-start
                gap-4
              "
              >
                <div
                  className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-cyan-100

                  flex
                  items-center
                  justify-center

                  text-cyan-600
                "
                >
                  <Phone size={24} />
                </div>

                <div>
                  <p className="text-gray-500 text-sm mb-1">
                    Phone Number
                  </p>

                  <h3
                    className="
                    text-lg
                    font-semibold
                    text-[#0B0F19]
                  "
                  >
                    <a
                      href={`tel:${contactPhones.primary.replace(/\s+/g, "")}`}
                      className="hover:text-cyan-500 transition-colors"
                    >
                      +91 9453134901
                    </a>
                    {" / "}
                    <a
                      href={`tel:${contactPhones.secondary.replace(/\s+/g, "")}`}
                      className="hover:text-cyan-500 transition-colors"
                    >
                      +91 9453135182
                    </a>
                  </h3>
                </div>
              </div>

              {/* ADDRESS */}

              <div
                className="
                flex
                items-start
                gap-4
              "
              >
                <div
                  className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-cyan-100

                  flex
                  items-center
                  justify-center

                  text-cyan-600
                "
                >
                  <MapPin size={24} />
                </div>

                <div>
                  <p className="text-gray-500 text-sm mb-1">
                    Office Address
                  </p>

                  <h3
                    className="
                    text-lg
                    font-semibold
                    text-[#0B0F19]
                  "
                  >
                    Kartsho Solutions Pvt .Ltd
                    <br />
                    Godhoopatti Patti, Pratapgarh, Uttar Pradesh - 230134
                  </h3>
                </div>
              </div>

              {/* RESPONSE */}

              <div
                className="
                flex
                items-start
                gap-4
              "
              >
                <div
                  className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-cyan-100

                  flex
                  items-center
                  justify-center

                  text-cyan-600
                "
                >
                  <Clock3 size={24} />
                </div>

                <div>
                  <p className="text-gray-500 text-sm mb-1">
                    Response Time
                  </p>

                  <h3
                    className="
                    text-lg
                    font-semibold
                    text-[#0B0F19]
                  "
                  >
                    Within 24 Hours
                  </h3>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
