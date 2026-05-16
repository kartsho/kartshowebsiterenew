import { useEffect, useRef, useState } from "react";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  Users,
  BriefcaseBusiness,
  Globe2,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

/* ================= DATA ================= */

const stats = [
  {
    number: 20,
    suffix: "+",
    label: "Engineers",
    icon: Users,
  },

  {
    number: 50,
    suffix: "+",
    label: "Projects Delivered",
    icon: BriefcaseBusiness,
  },

  {
    number: 12,
    suffix: "",
    label: "Countries",
    icon: Globe2,
  },

  {
    number: 7,
    suffix: "+",
    label: "Years Experience",
    icon: Sparkles,
  },

  {
    number: 99,
    suffix: "%",
    label: "Client Satisfaction",
    icon: BadgeCheck,
  },
];

/* ================= COUNTER ================= */

const Counter = ({
  number,
  suffix,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const end = number;

    const duration = 1800;

    const incrementTime =
      duration / end;

    const timer = setInterval(() => {
      start += 1;

      setCount(start);

      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () =>
      clearInterval(timer);
  }, [number]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

/* ================= CARD ================= */

const StatCard = ({
  stat,
  index,
}) => {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);

  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 18,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 18,
  });

  const handleMouseMove = (e) => {
    const rect =
      cardRef.current.getBoundingClientRect();

    mouseX.set(
      e.clientX - rect.left
    );

    mouseY.set(
      e.clientY - rect.top
    );
  };

  return (
    <motion.div
      ref={cardRef}
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
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
      }}
      onMouseMove={handleMouseMove}
      className="
      group
      relative

      overflow-hidden

      rounded-[32px]

      border
      border-white/50

      bg-white/70
      backdrop-blur-3xl

      p-8

      shadow-[0_20px_60px_rgba(0,0,0,0.06)]

      transition-all
      duration-500
    "
    >
      {/* ================= MOUSE GLOW ================= */}

      <motion.div
        className="
        absolute

        w-40
        h-40

        rounded-full

        bg-cyan-400/20

        blur-3xl

        pointer-events-none
      "
        style={{
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* ================= TOP ICON ================= */}

      <div
        className="
        relative
        z-10

        w-16
        h-16

        rounded-2xl

        bg-gradient-to-br
        from-cyan-500
        to-blue-500

        text-white

        flex
        items-center
        justify-center

        shadow-[0_10px_40px_rgba(6,182,212,0.25)]

        mb-8
      "
      >
        <stat.icon size={28} />
      </div>

      {/* ================= NUMBER ================= */}

      <h3
        className="
        relative
        z-10

        text-5xl
        lg:text-6xl

        font-black

        tracking-tight

        text-[color:var(--text-primary)]
      "
      >
        <Counter
          number={stat.number}
          suffix={stat.suffix}
        />
      </h3>

      {/* ================= LABEL ================= */}

      <p
        className="
        relative
        z-10

        mt-4

        text-[color:var(--text-primary)]
        text-lg

        font-medium
      "
      >
        {stat.label}
      </p>

      {/* ================= HOVER BORDER ================= */}

      <div
        className="
        absolute
        inset-0

        rounded-[32px]

        border
        border-cyan-400/0

        group-hover:border-cyan-400/30

        transition-all
        duration-500
      "
      />
    </motion.div>
  );
};

/* ================= MAIN COMPONENT ================= */

const TeamStats = () => {
  return (
    <section
      className="
      relative
      overflow-hidden

      py-28

      bg-[#F5F7FB]
    "
    >
      {/* ================= GRID ================= */}

     

      {/* ================= GLOW ================= */}

      <div
        className="
        absolute
        top-[-150px]
        left-[20%]

        w-[400px]
        h-[400px]

        rounded-full

        bg-cyan-500/10

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
      "
      >
        {/* ================= TOP ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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

          mb-20
        "
        >
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

            text-cyan-700
            text-sm
            font-semibold

            shadow-[0_10px_40px_rgba(6,182,212,0.06)]

            mb-8
          "
          >
            <Sparkles size={16} />

            Team Performance Metrics
          </div>

          <h2
            className="
            text-4xl
            sm:text-5xl
            lg:text-6xl

            font-black

            tracking-tight

            text-[color:var(--text-primary)]

            leading-tight
          "
          >
            Trusted By Startups,
            <br />

            <span
              className="
              bg-gradient-to-r
              from-cyan-600
              to-blue-600

              bg-clip-text
              text-transparent
            "
            >
              Enterprises & Founders.
            </span>
          </h2>

          <p
            className="
            mt-8

            text-lg
            leading-relaxed

            text-[color:var(--text-primary)]
          "
          >
            Our engineering systems are
            built for performance,
            scalability, and enterprise
            reliability worldwide.
          </p>
        </motion.div>

        {/* ================= STATS ================= */}

        <div
          className="
          grid
          sm:grid-cols-2
          lg:grid-cols-5

          gap-6
        "
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamStats;
