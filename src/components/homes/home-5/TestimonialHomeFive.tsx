 
 
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

 


export default function TestimonialHomeFive() {
  return (
    <section className="section-testimonial">
      {/* <!-- Section Space --> */}
      <div className="section-space">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Section Block --> */}
          <div className="mb-10 max-w-md text-center md:mb-[60px] md:max-w-xl lg:mb-20 lg:max-w-3xl lg:text-left">
            <h2 className="font-libreBaskerville text-4xl !leading-[1.14] -tracking-[0.5px] text-[#221F1A] md:text-5xl lg:text-6xl xxl:text-[70px]">
              Reviews from our satisfied customers
            </h2>
          </div>
          {/* <!-- Section Block --> */}

          {/* <!-- Testimonial Slider --> */}
          <Swiper
          loop={true}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          modules={[Pagination]}
           className="swiper testimonial-slider-1">
            {/* <!-- Additional required wrapper --> */} 
              {/* <!-- Slides --> */}
              <SwiperSlide className="swiper-slide">
                <div className="grid grid-cols-1 gap-20 gap-y-10 lg:grid-cols-[minmax(0,306px)_1fr] lg:gap-x-[100px] xl:gap-x-[134px]">
                  {/* <!-- Slider Left Block --> */}
                  <div className="order-2 lg:order-1">
                    <img src="assets/img/images/th-5/testimonial-img-1.jpg" alt="testimonial-img-1" width="306" height="251" className="mb-6 max-w-full rounded-[20px]" />
                    <span className="font-libreBaskerville text-2xl"><strong className="block">William Jack</strong> Creative
                      Director</span>
                  </div>
                  {/* <!-- Slider Left Block --> */}
                  {/* <!-- Slider Right Block --> */}
                  <div className="order-1 lg:order-2">
                    <div className="text-xl lg:text-2xl xl:text-[30px]">
                      <h4 className="mb-4 font-libreBaskerville leading-none lg:mb-8 xl:mb-12">
                        They exceeded our expectations
                      </h4>
                      <blockquote className="leading-[1.4] -tracking-[1px]">
                        As a startup, you need to find a good marketing
                        partner who can help you connect to the right
                        people. They advertise that they can help our
                        company to increase your sales by up to 78% -- they
                        exceeded our expectations.
                      </blockquote>
                    </div>
                  </div>
                  {/* <!-- Slider Right Block --> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="grid grid-cols-1 gap-20 gap-y-10 lg:grid-cols-[minmax(0,306px)_1fr] lg:gap-x-[100px] xl:gap-x-[134px]">
                  {/* <!-- Slider Left Block --> */}
                  <div className="order-2 lg:order-1">
                    <img src="assets/img/images/th-5/testimonial-img-2.jpg" alt="testimonial-img-2" width="306" height="251" className="mb-6 max-w-full rounded-[20px]" />
                    <span className="font-libreBaskerville text-2xl"><strong className="block">Justine Smith </strong> Sales
                      Manager</span>
                  </div>
                  {/* <!-- Slider Left Block --> */}
                  {/* <!-- Slider Right Block --> */}
                  <div className="order-1 lg:order-2">
                    <div className="text-xl lg:text-2xl xl:text-[30px]">
                      <h4 className="mb-4 font-libreBaskerville leading-none lg:mb-8 xl:mb-12">
                        Pleasure to work with!
                      </h4>
                      <blockquote className="leading-[1.4] -tracking-[1px]">
                        Since I placed my digital marketing in this company,
                        Now I don’t have stress over my marketing anymore. I
                        trust that them will keep doing what it’s doing to
                        help us to grow our business in 2018 and beyond.
                        It’s truly a pleasure working with them.
                      </blockquote>
                    </div>
                  </div>
                  {/* <!-- Slider Right Block --> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="grid grid-cols-1 gap-20 gap-y-10 lg:grid-cols-[minmax(0,306px)_1fr] lg:gap-x-[100px] xl:gap-x-[134px]">
                  {/* <!-- Slider Left Block --> */}
                  <div className="order-2 lg:order-1">
                    <img src="assets/img/images/th-5/testimonial-img-1.jpg" alt="testimonial-img-1" width="306" height="251" className="mb-6 max-w-full rounded-[20px]" />
                    <span className="font-libreBaskerville text-2xl"><strong className="block">Thomas Alfeso </strong>
                      Marketing Director</span>
                  </div>
                  {/* <!-- Slider Left Block --> */}
                  {/* <!-- Slider Right Block --> */}
                  <div className="order-1 lg:order-2">
                    <div className="text-xl lg:text-2xl xl:text-[30px]">
                      <h4 className="mb-4 font-libreBaskerville leading-none lg:mb-8 xl:mb-12">
                        Amazing Company for Professionals
                      </h4>
                      <blockquote className="leading-[1.4] -tracking-[1px]">
                        I have worked with them for a while now. Helped me
                        understand the difference between good content and
                        great content. On a side note they taught me what
                        contextual marketing is and their communication is
                        great as well, which has seemed to be lost in
                        today's time. Look forward to growing my business
                        with them
                      </blockquote>
                    </div>
                  </div>
                  {/* <!-- Slider Right Block --> */}
                </div>
              </SwiperSlide> 
            {/* <!-- If we need pagination --> */}
          </Swiper>
          <div className="testimonial-custom-pagination swiper-pagination static mt-10 flex justify-center gap-6 lg:mt-0"></div>
          {/* <!-- Testimonial Slider --> */}
        </div>
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>
  )
}
