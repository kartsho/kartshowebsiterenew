import TechStack from "../Services/sections/TechStack";
import FAQSection from "./FaandQ";
import FinalCTA from "./FinalCta";
import AIPoweredDevelopment from "./sections/AiPowerDevelopment";
import PerformanceSEOSection from "./sections/PerformanceSeo";
import PortfolioSection from "./sections/Portfolio";

import ServicesGrid from "./sections/ServiceGrid";
import TestimonialsSection from "./sections/Testimonial";
import WebDevelopmentHero from "./sections/WebHero";
import WebsiteTypes from "./sections/WebsiteType";
import WhatWeBuild from "./sections/WhatWebuild";
import WorkflowSection from "./sections/WorkFlow";
const   WebDevelopment=()=>{
  return(
    <div>
      <WebDevelopmentHero/>
      <WhatWeBuild/>
      <ServicesGrid/>
      <WebsiteTypes/>
      <WorkflowSection/>
      <TechStack/>
      <PerformanceSEOSection/>
      <AIPoweredDevelopment/>
      <PortfolioSection/>
      <TestimonialsSection/>
      <FAQSection/>
      <FinalCTA/>
    </div>
  )
}
export default WebDevelopment;
