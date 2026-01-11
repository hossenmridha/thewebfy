 
import Breadcrumb from '../../common/Breadcrumb'
import FooterOne from '../../layouts/footers/FooterOne'
import HeaderOne from '../../layouts/headers/HeaderOne'
import Wrapper from '../../layouts/Wrapper'
import BlogDetailsArea from './BlogDetailsArea'

export default function BlogDetails() {
  return (
    <Wrapper>
    <div className="bg-colorIvory">
      <div className="page-wrapper">
        <HeaderOne />
        <main className="main-wrapper">
          <Breadcrumb title="Blog Details" subtitle="Blog" />
          <BlogDetailsArea />
        </main>
        <FooterOne />
      </div>
    </div>
    </Wrapper>
  )
}
