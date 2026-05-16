import { motion } from "framer-motion";

import {
  Bot,
  BrainCircuit,
  Sparkles,
  Workflow,
  Search,
  FileText,
  ArrowRight,
  Cpu,
  Zap,
  Orbit,
  CheckCircle2,
} from "lucide-react";

const aiServices = [
  {
    icon: Bot,
    title: "AI Chatbots",
    desc: "Human-like AI assistants for support, sales, onboarding, and lead generation.",
  },
  {
    icon: Workflow,
    title: "Automation Systems",
    desc: "Automate workflows, CRM actions, emails, internal tools, and repetitive operations.",
  },
  {
    icon: BrainCircuit,
    title: "AI Dashboards",
    desc: "Real-time intelligent analytics dashboards with predictive insights and automation.",
  },
  {
    icon: FileText,
    title: "Resume Analyzers",
    desc: "AI-powered ATS analysis systems with smart recommendations and scoring.",
  },
  {
    icon: Search,
    title: "AI Search",
    desc: "Semantic AI search systems with vector databases and contextual intelligence.",
  },
  {
    icon: Cpu,
    title: "Workflow Orchestration",
    desc: "Connect APIs, AI tools, databases, and systems into one automated pipeline.",
  },
];

const metrics = [
  { label: "AI Accuracy", value: "98.7%" },
  { label: "Avg Response", value: "0.4s" },
  { label: "Automation Tasks", value: "1.2M+" },
  { label: "Live APIs", value: "48K/min" },
];

const AIPoweredDevelopment = () => {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FB] py-32">
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:70px_70px]" />
      <div className="absolute top-[-180px] right-[-120px] h-[460px] w-[460px] rounded-full bg-cyan-500/15 blur-[140px]" />
      <div className="absolute bottom-[-220px] left-[-160px] h-[500px] w-[500px] rounded-full bg-blue-500/15 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-white/75 px-5 py-3 text-sm font-semibold text-cyan-700 backdrop-blur-xl shadow-[0_10px_40px_rgba(6,182,212,0.08)]">
            <Sparkles size={16} />
            AI Powered Systems
          </div>

          <h2 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-[#0B0F19] md:text-6xl lg:text-7xl">
            AI First
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Development Systems
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600">
            We design AI-powered workflows that help your website do more than look premium.
            It can respond, automate, analyze, and scale with your business.
          </p>
        </motion.div>

        <div className="mt-24 grid items-center gap-16 lg:grid-cols-2">
          <div className="grid gap-6 sm:grid-cols-2">
            {aiServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/80 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur-3xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.08] via-transparent to-blue-500/[0.08] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-[0_15px_40px_rgba(6,182,212,0.28)] transition-transform duration-500 group-hover:scale-110">
                      <Icon size={26} />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-[#0B0F19]">{service.title}</h3>
                    <p className="mt-4 leading-relaxed text-gray-600">{service.desc}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="relative flex min-h-[720px] items-center justify-center">
            <div className="absolute inset-0 mx-auto h-[560px] w-[560px] rounded-full border border-dashed border-cyan-500/15" />
            <div className="absolute inset-0 mx-auto h-[420px] w-[420px] rounded-full border border-dashed border-blue-500/15" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute h-[620px] w-[620px] rounded-full border border-dashed border-cyan-500/10"
            >
              <div className="absolute left-1/2 top-0 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20 bg-white/80 text-cyan-600 shadow-[0_10px_30px_rgba(6,182,212,0.12)]">
                <div className="flex h-full w-full items-center justify-center">
                  <Bot size={26} />
                </div>
              </div>
              <div className="absolute right-0 top-1/2 h-16 w-16 translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/20 bg-white/80 text-blue-600 shadow-[0_10px_30px_rgba(59,130,246,0.12)]">
                <div className="flex h-full w-full items-center justify-center">
                  <Orbit size={26} />
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 h-16 w-16 -translate-x-1/2 translate-y-1/2 rounded-full border border-cyan-400/20 bg-white/80 text-cyan-600 shadow-[0_10px_30px_rgba(6,182,212,0.12)]">
                <div className="flex h-full w-full items-center justify-center">
                  <Cpu size={26} />
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="relative z-10 w-full max-w-[420px] overflow-hidden rounded-[40px] border border-white/60 bg-white/85 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.1)] backdrop-blur-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.08] via-transparent to-blue-500/[0.08]" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="text-sm font-medium text-gray-500">ai-orchestrator.jsx</div>
                </div>

                <div className="mt-6 rounded-[28px] border border-black/5 bg-[#0B1020] p-6 text-white">
                  <div className="flex items-center gap-2 text-cyan-300">
                    <Zap size={16} />
                    AI Workflow Engine
                  </div>
                  <div className="mt-5 space-y-3 font-mono text-sm">
                    <div className="text-cyan-300">analyzeUserIntent()</div>
                    <div className="text-blue-300">routeToWorkflow()</div>
                    <div className="text-emerald-300">generateSmartResponse()</div>
                    <div className="text-pink-300">syncToCRM()</div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="rounded-3xl border border-black/5 bg-white/80 p-4">
                      <p className="text-sm text-gray-500">{metric.label}</p>
                      <h4 className="mt-2 text-2xl font-bold text-[#0B0F19]">{metric.value}</h4>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-cyan-500/15 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-700">
                  <CheckCircle2 size={18} />
                  AI systems ready for launch, support, and scale
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute left-0 top-14 rounded-3xl border border-white/60 bg-white/80 px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
            >
              <p className="text-sm text-gray-500">AI Processing</p>
              <h4 className="mt-2 text-2xl font-bold text-[#0B0F19]">Live</h4>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute bottom-10 right-0 rounded-3xl border border-white/60 bg-white/80 px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
            >
              <p className="text-sm text-gray-500">Automation Tasks</p>
              <h4 className="mt-2 text-2xl font-bold text-[#0B0F19]">1.2M+</h4>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPoweredDevelopment;
