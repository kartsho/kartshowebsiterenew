import {
  Globe,
  LayoutDashboard,
  ShoppingCart,
  Sparkles,
  Bot,
  PanelsTopLeft,
  Briefcase,
  Workflow,
  Dumbbell,
  HeartPulse,
  Building2,
  Plane,
  GraduationCap,
  School,
  ArrowRight,
  Truck,
  UtensilsCrossed,
} from "lucide-react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
    {
    title: "Gym Websites",
    icon: Dumbbell,
    description:
      "Modern fitness websites with membership systems, trainers, schedules, and online coaching.",
  },

  {
    title: "Hospital Websites",
    icon: HeartPulse,
    description:
      "Professional healthcare platforms with appointments, doctors, and patient services.",
  },

  {
    title: "Rental Websites",
    icon: Building2,
    description:
      "Property rental systems with booking, listings, payments, and admin dashboards.",
  },
   {
    title: "Real Estate Websites",
    icon: Building2,
    description:
      "Property websites with listings, agent profiles, filters, and lead capture systems.",
  },
   {
    title: "Transport Websites",
    icon: Truck,
    description:
      "Fleet and logistics platforms with vehicle listings, route planning, and trip management.",
  },

  {
    title: "Restaurant Websites",
    icon: UtensilsCrossed,
    description:
      "Restaurant platforms with menus, reservations, online ordering, and loyalty features.",
  },

  {
    title: "Travel & Tour Websites",
    icon: Plane,
    description:
      "Luxury travel platforms with destination showcases, booking systems, and tour packages.",
  },

  {
    title: "School Websites",
    icon: School,
    description:
      "Interactive school portals with notices, admissions, events, and student systems.",
  },

  {
    title: "College Websites",
    icon: GraduationCap,
    description:
      "Enterprise-grade university websites with departments, courses, portals, and admissions.",
  },
  {
    title: "Corporate Websites",
    icon: Globe,
    description:
      "Premium high-converting company websites built for authority and trust.",
  },

  {
    title: "SaaS Platforms",
    icon: LayoutDashboard,
    description:
      "Scalable SaaS applications engineered for modern startups and enterprises.",
  },

  {
    title: "AI Applications",
    icon: Bot,
    description:
      "AI-powered systems, automations, copilots, and intelligent workflows.",
  },

  {
    title: "E-Commerce Stores",
    icon: ShoppingCart,
    description:
      "Lightning-fast online stores optimized for conversions and growth.",
  },

  {
    title: "Portfolio Websites",
    icon: Briefcase,
    description:
      "Modern animated portfolio experiences with premium interactions.",
  },

  {
    title: "Dashboards",
    icon: PanelsTopLeft,
    description:
      "Data-rich admin dashboards with analytics and real-time systems.",
  },

  {
    title: "Landing Pages",
    icon: Sparkles,
    description:
      "Conversion-focused landing pages for products, startups, and campaigns.",
  },

  {
    title: "Automation Systems",
    icon: Workflow,
    description:
      "Business automations and AI workflows that save time and scale operations.",
  },
];

