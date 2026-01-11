import HeroHomeSix from "./HeroHomeSix";
import VideoHomeSix from "./VideoHomeSix";
import FeaturesHomeSix from "./FeaturesHomeSix";
import CounterHomeSix from "./CounterHomeSix";
import ServiceHomeSix from "./ServiceHomeSix";
import ProjectHomeSix from "./ProjectHomeSix";
import TestimonialHomeSix from "./TestimonialHomeSix";
import BlogHomeSix from "./BlogHomeSix";
import HeaderSix from "../../../layouts/headers/HeaderSix";
import FooterSix from "../../../layouts/footers/FooterSix";
import Wrapper from "../../../layouts/Wrapper";

export default function HomeSix() {
	return (
		<Wrapper>
			<div className="bg-white">
				<div className="page-wrapper">
					<HeaderSix />
					<main className="main-wrapper">
						<HeroHomeSix />
						<VideoHomeSix />
						<FeaturesHomeSix />
						<CounterHomeSix />
						<ServiceHomeSix />
						<ProjectHomeSix />
						<TestimonialHomeSix />
						<BlogHomeSix />
					</main>
					<FooterSix />
				</div>
			</div>
		</Wrapper>
	);
}
