
import { Link } from "react-router-dom"
 

export default function AboutSEOHomeThree() {
  return (
    <>
      <section className="section-content">
        {/* <!-- Section Space --> */}
        <div className="section-space">
          {/* <!-- Section Container --> */}
          <div className="container">
            {/* <!-- Content Area --> */}
            <div className="grid grid-cols-1 items-center gap-x-20 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_1fr] xl:gap-x-28 xxl:gap-x-32">
              {/* <!-- Content Left Block --> */}
              <div className="jos relative order-2 mx-auto md:order-1 lg:mx-0" data-jos_animation="fade-left">
                <img src="assets/img/images/th-3/content-img-1.png" alt="content-img-1" width="532" height="484" className="max-w-full" />
                {/* <!-- Image Shape --> */}
                <img src="assets/img/images/th-3/content-shape-1.png" alt="content-shape-1" width="313" height="312" className="absolute -left-32 bottom-0 hidden sm:inline-block" />
                {/* <!-- Image Shape --> */}
              </div>
              {/* <!-- Content Left Block --> */}
              {/* <!-- Content Right Block --> */}
              <div className="jos order-1 md:order-2" data-jos_animation="fade-right">
                <div className="section-block">
                  <h2 className="mb-6 font-familjenGrotesk text-4xl font-bold leading-none text-black md:text-5xl lg:text-6xl xl:text-7xl xxl:text-[85px]">
                    We strive for the best SEO quality
                  </h2>
                  <p className="section-para">
                    We are a leading SEO company dedicated to helping brand
                    grow their online presence & achieve higher search engine
                    rankings and improve digital performance.
                  </p>

                  <p className="section-para">
                    Whether you're a small local business or a global brand,
                    we tailor our SEO services to meet your unique needs &
                    goals.
                  </p>

                  <Link to="/about" className="mt-12 inline-flex items-center justify-center rounded-[50px] bg-[#FFE757] px-11 py-4 text-base font-bold hover:bg-black hover:text-[#FFE757]">Explore more</Link>
                </div>
              </div>
              {/* <!-- Content Right Block --> */}
            </div>
            {/* <!-- Content Area --> */}
          </div>
          {/* <!-- Section Container --> */}
        </div>
        {/* <!-- Section Space --> */}
      </section>
    </>
  )
}
