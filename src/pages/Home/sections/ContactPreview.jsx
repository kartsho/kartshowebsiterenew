import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const contactInfo = [
  {
    icon: <Mail size={22} />,
    title: "Email Us",
    value: "info@kartsho.com",
    description:
      "Business & partnership inquiries",
  },

  {
    icon: <Mail size={22} />,
    title: "HR Email",
    value: "hr@kartsho.com",
    description:
      "Careers, hiring, and talent conversations",
  },

  {
    icon: <Phone size={22} />,
    title: "Call Us",
    value: "+91 9453134901 / +91 9528660578",
    description: "Mon - Sat support available",
  },

  {
    icon: <MapPin size={22} />,
    title: "Head Office",
    value: "Godhoopatti Patti, Pratapgarh, Uttar Pradesh - 230134",
    description: "Kartsho Enterprises HQ",
  },

  {
    icon: <Clock3 size={22} />,
    title: "Business Hours",
    value: "Mon - Fri 9AM - 6PM",
    description: "Sat 10AM - 4PM, fast response within 24hrs",
  },
];

const ContactPreview = () => {
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
      text-black
    "
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className="
        absolute
        inset-0

        opacity-[0.04]

        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

        bg-[size:70px_70px]
      "
      />

      {/* GLOW */}

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
        bottom-[-150px]
        right-[-150px]

        w-[400px]
        h-[400px]

        rounded-full

        bg-blue-500/20

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
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          {/* BADGE */}

          <div
            className="
            inline-flex
            items-center
            gap-2

            px-5
            py-2

            rounded-full

            bg-cyan-500/10

            border
            border-cyan-400/20

            text-cyan-900
            text-sm
            font-medium

            mb-8
          "
          >
            <Sparkles size={16} />

            Let’s Build Together
          </div>

          {/* HEADING */}

          <h2
            className="
            text-4xl
            md:text-6xl

            font-bold

            leading-tight

            text-black

            mb-8
          "
          >
            Let’s Build
            The Future
            Together.
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            text-lg
            text-gray-900

            leading-relaxed

            mb-14

            max-w-2xl
          "
          >
            Kartsho Enterprises builds scalable
            AI platforms, enterprise systems,
            SaaS products, legal-tech solutions,
            digital ecosystems, and growth-driven
            ventures for modern businesses.
          </p>

          {/* CONTACT INFO */}

          <div
            className="
            grid
            md:grid-cols-2

            gap-6
          "
          >
            {contactInfo.map(
              (item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                  relative

                  overflow-hidden

                  rounded-[28px]

                  border
                  border-white/10

                  bg-white/5
                  backdrop-blur-xl

                  p-6

                  transition-all
                  duration-300

                  hover:border-cyan-400/20

                  hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]
                "
                >
                  {/* GLOW */}

                  <div
                    className="
                    absolute
                    top-0
                    right-0

                    w-24
                    h-24

                    bg-cyan-500/10

                    blur-3xl
                  "
                  />

                  {/* ICON */}

                  <div
                    className="
                    relative
                    z-10

                    w-14
                    h-14

                    rounded-2xl

                    bg-cyan-500/10

                    flex
                    items-center
                    justify-center

                    text-cyan-400

                    mb-5
                  "
                  >
                    {item.icon}
                  </div>

                  {/* CONTENT */}

                  <div className="relative z-10">
                    <h3
                      className="
                      text-lg
                      font-semibold

                      text-black

                      mb-2
                    "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                      text-cyan-300

                      font-medium

                      mb-2
                    "
                    >
                      {item.value}
                    </p>

                    <p
                      className="
                      text-sm
                      text-gray-900
                    "
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* ================= RIGHT FORM ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          <div
            className="
            relative

            overflow-hidden

            rounded-[40px]

            border
            border-white/10

            bg-white/5
            backdrop-blur-xl

            p-8
            md:p-10

            shadow-[0_30px_80px_rgba(0,0,0,0.35)]
          "
          >
            {/* TOP GLOW */}

            <div
              className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2

              w-[300px]
              h-[300px]

              rounded-full

              bg-cyan-500/10

              blur-3xl
            "
            />

            {/* FORM TITLE */}

            <div
              className="
              relative
              z-10

              mb-10
            "
            >
              <h3
                className="
                text-3xl
                font-bold

                text-black

                mb-4
              "
              >
                Start Your Project
              </h3>

              <p className="text-gray-900">
                Tell us about your vision and
                we’ll help you scale it faster.
              </p>
            </div>

            {/* FORM */}

            <form
              className="
              relative
              z-10

              flex
              flex-col

              gap-6
            "
            >
              {/* INPUT */}

              <input
                type="text"
                placeholder="Your Name"
                className="
                w-full

                px-6
                py-4

                rounded-2xl

                bg-white/5

                border
                border-black

                text-black

                outline-none

                focus:border-cyan-400

                transition-all
                duration-300
              "
              />

              {/* EMAIL */}

              <input
                type="email"
                placeholder="Business Email"
                className="
                w-full

                px-6
                py-4

                rounded-2xl

                bg-white/5

                border
                border-black

                text-black

                outline-none

                focus:border-cyan-400

                transition-all
                duration-300
              "
              />

              {/* COMPANY */}

              <input
                type="text"
                placeholder="Company Name"
                className="
                w-full

                px-6
                py-4

                rounded-2xl

                bg-white/5

                border
                border-black

                text-black

                outline-none

                focus:border-cyan-400

                transition-all
                duration-300
              "
              />

              {/* MESSAGE */}

              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="
                w-full

                px-6
                py-4

                rounded-2xl

                bg-green/5

                border
                border-green/10

                text-black

                resize-none

                outline-none

                focus:border-cyan-400

                transition-all
                duration-300
              "
              />

              {/* BUTTON */}

              <button
                className="
                group

                flex
                items-center
                justify-center
                gap-3

                px-8
                py-4

                rounded-full

                bg-cyan-500

                text-white
                font-semibold

                transition-all
                duration-300

                hover:scale-[1.02]

                hover:shadow-[0_0_50px_rgba(6,182,212,0.45)]
              "
              >
                Send Inquiry

                <ArrowRight
                  className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
                />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPreview;
