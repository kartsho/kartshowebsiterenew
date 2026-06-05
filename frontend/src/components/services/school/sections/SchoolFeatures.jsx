import { motion } from "framer-motion";

import { CheckCircle2 } from "lucide-react";

import { schoolFeatureCards } from "../../../../data/schoolWebsiteData";

const SchoolFeatures = () => {
  return (
    <section id="school-features" className="relative overflow-hidden bg-[#F5F7FB] py-24 scroll-mt-24">
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-700">
            <CheckCircle2 size={16} />
            Features
          </div>

          <h2 className="mt-8 text-4xl font-black leading-[1.05] tracking-tight text-[#0B0F19] lg:text-6xl">
            Everything a modern
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              school website
            </span>
            needs.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            These sections are designed to reduce confusion, improve communication, and make
            admissions easier for parents and students.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {schoolFeatureCards.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group rounded-[30px] border border-white/60 bg-white/80 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur-3xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-[0_15px_40px_rgba(6,182,212,0.25)] transition-transform duration-300 group-hover:scale-110">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#0B0F19]">{feature.title}</h3>
                <p className="mt-4 leading-relaxed text-gray-600">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SchoolFeatures;
