 
import Breadcrumb from "../../common/Breadcrumb";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import TextSliderHomeOne from "../homes/home/TextSliderHomeOne"; 
import PricingArea from "./PricingArea";
import PricingFaqArea from "./PricingFaqArea";
import PricingServiceArea from "./PricingServiceArea";



export default function Pricing() {
  return (
    <Wrapper>
    <div className="bg-colorIvory">
      <div className="page-wrapper">
        <HeaderOne />
        <main className="main-wrapper">
          <Breadcrumb title="Pricing Plans" subtitle="Pricing Plans" />
          <PricingArea />
          <TextSliderHomeOne />
          <PricingFaqArea />
          <PricingServiceArea />
        </main>
        <FooterOne />
      </div>
    </div>
    </Wrapper>

  )
}
