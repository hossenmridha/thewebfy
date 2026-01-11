 
import HeroHomeFive from "./HeroHomeFive";
import VideoHomeFive from "./VideoHomeFive";
import FeaturesHomeFive from "./FeaturesHomeFive";
import LineWithImage from "./LineWithImage";
import AboutHomeFive from "./AboutHomeFive";
import CounterHomeFive from "./CounterHomeFive";
import ServiceHomeFive from "./ServiceHomeFive";
import ProjectHomeFive from "./ProjectHomeFive";
import FaqHomeFive from "./FaqHomeFive";
import TestimonialHomeFive from "./TestimonialHomeFive";
import CtaHomeFive from "./CtaHomeFive"; 
import HeaderFive from "../../../layouts/headers/HeaderFive";
import FooterFive from "../../../layouts/footers/FooterFive";
import Wrapper from "../../../layouts/Wrapper";
 

export default function HomeFive() {
  return (
    <Wrapper>
    <div className="bg-[#FFFCF2]">
      <div className="page-wrapper">
        <HeaderFive />
        <main className="main-wrapper">
           <HeroHomeFive />
           <VideoHomeFive />
           <FeaturesHomeFive />
           <LineWithImage />
           <AboutHomeFive />
           <CounterHomeFive />
           <ServiceHomeFive />
           <ProjectHomeFive />
           <LineWithImage />
           <FaqHomeFive />
           <LineWithImage />
           <TestimonialHomeFive />
           <CtaHomeFive />
        </main>
        <FooterFive />
      </div>
    </div>
    
    </Wrapper>
  )
}
