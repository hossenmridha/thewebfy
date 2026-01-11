import HeroHomeEight from "./HeroHomeEight";
import FunfactHomeEight from "./FunfactHomeEight";
import AboutHomeEight from "./AboutHomeEight";
import ServiceHomeEight from "./ServiceHomeEight";
import TechnologyHomeEight from "./TechnologyHomeEight";
import WorkingProccessHomeEight from "./WorkingProccessHomeEight";
import TestimonialHomeEight from "./TestimonialHomeEight";
import TeamHomeEight from "./TeamHomeEight";
import FaqHomeEight from "./FaqHomeEight";
import HeaderEight from "../../../layouts/headers/HeaderEight";
import FooterEight from "../../../layouts/footers/FooterEight";
import Wrapper from "../../../layouts/Wrapper";

export default function HomeEight() {
	return (
		<Wrapper>
			<div className="bg-[#FCF9F0]">
				<div className="page-wrapper">
					<HeaderEight />
					<main className="main-wrapper">
						<HeroHomeEight />
						<FunfactHomeEight />
						<AboutHomeEight />
						<ServiceHomeEight />
						<TechnologyHomeEight />
						<WorkingProccessHomeEight />
						<TestimonialHomeEight />
						<TeamHomeEight />
						<FaqHomeEight />
					</main>
					<FooterEight />
				</div>
			</div>
		</Wrapper>
	);
}
