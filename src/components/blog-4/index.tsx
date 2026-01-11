
import Breadcrumb from "../../common/Breadcrumb";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import BlogFourArea from "./BlogFourArea";



export default function BlogFour() {
  return (
    <Wrapper>
    <div className="bg-colorIvory">
      <div className="page-wrapper">
        <HeaderOne />
        <main className="main-wrapper">
          <Breadcrumb title="Our Blog" subtitle="Blog" />
          <BlogFourArea />
        </main>
        <FooterOne />
      </div>
    </div>
    </Wrapper>
  )
}
