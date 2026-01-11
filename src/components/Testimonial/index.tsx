import Breadcrumb from "../../common/Breadcrumb";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import TestimonialArea from "./TestimonialArea";

 

export default function Testimonial() {
  return (
    <Wrapper>
    <div className="bg-colorIvory">
      <div className="page-wrapper">
        <HeaderOne />
        <main className="main-wrapper">
          <Breadcrumb title="Testimonial" subtitle="Testimonial" />
          <TestimonialArea />
        </main>
        <FooterOne />
      </div>
    </div>
    </Wrapper>
  )
}
