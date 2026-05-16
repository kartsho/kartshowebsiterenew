import { motion } from "framer-motion";

import {
  Camera,
  Video,
  Coffee,
  Sparkles,
  Laptop,
  Users,
} from "lucide-react";

/* ======================================================= */
/* GALLERY DATA */
/* ======================================================= */

const galleryItems = [
  {
    title: "Remote Team Sync",
    subtitle:
      "Weekly strategy & collaboration calls.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    icon: Video,
    height: "h-[420px]",
  },

  {
    title: "Late Night Coding",
    subtitle:
      "Building scalable AI systems together.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    icon: Laptop,
    height: "h-[300px]",
  },

  {
    title: "Hackathon Energy",
    subtitle:
      "Fast execution. Zero bureaucracy.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    icon: Sparkles,
    height: "h-[520px]",
  },

  {
    title: "Creative Brainstorming",
    subtitle:
      "Whiteboard sessions & product strategy.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    icon: Users,
    height: "h-[360px]",
  },

  {
    title: "Startup Office Culture",
    subtitle:
      "Focused environments with elite builders.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    icon: Coffee,
    height: "h-[420px]",
  },

  {
    title: "Global Team Offsites",
    subtitle:
      "Connecting beyond Slack & Zoom.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    icon: Camera,
    height: "h-[320px]",
  },
];

const LifeAtCompany = () => {
  return (
    <section
      className="
      relative
      overflow-hidden

      bg-[#F5F7FB]

      py-32
    "
    >
      {/* ======================================================= */}
      {/* GRID */}
      {/* ======================================================= */}

      <div
        className="
        absolute
        inset-0

        opacity-[0.04]

        [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]

        [background-size:70px_70px]
      "
      />

      {/* ======================================================= */}
      {/* GLOW */}
      {/* ======================================================= */}

      <div
        className="
        absolute
        top-[-200px]
        left-[-150px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-cyan-500/10

        blur-[140px]
      "
      />

      <div
        className="
        absolute
        bottom-[-200px]
        right-[-150px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-blue-500/10

        blur-[150px]
      "
      />

      {/* ======================================================= */}
      {/* CONTAINER */}
      {/* ======================================================= */}

      <div
        className="
        relative
        z-10

        max-w-7xl
        mx-auto

        px-6
      "
      >
        {/* ======================================================= */}
        {/* TOP */}
        {/* ======================================================= */}

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

          max-w-3xl
          mx-auto

          mb-24
        "
        >
          {/* TAG */}

          <div
            className="
            inline-flex
            items-center
            gap-2

            px-5
            py-3

            rounded-full

            border
            border-cyan-500/20

            bg-white/70
            backdrop-blur-xl

            text-cyan-600
            text-sm
            font-semibold

            shadow-[0_10px_40px_rgba(6,182,212,0.08)]

            mb-8
          "
          >
            <Sparkles size={16} />

            Life At Company
          </div>

          {/* HEADING */}

          <h2
            className="
            text-4xl
            sm:text-5xl
            lg:text-6xl

            font-black

            leading-tight

            text-white
          "
          >
            Inside The
            <span
              className="
              bg-gradient-to-r
              from-cyan-500
              via-blue-500
              to-cyan-400

              bg-clip-text
              text-transparent
            "
            >
              {" "}
              Startup Energy
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            mt-8

            text-lg
            leading-relaxed

            text-white/80
          "
          >
            We move fast, build bold,
            experiment constantly, and
            collaborate globally —
            powered by elite engineers,
            AI workflows, and startup
            obsession.
          </p>
        </motion.div>

        {/* ======================================================= */}
        {/* MASONRY GRID */}
        {/* ======================================================= */}

        <div
          className="
          columns-1
          md:columns-2
          lg:columns-3

          gap-8
          space-y-8
        "
        >
          {galleryItems.map(
            (item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay:
                      index * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                  break-inside-avoid
                "
                >
                  <div
                    className={`
                    group

                    relative

                    overflow-hidden

                    rounded-[32px]

                    ${item.height}

                    shadow-[0_25px_80px_rgba(0,0,0,0.08)]
                  `}
                  >
                    {/* ======================================================= */}
                    {/* IMAGE */}
                    {/* ======================================================= */}

                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                      w-full
                      h-full

                      object-cover

                      transition-transform
                      duration-700

                      group-hover:scale-110
                    "
                    />

                    {/* ======================================================= */}
                    {/* CINEMATIC OVERLAY */}
                    {/* ======================================================= */}

                    <div
                      className="
                      absolute
                      inset-0

                      bg-gradient-to-t
                      from-black/80
                      via-black/20
                      to-transparent
                    "
                    />

                    {/* ======================================================= */}
                    {/* GLOW OVERLAY */}
                    {/* ======================================================= */}

                    <div
                      className="
                      absolute
                      inset-0

                      opacity-0

                      bg-cyan-500/10

                      transition-opacity
                      duration-500

                      group-hover:opacity-100
                    "
                    />

                    {/* ======================================================= */}
                    {/* FLOATING LABEL */}
                    {/* ======================================================= */}

                    <div
                      className="
                      absolute
                      top-5
                      left-5

                      flex
                      items-center
                      gap-2

                      px-4
                      py-2

                      rounded-full

                      border
                      border-white/20

                      bg-white/10
                      backdrop-blur-xl

                      text-white
                      text-sm
                      font-medium
                    "
                    >
                      <Icon size={16} />

                      Team Culture
                    </div>

                    {/* ======================================================= */}
                    {/* BOTTOM CONTENT */}
                    {/* ======================================================= */}

                    <div
                      className="
                      absolute
                      bottom-0
                      left-0

                      w-full

                      p-6
                    "
                    >
                      {/* GLASS CARD */}

                      <div
                        className="
                        relative

                        overflow-hidden

                        rounded-3xl

                        border
                        border-white/10

                        bg-white/10
                        backdrop-blur-2xl

                        p-5

                        transition-all
                        duration-500

                        group-hover:bg-white/15
                      "
                      >
                        {/* SHINE */}

                        <div
                          className="
                          absolute
                          inset-0

                          opacity-0

                          bg-gradient-to-r
                          from-transparent
                          via-white/10
                          to-transparent

                          -translate-x-full

                          transition-all
                          duration-1000

                          group-hover:translate-x-full
                          group-hover:opacity-100
                        "
                        />

                        {/* CONTENT */}

                        <div
                          className="
                          relative
                          z-10
                        "
                        >
                          <h3
                            className="
                            text-2xl
                            font-bold

                            text-white
                          "
                          >
                            {item.title}
                          </h3>

                          <p
                            className="
                            mt-3

                            text-sm
                            leading-relaxed

                            text-gray-300
                          "
                          >
                            {
                              item.subtitle
                            }
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ======================================================= */}
                    {/* CORNER GLOW */}
                    {/* ======================================================= */}

                    <div
                      className="
                      absolute
                      bottom-[-60px]
                      right-[-60px]

                      w-[160px]
                      h-[160px]

                      rounded-full

                      bg-cyan-500/20

                      blur-3xl
                    "
                    />
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default LifeAtCompany;
