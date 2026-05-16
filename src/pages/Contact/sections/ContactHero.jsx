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

const ContactHero = () => {
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

        absolute
        top-40
        right-20

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
            6+ Ventures
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

        gap-20

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
            text-5xl
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
            text-xl

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
            flex-wrap

            gap-5

            mb-14
          "
          >
            {/* BUTTON 1 */}

            <button
              className="
              group

              px-8
              py-4

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
            </button>

            {/* BUTTON 2 */}

            <button
              className="
              px-8
              py-4

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
            </button>
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
              "6+ Active Ventures",
              "50+ Clients Served",
              "4+ Core Industries",
              "24h Response Time",
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
        "
        >
          {/* MAIN CARD */}

          <div
            className="
            relative

            overflow-hidden

            rounded-[40px]

            backdrop-blur-2xl
            bg-white/70

            border
            border-white/40

            p-10

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
                w-20
                h-20

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
                text-4xl
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
                    info@kartsho.com
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    HR: hr@kartsho.com
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
                    +91 9453134901 / +91 9528660578
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
                    Kartsho Enterprises
                    <br />
                    Godhoopatti Patti, Pratapgarh
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

          {/* FLOATING MINI CARD */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="
            absolute
            -bottom-8
            -left-8

            hidden
            md:flex

            items-center
            gap-4

            px-6
            py-5

            rounded-3xl

            backdrop-blur-2xl
            bg-white/80

            border
            border-white/40

            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
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
              <Clock3 size={26} />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Average Response
              </p>

              <h3
                className="
                text-2xl
                font-bold
                text-[#0B0F19]
              "
              >
                &lt; 24 Hours
              </h3>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
