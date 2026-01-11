import { Link } from "react-router-dom";


export default function BlogHomeFour() {
  return (
    <>
      <section className="section-blog">
        {/* <!-- Section Space --> */}
        <div className="section-space-bottom">
          {/* <!-- Section Container --> */}
          <div className="container">
            {/* <!-- Section Block --> */}
            <div className="section-block mx-auto mb-10 max-w-lg text-center md:mb-[60px] lg:mb-20 lg:max-w-[856px]">
              {/* <!-- Section Tag --> */}
              <span className="mb-5 block text-xl font-semibold text-[#FF8064] lg:text-2xl">Read our blog</span>
              {/* <!-- Section Tag --> */}
              {/* <!-- Section Title --> */}
              <h2 className="jos font-arimo text-4xl font-bold leading-[1.2] -tracking-[2px] text-[#191931] md:text-5xl md:leading-[1.07] lg:text-6xl xl:text-[75px]">
                We're passionate about knowledge sharing
              </h2>
              {/* <!-- Section Title --> */}
            </div>
            {/* <!-- Section Block --> */}

            {/* <!-- Blog List --> */}
            <ul className="grid grid-cols-1 gap-10 gap-x-6 md:grid-cols-2">
              {/* <!-- Blog Item --> */}
              <li className="jos group">
                {/* <!-- Thumbnail --> */}
                <Link to="/blog-details" className="block overflow-hidden rounded-[10px]">
                  <img src="assets/img/images/th-4/blog-img-1.jpg" alt="blog-img-1" width="636" height="440" className="h-auto w-full transition-all duration-300 group-hover:scale-110" />
                </Link>
                {/* <!-- Thumbnail --> */}
                {/* <!-- Post Meta --> */}
                <div className="mb-5 mt-6 flex items-center gap-x-6">
                  {/* <!-- Post Meta Category --> */}
                  <div className="flex flex-wrap gap-4">
                    <Link to="/blog-1" className="rounded-[50px] border border-black px-6 py-3 text-base font-semibold tracking-[0.5px] hover:bg-black hover:text-white">Marketing</Link>
                  </div>
                  {/* <!-- Post Meta Category --> */}

                  {/* <!-- Post Meta Date --> */}
                  <span>June 18, 2024</span>
                  {/* <!-- Post Meta Date --> */}
                </div>
                {/* <!-- Post Meta --> */}
                {/* <!-- Content --> */}
                <div className="">
                  <Link to="/blog-details" className="mb-[30px] block font-arimo text-2xl font-bold leading-[1.33] text-[#191931] group-hover:text-[#0000FF] lg:text-[30px]">
                    How does business intelligence help companies change
                    strategy?
                  </Link>

                  <Link to="/blog-details" className="flex items-center gap-x-[10px] font-bold text-black group-hover:text-[#0000FF]">
                    Read more
                    <span className="relative inline-flex h-6 w-6 items-center justify-center overflow-hidden">
                      <img src="assets/img/icons/icon-black-24-24-arrow-right.svg" alt="icon-black-24-24-arrow-right" width="24" height="24" className="translate-x-0 transition-all duration-300 group-hover:translate-x-full" />
                      <img src="assets/img/icons/icon-blue-24-24-arrow-right.svg" alt="icon-blue-24-24-arrow-right" width="24" height="24" className="absolute -translate-x-full transition-all duration-300 group-hover:translate-x-0" />
                    </span>
                  </Link>
                </div>
                {/* <!-- Content --> */}
              </li>
              {/* <!-- Blog Item --> */}
              {/* <!-- Blog Item --> */}
              <li className="jos group">
                {/* <!-- Thumbnail --> */}
                <Link to="/blog-details" className="block overflow-hidden rounded-[10px]">
                  <img src="assets/img/images/th-4/blog-img-2.jpg" alt="blog-img-2" width="636" height="440" className="h-auto w-full transition-all duration-300 group-hover:scale-110" />
                </Link>
                {/* <!-- Thumbnail --> */}
                {/* <!-- Post Meta --> */}
                <div className="mb-5 mt-6 flex items-center gap-x-6">
                  {/* <!-- Post Meta Category --> */}
                  <div className="flex flex-wrap gap-4">
                    <Link to="/blog-1" className="rounded-[50px] border border-black px-6 py-3 text-base font-semibold tracking-[0.5px] hover:bg-black hover:text-white">Technology</Link>
                  </div>
                  {/* <!-- Post Meta Category --> */}

                  {/* <!-- Post Meta Date --> */}
                  <span>June 15, 2024</span>
                  {/* <!-- Post Meta Date --> */}
                </div>
                {/* <!-- Post Meta --> */}
                {/* <!-- Content --> */}
                <div className="">
                  <Link to="/blog-details" className="mb-[30px] block font-arimo text-2xl font-bold leading-[1.33] text-[#191931] group-hover:text-[#0000FF] lg:text-[30px]">
                    Maximizing profits - the small business guide to
                    Artificial Intelligence
                  </Link>

                  <Link to="/blog-details" className="flex items-center gap-x-[10px] font-bold text-black group-hover:text-[#0000FF]">
                    Read more
                    <span className="relative inline-flex h-6 w-6 items-center justify-center overflow-hidden">
                      <img src="assets/img/icons/icon-black-24-24-arrow-right.svg" alt="icon-black-24-24-arrow-right" width="24" height="24" className="translate-x-0 transition-all duration-300 group-hover:translate-x-full" />
                      <img src="assets/img/icons/icon-blue-24-24-arrow-right.svg" alt="icon-blue-24-24-arrow-right" width="24" height="24" className="absolute -translate-x-full transition-all duration-300 group-hover:translate-x-0" />
                    </span>
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
    </>
  )
}
