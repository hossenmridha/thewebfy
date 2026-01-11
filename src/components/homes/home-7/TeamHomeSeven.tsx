
import { Link } from "react-router-dom"
 

export default function TeamHomeSeven() {
  return (
    <section className="section-tam">
      {/* <!-- Section Space --> */}
      <div className="section-space-bottom">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Section Block --> */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-10 md:mb-[60px] lg:mb-20">
            <h2 className="jos max-w-[700px] font-bricolageGrotesque text-4xl font-bold leading-[1.033] -tracking-[1px] text-[#0B1040] sm:text-5xl lg:text-6xl xl:text-7xl xxl:text-[90px]">
              Talented people of our company
            </h2>
            <Link to="/team" className="group inline-flex rounded border-2 border-[#4659FF] bg-[#4659FF] px-6 py-3 text-base font-bold text-white lg:px-8 lg:py-4 xl:px-[42px]">
              <div className="relative flex items-center justify-center overflow-hidden">
                <span className="translate-y-0 transition-all duration-300 group-hover:-translate-y-full">Meet All Members</span>
                <span className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0">Meet All Members</span>
              </div>
            </Link>
          </div>
          {/* <!-- Section Block --> */}

          {/* <!-- Team List --> */}
          <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* <!-- Team Item --> */}
            <li className="jos" data-jos_animation="flip-left">
              <Link to="/team-details" className="overflow-hidden rounded-[10px]">
                <img src="assets/img/images/th-7/team-img-1.jpg" alt="team-img-1" width="416" height="450" className="h-auto w-full" />
              </Link>

              <div className="mt-4 text-[#0B1040]">
                <Link to="/team-details" className="block font-bricolageGrotesque text-3xl font-bold leading-[1.26] lg:text-[38px]">Adam Smith</Link>
                <span className="mt-[10px] text-lg leading-[1.42] md:text-xl lg:text-[21px]">Head of Digital Advertising</span>
              </div>
            </li>
            {/* <!-- Team Item --> */}
            {/* <!-- Team Item --> */}
            <li className="jos" data-jos_animation="flip-left">
              <Link to="/team-details" className="overflow-hidden rounded-[10px]">
                <img src="assets/img/images/th-7/team-img-2.jpg" alt="team-img-2" width="416" height="450" className="h-auto w-full" />
              </Link>

              <div className="mt-4 text-[#0B1040]">
                <Link to="/team-details" className="block font-bricolageGrotesque text-3xl font-bold leading-[1.26] lg:text-[38px]">Justine Mark</Link>
                <span className="mt-[10px] text-lg leading-[1.42] md:text-xl lg:text-[21px]">Commercial Director</span>
              </div>
            </li>
            {/* <!-- Team Item --> */}
            {/* <!-- Team Item --> */}
            <li className="jos" data-jos_animation="flip-left">
              <Link to="/team-details" className="overflow-hidden rounded-[10px]">
                <img src="assets/img/images/th-7/team-img-3.jpg" alt="team-img-3" width="416" height="450" className="h-auto w-full" />
              </Link>

              <div className="mt-4 text-[#0B1040]">
                <Link to="/team-details" className="block font-bricolageGrotesque text-3xl font-bold leading-[1.26] lg:text-[38px]">Robert Harz</Link>
                <span className="mt-[10px] text-lg leading-[1.42] md:text-xl lg:text-[21px]">Chief Data Officer</span>
              </div>
            </li>
            {/* <!-- Team Item --> */}
          </ul>
          {/* <!-- Team List --> */}
        </div>
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>
  )
}
