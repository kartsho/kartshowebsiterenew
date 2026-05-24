import { Link } from "react-router-dom";

import { ArrowRight, BadgeCheck, CalendarDays, Layers3 } from "lucide-react";

import { liveProjectStats, liveProjects } from "../../data/liveProjectsData";

const LiveProjects = () => {
  return (
    <main className="bg-[color:var(--page-bg)]">
      <section className="relative overflow-hidden py-28">
        <div className="absolute top-[-180px] right-[-180px] h-[420px] w-[420px] rounded-full bg-cyan-200/20 blur-3xl" />
        <div className="absolute bottom-[-180px] left-[-180px] h-[360px] w-[360px] rounded-full bg-blue-200/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-2 text-sm font-semibold text-cyan-500 backdrop-blur-xl">
              <BadgeCheck size={16} />
              Live Projects
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-[color:var(--text-primary)] md:text-6xl">
              What We Are Building Right Now
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[color:var(--text-secondary)]">
              This page shows the active live projects across Kartsho, including project
              names, short descriptions, and the team members currently working on each
              build.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {liveProjectStats.map((item) => (
              <div
                key={item.label}
                className="rounded-[28px] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-2xl"
              >
                <p className="text-sm text-[color:var(--text-secondary)]">{item.label}</p>
                <h2 className="mt-3 text-4xl font-black text-[color:var(--text-primary)]">
                  {item.value}
                </h2>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {liveProjects.map((project, index) => (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-[34px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-8 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur-3xl transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl" />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-500">
                      {project.venture}
                    </p>
                    <h2 className="mt-3 text-2xl font-black text-[color:var(--text-primary)]">
                      {project.title}
                    </h2>
                  </div>

                  <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-500">
                    {project.status}
                  </span>
                </div>

                <p className="relative z-10 mt-5 text-[color:var(--text-secondary)]">
                  {project.description}
                </p>

                <div className="relative z-10 mt-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[color:var(--text-primary)]">
                    <Layers3 size={16} className="text-cyan-500" />
                    Tech Stack
                  </div>

                  <div className="mt-3 flex flex-wrap gap-3">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-sm text-[color:var(--text-primary)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[color:var(--text-primary)]">
                    <CalendarDays size={16} className="text-cyan-500" />
                    Team Working On It
                  </div>

                  <div className="mt-4 space-y-3">
                    {project.team.map((member) => (
                      <div
                        key={`${project.id}-${member.name}`}
                        className="rounded-[20px] border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3"
                      >
                        <p className="font-semibold text-[color:var(--text-primary)]">
                          {member.name}
                        </p>
                        <p className="text-sm text-[color:var(--text-secondary)]">
                          {member.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 font-semibold text-white transition-transform duration-300 hover:scale-105"
                  >
                    Talk About This Project
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default LiveProjects;
