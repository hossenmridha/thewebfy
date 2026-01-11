import { Link } from "react-router-dom";



export default function PricingHomeNine() {
  return (
    <section className="section-pricing">
      {/* <!-- Section Space --> */}
      <div className="section-space">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Section Block --> */}
          <div className="mx-auto mb-10 max-w-md text-center md:mb-[60px] md:max-w-xl lg:mb-20 lg:max-w-3xl">
            <h2 className="font-epilogue text-4xl leading-[1.05] md:text-5xl lg:text-6xl xl:text-[80px]">
              Reasonable plans for quality service
            </h2>
          </div>
          {/* <!-- Section Block --> */}

          {/* <!-- Pricing List --> */}
          <ul className="grid grid-cols-1 divide-y-[3px] divide-[#131313] rounded-[10px] border-[3px] border-[#131313] text-[#131313] lg:grid-cols-3 lg:gap-0 lg:divide-x-[3px] lg:divide-y-0">
            {/* <!-- Pricing Item --> */}
            <li className="flex flex-col border-[#131313] p-[30px] xl:p-10">
              {/* <!-- Pricing Top --> */}
              <div>
                <span className="mb-[30px] block font-epilogue text-2xl font-bold xl:text-3xl">Standard Plan</span>
                <span className="block font-epilogue text-6xl font-bold leading-none -tracking-[2px] xl:text-[80px]">$19.00</span>
              </div>
              {/* <!-- Pricing Top --> */}
              {/* <!-- Separator --> */}
              <div className="my-[30px] h-px w-full bg-[#131313]"></div>
              {/* <!-- Separator --> */}

              {/* <!-- Pricing Info List --> */}
              <ul className="mb-10 flex list-inside list-image-[url(../img/icons/icon-black-reply-arrow.svg)] flex-col gap-y-5 text-xl font-semibold">
                {/* <!-- Pricing Info Item --> */}
                <li>12 posts per month</li>
                {/* <!-- Pricing Info Item --> */}
                {/* <!-- Pricing Info Item --> */}
                <li>Page monitoring & responding </li>
                {/* <!-- Pricing Info Item --> */}
                {/* <!-- Pricing Info Item --> */}
                <li>20 Sponsored & follower ads</li>
                {/* <!-- Pricing Info Item --> */}
                {/* <!-- Pricing Info Item --> */}
                <li>Image ads</li>
                {/* <!-- Pricing Info Item --> */}
                {/* <!-- Pricing Info Item --> */}
                <li>Advanced ad targeting</li>
                {/* <!-- Pricing Info Item --> */}
              </ul>
              {/* <!-- Pricing Info List --> */}
              <Link to="/pricing" className="group mt-auto flex justify-center rounded border-2 border-[#131313] bg-transparent px-6 py-4 text-center text-base font-semibold text-[#131313]">
                <div className="relative flex items-center justify-center overflow-hidden">
                  <span className="inline-flex translate-y-0 gap-x-[10px] transition-all duration-300 group-hover:-translate-y-full">Select the package
                    <img src="assets/img/icons/cheveron-right.svg" alt="icon-cheveron-right" className="invert" />
                  </span>
                  <span className="absolute inline-flex translate-y-full gap-x-[10px] transition-all duration-300 group-hover:translate-y-0">Select the package
                    <img src="assets/img/icons/cheveron-right.svg" alt="icon-cheveron-right" className="invert" />
                  </span>
                </div>
              </Link>
            </li>
            {/* <!-- Pricing Item --> */}
            {/* <!-- Pricing Item --> */}
            <li className="flex flex-col border-[#131313] p-[30px] xl:p-10">
              {/* <!-- Pricing Top --> */}
              <div>
                <span className="mb-[30px] block font-epilogue text-2xl font-bold xl:text-3xl">Professional Plan</span>
                <span className="block font-epilogue text-6xl font-bold leading-none -tracking-[2px] xl:text-[80px]">$29.00</span>
              </div>
              {/* <!-- Pricing Top --> */}
              {/* <!-- Separator --> */}
              <div className="my-[30px] h-px w-full bg-[#131313]"></div>
              {/* <!-- Separator --> */}

              {/* <!-- Pricing Info List --> */}
              <ul className="mb-10 flex list-inside list-image-[url(../img/icons/icon-black-reply-arrow.svg)] flex-col gap-y-5 text-xl font-semibold">
                {/* <!-- Pricing Info Item --> */}
                <li>24 posts per month</li>
                {/* <!-- Pricing Info Item --> */}
                {/* <!-- Pricing Info Item --> */}
                <li>Page monitoring & responding </li>
                {/* <!-- Pricing Info Item --> */}
                {/* <!-- Pricing Info Item --> */}
                <li>30 Sponsored & follower ads</li>
                {/* <!-- Pricing Info Item --> */}
                {/* <!-- Pricing Info Item --> */}
                <li>Video ads</li>
                {/* <!-- Pricing Info Item --> */}
                {/* <!-- Pricing Info Item --> */}
                <li>Advanced ad targeting</li>
                {/* <!-- Pricing Info Item --> */}
              </ul>
              {/* <!-- Pricing Info List --> */}
              <Link to="/pricing" className="group mt-auto flex justify-center rounded border-2 border-[#FF5317] bg-[#FF5317] px-6 py-4 text-center text-base font-semibold text-[#FEF6E0]">
                <div className="relative flex items-center justify-center overflow-hidden">
                  <span className="inline-flex translate-y-0 gap-x-[10px] transition-all duration-300 group-hover:-translate-y-full">Select the package
                    <img src="assets/img/icons/cheveron-right.svg" alt="icon-cheveron-right" />
                  </span>
                  <span className="absolute inline-flex translate-y-full gap-x-[10px] transition-all duration-300 group-hover:translate-y-0">Select the package
                    <img src="assets/img/icons/cheveron-right.svg" alt="icon-cheveron-right" />
                  </span>
                </div>
              </Link>
            </li>
            {/* <!-- Pricing Item --> */}
            {/* <!-- Pricing Item --> */}
            <li className="flex flex-col border-[#131313] p-[30px] xl:p-10">
              {/* <!-- Pricing Top --> */}
              <div>
                <span className="mb-[30px] block font-epilogue text-2xl font-bold xl:text-3xl">Enterprise Plan</span>
                <span className="block font-epilogue text-6xl font-bold leading-none -tracking-[2px] xl:text-[80px]">$39.00</span>
              </div>
              {/* <!-- Pricing Top --> */}
              {/* <!-- Separator --> */}
              <div className="my-[30px] h-px w-full bg-[#131313]"></div>
              {/* <!-- Separator --> */}

              {/* <!-- Pricing Info List --> */}
              <ul className="mb-10 flex list-inside list-image-[url(../img/icons/icon-black-reply-arrow.svg)] flex-col gap-y-5 text-xl font-semibold">
                {/* <!-- Pricing Info Item --> */}
                <li>60 posts per month</li>
                {/* <!-- Pricing Info Item --> */}
                {/* <!-- Pricing Info Item --> */}
                <li>Page monitoring & responding </li>
                {/* <!-- Pricing Info Item --> */}
                {/* <!-- Pricing Info Item --> */}
                <li>100 Sponsored & follower ads</li>
                {/* <!-- Pricing Info Item --> */}
                {/* <!-- Pricing Info Item --> */}
                <li>Video + image ads ads</li>
                {/* <!-- Pricing Info Item --> */}
                {/* <!-- Pricing Info Item --> */}
                <li>Advanced ad targeting</li>
                {/* <!-- Pricing Info Item --> */}
              </ul>
              {/* <!-- Pricing Info List --> */}
              <Link to="/pricing" className="group mt-auto flex justify-center rounded border-2 border-[#131313] bg-transparent px-6 py-4 text-center text-base font-semibold text-[#131313]">
                <div className="relative flex items-center justify-center overflow-hidden">
                  <span className="inline-flex translate-y-0 gap-x-[10px] transition-all duration-300 group-hover:-translate-y-full">Select the package
                    <img src="assets/img/icons/cheveron-right.svg" alt="icon-cheveron-right" className="invert" />
                  </span>
                  <span className="absolute inline-flex translate-y-full gap-x-[10px] transition-all duration-300 group-hover:translate-y-0">Select the package
                    <img src="assets/img/icons/cheveron-right.svg" alt="icon-cheveron-right" className="invert" />
                  </span>
                </div>
              </Link>
            </li>
            {/* <!-- Pricing Item --> */}
          </ul>
          {/* <!-- Pricing List --> */}
        </div>
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>
  )
}
