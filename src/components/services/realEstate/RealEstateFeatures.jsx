import { motion } from "framer-motion";

import { Building2, FileText, MapPinned, Users } from "lucide-react";

const features = [
  { icon: Building2, title: "Property Listings", desc: "Clean property cards with imagery, pricing, and status to help users browse quickly." },
  { icon: MapPinned, title: "Location Focus", desc: "Map-ready layouts and locality details to make area discovery easier." },
  { icon: Users, title: "Lead Capture", desc: "Enquiry forms and call-to-action blocks built to convert property interest into leads." },
  { icon: FileText, title: "Document Clarity", desc: "Property docs, brochures, and project details organized for easy access." },
];

const RealEstateFeatures = () => {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24 scroll-mt-24">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} viewport={{ once: true }} className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Real Estate Features</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-[#0B0F19] lg:text-5xl">
          Everything a modern real estate website should do.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-gray-600">
          The layout is designed to convert visitors into serious buyers or tenants while keeping property browsing simple.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <motion.div key={feature.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="rounded-[28px] border border-white/40 bg-white/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-3xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-[0_15px_40px_rgba(6,182,212,0.25)]">
                <Icon size={26} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#0B0F19]">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{feature.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default RealEstateFeatures;
