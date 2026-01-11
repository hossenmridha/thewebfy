 
import Breadcrumb from "../../common/Breadcrumb";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import PortfolioArea from "./PortfolioArea";

 

export default function PortfolioOne() {
  return (
    <Wrapper>
    <div className="bg-colorIvory">
      <div className="page-wrapper">
        <HeaderOne />
        <main className="main-wrapper">
          <Breadcrumb title="Our Portfolio" subtitle="Portfolio" />
          <PortfolioArea />          
        </main>
        <FooterOne />
      </div>
    </div>
    
    </Wrapper>
  )
}
