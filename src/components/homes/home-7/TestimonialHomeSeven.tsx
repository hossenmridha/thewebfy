 
import { Swiper, SwiperSlide } from "swiper/react";


export default function TestimonialHomeSeven() {
  return (
    <section className="section-cta">
      {/* <!-- Section Background --> */}
      <div className="relative z-10 bg-[#4659FF]">
        {/* <!-- Section Space --> */}
        <div className="section-space">
          {/* <!-- Section Container --> */}
          <div className="container">
            {/* <!-- Section Block --> */}
            <div className="mx-auto mb-10 max-w-[856px] text-center md:mb-[60px] lg:mb-20">
              <h2 className="font-bricolageGrotesque text-4xl font-bold leading-[1.033] -tracking-[1px] text-[#F8FCDD] sm:text-5xl lg:text-6xl xl:text-7xl xxl:text-[90px]">
                We’re trusted advertising agency
              </h2>
            </div>
            {/* <!-- Section Block --> */}

            {/* <!-- Testimonial Slider --> */}
            <Swiper loop={true}  className="swiper testimonial-slider-2">
              {/* <!-- Additional required wrapper --> */} 
                {/* <!-- Slides --> */}
                <SwiperSlide className="swiper-slide">
                  <div className="mx-auto max-w-[996px] text-center text-[#F8FCDD]">
                    <img src="assets/img/images/th-7/testimonial-star.png" alt="testimonial-star" className="mx-auto" />
                    <blockquote className="my-6 text-xl font-semibold md:text-2xl lg:text-3xl">
                      "The team at Masco has an incredible knack for turning
                      ideas into visually stunning and compelling campaigns.
                      Their creative approach brought a fresh and innovative
                      perspective to our brand, resulting in increased
                      engagement and brand recognition."
                    </blockquote>
                    <div>
                      <span className="block font-semibold">William Jack </span>
                      <span>CEO & Founder @XYZ</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="mx-auto max-w-[996px] text-center text-[#F8FCDD]">
                    <img src="assets/img/images/th-7/testimonial-star.png" alt="testimonial-star" className="mx-auto" />
                    <blockquote className="my-6 text-xl font-semibold md:text-2xl lg:text-3xl">
                      "The team at Masco has an incredible knack for turning
                      ideas into visually stunning and compelling campaigns.
                      Their creative approach brought a fresh and innovative
                      perspective to our brand, resulting in increased
                      engagement and brand recognition."
                    </blockquote>
                    <div>
                      <span className="block font-semibold">William Jack </span>
                      <span>CEO & Founder @XYZ</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="mx-auto max-w-[996px] text-center text-[#F8FCDD]">
                    <img src="assets/img/images/th-7/testimonial-star.png" alt="testimonial-star" className="mx-auto" />
                    <blockquote className="my-6 text-xl font-semibold md:text-2xl lg:text-3xl">
                      "The team at Masco has an incredible knack for turning
                      ideas into visually stunning and compelling campaigns.
                      Their creative approach brought a fresh and innovative
                      perspective to our brand, resulting in increased
                      engagement and brand recognition."
                    </blockquote>
                    <div>
                      <span className="block font-semibold">William Jack </span>
                      <span>CEO & Founder @XYZ</span>
                    </div>
                  </div>
                </SwiperSlide>
              
            </Swiper>
            {/* <!-- Testimonial Slider --> */}
          </div>
          {/* <!-- Section Container --> */}
        </div>
        {/* <!-- Section Space --> */}

        {/* <!-- Background Element --> */}
        <div className="jos absolute right-0 top-0 -z-10 hidden lg:inline-block" data-jos_animation="fade-down">
          <img src="assets/img/elemnts/th-7-cta-shape.svg" alt="th-7-cta-shape" width="432" height="471" />
        </div>
        {/* <!-- Background Element --> */}
      </div>
      {/* <!-- Section Background --> */}
    </section>
  )
}