const WhatWeBuild = () => {
  const navigate = useNavigate();

const openServicePage = (
  serviceTitle,
  section = "pricing"
) => {
  let targetPath = null;

  switch (serviceTitle) {
    case "Gym Websites":
      targetPath = "/services/gym-website";
      break;

    case "School Websites":
      targetPath = "/services/school-website";
      break;

    case "Hospital Websites":
      targetPath = "/services/hospital-website";
      break;

    case "Rental Websites":
      targetPath = "/services/rental-website";
      break;

    case "Real Estate Websites":
      targetPath = "/services/real-estate-website";
      break;

    case "Transport Websites":
      targetPath = "/services/transport-website";
      break;

    case "Restaurant Websites":
      targetPath = "/services/restaurant-website";
      break;

    case "Travel & Tour Websites":
      targetPath = "/services/travel-website";
      break;

    case "College Websites":
      targetPath = "/services/college-website";
      break;

    default:
      targetPath = "/services";
  }

  if (section) {
    navigate(`${targetPath}#${section}`);
    return;
  }

  navigate(targetPath);
};

  return (
    <section
      className="
      relative
      overflow-hidden

      bg-[#F5F7FB]

      py-32
    "
    >
      {/* ================= GRID ================= */}

      <div
        className="
        absolute
        inset-0

        opacity-[0.04]

        [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]

        [background-size:70px_70px]
      "
      />

      {/* ================= GLOW ================= */}

      <div
        className="
        absolute
        top-[-200px]
        left-[-150px]

        w-[450px]
        h-[450px]

        rounded-full

        bg-cyan-500/20

        blur-[120px]
      "
      />

      <div
        className="
        absolute
        bottom-[-200px]
        right-[-150px]

        w-[450px]
        h-[450px]

        rounded-full

        bg-blue-500/20

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

        <div
          className="
          text-center

          max-w-4xl
          mx-auto
        "
        >
          {/* TAG */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="
            inline-flex
            items-center
            gap-2

            px-5
            py-3

            rounded-full

            border
            border-cyan-500/20

            bg-cyan-500/10

            text-cyan-700
            text-sm
            font-semibold

            mb-8
          "
          >
            <Sparkles size={16} />

            What We Build
          </motion.div>

          {/* HEADING */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="
            text-5xl
            lg:text-6xl

            font-black

            leading-[1.05]

            tracking-tight

            text-[#0B0F19]
          "
          >
            Digital Products
            <br />

            Built For
            <span
              className="
              bg-gradient-to-r
              from-cyan-500
              to-blue-500

              bg-clip-text
              text-transparent
            "
            >
              {" "}
              Scale.
            </span>
          </motion.h2>

          {/* DESC */}

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            viewport={{ once: true }}
            className="
            mt-8

            text-lg
            leading-relaxed

            text-gray-600
          "
          >
            We design and engineer
            modern digital systems for
            startups, enterprises, AI
            companies, gyms, hospitals,
            schools, travel brands, and
            ambitious businesses worldwide.
          </motion.p>
        </div>

        {/* ================= CARDS ================= */}

        <div
          className="
          mt-24

          grid
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4

          gap-8
        "
        >
          {services.map(
            (service, index) => {
              const Icon =
                service.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay:
                      index * 0.05,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -12,
                    rotateX: 5,
                    rotateY: -5,
                  }}
                  className="
                  group

                  relative

                  overflow-hidden

                  rounded-[32px]

                  border
                  border-white/40

                  bg-white/70
                  backdrop-blur-3xl

                  p-7

                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]

                  transition-all
                  duration-500
                "
                  style={{
                    transformStyle:
                      "preserve-3d",
                  }}
                >
                  {/* SPOTLIGHT */}

                  <div
                    className="
                    absolute
                    inset-0

                    opacity-0

                    bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_70%)]

                    transition-opacity
                    duration-500

                    group-hover:opacity-100
                  "
                  />

                  {/* BORDER */}

                  <div
                    className="
                    absolute
                    inset-0

                    rounded-[32px]

                    border
                    border-cyan-400/0

                    group-hover:border-cyan-400/40

                    transition-all
                    duration-500
                  "
                  />

                  {/* BLUR */}

                  <div
                    className="
                    absolute
                    -top-16
                    -right-16

                    w-40
                    h-40

                    rounded-full

                    bg-cyan-400/10

                    blur-3xl

                    opacity-0

                    group-hover:opacity-100

                    transition-all
                    duration-700
                  "
                  />

                  {/* ICON */}

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

                    flex
                    items-center
                    justify-center

                    text-white

                    shadow-[0_15px_40px_rgba(6,182,212,0.35)]

                    group-hover:scale-110
                    group-hover:rotate-6

                    transition-all
                    duration-500
                  "
                  >
                    <Icon size={30} />
                  </div>

                  {/* CONTENT */}

                  <div
                    className="
                    relative
                    z-10
                  "
                  >
                    <h3
                      className="
                      mt-8

                      text-2xl
                      font-bold

                      text-[#0B0F19]

                      group-hover:text-cyan-600

                      transition-all
                      duration-300
                    "
                    >
                      {service.title}
                    </h3>

                    <p
                      className="
                      mt-4

                      text-gray-600
                      leading-relaxed

                      min-h-[110px]
                    "
                    >
                      {
                        service.description
                      }
                    </p>
                  </div>

                  {/* BUTTONS */}

                  <div
                    className="
                    relative
                    z-10

                    mt-8

                    flex
                    items-center
                    gap-3
                  "
                  >
                    {/* VIEW FEATURES */}

                   <button
  type="button"
  onClick={() =>
    openServicePage(
      service.title,
      service.title === "School Websites"
        ? "features"
        : "pricing"
    )
  }
  className="
  flex-1

  py-3
  px-4

  rounded-2xl

  bg-gradient-to-r
  from-cyan-500
  to-blue-500

  text-white
  font-semibold
  text-sm

  shadow-[0_10px_30px_rgba(6,182,212,0.25)]

  hover:scale-[1.03]

  transition-all
  duration-300
"
>
  View Features
</button>

                    {/* VIEW PRICING */}

                   <button
  type="button"
  onClick={() =>
    openServicePage(service.title, "pricing")
  }
  className="
  flex
  items-center
  justify-center
  gap-2

  px-4
  py-3

  rounded-2xl

  border
  border-black/10

  bg-white/60

  text-[#0B0F19]
  font-semibold
  text-sm

  hover:border-cyan-400/30
  hover:text-cyan-600

  transition-all
  duration-300
"
>
  Pricing

  <ArrowRight size={16} />
</button>
                  </div>

                  {/* LINE */}

                  <div
                    className="
                    relative
                    z-10

                    mt-7

                    h-[2px]

                    overflow-hidden

                    rounded-full

                    bg-black/5
                  "
                  >
                    <div
                      className="
                      h-full
                      w-0

                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-500

                      group-hover:w-full

                      transition-all
                      duration-700
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

export default WhatWeBuild;
