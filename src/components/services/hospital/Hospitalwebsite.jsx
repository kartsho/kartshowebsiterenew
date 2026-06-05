import { useEffect } from "react";

import { useLocation } from "react-router-dom";

import HospitalHero from "./HospitalHero";
import HospitalFeatures from "./HospitalFeatures";
import HospitalPricing from "./HospitalPricing";

const scrollToHash = (hash) => {
  if (!hash || typeof document === "undefined") {
    return;
  }

  const id = hash.replace("#", "");
  const target = document.getElementById(id);

  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const Hospitalwebsite = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      scrollToHash(location.hash);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.hash]);

  return (
    <main className="bg-[#F5F7FB]">
      <HospitalHero />
      <HospitalFeatures />
      <HospitalPricing />
    </main>
  );
};

export default Hospitalwebsite;
