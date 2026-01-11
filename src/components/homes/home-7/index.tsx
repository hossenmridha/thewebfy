import HeroHomeSeven from "./HeroHomeSeven";
import ClientsHomeSeven from "./ClientsHomeSeven";
import AboutHomeSeven from "./AboutHomeSeven";
import VideoHomeSeven from "./VideoHomeSeven";
import ServiceHomeSeven from "./ServiceHomeSeven";
import ProjectHomeSeven from "./ProjectHomeSeven";
import TeamHomeSeven from "./TeamHomeSeven";
import TestimonialHomeSeven from "./TestimonialHomeSeven";
import HeaderSeven from "../../../layouts/headers/HeaderSeven";
import FooterSeven from "../../../layouts/footers/FooterSeven";
import Wrapper from "../../../layouts/Wrapper";

export default function HomeSeven() {
	return (
		<Wrapper>
			<div className="bg-[#F8FCDD]">
				<div className="page-wrapper">
					<HeaderSeven />
					<main className="main-wrapper">
						<HeroHomeSeven />
						<ClientsHomeSeven />
						<AboutHomeSeven />
						<VideoHomeSeven />
						<ServiceHomeSeven />
						<ProjectHomeSeven />
						<TeamHomeSeven />
						<TestimonialHomeSeven />
					</main>
					<FooterSeven />
				</div>
			</div>
		</Wrapper>
	);
}
