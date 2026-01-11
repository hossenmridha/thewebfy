import HeroHomeNine from "./HeroHomeNine";
import ClientsHomeNine from "./ClientsHomeNine";
import AboutHomeNine from "./AboutHomeNine";
import ServiceHomeNine from "./ServiceHomeNine";
import InfoHomeNine from "./InfoHomeNine";
import TextSliderHomeNice from "./TextSliderHomeNice";
import PricingHomeNine from "./PricingHomeNine";
import TestimonialHomeNine from "./TestimonialHomeNine";
import FaqHomeNine from "./FaqHomeNine";
import HeaderNine from "../../../layouts/headers/HeaderNine";
import FotterNine from "../../../layouts/footers/FotterNine";
import Wrapper from "../../../layouts/Wrapper";

export default function HomeNine() {
	return (
		<Wrapper>
			<div className="bg-[#FEF6E0]">
				<div className="page-wrapper">
					<HeaderNine />
					<main className="main-wrapper">
						<HeroHomeNine />
						<ClientsHomeNine />
						<AboutHomeNine />
						<ServiceHomeNine />
						<InfoHomeNine />
						<TextSliderHomeNice />
						<PricingHomeNine />
						<TestimonialHomeNine />
						<FaqHomeNine />
					</main>
					<FotterNine />
				</div>
			</div>
		</Wrapper>
	);
}
