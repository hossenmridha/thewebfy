
 

export default function FeaturesHomeFive() {
  return (
    <section className="section-features">
      {/* <!-- Section Space --> */}
      <div className="section-space">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Section Block --> */}
          <div className="mb-10 max-w-3xl md:mb-[60px] lg:mb-20">
            <h2 className="font-libreBaskerville text-4xl !leading-[1.14] -tracking-[0.5px] text-[#221F1A] md:text-5xl lg:text-6xl xxl:text-[70px]">
              Our key feature for productivity gains
            </h2>
          </div>
          {/* <!-- Section Block --> */}

          {/* <!-- Feature List --> */}
          <ul className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {/* <!-- Feature Item --> */}
            <li className="jos">
              {/* <!-- Icon --> */}
              <div className="mb-[30px]">
                <img src="assets/img/icons/th-5-feature-icon-1.svg" alt="th-5-feature-icon-1" width="66" height="76" />
              </div>
              {/* <!-- Icon --> */}
              {/* <!-- Content --> */}
              <div className="text-[#221F1A]">
                <h4 className="mb-4 font-libreBaskerville">
                  Responsive Results
                </h4>
                <p>
                  We help businesses & individuals promote their products,
                  services or brands through various digital channels and
                  platforms.
                </p>
              </div>
              {/* <!-- Content --> */}
            </li>
            {/* <!-- Feature Item --> */}
            {/* <!-- Feature Item --> */}
            <li className="jos">
              {/* <!-- Icon --> */}
              <div className="mb-[30px]">
                <img src="assets/img/icons/th-5-feature-icon-2.svg" alt="th-5-feature-icon-2" width="72" height="71" />
              </div>
              {/* <!-- Icon --> */}
              {/* <!-- Content --> */}
              <div className="text-[#221F1A]">
                <h4 className="mb-4 font-libreBaskerville">
                  Data-Driven Approach
                </h4>
                <p>
                  Effective digital marketing relies heavily on data and
                  analytics. We often have a strong emphasis on collecting
                  and analyzing data.
                </p>
              </div>
              {/* <!-- Content --> */}
            </li>
            {/* <!-- Feature Item --> */}
            {/* <!-- Feature Item --> */}
            <li className="jos">
              {/* <!-- Icon --> */}
              <div className="mb-[30px]">
                <img src="assets/img/icons/th-5-feature-icon-3.svg" alt="th-5-feature-icon-3" width="72" height="71" />
              </div>
              {/* <!-- Icon --> */}
              {/* <!-- Content --> */}
              <div className="text-[#221F1A]">
                <h4 className="mb-4 font-libreBaskerville">
                  Customized Strategies
                </h4>
                <p>
                  We maximize the client's online presence and achieve their
                  specific objectives. Customization is the key to effective
                  and impactful.
                </p>
              </div>
              {/* <!-- Content --> */}
            </li>
            {/* <!-- Feature Item --> */}
          </ul>
          {/* <!-- Feature List --> */}
        </div>
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>
  )
}
