
import AboutHomeOne from "../homes/home/AboutHomeOne";
import AboutGallery from "./AboutGallery";
import TextSliderHomeOne from "../homes/home/TextSliderHomeOne";
import AboutTeam from "./AboutTeam";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../../common/Breadcrumb";
import FooterOne from "../../layouts/footers/FooterOne";
import Wrapper from "../../layouts/Wrapper";


export default function About() {
  return (
    <Wrapper>
      <div className="bg-colorIvory">
        <div className="page-wrapper">
          <HeaderOne />
          <main className="main-wrapper">
            <Breadcrumb title="About Us" subtitle="About Us" />
            <AboutHomeOne />
            <AboutGallery />
            <TextSliderHomeOne />
            <AboutTeam />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>


  )
}
