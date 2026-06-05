import { useEffect } from "react";

import { useLocation } from "react-router-dom";

import RestaurantHero from "./RestaurantHero";
import RestaurantFeatures from "./RestaurantFeatures";
import RestaurantPricing from "./RestaurantPricing";

const scrollToHash = (hash) => {
  if (!hash || typeof document === "undefined") return;
  document.getElementById(hash.replace("#", ""))?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Restaurantwebsite = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const frame = window.requestAnimationFrame(() => scrollToHash(location.hash));
    return () => window.cancelAnimationFrame(frame);
  }, [location.hash]);

  return (
    <main className="bg-[#F5F7FB]">
      <RestaurantHero />
      <RestaurantFeatures />
      <RestaurantPricing />
    </main>
  );
};

export default Restaurantwebsite;
