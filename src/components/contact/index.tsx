 
import Breadcrumb from "../../common/Breadcrumb";
import GoogleMap from "../../common/GoogleMap";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import ContactArea from "./ContactArea";
import ContactFaq from "./ContactFaq";


export default function Contact() {
  return (
    <Wrapper>
    <div className="bg-colorIvory">
      <div className="page-wrapper">
        <HeaderOne />
        <main className="main-wrapper">
          <Breadcrumb title="Contact Us" subtitle="Contact Us" />
          <ContactArea />
          <GoogleMap />
          <ContactFaq />
        </main>
        <FooterOne />
      </div>
    </div>
    </Wrapper>
  )
}
