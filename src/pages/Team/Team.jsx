import TeamHero from "../../pages/Team/section/TeamHero"
import TeamCulture from "./section/TeamCulture";
import Leadership from "./section/Leadership"
import TeamStats from "./section/TeamStats";
import TeamWorkflow from "./section/WorkFlow";
import TeamEpertise from "./section/TeamExpertise"
import BehindScenesSection from "./section/BehindScen";
const Team=()=>{
  return(
    <div>
      <TeamHero/>
      <TeamStats/>
      <Leadership/>
      <TeamCulture/>
      <TeamWorkflow/>
      <TeamEpertise/>
      <BehindScenesSection/>
    </div>
  )
}
export default Team;