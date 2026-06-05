import { useMemo, useState } from "react";

import { motion } from "framer-motion";

import jsPDF from "jspdf";
import { CheckCircle2, Download } from "lucide-react";

import { transportData } from "../../../data/transportData";
import CurrencyToggle from "../gym/CurrencyToggle";

const SERVICE_LABEL = "Transport";

const buildWhatsAppUrl = (plan) => {
  const message =
    plan.whatsappText ||
    `Hi Kartsho, I want ${plan.title} ${SERVICE_LABEL} proposal.

Price: ${plan.price}
Timeline: ${plan.timeline}

Please share full quotation.`;

  return `https://wa.me/919453134901?text=${encodeURIComponent(message)}`;
};

const generateProposalPDF = (plan) => {
  const doc = new jsPDF();
  doc.setFontSize(24);
  doc.text(`${SERVICE_LABEL} Proposal`, 20, 25);
  doc.setFontSize(18);
  doc.text(`Plan: ${plan.title}`, 20, 45);
  doc.setFontSize(14);
  doc.text(`Price: ${plan.price}`, 20, 60);
  doc.text(`Timeline: ${plan.timeline}`, 20, 75);
  doc.text(`Hosting: ${plan.hosting}`, 20, 90);
  doc.text("Features:", 20, 110);

  let y = 125;
  plan.features.forEach((feature) => {
    doc.text(`• ${feature}`, 25, y);
    y += 12;
  });

  doc.save(`${plan.title}-proposal.pdf`);
};

const TransportPricing = () => {
  const [currency, setCurrency] = useState("INR");
  const plans = transportData[currency];
  const featuredPlan = useMemo(() => plans.find((plan) => plan.highlighted) || plans[0], [plans]);

  return (
    <section id="pricing" className="relative overflow-hidden bg-[#F5F7FB] py-28 scroll-mt-24">
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:70px_70px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-white/75 px-5 py-3 text-sm font-semibold text-cyan-700 shadow-[0_10px_40px_rgba(6,182,212,0.08)] backdrop-blur-xl">
            <CheckCircle2 size={16} />
            Transport Pricing
          </div>
          <h2 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-[#0B0F19] lg:text-7xl">
            Pick the plan that fits
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              your fleet growth.
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600">
            Every tier includes downloadable proposals, WhatsApp inquiry flow, ROI guidance, and feature comparison. Switch currency to compare Indian and global pricing.
          </p>
          <CurrencyToggle currency={currency} setCurrency={setCurrency} />
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-5 py-3 text-sm text-gray-600 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl">
            Starting from <span className="font-semibold text-[#0B0F19]">{featuredPlan.price}</span>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <motion.article key={plan.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} viewport={{ once: true }} className={`group relative overflow-hidden rounded-[32px] border p-6 backdrop-blur-3xl transition-all duration-500 ${plan.highlighted ? "border-cyan-400/40 bg-gradient-to-b from-cyan-500/10 to-blue-500/10 shadow-[0_20px_80px_rgba(6,182,212,0.18)]" : "border-white/40 bg-white/75 shadow-[0_18px_70px_rgba(0,0,0,0.08)]"}`}>
              {plan.highlighted && <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(6,182,212,0.32)]">Best Value</div>}
              <div className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-700">{plan.badge}</div>
              <h3 className="mt-5 text-2xl font-black text-[#0B0F19]">{plan.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">{plan.subtitle}</p>
              <div className="mt-7">
                <h4 className="text-4xl font-black leading-tight text-[#0B0F19]">{plan.price}</h4>
                <p className="mt-2 text-sm text-gray-500">{plan.hosting}</p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-1 text-cyan-600"><CheckCircle2 size={17} /></div>
                    <p className="text-sm leading-relaxed text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl bg-black/[0.03] px-5 py-4">
                <p className="text-xs uppercase tracking-wider text-gray-500">Timeline</p>
                <h4 className="mt-1 font-bold text-[#0B0F19]">{plan.timeline}</h4>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <button type="button" onClick={() => generateProposalPDF(plan)} className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 py-4 text-white font-semibold hover:scale-[1.02] transition-all duration-300">
                  <Download size={18} />
                  Generate Proposal PDF
                </button>
                <a href={plan.pdf} target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 py-4 text-cyan-700 font-semibold">
                  <Download size={18} />
                  Presskit PDF
                </a>
                <a href={buildWhatsAppUrl(plan)} target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center rounded-2xl bg-green-500 py-4 text-white font-semibold">
                  Send On WhatsApp
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransportPricing;
