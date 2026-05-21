import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  FolderKanban,
  Globe2,
  SmilePlus,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";

const stats = [
  {
    number: 3,
    suffix: "+",
    title: "Active Ventures",
    icon: FolderKanban,
  },
  {
    number: 50,
    suffix: "+",
    title: "Clients Served",
    icon: Globe2,
  },
  {
    number: 4,
    suffix: "+",
    title: "Core Industries",
    icon: Globe2,
  },
  {
    number: 24,
    suffix: "h",
    title: "Response Time",
    icon: SmilePlus,
  },
  {
    number: 2026,
    suffix: "",
    title: "Founded",
    icon: Code2,
  },
  {
    number: 2,
    suffix: "",
    title: "Official Emails",
    icon: BriefcaseBusiness,
  },
];

// 🔥 simple safe counter (NO LIBRARY)
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(counter);
      }

      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return count;
};

const StatCard = ({ item, index }) => {
  const Icon = item.icon;
  const count = useCounter(item.number);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-[35px] backdrop-blur-2xl bg-white/70 border border-black/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_80px_rgba(6,182,212,0.15)]"
    >
      {/* ICON */}
      <div className="relative z-10 w-16 h-16 rounded-2xl bg-cyan-500 flex items-center justify-center text-white mb-8 shadow-[0_10px_40px_rgba(6,182,212,0.35)]">
        <Icon size={30} />
      </div>

      {/* NUMBER */}
      <h3 className="relative z-10 text-5xl font-bold text-[#0B0F19] mb-4">
        {count}
        {item.suffix}
      </h3>

      {/* TITLE */}
      <p className="relative z-10 text-lg text-gray-600 font-medium">
        {item.title}
      </p>
    </motion.div>
  );
};

const CompanyStats = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-white">

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* GLOW */}
      <div className="absolute top-[-120px] right-[-120px] w-[350px] h-[350px] rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[350px] h-[350px] rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-8">
            Company Statistics
          </div>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[#0B0F19] mb-6">
            Building a Multi-Venture{" "}
            <span className="text-cyan-500">Digital Ecosystem</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Delivering official business, careers, and growth infrastructure across Kartsho’s ventures.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <StatCard key={index} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CompanyStats;
