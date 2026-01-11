 
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


export default function TestimonialHomeNine() {
  return (
    <section className="section-testimonial">
      {/* <!-- Section Space --> */}
      <div className="section-space-bottom">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Section Block --> */}
          <div className="mb-10 max-w-md md:mb-[60px] md:max-w-xl lg:mb-20 lg:max-w-3xl">
            <h2 className="font-epilogue text-4xl leading-[1.05] md:text-5xl lg:text-6xl xl:text-[80px]">
              See what our users are saying
            </h2>
          </div>
          {/* <!-- Section Block --> */}

          {/* <!-- Testimonial Slider --> */}
          <Swiper
            loop={true}
            slidesPerView={2}
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            className="swiper testimonial-slider-3">
            {/* <!-- Slides --> */}
            <SwiperSlide className="swiper-slide">
              <div className="h-auto w-11">
                <img src="assets/img/icons/icon-light-blue-quote.svg" alt="icon-light-blue-quote" width="45" height="40" />
              </div>
              <blockquote className="my-6 font-epilogue text-xl font-semibold leading-[1.35] -tracking-[1px] lg:text-2xl xl:text-[28px]">
                “Highly recommend! for anyone looking to elevate their
                social media game! From content creation to advertising,
                their team handles it all with professionalism and
                creativity.”
              </blockquote>
              <div>
                <span className="block text-xl font-semibold">-JAMIL RAYHAN</span>
                <span className="block text-lg">AVP of Marketing</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="h-auto w-11">
                <img src="assets/img/icons/icon-light-blue-quote.svg" alt="icon-light-blue-quote" width="45" height="40" />
              </div>
              <blockquote className="my-6 font-epilogue text-xl font-semibold leading-[1.35] -tracking-[1px] lg:text-2xl xl:text-[28px]">
                “Their team's expertise and strategic insights have helped
                us reach new audiences and drive meaningful growth on
                social media. We are thrilled with the great results!”
              </blockquote>
              <div>
                <span className="block text-xl font-semibold">-Jack Liamba</span>
                <span className="block text-lg">Brand Manager @KKR</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="h-auto w-11">
                <img src="assets/img/icons/icon-light-blue-quote.svg" alt="icon-light-blue-quote" width="45" height="40" />
              </div>
              <blockquote className="my-6 font-epilogue text-xl font-semibold leading-[1.35] -tracking-[1px] lg:text-2xl xl:text-[28px]">
                “Highly recommend! for anyone looking to elevate their
                social media game! From content creation to advertising,
                their team handles it all with professionalism and
                creativity.”
              </blockquote>
              <div>
                <span className="block text-xl font-semibold">-Jack Liamba</span>
                <span className="block text-lg">AVP of Marketing</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="h-auto w-11">
                <img src="assets/img/icons/icon-light-blue-quote.svg" alt="icon-light-blue-quote" width="45" height="40" />
              </div>
              <blockquote className="my-6 font-epilogue text-xl font-semibold leading-[1.35] -tracking-[1px] lg:text-2xl xl:text-[28px]">
                “Their team's expertise and strategic insights have helped
                us reach new audiences and drive meaningful growth on
                social media. We are thrilled with the great results!”
              </blockquote>
              <div>
                <span className="block text-xl font-semibold">-Jack Liamba</span>
                <span className="block text-lg">Brand Manager @KKR</span>
              </div>
            </SwiperSlide>

          </Swiper>
          {/* <!-- Testimonial Slider --> */}
        </div>
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>
  )
}
