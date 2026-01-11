import { Link } from "react-router-dom";

export default function HeroHomeEight() {
  return (
    <section className="section-hero">
      <div className="relative z-10 mt-[62px] bg-[url(../img/images/th-8/hero-img.jpg)] bg-cover bg-center bg-no-repeat after:absolute after:inset-0 after:-z-10 after:bg-[#000937]/60 lg:mt-[100px]">
        <div className="py-20 md:py-[100px] xl:py-[150px]">
          <div className="container">
            {/* <!-- Hero Area --> */}
            <div className="text-center text-[#FCF9F0]">
              <h1 className="font-outfit text-5xl font-medium uppercase leading-none -tracking-[3px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl xxl:text-[140px]">
                Enter the age of technology
              </h1>
              <p className="mx-auto mb-12 mt-6 max-w-3xl text-xl lg:text-2xl xl:max-w-5xl">
                Our company is a beacon of innovation and progress in the
                tech world. We design websites, apps, and digital
                experiences to help clients grow and transform.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/contact" className="group inline-flex rounded border-2 border-[#001AA5] bg-[#001AA5] px-6 py-3 text-base font-bold text-white lg:px-8 xl:px-[42px]">
                  <div className="relative flex items-center justify-center overflow-hidden">
                    <span className="translate-y-0 transition-all duration-300 group-hover:-translate-y-full">Get In Touch</span>
                    <span className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0">Get In Touch</span>
                  </div>
                </Link>
                <Link to="/service" className="group inline-flex rounded border-2 border-[#FCF9F0] bg-transparent px-6 py-3 text-base font-bold text-white lg:px-8 xl:px-[42px]">
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
      </div>
      {/* <!-- Hero Space --> */}
    </section>
  )
}
