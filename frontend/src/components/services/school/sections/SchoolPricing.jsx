import { useState } from "react";

import { motion } from "framer-motion";

import { ArrowRight, CheckCircle2 } from "lucide-react";

import { schoolWebsiteData } from "../../../../data/schoolWebsiteData";
import SchoolProposalGenerator from "./SchoolProposalGenerator";
import SchoolCurrencyToggle from "./SchoolCurrencyToggle";


const SchoolPricing = () => {
  const [currency, setCurrency] = useState("INR");

  const schoolPricingPlans = schoolWebsiteData?.[currency] || [];

  return (
    <section
      id="school-pricing"
      className="relative overflow-hidden bg-[#F5F7FB] py-24 scroll-mt-24"
    >
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
            Pricing
          </div>

          <h2 className="mt-8 text-4xl font-black leading-[1.05] tracking-tight text-[#0B0F19] lg:text-6xl">
            Flexible plans for
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              every school
            </span>
            size.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            Start with a clean launch package or move into a more advanced campus platform with
            parent communication, content management, and portal features.
          </p>

          <SchoolCurrencyToggle currency={currency} setCurrency={setCurrency} />
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {schoolPricingPlans.map((plan, index) => (
            <motion.article
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-[32px] border p-7 shadow-[0_18px_70px_rgba(0,0,0,0.08)] backdrop-blur-3xl transition-all duration-300 ${
                plan.highlighted
                  ? "border-cyan-400/40 bg-gradient-to-b from-cyan-500/10 to-blue-500/10"
                  : "border-white/60 bg-white/80"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute right-5 top-5 rounded-full bg-cyan-500 px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(6,182,212,0.32)]">
                  Best Choice
                </div>
              )}

              <div className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-700">
                {plan.badge}
              </div>

              <h3 className="mt-5 text-2xl font-black text-[#0B0F19]">{plan.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">{plan.subtitle}</p>

              <div className="mt-7">
                <p className="text-4xl font-black text-[#0B0F19]">{plan.price}</p>
                <p className="mt-2 text-sm text-gray-500">{plan.hosting}</p>
                <p className="mt-2 text-sm text-gray-500">{plan.timeline}</p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 text-cyan-600">
                      <CheckCircle2 size={18} />
                    </div>
                    <p className="text-sm leading-relaxed text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  if (typeof document === "undefined") {
                    return;
                  }

                  const section = document.getElementById("school-features");

                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-black/5 bg-white px-5 py-3 text-sm font-semibold text-[#0B0F19] transition-all duration-300 hover:border-cyan-500/20 hover:text-cyan-700"
              >
                Review Features
                <ArrowRight size={16} />
              </button>

              <SchoolProposalGenerator plan={plan} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolPricing;
