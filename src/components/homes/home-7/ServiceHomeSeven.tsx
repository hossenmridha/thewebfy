import { Link } from "react-router-dom";


export default function ServiceHomeSeven() {
  return (
    <section className="section-service">
      {/* <!-- Section Background --> */}
      <div className="relative z-10 bg-[#0B1040]">
        {/* <!-- Section Space --> */}
        <div className="section-space">
          {/* <!-- Section Container --> */}
          <div className="container">
            {/* <!-- Section Block --> */}
            <div className="mb-10 flex flex-wrap items-center justify-between gap-10 md:mb-[60px] lg:mb-20">
              <h2 className="jos max-w-[700px] font-bricolageGrotesque text-4xl font-bold leading-[1.033] -tracking-[1px] text-[#F8FCDD] sm:text-5xl lg:text-6xl xl:text-7xl xxl:text-[90px]">
                What we can do for your brand
              </h2>
              <Link to="/service" className="group inline-flex rounded border-2 border-[#4659FF] bg-[#4659FF] px-6 py-3 text-base font-bold text-white lg:px-8 lg:py-4 xl:px-[42px]">
                <div className="relative flex items-center justify-center overflow-hidden">
                  <span className="translate-y-0 transition-all duration-300 group-hover:-translate-y-full">View All Services</span>
                  <span className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0">View All Services</span>
                </div>
              </Link>
            </div>
            {/* <!-- Section Block --> */}

            {/* <!-- Service List --> */}
            <ul className="grid grid-cols-1 gap-6">
              {/* <!-- Service Item --> */}
              <li className="jos group grid grid-cols-1 items-center gap-8 rounded-[5px] bg-[#F8FCDD]/5 p-10 lg:grid-cols-[0.75fr_1fr_50px] lg:gap-12 xl:gap-8 xxl:gap-32">
                <Link to="/service-details" className="font-bricolageGrotesque text-3xl font-bold leading-[1.26] text-[#F8FCDD] lg:text-[38px]">1. Ad Campaigns:</Link>
                <p className="para-lg text-[#F8FCDD]">
                  Crafting and executing comprehensive advertising campaigns
                  to reach the target audience effectively.
                </p>
                <Link to="/service-details" className="relative inline-flex h-auto w-[50px] items-center justify-center overflow-hidden">
                  <img src="assets/img/icons/icon-buttery-white-solid-arrow-right.svg" alt="icon-buttery-white-solid-arrow-right" width="50" height="49" className="translate-x-0 transition-all duration-300 group-hover:translate-x-full" />
                  <img src="assets/img/icons/icon-blue-solid-arrow-right.svg" alt="icon-blue-solid-arrow-right" width="50" height="49" className="absolute -translate-x-full transition-all duration-300 group-hover:translate-x-0" />
                </Link>
              </li>
              {/* <!-- Service Item --> */}
              {/* <!-- Service Item --> */}
              <li className="jos group grid grid-cols-1 items-center gap-8 rounded-[5px] bg-[#F8FCDD]/5 p-10 lg:grid-cols-[0.75fr_1fr_50px] lg:gap-12 xl:gap-8 xxl:gap-32">
                <Link to="/service-details" className="font-bricolageGrotesque text-3xl font-bold leading-[1.26] text-[#F8FCDD] lg:text-[38px]">2. Strategic Planning</Link>
                <p className="para-lg text-[#F8FCDD]">
                  Guide advertising efforts, ensuring alignment with overall
                  business goals and market conditions.
                </p>
                <Link to="/service-details" className="relative inline-flex h-auto w-[50px] items-center justify-center overflow-hidden">
                  <img src="assets/img/icons/icon-buttery-white-solid-arrow-right.svg" alt="icon-buttery-white-solid-arrow-right" width="50" height="49" className="translate-x-0 transition-all duration-300 group-hover:translate-x-full" />
                  <img src="assets/img/icons/icon-blue-solid-arrow-right.svg" alt="icon-blue-solid-arrow-right" width="50" height="49" className="absolute -translate-x-full transition-all duration-300 group-hover:translate-x-0" />
                </Link>
              </li>
              {/* <!-- Service Item --> */}
              {/* <!-- Service Item --> */}
              <li className="jos group grid grid-cols-1 items-center gap-8 rounded-[5px] bg-[#F8FCDD]/5 p-10 lg:grid-cols-[0.75fr_1fr_50px] lg:gap-12 xl:gap-8 xxl:gap-32">
                <Link to="/service-details" className="font-bricolageGrotesque text-3xl font-bold leading-[1.26] text-[#F8FCDD] lg:text-[38px]">3. TV Advertising:</Link>
                <p className="para-lg text-[#F8FCDD]">
                  Effective TV advertising is the auditory aspect of the
                  medium to convey the client's message.
                </p>
                <Link to="/service-details" className="relative inline-flex h-auto w-[50px] items-center justify-center overflow-hidden">
                  <img src="assets/img/icons/icon-buttery-white-solid-arrow-right.svg" alt="icon-buttery-white-solid-arrow-right" width="50" height="49" className="translate-x-0 transition-all duration-300 group-hover:translate-x-full" />
                  <img src="assets/img/icons/icon-blue-solid-arrow-right.svg" alt="icon-blue-solid-arrow-right" width="50" height="49" className="absolute -translate-x-full transition-all duration-300 group-hover:translate-x-0" />
                </Link>
              </li>
              {/* <!-- Service Item --> */}
              {/* <!-- Service Item --> */}
              <li className="jos group grid grid-cols-1 items-center gap-8 rounded-[5px] bg-[#F8FCDD]/5 p-10 lg:grid-cols-[0.75fr_1fr_50px] lg:gap-12 xl:gap-8 xxl:gap-32">
                <Link to="/service-details" className="font-bricolageGrotesque text-3xl font-bold leading-[1.26] text-[#F8FCDD] lg:text-[38px]">4. Social Media Ads:</Link>
                <p className="para-lg text-[#F8FCDD]">
                  Designing and implementing advertising strategies on
                  various social media to increase brand visibility.
                </p>
                <Link to="/service-details" className="relative inline-flex h-auto w-[50px] items-center justify-center overflow-hidden">
                  <img src="assets/img/icons/icon-buttery-white-solid-arrow-right.svg" alt="icon-buttery-white-solid-arrow-right" width="50" height="49" className="translate-x-0 transition-all duration-300 group-hover:translate-x-full" />
                  <img src="assets/img/icons/icon-blue-solid-arrow-right.svg" alt="icon-blue-solid-arrow-right" width="50" height="49" className="absolute -translate-x-full transition-all duration-300 group-hover:translate-x-0" />
                </Link>
              </li>
              {/* <!-- Service Item --> */}
              {/* <!-- Service Item --> */}
              <li className="jos group grid grid-cols-1 items-center gap-8 rounded-[5px] bg-[#F8FCDD]/5 p-10 lg:grid-cols-[0.75fr_1fr_50px] lg:gap-12 xl:gap-8 xxl:gap-32">
                <Link to="/service-details" className="font-bricolageGrotesque text-3xl font-bold leading-[1.26] text-[#F8FCDD] lg:text-[38px]">5. Direct Mail Ads:</Link>
                <p className="para-lg text-[#F8FCDD]">
                  Creating targeted and personalized advertising materials
                  sent directly to a predefined audience.
                </p>
                <Link to="/service-details" className="relative inline-flex h-auto w-[50px] items-center justify-center overflow-hidden">
                  <img src="assets/img/icons/icon-buttery-white-solid-arrow-right.svg" alt="icon-buttery-white-solid-arrow-right" width="50" height="49" className="translate-x-0 transition-all duration-300 group-hover:translate-x-full" />
                  <img src="assets/img/icons/icon-blue-solid-arrow-right.svg" alt="icon-blue-solid-arrow-right" width="50" height="49" className="absolute -translate-x-full transition-all duration-300 group-hover:translate-x-0" />
                </Link>
              </li>
              {/* <!-- Service Item --> */}
            </ul>
            {/* <!-- Service List --> */}
          </div>
          {/* <!-- Section Container --> */}
        </div>
        {/* <!-- Section Space --> */}

        {/* <!-- Background Element --> */}
        <div className="absolute right-5 top-5 -z-10 hidden animate-pulse lg:inline-block">
          <img src="assets/img/elemnts/th-7-hero-shape.svg" alt="th-7-hero-shape" width="259" height="268" />
        </div>
        {/* <!-- Background Element --> */}
      </div>
      {/* <!-- Section Background --> */}
    </section>
  )
}
