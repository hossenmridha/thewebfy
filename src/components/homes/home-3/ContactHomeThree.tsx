 
 

export default function ContactHomeThree() {
  return (
    <>
      <section className="section-contact">
        <div className="relative z-10">
          {/* <!-- Section Background --> */}
          <div className="bg-black">
            {/* <!-- Section Space --> */}
            <div className="section-space">
              {/* <!-- Section Container --> */}
              <div className="container">
                {/* <!-- Contact Area --> */}
                <div className="grid grid-cols-1 items-center gap-x-[76px] gap-y-10 lg:grid-cols-[1fr_minmax(0,0.75fr)]">
                  {/* <!-- Contact Left Block --> */}
                  <div className="jos text-white" data-jos_animation="fade-right">
                    <div className="section-block">
                      <h2 className="mb-6 font-familjenGrotesk text-4xl font-bold leading-none -tracking-[1px] md:text-5xl lg:text-6xl xl:text-7xl xxl:text-[85px]">
                        Want to boost your business with our SEO expertise?
                      </h2>
                      <p className="section-para">
                        Experienced SEO experts proven strategies & innovative
                        techniques to increase your website's visibility,
                        drive organic traffic, and improve your digital
                        performance and grow your online reach.
                      </p>
                    </div>

                    {/* <!-- Contact Info --> */}
                    <div className="mt-[50px]">
                      <h4 className="font-familjenGrotesk leading-[1.2] -tracking-[0.5px]">
                        Contact us directly:
                      </h4>

                      {/* <!-- Contact Info List --> */}
                      <ul className="mt-[30px] flex flex-wrap gap-6 text-lg font-semibold leading-[1.43] text-white lg:text-[21px]">
                        {/* <!-- Content Info Item --> */}
                        <li className="flex items-center gap-x-3">
                          {/* <!-- Icon --> */}
                          <div className="flex h-10 w-10 items-center justify-center rounded-[50%] bg-[#FFE757]">
                            <img src="assets/img/icons/icon-black-phone.svg" alt="icon-black-phone" width="24" height="24" />
                          </div>
                          {/* <!-- Icon --> */}
                          {/* <!-- Text --> */}
                          <a href="tel:+0882346849" className="flex-1 hover:text-[#FFE757]">+088-234-6849</a>
                          {/* <!-- Text --> */}
                        </li>
                        {/* <!-- Content Info Item --> */}
                        {/* <!-- Content Info Item --> */}
                        <li className="flex items-center gap-x-3">
                          {/* <!-- Icon --> */}
                          <div className="flex h-10 w-10 items-center justify-center rounded-[50%] bg-[#FFE757]">
                            <img src="assets/img/icons/icon-black-mail.svg" alt="icon-black-mail.svg" width="28" height="28" />
                          </div>
                          {/* <!-- Icon --> */}
                          {/* <!-- Text --> */}
                          <a href="mailto:example@gmail.com" className="flex-1 hover:text-[#FFE757]">example@gmail.com</a>
                          {/* <!-- Text --> */}
                        </li>
                        {/* <!-- Content Info Item --> */}
                        {/* <!-- Content Info Item --> */}
                        <li className="flex items-center gap-x-3">
                          {/* <!-- Icon --> */}
                          <div className="flex h-10 w-10 items-center justify-center rounded-[50%] bg-[#FFE757]">
                            <img src="assets/img/icons/icon-black-location-marker.svg" alt="icon-black-location-marker.svg" width="24" height="24" />
                          </div>
                          {/* <!-- Icon --> */}
                          {/* <!-- Text --> */}
                          <address className="flex-1 not-italic">
                            Haward Street,10203 USA
                          </address>
                          {/* <!-- Text --> */}
                        </li>
                        {/* <!-- Content Info Item --> */}
                      </ul>
                      {/* <!-- Contact Info List --> */}
                    </div>
                    {/* <!-- Contact Info --> */}
                  </div>
                  {/* <!-- Contact Left Block --> */}

                  {/* <!-- Contact Right Block --> */}
                  <div className="jos rounded-xl bg-white p-10" data-jos_animation="fade-left">
                    <h4 className="mb-3 font-familjenGrotesk text-black">
                      Send us a message
                    </h4>
                    <p className="para-lg">
                      Fill out the form and our expert will get back to you
                      with a free analysis and proposal
                    </p>
                    <form onSubmit={e=> e.preventDefault()} className="mt-[30px]">
                      <input type="text" placeholder="Enter full name" className="w-full border-b border-[#CCCCCC] bg-[] py-[18px] text-base font-semibold text-black outline-none transition-all placeholder:text-[#333333] focus:border-black" required />
                      <input type="email" placeholder="Enter email address" className="w-full border-b border-[#CCCCCC] bg-[] py-[18px] text-base font-semibold text-black outline-none transition-all placeholder:text-[#333333] focus:border-black" required />
                      <textarea placeholder="Write us your questions" className="min-h-10 w-full border-b border-[#CCCCCC] bg-[] py-[18px] text-base font-semibold text-black outline-none transition-all placeholder:text-[#333333] focus:border-black" required></textarea>

                      <button type="submit" className="mt-10 flex w-full items-center justify-center rounded-[50px] bg-[#FFE757] px-11 py-4 text-base font-bold hover:bg-black hover:text-[#FFE757]">
                        Submit now
                      </button>
                    </form>
                  </div>
                  {/* <!-- Contact Right Block --> */}
                </div>
                {/* <!-- Contact Area --> */}
              </div>
              {/* <!-- Section Container --> */}
            </div>
            {/* <!-- Section Space --> */}
          </div>
          {/* <!-- Section Background --> */}
          {/* <!-- Background Shape --> */}
          <div className="jos absolute -bottom-40 -right-28 z-10" data-jos_animation="fade-left">
            <img src="assets/img/elemnts/shape-purple-blue-polygon-star.svg" alt="shape-purple-blue-polygon-star" width="420" height="420" />
          </div>
          {/* <!-- Background Shape --> */}
        </div>
      </section>
    </>
  )
}
