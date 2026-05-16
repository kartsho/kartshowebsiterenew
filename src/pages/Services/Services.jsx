import ServicesHero from "./sections/ServicesHero";
import ServiceGrid from "./sections/ServiceGrid"
import DetailedServices from "./sections/DetailedServices";
import TechStack from "./sections/TechStack";
import Industries from "./sections/Industries";
import CTA from "./sections/CTA";

const Services = () => {
  return (
    <div>
      <ServicesHero />
      <ServiceGrid/> 
      <DetailedServices/>
      <TechStack/>
      <Industries/>
      <CTA/>
    </div>
  );
};

export default Services;