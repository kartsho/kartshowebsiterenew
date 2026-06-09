import CareerHero from "./sections/CareerHero";
import CareerStats from "./sections/CareerStats";
import LifeAtCompany from "./sections/LifeAtCompany";
import OpenPositions from "./sections/OpenPosition";
import WhyJoinUs from "./sections/WhyJoinUs";


const Career=()=>{
  return(
    <div>
     <CareerHero/>
  <CareerStats/>
  <WhyJoinUs/>
  <LifeAtCompany/>
  <OpenPositions/>
    </div>
  )
}
export default Career;
