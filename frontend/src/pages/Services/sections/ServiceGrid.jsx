import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  Bot,
  Cloud,
  Shield,
  Code2,
  Smartphone,
  Database,
  ArrowRight,
  LayoutDashboard,
} from "lucide-react";

const services = [
  {
    icon: <Bot size={34} />,
    title: "AI Development",
    desc: "Custom AI solutions, automation systems, intelligent chatbots, and enterprise AI workflows.",
  },

  {
    icon: <LayoutDashboard size={34} />,
    title: "SaaS Platforms",
    desc: "Modern scalable SaaS platforms with dashboards, billing systems, analytics, and subscriptions.",
  },

  {
    icon: <Cloud size={34} />,
    title: "Cloud Infrastructure",
    desc: "Secure cloud architecture, deployment pipelines, scaling systems, and cloud optimization.",
  },

  {
    icon: <Code2 size={34} />,
    title: "Web Development",
    desc: "Premium web applications with enterprise performance, animations, and scalable backend systems.",
    path: "/services/web-development",
  },

  {
    icon: <Smartphone size={34} />,
    title: "Mobile Apps",
    desc: "Cross-platform mobile applications with premium UI/UX and enterprise-grade architecture.",
  },

  {
    icon: <Database size={34} />,
    title: "Data Engineering",
    desc: "Database systems, analytics pipelines, scalable storage, and enterprise data solutions.",
  },

  {
    icon: <Shield size={34} />,
    title: "Cyber Security",
    desc: "Advanced security systems, encrypted infrastructure, authentication, and enterprise protection.",
  },

  {
    icon: <Cloud size={34} />,
    title: "DevOps Solutions",
    desc: "CI/CD pipelines, Docker infrastructure, Kubernetes deployment, and server optimization.",
  },
];

const ServicesGrid = () => {
  return (
    <section
      id="services-grid"
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
        top-[-100px]
        right-[-100px]

        w-[350px]
        h-[350px]

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

        w-[300px]
        h-[300px]

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
            y: 50,
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
          text-center

          max-w-3xl
          mx-auto

          mb-20
        "
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
            Enterprise Services
          </div>

          {/* HEADING */}

          <h2
            className="
            text-4xl
            md:text-6xl

            font-bold

            leading-tight

            text-[#0B0F19]

            mb-6
          "
          >
            Scalable Digital
            Solutions For
            Modern Businesses
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            text-lg

            text-gray-600

            leading-relaxed
          "
          >
            We deliver enterprise-grade digital
            products, cloud systems, AI platforms,
            and scalable software solutions built
            for startups and global companies.
          </p>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}

        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-4

          gap-8
        "
        >
          {services.map((service, index) => (
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
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
              group
              relative

              overflow-hidden

              rounded-[32px]

              bg-white/70

              backdrop-blur-xl

              border
              border-black/5

              p-8

              transition-all
              duration-500

              hover:-translate-y-3

              hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
            "
            >
              {/* SPOTLIGHT HOVER */}

              <div
                className="
                absolute
                inset-0

                opacity-0
                group-hover:opacity-100

                transition-opacity
                duration-500

                bg-gradient-to-br
                from-cyan-100/40
                via-transparent
                to-transparent
              "
              />

              {/* GLOW BORDER */}

              <div
                className="
                absolute
                inset-0

                rounded-[32px]

                border
                border-cyan-200/0

                group-hover:border-cyan-300/40

                transition-all
                duration-500
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

                bg-cyan-100

                flex
                items-center
                justify-center

                text-cyan-600

                mb-8

                transition-all
                duration-500

                group-hover:scale-110
                group-hover:rotate-3
              "
              >
                {service.icon}
              </div>

              {/* TITLE */}

              <h3
                className="
                relative
                z-10

                text-2xl

                font-bold

                text-[#0B0F19]

                mb-5
              "
              >
                {service.title}
              </h3>

              {/* DESCRIPTION */}

              <p
                className="
                relative
                z-10

                text-gray-600

                leading-relaxed

                mb-8
              "
              >
                {service.desc}
              </p>

              {/* BUTTON */}

              <Link
                to={service.path || "/services"}
                className="
                relative
                z-10

                flex
                items-center
                gap-3

                text-cyan-600
                font-semibold

                group/btn
              "
              >
                Learn More

                <ArrowRight
                  size={18}
                  className="
                  transition-transform
                  duration-300

                  group-hover/btn:translate-x-1
                "
                />
              </Link>

              {/* HOVER GLOW */}

              <div
                className="
                absolute
                -bottom-20
                -right-20

                w-40
                h-40

                rounded-full

                bg-cyan-200/30

                blur-3xl

                opacity-0

                group-hover:opacity-100

                transition-all
                duration-700
              "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
