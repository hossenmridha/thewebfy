
import { Link } from "react-router-dom"
 

export default function SEOServiceHomeThree() {
  return (
    <>
      <section className="section-service">
        <div className="relative z-10 overflow-hidden">
          {/* <!-- Section Background --> */}
          <div className="bg-black">
            {/* <!-- Section Space --> */}
            <div className="section-space">
              {/* <!-- Section Container --> */}
              <div className="container">
                {/* <!-- Section Block --> */}
                <div className="section-block mx-auto mb-10 max-w-3xl md:mb-[60px] lg:mb-20">
                  <h2 className="jos text-center font-familjenGrotesk text-4xl font-bold leading-none text-[#FEFCFB] md:text-5xl lg:text-6xl xl:text-7xl xxl:text-[85px]">
                    Our professional SEO services for you
                  </h2>
                </div>
                {/* <!-- Section Block --> */}

                {/* <!-- Service List --> */}
                <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* <!-- Service Item --> */}
                  <li className="jos group flex flex-col gap-6 rounded-[20px] bg-[#8D7DFF] p-10 lg:flex-row">
                    {/* <!-- Icon --> */}
                    <div className="h-20 w-20">
                      <img src="assets/img/icons/th-3-service-icon-1.svg" alt="th-3-service-icon-1" width="80" height="80" />
                    </div>
                    {/* <!-- Icon --> */}
                    {/* <!-- Content --> */}
                    <div className="flex-1">
                      <h4 className="font-familjenGrotesk text-2xl leading-[1.14] tracking-[0.5px] lg:text-3xl xl:text-[35px]">
                        On-Page SEO
                      </h4>
                      <p className="para-lg my-6">
                        On-page SEO aims to improve users website content and
                        structure to improve its ranking on search engine
                        results pages.
                      </p>
                      <Link to="/service-details" className="relative inline-flex items-center justify-center overflow-hidden" aria-label="service-details-link">
                        <img src="assets/img/icons/icon-black-normal-arrow-right.svg" alt="icon-black-normal-arrow-right.svg" className="translate-x-0 transition-all duration-300 group-hover:translate-x-full" />
                        <img src="assets/img/icons/icon-black-normal-arrow-right.svg" alt="icon-black-normal-arrow-right.svg" className="absolute -translate-x-full transition-all duration-300 group-hover:translate-x-0" />
                      </Link>
                    </div>
                    {/* <!-- Content --> */}
                  </li>
                  {/* <!-- Service Item --> */}
                  {/* <!-- Service Item --> */}
                  <li className="jos group flex flex-col gap-6 rounded-[20px] bg-[#FF7545] p-10 lg:flex-row">
                    {/* <!-- Icon --> */}
                    <div className="h-20 w-20">
                      <img src="assets/img/icons/th-3-service-icon-2.svg" alt="th-3-service-icon-2" width="80" height="80" />
                    </div>
                    {/* <!-- Icon --> */}
                    {/* <!-- Content --> */}
                    <div className="flex-1">
                      <h4 className="font-familjenGrotesk text-2xl leading-[1.14] tracking-[0.5px] lg:text-3xl xl:text-[35px]">
                        Technical SEO
                      </h4>
                      <p className="para-lg my-6">
                        Technical SEO helps search engines crawl & index a
                        site more effectively. Its performance and
                        accessibility to search engines.
                      </p>
                      <Link to="/service-details" className="relative inline-flex items-center justify-center overflow-hidden" aria-label="service-details-link">
                        <img src="assets/img/icons/icon-black-normal-arrow-right.svg" alt="icon-black-normal-arrow-right.svg" className="translate-x-0 transition-all duration-300 group-hover:translate-x-full" />
                        <img src="assets/img/icons/icon-black-normal-arrow-right.svg" alt="icon-black-normal-arrow-right.svg" className="absolute -translate-x-full transition-all duration-300 group-hover:translate-x-0" />
                      </Link>
                    </div>
                    {/* <!-- Content --> */}
                  </li>
                  {/* <!-- Service Item --> */}
                  {/* <!-- Service Item --> */}
                  <li className="jos group flex flex-col gap-6 rounded-[20px] bg-[#FF94FF] p-10 lg:flex-row">
                    {/* <!-- Icon --> */}
                    <div className="h-20 w-20">
                      <img src="assets/img/icons/th-3-service-icon-3.svg" alt="th-3-service-icon-3" width="80" height="81" />
                    </div>
                    {/* <!-- Icon --> */}
                    {/* <!-- Content --> */}
                    <div className="flex-1">
                      <h4 className="font-familjenGrotesk text-2xl leading-[1.14] tracking-[0.5px] lg:text-3xl xl:text-[35px]">
                        Keyword Research
                      </h4>
                      <p className="para-lg my-6">
                        We perform keyword research to identify the most
                        relevant and high-traffic keywords and phrases for a
                        client's industry.
                      </p>
                      <Link to="/service-details" className="relative inline-flex items-center justify-center overflow-hidden" aria-label="service-details-link">
                        <img src="assets/img/icons/icon-black-normal-arrow-right.svg" alt="icon-black-normal-arrow-right.svg" className="translate-x-0 transition-all duration-300 group-hover:translate-x-full" />
                        <img src="assets/img/icons/icon-black-normal-arrow-right.svg" alt="icon-black-normal-arrow-right.svg" className="absolute -translate-x-full transition-all duration-300 group-hover:translate-x-0" />
                      </Link>
                    </div>
                    {/* <!-- Content --> */}
                  </li>
                  {/* <!-- Service Item --> */}
                  {/* <!-- Service Item --> */}
                  <li className="jos group flex flex-col gap-6 rounded-[20px] bg-[#FFE757] p-10 lg:flex-row">
                    {/* <!-- Icon --> */}
                    <div className="h-20 w-20">
                      <img src="assets/img/icons/th-3-service-icon-4.svg" alt="th-3-service-icon-4" width="80" height="81" />
                    </div>
                    {/* <!-- Icon --> */}
                    {/* <!-- Content --> */}
                    <div className="flex-1">
                      <h4 className="font-familjenGrotesk text-2xl leading-[1.14] tracking-[0.5px] lg:text-3xl xl:text-[35px]">
                        Content Creation
                      </h4>
                      <p className="para-lg my-6">
                        Content can take many forms, including blog posts,
                        articles, videos, infographics & high-quality and
                        informative content.
                      </p>
                      <Link to="/service-details" className="relative inline-flex items-center justify-center overflow-hidden" aria-label="service-details-link">
                        <img src="assets/img/icons/icon-black-normal-arrow-right.svg" alt="icon-black-normal-arrow-right.svg" className="translate-x-0 transition-all duration-300 group-hover:translate-x-full" />
                        <img src="assets/img/icons/icon-black-normal-arrow-right.svg" alt="icon-black-normal-arrow-right.svg" className="absolute -translate-x-full transition-all duration-300 group-hover:translate-x-0" />
                      </Link>
                    </div>
                    {/* <!-- Content --> */}
                  </li>
                  {/* <!-- Service Item --> */}
                </ul>
                {/* <!-- Service List --> */}
              </div>
              {/* <!-- Section Container --> */}
            </div>
            {/* <!-- Section Space --> */}
          </div>
          {/* <!-- Section Background --> */}

          {/* <!-- Background Shape --> */}
          <div className="jos absolute -right-28 -top-40 z-10" data-jos_animation="fade-left">
            <img src="assets/img/elemnts/shape-purple-blue-polygon-star.svg" alt="shape-purple-blue-polygon-star" width="420" height="420" />
          </div>
          {/* <!-- Background Shape --> */}
        </div>
      </section>
    </>
  )
}
