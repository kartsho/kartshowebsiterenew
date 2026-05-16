import { useState } from "react";

import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Upload,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

const ContactFormSection = () => {
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2500);
  };

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
        top-[-200px]
        left-[-200px]

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
        bottom-[-200px]
        right-[-200px]

        w-[500px]
        h-[500px]

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

        grid
        lg:grid-cols-[1.2fr_0.8fr]

        gap-14
      "
      >
        {/* ================================================= */}
        {/* ================= LEFT FORM ===================== */}
        {/* ================================================= */}

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
          relative

          rounded-[40px]

          bg-white/70
          backdrop-blur-2xl

          border
          border-white/40

          p-8
          md:p-12

          shadow-[0_20px_80px_rgba(0,0,0,0.06)]
        "
        >
          {/* INNER GLOW */}

          <div
            className="
            absolute
            top-[-60px]
            right-[-60px]

            w-[180px]
            h-[180px]

            rounded-full

            bg-cyan-300/20

            blur-3xl
          "
          />

          {/* TOP */}

          <div className="relative z-10 mb-12">
            <div
              className="
              inline-flex

              px-5
              py-3

              rounded-full

              bg-cyan-100

              text-cyan-700
              text-sm
              font-semibold

              mb-6
            "
            >
              Start Your Project
            </div>

            <h2
              className="
              text-4xl
              md:text-5xl

              font-bold

              leading-tight

              text-[#0B0F19]

              mb-5
            "
            >
              Let’s Discuss Your
              <br />
              Next Big Product.
            </h2>

            <p
              className="
              text-lg
              text-gray-600

              leading-relaxed
            "
            >
              Share your project requirements,
              technical goals, and business
              vision — our team will create a
              scalable execution strategy.
            </p>
          </div>

          {/* ================= FORM ================= */}

          <form
            onSubmit={handleSubmit}
            className="
            relative
            z-10

            space-y-6
          "
          >
            {/* ROW 1 */}

            <div
              className="
              grid
              md:grid-cols-2
              gap-6
            "
            >
              {/* FULL NAME */}

              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder=" "
                  className="
                  peer

                  w-full

                  px-5
                  pt-7
                  pb-3

                  rounded-2xl

                  bg-white/80

                  border
                  border-black/10

                  outline-none

                  text-[#0B0F19]

                  transition-all
                  duration-300

                  focus:border-cyan-500
                  focus:shadow-[0_0_30px_rgba(6,182,212,0.15)]
                "
                />

                <label
                  className="
                  absolute
                  left-5
                  top-4

                  text-gray-500
                  text-sm

                  transition-all
                  duration-300

                  peer-focus:top-2
                  peer-focus:text-xs
                  peer-focus:text-cyan-600

                  peer-[:not(:placeholder-shown)]:top-2
                  peer-[:not(:placeholder-shown)]:text-xs
                "
                >
                  Full Name
                </label>
              </div>

              {/* COMPANY */}

              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  className="
                  peer

                  w-full

                  px-5
                  pt-7
                  pb-3

                  rounded-2xl

                  bg-white/80

                  border
                  border-black/10

                  outline-none

                  transition-all
                  duration-300

                  focus:border-cyan-500
                  focus:shadow-[0_0_30px_rgba(6,182,212,0.15)]
                "
                />

                <label
                  className="
                  absolute
                  left-5
                  top-4

                  text-gray-500
                  text-sm

                  transition-all
                  duration-300

                  peer-focus:top-2
                  peer-focus:text-xs
                  peer-focus:text-cyan-600

                  peer-[:not(:placeholder-shown)]:top-2
                  peer-[:not(:placeholder-shown)]:text-xs
                "
                >
                  Company Name
                </label>
              </div>
            </div>

            {/* ROW 2 */}

            <div
              className="
              grid
              md:grid-cols-2
              gap-6
            "
            >
              {/* EMAIL */}

              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder=" "
                  className="
                  peer

                  w-full

                  px-5
                  pt-7
                  pb-3

                  rounded-2xl

                  bg-white/80

                  border
                  border-black/10

                  outline-none

                  transition-all
                  duration-300

                  focus:border-cyan-500
                  focus:shadow-[0_0_30px_rgba(6,182,212,0.15)]
                "
                />

                <label
                  className="
                  absolute
                  left-5
                  top-4

                  text-gray-500
                  text-sm

                  transition-all
                  duration-300

                  peer-focus:top-2
                  peer-focus:text-xs
                  peer-focus:text-cyan-600

                  peer-[:not(:placeholder-shown)]:top-2
                  peer-[:not(:placeholder-shown)]:text-xs
                "
                >
                  Email Address
                </label>
              </div>

              {/* PHONE */}

              <div className="relative">
                <input
                  type="tel"
                  placeholder=" "
                  className="
                  peer

                  w-full

                  px-5
                  pt-7
                  pb-3

                  rounded-2xl

                  bg-white/80

                  border
                  border-black/10

                  outline-none

                  transition-all
                  duration-300

                  focus:border-cyan-500
                  focus:shadow-[0_0_30px_rgba(6,182,212,0.15)]
                "
                />

                <label
                  className="
                  absolute
                  left-5
                  top-4

                  text-gray-500
                  text-sm

                  transition-all
                  duration-300

                  peer-focus:top-2
                  peer-focus:text-xs
                  peer-focus:text-cyan-600

                  peer-[:not(:placeholder-shown)]:top-2
                  peer-[:not(:placeholder-shown)]:text-xs
                "
                >
                  Phone Number
                </label>
              </div>
            </div>

            {/* ROW 3 */}

            <div
              className="
              grid
              md:grid-cols-2
              gap-6
            "
            >
              {/* SERVICE */}

              <select
                className="
                w-full

                px-5
                py-5

                rounded-2xl

                bg-white/80

                border
                border-black/10

                outline-none

                text-gray-700

                transition-all
                duration-300

                focus:border-cyan-500
                focus:shadow-[0_0_30px_rgba(6,182,212,0.15)]
              "
              >
                <option>
                  Select Service Type
                </option>

                <option>
                  AI Development
                </option>

                <option>
                  SaaS Development
                </option>

                <option>
                  Cloud & DevOps
                </option>

                <option>
                  Enterprise Software
                </option>

                <option>
                  UI/UX Design
                </option>
              </select>

              {/* BUDGET */}

              <select
                className="
                w-full

                px-5
                py-5

                rounded-2xl

                bg-white/80

                border
                border-black/10

                outline-none

                text-gray-700

                transition-all
                duration-300

                focus:border-cyan-500
                focus:shadow-[0_0_30px_rgba(6,182,212,0.15)]
              "
              >
                <option>
                  Project Budget
                </option>

                <option>
                  $1K - $5K
                </option>

                <option>
                  $5K - $20K
                </option>

                <option>
                  $20K - $50K
                </option>

                <option>
                  $50K+
                </option>
              </select>
            </div>

            {/* TIMELINE */}

            <select
              className="
              w-full

              px-5
              py-5

              rounded-2xl

              bg-white/80

              border
              border-black/10

              outline-none

              text-gray-700

              transition-all
              duration-300

              focus:border-cyan-500
              focus:shadow-[0_0_30px_rgba(6,182,212,0.15)]
            "
            >
              <option>
                Project Timeline
              </option>

              <option>
                ASAP
              </option>

              <option>
                1-2 Months
              </option>

              <option>
                3-6 Months
              </option>

              <option>
                Long Term Partnership
              </option>
            </select>

            {/* MESSAGE */}

            <div className="relative">
              <textarea
                rows="6"
                placeholder=" "
                className="
                peer

                w-full

                px-5
                pt-8
                pb-4

                rounded-2xl

                bg-white/80

                border
                border-black/10

                outline-none

                resize-none

                transition-all
                duration-300

                focus:border-cyan-500
                focus:shadow-[0_0_30px_rgba(6,182,212,0.15)]
              "
              />

              <label
                className="
                absolute
                left-5
                top-5

                text-gray-500
                text-sm

                transition-all
                duration-300

                peer-focus:top-2
                peer-focus:text-xs
                peer-focus:text-cyan-600

                peer-[:not(:placeholder-shown)]:top-2
                peer-[:not(:placeholder-shown)]:text-xs
              "
              >
                Tell us about your project
              </label>
            </div>

            {/* FILE UPLOAD */}

            <label
              className="
              flex
              items-center
              justify-center
              gap-3

              w-full

              py-5

              rounded-2xl

              border-2
              border-dashed
              border-black/10

              bg-white/60

              cursor-pointer

              transition-all
              duration-300

              hover:border-cyan-500
              hover:bg-cyan-50
            "
            >
              <Upload size={20} />

              <span className="font-medium">
                Upload Project Files
              </span>

              <input
                type="file"
                hidden
              />
            </label>

            {/* SUBMIT BUTTON */}

            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              type="submit"
              className="
              w-full

              flex
              items-center
              justify-center
              gap-3

              px-8
              py-5

              rounded-2xl

              bg-cyan-500

              text-white
              font-semibold
              text-lg

              shadow-[0_10px_40px_rgba(6,182,212,0.35)]

              transition-all
              duration-300
            "
            >
              {loading ? (
                <div
                  className="
                  w-6
                  h-6

                  rounded-full

                  border-2
                  border-white/30
                  border-t-white

                  animate-spin
                "
                />
              ) : success ? (
                <>
                  <CheckCircle2 size={22} />

                  Project Request Sent
                </>
              ) : (
                <>
                  Start Your Project

                  <ArrowRight size={20} />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* ================================================= */}
        {/* ================= RIGHT CARD ==================== */}
        {/* ================================================= */}

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
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="
          relative

          rounded-[40px]

          bg-[#0B0F19]

          p-10

          overflow-hidden

          text-white

          shadow-[0_20px_80px_rgba(0,0,0,0.15)]
        "
        >
          {/* GLOW */}

          <div
            className="
            absolute
            top-[-100px]
            right-[-100px]

            w-[250px]
            h-[250px]

            rounded-full

            bg-cyan-500/20

            blur-3xl
          "
          />

          {/* TOP */}

          <div className="relative z-10 mb-12">
            <div
              className="
              inline-flex

              px-5
              py-3

              rounded-full

              bg-white/10

              border
              border-white/10

              text-cyan-400
              text-sm
              font-semibold

              mb-6
            "
            >
              Contact Information
            </div>

            <h3
              className="
              text-4xl
              font-bold

              leading-tight

              mb-5
            "
            >
              Let’s Build
              Something Big.
            </h3>

            <p
              className="
              text-gray-400

              leading-relaxed
            "
            >
              Reach out for enterprise software,
              AI systems, cloud architecture,
              and scalable SaaS platforms.
            </p>
          </div>

          {/* INFO */}

          <div
            className="
            relative
            z-10

            space-y-8

            mb-12
          "
          >
            {[
              {
                icon: <Mail size={22} />,
                title: "Email",
                value: "info@kartsho.com",
              },

              {
                icon: <Mail size={22} />,
                title: "HR",
                value: "hr@kartsho.com",
              },

              {
                icon: <Phone size={22} />,
                title: "Phone",
                value: "+91 9453134901 / +91 9528660578",
              },

              {
                icon: <MapPin size={22} />,
                title: "Address",
                value:
                  "Godhoopatti Patti, Pratapgarh, Uttar Pradesh - 230134",
              },

              {
                icon: <Clock3 size={22} />,
                title: "Working Hours",
                value:
                  "Mon - Fri / 9 AM - 6 PM",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                flex
                items-start
                gap-5
              "
              >
                <div
                  className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-white/10

                  flex
                  items-center
                  justify-center

                  text-cyan-400
                "
                >
                  {item.icon}
                </div>

                <div>
                  <p
                    className="
                    text-sm
                    text-gray-400

                    mb-1
                  "
                  >
                    {item.title}
                  </p>

                  <h4
                    className="
                    text-lg
                    font-semibold
                  "
                  >
                    {item.value}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* TRUST ELEMENTS */}

          <div
            className="
            relative
            z-10

            space-y-4

            mb-10
          "
          >
            {[
              "Usually responds within 24 hours",
              "NDA Friendly",
              "Enterprise Support",
              "Free Discovery Call",
            ].map((item, index) => (
              <div
                key={index}
                className="
                flex
                items-center
                gap-3
              "
              >
                <CheckCircle2
                  size={18}
                  className="
                  text-cyan-400
                "
                />

                <span className="text-gray-300">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* SOCIALS */}

          <div
            className="
            relative
            z-10

            flex
            items-center

            gap-4
          "
          >
            {[
              <FaLinkedin size={20} />,
              <FaInstagram size={20} />,
              <FaXTwitter size={20} />,
              <FaGithub size={20} />,
            ].map((icon, index) => (
              <button
                key={index}
                className="
                w-14
                h-14

                rounded-2xl

                bg-white/10

                flex
                items-center
                justify-center

                text-white

                transition-all
                duration-300

                hover:bg-cyan-500
                hover:-translate-y-1
              "
              >
                {icon}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormSection;
