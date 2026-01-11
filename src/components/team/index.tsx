 
import Breadcrumb from "../../common/Breadcrumb";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import TeamArea from "./TeamArea";



export default function Team() {
  return (
    <Wrapper>
    <div className="bg-colorIvory">
      <div className="page-wrapper">
        <HeaderOne />
        <main className="main-wrapper">
          <Breadcrumb title="Our Team" subtitle="Team" />
          <TeamArea />
        </main>
        <FooterOne />
      </div>
    </div>
    </Wrapper>
  )
}
