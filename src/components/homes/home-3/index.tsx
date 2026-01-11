 
import HeroHomeThree from "./HeroHomeThree";
import CountHomeThree from "./CountHomeThree";
import AboutSEOHomeThree from "./AboutSEOHomeThree";
import CustomSEOHomeThree from "./CustomSEOHomeThree";
import SEOServiceHomeThree from "./SEOServiceHomeThree";
import FaqHomeThree from "./FaqHomeThree";
import TextSliderHomeThree from "./TextSliderHomeThree";
import TeamHomeThree from "./TeamHomeThree";
import FaqAreaHomeThree from "./FaqAreaHomeThree";
import ContactHomeThree from "./ContactHomeThree"; 
import HeaderThree from "../../../layouts/headers/HeaderThree";
import FooterThree from "../../../layouts/footers/FooterThree";
import Wrapper from "../../../layouts/Wrapper";

export default function HomeThree() {
	return (
		<Wrapper>
		<div className="bg-[#FEFCFB]">
			<div className="page-wrapper">
				<HeaderThree />
				<main className="main-wrapper">
					<HeroHomeThree />
					<CountHomeThree />
					<AboutSEOHomeThree />
					<CustomSEOHomeThree />
					<SEOServiceHomeThree />
					<FaqHomeThree />
					<TextSliderHomeThree />
					<TeamHomeThree />
					<FaqAreaHomeThree />
					<ContactHomeThree />
				</main>
				<FooterThree />
			</div>
		</div>
		
		</Wrapper>
	);
}
