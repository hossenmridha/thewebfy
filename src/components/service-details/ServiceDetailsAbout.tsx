

export default function ServiceDetailsAbout() {
  return (
    <section className="section-service-content">
      {/* <!-- Section Space --> */}
      <div className="section-space-bottom">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Service Content Area --> */}
          <div className="grid items-center gap-x-14 gap-y-10 lg:grid-cols-[1fr_minmax(0,0.6fr)] xl:gap-x-20 xxl:grid-cols-[1fr_minmax(0,0.85fr)] xxl:gap-x-[100px]">
            {/* <!-- Service Content Left Block --> */}
            <div className="jos" data-jos_animation="fade-left">
              <h2 className="mb-6">
                Our Approach
                <span>
                  <img src="assets/img/elemnts/shape-light-lime-5-arms-star.svg" alt="shape-light-lime-5-arms-star" width="74" height="70" className="inline-block h-auto w-8 md:w-10 lg:w-[57px]" />
                </span>
              </h2>
              <p className="text-lg leading-[1.42] lg:text-[21px]">
                The working approach for UI/UX design involves a series of
                steps and methodologies to ensure that the user interface
                and user experience. Here's a typical approach to UI/UX
                design:
              </p>
              {/* <!-- Service Content List --> */}
              <ul className="mt-[50px] flex flex-col gap-y-6">
                {/* <!-- Service Content Item --> */}
                <li>
                  <div className="flex gap-x-5">
                    <img src="assets/img/icons/icon-black-search.svg" alt="icon-black-search" width="38" height="40" className="h-10 w-auto" />
                    <h4 className="flex-1">
                      Research and Competitor Analysis:
                    </h4>
                  </div>
                  <ul className="ml-20 mt-4 flex list-outside list-disc flex-col gap-y-[30px]">
                    <li>
                      Start by understanding the target audience and their
                      needs and analyze similar products identify best
                      practices of differentiation.
                    </li>
                  </ul>
                </li>
                {/* <!-- Service Content Item --> */}
                {/* <!-- Service Content Item --> */}
                <li>
                  <div className="flex gap-x-5">
                    <img src="assets/img/icons/icon-black-edit.svg" alt="icon-black-edit" width="41" height="45" className="h-10 w-auto" />
                    <h4 className="flex-1">User Interface Implementation:</h4>
                  </div>
                  <ul className="ml-20 mt-4 flex list-outside list-disc flex-col gap-y-[30px]">
                    <li>
                      Translate the finalized UI design into actual code or
                      design, elements, assets, depending on the platform
                      (web, mobile, etc.).
                    </li>
                  </ul>
                </li>
                {/* <!-- Service Content Item --> */}
                {/* <!-- Service Content Item --> */}
                <li>
                  <div className="flex gap-x-5">
                    <img src="assets/img/icons/icon-black-rocket.svg" alt="icon-black-rocket" width="38" height="44" className="h-10 w-auto" />
                    <h4 className="flex-1">Launch and Post-Launch:</h4>
                  </div>
                  <ul className="ml-20 mt-4 flex list-outside list-disc flex-col gap-y-[30px]">
                    <li>
                      Prepare for the product's launch, and gather user
                      feedback after the product is live and make iterative
                      improvements user data.
                    </li>
                  </ul>
                </li>
                {/* <!-- Service Content Item --> */}
              </ul>
              {/* <!-- Service Content List --> */}
            </div>
            {/* <!-- Service Content Left Block --> */}

            {/* <!-- Service Content Right Block --> */}
            <div className="jos" data-jos_animation="fade-right">
              <div className="mx-auto max-w-[495px] overflow-hidden rounded-[25px] border-2 border-black lg:mx-0 lg:max-w-full lg:border-[5px]">
                <img src="assets/img/images/th-1/service-details-inner-img.jpg" alt="service-details-inner-img" width="548" height="632" className="h-auto w-full object-cover" />
              </div>
            </div>
            {/* <!-- Service Content Right Block --> */}
          </div>
          {/* <!-- Service Content Area --> */}
        </div>
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>
  )
}
