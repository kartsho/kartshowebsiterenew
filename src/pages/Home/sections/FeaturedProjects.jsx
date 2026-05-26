import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { ArrowUpRight } from "lucide-react";


import projectimg from "../../../assets/images/projectimg.jpeg"

const FeaturedProjects = () => {
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
        bottom-[-100px]
        left-[-100px]

        w-[350px]
        h-[350px]

        rounded-full

        bg-blue-100/40

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
            inline-block

            px-5
            py-2

            rounded-full

            bg-cyan-100

            text-cyan-700
            text-sm
            font-medium

            mb-6
          "
          >
            Featured Project
          </div>

          {/* HEADING */}

          <h2
            className="
            text-4xl
            md:text-5xl

            font-bold

            text-[#0B0F19]

            leading-tight

            mb-8
          "
          >
            AI SaaS Dashboard
            for Enterprise Growth
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            text-lg
            text-gray-600

            leading-relaxed

            mb-10
          "
          >
            We designed and developed a modern
            AI-powered SaaS dashboard with
            analytics, automation, cloud scaling,
            and enterprise-grade performance.
          </p>

          {/* TAGS */}

          <div
            className="
            flex
            flex-wrap
            gap-4

            mb-12
          "
          >
            {[
              "React JS",
              "Node JS",
              "AI Automation",
              "Cloud System",
            ].map((tag, index) => (
              <div
                key={index}
                className="
                px-5
                py-3

                rounded-full

                bg-[#F5F7FB]

                border
                border-black/5

                text-sm
                font-medium

                text-[#0B0F19]
              "
              >
                {tag}
              </div>
            ))}
          </div>

          {/* ================= STATS ================= */}

          <div
            className="
            grid
            grid-cols-2

            gap-8

            mb-12
          "
          >
            <div>
              <h3
                className="
                text-4xl
                font-bold
                text-cyan-500
              "
              >
                3+
              </h3>

              <p className="text-gray-600 mt-2">
                Active Ventures
              </p>
            </div>

            <div>
              <h3
                className="
                text-4xl
                font-bold
                text-cyan-500
              "
              >
                50+
              </h3>

              <p className="text-gray-600 mt-2">
                Clients Served
              </p>
            </div>
          </div>

          {/* ================= PROJECT TIMELINE ================= */}

          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-4
            sm:gap-6

            mb-12
          "
          >
            {/* ITEM */}

            <div
              className="
              p-4
              sm:p-5

              text-center

              rounded-3xl

              bg-[#F5F7FB]

              border
              border-black/5
            "
            >
              <h3
              className="
                text-2xl
                sm:text-3xl
                font-bold
                text-cyan-500
              "
              >
                6
              </h3>

              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Weeks
              </p>
            </div>

            {/* ITEM */}

            <div
              className="
              p-4
              sm:p-5

              text-center

              rounded-3xl

              bg-[#F5F7FB]

              border
              border-black/5
            "
            >
              <h3
              className="
                text-2xl
                sm:text-3xl
                font-bold
                text-cyan-500
              "
              >
                12
              </h3>

              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Developers
              </p>
            </div>

            {/* ITEM */}

            <div
              className="
              p-4
              sm:p-5

              text-center

              rounded-3xl

              bg-[#F5F7FB]

              border
              border-black/5
            "
            >
              <h3
              className="
                text-2xl
                sm:text-3xl
                font-bold
                text-cyan-500
              "
              >
                4
              </h3>

              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Countries
              </p>
            </div>
          </div>

          {/* ================= BUTTONS ================= */}

          <div className="flex flex-wrap gap-5">
            <Link
              to="/live-projects#kartsho-counseling"
              className="
              px-8
              py-4

              rounded-full

              bg-cyan-500
              text-white

              font-semibold

              transition-all
              duration-300

              hover:scale-105
              hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]
            "
            >
              View Case Study
            </Link>

            <Link
              to="/live-projects"
              className="
              inline-flex
              items-center
              gap-2

              px-8
              py-4

              rounded-full

              border
              border-[color:var(--border)]

              text-[color:var(--text-primary)]

              font-semibold

              transition-all
              duration-300

              hover:bg-[color:var(--surface)]
            "
            >
              View Live Projects

              <ArrowUpRight size={18} />
            </Link>
          </div>
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
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="
          relative
          mt-10
          lg:mt-0
        "
        >
          {/* IMAGE CONTAINER */}

          <div
                     className="
                     relative
                     w-full
                     max-w-[620px]
                     aspect-[4/3]
                     overflow-hidden
                     rounded-[32px]
                     sm:rounded-[44px]
                     p-4
                     sm:p-4
                     bg-[color:var(--surface)]
                     backdrop-blur-3xl
                     border
                     border-[color:var(--border)]
                     shadow-[0_30px_80px_rgba(15,23,42,0.16)]
                     
                   "
                   >
                     <div
                       className="
                       relative
                       h-full
                       w-full
                       overflow-hidden
                       rounded-[20px]
                       sm:rounded-[28px]
                       bg-[color:var(--surface-strong)]
                     "
                     >
                       <img
                         src={projectimg}
                         alt="Hero"
                         className="
                         h-full
                         w-full
                         rounded-3xl
                         object-cover
                         object-center
                       
                         pt-6
                         scale-[1.20]
                        
                         
                      
                       "
                       />
         
                       {/* SOFT TINT */}
         
                       <div
                         className="
                          absolute
                            inset-0
                            border-4
                         border-b-emerald-400
                         border-l-blue-400
                         border-t-blue-900
                         border-r-cyan-400
                           rounded-3xl
                         bg-gradient-to-tr
                         from-cyan-500/10
                         via-transparent
                         to-transparent
                       "
                       />
                     </div>
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
            hidden
            lg:block

            absolute
            top-8
            -left-10

            backdrop-blur-xl
            bg-white/80

            border
            border-white/40

            rounded-3xl

            px-6
            py-5

            shadow-xl
          "
          >
            <p className="text-gray-500 text-sm">
              Active Users
            </p>

            <h3
              className="
              text-3xl
              font-bold
              text-[#0B0F19]
            "
            >
              50K+
            </h3>
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
            bottom-10
            right-0

            backdrop-blur-xl
            bg-white/80

            border
            border-white/40

            rounded-3xl

            px-6
            py-5

            shadow-xl
          "
          >
            <p className="text-gray-500 text-sm">
              Performance
            </p>

            <h3
              className="
              text-3xl
              font-bold
              text-cyan-500
            "
            >
              +89%
            </h3>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
