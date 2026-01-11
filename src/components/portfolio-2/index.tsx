 
import Breadcrumb from "../../common/Breadcrumb";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import PortfolioTwoArea from "./PortfolioTwoArea";

export default function PortfolioTwo() {
  return (
    <Wrapper>
    <div className="bg-colorIvory">
      <div className="page-wrapper">
        <HeaderOne />
        <main className="main-wrapper">
          <Breadcrumb title="Our Portfolio" subtitle="Portfolio" />
          <PortfolioTwoArea />
        </main>
        <FooterOne />
      </div>
    </div>
    </Wrapper>
  )
}
