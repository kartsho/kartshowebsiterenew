import { motion } from "framer-motion";

import {
  MapPin,
  Globe,
  Clock3,
  Phone,
  ArrowUpRight,
} from "lucide-react";

import {
  buildGoogleMapsSearchUrl,
  buildMailtoLink,
} from "../../../utils/contactLinks";

const offices = [
  {
    title: "India Office",
    location: "Godhoopatti Patti, Pratapgarh, Uttar Pradesh - 230134",
    phone: "+91 9453134901",
    timezone: "GMT +5:30",
  },

  {
    title: "Business Support",
    location: "info@kartsho.com",
    phone: "+91 9453135182",
    timezone: "Mon - Fri 9AM - 6PM",
  },

  {
    title: "Careers / HR",
    location: "hr@kartsho.com",
    phone: "Mon - Sat Support",
    timezone: "Fast Response",
  },
];

const GoogleMapSection = () => {
  return (
    <section
      className="
      relative
      py-32
      overflow-hidden
      bg-[#F5F7FB]
    "
    >
      {/* ================= GRID BACKGROUND ================= */}

      

      {/* ================= GLOW EFFECTS ================= */}

      <div
        className="
        absolute
        top-[-150px]
        right-[-150px]

        w-[400px]
        h-[400px]

        rounded-full

        bg-cyan-300/30

        blur-3xl
      "
      />

      <div
        className="
        absolute
        bottom-[-150px]
        left-[-150px]

        w-[400px]
        h-[400px]

        rounded-full

        bg-blue-300/20

        blur-3xl
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
        {/* ================= TOP CONTENT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
          text-center

          max-w-3xl
          mx-auto

          mb-20
        "
        >
          {/* SMALL BADGE */}

          <div
            className="
            inline-flex

            items-center
            gap-2

            px-5
            py-3

            rounded-full

            bg-white/70
            backdrop-blur-xl

            border
            border-white/40

            text-cyan-700
            text-sm
            font-medium

            shadow-lg

            mb-8
          "
          >
            <Globe size={16} />

            Global Presence
          </div>

          {/* HEADING */}

          <h2
            className="
            text-5xl
            md:text-6xl

            font-bold

            leading-tight

            text-[#0B0F19]

            mb-8
          "
          >
            Connected Globally.
            <br />

            <span className="text-cyan-500">
              Building Worldwide.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            text-lg

            text-gray-600

            leading-relaxed
          "
          >
            KartSho collaborates with startups,
            enterprises, and fast-growing teams
            across multiple countries with modern
            AI systems, SaaS platforms, and cloud
            infrastructure solutions.
          </p>
        </motion.div>

        {/* ================= MAP + OFFICE CARDS ================= */}

        <div
          className="
          grid
          lg:grid-cols-[1.4fr_0.8fr]

          gap-10

          items-start
        "
        >
          {/* ================= GOOGLE MAP ================= */}

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
              duration: 0.9,
            }}
            viewport={{ once: true }}
            className="
            relative

            group

            overflow-hidden

            rounded-[40px]

            border
            border-white/40

            bg-white/60
            backdrop-blur-2xl

            shadow-[0_30px_80px_rgba(0,0,0,0.08)]
          "
          >
            {/* TOP GLOW */}

            <div
              className="
              absolute
              top-[-100px]
              right-[-100px]

              w-[250px]
              h-[250px]

              rounded-full

              bg-cyan-400/20

              blur-3xl
            "
            />

            {/* MAP */}

            <iframe
              title="KartSho Map"
              src="https://www.google.com/maps?q=Godhoopatti%20Patti%2C%20Pratapgarh%2C%20Uttar%20Pradesh%20-%20230134&output=embed"
              className="
              w-full
              h-[650px]

              border-0
            "
              loading="lazy"
            />

            {/* FLOATING CARD */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="
              absolute
              bottom-8
              left-8

              rounded-3xl

              bg-white/80
              backdrop-blur-2xl

              border
              border-white/50

              px-6
              py-5

              shadow-2xl
            "
            >
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

                  bg-cyan-500

                  flex
                  items-center
                  justify-center

                  text-white
                "
                >
                  <MapPin size={24} />
                </div>

                <div>
                  <h3
                    className="
                    text-lg
                    font-bold

                    text-[#0B0F19]
                  "
                  >
                    KartSho HQ
                  </h3>

                  <p className="text-gray-600 text-sm">
                    Godhoopatti Patti, Pratapgarh, Uttar Pradesh - 230134
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= OFFICE CARDS ================= */}

          <div
            className="
            flex
            flex-col

            gap-6
          "
          >
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="
                relative

                overflow-hidden

                rounded-[32px]

                border
                border-white/40

                bg-white/70
                backdrop-blur-2xl

                p-7

                shadow-[0_20px_60px_rgba(0,0,0,0.06)]

                transition-all
                duration-500
              "
              >
                {/* CARD GLOW */}

                <div
                  className="
                  absolute
                  top-[-50px]
                  right-[-50px]

                  w-[120px]
                  h-[120px]

                  rounded-full

                  bg-cyan-300/20

                  blur-2xl
                "
                />

                {/* TITLE */}

                <div
                  className="
                  flex
                  items-center
                  justify-between

                  mb-6
                "
                >
                  <h3
                    className="
                    text-2xl
                    font-bold

                    text-[#0B0F19]
                  "
                  >
                    {office.title}
                  </h3>

                  <div
                    className="
                    w-12
                    h-12

                    rounded-2xl

                    bg-cyan-500

                    flex
                    items-center
                    justify-center

                    text-white
                  "
                  >
                    <MapPin size={20} />
                  </div>
                </div>

                {/* INFO */}

                <div className="space-y-5">
                  {/* LOCATION */}

                  <div
                    className="
                    flex
                    items-start
                    gap-4
                  "
                  >
                    <MapPin
                      size={18}
                      className="
                      text-cyan-500
                      mt-1
                    "
                    />

                    {office.location.includes("@") ? (
                      <a
                        href={buildMailtoLink({ to: [office.location] })}
                        className="text-gray-600 leading-relaxed hover:text-cyan-500 transition-colors"
                      >
                        {office.location}
                      </a>
                    ) : (
                      <p
                        className="
                        text-gray-600
                        leading-relaxed
                      "
                      >
                        {office.location}
                      </p>
                    )}
                  </div>

                  {/* PHONE */}

                  <div
                    className="
                    flex
                    items-center
                    gap-4
                  "
                  >
                    <Phone
                      size={18}
                      className="
                      text-cyan-500
                    "
                    />

                    {office.phone.includes("+") ? (
                      <a
                        href={`tel:${office.phone.replace(/\s+/g, "")}`}
                        className="text-gray-700 hover:text-cyan-500 transition-colors"
                      >
                        {office.phone}
                      </a>
                    ) : (
                      <p className="text-gray-700">
                        {office.phone}
                      </p>
                    )}
                  </div>

                  {/* TIMEZONE */}

                  <div
                    className="
                    flex
                    items-center
                    gap-4
                  "
                  >
                    <Clock3
                      size={18}
                      className="
                      text-cyan-500
                    "
                    />

                    <p className="text-gray-700">
                      {office.timezone}
                    </p>
                  </div>
                </div>

                {/* BUTTON */}

                <a
                  href={buildGoogleMapsSearchUrl(office.location)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  group

                  mt-8

                  inline-flex
                  items-center
                  gap-3

                  text-cyan-600
                  font-semibold
                "
                >
                  Open Map

                  <ArrowUpRight
                    size={18}
                    className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMapSection;
