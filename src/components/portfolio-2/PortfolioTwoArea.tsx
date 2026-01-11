import { Link } from "react-router-dom";


export default function PortfolioTwoArea() {
  return (
    <section className="section-portfolio">
      {/* <!-- Section Space --> */}
      <div className="section-space">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Section Block --> */}
          <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
            <h2 className="jos">
              Have a wide range of creative projects
              <span>
                <img src="assets/img/elemnts/shape-light-lime-5-arms-star.svg" alt="shape-light-lime-5-arms-star" width="74" height="70" className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]" />
              </span>
            </h2>
          </div>
          {/* <!-- Section Block --> */}

          {/* <!-- Portfolio List --> */}
          <ul className="grid grid-cols-1 gap-y-10 md:gap-y-[60px] lg:gap-y-20">
            {/* <!-- Portfolio Item --> */}
            <li className="jos">
              <div className="group">
                {/* <!-- Thumbnail Block--> */}
                <div className="relative mb-6 overflow-hidden rounded-[10px]">
                  {/* <!-- Image --> */}
                  <img src="assets/img/images/th-1/project-thumbnail-large-1.jpg" alt="project-thumbnail-large-1" width="1296" height="550" className="aspect-video sm:aspect-auto" />
                  {/* <!-- Image --> */}

                  <div className="absolute inset-0 flex translate-y-full items-center justify-center bg-gradient-to-t from-[#191931] to-[#191931]/20 transition-all group-hover:translate-y-0">
                    <Link to="/portfolio-details" className="absolute inline-flex h-[100px] w-[100px] scale-90 items-center justify-center rounded-[50%] border border-black bg-colorLightLime opacity-0 transition-all delay-300 duration-500 group-hover:scale-100 group-hover:opacity-100">
                      <img src="assets/img/icons/icon-black-trending-up.svg" alt="icon-black-trending-up" width="50" height="50" />
                    </Link>
                  </div>
                </div>
                {/* <!-- Thumbnail Block--> */}

                {/* <!-- Content Block --> */}
                <div className="flex flex-col justify-between gap-x-10 gap-y-4 lg:flex-row xl:items-center">
                  <Link to="/portfolio-details" className="display-heading display-heading-4">Product Design</Link>

                  <p className="line-clamp-2 text-lg leading-[1.42] lg:max-w-[526px] lg:text-[21px]">
                    Developing the look and feel of physical products,
                    considering ergonomics, aesthetics, & functionality.
                  </p>
                </div>
                {/* <!-- Content Block --> */}
              </div>
            </li>
            {/* <!-- Portfolio Item --> */}
            {/* <!-- Portfolio Item --> */}
            <li className="jos">
              <div className="group">
                {/* <!-- Thumbnail Block--> */}
                <div className="relative mb-6 overflow-hidden rounded-[10px]">
                  {/* <!-- Image --> */}
                  <img src="assets/img/images/th-1/project-thumbnail-large-2.jpg" alt="project-thumbnail-large-2" width="1296" height="550" className="aspect-video sm:aspect-auto" />
                  {/* <!-- Image --> */}

                  <div className="absolute inset-0 flex translate-y-full items-center justify-center bg-gradient-to-t from-[#191931] to-[#191931]/20 transition-all group-hover:translate-y-0">
                    <Link to="/portfolio-details" className="absolute inline-flex h-[100px] w-[100px] scale-90 items-center justify-center rounded-[50%] border border-black bg-colorLightLime opacity-0 transition-all delay-300 duration-500 group-hover:scale-100 group-hover:opacity-100">
                      <img src="assets/img/icons/icon-black-trending-up.svg" alt="icon-black-trending-up" width="50" height="50" />
                    </Link>
                  </div>
                </div>
                {/* <!-- Thumbnail Block--> */}

                {/* <!-- Content Block --> */}
                <div className="flex flex-col justify-between gap-x-10 gap-y-4 lg:flex-row xl:items-center">
                  <Link to="/portfolio-details" className="display-heading display-heading-4">Market Expansion Blueprint</Link>

                  <p className="line-clamp-2 text-lg leading-[1.42] lg:max-w-[526px] lg:text-[21px]">
                    Developing the look and feel of physical products,
                    considering ergonomics, aesthetics, & functionality.
                  </p>
                </div>
                {/* <!-- Content Block --> */}
              </div>
            </li>
            {/* <!-- Portfolio Item --> */}
            {/* <!-- Portfolio Item --> */}
            <li className="jos">
              <div className="group">
                {/* <!-- Thumbnail Block--> */}
                <div className="relative mb-6 overflow-hidden rounded-[10px]">
                  {/* <!-- Image --> */}
                  <img src="assets/img/images/th-1/project-thumbnail-large-3.jpg" alt="project-thumbnail-large-3" width="1296" height="550" className="aspect-video sm:aspect-auto" />
                  {/* <!-- Image --> */}

                  <div className="absolute inset-0 flex translate-y-full items-center justify-center bg-gradient-to-t from-[#191931] to-[#191931]/20 transition-all group-hover:translate-y-0">
                    <Link to="/portfolio-details" className="absolute inline-flex h-[100px] w-[100px] scale-90 items-center justify-center rounded-[50%] border border-black bg-colorLightLime opacity-0 transition-all delay-300 duration-500 group-hover:scale-100 group-hover:opacity-100">
                      <img src="assets/img/icons/icon-black-trending-up.svg" alt="icon-black-trending-up" width="50" height="50" />
                    </Link>
                  </div>
                </div>
                {/* <!-- Thumbnail Block--> */}

                {/* <!-- Content Block --> */}
                <div className="flex flex-col justify-between gap-x-10 gap-y-4 lg:flex-row xl:items-center">
                  <Link to="/portfolio-details" className="display-heading display-heading-4">Strategic Growth Accelerator</Link>

                  <p className="line-clamp-2 text-lg leading-[1.42] lg:max-w-[526px] lg:text-[21px]">
                    Developing the look and feel of physical products,
                    considering ergonomics, aesthetics, & functionality.
                  </p>
                </div>
                {/* <!-- Content Block --> */}
              </div>
            </li>
            {/* <!-- Portfolio Item --> */}
          </ul>
          {/* <!-- Portfolio List --> */}
        </div>
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>
  )
}
