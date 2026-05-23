import { motion } from "framer-motion";

import heroImage from "../../../assets/images/hero.jpg";
//yaha pe jab hum click kareng explor pe tp data scroll hokar direct service preview pe jayega 
const Hero = () => {
  const scrollToServicesPreview = () => {
    document
      .getElementById("services-preview")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#F5F7FB]
      flex
      items-center
      pt-30
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
        bg-cyan-200/40
        rounded-full
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
        bg-pink-200/30
        rounded-full
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
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
          flex
          flex-col
          gap-8
        "
        >
          {/* BADGE */}

          <div
            className="
            w-fit
            px-5
            py-2
            rounded-full
            bg-cyan-100
            text-cyan-700
            text-sm
            font-medium
            border
            border-cyan-200
          "
          >
            Global Digital Innovation Conglomerate
          </div>

          {/* HEADING */}

          <h1
            className="
            text-5xl
            md:text-6xl
            xl:text-7xl
            font-bold
            leading-tight
            text-[#0B0F19]
          "
          >
            Engineering the <br />

            Digital Future <br />

            With Kartsho
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
            text-lg
            text-gray-600
            max-w-xl
            leading-relaxed
          "
          >
            We build and scale digital ventures
            across marketing, legal tech, and
            education.
          </p>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-5">
            <button
              type="button"
              onClick={scrollToServicesPreview}
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
              Explore Ventures
            </button>

            <button
              className="
             backdrop-blur-xl
            bg-white/10
            border
            border-white/20
            px-6
            py-5
            rounded-3xl
            shadow-[0_8px_32px_rgba(0,0,0,0.2)]
            text-black
            hover:bg-green-300
            "
            >
              Contact Team
            </button>
          </div>

          {/* TRUSTED LOGOS */}

          <div className="pt-10">
            <p
              className="
              text-sm
              text-gray-500
              mb-6
            "
            >
              Active business pillars
            </p>

            <div
              className="
              flex
              flex-wrap
              gap-8
              items-center
              opacity-60
            "
            >
              <span className="font-bold text-3xl text-red-500">
                3+ Ventures
              </span>

              <span className="font-bold">
                50+ Clients
              </span>

              <span className="font-bold">
                4+ Industries
              </span>

              <span className="font-bold">
                24h Response
              </span>
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT SIDE ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
          relative
          flex
          justify-center
          items-center
          mt-8
          lg:mt-0
        "
        >
          {/* MAIN IMAGE */}

          <div
            className="
            relative
            w-full
            max-w-[600px]
            h-[320px]
            sm:h-[440px]
            lg:h-[700px]
            overflow-hidden
            rounded-[32px]
            sm:rounded-[60px]
            bg-slate-950/20
          "
          >
            <img
              src={heroImage}
              alt="Hero"
              className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-[55%_22%]
              sm:object-center
              scale-100
              sm:scale-[1.12]
              lg:scale-[4.11]
              lg:pt-10
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

          {/* ================= FLOATING CARD 1 ================= */}

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
            top-[-48px]
            -left-5

            backdrop-blur-xl
            bg-white/10
            border
            border-white/20

            px-6
            py-5
            rounded-3xl

            shadow-[0_8px_32px_rgba(0,0,0,0.2)]

            w-[240px]
          "
          >
            <h3
              className="
              text-lg
              font-semibold
              text-white
            "
            >
              AI Automation
            </h3>

            <p
              className="
              text-sm
              text-white/70
              mt-2
            "
            >
              Smart workflows powered by AI.
            </p>
          </motion.div>

          {/* ================= FLOATING CARD 2 ================= */}

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
            bottom-1
            left-[-23px]

            backdrop-blur-xl
            bg-white/10
            border
            border-white/20

            px-6
            py-5
            rounded-3xl

            shadow-[0_8px_32px_rgba(0,0,0,0.2)]

            w-[250px]
          "
          >
            <h3
              className="
              text-lg
              font-semibold
              text-white
            "
            >
              SaaS Solutions
            </h3>

            <p
              className="
              text-sm
              text-white/70
              mt-2
            "
            >
              Enterprise-ready scalable platforms.
            </p>
          </motion.div>

          {/* ================= FLOATING CARD 3 ================= */}

          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
            }}
            className="
            hidden
            lg:block

            absolute
            top-[-48px]
            -right-5

            backdrop-blur-xl
            bg-white/10
            border
            border-white/20

            px-6
            py-5
            rounded-3xl

            shadow-[0_8px_32px_rgba(0,0,0,0.2)]

            w-[240px]
          "
          >
            <h3
              className="
              text-lg
              font-semibold
              text-white
            "
            >
              Cloud Scaling
            </h3>

            <p
              className="
              text-sm
              text-white/70
              mt-2
            "
            >
              Fast & secure cloud infrastructure.
            </p>
          </motion.div>

          {/* ================= FLOATING CARD 4 ================= */}

          <motion.div
            animate={{
              y: [0, 18, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5.5,
            }}
            className="
            hidden
            lg:block

            absolute
            bottom-1
            right-[-20px]

            backdrop-blur-xl
            bg-white/10
            border
            border-white/20

            px-6
            py-5
            rounded-3xl

            shadow-[0_8px_32px_rgba(0,0,0,0.2)]

            w-[250px]
          "
          >
            <h3
              className="
              text-lg
              font-semibold
              text-white
            "
            >
              Enterprise Security
            </h3>

            <p
              className="
              text-sm
              text-white/70
              mt-2
            "
            >
              Advanced protection for modern apps.
            </p>
          </motion.div>

          {/* ================= STATS CARD ================= */}
        </motion.div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}

    
    </section>
  );
};

export default Hero;
