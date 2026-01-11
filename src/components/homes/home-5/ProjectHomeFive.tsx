
import { Link } from "react-router-dom"
 

export default function ProjectHomeFive() {
  return (
    <section className="section-project">
      {/* <!-- Section Space --> */}
      <div className="section-space">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Section Block --> */}
          <div className="jos mb-10 flex flex-wrap items-center justify-between gap-6 md:mb-[60px] lg:mb-20">
            <h2 className="max-w-[480px] font-libreBaskerville text-4xl !leading-[1.14] -tracking-[0.5px] text-[#221F1A] md:text-5xl lg:max-w-2xl lg:text-6xl xl:max-w-3xl xxl:text-[70px]">
              Successful projects that represent us
            </h2>

            <Link to="/portfolio-1" className="group flex rounded-[50px] border-2 border-[#FBD718] bg-[#FBD718] px-8 py-3 text-base font-bold text-[#073D30] lg:px-11 lg:py-4">
              <div className="relative inline-flex items-center justify-center overflow-hidden">
                <span className="block translate-y-0 transition-all duration-300 group-hover:-translate-y-full">View All Works</span>
                <span className="absolute block translate-y-full transition-all duration-300 group-hover:translate-y-0">View All Works</span>
              </div>
            </Link>
          </div>
          {/* <!-- Section Block --> */}

          {/* <!-- Project List --> */}
          <ul className="grid grid-cols-12 gap-x-6 gap-y-10">
            {/* <!-- Project Item --> */}
            <li className="jos group col-span-12 md:col-span-6 lg:col-span-5">
              {/* <!-- Thumbnail --> */}
              <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-[20px] lg:h-80 xl:h-[500px]">
                <img src="assets/img/images/th-5/project-img-1.jpg" alt="project-img-1" width="526" height="501" className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />

                <Link to="/portfolio-details" className="absolute inline-flex h-20 w-20 scale-50 items-center justify-center rounded-[50%] bg-white text-base font-bold uppercase text-[#073D30] opacity-0 group-hover:scale-100 group-hover:opacity-100">
                  view
                </Link>
              </div>
              {/* <!-- Thumbnail --> */}
              {/* <!-- Content --> */}
              <div className="mt-6">
                <Link to="/portfolio-details" className="w-full font-libreBaskerville text-2xl font-bold leading-[1.4] -tracking-[0.5px] text-[#221F1A] lg:text-[30px]">Website Development</Link>
                <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4 text-[#0C0C0C]">
                  <Link to="/portfolio-1" className="relative after:absolute after:left-[calc(100%+16px)] after:top-1/2 after:h-2 after:w-2 after:-translate-y-1/2 after:rounded-[50%] after:bg-[#0C0C0C] last-of-type:after:hidden">XYZ Company</Link>
                  <Link to="/portfolio-1" className="relative after:absolute after:left-[calc(100%+16px)] after:top-1/2 after:h-2 after:w-2 after:-translate-y-1/2 after:rounded-[50%] after:bg-[#0C0C0C] last-of-type:after:hidden">Web Design</Link>
                </div>
              </div>
              {/* <!-- Content --> */}
            </li>
            {/* <!-- Project Item --> */}
            {/* <!-- Project Item --> */}
            <li className="jos group col-span-12 md:col-span-6 lg:col-span-7">
              {/* <!-- Thumbnail --> */}
              <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-[20px] lg:h-80 xl:h-[500px]">
                <img src="assets/img/images/th-5/project-img-2.jpg" alt="project-img-2" width="746" height="501" className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />

                <Link to="/portfolio-details" className="absolute inline-flex h-20 w-20 scale-50 items-center justify-center rounded-[50%] bg-white text-base font-bold uppercase text-[#073D30] opacity-0 group-hover:scale-100 group-hover:opacity-100">
                  view
                </Link>
              </div>
              {/* <!-- Thumbnail --> */}
              {/* <!-- Content --> */}
              <div className="mt-6">
                <Link to="/portfolio-details" className="w-full font-libreBaskerville text-2xl font-bold leading-[1.4] -tracking-[0.5px] text-[#221F1A] lg:text-[30px]">Online Advertising Campaigns</Link>
                <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4 text-[#0C0C0C]">
                  <Link to="/portfolio-1" className="relative after:absolute after:left-[calc(100%+16px)] after:top-1/2 after:h-2 after:w-2 after:-translate-y-1/2 after:rounded-[50%] after:bg-[#0C0C0C] last-of-type:after:hidden">J&J Group</Link>
                  <Link to="/portfolio-1" className="relative after:absolute after:left-[calc(100%+16px)] after:top-1/2 after:h-2 after:w-2 after:-translate-y-1/2 after:rounded-[50%] after:bg-[#0C0C0C] last-of-type:after:hidden">Marketing</Link>
                </div>
              </div>
              {/* <!-- Content --> */}
            </li>
            {/* <!-- Project Item --> */}
            {/* <!-- Project Item --> */}
            <li className="jos group col-span-12 md:col-span-6 lg:col-span-7">
              {/* <!-- Thumbnail --> */}
              <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-[20px] lg:h-80 xl:h-[500px]">
                <img src="assets/img/images/th-5/project-img-3.jpg" alt="project-img-3" width="746" height="501" className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />

                <Link to="/portfolio-details" className="absolute inline-flex h-20 w-20 scale-50 items-center justify-center rounded-[50%] bg-white text-base font-bold uppercase text-[#073D30] opacity-0 group-hover:scale-100 group-hover:opacity-100">
                  view
                </Link>
              </div>
              {/* <!-- Thumbnail --> */}
              {/* <!-- Content --> */}
              <div className="mt-6">
                <Link to="/portfolio-details" className="w-full font-libreBaskerville text-2xl font-bold leading-[1.4] -tracking-[0.5px] text-[#221F1A] lg:text-[30px]">Online Reputation Management</Link>
                <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4 text-[#0C0C0C]">
                  <Link to="/portfolio-1" className="relative after:absolute after:left-[calc(100%+16px)] after:top-1/2 after:h-2 after:w-2 after:-translate-y-1/2 after:rounded-[50%] after:bg-[#0C0C0C] last-of-type:after:hidden">McCompany</Link>
                  <Link to="/portfolio-1" className="relative after:absolute after:left-[calc(100%+16px)] after:top-1/2 after:h-2 after:w-2 after:-translate-y-1/2 after:rounded-[50%] after:bg-[#0C0C0C] last-of-type:after:hidden">Branding</Link>
                </div>
              </div>
              {/* <!-- Content --> */}
            </li>
            {/* <!-- Project Item --> */}
            {/* <!-- Project Item --> */}
            <li className="jos group col-span-12 md:col-span-6 lg:col-span-5">
              {/* <!-- Thumbnail --> */}
              <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-[20px] lg:h-80 xl:h-[500px]">
                <img src="assets/img/images/th-5/project-img-4.jpg" alt="project-img-4" width="526" height="501" className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />

                <Link to="/portfolio-details" className="absolute inline-flex h-20 w-20 scale-50 items-center justify-center rounded-[50%] bg-white text-base font-bold uppercase text-[#073D30] opacity-0 group-hover:scale-100 group-hover:opacity-100">
                  view
                </Link>
              </div>
              {/* <!-- Thumbnail --> */}
              {/* <!-- Content --> */}
              <div className="mt-6">
                <Link to="/portfolio-details" className="w-full font-libreBaskerville text-2xl font-bold leading-[1.4] -tracking-[0.5px] text-[#221F1A] lg:text-[30px]">Affiliate Marketing</Link>
                <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4 text-[#0C0C0C]">
                  <Link to="/portfolio-1" className="relative after:absolute after:left-[calc(100%+16px)] after:top-1/2 after:h-2 after:w-2 after:-translate-y-1/2 after:rounded-[50%] after:bg-[#0C0C0C] last-of-type:after:hidden">Walmart</Link>
                  <Link to="/portfolio-1" className="relative after:absolute after:left-[calc(100%+16px)] after:top-1/2 after:h-2 after:w-2 after:-translate-y-1/2 after:rounded-[50%] after:bg-[#0C0C0C] last-of-type:after:hidden">Sale Marketing</Link>
                </div>
              </div>
              {/* <!-- Content --> */}
            </li>
            {/* <!-- Project Item --> */}
          </ul>
          {/* <!-- Project List --> */}
        </div>
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>
  )
}
