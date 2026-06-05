import { motion } from "framer-motion";

import {
  Rocket,
  Building2,
  BrainCircuit,
  ShoppingBag,
  User2,
  Check,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const websiteTypes = [
  {
    icon: Rocket,
    title: "Startup Website",
    delivery: "1 - 3 Weeks",
    scalability: "High Growth Ready",
    tech: ["React", "Next.js", "Tailwind", "Motion"],
    features: [
      "Modern Landing Pages",
      "Fast MVP Launch",
      "SEO Optimized",
      "Animated UI",
      "Lead Generation",
    ],
    tone: "from-cyan-500 to-blue-500",
  },
  {
    icon: Building2,
    title: "Enterprise Website",
    delivery: "4 - 8 Weeks",
    scalability: "Enterprise Scale",
    tech: ["React", "Node.js", "AWS", "Microservices"],
    features: [
      "Enterprise Architecture",
      "Advanced Security",
      "Admin Dashboard",
      "Scalable Systems",
      "Performance Monitoring",
    ],
    tone: "from-indigo-500 to-cyan-500",
  },
  {
    icon: BrainCircuit,
    title: "AI SaaS Platform",
    delivery: "6 - 12 Weeks",
    scalability: "AI Infrastructure Ready",
    tech: ["OpenAI", "LangChain", "Node.js", "Vector DB"],
    features: [
      "AI Workflows",
      "Automation Systems",
      "Chat Interfaces",
      "AI Dashboards",
      "Subscription System",
    ],
    tone: "from-violet-500 to-cyan-500",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Platform",
    delivery: "3 - 6 Weeks",
    scalability: "High Traffic Ready",
    tech: ["Shopify", "React", "Stripe", "Firebase"],
    features: [
      "Payment Integration",
      "Product CMS",
      "Analytics Dashboard",
      "Cart & Checkout",
      "Inventory System",
    ],
    tone: "from-orange-500 to-pink-500",
  },
  {
    icon: User2,
    title: "Personal Brand Website",
    delivery: "1 - 2 Weeks",
    scalability: "Creator Focused",
    tech: ["React", "GSAP", "Three.js", "Tailwind"],
    features: [
      "Portfolio Showcase",
      "Personal Branding",
      "Motion-First Design",
      "SEO + Social Ready",
      "Content Focused",
    ],
    tone: "from-emerald-500 to-cyan-500",
  },
];

const WebsiteTypes = () => {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FB] py-32">
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:70px_70px]" />
      <div className="absolute top-[-180px] left-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[120px]" />
      <div className="absolute bottom-[-180px] right-[-120px] h-[460px] w-[460px] rounded-full bg-blue-500/15 blur-[140px]" />

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
            Website Types
          </div>

          <h2 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-[#0B0F19] lg:text-7xl">
            Websites Designed
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              For Every Growth Stage.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600">
            From lean startup launches to enterprise-grade AI SaaS platforms, we build the
            right kind of website for the business stage you are in.
          </p>
        </motion.div>

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {websiteTypes.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[32px] border border-white/50 bg-white/80 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-3xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.tone} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.08]`} />
                <div className={`absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-r ${item.tone} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />

                <div className="relative z-10">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.tone} text-white shadow-[0_15px_40px_rgba(6,182,212,0.28)] transition-transform duration-500 group-hover:scale-110`}>
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-8 text-3xl font-bold text-[#0B0F19]">{item.title}</h3>

                  <div className="mt-6 grid gap-4">
                    <div className="flex items-center justify-between rounded-2xl border border-black/5 bg-[#F7FAFF] px-4 py-4">
                      <span className="text-sm text-gray-500">Delivery</span>
                      <span className="font-semibold text-[#0B0F19]">{item.delivery}</span>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl border border-black/5 bg-[#F7FAFF] px-4 py-4">
                      <span className="text-sm text-gray-500">Scalability</span>
                      <span className="font-semibold text-cyan-700">{item.scalability}</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-semibold text-[#0B0F19]">Key Features</h4>
                    <div className="mt-5 flex flex-col gap-4">
                      {item.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600">
                            <Check size={14} />
                          </div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-semibold text-[#0B0F19]">Tech Stack</h4>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-black/5 bg-white px-4 py-2 text-sm text-gray-600 transition-all duration-300 hover:border-cyan-400/30 hover:text-cyan-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="mt-10 flex w-full items-center justify-center gap-3 rounded-2xl border border-black/5 bg-[#0B0F19] py-4 font-semibold text-white transition-all duration-500 hover:-translate-y-0.5 hover:bg-cyan-600">
                    Explore Project
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WebsiteTypes;
