
import { Link } from "react-router-dom" 

export default function HeroHomeSeven() {
  return (
    <section className="section-hero">
      <div className="relative z-10 bg-[#F8FCDD]">
        <div className="py-20 md:py-[100px] xl:py-[193px]">
          <div className="container">
            {/* <!-- Hero Area --> */}
            <div className="grid grid-cols-12 gap-10">
              {/* <!-- Hero Content Block --> */}
              <div className="col-span-12 text-[#0B1040] lg:col-span-6 xxxl:col-span-8">
                <h1 className="font-bricolageGrotesque text-5xl font-bold leading-[1.09] sm:text-6xl md:text-7xl lg:text-[7.30vw]">
                  We present your brand {' '}
                  <span className="relative z-10">
                    creatively
                    <img src="assets/img/elemnts/th-7-hero-highlight-mark.svg" alt="th-7-hero-highlight-mark" className="absolute bottom-0 -z-10 w-full" />
                  </span>
                </h1>
                <p className="my-6 mb-10 max-w-3xl text-lg xl:text-2xl">
                  Our advertising agency specializes in creating captivating
                  and visually stunning campaigns that leave a lasting
                  impression on audiences to elevate your brand to new
                  heights.
                </p>

                <div className="flex flex-wrap gap-6">
                  <Link to="/contact" className="group inline-flex rounded border-2 border-[#4659FF] bg-[#4659FF] px-6 py-3 text-base font-bold text-white lg:px-8 lg:py-4 xl:px-[42px]">
                    <div className="relative flex items-center justify-center overflow-hidden">
                      <span className="translate-y-0 transition-all duration-300 group-hover:-translate-y-full">Get In Touch</span>
                      <span className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0">Get In Touch</span>
                    </div>
                  </Link>
                  <Link to="/service" className="group inline-flex rounded border-2 border-[#0B1040] bg-transparent px-6 py-3 text-base font-bold text-[#0B1040] lg:px-8 lg:py-4 xl:px-[42px]">
                    <div className="relative flex items-center justify-center overflow-hidden">
                      <span className="translate-y-0 transition-all duration-300 group-hover:-translate-y-full">Explore Our Services</span>
                      <span className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0">Explore Our Services</span>
                    </div>
                  </Link>
                </div>
              </div>
              {/* <!-- Hero Content Block --> */}
              {/* <!-- Hero Image Block --> */}
              <div className="right-0 top-0 col-span-12 mx-auto flex h-auto max-w-lg lg:absolute lg:mx-0 lg:justify-end xl:max-w-xl xxxl:max-w-full">
                <img src="assets/img/images/th-7/hero-img.png" alt="hero-img" width="758" height="1000" className="max-w-full" />
              </div>
              {/* <!-- Hero Image Block --> */}
            </div>
            {/* <!-- Hero Area --> */}
          </div>
        </div>
        {/* <!-- Background Element --> */}
        <div className="absolute left-8 top-8 -z-10">
          <img src="assets/img/elemnts/th-7-hero-shape.svg" alt="th-7-hero-shape" width="259" height="268" />
        </div>
        {/* <!-- Background Element --> */}
      </div>
      {/* <!-- Hero Space --> */}
    </section>
  )
}
