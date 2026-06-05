const features = [
  {
    title: "Lead Capture",
    desc: "Enquiry forms, trial class leads, and fast follow-up flows.",
  },
  {
    title: "Member Portal",
    desc: "Membership history, profile access, and payment tracking.",
  },
  {
    title: "Automation",
    desc: "Renewal reminders, notifications, and admin workflows.",
  },
  {
    title: "Growth Analytics",
    desc: "Track conversions, revenue, and business performance.",
  },
];

const GymFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
          Gym Features
        </p>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-[#0B0F19] lg:text-5xl">
          Everything a modern gym website should do.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-[28px] border border-white/40 bg-white/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-3xl"
          >
            <h3 className="text-2xl font-bold text-[#0B0F19]">
              {feature.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GymFeatures;

