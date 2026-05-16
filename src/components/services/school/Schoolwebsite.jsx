import { useEffect } from "react";

import { useLocation } from "react-router-dom";
import SchoolHero from "./sections/SchoolHero";

import SchoolPricing from "./sections/SchoolPricing";

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

const Schoolwebsite = () => {
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
      <SchoolHero />
     
      <SchoolPricing />
    </main>
  );
};

export default Schoolwebsite;
