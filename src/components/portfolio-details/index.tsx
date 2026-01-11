 
import Breadcrumb from "../../common/Breadcrumb";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import PortfolioDetailsArea from "./PortfolioDetailsArea";
import PortfolioSlider from "./PortfolioSlider";

export default function PortfolioDetails() {
	return (
		<Wrapper>
		<div className="bg-colorIvory">
			<div className="page-wrapper">
				<HeaderOne />
				<main className="main-wrapper">
					<Breadcrumb title="Product Design" subtitle="Portfolio Single" subtitlelink="portfolio-1" subtitlelinktitle="Portfolio" />
          <PortfolioDetailsArea />
          <PortfolioSlider />
				</main>
				<FooterOne />
			</div>
		</div>
		</Wrapper>
	);
}
