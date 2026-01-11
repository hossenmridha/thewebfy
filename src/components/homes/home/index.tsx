 
import HeroHomeOne from "./HeroHomeOne";
import ServiceHomeOne from "./ServiceHomeOne"; 
import AboutHomeOne from "./AboutHomeOne";
import PortfolioHomeOne from "./PortfolioHomeOne";
import ProcessHomeOne from "./ProcessHomeOne";
import TestimonialHomeOne from "./TestimonialHomeOne";
import TextSliderHomeOne from "./TextSliderHomeOne";
import TeamHomeOne from "./TeamHomeOne"; 
import HeaderOne from "../../../layouts/headers/HeaderOne";
import HorizontalLine from "../../../common/HorizontalLine";
import FooterOne from "../../../layouts/footers/FooterOne";
import Wrapper from "../../../layouts/Wrapper";

export default function HomeOne() {
	return (
		<Wrapper>
			<div className="page-wrapper">
				<HeaderOne />
				<main className="main-wrapper">
					<HeroHomeOne />
					<ServiceHomeOne />
					<HorizontalLine />
					<AboutHomeOne />
					<PortfolioHomeOne />
					<ProcessHomeOne />
					<HorizontalLine />
					<TestimonialHomeOne />
					<TextSliderHomeOne />
					<TeamHomeOne />
				</main>
				<FooterOne />
			</div>
		</Wrapper>
	);
}
