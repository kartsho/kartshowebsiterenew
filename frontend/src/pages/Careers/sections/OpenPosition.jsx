import { useEffect, useMemo, useState } from "react";

import axios from "axios";

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
  Loader2,
  CheckCircle2,
  AlertCircle,
  X,
} from "lucide-react";

import { useTheme } from "../../../context/ThemeContext";
import API_URL from "../../../config/api";

/* =========================================================
   JOB DATA
========================================================= */

const jobs = [
  {
    id: 1,
    role: "Business Development Executive (BDE)",
    department: "Sales & Growth",
    location: "Remote",
    mode: "Remote",
    salary: "10% Commission / Project Basis",
    experience: "Freshers / Experienced",
    posted: "Just Now",
    tech: [
      "Client Acquisition",
      "Digital Marketing Sales",
      "Lead Generation",
      "Negotiation"
    ],
    description:
      "Drive growth and expand Kartsho's digital footprint. You will be at the forefront of client acquisition, representing our innovative portfolio of digital marketing, legal tech, and educational solutions while earning performance-based incentives."
  },
  {
    id: 2,
    role: "Full Stack Developer Intern",
    department: "Engineering / Tech",
    location: "Remote",
    mode: "Remote",
    salary: "Unpaid / Stipend (Performance Based)",
    experience: "0+ Years (Freshers)",
    posted: "1 day ago",
    tech: [
      "React",
      "Node.js",
      "Database Architecture",
      "Full Stack Web"
    ],
    description:
      "Join our core product team to build and scale end-to-end web applications. You will take ownership of features from database architecture to user interface, driving innovation across Kartsho's tech ecosystem."
  },
  {
    id: 3,
    role: "Backend Developer Intern",
    department: "Engineering",
    location: "Remote",
    mode: "Remote",
    salary: "Unpaid / Stipend (Performance Based)",
    experience: "0+ Years (Freshers)",
    posted: "2 days ago",
    tech: [
      "Node.js",
      "Python",
      "APIs",
      "Database Management"
    ],
    description:
      "Join our core tech team to architect and build scalable backend systems that power Kartsho’s digital ventures. You'll work on robust APIs, database structures, and high-performance server logic."
  },
  {
    id: 4,
    role: "App Development Intern",
    department: "Mobile Engineering",
    location: "Remote",
    mode: "Remote",
    salary: "Unpaid / Stipend (Performance Based)",
    experience: "0+ Years (Freshers)",
    posted: "3 days ago",
    tech: [
      "Flutter",
      "React Native",
      "iOS Development",
      "Android Development"
    ],
    description:
      "Dive into the world of mobile engineering. You will help build seamless, cross-platform mobile applications for iOS and Android using modern frameworks like Flutter and React Native."
  },
  {
    id: 5,
    role: "Graphic Design Intern",
    department: "Design",
    location: "Remote",
    mode: "Remote",
    salary: "Unpaid / Stipend (Performance Based)",
    experience: "0+ Years (Freshers)",
    posted: "4 days ago",
    tech: [
      "Figma",
      "Photoshop",
      "Premium Branding",
      "Social Media Creatives"
    ],
    description:
      "Apply for Graphic Design Internship at Kartsho Ecosystem. Work on premium branding, social media creatives, and digital assets under expert mentorship."
  }
];

const emptyFormData = {
  fullName: "",
  email: "",
  phone: "",
  course: "",
  branch: "",
};

/* =========================================================
   COMPONENT
========================================================= */

