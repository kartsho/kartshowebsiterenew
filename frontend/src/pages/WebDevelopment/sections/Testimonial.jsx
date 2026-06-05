import { motion, AnimatePresence } from "framer-motion";

import {
  Quote,
  ArrowLeft,
  ArrowRight,
  Star,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Michael Carter",
    role: "Founder & CEO",
    company: "Nova AI",
    image: "https://i.pravatar.cc/300?img=12",
    review:
      "The team completely transformed our SaaS platform. Performance, design, AI workflows - everything feels enterprise-grade now.",
    result: "+240% user engagement",
    stats: "0.8s Load Time",
  },
  {
    name: "Sophia Williams",
    role: "Marketing Director",
    company: "Elevate Studio",
    image: "https://i.pravatar.cc/300?img=32",
    review:
      "Probably the most premium development experience we’ve ever had. Fast delivery, insane UI quality, and real product thinking.",
    result: "+180% conversion boost",
    stats: "98 Lighthouse Score",
  },
  {
    name: "Daniel Kim",
    role: "CTO",
    company: "CloudSphere",
    image: "https://i.pravatar.cc/300?img=15",
    review:
      "Their AI-first workflow and scalable architecture helped us launch faster than expected without sacrificing quality.",
    result: "3x faster deployment",
    stats: "Global Infrastructure",
  },
  {
    name: "Emma Roberts",
    role: "Product Manager",
    company: "Orbit Labs",
    image: "https://i.pravatar.cc/300?img=45",
    review:
      "The attention to detail is unreal. From animations to backend systems, everything felt polished and built for scale.",
    result: "+90% retention",
    stats: "Enterprise Ready",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#F5F7FB] py-32">
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:70px_70px]" />
      <div className="absolute top-[-220px] left-[-140px] h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[150px]" />
      <div className="absolute bottom-[-220px] right-[-140px] h-[520px] w-[520px] rounded-full bg-blue-500/15 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-white/75 px-5 py-3 text-sm font-semibold text-cyan-700 backdrop-blur-xl shadow-[0_10px_40px_rgba(6,182,212,0.08)]">
            <Sparkles size={16} />
            Client Testimonials
          </div>

          <h2 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-[#0B0F19] lg:text-7xl">
            Trusted By
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Modern Companies.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600">
            Startups, AI companies, SaaS founders, and enterprise brands trust us to engineer
            premium digital systems.
          </p>
        </motion.div>

        <div className="relative mt-24 flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 z-20 flex h-14 w-14 items-center justify-center rounded-full border border-black/5 bg-white/80 text-[#0B0F19] shadow-[0_12px_35px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-300 hover:bg-cyan-500 hover:text-white lg:-left-8"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 z-20 flex h-14 w-14 items-center justify-center rounded-full border border-black/5 bg-white/80 text-[#0B0F19] shadow-[0_12px_35px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-300 hover:bg-cyan-500 hover:text-white lg:-right-8"
          >
            <ArrowRight size={20} />
          </button>

          <div className="relative w-full max-w-6xl min-h-[560px]">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => {
                const isActive = index === current;

                return (
                  <motion.div
                    key={testimonial.name}
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.96,
                      y: isActive ? 0 : 24,
                    }}
                    transition={{ duration: 0.65 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="group relative w-full overflow-hidden rounded-[40px] border border-white/60 bg-white/85 p-8 shadow-[0_25px_100px_rgba(0,0,0,0.08)] backdrop-blur-3xl lg:p-14">
                      <div className="absolute right-[-100px] top-[-100px] h-[260px] w-[260px] rounded-full bg-cyan-500/12 blur-[100px]" />
                      <div className="absolute left-[-60px] bottom-[-60px] h-[200px] w-[200px] rounded-full bg-blue-500/10 blur-[90px]" />

                      <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                          <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-600 shadow-[0_10px_35px_rgba(6,182,212,0.12)]">
                            <Quote size={36} />
                          </div>

                          <p className="mt-10 text-2xl leading-relaxed text-[#0B0F19] lg:text-3xl">
                            "{testimonial.review}"
                          </p>

                          <div className="mt-8 flex items-center gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                size={20}
                                className="fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.04 }}
                            className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-cyan-400/20 shadow-[0_0_80px_rgba(6,182,212,0.18)]"
                          >
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="h-full w-full object-cover"
                            />
                          </motion.div>

                          <h3 className="mt-8 text-3xl font-bold text-[#0B0F19]">
                            {testimonial.name}
                          </h3>
                          <p className="mt-3 font-medium text-cyan-700">{testimonial.role}</p>
                          <p className="text-gray-500">{testimonial.company}</p>

                          <div className="mt-10 w-full max-w-[340px] rounded-3xl border border-black/5 bg-[#F7FAFF] p-6">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-gray-500">Project Result</p>
                                <h4 className="mt-2 text-2xl font-bold text-[#0B0F19]">
                                  {testimonial.result}
                                </h4>
                              </div>

                              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600">
                                <TrendingUp size={24} />
                              </div>
                            </div>

                            <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-5">
                              <span className="text-sm text-gray-500">Performance</span>
                              <span className="text-sm font-medium text-cyan-700">
                                {testimonial.stats}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              onClick={() => setCurrent(index)}
              className={`rounded-full transition-all duration-300 ${
                current === index ? "h-3 w-12 bg-cyan-500" : "h-3 w-3 bg-black/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
