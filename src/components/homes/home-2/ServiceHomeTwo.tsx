  
import { Link } from "react-router-dom";
import service_data from "../../../data/service_data";
import { hideImage, showImage } from "../../../utils/showImage";

export default function ServiceHomeTwo() {
  return (
    <section className="section-service" onMouseLeave={hideImage}>
      <div className="relative z-10">
        <div className="section-space">
          <div className="container">
            <div className="section-block mx-auto mb-10 max-w-3xl md:mb-[60px] lg:mb-20">
              <h2 className="jos text-center font-clashGrotesk text-4xl font-semibold leading-[1.075] text-colorGondola sm:text-5xl md:text-6xl lg:text-7xl xxl:text-[80px]">
                Services to increase chances of success
              </h2>
            </div>
          </div>
          <ul
            className="mx-5 divide-y divide-colorGondola xxl:mx-[50px]"
          >
            {service_data.map((item) => (
              <li
                key={item.id}
                className="jos group"
                onMouseEnter={showImage}
                onMouseLeave={hideImage}
              >
                {/* Content */}
                <div className="rounded-[5px] transition-all duration-300 group-hover:bg-colorGondola">
                  <div className="container flex flex-col items-center justify-between gap-y-6 rounded-[5px] py-[50px] text-colorGondola transition-all group-hover:text-[#F6F5EF] lg:flex-row">
                    <Link to="/service-details" className="display-heading display-heading-4 max-w-96 font-clashGrotesk">
                      {item.title}
                    </Link>
                    <p className="max-w-[526px]">{item.description}</p>
                    <Link to="/service-details" className="relative inline-flex items-center justify-center overflow-hidden">
                      <img
                        src="assets/img/icons/icon-black-solid-arrow-right.svg"
                        alt="icon-black-solid-arrow-right"
                        width="34"
                        height="28"
                        className="translate-x-0 transition-all duration-300 group-hover:translate-x-full"
                      />
                      <img
                        src="assets/img/icons/icon-orange-solid-arrow-right.svg"
                        alt="icon-orange-solid-arrow-right"
                        width="34"
                        height="28"
                        className="absolute -translate-x-full transition-all duration-300 group-hover:translate-x-0"
                      />
                    </Link>
                  </div>
                </div>

                {/* Hover Image Target */}
                <img
                  src={item.image}
                  alt={`project-hover-img-${item.id}`}
                  width="300"
                  height="250"
                  className="hover-on-image top-0 hidden h-auto w-[300px] transition-transform duration-300 ease-in-out"
                />
              </li>
            ))}
          </ul>

          {/* Floating Image */}
          <img
            src="assets/img/images/th-2/service-img-1.png"
            alt="Hovered Project Image"
            className="hovered-image fixed left-5 top-5 z-50 hidden h-[250px] w-[300px]"
            id="hoveredImage"
          />
        </div>

        {/* Background Element */}
        <div className="absolute left-[170px] top-36 -z-10 hidden xl:inline-block">
          <img
            src="assets/img/elemnts/shape-light-lime-blinking-star.svg"
            alt="shape-light-lime-blinking-star"
            width="109"
            height="106"
          />
        </div>
      </div>
    </section>
  );
}
