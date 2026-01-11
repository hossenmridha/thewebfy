 

import { Link } from "react-router-dom";

export default function FooterFour() {
  return (
    <>
      <footer className="section-footer">
        <div className="bg-[#191931]">
          {/* <!-- Footer Top --> */}
          <div className="section-space-top">
            {/* <!-- Footer Top Area --> */}
            <div className="mx-5 rounded-[20px] bg-[#FFF7EA]/5 py-10 md:py-[60px] lg:py-20 xxl:mx-[50px] xxxl:px-[262px]">
              {/* <!-- Container --> */}
              <div className="container">
                <form onSubmit={e => e.preventDefault()} className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto]">
                  <input type="email" placeholder="Enter your email" className="font-base w-full rounded-[50px] border-2 border-[#FFF7EA] bg-[#FFF7EA]/5 px-6 py-3.5 font-bold text-white outline-none placeholder:text-white" required />
                  <button type="submit" className="rounded-[50px] border-2 border-[#0000FF] bg-[#0000FF] px-5 py-3 text-center text-base font-bold text-white hover:bg-white hover:text-[#0000FF] lg:px-10 lg:py-4">
                    Subscribe now
                  </button>
                </form>
              </div>
              {/* <!-- Container --> */}
            </div>
            {/* <!-- Footer Top Area --> */}
            {/* <!-- Section Container --> */}
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Center --> */}
          <div className="py-20 lg:py-[100px]">
            {/* <!-- Section Container --> */}
            <div className="container">
              {/* <!-- Footer Center Area --> */}
              <div className="flex flex-wrap justify-between gap-y-10 text-[#FFF7EA]">
                {/* <!-- Footer Widget - About --> */}
                <div className="max-w-full lg:max-w-[410px]">
                  <Link to="/" className="h-auto max-w-full">
                    <img src="assets/img/logo-white.png" alt="logo-white" width="121" height="24" />
                  </Link>
                  <p className="mt-[30px] text-lg leading-[1.43] text-[#FFF7EA] lg:text-[21px]">
                    We are a branding agency that digitally works to help
                    companies grow. We have a successful track record of working
                    with various organizations.
                  </p>
                  {/* <!-- Social Link Item --> */}
                  <div className="flex justify-center gap-4 pt-[30px] lg:justify-normal">
                    {/* <!-- Social Link Item --> */}
                    <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" className="group flex h-[35px] w-[35px] items-center justify-center rounded-[50%] border border-white hover:border-[#FF8064] hover:bg-[#FF8064]">
                      <img src="assets/img/icons/icon-logo-buttery-white-twitter.svg" alt="icon-logo-buttery-white-twitter" width="19" height="16" />
                    </a>
                    {/* <!-- Social Link Item --> */}
                    {/* <!-- Social Link Item --> */}
                    <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group flex h-[35px] w-[35px] items-center justify-center rounded-[50%] border border-white hover:border-[#FF8064] hover:bg-[#FF8064]">
                      <img src="assets/img/icons/icon-logo-buttery-white-facebook.svg" alt="icon-logo-buttery-white-facebook" width="10" height="16" />
                    </a>
                    {/* <!-- Social Link Item --> */}
                    {/* <!-- Social Link Item --> */}
                    <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group flex h-[35px] w-[35px] items-center justify-center rounded-[50%] border border-white hover:border-[#FF8064] hover:bg-[#FF8064]">
                      <img src="assets/img/icons/icon-logo-buttery-white-instagram.svg" alt="icon-logo-buttery-white-instagram" width="17" height="17" />
                    </a>
                    {/* <!-- Social Link Item --> */}
                    {/* <!-- Social Link Item --> */}
                    <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex h-[35px] w-[35px] items-center justify-center rounded-[50%] border border-white hover:border-[#FF8064] hover:bg-[#FF8064]">
                      <img src="assets/img/icons/icon-logo-buttery-white-linkedin.svg" alt="icon-logo-buttery-white-linkedin" width="17" height="16" />
                    </a>
                    {/* <!-- Social Link Item --> */}
                  </div>
                  {/* <!-- Social Link Item --> */}
                </div>
                {/* <!-- Footer Widget - About --> */}

                {/* <!-- Footer Widget - Nav --> */}
                <div>
                  {/* <!-- Footer Widget Title --> */}
                  <span className="mb-[30px] block text-lg font-semibold leading-[1.43] lg:text-[21px]">Special Links</span>
                  {/* <!-- Footer Widget Title --> */}

                  <div className="flex flex-col gap-y-4 text-lg leading-[1.43] lg:text-[21px]">
                    <Link to="/about" className="hover:text-[#FF8064]">About us</Link>
                    <Link to="/service" className="hover:text-[#FF8064]">Our services</Link>
                    <Link to="/portfolio-1" className="hover:text-[#FF8064]">Portfolio</Link>
                    <Link to="/blog-1" className="hover:text-[#FF8064]">Blogs</Link>
                    <Link to="/team" className="hover:text-[#FF8064]">Premium member</Link>
                  </div>
                </div>
                {/* <!-- Footer Widget - Nav --> */}

                {/* <!-- Footer Widget - Nav --> */}
                <div>
                  {/* <!-- Footer Widget Title --> */}
                  <span className="mb-[30px] block text-lg font-semibold leading-[1.43] text-[#FFF7EA] lg:text-[21px]">Utility pages</span>
                  {/* <!-- Footer Widget Title --> */}

                  <div className="flex flex-col gap-y-4 text-lg leading-[1.43] lg:text-[21px]">
                    <Link to="/404-error" className="hover:text-[#FF8064]">404 Page</Link>
                    <Link to="/coming-soon" className="hover:text-[#FF8064]">Coming Soon</Link>
                    <Link to="/log-in" className="hover:text-[#FF8064]">Sign In</Link>
                    <Link to="/sign-up" className="hover:text-[#FF8064]">Sign Up</Link>
                    <Link to="/reset-password" className="hover:text-[#FF8064]">Reset Password</Link>
                  </div>
                </div>
                {/* <!-- Footer Widget - Nav --> */}

                {/* <!-- Footer Widget - Newsletter --> */}
                <div className="max-w-[307px]">
                  {/* <!-- Footer Widget Title --> */}
                  <span className="mb-[30px] block text-lg font-semibold leading-[1.43] text-[#FFF7EA] lg:text-[21px]">Contact us</span>
                  {/* <!-- Footer Widget Title --> */}

                  <div className="flex flex-col gap-y-4 text-lg leading-[1.43] lg:text-[21px]">
                    <a href="tel:+0882346849" className="flex items-center gap-3 hover:text-[#FF8064]">
                      <img src="assets/img/icons/icon-salmon-phone.svg" alt="icon-salmon-phone" width="24" height="24" />
                      <span className="flex-1"> +088-234-6849 </span>
                    </a>
                    <a href="mail:example@gmail.com" className="flex items-center gap-3 hover:text-[#FF8064]">
                      <img src="assets/img/icons/icon-salmon-mail.svg" alt="icon-salmon-mail" width="20" height="16" />
                      <span className="flex-1">example@gmail.com </span>
                    </a>
                    <address className="flex items-center gap-3 not-italic">
                      <img src="assets/img/icons/icon-salmon-location-marker.svg" alt="icon-salmon-location-marker" width="24" height="24" />
                      <span className="flex-1">Howard Street, 13125 USA</span>
                    </address>
                  </div>
                </div>
                {/* <!-- Footer Widget - Newsletter --> */}
              </div>
              {/* <!-- Footer Center Area --> */}
            </div>
            {/* <!-- Section Container --> */}
          </div>
          {/* <!-- Footer Center --> */}

          {/* <!-- Horizontal Line --> */}
          <div className="horizontal-line bg-[#FFF7EA]/10"></div>
          {/* <!-- Horizontal Line --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="py-[35px] text-center text-[#FFF7EA]">
            {/* <!-- Copyright Text --> */}
            <p>© Copyright {new Date().getFullYear()}, All Rights Reserved by Mthemeus</p>
            {/* <!-- Copyright Text --> */}
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  )
}
