import { Link } from "react-router-dom";


export default function HeroHomeTwo() {
  return (
    <>
      <section className="section-hero">
        <div className="relative z-10">
          {/* <!-- Hero Space --> */}
          <div className="pb-20 pt-[150px] sm:pb-[130px] lg:pt-[196px]">
            {/* <!-- Section Container --> */}
            <div className="container">
              {/* <!-- Hero Content --> */}
              <div className="text-center">
                <h1 className="font-clashGrotesk text-5xl font-semibold text-[#1B1B1B] sm:text-6xl md:text-7xl xl:text-8xl xxl:text-[120px]">
                  Start your business growth journey with us
                </h1>
                <p className="mt-6 text-lg leading-[1.42] lg:text-[21px]">
                  We believe in the power of innovation and are passionate
                  about helping startups thrive. As a startup company, we are
                  a dynamic and innovative organization that provides
                  comprehensive support, guidance and resources to early stage
                  startups.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-6 lg:mt-[60px] xl:mt-20">
                  <Link to="/contact" className="btn-orange">Get In Touch</Link>
                  <Link to="/service" className="btn-outline-black-2">Explore Our Services</Link>
                </div>
              </div>
              {/* <!-- Hero Content --> */}
            </div>
            {/* <!-- Section Container --> */}

            {/* <!-- Hero Image Block --> */}
            <ul className="mt-[60px] hidden px-5 sm:flex sm:-space-x-[60px] lg:mt-20 lg:px-[60px] xl:px-[90px] xxl:mt-24">
              {/* <!-- Hero Image Item --> */}
              <li className="jos inline-block rounded-[10px] bg-white p-[10px] odd:-rotate-6 even:translate-y-[50px] even:rotate-6" data-jos_animation="fade-left" data-jos_delay="0.5">
                <img src="assets/img/images/th-2/hero-img-1.jpg" alt="hero-img-1" width="488" height="319" className="h-auto max-w-full rounded-[10px]" />
              </li>
              {/* <!-- Hero Image Item --> */}
              {/* <!-- Hero Image Item --> */}
              <li className="jos inline-block rounded-[10px] bg-white p-[10px] odd:-rotate-6 even:translate-y-[50px] even:rotate-6" data-jos_animation="fade-left" data-jos_delay="0.3">
                <img src="assets/img/images/th-2/hero-img-2.jpg" alt="hero-img-2" width="488" height="319" className="h-auto max-w-full rounded-[10px]" />
              </li>
              {/* <!-- Hero Image Item --> */}
              {/* <!-- Hero Image Item --> */}
              <li className="jos inline-block rounded-[10px] bg-white p-[10px] odd:-rotate-6 even:translate-y-[50px] even:rotate-6" data-jos_animation="fade" data-jos_delay="0">
                <img src="assets/img/images/th-2/hero-img-3.jpg" alt="hero-img-3" width="488" height="319" className="h-auto max-w-full rounded-[10px]" />
              </li>
              {/* <!-- Hero Image Item --> */}
              {/* <!-- Hero Image Item --> */}
              <li className="jos inline-block rounded-[10px] bg-white p-[10px] odd:-rotate-6 even:translate-y-[50px] even:rotate-6" data-jos_animation="fade-right" data-jos_delay="0.3">
                <img src="assets/img/images/th-2/hero-img-4.jpg" alt="hero-img-4" width="488" height="319" className="h-auto max-w-full rounded-[10px]" />
              </li>
              {/* <!-- Hero Image Item --> */}
              {/* <!-- Hero Image Item --> */}
              <li className="jos inline-block rounded-[10px] bg-white p-[10px] odd:-rotate-6 even:translate-y-[50px] even:rotate-6" data-jos_animation="fade-right" data-jos_delay="0.5">
                <img src="assets/img/images/th-2/hero-img-5.jpg" alt="hero-img-5" width="488" height="319" className="h-auto max-w-full rounded-[10px]" />
              </li>
              {/* <!-- Hero Image Item --> */}
            </ul>
            {/* <!-- Hero Image Block --> */}

            {/* <!-- Background Element --> */}
            <div className="absolute left-0 top-[352px] -z-10 hidden xxxl:inline-block">
              <img src="assets/img/elemnts/element-light-lime-curve-arrow-2.svg" alt="element-light-lime-curve-arrow-2" width="504" height="454" className="max-w-full" />
            </div>
            <div className="absolute right-[246px] top-[167px] -z-10 hidden xxxl:inline-block">
              <img src="assets/img/elemnts/shape-light-lime-blinking-star.svg" alt="shape-light-lime-blinking-star" width="109" height="106" className="max-w-full" />
            </div>
            {/* <!-- Background Element --> */}
          </div>
          {/* <!-- Hero Space --> */}
        </div>
      </section>
    </>
  )
}
