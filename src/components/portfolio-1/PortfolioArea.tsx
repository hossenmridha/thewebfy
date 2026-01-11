import { Link } from "react-router-dom";



export default function PortfolioArea() {
  return (
    <section className="section-portfolio">
      {/* <!-- Section Space --> */}
      <div className="section-space">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Section Block --> */}
          <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
            <h2 className="jos">
              Have a wide range of creative projects
              <span>
                <img src="assets/img/elemnts/shape-light-lime-5-arms-star.svg" alt="shape-light-lime-5-arms-star" width="74" height="70" className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]" />
              </span>
            </h2>
          </div>
          {/* <!-- Section Block --> */}

          {/* <!-- Portfolio List --> */}
          <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* <!-- Portfolio Item --> */}
            <li className="jos">
              <div className="group relative overflow-hidden rounded-[25px] border-2 border-black lg:border-[5px]">
                {/* <!-- Thumbnail --> */}
                <img src="assets/img/images/th-1/project-thumbnail-1.jpg" alt="project-thumbnail-1" width="626" height="390" className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
                {/* <!-- Thumbnail --> */}

                {/* <!-- Content --> */}
                <div className="absolute bottom-0 z-10 flex w-full flex-col items-start justify-between gap-x-7 gap-y-8 p-6 transition-all duration-300 sm:flex-row sm:items-center lg:translate-y-full lg:group-hover:translate-y-0">
                  <div className="max-w-[520px] flex-1 text-colorButteryWhite">
                    <Link to="/portfolio-details" className="mb-[10px] block font-syne text-2xl font-bold leading-[1.4] hover:text-colorLightLime md:text-3xl">Product Design</Link>
                    <p className="line-clamp-2">
                      Developing the look and feel of physical products,
                      aesthetics, and functionality.
                    </p>
                  </div>
                  <Link to="/portfolio-details" className="relative hidden items-start justify-center overflow-hidden sm:inline-flex">
                    <img src="assets/img/icons/icon-buttery-white-arrow-right.svg" alt="icon-buttery-white-arrow-right" width="34" height="28" className="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0" />
                    <img src="assets/img/icons/icon-light-lime-arrow-right.svg" alt="light-lime-arrow-right" width="34" height="28" className="absolute -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </div>
                {/* <!-- Content --> */}

                {/* <!-- Overlay --> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-black/35 transition-all ease-in-out lg:translate-y-full lg:group-hover:translate-y-0"></div>
                {/* <!-- Overlay --> */}
              </div>
            </li>
            {/* <!-- Portfolio Item --> */}
            {/* <!-- Portfolio Item --> */}
            <li className="jos">
              <div className="group relative overflow-hidden rounded-[25px] border-2 border-black lg:border-[5px]">
                {/* <!-- Thumbnail --> */}
                <img src="assets/img/images/th-1/project-thumbnail-2.jpg" alt="project-thumbnail-2" width="626" height="390" className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
                {/* <!-- Thumbnail --> */}

                {/* <!-- Content --> */}
                <div className="absolute bottom-0 z-10 flex w-full flex-col items-start justify-between gap-x-7 gap-y-8 p-6 transition-all duration-300 sm:flex-row sm:items-center lg:translate-y-full lg:group-hover:translate-y-0">
                  <div className="max-w-[520px] flex-1 text-colorButteryWhite">
                    <Link to="/portfolio-details" className="mb-[10px] block font-syne text-2xl font-bold leading-[1.4] hover:text-colorLightLime md:text-3xl">Logo and Branding</Link>
                    <p className="line-clamp-2">
                      Creating or refreshing a company's logo and developing
                      a cohesive visual identity.
                    </p>
                  </div>
                  <Link to="/portfolio-details" className="relative hidden items-start justify-center overflow-hidden sm:inline-flex">
                    <img src="assets/img/icons/icon-buttery-white-arrow-right.svg" alt="icon-buttery-white-arrow-right" width="34" height="28" className="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0" />
                    <img src="assets/img/icons/icon-light-lime-arrow-right.svg" alt="light-lime-arrow-right" width="34" height="28" className="absolute -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </div>
                {/* <!-- Content --> */}

                {/* <!-- Overlay --> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-black/35 transition-all ease-in-out lg:translate-y-full lg:group-hover:translate-y-0"></div>
                {/* <!-- Overlay --> */}
              </div>
            </li>
            {/* <!-- Portfolio Item --> */}
            {/* <!-- Portfolio Item --> */}
            <li className="jos">
              <div className="group relative overflow-hidden rounded-[25px] border-2 border-black lg:border-[5px]">
                {/* <!-- Thumbnail --> */}
                <img src="assets/img/images/th-1/project-thumbnail-3.jpg" alt="project-thumbnail-3" width="626" height="390" className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
                {/* <!-- Thumbnail --> */}

                {/* <!-- Content --> */}
                <div className="absolute bottom-0 z-10 flex w-full flex-col items-start justify-between gap-x-7 gap-y-8 p-6 transition-all duration-300 sm:flex-row sm:items-center lg:translate-y-full lg:group-hover:translate-y-0">
                  <div className="max-w-[520px] flex-1 text-colorButteryWhite">
                    <Link to="/portfolio-details" className="mb-[10px] block font-syne text-2xl font-bold leading-[1.4] hover:text-colorLightLime md:text-3xl">App UI/UX Design</Link>
                    <p className="line-clamp-2">
                      Designing the UI/UXe for mobile apps and web
                      applications to ensure usability & engagement.
                    </p>
                  </div>
                  <Link to="/portfolio-details" className="relative hidden items-start justify-center overflow-hidden sm:inline-flex">
                    <img src="assets/img/icons/icon-buttery-white-arrow-right.svg" alt="icon-buttery-white-arrow-right" width="34" height="28" className="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0" />
                    <img src="assets/img/icons/icon-light-lime-arrow-right.svg" alt="light-lime-arrow-right" width="34" height="28" className="absolute -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </div>
                {/* <!-- Content --> */}

                {/* <!-- Overlay --> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-black/35 transition-all ease-in-out lg:translate-y-full lg:group-hover:translate-y-0"></div>
                {/* <!-- Overlay --> */}
              </div>
            </li>
            {/* <!-- Portfolio Item --> */}
            {/* <!-- Portfolio Item --> */}
            <li className="jos">
              <div className="group relative overflow-hidden rounded-[25px] border-2 border-black lg:border-[5px]">
                {/* <!-- Thumbnail --> */}
                <img src="assets/img/images/th-1/project-thumbnail-4.jpg" alt="project-thumbnail-4" width="626" height="390" className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
                {/* <!-- Thumbnail --> */}

                {/* <!-- Content --> */}
                <div className="absolute bottom-0 z-10 flex w-full flex-col items-start justify-between gap-x-7 gap-y-8 p-6 transition-all duration-300 sm:flex-row sm:items-center lg:translate-y-full lg:group-hover:translate-y-0">
                  <div className="max-w-[520px] flex-1 text-colorButteryWhite">
                    <Link to="/portfolio-details" className="mb-[10px] block font-syne text-2xl font-bold leading-[1.4] hover:text-colorLightLime md:text-3xl">Packaging Design</Link>
                    <p className="line-clamp-2">
                      Creating packaging solutions for products that not
                      only protect attract customers on store.
                    </p>
                  </div>
                  <Link to="/portfolio-details" className="relative hidden items-start justify-center overflow-hidden sm:inline-flex">
                    <img src="assets/img/icons/icon-buttery-white-arrow-right.svg" alt="icon-buttery-white-arrow-right" width="34" height="28" className="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0" />
                    <img src="assets/img/icons/icon-light-lime-arrow-right.svg" alt="light-lime-arrow-right" width="34" height="28" className="absolute -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </div>
                {/* <!-- Content --> */}

                {/* <!-- Overlay --> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-black/35 transition-all ease-in-out lg:translate-y-full lg:group-hover:translate-y-0"></div>
                {/* <!-- Overlay --> */}
              </div>
            </li>
            {/* <!-- Portfolio Item --> */}
            {/* <!-- Portfolio Item --> */}
            <li className="jos">
              <div className="group relative overflow-hidden rounded-[25px] border-2 border-black lg:border-[5px]">
                {/* <!-- Thumbnail --> */}
                <img src="assets/img/images/th-1/project-thumbnail-5.jpg" alt="project-thumbnail-5" width="626" height="390" className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
                {/* <!-- Thumbnail --> */}

                {/* <!-- Content --> */}
                <div className="absolute bottom-0 z-10 flex w-full flex-col items-start justify-between gap-x-7 gap-y-8 p-6 transition-all duration-300 sm:flex-row sm:items-center lg:translate-y-full lg:group-hover:translate-y-0">
                  <div className="max-w-[520px] flex-1 text-colorButteryWhite">
                    <Link to="/portfolio-details" className="mb-[10px] block font-syne text-2xl font-bold leading-[1.4] hover:text-colorLightLime md:text-3xl">Product Design</Link>
                    <p className="line-clamp-2">
                      Developing the look and feel of physical products,
                      considering ergonomics, aesthetics, and functionality.
                    </p>
                  </div>
                  <Link to="/portfolio-details" className="relative hidden items-start justify-center overflow-hidden sm:inline-flex">
                    <img src="assets/img/icons/icon-buttery-white-arrow-right.svg" alt="icon-buttery-white-arrow-right" width="34" height="28" className="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0" />
                    <img src="assets/img/icons/icon-light-lime-arrow-right.svg" alt="light-lime-arrow-right" width="34" height="28" className="absolute -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </div>
                {/* <!-- Content --> */}

                {/* <!-- Overlay --> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-black/35 transition-all ease-in-out lg:translate-y-full lg:group-hover:translate-y-0"></div>
                {/* <!-- Overlay --> */}
              </div>
            </li>
            {/* <!-- Portfolio Item --> */}
            {/* <!-- Portfolio Item --> */}
            <li className="jos">
              <div className="group relative overflow-hidden rounded-[25px] border-2 border-black lg:border-[5px]">
                {/* <!-- Thumbnail --> */}
                <img src="assets/img/images/th-1/project-thumbnail-6.jpg" alt="project-thumbnail-6" width="626" height="390" className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
                {/* <!-- Thumbnail --> */}

                {/* <!-- Content --> */}
                <div className="absolute bottom-0 z-10 flex w-full flex-col items-start justify-between gap-x-7 gap-y-8 p-6 transition-all duration-300 sm:flex-row sm:items-center lg:translate-y-full lg:group-hover:translate-y-0">
                  <div className="max-w-[520px] flex-1 text-colorButteryWhite">
                    <Link to="/portfolio-details" className="mb-[10px] block font-syne text-2xl font-bold leading-[1.4] hover:text-colorLightLime md:text-3xl">Environmental Design</Link>
                    <p className="line-clamp-2">
                      Designing trade show booths, exhibition spaces, and
                      immersive installations for events and conferences.
                    </p>
                  </div>
                  <Link to="/portfolio-details" className="relative hidden items-start justify-center overflow-hidden sm:inline-flex">
                    <img src="assets/img/icons/icon-buttery-white-arrow-right.svg" alt="icon-buttery-white-arrow-right" width="34" height="28" className="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0" />
                    <img src="assets/img/icons/icon-light-lime-arrow-right.svg" alt="light-lime-arrow-right" width="34" height="28" className="absolute -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </div>
                {/* <!-- Content --> */}

                {/* <!-- Overlay --> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-black/35 transition-all ease-in-out lg:translate-y-full lg:group-hover:translate-y-0"></div>
                {/* <!-- Overlay --> */}
              </div>
            </li>
            {/* <!-- Portfolio Item --> */}
            {/* <!-- Portfolio Item --> */}
            <li className="jos">
              <div className="group relative overflow-hidden rounded-[25px] border-2 border-black lg:border-[5px]">
                {/* <!-- Thumbnail --> */}
                <img src="assets/img/images/th-1/project-thumbnail-7.jpg" alt="project-thumbnail-7" width="626" height="390" className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
                {/* <!-- Thumbnail --> */}

                {/* <!-- Content --> */}
                <div className="absolute bottom-0 z-10 flex w-full flex-col items-start justify-between gap-x-7 gap-y-8 p-6 transition-all duration-300 sm:flex-row sm:items-center lg:translate-y-full lg:group-hover:translate-y-0">
                  <div className="max-w-[520px] flex-1 text-colorButteryWhite">
                    <Link to="/portfolio-details" className="mb-[10px] block font-syne text-2xl font-bold leading-[1.4] hover:text-colorLightLime md:text-3xl">Advertising Campaigns</Link>
                    <p className="line-clamp-2">
                      Developing creative concepts for print, digital, and
                      video advertising campaigns, including ad design and
                      copywriting.
                    </p>
                  </div>
                  <Link to="/portfolio-details" className="relative hidden items-start justify-center overflow-hidden sm:inline-flex">
                    <img src="assets/img/icons/icon-buttery-white-arrow-right.svg" alt="icon-buttery-white-arrow-right" width="34" height="28" className="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0" />
                    <img src="assets/img/icons/icon-light-lime-arrow-right.svg" alt="light-lime-arrow-right" width="34" height="28" className="absolute -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </div>
                {/* <!-- Content --> */}

                {/* <!-- Overlay --> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-black/35 transition-all ease-in-out lg:translate-y-full lg:group-hover:translate-y-0"></div>
                {/* <!-- Overlay --> */}
              </div>
            </li>
            {/* <!-- Portfolio Item --> */}
            {/* <!-- Portfolio Item --> */}
            <li className="jos">
              <div className="group relative overflow-hidden rounded-[25px] border-2 border-black lg:border-[5px]">
                {/* <!-- Thumbnail --> */}
                <img src="assets/img/images/th-1/project-thumbnail-8.jpg" alt="project-thumbnail-8" width="626" height="390" className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
                {/* <!-- Thumbnail --> */}

                {/* <!-- Content --> */}
                <div className="absolute bottom-0 z-10 flex w-full flex-col items-start justify-between gap-x-7 gap-y-8 p-6 transition-all duration-300 sm:flex-row sm:items-center lg:translate-y-full lg:group-hover:translate-y-0">
                  <div className="max-w-[520px] flex-1 text-colorButteryWhite">
                    <Link to="/portfolio-details" className="mb-[10px] block font-syne text-2xl font-bold leading-[1.4] hover:text-colorLightLime md:text-3xl">Website Design & Development</Link>
                    <p className="line-clamp-2">
                      Designing and building user-friendly websites that are
                      visually appealing and responsive to different
                      devices.
                    </p>
                  </div>
                  <Link to="/portfolio-details" className="relative hidden items-start justify-center overflow-hidden sm:inline-flex">
                    <img src="assets/img/icons/icon-buttery-white-arrow-right.svg" alt="icon-buttery-white-arrow-right" width="34" height="28" className="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0" />
                    <img src="assets/img/icons/icon-light-lime-arrow-right.svg" alt="light-lime-arrow-right" width="34" height="28" className="absolute -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </div>
                {/* <!-- Content --> */}

                {/* <!-- Overlay --> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-black/35 transition-all ease-in-out lg:translate-y-full lg:group-hover:translate-y-0"></div>
                {/* <!-- Overlay --> */}
              </div>
            </li>
            {/* <!-- Portfolio Item --> */}
          </ul>
          {/* <!-- Portfolio List --> */}
        </div>
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>
  )
}
