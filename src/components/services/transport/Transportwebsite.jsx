import { useEffect } from "react";

import { useLocation } from "react-router-dom";

import TransportHero from "./TransportHero";
import TransportFeatures from "./TransportFeatures";
import TransportPricing from "./TransportPricing";

const scrollToHash = (hash) => {
  if (!hash || typeof document === "undefined") return;
  document.getElementById(hash.replace("#", ""))?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Transportwebsite = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const frame = window.requestAnimationFrame(() => scrollToHash(location.hash));
    return () => window.cancelAnimationFrame(frame);
  }, [location.hash]);

  return (
    <main className="bg-[#F5F7FB]">
      <TransportHero />
      <TransportFeatures />
      <TransportPricing />
    </main>
  );
};

export default Transportwebsite;
