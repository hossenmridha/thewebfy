 
 

export default function HeroHomeThree() {
  return (
    <>
      <section className="section-hero">
        <div className="relative z-10">
          {/* <!-- Hero Space --> */}
          <div className="pb-20 lg:pb-0">
            {/* <!-- Section Container --> */}
            <div className="ml-auto flex max-w-[1600px] flex-col items-center justify-between gap-10 px-10 lg:flex-row lg:pl-10 xl:px-0 xxl:gap-0">
              {/* <!-- Hero Content Area --> */}
              <div className="pt-[150px] text-center lg:max-w-lg lg:pb-[130px] lg:pt-[196px] lg:text-start xl:max-w-xl xxl:max-w-[746px]">
                <p className="text-lg font-semibold md:text-xl lg:text-2xl">
                  #1 SEO agency for fast-growing companies
                </p>
                <h1 className="font-familjenGrotesk text-4xl font-bold leading-none -tracking-[1px] sm:text-5xl md:text-7xl xl:text-8xl xxl:text-[130px]">
                  Provides the best ranking experience
                </h1>
                <p className="para-lg my-[30px] md:mb-[50px]">
                  We work to improve your business visibility within search
                  engines, boost organic traffic to your website and rank for
                  the most valuable keywords.
                </p>

                <form onSubmit={(e) => e.preventDefault()} className="mx-auto mb-6 max-w-[526px] lg:mx-0">
                  <div className="relative w-full">
                    <input type="email" placeholder="Enter your email address" className="w-full rounded-[50px] border-2 border-black px-8 py-4 text-base font-bold placeholder:text-black sm:pr-44" required />
                    <button type="submit" className="static bottom-1 right-1 top-1 mt-5 w-full items-center justify-center rounded-[50px] bg-[#FFE757] px-9 py-4 text-base font-bold hover:bg-black hover:text-[#FFE757] sm:absolute sm:mt-0 sm:inline-flex sm:w-auto">
                      Get started
                    </button>
                  </div>
                </form>
                <div className="flex flex-wrap items-center justify-center gap-3 text-lg font-semibold lg:justify-start">
                  <div className="flex items-center gap-x-1">
                    <img src="assets/img/icons/icon-trustpilot.svg" alt="icon-trustpilot" width="26" height="24" />
                    <img src="assets/img/icons/icon-trustpilot.svg" alt="icon-trustpilot" width="26" height="24" />
                    <img src="assets/img/icons/icon-trustpilot.svg" alt="icon-trustpilot" width="26" height="24" />
                    <img src="assets/img/icons/icon-trustpilot.svg" alt="icon-trustpilot" width="26" height="24" />
                    <img src="assets/img/icons/icon-trustpilot.svg" alt="icon-trustpilot" width="26" height="24" />
                  </div>
                  <span>4.8/5 stars based on 1K client reviews</span>
                </div>
              </div>
              {/* <!-- Hero Content Area --> */}

              {/* <!-- Hero Image Block --> */}
              <div className="relative right-0">
                {/* <!-- Hero Image --> */}
                <img src="assets/img/images/th-3/hero-img.png" alt="hero-img" width="762" height="927" className="ml-auto" />
                {/* <!-- Hero Image --> */}
                {/* <!-- Hero Image Shape --> */}
                <img src="assets/img/elemnts/shape-purple-blue-monitor.svg" alt="shape-purple-blue-monitor" width="125" height="109" className="absolute bottom-36 right-24 hidden sm:inline-block" />
                {/* <!-- Hero Image Shape --> */}
                {/* <!-- Hero Image Shape --> */}
                <img src="assets/img/elemnts/shape-purple-blue-polygon-star.svg" alt="shape-purple-blue-polygon-star" width="317" height="317" className="absolute -left-24 bottom-14 -z-10" />
                {/* <!-- Hero Image Shape --> */}
              </div>
              {/* <!-- Hero Image Block --> */}
            </div>
            {/* <!-- Section Container --> */}
          </div>
          {/* <!-- Hero Space --> */}
        </div>
      </section>
    </>
  )
}
