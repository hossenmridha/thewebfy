 
import { Link } from "react-router-dom"
 

export default function FooterOne() {
  return (
    <>
      <footer className="section-footer">
        <div className="bg-black">
          {/* <!-- Footer Top --> */}
          <div className="section-space">
            {/* <!-- Section Container --> */}
            <div className="container">
              {/* <!-- Footer Top Area --> */}
              <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-[1fr_minmax(0,0.8fr)] lg:gap-x-20 xl:gap-x-24 xxl:gap-x-[139px]">
                {/* <!-- Footer Left Block --> */}
                <div>
                  {/* <!-- Section Block --> */}
                  <div className="section-block text-colorButteryWhite">
                    <h2 className="mb-6">
                      Let's start a
                      <span>
                        <img src="assets/img/elemnts/shape-light-lime-5-arms-star.svg" alt="shape-light-lime-5-arms-star" width="74" height="70" className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]" />
                      </span>
                      project together
                    </h2>

                    <p className="section-para">
                      We work closely with our clients to understand their
                      objectives, target audience, and unique needs. We use our
                      creative skills to translate these requirements and
                      practical design solutions.
                    </p>
                  </div>
                  {/* <!-- Section Block --> */}

                  <div className="grid grid-cols-[1fr_auto] items-center">
                    <div>
                      {/* <!-- Footer Info --> */}
                      <ul className="mt-12 flex flex-col gap-y-3">
                        <li>
                          <span className="block font-syne text-[21px] font-bold leading-[1.42] text-colorLightLime">Give us a call:</span>
                          <a href="tel:+1234567890" className="text-[21px] leading-[1.42] text-colorButteryWhite">(123) 456-7890</a>
                        </li>
                        <li>
                          <span className="block font-syne text-[21px] font-bold leading-[1.42] text-colorLightLime">Send us an email:
                          </span>
                          <a href="mailto:yourmail@email.com" className="text-[21px] leading-[1.42] text-colorButteryWhite">yourmail@email.com</a>
                        </li>
                      </ul>
                      {/* <!-- Footer Info --> */}

                      {/* <!-- Social Link --> */}
                      <div className="mt-11 flex w-full gap-4">
                        <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                          <img src="assets/img/icons/icon-logo-buttery-white-twitter.svg" alt="icon-logo-buttery-white-twitter" width="19" height="16" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                          <img src="assets/img/icons/icon-logo-black-twitter.svg" alt="icon-logo-black-twitter" width="19" height="16" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                        </a>
                        <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                          <img src="assets/img/icons/icon-logo-buttery-white-facebook.svg" alt="icon-logo-buttery-white-facebook" width="10" height="17" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                          <img src="assets/img/icons/icon-logo-black-facebook.svg" alt="icon-logo-black-facebook" width="10" height="17" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                        </a>
                        <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                          <img src="assets/img/icons/icon-logo-buttery-white-instagram.svg" alt="icon-logo-buttery-white-instagram" width="17" height="18" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                          <img src="assets/img/icons/icon-logo-black-instagram.svg" alt="icon-logo-black-instagram" width="17" height="18" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                        </a>
                        <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                          <img src="assets/img/icons/icon-logo-buttery-white-linkedin.svg" alt="icon-logo-buttery-white-linkedin" width="17" height="18" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                          <img src="assets/img/icons/icon-logo-black-linkedin.svg" alt="icon-logo-black-linkedin" width="17" height="18" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                        </a>
                      </div>
                      {/* <!-- Social Link --> */}
                    </div>
                    <div className="hidden lg:inline-block">
                      <img src="assets/img/elemnts/element-light-lime-curve-arrow.svg" alt="element-light-lime-curve-arrow" width="284" height="153" className="h-auto max-w-52 lg:inline-block xl:max-w-full" />
                    </div>
                  </div>
                </div>
                {/* <!-- Footer Left Block --> */}

                {/* <!-- Footer Right Block --> */}
                <div>
                  <span className="display-heading display-heading-5 mb-[30px] block text-colorButteryWhite">Send us a message</span>
                  <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-y-6">
                    <input type="text" placeholder="Your name" className="w-full rounded-[50px] border border-[#cccccc] bg-transparent px-6 py-5 text-base font-bold leading-none text-white placeholder:text-[#cccccc]" required />
                    <input type="email" placeholder="Your email address" className="w-full rounded-[50px] border border-[#cccccc] bg-transparent px-6 py-5 text-base font-bold leading-none text-white placeholder:text-[#cccccc]" required />
                    <input type="tel" placeholder="Your phone number" className="w-full rounded-[50px] border border-[#cccccc] bg-transparent px-6 py-5 text-base font-bold leading-none text-white placeholder:text-[#cccccc]" required />
                    <textarea placeholder="Write your message here..." className="min-h-[150px] w-full rounded-[20px] border border-[#cccccc] bg-transparent px-6 py-5 text-base font-bold leading-none text-white placeholder:text-[#cccccc]" required></textarea>

                    <button type="submit" className="btn-primary relative justify-start pr-20 md:pr-[118px]">
                      Send message
                      <span className="absolute right-[5px] inline-flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-black"><img src="assets/img/icons/icon-buttery-white-arrow-right.svg" alt="icon-buttery-white-arrow-right" width="34" height="28" /></span>
                    </button>
                  </form>
                </div>
                {/* <!-- Footer Right Block --> */}
              </div>
              {/* <!-- Footer Top Area --> */}
            </div>
            {/* <!-- Section Container --> */}
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Horizontal Line --> */}
          <div className="horizontal-line bg-[#333333]"></div>
          {/* <!-- Horizontal Line --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="py-[35px]">
            {/* <!-- Section Container --> */}
            <div className="container">
              <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-4 lg:justify-between">
                <Link to="/">
                  <img src="assets/img/logo-buttery-white.svg" alt="logo-buttery-white" width="121" height="24" />
                </Link>

                {/* <!-- Copyright Text --> */}
                <div className="text-colorButteryWhite">
                  &copy; Copyright {new Date().getFullYear()}, All Rights Reserved by Mthemeus
                </div>
                {/* <!-- Copyright Text --> */}
              </div>
            </div>
            {/* <!-- Section Container --> */}
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  )
}
