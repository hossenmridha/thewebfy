import { Link } from "react-router-dom";

export default function HeroHomeFive() {
  return (
    <section className="section-hero">
      {/* <!-- Hero Background --> */}
      <div className="bg-[#073D30]">
        {/* <!-- Hero Space --> */}
        <div className="pb-20 pt-[195px] lg:pb-[355px]">
          <div className="container">
            {/* <!-- Hero Area --> */}
            <div className="text-center text-[#FFFCF2]">
              <h1 className="mb-8 font-libreBaskerville leading-[1.2] -tracking-[1px] xl:text-8xl xl:leading-none xxl:text-[120px]">
                Increase your brand awareness
                <span className="underline decoration-[#FBD718] decoration-wavy"> digitally</span>
              </h1>
              <p className="para-lg mx-auto max-w-[1190px]">
                As a digital marketing agency, we specialize in providing a
                range of online marketing and advertising-related services.
                We help businesses and individuals promote your product,
                service, or brand through various digital channels.
              </p>
              <div className="mt-[50px] flex flex-wrap justify-center gap-6">
                <Link to="/contact" className="group inline-flex rounded-[50px] border-2 border-[#FBD718] bg-[#FBD718] px-8 py-3 text-base font-bold text-[#073D30] lg:px-11 lg:py-4">
                  <div className="relative flex items-center justify-center overflow-hidden">
                    <span className="translate-y-0 transition-all duration-300 group-hover:-translate-y-full">Let's Talk</span>
                    <span className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0">Let's Talk</span>
                  </div>
                </Link>
                <Link to="/service" className="group inline-flex rounded-[50px] border-2 border-[#FFFCF2] bg-transparent px-8 py-3 text-base font-bold text-[#FFFCF2] lg:px-11 lg:py-4">
                  <div className="relative flex items-center justify-center overflow-hidden">
                    <span className="translate-y-0 transition-all duration-300 group-hover:-translate-y-full">Explore Our Services</span>
                    <span className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0">Explore Our Services</span>
                  </div>
                </Link>
              </div>
            </div>
            {/* <!-- Hero Area --> */}
          </div>
        </div>
        {/* <!-- Hero Space --> */}
      </div>
      {/* <!-- Hero Background --> */}
    </section>
  )
}
