import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  Rocket,
  Globe2,
  Building2,
} from "lucide-react";

import officeImage from "../../../assets/images/aboutOffice.jpg";

const CompanyStory = () => {
  return (
    <section
      className="
      relative
      py-32
      overflow-hidden
      bg-white
    "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
        absolute
        top-[-150px]
        right-[-150px]

        w-[400px]
        h-[400px]

        rounded-full

        bg-cyan-100/50

        blur-3xl
      "
      />

      <div
        className="
        absolute
        bottom-[-120px]
        left-[-120px]

        w-[350px]
        h-[350px]

        rounded-full

        bg-blue-100/40

        blur-3xl
      "
      />

      {/* ================= GRID ================= */}

     

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
          {/* SMALL BADGE */}

          <div
            className="
            inline-flex
            items-center
            gap-3

            px-5
            py-3

            rounded-full

            bg-cyan-100

            text-cyan-700

            text-sm
            font-medium

            mb-8
          "
          >
            <Sparkles size={18} />

            Our Story
          </div>

          {/* HEADING */}

          <h2
            className="
            text-4xl
            md:text-6xl

            font-bold

            leading-tight

            text-[#0B0F19]

            mb-8
          "
          >
            Building Modern
            <span
              className="
              text-cyan-500
            "
            >
              {" "}
              Digital
            </span>
            <br />
            Solutions For
            <br />
            Global Businesses
          </h2>

          {/* STORY */}

          <div
            className="
            space-y-6

            text-lg
            leading-relaxed

            text-gray-600
          "
          >
            <p>
              Founded in 2026, KartSho started
              with a vision to help startups and
              enterprises build scalable digital
              products powered by AI, cloud
              systems, and modern engineering.
            </p>

            <p>
              What began as a small innovation
              driven team quickly evolved into a
              modern technology company focused
              on solving complex business
              problems through automation,
              enterprise software, and premium
              user experiences.
            </p>

            <p>
              Today, we collaborate with
              businesses globally to engineer
              future-ready SaaS platforms,
              enterprise infrastructure, and
              intelligent systems that scale
              rapidly with market demand.
            </p>
          </div>

          {/* FEATURE POINTS */}

          <div
            className="
            grid
            sm:grid-cols-2
            

            gap-5

            mt-12
          "
          >
            {[
              {
                icon: Rocket,
                title: "Startup Mindset",
              },

              {
                icon: Globe2,
                title: "Global Scaling",
                cartStyle:`
                 border-2
            border-b-blue-400
            border-l-cyan-300
            border-r-emerald-500
            border-t-fuchsia-600`
              },

              {
                icon: Building2,
                title: "Enterprise Systems",
              },

              {
                icon: Sparkles,
                title: "AI Innovation",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                  flex
                  items-center
                  gap-4

                  p-5

                  rounded-3xl

                  bg-[#F5F7FB]

                  border
                  border-black/5

                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:shadow-xl
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
                    <Icon size={22} />
                  </div>

                  <h4
                    className="
                    font-semibold
                    text-[#0B0F19]
                  "
                  >
                    {item.title}
                  </h4>
                
                </div>
              );
            })}
          </div>

          {/* BUTTON */}

          <button
            className="
            group

            mt-12

            flex
            items-center
            gap-3

            text-cyan-600
            font-semibold
            text-lg
          "
          >
            Explore Our Journey

            <ArrowRight
              className="
              transition-transform
              duration-300

              group-hover:translate-x-1
            "
            />
          </button>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}

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
            duration: 0.9,
          }}
          viewport={{ once: true }}
          className="
          relative
        "
        >
          {/* IMAGE */}

          <div
            className="
            relative

            overflow-hidden

            rounded-[40px]
            p-10
            border
            border-black/5

            shadow-[0_30px_80px_rgba(0,0,0,0.12)]

            group
          "
          >
            <img
              src={officeImage}
              alt="Company Story"
              className="
              w-full
              h-[700px]
              p-10
              object-cover
               scale-[2.10]
              transition-all
              duration-700

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


          {/* FLOATING CARD 2 */}

          <motion.div
            animate={{
              y: [0, 14, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="
            absolute
            bottom-[-90px]
            right-[-10px]

            backdrop-blur-xl
            bg-white/80

            border-2
            border-b-blue-400
            border-l-cyan-300
            border-r-emerald-500
            border-t-fuchsia-600

            rounded-3xl

            px-7
            py-5

            shadow-xl
          "
          >
            <p
              className="
              text-sm
              text-gray-500

              mb-2
            "
            >
              Enterprise Growth
            </p>

            <h3
              className="
              text-3xl
              font-bold

              text-[#0B0F19]
            "
            >
              50+ Clients
            </h3>
          </motion.div>

          {/* FLOATING MINI BADGE */}

          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="
            absolute
            top-[-65px]
            left-[-20px]

            px-6
            py-4

            rounded-3xl

           border-2
            border-b-blue-400
            border-l-cyan-300
            border-r-emerald-500
            border-t-fuchsia-600

            font-semibold

            shadow-[0_0_40px_rgba(6,182,212,0.35)]
          "
          >
            Innovation Driven Company
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStory;