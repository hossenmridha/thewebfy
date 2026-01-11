 
import { Link } from "react-router-dom"
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
 

export default function HeroHomeNine() {
  return (
    <section className="section-hero">
      <div className="relative">
        <div className="relative py-20 md:py-[100px] xl:py-[150px]">
          <div className="container">
            {/* <!-- Hero Area --> */}
            <div className="grid grid-cols-1 items-center gap-y-10 lg:grid-cols-[1fr_minmax(0,0.8fr)]">
              {/* <!-- Hero Left Block --> */}
              <div>
                <span className="mb-[30px] block text-xl font-semibold text-[#3256D2] lg:text-2xl">#No.1 Social Media Marketing Agency You Can Trust</span>
                <h1 className="font-epilogue text-6xl leading-none -tracking-[3px] text-[#131313] md:text-7xl xl:text-8xl xxl:text-[130px]">
                  Amplifying your online presence
                </h1>
                <p className="mt-6 text-xl text-[#131313] xl:text-2xl">
                  We help businesses reach their target audience & achieve
                  their marketing goals through effective online promotion
                  strategies.
                </p>
                <div className="mt-[50px]">
                  <Link to="/contact" className="group inline-flex rounded border-2 border-[#FF5317] bg-[#FF5317] px-6 py-4 text-base font-semibold text-[#FEF6E0]">
                    <div className="relative flex items-center justify-center overflow-hidden">
                      <span className="inline-flex translate-y-0 gap-x-[10px] transition-all duration-300 group-hover:-translate-y-full">Schedule a quick call
                        <img src="assets/img/icons/cheveron-right.svg" alt="icon-cheveron-right" />
                      </span>
                      <span className="absolute inline-flex translate-y-full gap-x-[10px] transition-all duration-300 group-hover:translate-y-0">Schedule a quick call
                        <img src="assets/img/icons/cheveron-right.svg" alt="icon-cheveron-right" />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
              {/* <!-- Hero Left Block --> */}
              {/* <!-- Hero Right Block --> */}
              <div>
                <div className="static right-0 top-1/2 lg:absolute lg:max-w-[42vw] lg:-translate-y-1/2">
                  <Swiper
                    slidesPerView={2}
                    spaceBetween={24}
                    loop={true}
                    speed={5000}
                    modules={[Autoplay]}
                    autoplay={{
                      delay: 1,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      576: {
                        slidesPerView: 3,
                      },
                    }}
                    className="swiper hero-9-slider lg:ml-24">
                    {/* <!-- Additional required wrapper --> */}

                    {/* <!-- Slides --> */}
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-1.png" alt="hero-thumb-img-1" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-2.png" alt="hero-thumb-img-2" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-3.png" alt="hero-thumb-img-3" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-4.png" alt="hero-thumb-img-4" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-5.png" alt="hero-thumb-img-5" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-6.png" alt="hero-thumb-img-6" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-7.png" alt="hero-thumb-img-7" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-8.png" alt="hero-thumb-img-8" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-9.png" alt="hero-thumb-img-9" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>

                  </Swiper>
                  <Swiper
                    slidesPerView={2}
                    spaceBetween={24}
                    loop={true}
                    speed={5000}
                    modules={[Autoplay]}
                    autoplay={{
                      delay: 1,
                      disableOnInteraction: false,
                      reverseDirection: true,
                    }}
                    breakpoints={{
                      576: {
                        slidesPerView: 3,
                      },
                    }}
                    className="swiper hero-9-slider-reverse my-6">
                    {/* <!-- Additional required wrapper --> */}

                    {/* <!-- Slides --> */}
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-1.png" alt="hero-thumb-img-1" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-2.png" alt="hero-thumb-img-2" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-3.png" alt="hero-thumb-img-3" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-4.png" alt="hero-thumb-img-4" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-5.png" alt="hero-thumb-img-5" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-6.png" alt="hero-thumb-img-6" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-7.png" alt="hero-thumb-img-7" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-8.png" alt="hero-thumb-img-8" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-9.png" alt="hero-thumb-img-9" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>

                  </Swiper>
                  <Swiper
                    slidesPerView={2}
                    spaceBetween={24}
                    loop={true}
                    speed={5000}
                    modules={[Autoplay]}
                    autoplay={{
                      delay: 1,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      576: {
                        slidesPerView: 3,
                      },
                    }}
                    className="swiper hero-9-slider lg:ml-24">
                    {/* <!-- Additional required wrapper --> */}

                    {/* <!-- Slides --> */}
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-1.png" alt="hero-thumb-img-1" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-2.png" alt="hero-thumb-img-2" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-3.png" alt="hero-thumb-img-3" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-4.png" alt="hero-thumb-img-4" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-5.png" alt="hero-thumb-img-5" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-6.png" alt="hero-thumb-img-6" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-7.png" alt="hero-thumb-img-7" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-8.png" alt="hero-thumb-img-8" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src="assets/img/images/th-9/hero-thumb-img-9.png" alt="hero-thumb-img-9" width="295" height="197" className="h-auto w-full" />
                    </SwiperSlide>

                  </Swiper>
                </div>
              </div>
              {/* <!-- Hero Right Block --> */}
            </div>
            {/* <!-- Hero Area --> */}
          </div>
        </div>
      </div>
      {/* <!-- Hero Space --> */}
    </section>
  )
}
