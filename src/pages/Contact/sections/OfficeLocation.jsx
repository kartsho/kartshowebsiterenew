import { motion } from "framer-motion";

import {
  MapPin,
  Mail,
  Phone,
  Globe,
  ArrowRight,
} from "lucide-react";

import {
  buildGoogleMapsSearchUrl,
  buildMailtoLink,
} from "../../../utils/contactLinks";

const offices = [
  {
    city: "Head Office",
    address:
      "Godhoopatti Patti, Pratapgarh, Uttar Pradesh - 230134",
    email: "info@kartsho.com",
    phone: "+91 9453134901",
    timezone: "GMT +5:30",
  },

  {
    city: "Business Email",
    address:
      "Partnerships, projects, and support",
    email: "info@kartsho.com",
    phone: "+91 9528660578",
    timezone: "Mon - Fri 9AM - 6PM",
  },

  {
    city: "Careers / HR",
    address:
      "Hiring, talent, and culture conversations",
    email: "hr@kartsho.com",
    phone: "9453135182",
    timezone: "Fast Response",
  },
];

const OfficeLocations = () => {
  return (
    <section
      className="
      relative
      py-32
      overflow-hidden
      bg-[#F5F7FB]
    "
    >
      {/* Glow */}

      <div
        className="
        absolute
        top-[-150px]
        right-[-150px]
        w-[400px]
        h-[400px]
        rounded-full
        bg-cyan-200/40
        blur-3xl
      "
      />

      <div
        className="
        absolute
        bottom-[-150px]
        left-[-150px]
        w-[350px]
        h-[350px]
        rounded-full
        bg-blue-200/30
        blur-3xl
      "
      />

      {/* Grid */}

     
      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
      "
      >
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
          text-center
          max-w-4xl
          mx-auto
          mb-20
        "
        >
          <div
            className="
            inline-block
            px-5
            py-2
            rounded-full
            bg-cyan-100
            text-cyan-700
            text-sm
            font-semibold
            mb-6
          "
          >
            Global Presence
          </div>

          <h2
            className="
            text-5xl
            md:text-6xl
            font-bold
            text-[#0B0F19]
            leading-tight
            mb-6
          "
          >
            Offices Across
            <br />
            Global Markets
          </h2>

          <p
            className="
            text-lg
            text-gray-600
            leading-relaxed
          "
          >
            Serving startups, enterprises,
            and growing teams with official
            business, partnership, and HR
            contacts from the Kartsho HQ.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
          grid
          lg:grid-cols-3
          gap-8
        "
        >
          {offices.map((office, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
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
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="
              relative
              p-8
              rounded-[32px]
              bg-white/70
              backdrop-blur-2xl
              border
              border-white/40
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              overflow-hidden
            "
            >
              {/* Card glow */}

              <div
                className="
                absolute
                top-[-80px]
                right-[-80px]
                w-[180px]
                h-[180px]
                rounded-full
                bg-cyan-200/30
                blur-3xl
              "
              />

              <div className="relative z-10">
                {/* Title */}

                <h3
                  className="
                  text-2xl
                  font-bold
                  text-[#0B0F19]
                  mb-6
                "
                >
                  {office.city}
                </h3>

                {/* Address */}

                <div className="space-y-5">
                  <div className="flex gap-4">
                    <MapPin
                      className="text-cyan-500"
                      size={20}
                    />
                    <p className="text-gray-600">
                      {office.address}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Mail
                      className="text-cyan-500"
                      size={20}
                    />
                    <a
                      href={buildMailtoLink({ to: [office.email] })}
                      className="text-gray-600 hover:text-cyan-500 transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>

                  <div className="flex gap-4">
                    <Phone
                      className="text-cyan-500"
                      size={20}
                    />
                    {office.phone.includes("+") ? (
                      <a
                        href={`tel:${office.phone.replace(/\s+/g, "")}`}
                        className="text-gray-600 hover:text-cyan-500 transition-colors"
                      >
                        {office.phone}
                      </a>
                    ) : (
                      <p className="text-gray-600">
                        {office.phone}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <Globe
                      className="text-cyan-500"
                      size={20}
                    />
                    <p className="text-gray-600">
                      {office.timezone}
                    </p>
                  </div>
                </div>

                {/* Button */}

                <a
                  href={buildGoogleMapsSearchUrl(office.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  mt-10
                  group
                  flex
                  items-center
                  gap-3
                  text-cyan-600
                  font-semibold
                "
                >
                  View Map

                  <ArrowRight
                    size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
