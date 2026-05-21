import { motion } from "framer-motion";

import {
  ArrowRight,
  Play,
  Star,
  ShieldCheck,
  BarChart3,
  Globe2,
} from "lucide-react";

import officeImage from "../../../assets/images/aboutOffice.jpg";

const AboutHero = () => {
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
      {/* ================= BACKGROUND GRID ================= */}

      

      {/* ================= GLOW EFFECTS ================= */}

      <div
        className="
        absolute
        top-[-200px]
        right-[-200px]

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
        left-[-200px]

        w-[450px]
        h-[450px]

        rounded-full

        bg-blue-300/20

        blur-3xl
      "
      />

      {/* ================= MOUSE GLOW ================= */}

      <div
        className="
        absolute
        top-1/2
        left-1/2

        -translate-x-1/2
        -translate-y-1/2

        w-[600px]
        h-[600px]

        rounded-full

        bg-cyan-400/10

        blur-[140px]
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
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
          }}
        >
          {/* TRUST BADGE */}

          <div
            className="
            inline-flex
            items-center
            gap-3

            px-5
            py-3

            rounded-full

            backdrop-blur-xl
            bg-white/70

            border
            border-white/40

            shadow-lg

            mb-8
          "
          >
            <Star
              className="
              text-cyan-500
            "
              size={18}
            />

              <span
                className="
              text-sm
              font-medium
              text-[#0B0F19]
            "
            >
              Global Digital Innovation Conglomerate
            </span>
          </div>

          {/* HEADING */}

          <h1
            className="
            text-5xl
            md:text-7xl

            font-bold

            leading-[1.1]

            text-[#0B0F19]

            mb-8
          "
          >
            Engineering the
            <br />

            <span
              className="
              text-cyan-500
            "
            >
              Digital Future
            </span>

            <br />

            Across Every Venture
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
            text-lg
            md:text-xl

            text-gray-600

            leading-relaxed

            max-w-2xl

            mb-12
          "
          >
            Kartsho Enterprises is a multi-venture
            digital ecosystem spanning marketing,
            legal tech, education, commerce, media,
            and counseling.
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

              px-8
              py-4

              rounded-full

              bg-cyan-500
              text-white

              font-semibold

              flex
              items-center
              gap-3

              shadow-[0_10px_40px_rgba(6,182,212,0.35)]

              transition-all
              duration-300

              hover:scale-105
            "
            >
              Explore Company

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

              rounded-full
             flex 
             items-center
             gap-3
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
            "
            >
              <Play size={18} />

              Watch Story
            </button>
          </div>

          {/* STATS */}

          <div
            className="
            flex
            flex-wrap

            gap-10
          "
          >
            {[
              {
                number: "3+",
                label: "Active Ventures",
              },

              {
                number: "50+",
                label: "Global Clients",
              },

              {
                number: "4+",
                label: "Core Industries",
              },

              {
                number: "24h",
                label: "Response Time",
              },
            ].map((item, index) => (
              <div key={index}>
                <h3
                  className="
                  text-4xl
                  font-bold
                  text-cyan-500
                "
                >
                  {item.number}
                </h3>

                <p
                  className="
                  text-gray-600
                  mt-2
                "
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================= RIGHT SIDE ================= */}

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
        "
        >
          {/* IMAGE CONTAINER */}

          <div
            className="
            relative

            overflow-hidden

            rounded-[40px]
             p-20
            border
            border-white/30

            bg-white/40
            backdrop-blur-xl

            shadow-[0_30px_80px_rgba(0,0,0,0.12)]
          "
          >
            <img
              src={officeImage}
              alt="Office"
              className="
              w-full
              scale-[10.10]
              p-[100px]
              h-[700px]

              object-cover
            "
            />

            {/* OVERLAY */}

            <div
              className="
              absolute
              inset-0

              bg-gradient-to-t
              from-black/30
              to-transparent
            "
            />
          </div>

          {/* FLOATING CARD 1 */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="
            absolute
            top-[-170px]
            -left-10
            w-[240px]
            backdrop-blur-2xl
            bg-white/70
            border-2
            border-b-blue-400
            border-l-cyan-300
            border-r-emerald-500
            border-t-fuchsia-600
            rounded-3xl

            p-6

            shadow-xl
          "
          >
            <div
              className="
              flex
              items-center
              gap-4

              mb-4
            "
            >
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
                <BarChart3 />
              </div>

              <div>
                <h4
                  className="
                  font-bold
                  text-[#0B0F19]
                "
                >
                  Growth Analytics
                </h4>

                <p
                  className="
                  text-sm
                  text-gray-500
                "
                >
                  Enterprise Insights
                </p>
              </div>
            </div>

            <h3
              className="
              text-3xl
              font-bold
              text-cyan-500
            "
            >
              +240%
            </h3>

            <p className="text-gray-600 mt-2">
              Revenue Growth
            </p>
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
            absolute
            bottom-[-180px]
            -right-5

            w-[250px]

            backdrop-blur-2xl
            bg-white/70

            border-2
            border-b-blue-400
            border-l-cyan-300
            border-r-emerald-500
            border-t-fuchsia-600

            rounded-3xl

            p-6

            shadow-xl
          "
          >
            <div
              className="
              flex
              items-center
              gap-4

              mb-4
            "
            >
              <div
                className="
                w-12
                h-12

                rounded-2xl

                bg-[#0B0F19]

                flex
                items-center
                justify-center

                text-white
              "
              >
                <ShieldCheck />
              </div>

              <div>
                <h4
                  className="
                  font-bold
                  text-[#0B0F19]
                "
                >
                  Secure Infrastructure
                </h4>

                <p
                  className="
                  text-sm
                  text-gray-500
                "
                >
                  Cloud Security
                </p>
              </div>
            </div>

            <h3
              className="
              text-3xl
              font-bold
              text-[#0B0F19]
            "
            >
              99.9%
            </h3>

            <p className="text-gray-600 mt-2">
              System Uptime
            </p>
          </motion.div>

          {/* FLOATING MINI CARD */}

         
          
        </motion.div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <div
        className="
        absolute
        bottom-8
        left-1/2

        -translate-x-1/2

        animate-bounce
      "
      >
        <div
          className="
          w-12
          h-12

          rounded-full

          bg-cyan-500

          text-white

          flex
          items-center
          justify-center

          shadow-lg
        "
        >
          ↓
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
