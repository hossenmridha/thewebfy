
import { Link } from "react-router-dom"


export default function CtaHomeFive() {
  return (
    <section className="section-cta">
      <div className="relative z-10 overflow-hidden">
        {/* <!-- Section Background --> */}
        <div className="xxl:mx-[50px mx-5 rounded-[20px] bg-[#073D30]">
          {/* <!-- Section Space --> */}
          <div className="section-space">
            {/* <!-- Section Container --> */}
            <div className="container">
              {/* <!-- CTA Area --> */}
              <div className="mx-auto flex max-w-[900px] flex-col items-center justify-center">
                {/* <!-- Section Block --> */}
                <div className="mb-6 text-center">
                  <h2 className="font-libreBaskerville text-4xl !leading-[1.14] -tracking-[0.5px] text-[#FFFCF2] md:text-5xl lg:text-6xl xxl:text-[70px]">
                    Have a project in mind? Let's work together!
                  </h2>
                </div>
                {/* <!-- Section Block --> */}
                <p className="text-auto para-lg mx-auto mb-[50px] max-w-[744px] text-[#FFFCF2]">
                  We provides exceptional digital marketing services to help
                  businesses grow our clients online presence. We guarantee
                  top-notch quality.
                </p>
                <Link to="/portfolio-1" className="group flex rounded-[50px] border-2 border-[#FBD718] bg-[#FBD718] px-8 py-3 text-base font-bold text-[#073D30] lg:px-11 lg:py-4">
                  <div className="relative inline-flex items-center justify-center overflow-hidden">
                    <span className="block translate-y-0 transition-all duration-300 group-hover:-translate-y-full">View All Works</span>
                    <span className="absolute block translate-y-full transition-all duration-300 group-hover:translate-y-0">View All Works</span>
                  </div>
                </Link>
              </div>
              {/* <!-- CTA Area --> */}
            </div>
            {/* <!-- Section Container --> */}
          </div>
          {/* <!-- Section Space --> */}
        </div>
        {/* <!-- Section Background --> */}

        <div className="absolute left-0 top-0 -z-10">
          <img src="assets/img/elemnts/th-5-cta-shape.svg" alt="th-5-cta-shape" width="341" height="371" />
        </div>
      </div>
    </section>
  )
}
