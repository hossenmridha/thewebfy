
 

export default function CustomSEOHomeThree() {
  return (
    <>
      <section className="section-content">
        {/* <!-- Section Space --> */}
        <div className="section-space-bottom">
          {/* <!-- Section Container --> */}
          <div className="container">
            {/* <!-- Content Area --> */}
            <div className="grid grid-cols-1 items-center gap-x-20 gap-y-10 lg:grid-cols-[1fr_minmax(0,0.7fr)] xl:gap-x-28 xxl:gap-x-32">
              {/* <!-- Content Right Block --> */}
              <div className="jos" data-jos_animation="fade-right">
                <div className="section-block">
                  <h2 className="mb-6 font-familjenGrotesk text-4xl font-bold leading-none text-black md:text-5xl lg:text-6xl xl:text-7xl xxl:text-[85px]">
                    Increase revenue with custom SEO
                  </h2>
                  <p className="section-para max-w-[636px]">
                    Our SEO agency will help you reach new audiences, increase
                    your website performance, and accelerate your reputation.
                  </p>
                </div>

                {/* <!-- Content List --> */}
                <ul className="para-large mt-[30px] flex flex-col gap-y-6 font-semibold md:mt-[50px]">
                  <li className="flex-start flex gap-x-[10px]">
                    <img src="assets/img/icons/icon-yellow-badge-check-mark.svg" alt="icon-yellow-badge-check-mark" width="30" height="30" />
                    On-page optimizing your web pages to improve rankings
                  </li>
                  <li className="flex-start flex gap-x-[10px]">
                    <img src="assets/img/icons/icon-yellow-badge-check-mark.svg" alt="icon-yellow-badge-check-mark" width="30" height="30" />
                    Keyword research to identify relevant search and phrases
                  </li>
                  <li className="flex-start flex gap-x-[10px]">
                    <img src="assets/img/icons/icon-yellow-badge-check-mark.svg" alt="icon-yellow-badge-check-mark" width="30" height="30" />
                    Continuously monitor search engine algorithm changes
                  </li>
                </ul>
                {/* <!-- Content List --> */}
              </div>
              {/* <!-- Content Right Block --> */}
              {/* <!-- Content Left Block --> */}
              <div className="jos relative mx-auto lg:mx-0" data-jos_animation="fade-left">
                <img src="assets/img/images/th-3/content-img-2.png" alt="content-img-2" width="530" height="484" className="max-w-full" />
                {/* <!-- Image Shape --> */}
                <img src="assets/img/images/th-3/content-shape-2.png" alt="content-shape-2" width="190" height="190" className="absolute -right-20 bottom-0 hidden sm:inline-block" />
                {/* <!-- Image Shape --> */}
              </div>
              {/* <!-- Content Left Block --> */}
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
