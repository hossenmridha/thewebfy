
import { Link } from "react-router-dom"
 

export default function CtaHomeTwo() {
  return (
    <>
      <section className="section-cta">
        {/* <!-- Section Background --> */}
        <div className="relative z-10 rounded-[5px] bg-colorGondola xxl:mx-[50px]">
          {/* <!-- Section Space --> */}
          <div className="section-space">
            {/* <!-- Section Container --> */}
            <div className="container">
              {/* <!-- Section Block --> */}
              <div className="section-block mx-auto mb-10 max-w-3xl md:mb-[50px]">
                <h2 className="jos text-center font-clashGrotesk text-4xl font-semibold leading-[1.075] text-[#F6F5EF] sm:text-5xl md:text-6xl lg:text-7xl xxl:text-[80px]">
                  Join us on your path to future success
                </h2>
              </div>
              {/* <!-- Section Block --> */}
              <div className="flex justify-center">
                <Link to="/contact" className="btn-orange">Contact Us</Link>
              </div>
            </div>
            {/* <!-- Section Container --> */}
          </div>
          {/* <!-- Section Space --> */}

          {/* <!-- Background Elements --> */}
          <div className="absolute bottom-6 left-36 -z-10">
            <img src="assets/img/elemnts/element-light-lime-curve-paper-plane.svg" alt="element-light-lime-curve-paper-plane" width="446" height="327" />
          </div>
          <div className="absolute -top-24 right-36 -z-10 hidden lg:inline-block">
            <img src="assets/img/elemnts/shape-light-lime-blinking-one-star.svg" alt="shape-light-lime-blinking-one-star" width="137" height="137" />
          </div>
          {/* <!-- Background Elements --> */}
        </div>
        {/* <!-- Section Background --> */}
      </section>
    </>
  )
}
