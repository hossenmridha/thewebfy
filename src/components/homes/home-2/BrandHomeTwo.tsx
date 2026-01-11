
 
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css"; 
import { Autoplay } from "swiper/modules";

 

export default function BrandHomeTwo() {
  return (
    <>
      <div className="section-cleint-logo-slider">
        {/* <!-- Section Background --> */}
        <div className="rounded-[5px] bg-colorGondola xxl:mx-[50px]">
          {/* <!-- Section Padding --> */}
          <div className="py-[60px] md:py-20 xl:py-[100px]">
            {/* <!-- Container --> */}
            <div className="container">
              <p className="mb-10 text-center font-clashGrotesk text-lg leading-[1.43] text-white lg:mb-[60px] lg:text-[21px]">
                We’ve helped over 200+ startups grow their business around the
                world
              </p>
            </div>
            {/* <!-- Container --> */}

            {/* <!-- Brand Slider --> */}
            <Swiper
              slidesPerView={6} 
              loop={true}
              speed={5000}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
                1400: {
                  slidesPerView: 6,
                },
              }}
              className="client-slider swiper">
              {/* <!-- Additional required wrapper --> */}
              {/* <!-- Slides --> */}
              <SwiperSlide className="swiper-slide flex justify-center">
                <img src="assets/img/images/th-2/clinet-logo-1.png" alt="client-logo-1" width="182" height="35" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center">
                <img src="assets/img/images/th-2/clinet-logo-2.png" alt="client-logo-2" width="172" height="35" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center">
                <img src="assets/img/images/th-2/clinet-logo-3.png" alt="client-logo-3" width="175" height="30" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center">
                <img src="assets/img/images/th-2/clinet-logo-4.png" alt="client-logo-4" width="168" height="36" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center">
                <img src="assets/img/images/th-2/clinet-logo-5.png" alt="client-logo-5" width="180" height="38" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center">
                <img src="assets/img/images/th-2/clinet-logo-1.png" alt="client-logo-1" width="182" height="35" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center">
                <img src="assets/img/images/th-2/clinet-logo-2.png" alt="client-logo-2" width="172" height="35" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center">
                <img src="assets/img/images/th-2/clinet-logo-3.png" alt="client-logo-3" width="175" height="30" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center">
                <img src="assets/img/images/th-2/clinet-logo-4.png" alt="client-logo-4" width="168" height="36" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center">
                <img src="assets/img/images/th-2/clinet-logo-5.png" alt="client-logo-5" width="180" height="38" />
              </SwiperSlide>
            </Swiper>
            {/* <!-- Brand Slider --> */}
          </div>
          {/* <!-- Section Padding --> */}
        </div>
        {/* <!-- Section Background --> */}
      </div>
    </>
  )
}
