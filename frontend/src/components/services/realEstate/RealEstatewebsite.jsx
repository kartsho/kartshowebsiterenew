import { useEffect } from "react";

import { useLocation } from "react-router-dom";

import RealEstateHero from "./RealEstateHero";
import RealEstateFeatures from "./RealEstateFeatures";
import RealEstatePricing from "./RealEstatePricing";

const scrollToHash = (hash) => {
  if (!hash || typeof document === "undefined") return;

  const target = document.getElementById(hash.replace("#", ""));
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const RealEstatewebsite = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const frame = window.requestAnimationFrame(() => scrollToHash(location.hash));
    return () => window.cancelAnimationFrame(frame);
  }, [location.hash]);

  return (
    <main className="bg-[#F5F7FB]">
      <RealEstateHero />
      <RealEstateFeatures />
      <RealEstatePricing />
    </main>
  );
};

export default RealEstatewebsite;
