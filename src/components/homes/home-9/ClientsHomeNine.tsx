 
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";


export default function ClientsHomeNine() {
  return (
    <div className="section-client-logo">
      {/* <!-- Section Background --> */}
      <div className="relative z-10 bg-[url(../img/elemnts/curve-top-light-blue-pattern.svg)] bg-cover bg-top bg-no-repeat">
        {/* <!-- Section Space --> */}
        <div className="pb-[72px] pt-[100px]">
          {/* <!-- Section Container --> */}
          <div className="container">
            <div className="mb-[60px] text-center text-[#FEF6E0]">
              <p className="para-lg">
                We’ve helped over 200+ startups grow their business around
                the world
              </p>
            </div>
          </div>
          {/* <!-- Section Container --> */}
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
                <img src="assets/img/images/th-9/client-logo-1.png" alt="client-logo-1" width="182" height="35" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center">
                <img src="assets/img/images/th-9/client-logo-2.png" alt="client-logo-2" width="172" height="35" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center">
                <img src="assets/img/images/th-9/client-logo-3.png" alt="client-logo-3" width="175" height="30" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center">
                <img src="assets/img/images/th-9/client-logo-4.png" alt="client-logo-4" width="168" height="36" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center">
                <img src="assets/img/images/th-9/client-logo-5.png" alt="client-logo-5" width="180" height="38" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center">
                <img src="assets/img/images/th-9/client-logo-1.png" alt="client-logo-1" width="182" height="35" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center">
                <img src="assets/img/images/th-9/client-logo-2.png" alt="client-logo-2" width="172" height="35" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center">
                <img src="assets/img/images/th-9/client-logo-3.png" alt="client-logo-3" width="175" height="30" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center">
                <img src="assets/img/images/th-9/client-logo-4.png" alt="client-logo-4" width="168" height="36" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center">
                <img src="assets/img/images/th-9/client-logo-5.png" alt="client-logo-5" width="180" height="38" />
              </SwiperSlide>
           
          </Swiper>
          {/* <!-- Brand Slider --> */}
        </div>
        {/* <!-- Section Space --> */}
      </div>
      {/* <!-- Section Background --> */}
    </div>
  )
}
