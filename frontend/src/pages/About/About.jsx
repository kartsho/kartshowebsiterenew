import AboutHero from "./sections/AboutHero";
import CompanyStats from "./sections/CompanyStats";
import CompnayStory from "./sections/companyStory"
import CoreValues from "./sections/CoreValues";
import MissionVision from "./sections/MissionVision";
import WhyWeExist from "./sections/WhyWeExist";
const About = () => {
  return (
    <div>
     <AboutHero/>
     <CompnayStory/>
     <MissionVision/>
     <CompanyStats/>
     <WhyWeExist/>
     <CoreValues/>
   
    </div>
  );
};

export default About;