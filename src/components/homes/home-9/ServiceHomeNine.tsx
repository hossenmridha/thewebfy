import { Link } from "react-router-dom";


export default function ServiceHomeNine() {
  return (
    <section className="section-service">
      {/* <!-- Section Space --> */}
      <div className="section-space-bottom">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Section Block --> */}
          <div className="mx-auto mb-10 max-w-md text-center md:mb-[60px] md:max-w-xl lg:mb-20 lg:max-w-3xl">
            <h2 className="font-epilogue text-4xl leading-[1.05] md:text-5xl lg:text-6xl xl:text-[80px]">
              Our solutions help brands gain profit
            </h2>
          </div>
          {/* <!-- Section Block --> */}

          {/* <!-- Service List --> */}
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {/* <!-- Service Item --> */}
            <li className="jos">
              <div className="group flex h-full flex-col items-baseline rounded-[10px] border-[3px] border-[#131313] px-5 py-[30px]">
                {/* <!-- Icon --> */}
                <div className="h-20 w-auto">
                  <img src="assets/img/icons/th-9-service-icon-1.svg" alt="th-9-service-icon-1" width="75" height="80" />
                </div>
                {/* <!-- Icon --> */}
                {/* <!-- Content --> */}
                <div className="mb-6 mt-6 text-[#131313]">
                  <Link to="/service-details" className="mb-4 block font-epilogue text-2xl font-semibold leading-[1.14] -tracking-[1px] lg:text-[28px]">Social media management</Link>
                  <p className="para-lg">
                    Engaging with the audience to build relationships and
                    foster community.
                  </p>
                </div>
                {/* <!-- Content --> */}
                {/* <!-- link --> */}
                <Link to="/service-details" className="relative mt-auto inline-flex items-center justify-center overflow-hidden" aria-label="service-details-link">
                  <img src="assets/img/icons/icon-black-normal-arrow-right.svg" alt="icon-black-normal-arrow-right.svg" width="30" height="30" className="translate-x-0 transition-all duration-300 group-hover:translate-x-full" />
                  <img src="assets/img/icons/icon-blue-arrow-right.svg" alt="icon-blue-arrow-right" width="30" height="30" className="absolute -translate-x-full transition-all duration-300 group-hover:translate-x-0" />
                </Link>
                {/* <!-- link --> */}
              </div>
            </li>
            {/* <!-- Service Item --> */}
            {/* <!-- Service Item --> */}
            <li className="jos">
              <div className="group flex h-full flex-col items-baseline rounded-[10px] border-[3px] border-[#131313] px-5 py-[30px]">
                {/* <!-- Icon --> */}
                <div className="h-20 w-auto">
                  <img src="assets/img/icons/th-9-service-icon-2.svg" alt="th-9-service-icon-2" width="72" height="80" />
                </div>
                {/* <!-- Icon --> */}
                {/* <!-- Content --> */}
                <div className="mb-6 mt-6 text-[#131313]">
                  <Link to="/service-details" className="mb-4 block font-epilogue text-2xl font-semibold leading-[1.14] -tracking-[1px] lg:text-[28px]">Paid advertising campaigns</Link>
                  <p className="para-lg">
                    Advertising campaigns on social by media platform
                    various ad formats.
                  </p>
                </div>
                {/* <!-- Content --> */}
                {/* <!-- link --> */}
                <Link to="/service-details" className="relative mt-auto inline-flex items-center justify-center overflow-hidden" aria-label="service-details-link">
                  <img src="assets/img/icons/icon-black-normal-arrow-right.svg" alt="icon-black-normal-arrow-right.svg" width="30" height="30" className="translate-x-0 transition-all duration-300 group-hover:translate-x-full" />
                  <img src="assets/img/icons/icon-blue-arrow-right.svg" alt="icon-blue-arrow-right" width="30" height="30" className="absolute -translate-x-full transition-all duration-300 group-hover:translate-x-0" />
                </Link>
                {/* <!-- link --> */}
              </div>
            </li>
            {/* <!-- Service Item --> */}
            {/* <!-- Service Item --> */}
            <li className="jos">
              <div className="group flex h-full flex-col items-baseline rounded-[10px] border-[3px] border-[#131313] px-5 py-[30px]">
                {/* <!-- Icon --> */}
                <div className="h-20 w-auto">
                  <img src="assets/img/icons/th-9-service-icon-3.svg" alt="th-9-service-icon-3" width="109" height="80" />
                </div>
                {/* <!-- Icon --> */}
                {/* <!-- Content --> */}
                <div className="mb-6 mt-6 text-[#131313]">
                  <Link to="/service-details" className="mb-4 block font-epilogue text-2xl font-semibold leading-[1.14] -tracking-[1px] lg:text-[28px]">Content creation</Link>
                  <p className="para-lg">
                    We create engaging and relevant content for social media
                    platforms.
                  </p>
                </div>
                {/* <!-- Content --> */}
                {/* <!-- link --> */}
                <Link to="/service-details" className="relative mt-auto inline-flex items-center justify-center overflow-hidden" aria-label="service-details-link">
                  <img src="assets/img/icons/icon-black-normal-arrow-right.svg" alt="icon-black-normal-arrow-right.svg" width="30" height="30" className="translate-x-0 transition-all duration-300 group-hover:translate-x-full" />
                  <img src="assets/img/icons/icon-blue-arrow-right.svg" alt="icon-blue-arrow-right" width="30" height="30" className="absolute -translate-x-full transition-all duration-300 group-hover:translate-x-0" />
                </Link>
                {/* <!-- link --> */}
              </div>
            </li>
            {/* <!-- Service Item --> */}
            {/* <!-- Service Item --> */}
            <li className="jos">
              <div className="group flex h-full flex-col items-baseline rounded-[10px] border-[3px] border-[#131313] px-5 py-[30px]">
                {/* <!-- Icon --> */}
                <div className="h-20 w-auto">
                  <img src="assets/img/icons/th-9-service-icon-4.svg" alt="th-9-service-icon-4" width="70" height="80" />
                </div>
                {/* <!-- Icon --> */}
                {/* <!-- Content --> */}
                <div className="mb-6 mt-6 text-[#131313]">
                  <Link to="/service-details" className="mb-4 block font-epilogue text-2xl font-semibold leading-[1.14] -tracking-[1px] lg:text-[28px]">Social media audits</Link>
                  <p className="para-lg">
                    Conduct audits of clients' existing social media
                    profiles & strategies.
                  </p>
                </div>
                {/* <!-- Content --> */}
                {/* <!-- link --> */}
                <Link to="/service-details" className="relative mt-auto inline-flex items-center justify-center overflow-hidden" aria-label="service-details-link">
                  <img src="assets/img/icons/icon-black-normal-arrow-right.svg" alt="icon-black-normal-arrow-right.svg" width="30" height="30" className="translate-x-0 transition-all duration-300 group-hover:translate-x-full" />
                  <img src="assets/img/icons/icon-blue-arrow-right.svg" alt="icon-blue-arrow-right" width="30" height="30" className="absolute -translate-x-full transition-all duration-300 group-hover:translate-x-0" />
                </Link>
                {/* <!-- link --> */}
              </div>
            </li>
            {/* <!-- Service Item --> */}
            {/* <!-- Service Item --> */}
            <li className="jos">
              <div className="group flex h-full flex-col items-baseline rounded-[10px] border-[3px] border-[#131313] px-5 py-[30px]">
                {/* <!-- Icon --> */}
                <div className="h-20 w-auto">
                  <img src="assets/img/icons/th-9-service-icon-5.svg" alt="th-9-service-icon-5" width="91" height="80" />
                </div>
                {/* <!-- Icon --> */}
                {/* <!-- Content --> */}
                <div className="mb-6 mt-6 text-[#131313]">
                  <Link to="/service-details" className="mb-4 block font-epilogue text-2xl font-semibold leading-[1.14] -tracking-[1px] lg:text-[28px]">Influencer marketing</Link>
                  <p className="para-lg">
                    Collaborate with influencers and brand ambassadors
                    amplify reach.
                  </p>
                </div>
                {/* <!-- Content --> */}
                {/* <!-- link --> */}
                <Link to="/service-details" className="relative mt-auto inline-flex items-center justify-center overflow-hidden" aria-label="service-details-link">
                  <img src="assets/img/icons/icon-black-normal-arrow-right.svg" alt="icon-black-normal-arrow-right.svg" width="30" height="30" className="translate-x-0 transition-all duration-300 group-hover:translate-x-full" />
                  <img src="assets/img/icons/icon-blue-arrow-right.svg" alt="icon-blue-arrow-right" width="30" height="30" className="absolute -translate-x-full transition-all duration-300 group-hover:translate-x-0" />
                </Link>
                {/* <!-- link --> */}
              </div>
            </li>
            {/* <!-- Service Item --> */}
            {/* <!-- Service Item --> */}
            <li className="jos">
              <div className="group flex h-full flex-col items-baseline rounded-[10px] border-[3px] border-[#131313] px-5 py-[30px]">
                {/* <!-- Icon --> */}
                <div className="h-20 w-auto">
                  <img src="assets/img/icons/th-9-service-icon-6.svg" alt="th-9-service-icon-6" width="80" height="80" />
                </div>
                {/* <!-- Icon --> */}
                {/* <!-- Content --> */}
                <div className="mb-6 mt-6 text-[#131313]">
                  <Link to="/service-details" className="mb-4 block font-epilogue text-2xl font-semibold leading-[1.14] -tracking-[1px] lg:text-[28px]">Training and consultation</Link>
                  <p className="para-lg">
                    Training sessions and consultations to educate clients
                    on social media.
                  </p>
                </div>
                {/* <!-- Content --> */}
                {/* <!-- link --> */}
                <Link to="/service-details" className="relative mt-auto inline-flex items-center justify-center overflow-hidden" aria-label="service-details-link">
                  <img src="assets/img/icons/icon-black-normal-arrow-right.svg" alt="icon-black-normal-arrow-right.svg" width="30" height="30" className="translate-x-0 transition-all duration-300 group-hover:translate-x-full" />
                  <img src="assets/img/icons/icon-blue-arrow-right.svg" alt="icon-blue-arrow-right" width="30" height="30" className="absolute -translate-x-full transition-all duration-300 group-hover:translate-x-0" />
                </Link>
                {/* <!-- link --> */}
              </div>
            </li>
            {/* <!-- Service Item --> */}
          </ul>
          {/* <!-- Service List --> */}
        </div>
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>

  )
}
