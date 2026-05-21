import ServicesHero from "./sections/ServicesHero";
import ServiceGrid from "./sections/ServiceGrid"
import DetailedServices from "./sections/DetailedServices";
import TechStack from "./sections/TechStack";

import CTA from "./sections/CTA";

const Services = () => {
  return (
    <div>
      <ServicesHero />
      <ServiceGrid/> 
      <DetailedServices/>
      <TechStack/>
    
      <CTA/>
    </div>
  );
};

export default Services;