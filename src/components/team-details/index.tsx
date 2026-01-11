 
import Breadcrumb from "../../common/Breadcrumb";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import TeamDetailsArea from "./TeamDetailsArea";



export default function TeamDetails() {
  return (
    <Wrapper>
    <div className="bg-colorIvory">
      <div className="page-wrapper">
        <HeaderOne />
        <main className="main-wrapper">
          <Breadcrumb title="Team Details" subtitle="Team Details" />
          <TeamDetailsArea />
        </main>
        <FooterOne />
      </div>
    </div>
    </Wrapper>
  )
}
