import Hero from "./sections/Hero";
import TrustedCompanies from "./sections/TrustedCompanies";
import WhyChooseUs from "./sections/WhyChooseUs";
import ServicesPreview from "./sections/ServicesPreview";
import HowWeWork from "./sections/HowWeWork";
import Stats from "./sections/Stats";
import FeaturedProjects from "./sections/FeaturedProjects";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import ContactPreview from "./sections/ContactPreview";

const Home = () => {
  return (
    <div>
    
      <Hero />
      <WhyChooseUs />
      <TrustedCompanies />
      <ServicesPreview />
      <HowWeWork />
      <Stats />
      <FeaturedProjects />
      <Testimonials />
      <FAQ />
      <CTA />
      <ContactPreview />
     
    </div>
  );
};

export default Home;
