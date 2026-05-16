import { useMemo, useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Bookmark,
  BriefcaseBusiness,
  ChevronDown,
  Clock3,
  DollarSign,
  MapPin,
  Rocket,
  Sparkles,
  Laptop,
} from "lucide-react";

/* =========================================================
   JOB DATA
========================================================= */

const jobs = [
  {
    id: 1,
    role: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "Remote",
    mode: "Remote",
    salary: "$90k - $140k",
    experience: "4+ Years",
    posted: "2 days ago",

    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "AWS",
    ],

    description:
      "Build scalable SaaS platforms, AI workflows, cloud infrastructure, and high-performance frontend systems for global clients.",
  },

  {
    id: 2,
    role: "AI Product Engineer",
    department: "AI",
    location: "Berlin, Germany",
    mode: "Hybrid",
    salary: "$120k - $180k",
    experience: "5+ Years",

    posted: "1 week ago",

    tech: [
      "Python",
      "LLMs",
      "LangChain",
      "RAG",
    ],

    description:
      "Work on next-gen AI systems, automation workflows, intelligent copilots, and enterprise-grade AI infrastructure.",
  },

  {
    id: 3,
    role: "UI/UX Product Designer",
    department: "Design",
    location: "Remote",
    mode: "Remote",
    salary: "$70k - $110k",
    experience: "3+ Years",

    posted: "5 days ago",

    tech: [
      "Figma",
      "Framer",
      "Motion",
      "Design Systems",
    ],

    description:
      "Design premium user experiences, product systems, animations, and scalable design architectures.",
  },

  {
    id: 4,
    role: "Cloud & DevOps Engineer",
    department: "Infrastructure",
    location: "Toronto, Canada",
    mode: "Hybrid",
    salary: "$100k - $160k",
    experience: "4+ Years",

    posted: "3 days ago",

    tech: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
    ],

    description:
      "Manage deployment pipelines, scalable cloud systems, automation infrastructure, and enterprise DevOps operations.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const OpenPositions = () => {
  /* =========================================================
     STATES
  ========================================================= */

  const [activeId, setActiveId] =
    useState(null);

  const [bookmarks, setBookmarks] =
    useState([]);

  const [filters, setFilters] =
    useState({
      department: "All",
      mode: "All",
      experience: "All",
    });

  /* =========================================================
     FILTER
  ========================================================= */

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const departmentMatch =
        filters.department === "All" ||
        job.department ===
          filters.department;

      const modeMatch =
        filters.mode === "All" ||
        job.mode === filters.mode;

      const experienceMatch =
        filters.experience === "All" ||
        job.experience.includes(
          filters.experience
        );

      return (
        departmentMatch &&
        modeMatch &&
        experienceMatch
      );
    });
  }, [filters]);

  /* =========================================================
     BOOKMARK
  ========================================================= */

  const handleBookmark = (id) => {
    setBookmarks((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
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
      {/* =========================================================
          GRID
      ========================================================= */}

      <div
        className="
        absolute
        inset-0

        opacity-[0.04]

        [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]

        [background-size:80px_80px]
      "
      />

      {/* =========================================================
          BLUR
      ========================================================= */}

      <div
        className="
        absolute
        top-[-180px]
        left-[-100px]

        w-[450px]
        h-[450px]

        rounded-full

        bg-cyan-400/20

        blur-[120px]
      "
      />

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div
        className="
        relative
        z-10

        max-w-7xl
        mx-auto

        px-6
      "
      >
        {/* =========================================================
            TOP CONTENT
        ========================================================= */}

        <div
          className="
          flex
          flex-col
          lg:flex-row

          lg:items-end
          lg:justify-between

          gap-10
        "
        >
          {/* LEFT */}

          <div className="max-w-3xl">
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

              bg-cyan-500/10

              text-cyan-700
              text-sm
              font-semibold

              mb-8
            "
            >
              <Sparkles size={16} />

              Join Our Team
            </div>

            {/* HEADING */}

            <h2
              className="
              text-5xl
              md:text-6xl

              font-black

              leading-[1.05]

              text-white
            "
            >
              Open
              <span
                className="
                bg-gradient-to-r
                from-cyan-600
                to-blue-600

                bg-clip-text
                text-transparent
              "
              >
                {" "}
                Positions
              </span>
            </h2>

            {/* DESC */}

            <p
              className="
              mt-8

              text-lg
              leading-relaxed

              text-white/80
            "
            >
              Work with elite engineers,
              designers, and AI specialists
              building next-generation
              digital systems worldwide.
            </p>
          </div>

          {/* RIGHT */}

          <div
            className="
            flex
            flex-wrap

            gap-4
          "
          >
            {/* FILTER */}

            <select
              onChange={(e) =>
                setFilters({
                  ...filters,
                  department:
                    e.target.value,
                })
              }
              className="
              px-5
              py-4

              rounded-2xl

              border
              border-black/5

              bg-white/70
              backdrop-blur-xl

              text-sm
              font-medium

              outline-none
            "
            >
              <option>All</option>
              <option>Engineering</option>
              <option>AI</option>
              <option>Design</option>
              <option>
                Infrastructure
              </option>
            </select>

            {/* MODE */}

            <select
              onChange={(e) =>
                setFilters({
                  ...filters,
                  mode: e.target.value,
                })
              }
              className="
              px-5
              py-4

              rounded-2xl

              border
              border-black/5

              bg-white/70
              backdrop-blur-xl

              text-sm
              font-medium

              outline-none
            "
            >
              <option>All</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>

            {/* EXPERIENCE */}

            <select
              onChange={(e) =>
                setFilters({
                  ...filters,
                  experience:
                    e.target.value,
                })
              }
              className="
              px-5
              py-4

              rounded-2xl

              border
              border-black/5

              bg-white/70
              backdrop-blur-xl

              text-sm
              font-medium

              outline-none
            "
            >
              <option>All</option>
              <option>3+</option>
              <option>4+</option>
              <option>5+</option>
            </select>
          </div>
        </div>

        {/* =========================================================
            JOB GRID
        ========================================================= */}

        <div
          className="
          mt-20

          grid
          grid-cols-1
          xl:grid-cols-2

          gap-8
        "
        >
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
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
                y: -8,
              }}
              className="
              group
              relative

              overflow-hidden

              rounded-[32px]

              border
              border-white/60

              bg-white/65
              backdrop-blur-3xl

              shadow-[0_20px_80px_rgba(15,23,42,0.08)]

              transition-all
              duration-500
            "
            >
              {/* =========================================================
                  GLOW
              ========================================================= */}

              <div
                className="
                absolute
                inset-0

                opacity-0

                bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.18),transparent_60%)]

                transition-opacity
                duration-500

                group-hover:opacity-100
              "
              />

              {/* =========================================================
                  BORDER GLOW
              ========================================================= */}

              <div
                className="
                absolute
                inset-0

                rounded-[32px]

                border

                border-transparent

                group-hover:border-cyan-400/30

                transition-all
                duration-500
              "
              />

              {/* =========================================================
                  CONTENT
              ========================================================= */}

              <div
                className="
                relative
                z-10

                p-8
              "
              >
                {/* TOP */}

                <div
                  className="
                  flex
                  items-start
                  justify-between

                  gap-5
                "
                >
                  {/* LEFT */}

                  <div>
                    {/* ROLE */}

                    <h3
                      className="
                      text-3xl
                      font-bold

                      text-white
                    "
                    >
                      {job.role}
                    </h3>

                    {/* DEPARTMENT */}

                    <div
                      className="
                      mt-4

                      inline-flex
                      items-center
                      gap-2

                      px-4
                      py-2

                      rounded-full

                      bg-cyan-500/10

                      text-cyan-700
                      text-sm
                      font-semibold
                    "
                    >
                      <Rocket size={14} />

                      {job.department}
                    </div>
                  </div>

                  {/* BOOKMARK */}

                  <button
                    onClick={() =>
                      handleBookmark(
                        job.id
                      )
                    }
                    className={`
                      w-12
                      h-12

                      rounded-2xl

                      flex
                      items-center
                      justify-center

                      transition-all
                      duration-300

                      ${
                        bookmarks.includes(
                          job.id
                        )
                          ? `
                            bg-cyan-500
                            text-white
                          `
                          : `
                            bg-black/[0.04]
                            text-white
                          `
                      }
                    `}
                  >
                    <Bookmark
                      size={20}
                    />
                  </button>
                </div>

                {/* =========================================================
                    INFO
                ========================================================= */}

                <div
                  className="
                  mt-8

                  flex
                  flex-wrap

                  gap-4
                "
                >
                  {/* LOCATION */}

                  <div
                    className="
                    flex
                    items-center
                    gap-2

                    px-4
                    py-3

                    rounded-2xl

                    bg-black/[0.03]

                    text-sm
                    text-white/85
                  "
                  >
                    <MapPin size={16} />

                    {job.location}
                  </div>

                  {/* MODE */}

                  <div
                    className="
                    flex
                    items-center
                    gap-2

                    px-4
                    py-3

                    rounded-2xl

                    bg-black/[0.03]

                    text-sm
                    text-white/85
                  "
                  >
                    <Laptop size={16} />

                    {job.mode}
                  </div>

                  {/* SALARY */}

                  <div
                    className="
                    flex
                    items-center
                    gap-2

                    px-4
                    py-3

                    rounded-2xl

                    bg-black/[0.03]

                    text-sm
                    text-white/85
                  "
                  >
                    <DollarSign
                      size={16}
                    />

                    {job.salary}
                  </div>

                  {/* EXPERIENCE */}

                  <div
                    className="
                    flex
                    items-center
                    gap-2

                    px-4
                    py-3

                    rounded-2xl

                    bg-black/[0.03]

                    text-sm
                    text-white/85
                  "
                  >
                    <BriefcaseBusiness
                      size={16}
                    />

                    {job.experience}
                  </div>
                </div>

                {/* =========================================================
                    TECH STACK
                ========================================================= */}

                <div
                  className="
                  mt-8

                  flex
                  flex-wrap

                  gap-3
                "
                >
                  {job.tech.map(
                    (
                      tech,
                      techIndex
                    ) => (
                      <div
                        key={techIndex}
                        className="
                        px-4
                        py-2

                        rounded-full

                        border
                        border-cyan-500/10

                        bg-cyan-500/5

                        text-sm
                        font-medium

                        text-cyan-700
                      "
                      >
                        {tech}
                      </div>
                    )
                  )}
                </div>

                {/* =========================================================
                    FOOTER
                ========================================================= */}

                <div
                  className="
                  mt-10

                  flex
                  flex-col
                  md:flex-row

                  md:items-center
                  md:justify-between

                  gap-6
                "
                >
                  {/* POSTED */}

                  <div
                    className="
                    flex
                    items-center
                    gap-2

                    text-sm
                    text-white/70
                  "
                  >
                    <Clock3
                      size={16}
                    />

                    Posted {job.posted}
                  </div>

                  {/* BUTTONS */}

                  <div
                    className="
                    flex
                    items-center

                    gap-4
                  "
                  >
                    {/* DETAILS */}

                    <button
                      onClick={() =>
                        setActiveId(
                          activeId ===
                            job.id
                            ? null
                            : job.id
                        )
                      }
                      className="
                      flex
                      items-center
                      gap-2

                      px-5
                      py-3

                      rounded-2xl

                      bg-black/[0.04]

                      font-semibold

                      text-white

                      hover:bg-cyan-500/10

                      transition-all
                      duration-300
                    "
                    >
                      Details

                      <motion.div
                        animate={{
                          rotate:
                            activeId ===
                            job.id
                              ? 180
                              : 0,
                        }}
                      >
                        <ChevronDown
                          size={18}
                        />
                      </motion.div>
                    </button>

                    {/* APPLY */}

                    <button
                      className="
                      group

                      px-6
                      py-3

                      rounded-2xl

                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-500

                      text-white
                      font-semibold

                      shadow-[0_10px_40px_rgba(6,182,212,0.35)]

                      hover:scale-105

                      transition-all
                      duration-300
                    "
                    >
                      Quick Apply
                    </button>
                  </div>
                </div>

                {/* =========================================================
                    EXPANDABLE DETAILS
                ========================================================= */}

                <AnimatePresence>
                  {activeId ===
                    job.id && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      className="
                      overflow-hidden
                    "
                    >
                      <div
                        className="
                        mt-8
                        pt-8

                        border-t
                        border-black/5
                      "
                      >
                        <p
                          className="
                          text-white/80
                          leading-relaxed
                        "
                        >
                          {
                            job.description
                          }
                        </p>

                        {/* EXTRA */}

                        <div
                          className="
                          mt-6

                          flex
                          flex-wrap

                          gap-3
                        "
                        >
                          <div
                            className="
                            px-4
                            py-2

                            rounded-full

                            bg-green-500/10

                            text-green-700
                            text-sm
                            font-medium
                          "
                          >
                            Equity Available
                          </div>

                          <div
                            className="
                            px-4
                            py-2

                            rounded-full

                            bg-blue-500/10

                            text-blue-700
                            text-sm
                            font-medium
                          "
                          >
                            Async Workflow
                          </div>

                          <div
                            className="
                            px-4
                            py-2

                            rounded-full

                            bg-cyan-500/10

                            text-cyan-700
                            text-sm
                            font-medium
                          "
                          >
                            AI Tooling
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
