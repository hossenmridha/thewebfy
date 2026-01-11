import { Link } from "react-router-dom";

export default function AboutHomeNine() {
  return (
    <section className="section-content">
      {/* <!-- Section Space --> */}
      <div className="section-space">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Content Area --> */}
          <div className="grid grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-[minmax(0,0.6fr)_1fr] lg:gap-20 xxl:grid-cols-[minmax(0,0.8fr)_1fr] xxl:gap-28">
            {/* <!-- Content Left Block --> */}
            <div className="jos relative order-2 lg:order-1" data-jos_animation="fade-left">
              <img src="assets/img/images/th-9/content-img-1.jpg" alt="content-img-1" width="526" height="550" className="mx-auto rounded-md" />
              <img src="assets/img/elemnts/th-9-content-shape-1.svg" alt="th-9-content-shape-1" width="133" height="145" className="jos absolute -left-24 -top-24 hidden xl:inline-block" data-jos_animation="fade-down" />

              {/* <!-- Tags --> */}
              <div className="jos absolute bottom-5 right-5 rounded-[5px] bg-[#3256D2] p-[30px] pr-20 text-[#FEF6E0]" data-jos_delay="1">
                <span className="mb-1 inline-flex items-center gap-x-4 font-epilogue text-[35px] font-semibold leading-none -tracking-[1px]">
                  25%
                  <img src="assets/img/images/th-9/triangle.png" alt="triangle" width="23" height="17" />
                </span>
                <span className="block text-xl">Increase in sales</span>
              </div>
              {/* <!-- Tags --> */}
            </div>
            {/* <!-- Content Left Block --> */}

            {/* <!-- Content Right Block --> */}
            <div className="jos order-1 text-[#131313] lg:order-2" data-jos_animation="fade-right">
              {/* <!-- Section Block --> */}
              <div className="mb-5">
                <h2 className="font-epilogue text-4xl leading-[1.05] md:text-5xl lg:text-6xl xl:text-[80px]">
                  Stay ahead of modern market competition
                </h2>
              </div>
              {/* <!-- Section Block --> */}
              <div className="mb-8 flex flex-col gap-y-10">
                <p className="para-lg">
                  We help clients promote their products through social
                  media channels like Facebook, Instagram, Twitter, and
                  LinkedIn, etc. by understanding their brand identity,
                  target audience.
                </p>
                <p className="para-lg">
                  Dedicated to helping businesses harness the power of
                  social media to grow their online presence, & get
                  meaningful results.
                </p>
              </div>
              <Link to="/about" className="group inline-flex rounded border-2 border-[#FF5317] bg-[#FF5317] px-6 py-4 text-base font-semibold text-[#FEF6E0]">
                <div className="relative flex items-center justify-center overflow-hidden">
                  <span className="inline-flex translate-y-0 gap-x-[10px] transition-all duration-300 group-hover:-translate-y-full">Discover more
                    <img src="assets/img/icons/cheveron-right.svg" alt="icon-cheveron-right" />
                  </span>
                  <span className="absolute inline-flex translate-y-full gap-x-[10px] transition-all duration-300 group-hover:translate-y-0">Discover more
                    <img src="assets/img/icons/cheveron-right.svg" alt="icon-cheveron-right" />
                  </span>
                </div>
              </Link>
            </div>
            {/* <!-- Content Right Block --> */}
          </div>
          {/* <!-- Content Area --> */}
        </div>
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>
  )
}
