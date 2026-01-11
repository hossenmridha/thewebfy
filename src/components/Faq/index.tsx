import Breadcrumb from "../../common/Breadcrumb";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import FaqArea from "./FaqArea";

 


export default function Faq() {
  return (
    <Wrapper>
    <div className="bg-colorIvory">
      <div className="page-wrapper">
        <HeaderOne />
        <main className="main-wrapper">
          <Breadcrumb title="FAQs" subtitle="FAQs" />
          <FaqArea />
        </main>
        <FooterOne />
      </div>
    </div>
    </Wrapper>
  )
}
