
import SeviceArea from "./SeviceArea";
import TextSliderHomeOne from "../homes/home/TextSliderHomeOne";
import ProcessHomeOne from "../homes/home/ProcessHomeOne";
import ServiceFaq from "./ServiceFaq";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../../common/Breadcrumb";
import FooterOne from "../../layouts/footers/FooterOne";
import Wrapper from "../../layouts/Wrapper";

export default function Service() {
	return (
		<Wrapper>
			<div className="bg-colorIvory">
				<div className="page-wrapper">
					<HeaderOne />
					<main className="main-wrapper">
						<Breadcrumb title="Our Services" subtitle="Our Services" />
						<SeviceArea />
						<TextSliderHomeOne />
						<ProcessHomeOne />
						<ServiceFaq />
					</main>
					<FooterOne />
				</div>
			</div>
		</Wrapper>
	);
}
