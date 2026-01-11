  
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

// Project data 
const portfolioData = [
  {
    title: "Product Design",
    description: "Developing the look and feel of physical products, aesthetics, and functionality.",
    image: "assets/img/images/th-1/project-img-1.jpg",
  },
  {
    title: "Logo and Branding",
    description: "Creating or refreshing a company's logo and developing a cohesive visual identity.",
    image: "assets/img/images/th-1/project-img-2.jpg",
  },
  {
    title: "App UI/UX Design",
    description: "Designing the UI/UX for mobile apps and web applications to ensure usability & engagement.",
    image: "assets/img/images/th-1/project-img-3.jpg",
  },
  {
    title: "Packaging Design",
    description: "Creating packaging solutions for products that not only protect but attract customers.",
    image: "assets/img/images/th-1/project-img-4.jpg",
  },
  {
    title: "Product Design",
    description: "Developing the look and feel of physical products, aesthetics, and functionality.",
    image: "assets/img/images/th-1/project-img-1.jpg",
  },
  {
    title: "Logo and Branding",
    description: "Creating or refreshing a company's logo and developing a cohesive visual identity.",
    image: "assets/img/images/th-1/project-img-2.jpg",
  },
  {
    title: "App UI/UX Design",
    description: "Designing the UI/UX for mobile apps and web applications to ensure usability & engagement.",
    image: "assets/img/images/th-1/project-img-3.jpg",
  },
  {
    title: "Packaging Design",
    description: "Creating packaging solutions for products that not only protect but attract customers.",
    image: "assets/img/images/th-1/project-img-4.jpg",
  },
];

export default function PortfolioHomeOne() {
  return (
    <section className="section-portfolio">
      <div className="bg-black">
        <div className="section-space">
          <div className="container">
            <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
              <h2 className="jos text-colorButteryWhite">
                Have a wide range of creative  {' '}
                <span>
                  projects 
                  <img
                    src="assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                    alt="star"
                    width="74"
                    height="70"
                    className="inline-block h-auto w-8 md:w-10 lg:w-[57px]"
                  />
                </span>
              </h2>
            </div>
          </div>

          <div className="relative group/nav">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={24}
              loop={true}
              pagination={{
                el: ".swiper-pagination",
                type: "progressbar",
              }}
              navigation={{
                nextEl: ".project-button-next",
                prevEl: ".project-button-prev",
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
                1600: { slidesPerView: 4 },
              }}
              className="projectSliderOne"
            >
              {portfolioData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="group relative overflow-hidden rounded-[20px] border-[5px] border-colorButteryWhite">
                    <img
                      src={item.image}
                      alt={item.title}
                      width="516"
                      height="390"
                      className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                    />
                    <div className="w-[calc(100%-48px)] absolute bottom-0 flex flex-col items-start gap-x-10 gap-y-8 p-6 sm:flex-row sm:items-center">
                      <div className="max-w-[380px] flex-1 text-colorButteryWhite">
                        <Link
                          to="/portfolio-details"
                          className="mb-[10px] block font-syne text-2xl font-bold leading-[1.4] group-hover:text-colorLightLime md:text-3xl"
                        >
                          {item.title}
                        </Link>
                        <p className="line-clamp-2">{item.description}</p>
                      </div>
                      <Link
                        to="/portfolio-details"
                        className="relative inline-flex items-start justify-center overflow-hidden"
                      >
                        <img
                          src="assets/img/icons/icon-buttery-white-arrow-right.svg"
                          alt="arrow"
                          width="34"
                          height="28"
                          className="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0"
                          
                        />
                        <img
                          src="assets/img/icons/icon-light-lime-arrow-right.svg"
                          alt="arrow-hover"
                          width="34"
                          height="28"
                          className="absolute -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                        />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */} 
                   <div className="static xl:absolute w-full mt-16 xl:mt-0 z-20 flex justify-center xl:justify-between top-1/2 -translate-y-1/2 gap-x-10 px-10">
                <div className="project-button-prev inline-flex h-14 w-14 rounded-[50%] items-center justify-center border-b-2 border-white bg-colorLightLime xl:opacity-0 group-hover/nav:opacity-100 xl:invisible group-hover/nav:visible xl:translate-x-10 group-hover/nav:translate-x-0 transition-all duration-300">
                  <img src="assets/img/icons/icon-black-arrow-right.svg" alt="icon-black-arrow-right" width="34" height="28" className="rotate-180" style={{ transform: "rotate(360deg)", cursor: "pointer" }} />
                </div>
                <div className="project-button-next inline-flex h-14 w-14 rounded-[50%] items-center justify-center border-b-2 border-white bg-colorLightLime xl:opacity-0 group-hover/nav:opacity-100 xl:invisible group-hover/nav:visible xl:-translate-x-10 group-hover/nav:translate-x-0 transition-all duration-300">
                  <img src="assets/img/icons/icon-black-arrow-right.svg" alt="icon-black-arrow-right" width="34" height="28" style={{ cursor: "pointer" }} />
                </div>
              </div>


          </div>

          {/* Pagination */}
          <div className="container mt-10 md:mt-16 lg:mt-20">
            <div className="swiper-pagination progressbar-green"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
