 
import HeroHomeFour from './HeroHomeFour'
import AboutHomeFour from './AboutHomeFour'
import BrandHomeFour from './BrandHomeFour'
import ServiceHomeFour from './ServiceHomeFour'
import WhyChooseHomeFour from './WhyChooseHomeFour'
import ProjectHomeFour from './ProjectHomeFour'
import TestimonialHomeFour from './TestimonialHomeFour'
import BlogHomeFour from './BlogHomeFour'
import InstagramHomeFour from './InstagramHomeFour' 
import HeaderFour from '../../../layouts/headers/HeaderFour'
import FooterFour from '../../../layouts/footers/FooterFour'
import Wrapper from '../../../layouts/Wrapper'

export default function HomeFour() {
  return (
    <Wrapper>
    <div className="bg-[#FFF7EA]">
      <div className="page-wrapper">
        <HeaderFour />
        <main className="main-wrapper">
          <HeroHomeFour />
          <AboutHomeFour />
          <BrandHomeFour />
          <ServiceHomeFour />
          <WhyChooseHomeFour />
          <ProjectHomeFour />
          <TestimonialHomeFour />
          <BlogHomeFour />
          <InstagramHomeFour />
        </main>
        <FooterFour />
      </div>
    </div>
    
    </Wrapper>
  )
}
