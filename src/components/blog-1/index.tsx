 
import Breadcrumb from '../../common/Breadcrumb'
import FooterOne from '../../layouts/footers/FooterOne'
import HeaderOne from '../../layouts/headers/HeaderOne'
import Wrapper from '../../layouts/Wrapper'
import BlogArea from './BlogArea'


export default function BlogOne() {
  return (
    <Wrapper>
    <div className="bg-colorIvory">
      <div className="page-wrapper">
        <HeaderOne />
        <main className="main-wrapper">
          <Breadcrumb title="Our Blog" subtitle="Blog" />
          <BlogArea />
        </main>
        <FooterOne />
      </div>
    </div>
    </Wrapper>
  )
}
