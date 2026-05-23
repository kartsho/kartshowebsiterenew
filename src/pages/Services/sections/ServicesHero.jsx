import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  Shield,
  Cloud,
  Bot,
} from "lucide-react";

import heroImage from "../../../assets/images/servicehero.jpg";

const stats = [
  {
    number: "3+",
    label: "Active Ventures",
  },

  {
    number: "50+",
    label: "Clients Served",
  },

  {
    number: "24h",
    label: "Response Time",
  },
];

const ServicesHero = () => {
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
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
        absolute
        top-[-200px]
        right-[-200px]

        w-[500px]
        h-[500px]

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

        w-[400px]
        h-[400px]

        rounded-full

        bg-blue-200/30

        blur-3xl
      "
      />

      {/* ================= GRID BACKGROUND ================= */}

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
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
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

            bg-cyan-100

            text-cyan-700
            text-sm
            font-medium

            mb-8
          "
          >
            <Sparkles size={16} />

            Kartsho Enterprises
          </div>

          {/* HEADING */}

          <h1
            className="
            text-5xl
            md:text-7xl

            font-bold

            leading-tight

            text-[#0B0F19]

            mb-8
          "
          >
            Build Scalable
            <br />

            Digital Ventures
            <br />

            For Modern
            Businesses
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
            text-lg
            md:text-xl

            text-gray-600

            leading-relaxed

            max-w-2xl

            mb-10
          "
          >
            Kartsho Enterprises operates across
            marketing, legal tech, and education
            with a 24-hour response promise.
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
            {/* PRIMARY BUTTON */}

            <button
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

              hover:shadow-[0_0_50px_rgba(6,182,212,0.35)]
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
            </button>

            {/* SECONDARY BUTTON */}

           <button
  className="
  px-8
  py-4

   bg-white
   rounded-full
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
"
>
  Book Consultation
</button>
          </div>

          {/* STATS */}

          <div
            className="
            grid
            grid-cols-3

            gap-8
          "
          >
            {stats.map((item, index) => (
              <div key={index}>
                <h3
                  className="
                  text-3xl
                  md:text-4xl

                  font-bold

                  text-cyan-500

                  mb-2
                "
                >
                  {item.number}
                </h3>

                <p className="text-gray-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================= RIGHT VISUAL ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
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
          flex
          justify-center
          mt-10
          lg:mt-0
        "
        >
          {/* MAIN IMAGE */}

          <div
            className="
            relative

            overflow-hidden

            rounded-[28px]
            sm:rounded-[40px]

            lg:-left-4
            bg-white

            border-4
            border-blue-400

            shadow-[0_30px_80px_rgba(0,0,0,0.12)]
          "
          >
            {/* IMAGE */}

            <img
              src={heroImage}
              alt="Services Hero"
              className="
              w-full
              max-w-[650px]
              h-[340px]
              sm:h-[520px]
              lg:h-[700px]

              object-cover
              object-center
            "
            />

            {/* OVERLAY */}

            <div
              className="
              absolute
              inset-0

              bg-gradient-to-t
              from-black/20
              to-transparent
            "
            />
          </div>

          {/* FLOATING CARD 1 */}

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="
            hidden
            lg:block

            absolute
            top-[2px]
            -left-5

            backdrop-blur-xl

            bg-white/80

            border-4
            border-blue-700

            rounded-3xl

            p-4

            shadow-xl
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
                w-12
                h-12

                rounded-2xl

                bg-cyan-100

                flex
                items-center
                justify-center

                text-cyan-600
              "
              >
                <Bot size={22} />
              </div>

              <div>
                <h4
                  className="
                  text-[#0B0F19]
                  font-semibold
                "
                >
                  AI Automation
                </h4>

                <p
                  className="
                  text-sm
                  text-gray-500
                "
                >
                  Smart workflows
                </p>
              </div>
            </div>
          </motion.div>

          {/* FLOATING CARD 2 */}

          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="
            hidden
            lg:block

            absolute
            top-44
            right-[-20px]
            backdrop-blur-xl
            bg-white/80
            border-4
            
            border-green-400
            rounded-3xl

            p-5

            shadow-xl
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
                w-12
                h-12
                rounded-2xl
                bg-cyan-100
                flex
                items-center
                justify-center

                text-cyan-600
              "
              >
                <Cloud size={22} />
              </div>

              <div>
                <h4
                  className="
                  text-[#0B0F19]
                  font-semibold
                "
                >
                  Cloud Scaling
                </h4>

                <p
                  className="
                  text-sm
                  text-gray-500
                "
                >
                  Enterprise infra
                </p>
              </div>
            </div>
          </motion.div>

          {/* FLOATING MINI CARD */}

          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="
            hidden
            lg:block

            absolute
            top-56
            -left-5
            px-6
            py-4

            rounded-3xl

            bg-cyan-500

            text-white

            font-semibold
            border-4
            border-gray-950

            shadow-[0_0_50px_rgba(6,182,212,0.4)]
          "
          >
            99.9% Uptime
          </motion.div>

          {/* FLOATING SECURITY CARD */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
            }}
            className="
            hidden
            lg:block

            absolute
            top-[1px]
            right-[-20px]

            backdrop-blur-xl

            bg-white/80

            border-4
            border-pink-500

            rounded-3xl

            p-5

            shadow-xl
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
                w-12
                h-12

                rounded-2xl

                bg-cyan-100

                flex
                items-center
                justify-center

                text-cyan-600
              "
              >
                <Shield size={22} />
              </div>

              <div>
                <h4
                  className="
                  text-[#0B0F19]
                  font-semibold
                "
                >
                  Secure Systems
                </h4>

                <p
                  className="
                  text-sm
                  text-gray-500
                "
                >
                  Enterprise security
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
