
import { Link } from "react-router-dom" 

export default function BlogHomeSix() {
  return (
    <section className="section-blog">
      {/* <!-- Section Space --> */}
      <div className="section-space">
        {/* <!-- Section Container --> */}
        <div className="container">
          <div className="mb-10 flex flex-col flex-wrap items-center justify-between gap-10 md:mb-[60px] md:flex-row lg:mb-20">
            {/* <!-- Section Block --> */}
            <div className="max-w-4xl">
              <h2 className="jos font-playfairDisplay text-4xl font-bold !leading-[1.11] -tracking-[0.5px] text-[#2C2C2C] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85px]">
                Check out our latest articles and news
              </h2>
            </div>
            {/* <!-- Section Block --> */}

            <Link to="/blog-1" className="inline-block rounded-[50px] border-2 border-[#2C2C2C] bg-[#02854C] px-[35px] py-4 text-center font-bold text-[#F3EDE8] shadow-[0_4px_0_0] shadow-[#2C2C2C] transition-all duration-300 hover:shadow-none">Explore All Blogs</Link>
          </div>

          {/* <!-- Blog List --> */}
          <ul className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {/* <!-- Blog Item --> */}
            <li className="jos group rounded-[20px] bg-[#F3EDE8] p-6 pb-10">
              {/* <!-- Thumbnail --> */}
              <Link to="/blog-details" className="block overflow-hidden rounded-[20px]">
                <img src="assets/img/images/th-6/blog-img-1.jpg" alt="blog-img-1" className="max-w-full transition-all duration-300 group-hover:scale-110" />
              </Link>
              {/* <!-- Thumbnail --> */}
              {/* <!-- Post Meta --> */}
              <div className="mb-4 mt-6 flex flex-wrap gap-x-8 gap-y-4 text-base font-bold text-[#0C0C0C]">
                <Link to="/blog-1" className="relative after:absolute after:left-[calc(100%+16px)] after:top-1/2 after:h-2 after:w-2 after:-translate-y-1/2 after:rounded-[50%] after:bg-[#0C0C0C] last-of-type:after:hidden">Home Decoration</Link>
                <Link to="/blog-1" className="relative after:absolute after:left-[calc(100%+16px)] after:top-1/2 after:h-2 after:w-2 after:-translate-y-1/2 after:rounded-[50%] after:bg-[#0C0C0C] last-of-type:after:hidden">June 15, 2024</Link>
              </div>
              {/* <!-- Post Meta --> */}
              {/* <!-- Content --> */}
              <div>
                <Link to="/blog-details" className="mb-4 block font-playfairDisplay text-3xl font-bold leading-[1.2] -tracking-[0.5px] text-[#2C2C2C] group-hover:text-[#02854C] xl:text-[40px]">How to create a dramatic paint color for the home</Link>
                <p className="para-lg line-clamp-2 text-[#0C0C0C]">
                  At the beginning of a home redesign, the client said she
                  found herself "making much safer choices…
                </p>
                <Link to="/blog-details" className="mt-8 inline-block">
                  <img src="assets/img/icons/icon-black-arrow-right.svg" alt="icon-black-arrow-right" width="34" height="28" />
                </Link>
              </div>
              {/* <!-- Content --> */}
            </li>
            {/* <!-- Blog Item --> */}
            {/* <!-- Blog Item --> */}
            <li className="jos group rounded-[20px] bg-[#F3EDE8] p-6 pb-10">
              {/* <!-- Thumbnail --> */}
              <Link to="/blog-details" className="block overflow-hidden rounded-[20px]">
                <img src="assets/img/images/th-6/blog-img-2.jpg" alt="blog-img-2" className="max-w-full transition-all duration-300 group-hover:scale-110" />
              </Link>
              {/* <!-- Thumbnail --> */}
              {/* <!-- Post Meta --> */}
              <div className="mb-4 mt-6 flex flex-wrap gap-x-8 gap-y-4 text-base font-bold text-[#0C0C0C]">
                <Link to="/blog-1" className="relative after:absolute after:left-[calc(100%+16px)] after:top-1/2 after:h-2 after:w-2 after:-translate-y-1/2 after:rounded-[50%] after:bg-[#0C0C0C] last-of-type:after:hidden">Office Interior</Link>
                <Link to="/blog-1" className="relative after:absolute after:left-[calc(100%+16px)] after:top-1/2 after:h-2 after:w-2 after:-translate-y-1/2 after:rounded-[50%] after:bg-[#0C0C0C] last-of-type:after:hidden">June 10, 2024</Link>
              </div>
              {/* <!-- Post Meta --> */}
              {/* <!-- Content --> */}
              <div>
                <Link to="/blog-details" className="mb-4 block font-playfairDisplay text-3xl font-bold leading-[1.2] -tracking-[0.5px] text-[#2C2C2C] group-hover:text-[#02854C] xl:text-[40px]">The smartest way to create an office in a small space</Link>
                <p className="para-lg line-clamp-2 text-[#0C0C0C]">
                  Of course, having a dedicated home office with ample
                  storage, room for supplies, and a proper desk setup...
                </p>
                <Link to="/blog-details" className="mt-8 inline-block">
                  <img src="assets/img/icons/icon-black-arrow-right.svg" alt="icon-black-arrow-right" width="34" height="28" />
                </Link>
              </div>
              {/* <!-- Content --> */}
            </li>
            {/* <!-- Blog Item --> */}
          </ul>
          {/* <!-- Blog List --> */}
        </div>
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>
  )
}
