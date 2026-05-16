import { motion } from "framer-motion";

import {
  Star,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    name: "Michael Anderson",
    role: "CEO, CloudSync",
    image:
      "https://i.pravatar.cc/300?img=12",

    review:
      "KartSho completely transformed our SaaS platform. Their AI automation and enterprise architecture helped us scale faster than expected.",

    rating: 5,
  },

  {
    name: "Sophia Miller",
    role: "Founder, NovaTech",
    image:
      "https://i.pravatar.cc/300?img=32",

    review:
      "The UI/UX quality and engineering execution were exceptional. Their team feels like a true technology partner.",

    rating: 5,
  },

  {
    name: "Daniel Carter",
    role: "CTO, FinVerse",
    image:
      "https://i.pravatar.cc/300?img=15",

    review:
      "From cloud infrastructure to frontend systems, KartSho delivered a production-grade platform with incredible performance.",

    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      className="
      relative
      py-32
      overflow-hidden
      bg-[#F8FAFC]
    "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
        absolute
        top-[-100px]
        left-[-100px]

        w-[300px]
        h-[300px]

        rounded-full

        bg-cyan-100/40

        blur-3xl
      "
      />

      <div
        className="
        absolute
        bottom-[-120px]
        right-[-120px]

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
      "
      >
        {/* ================= TOP CONTENT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
          mb-20
        "
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

            mb-6
          "
          >
            <Quote size={16} />

            Client Testimonials
          </div>

          {/* HEADING */}

          <h2
            className="
            text-4xl
            md:text-5xl

            font-bold

            text-[#0B0F19]

            leading-tight

            mb-6
          "
          >
            Trusted By Innovative
            Companies Worldwide
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            max-w-3xl
            mx-auto

            text-lg
            text-gray-600

            leading-relaxed
          "
          >
            We help startups, enterprises, and
            modern businesses build scalable
            products with AI automation,
            enterprise-grade architecture, and
            premium digital experiences.
          </p>
        </motion.div>

        {/* ================= TESTIMONIAL GRID ================= */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3

          gap-8
        "
        >
          {testimonials.map(
            (testimonial, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
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
                whileHover={{
                  y: -10,
                }}
                className="
                relative

                overflow-hidden

                rounded-[32px]

                border
                border-white/40

                bg-white/70
                backdrop-blur-xl

                p-8

                shadow-[0_20px_60px_rgba(0,0,0,0.08)]

                transition-all
                duration-500
              "
              >
                {/* GLOW */}

                <div
                  className="
                  absolute
                  top-0
                  right-0

                  w-32
                  h-32

                  bg-cyan-200/20

                  blur-3xl
                "
                />

                {/* TOP */}

                <div
                  className="
                  relative
                  z-10

                  flex
                  items-center
                  gap-4

                  mb-8
                "
                >
                  {/* IMAGE */}

                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="
                    w-12
                    h-50

                    rounded-full

                    object-cover

                    border-2
                    border-cyan-200
                  "
                  />

                  {/* INFO */}

                  <div>
                    <h3
                      className="
                      text-lg
                      font-bold
                      text-[#0B0F19]
                      

                      
                    "
                    >
                      {testimonial.name}
                    </h3>

                    <p
                      className="
                      text-sm
                      text-gray-500
                    "
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* STARS */}

                <div
                  className="
                  flex
                  gap-1

                  mb-6
                "
                >
                  {Array.from({
                    length:
                      testimonial.rating,
                  }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="
                      fill-yellow-400
                      text-yellow-400
                    "
                    />
                  ))}
                </div>

                {/* REVIEW */}

                <p
                  className="
                  relative
                  z-10

                  text-gray-600

                  leading-relaxed

                  text-[16px]
                "
                >
                  “{testimonial.review}”
                </p>

                {/* QUOTE ICON */}

                <Quote
                  className="
                  absolute
                  bottom-6
                  right-6

                  text-cyan-100

                  w-16
                  h-16
                "
                />
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;