const OpenPositions = () => {
  const { isDark } = useTheme();

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

  const [openModal, setOpenModal] =
    useState(false);

  const [selectedJob, setSelectedJob] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState(emptyFormData);

  const [resume, setResume] =
    useState(null);

  const [toast, setToast] =
    useState(null);

  const selectClass =
    "px-5 py-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] text-sm font-medium text-[color:var(--text-primary)] outline-none backdrop-blur-xl transition focus:border-cyan-400/60";

  const pillClass =
    "flex items-center gap-2 px-4 py-3 rounded-2xl bg-[color:var(--surface-strong)] text-sm text-[color:var(--text-secondary)]";

  const inputClass =
    "w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 py-4 text-[color:var(--text-primary)] outline-none transition placeholder:text-[color:var(--text-muted)] focus:border-cyan-400 focus:bg-[color:var(--surface)]";

  const toastClass =
    toast?.type === "success"
      ? isDark
        ? "border-emerald-400/30 bg-emerald-950/95 text-emerald-100"
        : "border-emerald-200 bg-emerald-50/95 text-emerald-900"
      : isDark
        ? "border-rose-400/30 bg-rose-950/95 text-rose-100"
        : "border-rose-200 bg-rose-50/95 text-rose-900";

  useEffect(() => {
    if (!toast) {
      return undefined;
    }

    const timer = setTimeout(() => {
      setToast(null);
    }, 3500);

    return () => clearTimeout(timer);
  }, [toast]);

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

  const handleOpenApply = (job) => {
    setSelectedJob(job);
    setFormData(emptyFormData);
    setResume(null);
    setToast(null);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    if (loading) {
      return;
    }

    setOpenModal(false);
    setSelectedJob(null);
    setFormData(emptyFormData);
    setResume(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedJob) {
      return;
    }

    try {
      setLoading(true);
      setToast(null);

      const data = new FormData();

      data.append(
        "fullName",
        formData.fullName.trim()
      );
      data.append(
        "email",
        formData.email.trim()
      );
      data.append(
        "phone",
        formData.phone.trim()
      );
      data.append(
        "course",
        formData.course.trim()
      );
      data.append(
        "branch",
        formData.branch.trim()
      );
      data.append("role", selectedJob.role);

      if (resume) {
        data.append("resume", resume);
      }

      const response = await axios.post(
        `${API_URL}/api/careers/apply`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setToast({
        type: "success",
        message:
          response?.data?.message ||
          "Application submitted successfully",
      });

      setOpenModal(false);
      setSelectedJob(null);
      setFormData(emptyFormData);
      setResume(null);
    } catch (error) {
      console.error("API Error:", error);
      console.error(
        "Response:",
        error.response?.data
      );

      setToast({
        type: "error",
        message:
          error?.response?.data?.message ||
          error?.message ||
          "Application Failed",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResumeChange = (e) => {
    const file = e.target.files?.[0] || null;

    if (!file) {
      setResume(null);
      return;
    }

    if (file.type !== "application/pdf") {
      setToast({
        type: "error",
        message: "Please upload a PDF resume only.",
      });
      e.target.value = "";
      setResume(null);
      return;
    }

    setResume(file);
  };

  return (
    <section
      className="
      relative
      overflow-hidden

      bg-[color:var(--page-bg)]

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

        [background-image:linear-gradient(to_right,rgba(15,23,42,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.18)_1px,transparent_1px)]
        [data-theme=dark]:[background-image:linear-gradient(to_right,rgba(226,232,240,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(226,232,240,0.16)_1px,transparent_1px)]

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
              [data-theme=dark]:text-cyan-200
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

              text-[color:var(--text-primary)]
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

              text-[color:var(--text-secondary)]
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
              className={selectClass}
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
              className={selectClass}
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
              className={selectClass}
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
              border-[color:var(--border)]

              bg-[color:var(--surface)]
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

                      text-[color:var(--text-primary)]
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
                            bg-[color:var(--surface-strong)]
                            text-[color:var(--text-primary)]
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
                    className={pillClass}
                  >
                    <MapPin size={16} />

                    {job.location}
                  </div>

                  {/* MODE */}

                  <div
                    className={pillClass}
                  >
                    <Laptop size={16} />

                    {job.mode}
                  </div>

                  {/* SALARY */}

                  <div
                    className={pillClass}
                  >
                    <DollarSign
                      size={16}
                    />

                    {job.salary}
                  </div>

                  {/* EXPERIENCE */}

                  <div
                    className={pillClass}
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
                        [data-theme=dark]:text-cyan-200
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
                    text-[color:var(--text-muted)]
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

                      bg-[color:var(--surface-strong)]

                      font-semibold

                      text-[color:var(--text-primary)]

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
                      onClick={() =>
                        handleOpenApply(job)
                      }
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
                      Apply
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
                        border-[color:var(--border)]
                      "
                      >
                        <p
                          className="
                          text-[color:var(--text-secondary)]
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

                            bg-emerald-500/10

                            text-emerald-700
                            [data-theme=dark]:text-emerald-200
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
                            [data-theme=dark]:text-blue-200
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
                            [data-theme=dark]:text-cyan-200
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

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 12,
              scale: 0.96,
            }}
            className={`
              fixed
              top-6
              right-6
              z-[10000]

              w-[calc(100vw-2rem)]
              max-w-md

              rounded-2xl
              border
              shadow-[0_20px_60px_rgba(15,23,42,0.18)]
              backdrop-blur-xl
              px-5
              py-4

              ${toastClass}
            `}
          >
            <div className="flex items-start gap-3">
              {toast.type === "success" ? (
                <CheckCircle2
                  className="mt-0.5"
                  size={20}
                />
              ) : (
                <AlertCircle
                  className="mt-0.5"
                  size={20}
                />
              )}

              <div className="flex-1">
                <p className="font-semibold">
                  {toast.type === "success"
                    ? "Success"
                    : "Something went wrong"}
                </p>

                <p className="mt-1 text-sm leading-relaxed opacity-90">
                  {toast.message}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setToast(null)}
                className="rounded-full p-1 transition hover:bg-black/5 dark:hover:bg-white/10"
                aria-label="Close notification"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
              className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-slate-950/75
              p-4
              backdrop-blur-sm
            "
          >
            <motion.div
              initial={{
                scale: 0.96,
                opacity: 0,
                y: 18,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.96,
                opacity: 0,
                y: 18,
              }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="
                w-full
                max-w-2xl
                overflow-hidden
                rounded-[32px]
                border
                border-[color:var(--border)]
                bg-[color:var(--surface)]
                shadow-[0_30px_120px_rgba(15,23,42,0.25)]
              "
            >
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-6 text-white">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                      Quick Apply
                    </p>

                    <h2 className="mt-2 text-3xl font-black leading-tight">
                      Apply for{" "}
                      <span className="text-white/90">
                        {selectedJob?.role}
                      </span>
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={handleCloseModal}
                    disabled={loading}
                    className="rounded-full bg-white/15 p-2 transition hover:bg-white/25 disabled:cursor-not-allowed disabled:opacity-60"
                    aria-label="Close modal"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 px-8 py-8"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className={inputClass}
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fullName: e.target.value,
                      })
                    }
                  />

                  <input
                    type="email"
                    required
                    placeholder="Email"
                    className={inputClass}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                  />

                  <input
                    type="text"
                    required
                    placeholder="Phone Number"
                    className={inputClass}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                  />

                  <input
                    type="text"
                    required
                    placeholder="Course"
                    className={inputClass}
                    value={formData.course}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        course: e.target.value,
                      })
                    }
                  />
                </div>

                <input
                  type="text"
                  required
                  placeholder="Branch"
                  className={inputClass}
                  value={formData.branch}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      branch: e.target.value,
                    })
                  }
                />

                <div className="rounded-2xl border border-dashed border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 py-4">
                  <label className="mb-2 block text-sm font-semibold text-[color:var(--text-primary)]">
                    Resume PDF
                  </label>

                  <input
                    type="file"
                    accept=".pdf,application/pdf"
                    required
                    className="block w-full cursor-pointer rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text-secondary)] file:mr-4 file:rounded-full file:border-0 file:bg-cyan-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-cyan-600"
                    onChange={handleResumeChange}
                  />

                  <p className="mt-2 text-xs text-[color:var(--text-muted)]">
                    PDF only, max 5 MB.
                    {resume ? (
                      <span className="ml-2 font-semibold text-[color:var(--text-primary)]">
                        Selected: {resume.name}
                      </span>
                    ) : null}
                  </p>
                </div>

                <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:items-center sm:justify-end">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    disabled={loading}
                    className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-6 py-3 font-semibold text-[color:var(--text-primary)] transition hover:bg-black/[0.03] dark:hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(6,182,212,0.3)] transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {loading ? (
                      <>
                        <Loader2
                          size={18}
                          className="animate-spin"
                        />
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OpenPositions;
