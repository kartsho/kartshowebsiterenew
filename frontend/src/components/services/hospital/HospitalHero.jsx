import { motion } from "framer-motion";

import {
  ArrowRight,
  CalendarCheck2,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const trustPills = [
  "Appointment Booking",
  "Doctor Profiles",
  "Patient Portal",
  "Secure Records",
];

const statCards = [
  { value: "24/7", label: "Appointment access", className: "top-8 left-0 lg:left-10" },
  { value: "180+", label: "Patients served", className: "top-28 right-0 lg:right-8" },
  { value: "98%", label: "Trust score", className: "bottom-28 left-0" },
  { value: "30+", label: "Doctor sessions", className: "bottom-8 right-10" },
];

const scrollToPricing = () => {
  if (typeof document === "undefined") return;

  document.getElementById("pricing")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const HospitalHero = () => {
  return (
    <section className="service-hero relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F5F7FB] via-[#EEF7FF] to-[#F0FBF8] flex items-center pt-32 pb-24">
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:70px_70px]" />
      <div className="absolute top-[-160px] left-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-[130px]" />
      <div className="absolute bottom-[-200px] right-[-120px] h-[460px] w-[460px] rounded-full bg-blue-400/15 blur-[150px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/15 bg-white/75 px-5 py-3 text-sm font-semibold text-cyan-700 shadow-[0_10px_40px_rgba(6,182,212,0.08)] backdrop-blur-xl"
          >
            <Sparkles size={16} />
            Hospital Website Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-black leading-[1] tracking-tight text-[#0B0F19] sm:text-6xl lg:text-7xl"
          >
            Build A
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Powerful Hospital
            </span>
            Digital Ecosystem.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600"
          >
            Patient-friendly hospital websites, appointment journeys, doctor profiles, and secure
            healthcare workflows designed for modern clinics and multi-specialty hospitals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05 }}
            className="mt-12 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-5"
          >
            <button
              type="button"
              onClick={scrollToPricing}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-5 font-semibold text-white shadow-[0_20px_60px_rgba(6,182,212,0.28)] transition-all duration-500 hover:scale-105 sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-3">
                View Pricing
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </button>

            <button
              type="button"
              onClick={scrollToPricing}
              className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white/75 px-7 py-5 font-semibold text-[#0B0F19] shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/20 hover:bg-white hover:text-cyan-700 sm:w-auto"
            >
              <Stethoscope size={18} />
              Book Demo
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1 }} className="mt-14 flex flex-wrap justify-center gap-4 sm:justify-start">
            {trustPills.map((pill) => (
              <div key={pill} className="rounded-full border border-black/5 bg-white/70 px-5 py-3 text-sm font-medium text-gray-700 shadow-[0_8px_24px_rgba(15,23,42,0.04)] backdrop-blur-xl">
                {pill}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative hidden h-[700px] items-center justify-center lg:flex">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute h-[620px] w-[620px] rounded-full border border-dashed border-cyan-500/10"
          >
            <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-500/15 bg-white/80 text-cyan-600 shadow-[0_12px_30px_rgba(6,182,212,0.12)] backdrop-blur-xl">
              <HeartPulse size={28} />
            </div>
            <div className="absolute right-0 top-1/2 flex h-16 w-16 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-blue-500/15 bg-white/80 text-blue-600 shadow-[0_12px_30px_rgba(59,130,246,0.12)] backdrop-blur-xl">
              <CalendarCheck2 size={28} />
            </div>
            <div className="absolute bottom-0 left-1/2 flex h-16 w-16 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border border-cyan-500/15 bg-white/80 text-cyan-600 shadow-[0_12px_30px_rgba(6,182,212,0.12)] backdrop-blur-xl">
              <ShieldCheck size={28} />
            </div>
            <div className="absolute left-0 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-500/15 bg-white/80 text-blue-600 shadow-[0_12px_30px_rgba(59,130,246,0.12)] backdrop-blur-xl">
              <Stethoscope size={28} />
            </div>
          </motion.div>

          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity }} className="relative h-[540px] w-[420px] overflow-hidden rounded-[40px] border border-white/70 bg-white/80 shadow-[0_30px_120px_rgba(15,23,42,0.12)] backdrop-blur-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10" />
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop" alt="Hospital" className="absolute inset-0 h-full w-full object-cover opacity-85" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/35 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-4 py-2 text-sm text-cyan-100">
                <Sparkles size={14} />
                Patient First Care
              </div>
              <h3 className="mt-5 text-3xl font-black text-white">Modern Hospital Experience</h3>
              <p className="mt-4 leading-relaxed text-slate-200">
                Doctor directories, appointment booking, patient records, and a calm professional interface.
              </p>
            </div>
          </motion.div>

          {statCards.map((card, index) => (
            <motion.div key={card.title || card.label} animate={{ y: [0, -10, 0] }} transition={{ duration: 4 + index, repeat: Infinity }} className={`absolute hidden lg:block ${card.className}`}>
              <div className="rounded-3xl border border-white/60 bg-white/80 px-5 py-4 shadow-[0_20px_50px_rgba(15,23,42,0.10)] backdrop-blur-2xl">
                <p className="text-sm text-gray-500">{card.label}</p>
                <h3 className="mt-2 text-2xl font-black text-[#0B0F19]">{card.value}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalHero;
