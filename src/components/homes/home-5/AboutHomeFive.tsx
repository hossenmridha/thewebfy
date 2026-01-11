
import { Link } from "react-router-dom" 

export default function AboutHomeFive() {
  return (
    <section className="section-content">
      {/* <!-- Section Space --> */}
      <div className="section-space-top">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Content Area --> */}
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,0.7fr)_1fr] lg:gap-20">
            {/* <!-- Content Left Side --> */}
            <div className="jos order-2 md:order-1" data-jos_animation="fade-left">
              <img src="assets/img/images/th-5/content-img-1.jpg" alt="content-img-1" className="h-auto w-full" />
            </div>
            {/* <!-- Content Left Side --> */}
            {/* <!-- Content Right Side --> */}
            <div className="jos order-1 md:order-2" data-jos_animation="fade-right">
              {/* <!-- Section Block --> */}
              <div className="mb-6">
                <h2 className="font-libreBaskerville text-4xl !leading-[1.14] -tracking-[0.5px] text-[#0C0C0C] md:text-5xl lg:text-6xl xxl:text-[70px]">
                  Making your brand bigger than ever
                </h2>
              </div>
              {/* <!-- Section Block --> */}
              {/* <!-- Content Block --> */}
              <div className="flex flex-col items-start gap-y-8 text-[#0C0C0C]">
                <p className="para-lg">
                  We help businesses & organizations promote their products,
                  services or brands in the online world with 12 years of
                  experience. We have become a leader in digital
                  experiences, web design, and branding.
                </p>

                <p className="para-lg">
                  We love what we do with our clients to ensure their
                  positioning and digital transformation ensure the business
                  meets every standard.
                </p>

                <Link to="/about" className="group inline-flex rounded-[50px] border-2 border-[#FBD718] bg-[#FBD718] px-8 py-3 text-base font-bold text-[#073D30] lg:px-11 lg:py-4">
                  <div className="relative inline-flex items-center justify-center overflow-hidden">
                    <span className="translate-y-0 transition-all duration-300 group-hover:-translate-y-full">Explore More</span>
                    <span className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0">Explore More</span>
                  </div>
                </Link>
              </div>
              {/* <!-- Content Block --> */}
            </div>
            {/* <!-- Content Right Side --> */}
          </div>
          {/* <!-- Content Area --> */}
        </div>
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>
  )
}
