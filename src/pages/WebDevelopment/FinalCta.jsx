import { motion } from "framer-motion";

import { ArrowRight, Calendar, Sparkles } from "lucide-react";

const stats = [
  "100+ Projects Delivered",
  "AI Powered Systems",
  "Global Remote Team",
  "Enterprise Ready",
];

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FB] py-32">
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:70px_70px]" />
      <div className="absolute top-[-240px] left-[-180px] h-[700px] w-[700px] rounded-full bg-cyan-500/15 blur-[150px]" />
      <div className="absolute bottom-[-260px] right-[-160px] h-[720px] w-[720px] rounded-full bg-blue-500/15 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-white/60 bg-[#0B1020] px-8 py-20 text-center shadow-[0_25px_120px_rgba(0,0,0,0.12)] md:px-16"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.10] via-transparent to-blue-500/[0.10]" />
          <div className="absolute left-1/2 top-[-120px] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[100px]" />

          <div className="relative z-10">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-300 backdrop-blur-xl">
              <Sparkles size={16} />
              Premium Web Development & AI Systems
            </div>

            <h2 className="mt-10 text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl">
              Ready To Build
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Your Next Digital Product?
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
              We design scalable websites, AI-powered systems, SaaS platforms, and premium
              digital experiences engineered for performance, growth, and long-term impact.
            </p>

            <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
              <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-5 font-semibold text-white shadow-[0_15px_50px_rgba(6,182,212,0.35)] transition-all duration-500 hover:scale-105">
                <span className="relative z-10 flex items-center gap-3">
                  Start Project
                  <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </button>

              <button className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-8 py-5 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/10">
                <Calendar size={20} />
                Book Consultation
              </button>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-5">
              {stats.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-medium text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
