const pricingSlugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const createFocusPoints = (title) => [
  `${title} with premium UI and conversion flow`,
  `${title} built for leads, trust, and scalability`,
  `SEO-ready structure, analytics, and fast launch`,
];

const servicePricingEntries = [
  {
    title: "Corporate Websites",
    startingPrice: "₹1.2L",
    timeline: "4–6 Weeks",
    summary:
      "Authority-first company websites designed for trust, lead generation, and brand positioning.",
  },
  {
    title: "SaaS Platforms",
    startingPrice: "₹2L",
    timeline: "6–9 Weeks",
    summary:
      "Scalable SaaS product experiences with dashboard logic, onboarding, and growth-ready architecture.",
  },
  {
    title: "AI Applications",
    startingPrice: "₹2.5L",
    timeline: "6–10 Weeks",
    summary:
      "AI-powered applications, copilots, and automation systems built around your workflow.",
  },
  {
    title: "E-Commerce Stores",
    startingPrice: "₹1.8L",
    timeline: "5–8 Weeks",
    summary:
      "Fast online stores with catalog, checkout, conversion tracking, and sales-focused UX.",
  },
  {
    title: "Portfolio Websites",
    startingPrice: "₹75k",
    timeline: "2–4 Weeks",
    summary:
      "Premium portfolio experiences for creators, founders, and personal brands.",
  },
  {
    title: "Dashboards",
    startingPrice: "₹1.5L",
    timeline: "5–7 Weeks",
    summary:
      "Data-rich admin dashboards with realtime insights and clean operational UX.",
  },
  {
    title: "Landing Pages",
    startingPrice: "₹45k",
    timeline: "1–3 Weeks",
    summary:
      "High-converting launch pages for campaigns, products, and lead generation.",
  },
  {
    title: "Automation Systems",
    startingPrice: "₹1.8L",
    timeline: "5–8 Weeks",
    summary:
      "Business automation workflows that reduce manual work and improve execution speed.",
  },
  {
    title: "Gym Websites",
    startingPrice: "₹70k",
    timeline: "3–4 Weeks",
    summary:
      "Fitness websites with memberships, trainer schedules, attendance, and growth tools.",
    featured: true,
  },
  {
    title: "Hospital Websites",
    startingPrice: "₹1.6L",
    timeline: "5–8 Weeks",
    summary:
      "Healthcare platforms with appointments, service listings, doctor profiles, and patient journeys.",
  },
  {
    title: "Rental Websites",
    startingPrice: "₹1.4L",
    timeline: "4–7 Weeks",
    summary:
      "Property rental systems with listings, booking flows, and admin controls.",
  },
  {
    title: "Travel & Tour Websites",
    startingPrice: "₹1.2L",
    timeline: "4–6 Weeks",
    summary:
      "Travel experiences with destination highlights, bookings, and package management.",
  },
  {
    title: "School Websites",
    startingPrice: "₹95k",
    timeline: "3–5 Weeks",
    summary:
      "School portals with notices, admissions, events, and student communication flows.",
  },
  {
    title: "College Websites",
    startingPrice: "₹1.4L",
    timeline: "5–8 Weeks",
    summary:
      "University-grade websites with departments, admissions, programs, and campus systems.",
  },
];

export const webDevelopmentPricingData = Object.fromEntries(
  servicePricingEntries.map((entry) => {
    const slug = pricingSlugify(entry.title);

    return [
      slug,
      {
        key: slug,
        title: entry.title,
        badge: entry.featured ? "Featured Pricing" : "Service Pricing",
        summary: entry.summary,
        startingPrice: entry.startingPrice,
        timeline: entry.timeline,
        focusPoints: createFocusPoints(entry.title),
        route: `/services/web-development/pricing/${slug}`,
        featured: Boolean(entry.featured),
      },
    ];
  })
);

export const getWebDevelopmentPricingData = (serviceKey) => {
  const fallbackKey = pricingSlugify(serviceKey || "gym-websites");

  return (
    webDevelopmentPricingData[fallbackKey] || {
      key: fallbackKey,
      title:
        fallbackKey
          .split("-")
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join(" ") || "Web Development",
      badge: "Custom Pricing",
      summary:
        "We can tailor pricing for this service once the scope is finalized.",
      startingPrice: "Custom Quote",
      timeline: "Based on scope",
      focusPoints: [
        "Discovery and planning based on your requirements",
        "Custom UI/UX and development scope",
        "Dedicated launch and optimization support",
      ],
      route: `/services/web-development/pricing/${fallbackKey}`,
      featured: false,
    }
  );
};

export { pricingSlugify as createWebDevelopmentPricingSlug };
