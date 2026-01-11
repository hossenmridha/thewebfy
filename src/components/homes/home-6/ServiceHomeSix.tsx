 
 
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { Link } from "react-router-dom";

 


export default function ServiceHomeSix() {
  return (
    <section className="section-service">
      {/* <!-- Section Space --> */}
      <div className="section-space">
        {/* <!-- Section Container --> */}
        <div className="container">
          <div className="mb-10 flex flex-col justify-between gap-10 md:mb-[60px] md:flex-row lg:mb-20">
            {/* <!-- Section Block --> */}
            <div className="max-w-4xl">
              <h2 className="jos font-playfairDisplay text-4xl font-bold !leading-[1.11] -tracking-[0.5px] text-[#2C2C2C] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85px]">
                Professional interior design solutions
              </h2>
            </div>
            {/* <!-- Section Block --> */}

            <div className="relative inline-flex items-center gap-6">
              {/* <!-- If we need navigation buttons --> */}
              <div style={{cursor: "pointer"}} className="slider-button-prev group inline-flex h-14 w-20 items-center justify-center rounded-[50px] border-2 border-[#2C2C2C] shadow-[0_4px_0_0] shadow-[#2C2C2C] transition-all duration-300 hover:bg-[#02854C]">
                <img src="assets/img/icons/icon-black-arrow-right.svg" alt="icon-black-arrow-right" width="34" height="28" className="rotate-180 opacity-100 transition-all duration-300 group-hover:opacity-0" />
                <img src="assets/img/icons/icon-buttery-white-arrow-right.svg" alt="icon-black-arrow-right" width="34" height="28" className="absolute rotate-180 opacity-0 transition-all duration-300 group-hover:opacity-100" />
              </div>
              <div style={{cursor: "pointer"}} className="slider-button-next group inline-flex h-14 w-20 items-center justify-center rounded-[50px] border-2 border-[#2C2C2C] shadow-[0_4px_0_0] shadow-[#2C2C2C] transition-all duration-300 hover:bg-[#02854C]">
                <img src="assets/img/icons/icon-black-arrow-right.svg" alt="icon-black-arrow-right" width="34" height="28" className="transition-all duration-300" />
                <img src="assets/img/icons/icon-buttery-white-arrow-right.svg" alt="icon-black-arrow-right" width="34" height="28" className="absolute opacity-0 transition-all duration-300 group-hover:opacity-100" />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Section Container --> */}

        {/* <!-- Slider Wrapper --> */}
        <div className="ml-auto mr-[calc(-100vw+100%)/2] max-w-[1610px]">
          {/* <!-- Slider main container --> */}
          <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={30}
          modules={[Navigation]}
          navigation={{
            nextEl: ".slider-button-next",
            prevEl: ".slider-button-prev",
          }}
          breakpoints={{
            768: {
              slidesPerView: 1.5,
            },
            1400: {
              slidesPerView: 2.5,
            },
          }}
           className="swiper service-slider-one">
            {/* <!-- Additional required wrapper --> */}
         
              {/* <!-- Slides --> */}
              <SwiperSlide className="swiper-slide">
                <div className="rounded-[20px] bg-[#D68BE7] p-10">
                  {/* <!-- Icon --> */}
                  <div className="h-[60px] w-auto">
                    <img src="assets/img/icons/th-6-service-icon-1.svg" alt="th-6-service-icon-1" width="66" height="60" />
                  </div>
                  {/* <!-- Icon --> */}
                  {/* <!-- Content --> */}
                  <div className="mt-8">
                    <Link to="/service-details" className="mb-4 block font-playfairDisplay text-3xl font-bold !leading-[1.2] text-[#2C2C2C] xl:text-[40px]">Residential Interior Design</Link>
                    <p className="mb-8 text-[21px] leading-[1.42] text-[#0C0C0C]">
                      Tailored home design solutions that reflect the
                      client's lifestyle, preferences, and functional needs.
                    </p>
                    <Link to="/service-details">
                      <img src="assets/img/icons/icon-black-arrow-right.svg" alt="icon-black-arrow-right" width="34" height="28" />
                    </Link>
                  </div>
                  {/* <!-- Content --> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="rounded-[20px] bg-[#F3EDE8] p-10">
                  {/* <!-- Icon --> */}
                  <div className="h-[60px] w-auto">
                    <img src="assets/img/icons/th-6-service-icon-2.svg" alt="th-6-service-icon-2" width="61" height="60" />
                  </div>
                  {/* <!-- Icon --> */}
                  {/* <!-- Content --> */}
                  <div className="mt-8">
                    <Link to="/service-details" className="mb-4 block font-playfairDisplay text-3xl font-bold !leading-[1.2] text-[#2C2C2C] xl:text-[40px]">Commercial Interior Design</Link>
                    <p className="mb-8 text-[21px] leading-[1.42] text-[#0C0C0C]">
                      Office design solutions focusing on functionality,
                      color, productivity, and a professional aesthetic
                      look.
                    </p>
                    <Link to="/service-details">
                      <img src="assets/img/icons/icon-black-arrow-right.svg" alt="icon-black-arrow-right" width="34" height="28" />
                    </Link>
                  </div>
                  {/* <!-- Content --> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="rounded-[20px] bg-[#02854C] p-10">
                  {/* <!-- Icon --> */}
                  <div className="h-[60px] w-auto">
                    <img src="assets/img/icons/th-6-service-icon-3.svg" alt="th-6-service-icon-3" width="72" height="60" />
                  </div>
                  {/* <!-- Icon --> */}
                  {/* <!-- Content --> */}
                  <div className="mt-8">
                    <Link to="/service-details" className="mb-4 block font-playfairDisplay text-3xl font-bold !leading-[1.2] text-[#F3EDE8] xl:text-[40px]">Space Planning</Link>
                    <p className="mb-8 text-[21px] leading-[1.42] text-[#F3EDE8]">
                      Space planning, furniture selection, color
                      coordination, to create inviting and personalized
                      interiors.
                    </p>
                    <Link to="/service-details">
                      <img src="assets/img/icons/icon-black-arrow-right.svg" alt="icon-black-arrow-right" width="34" height="28" className="invert" />
                    </Link>
                  </div>
                  {/* <!-- Content --> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="rounded-[20px] bg-[#2C2C2C] p-10">
                  {/* <!-- Icon --> */}
                  <div className="h-[60px] w-auto">
                    <img src="assets/img/icons/th-6-service-icon-4.svg" alt="th-6-service-icon-4" width="45" height="60" />
                  </div>
                  {/* <!-- Icon --> */}
                  {/* <!-- Content --> */}
                  <div className="mt-8">
                    <Link to="/service-details" className="mb-4 block font-playfairDisplay text-3xl font-bold !leading-[1.2] text-[#F3EDE8] xl:text-[40px]">Furniture Selection</Link>
                    <p className="mb-8 text-[21px] leading-[1.42] text-[#F3EDE8]">
                      Advising on and selecting furniture that complements
                      the design aesthetic & requirements of the space.
                    </p>
                    <Link to="/service-details">
                      <img src="assets/img/icons/icon-black-arrow-right.svg" alt="icon-black-arrow-right" width="34" height="28" className="invert" />
                    </Link>
                  </div>
                  {/* <!-- Content --> */}
                </div>
              </SwiperSlide>
           
          </Swiper>
        </div>
        {/* <!-- Slider Wrapper --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>
  )
}
