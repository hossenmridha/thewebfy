 
import ServiceDetailsArea from './ServiceDetailsArea'
import ServiceDetailsAbout from './ServiceDetailsAbout'
import TestimonialHomeOne from '../homes/home/TestimonialHomeOne'
import HeaderOne from '../../layouts/headers/HeaderOne'
import Breadcrumb from '../../common/Breadcrumb'
import FooterOne from '../../layouts/footers/FooterOne'
import Wrapper from '../../layouts/Wrapper'

export default function ServiceDetails() {
  return (
    <Wrapper>
    <div className="bg-colorIvory">
      <div className="page-wrapper">
        <HeaderOne />
        <main className="main-wrapper">
          <Breadcrumb title="UI/UX Design" subtitle="Service Details" />
          <ServiceDetailsArea />
          <ServiceDetailsAbout />
          <TestimonialHomeOne />
        </main>
        <FooterOne />
      </div>
    </div>    
    </Wrapper>
  )
}
