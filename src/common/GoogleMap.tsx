

export default function GoogleMap() {
  return (
    <>
      {/* <!-- ...::: Contact Info Section Start :::... --> */}
      <section className="section-contact-info">
        {/* <!-- Section Space --> */}
        <div className="section-space-bottom">
          {/* <!-- Section Container --> */}
          <div className="container">
            {/* <!-- Section Block --> */}
            <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[866px]">
              <h2 className="jos">
                Contact Information
                <span>
                  <img src="assets/img/elemnts/shape-light-lime-5-arms-star.svg" alt="shape-light-lime-5-arms-star" width="74" height="70" className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]" />
                </span>
              </h2>
            </div>
            {/* <!-- Section Block --> */}

            {/* <!-- Contact Info List --> */}
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {/* <!-- Contact Info Item --> */}
              <li className="jos flex gap-x-6 rounded-[10px] bg-black px-5 py-[30px] xl:px-8 xxl:px-[70px]">
                <div className="h-auto w-10">
                  <img src="assets/img/icons/icon-buttery-white-phone.svg" alt="icon-buttery-white-phone" width="30" height="30" className="h-auto w-10" />
                </div>
                <div className="flex-1">
                  <span className="mb-3 block text-xl font-bold text-colorButteryWhite xl:text-2xl">Call us</span>
                  <div className="flex flex-col text-lg leading-[1.42] lg:text-[21px]">
                    <a href="tel:+0123456789" className="text-colorButteryWhite hover:text-colorLightLime">+012-345-6789</a>
                    <a href="tel:+0123456789" className="text-colorButteryWhite hover:text-colorLightLime">+012-345-6789</a>
                  </div>
                </div>
              </li>
              {/* <!-- Contact Info Item --> */}
              {/* <!-- Contact Info Item --> */}
              <li className="jos flex gap-x-6 rounded-[10px] bg-black px-5 py-[30px] xl:px-8 xxl:px-[70px]">
                <div className="h-auto w-10">
                  <img src="assets/img/icons/icon-buttery-white-mail.svg" alt="icon-buttery-white-mail" width="40" height="40" className="h-auto w-10" />
                </div>
                <div className="flex-1">
                  <span className="mb-3 block text-xl font-bold text-colorButteryWhite xl:text-2xl">Email us</span>
                  <div className="flex flex-col text-lg leading-[1.42] lg:text-[21px]">
                    <a href="mailto:" className="text-colorButteryWhite hover:text-colorLightLime">example@gmail.com</a>
                    <a href="mailto:" className="text-colorButteryWhite hover:text-colorLightLime">example@gmail.com</a>
                  </div>
                </div>
              </li>
              {/* <!-- Contact Info Item --> */}
              {/* <!-- Contact Info Item --> */}
              <li className="jos flex gap-x-6 rounded-[10px] bg-black px-5 py-[30px] xl:px-8 xxl:px-[70px]">
                <div className="h-auto w-10">
                  <img src="assets/img/icons/icon-buttery-white-location-marker.svg" alt="icon-buttery-white-location-marker" width="40" height="40" className="h-auto w-10" />
                </div>
                <div className="flex-1">
                  <span className="mb-3 block text-xl font-bold text-colorButteryWhite xl:text-2xl">Office address</span>
                  <div className="flex flex-col text-lg leading-[1.42] lg:text-[21px]">
                    <address className="not-italic text-colorButteryWhite">
                      4132 Thornridge City, New York.
                    </address>
                  </div>
                </div>
              </li>
              {/* <!-- Contact Info Item --> */}
            </ul>
            {/* <!-- Contact Info List --> */}

            {/* <!-- Location Map Block --> */}
            <div className="jos mt-10 md:mt-[60px] lg:mt-20">
              <div className="h-96 w-full overflow-hidden rounded-[20px] border-2 border-black lg:h-[600px] lg:rounded-[30px] lg:border-[5px]">
                <iframe className="h-full w-full" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
              </div>
            </div>
            {/* <!-- Location Map Block --> */}
          </div>
          {/* <!-- Section Container --> */}
        </div>
        {/* <!-- Section Space --> */}
      </section>
      {/* <!-- ...::: Contact Info Section End :::... --> */}

      {/* <!-- Horizontal Line --> */}
      <div className="horizontal-line bg-[#e6e6e6]"></div>
    </>
  )
}
