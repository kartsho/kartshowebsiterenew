import { useState } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Check,
  CircleDollarSign,
  Crown,
  Sparkles,
  Table2,
} from "lucide-react";

import { GymPricingPlans } from "./GymPricing";

const comparisonRows = [
  {
    feature: "Website + enquiry system",
    starter: "Included",
    growth: "Included",
    pro: "Included",
    enterprise: "Included",
  },
  {
    feature: "Member registration & profiles",
    starter: "Included",
    growth: "Enhanced",
    pro: "Advanced",
    enterprise: "Advanced",
  },
  {
    feature: "Fee collection & billing",
    starter: "Basic",
    growth: "Auto billing",
    pro: "Online payments",
    enterprise: "Centralized billing",
  },
  {
    feature: "Attendance automation",
    starter: "Manual",
    growth: "QR code",
    pro: "Face recognition",
    enterprise: "Biometric + AI",
  },
  {
    feature: "Trainer management",
    starter: "Basic",
    growth: "Role-based",
    pro: "HRMS + shifts",
    enterprise: "HRMS + payroll",
  },
  {
    feature: "Notifications",
    starter: "Basic",
    growth: "SMS / Email",
    pro: "WhatsApp + SMS + Email",
    enterprise: "Omnichannel automation",
  },
  {
    feature: "Online booking",
    starter: "No",
    growth: "Class booking",
    pro: "Self-service booking",
    enterprise: "Live PT / video consultation",
  },
  {
    feature: "Analytics",
    starter: "Overview",
    growth: "Dashboard",
    pro: "Real-time reports",
    enterprise: "AI predictions",
  },
  {
    feature: "Mobile apps",
    starter: "No",
    growth: "Web portal only",
    pro: "Web portal",
    enterprise: "Android + iOS",
  },
  {
    feature: "Multi-branch support",
    starter: "No",
    growth: "No",
    pro: "Limited",
    enterprise: "Included",
  },
];

