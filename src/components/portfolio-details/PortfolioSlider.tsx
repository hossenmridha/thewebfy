 
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




export default function PortfolioSlider() {
  return (
    <section className="section-portfolio">
      {/* <!-- Section Space --> */}
      <div className="section-space">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Section Block --> */}
          <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
            <h2 className="jos">
              Explore our latest successful projects
              <span>
                <img src="assets/img/elemnts/shape-light-lime-5-arms-star.svg" alt="shape-light-lime-5-arms-star" width="74" height="70" className="inline-block h-auto w-8 md:w-10 lg:w-[57px]" />
              </span>
            </h2>
          </div>
          {/* <!-- Section Block --> */}
        </div>

        {/* <!-- Project Slider Area --> */}
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="swiper projectSliderTwo lg:-mx-6">

          {/* <!-- Single Slide Item --> */}
          <SwiperSlide className="swiper-slide">
            <div className="group relative overflow-hidden rounded-[25px] border-2 border-black lg:border-[5px]">
              {/* <!-- Thumbnail --> */}
              <img src="assets/img/images/th-1/project-slide-img-1.jpg" alt="project-slide-img-1.jpg" width="613" height="390" className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
              {/* <!-- Thumbnail --> */}

              {/* <!-- Content --> */}
              <div className="absolute bottom-0 z-10 flex w-full flex-col items-start justify-between gap-x-7 gap-y-8 p-6 transition-all duration-300 sm:flex-row sm:items-center lg:translate-y-full lg:group-hover:translate-y-0">
                <div className="max-w-[400px] flex-1 text-colorButteryWhite">
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
          </SwiperSlide>
          {/* <!-- Single Slide Item --> */}
          {/* <!-- Single Slide Item --> */}
          <SwiperSlide className="swiper-slide">
            <div className="group relative overflow-hidden rounded-[25px] border-2 border-black lg:border-[5px]">
              {/* <!-- Thumbnail --> */}
              <img src="assets/img/images/th-1/project-slide-img-2.jpg" alt="project-slide-img-2.jpg" width="613" height="390" className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
              {/* <!-- Thumbnail --> */}

              {/* <!-- Content --> */}
              <div className="absolute bottom-0 z-10 flex w-full flex-col items-start justify-between gap-x-7 gap-y-8 p-6 transition-all duration-300 sm:flex-row sm:items-center lg:translate-y-full lg:group-hover:translate-y-0">
                <div className="max-w-[400px] flex-1 text-colorButteryWhite">
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
          </SwiperSlide>
          {/* <!-- Single Slide Item --> */}
          {/* <!-- Single Slide Item --> */}
          <SwiperSlide className="swiper-slide">
            <div className="group relative overflow-hidden rounded-[25px] border-2 border-black lg:border-[5px]">
              {/* <!-- Thumbnail --> */}
              <img src="assets/img/images/th-1/project-slide-img-3.jpg" alt="project-slide-img-3.jpg" width="613" height="390" className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
              {/* <!-- Thumbnail --> */}

              {/* <!-- Content --> */}
              <div className="absolute bottom-0 z-10 flex w-full flex-col items-start justify-between gap-x-7 gap-y-8 p-6 transition-all duration-300 sm:flex-row sm:items-center lg:translate-y-full lg:group-hover:translate-y-0">
                <div className="max-w-[400px] flex-1 text-colorButteryWhite">
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
          </SwiperSlide>
          {/* <!-- Single Slide Item --> */}
          {/* <!-- Single Slide Item --> */}
          <SwiperSlide className="swiper-slide">
            <div className="group relative overflow-hidden rounded-[25px] border-2 border-black lg:border-[5px]">
              {/* <!-- Thumbnail --> */}
              <img src="assets/img/images/th-1/project-slide-img-1.jpg" alt="project-slide-img-1.jpg" width="613" height="390" className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
              {/* <!-- Thumbnail --> */}

              {/* <!-- Content --> */}
              <div className="absolute bottom-0 z-10 flex w-full flex-col items-start justify-between gap-x-7 gap-y-8 p-6 transition-all duration-300 sm:flex-row sm:items-center lg:translate-y-full lg:group-hover:translate-y-0">
                <div className="max-w-[400px] flex-1 text-colorButteryWhite">
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
          </SwiperSlide>
          {/* <!-- Single Slide Item --> */}
          {/* <!-- Single Slide Item --> */}
          <SwiperSlide className="swiper-slide">
            <div className="group relative overflow-hidden rounded-[25px] border-2 border-black lg:border-[5px]">
              {/* <!-- Thumbnail --> */}
              <img src="assets/img/images/th-1/project-slide-img-2.jpg" alt="project-slide-img-2.jpg" width="613" height="390" className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
              {/* <!-- Thumbnail --> */}

              {/* <!-- Content --> */}
              <div className="absolute bottom-0 z-10 flex w-full flex-col items-start justify-between gap-x-7 gap-y-8 p-6 transition-all duration-300 sm:flex-row sm:items-center lg:translate-y-full lg:group-hover:translate-y-0">
                <div className="max-w-[400px] flex-1 text-colorButteryWhite">
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
          </SwiperSlide>
          {/* <!-- Single Slide Item --> */}
          {/* <!-- Single Slide Item --> */}
          <SwiperSlide className="swiper-slide">
            <div className="group relative overflow-hidden rounded-[25px] border-2 border-black lg:border-[5px]">
              {/* <!-- Thumbnail --> */}
              <img src="assets/img/images/th-1/project-slide-img-3.jpg" alt="project-slide-img-3.jpg" width="613" height="390" className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
              {/* <!-- Thumbnail --> */}

              {/* <!-- Content --> */}
              <div className="absolute bottom-0 z-10 flex w-full flex-col items-start justify-between gap-x-7 gap-y-8 p-6 transition-all duration-300 sm:flex-row sm:items-center lg:translate-y-full lg:group-hover:translate-y-0">
                <div className="max-w-[400px] flex-1 text-colorButteryWhite">
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
          </SwiperSlide>
          {/* <!-- Single Slide Item --> */}

        </Swiper>
        {/* <!-- Project Slider Area --> */}
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>
  )
}
