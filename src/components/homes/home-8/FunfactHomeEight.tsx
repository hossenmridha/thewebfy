
export default function FunfactHomeEight() {
  return (
    <section className="section-fun-fact">
      {/* <!-- Section Space --> */}
      <div className="section-space">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Section Block --> */}
          <div className="mb-10 md:mb-[60px] lg:mb-20">
            <h3 className="jos max-w-2xl font-outfit text-3xl font-medium leading-tight text-[#000937] md:text-4xl lg:text-[50px]">
              Our professionalism can be quantified by the numbers
            </h3>
          </div>
          {/* <!-- Section Block --> */}

          {/* <!-- Counter List --> */}
          <ul className="grid grid-cols-1 gap-8 text-[#000937] md:grid-cols-3 xl:gap-32">
            {/* <!-- Counter Item --> */}
            <li>
              <span className="block font-outfit text-2xl font-medium">Verified client review rate</span>
              <div className="my-4 h-px w-full bg-current"></div>
              <div className="font-outfit text-6xl font-medium leading-none -tracking-[3px] md:text-7xl xl:text-[110px]" data-module="countup">
                <span className="start-number" data-countup-number="4.8">4.8</span>/5
              </div>
            </li>
            {/* <!-- Counter Item --> */}
            {/* <!-- Counter Item --> */}
            <li>
              <span className="block font-outfit text-2xl font-medium">Experienced engineers</span>
              <div className="my-4 h-px w-full bg-current"></div>
              <div className="font-outfit text-6xl font-medium leading-none -tracking-[3px] md:text-7xl xl:text-[110px]" data-module="countup">
                <span className="start-number" data-countup-number="80">80</span>+
              </div>
            </li>
            {/* <!-- Counter Item --> */}
            {/* <!-- Counter Item --> */}
            <li>
              <span className="block font-outfit text-2xl font-medium">Annual growth in renewals</span>
              <div className="my-4 h-px w-full bg-current"></div>
              <div className="font-outfit text-6xl font-medium leading-none -tracking-[3px] md:text-7xl xl:text-[110px]" data-module="countup">
                <span className="start-number" data-countup-number="200">200</span>%
              </div>
            </li>
            {/* <!-- Counter Item --> */}
          </ul>
          {/* <!-- Counter List --> */}
        </div>
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>
  )
}
