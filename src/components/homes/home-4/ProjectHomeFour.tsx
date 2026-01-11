 
import { Link } from "react-router-dom";
 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
 
import 'swiper/css';
import 'swiper/css/scrollbar';
import project_data from "../../../data/project_data";

export default function ProjectHomeFour() {
  return (
    <>
      <section className="section-project">
        <div className="relative z-10 mx-5 rounded-[5px] bg-[#191931] xxl:mx-[50px]">
          <div className="section-space">
            <div className="container">
              <div className="section-block mx-auto mb-10 max-w-lg text-center md:mb-[60px] lg:mb-20 lg:max-w-[856px]">
                <span className="mb-5 block text-xl font-semibold text-[#FF8064] lg:text-2xl">Our stunning creation</span>
                <h2 className="font-arimo text-4xl font-bold leading-[1.2] -tracking-[2px] text-[#FFF7EA] md:text-5xl md:leading-[1.07] lg:text-6xl xl:text-[75px]">
                  Our dedication shines through our work
                </h2>
              </div>
            </div>

            <div className="pb-20">
              <Swiper
                modules={[Scrollbar]}
                slidesPerView={1}
                spaceBetween={24}
                loop={true}
                scrollbar={{
                  el: '.swiper-scrollbar',
                  draggable: true,
                  hide: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  900: {
                    slidesPerView: 2,
                  },
                  1600: {
                    slidesPerView: 3,
                  },
                }}
                className="projectSliderThree"
              >
                {project_data.map((project, i) => (
                  <SwiperSlide key={i}>
                    <div className="group px-5 lg:px-0">
                      <div className="relative mb-6 overflow-hidden rounded-[10px]">
                        <img
                          src={project.imageUrl}
                          alt={`project-img-${project.id}`}
                          width={636}
                          height={432}
                          className="h-auto w-full"
                        />
                        <div className="absolute inset-0 flex translate-y-full items-center justify-center bg-gradient-to-t from-[#191931]/60 to-[#191931]/0 transition-all group-hover:translate-y-0">
                          <Link
                            to={project.link}
                            className="absolute inline-flex h-20 w-20 scale-90 items-center justify-center rounded-[50%] bg-[#FFF7EA] opacity-0 transition-all delay-300 duration-500 group-hover:scale-100 group-hover:opacity-100"
                          >
                            <img
                              src="/assets/img/icons/icon-blue-trending-up.svg"
                              alt="icon-black-trending-up"
                              width={40}
                              height={40}
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="mt-6 text-[#FFF7EA]">
                        <h4 className="mb-4 font-arimo">{project.title}</h4>
                        <p className="para-lg">{project.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="relative mx-auto max-w-[1296px] translate-y-20">
                <div className="swiper-scrollbar mx-auto h-0.5 bg-[#666666] opacity-100"></div>
              </div>
            </div>
          </div>

          <img
            src="/assets/img/elemnts/th-4-content-shape-3.svg"
            alt="th-4-content-shape-3"
            width={221}
            height={251}
            className="jos absolute right-0 top-0 -z-10 hidden lg:inline-block"
            data-jos_animation="fade-down"
          />
        </div>
      </section>
    </>
  );
}