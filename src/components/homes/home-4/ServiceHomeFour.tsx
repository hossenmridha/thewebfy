 
import { Link } from "react-router-dom"
import service_data_two from "../../../data/service_data_two"
 

export default function ServiceHomeFour() {
  return (
    <section className="section-service">
      <div className="section-space">
        <div className="container">
          {/* Section Header */}
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5 md:mb-[60px] lg:mb-20">
            <div className="section-block max-w-[746px]">
              <span className="mb-5 block text-xl font-semibold text-[#FF8064] lg:text-2xl">
                Our amazing services
              </span>
              <h2 className="font-arimo text-4xl font-bold leading-[1.2] -tracking-[2px] text-[#191931] md:text-5xl md:leading-[1.07] lg:text-6xl xl:text-[75px]">
                We provide various essential services
              </h2>
            </div>
            <Link
              to="/service"
              className="group inline-flex rounded-[50px] border-2 border-[#0000FF] bg-[#0000FF] px-5 py-3 text-base font-bold text-white lg:px-6 lg:py-4"
            >
              <div className="relative flex items-center justify-center overflow-hidden">
                <span className="translate-y-0 transition-all duration-300 group-hover:-translate-y-full">
                  View all services
                </span>
                <span className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0">
                  View all services
                </span>
              </div>
            </Link>
          </div>

          {/* Service Grid */}
          <ul className="grid grid-cols-1 gap-6 text-[#191931] md:grid-cols-2 xl:grid-cols-3">
            {service_data_two.map((item, i) => (
              <li
                key={i}
                className="jos group rounded-[10px] border-2 border-[#191931] p-6"
                data-jos_animation="flip-left"
              >
                <div className="h-[60px] w-auto">
                  <img src={item.icon} alt={item.title} width={60} height={60} />
                </div>
                <div className="my-6">
                  <Link
                    to={item.link}
                    className="mb-4 block font-arimo text-2xl font-bold leading-[1.33] group-hover:text-[#0000FF] lg:text-[30px]"
                  >
                    {item.title}
                  </Link>
                  <p className="para-lg">{item.description}</p>
                </div>
                <Link
                  to={item.link}
                  className="relative inline-flex items-center justify-center overflow-hidden"
                  aria-label={`${item.title} details`}
                >
                  <img
                    src="assets/img/icons/icon-black-normal-arrow-right.svg"
                    alt="black-arrow"
                    width={30}
                    height={30}
                    className="translate-x-0 transition-all duration-300 group-hover:translate-x-full"
                  />
                  <img
                    src="assets/img/icons/icon-blue-arrow-right.svg"
                    alt="blue-arrow"
                    width={30}
                    height={30}
                    className="absolute -translate-x-full transition-all duration-300 group-hover:translate-x-0"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
