
 
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";


 



export default function ClientsHomeSeven() {
  return (
    <div className="section-client">
      {/* <!-- Section Background --> */}
      <div className="bg-[#4659FF]">
        {/* <!-- Section Space --> */}
        <div className="py-[60px] lg:py-20 xl:py-[100px]">
          {/* <!-- Section Container --> */}
          <div className="container">
            <p className="para-lg text-center text-white">
              We are happy to work and share creative vision with
              international partners such as:
            </p>

            {/* <!-- Slider main container --> */}
            <Swiper
              slidesPerView={1}
              loop={true}
              speed={5000}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}


              className="swiper client-slider-2 mt-10 border-b border-t border-[#F8FCDD]/10 lg:mt-[60px] xl:mt-20">
              {/* <!-- Additional required wrapper --> */}
              {/* <div className="swiper-wrapper divide-x divide-[#F8FCDD]/10"> */}
              {/* <!-- Slides --> */}
              <SwiperSlide className="swiper-slide flex justify-center py-6">
                <img src="assets/img/images/th-7/client-logo-1.png" alt="client-logo-1" width="181" height="38" className="h-[30px] w-auto" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center py-6">
                <img src="assets/img/images/th-7/client-logo-2.png" alt="client-logo-2" width="183" height="35" className="h-[30px] w-auto" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center py-6">
                <img src="assets/img/images/th-7/client-logo-3.png" alt="client-logo-3" width="172" height="35" className="h-[30px] w-auto" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center py-6">
                <img src="assets/img/images/th-7/client-logo-4.png" alt="client-logo-4" width="175" height="30" className="h-[30px] w-auto" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center py-6">
                <img src="assets/img/images/th-7/client-logo-5.png" alt="client-logo-5" width="168" height="37" className="h-[30px] w-auto" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center py-6">
                <img src="assets/img/images/th-7/client-logo-6.png" alt="client-logo-6" width="196" height="48" className="h-[30px] w-auto" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center py-6">
                <img src="assets/img/images/th-7/client-logo-7.png" alt="client-logo-7" width="189" height="40" className="h-[30px] w-auto" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center py-6">
                <img src="assets/img/images/th-7/client-logo-8.png" alt="client-logo-8" width="193" height="48" className="h-[30px] w-auto" />
              </SwiperSlide>
              {/* </div> */}
            </Swiper>
            <Swiper

              slidesPerView={1}
              loop={true}
              speed={5000}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              modules={[Autoplay]}

              breakpoints={{
                576: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}

              className="swiper client-slider-3 border-b border-[#F8FCDD]/10">
              {/* <!-- Additional required wrapper --> */}
              {/* <div className="swiper-wrapper divide-x divide-[#F8FCDD]/10"> */}
              {/* <!-- Slides --> */}
              <SwiperSlide className="swiper-slide flex justify-center py-6">
                <img src="assets/img/images/th-7/client-logo-1.png" alt="client-logo-1" width="181" height="38" className="h-[30px] w-auto" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center py-6">
                <img src="assets/img/images/th-7/client-logo-2.png" alt="client-logo-2" width="183" height="35" className="h-[30px] w-auto" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center py-6">
                <img src="assets/img/images/th-7/client-logo-3.png" alt="client-logo-3" width="172" height="35" className="h-[30px] w-auto" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center py-6">
                <img src="assets/img/images/th-7/client-logo-4.png" alt="client-logo-4" width="175" height="30" className="h-[30px] w-auto" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center py-6">
                <img src="assets/img/images/th-7/client-logo-5.png" alt="client-logo-5" width="168" height="37" className="h-[30px] w-auto" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center py-6">
                <img src="assets/img/images/th-7/client-logo-6.png" alt="client-logo-6" width="196" height="48" className="h-[30px] w-auto" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center py-6">
                <img src="assets/img/images/th-7/client-logo-7.png" alt="client-logo-7" width="189" height="40" className="h-[30px] w-auto" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center py-6">
                <img src="assets/img/images/th-7/client-logo-8.png" alt="client-logo-8" width="193" height="48" className="h-[30px] w-auto" />
              </SwiperSlide>
              {/* </div> */}
            </Swiper>
          </div>
          {/* <!-- Section Container --> */}
        </div>
        {/* <!-- Section Space --> */}
      </div>
      {/* <!-- Section Background --> */}
    </div>
  )
}
