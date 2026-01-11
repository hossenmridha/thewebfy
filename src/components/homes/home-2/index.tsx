 
import HeroHomeTwo from "./HeroHomeTwo";
import BrandHomeTwo from "./BrandHomeTwo";
import FeaturesHomeTwo from "./FeaturesHomeTwo";
import CounterHomeTwo from "./CounterHomeTwo";
import ServiceHomeTwo from "./ServiceHomeTwo";
import VideoHomeTwo from "./VideoHomeTwo";
import PricingHomeTwo from "./PricingHomeTwo";
import TestimonialHomeTwo from "./TestimonialHomeTwo";
import FaqHomeTwo from "./FaqHomeTwo";
import CtaHomeTwo from "./CtaHomeTwo"; 
import HeaderTwo from "../../../layouts/headers/HeaderTwo";
import FooterTwo from "../../../layouts/footers/FooterTwo";
import Wrapper from "../../../layouts/Wrapper";
export default function HomeTwo() {
	return (
    <Wrapper>
		<div className="bg-[#F6F5EF]">
			<HeaderTwo />
			<main className="main-wrapper">
				<HeroHomeTwo />
        <BrandHomeTwo />
        <FeaturesHomeTwo />
        <CounterHomeTwo />
        <ServiceHomeTwo />
        <VideoHomeTwo />
        <PricingHomeTwo />
        <TestimonialHomeTwo />
        <FaqHomeTwo />
        <CtaHomeTwo />
			</main>
      <FooterTwo />
		</div>
    </Wrapper>
	);
}