const scrollToSection = (sectionId) => {
  if (typeof document === "undefined") {
    return;
  }

  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const currencyOptions = {
  INR: {
    label: "₹ INR",
    helper: "India focused pricing",
  },
  USD: {
    label: "$ USD",
    helper: "Global client pricing",
  },
};

const PricingPreview = () => {
  const [currency, setCurrency] = useState("INR");
  const plans = GymPricingPlans[currency];

  return (
    <section
      id="gym-pricing"
      className="
      relative
      overflow-hidden

      bg-[#F5F7FB]

      py-32
    "
    >
      <div
        className="
        absolute
        inset-0

        opacity-[0.04]

        [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]

        [background-size:70px_70px]
      "
      />

      <div
        className="
        absolute
        top-[-220px]
        left-[-140px]

        h-[520px]
        w-[520px]

        rounded-full

        bg-cyan-500/15

        blur-[150px]
      "
      />

      <div
        className="
        absolute
        bottom-[-220px]
        right-[-160px]

        h-[540px]
        w-[540px]

        rounded-full

        bg-blue-500/15

        blur-[170px]
      "
      />

      <div
        className="
        relative
        z-10

        mx-auto
        max-w-7xl

        px-6
      "
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-white/75 px-5 py-3 text-sm font-semibold text-cyan-700 shadow-[0_10px_40px_rgba(6,182,212,0.08)] backdrop-blur-xl">
            <Sparkles size={16} />
            Gym Website Pricing
          </div>

          <h2 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-[#0B0F19] lg:text-7xl">
            More Features
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Means Higher Price.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600">
            Choose the build that matches your gym size. Basic websites stay lean, while
            automation, member portals, face recognition, and mobile apps increase scope and cost.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 p-2 shadow-[0_15px_60px_rgba(0,0,0,0.06)] backdrop-blur-2xl">
            {Object.entries(currencyOptions).map(([key, option]) => {
              const active = currency === key;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setCurrency(key)}
                  className={`
                    rounded-full
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    ${
                      active
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-[0_10px_30px_rgba(6,182,212,0.28)]"
                        : "text-[#0B0F19] hover:bg-black/[0.04]"
                    }
                  `}
                >
                  <span className="flex items-center gap-2">
                    <CircleDollarSign size={16} />
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-4 text-sm font-medium text-gray-500">
            {currencyOptions[currency].helper}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/services/gym-website"
              preventScrollReset
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-700 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/15"
            >
              View Plans
            </Link>
            <Link
              to="/services/gym-website"
              preventScrollReset
              className="rounded-full border border-black/5 bg-white/70 px-5 py-3 text-sm font-semibold text-[#0B0F19] transition-all duration-300 hover:border-cyan-500/20 hover:text-cyan-700"
            >
              Compare Features
            </Link>
          </div>
        </motion.div>

        <div
          id="gym-pricing-plans"
          className="
          mt-24

          grid
          gap-8
          lg:grid-cols-2
          xl:grid-cols-4
        "
        >
          {plans.map((plan, index) => {
            const featureCount = plan.features.length;

            return (
              <motion.article
                key={plan.title}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`
                  group
                  relative

                  overflow-hidden

                  rounded-[34px]

                  border

                  backdrop-blur-3xl

                  transition-all
                  duration-500

                  hover:-translate-y-2
                  ${
                    plan.highlighted
                      ? "border-cyan-400/40 bg-gradient-to-b from-cyan-500/12 to-blue-500/12 shadow-[0_20px_80px_rgba(6,182,212,0.18)]"
                      : "border-white/40 bg-white/75 shadow-[0_18px_70px_rgba(0,0,0,0.08)]"
                  }
                `}
              >
                {plan.highlighted && (
                  <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(6,182,212,0.32)]">
                    <Crown size={15} />
                    Best Value
                  </div>
                )}

                <div className="relative z-10 p-7">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/15 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                      {plan.badge}
                    </div>

                    <h3 className="mt-6 text-3xl font-black text-[#0B0F19]">
                      {plan.title}
                    </h3>

                    <p className="mt-4 min-h-[72px] leading-relaxed text-gray-600">
                      {plan.subtitle}
                    </p>
                  </div>

                  <div className="mt-8 rounded-[28px] border border-black/5 bg-white/70 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h4 className="text-4xl font-black text-[#0B0F19]">
                          {plan.price}
                        </h4>
                        <p className="mt-2 text-sm text-gray-500">One-time build cost</p>
                      </div>

                      <div className="rounded-2xl bg-cyan-500/10 px-4 py-3 text-right">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
                          Modules
                        </p>
                        <p className="mt-1 text-2xl font-black text-[#0B0F19]">{featureCount}</p>
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3">
                      <div className="flex items-center justify-between rounded-2xl bg-[#F7FAFF] px-4 py-3 text-sm">
                        <span className="text-gray-500">Hosting</span>
                        <span className="font-semibold text-[#0B0F19]">{plan.hosting}</span>
                      </div>

                      <div className="flex items-center justify-between rounded-2xl bg-[#F7FAFF] px-4 py-3 text-sm">
                        <span className="text-gray-500">Timeline</span>
                        <span className="font-semibold text-cyan-700">{plan.timeline}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-gray-500">
                      Included Features
                    </h4>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {plan.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white/70 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.03)]"
                        >
                          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600">
                            <Check size={14} />
                          </div>
                          <span className="text-sm leading-relaxed text-[#0B0F19]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/services/gym-website"
                    preventScrollReset
                    className={`
                      group/btn
                      relative

                      mt-10
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3

                      rounded-2xl
                      px-5
                      py-5

                      font-semibold

                      transition-all
                      duration-300
                      ${
                        plan.highlighted
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-[0_15px_50px_rgba(6,182,212,0.35)]"
                          : "bg-[#0B0F19] text-white"
                      }
                    `}
                  >
                    {plan.buttonText}
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          id="gym-pricing-features"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
          mt-24

          overflow-hidden

          rounded-[34px]

          border
          border-white/50

          bg-white/75
          backdrop-blur-3xl

          shadow-[0_20px_80px_rgba(0,0,0,0.08)]
        "
        >
          <div className="border-b border-black/5 px-6 py-6 md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                  <Table2 size={14} />
                  Feature Matrix
                </div>
                <h3 className="mt-4 text-3xl font-black text-[#0B0F19] md:text-4xl">
                  Compare What Each Gym Plan Unlocks
                </h3>
              </div>

              <button
                type="button"
                onClick={() => scrollToSection("gym-pricing-plans")}
                className="inline-flex items-center gap-2 self-start rounded-full border border-black/5 bg-[#0B0F19] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-600"
              >
                Back to Plans
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[980px]">
              <div className="grid grid-cols-5 border-b border-black/5 bg-[#F7FAFF] text-sm font-semibold text-[#0B0F19]">
                <div className="px-6 py-5">Feature</div>
                <div className="px-6 py-5">Starter GMS</div>
                <div className="px-6 py-5">Growth GMS</div>
                <div className="px-6 py-5">Pro GMS</div>
                <div className="px-6 py-5">Enterprise GMS</div>
              </div>

              {comparisonRows.map((row, rowIndex) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-5 border-b border-black/5 text-sm ${
                    rowIndex % 2 === 0 ? "bg-white/70" : "bg-[#FBFDFF]"
                  }`}
                >
                  <div className="px-6 py-5 font-semibold text-[#0B0F19]">{row.feature}</div>
                  {[row.starter, row.growth, row.pro, row.enterprise].map((value, valueIndex) => (
                    <div key={valueIndex} className="px-6 py-5 text-gray-600">
                      {value === "Included" ? (
                        <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 font-semibold text-cyan-700">
                          <Check size={14} />
                          Included
                        </span>
                      ) : (
                        value
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPreview;
