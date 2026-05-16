import GymHero from "../../../components/services/gym/GymHero";
import GymFeatures from "../../../components/services/gym/GymFeatures";
import GymPricing from "../../../components/services/gym/GymPricing";

const GymWebsitePage = () => {
  return (
    <main className="bg-[#F5F7FB]">
      <GymHero />
      <GymFeatures />
      <GymPricing />
    </main>
  );
};

export default GymWebsitePage;

