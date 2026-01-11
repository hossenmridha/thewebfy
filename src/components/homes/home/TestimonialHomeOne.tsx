import testimonial_data from "../../../data/testimonial_data";

 
 

const TestimonialHomeOne: React.FC = () => {
  return (
    <section className="section-testimonial">
      <div className="section-space">
        <div className="container">
          {/* Section Title */}
          <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
            <h2 className="jos">
              Clients are always satisfied with
              <span>
                us
                <img
                  src="assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                  alt="shape-light-lime-5-arms-star"
                  width="74"
                  height="70"
                  className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]"
                />
              </span>
            </h2>
          </div>

          {/* Testimonials */}
          <ul className="grid grid-cols-1 gap-x-6 gap-y-[30px] md:grid-cols-2">
            {testimonial_data.map((item) => (
              <li key={item.id} className="jos" data-jos_delay={item.delay}>
                <div className="flex h-full flex-col rounded-[20px] border-2 border-black px-[30px] py-6 transition-all duration-300 hover:shadow-[5px_5px_0_0] hover:shadow-black">
                  {/* Stars */}
                  <div className="mb-8 flex gap-x-2">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <img
                        key={idx}
                        src="assets/img/icons/icon-black-star.svg"
                        alt="star"
                        width="37"
                        height="35"
                      />
                    ))}
                  </div>
                  {/* Title */}
                  <h4 className="mb-5">{item.title}</h4>
                  {/* Description */}
                  <p className="mb-[30px]">{item.description}</p>
                  {/* User Info */}
                  <div className="mt-auto flex items-center gap-3">
                    <div className="h-[70px] w-[70px] overflow-hidden rounded-[50%] border-2 border-black">
                      <img
                        src={item.image}
                        alt={item.name}
                        width="64"
                        height="64"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 font-syne text-lg font-bold leading-none -tracking-[0.5px] lg:text-[21px]">
                      {item.name}
                      <span className="block font-normal">{item.position}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TestimonialHomeOne;
