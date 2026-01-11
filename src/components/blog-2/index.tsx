 
import Breadcrumb from "../../common/Breadcrumb";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import BlogTwoArea from "./BlogTwoArea";

 

export default function BlogTwo() {
  return (
    <Wrapper>
    <div className="bg-colorIvory">
      <div className="page-wrapper">
        <HeaderOne />
        <main className="main-wrapper">
          <Breadcrumb title="Our Blog" subtitle="Blog" />
          <BlogTwoArea />
        </main>
        <FooterOne />
      </div>
    </div>
    </Wrapper>
  )
}
