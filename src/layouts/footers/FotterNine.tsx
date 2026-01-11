import { Link } from "react-router-dom";



export default function FotterNine() {
  return (
    <footer className="section-footer">
      <div className="relative z-10 bg-[url(../img/elemnts/curve-top-light-blue-pattern-2.svg)] bg-cover bg-top bg-no-repeat">
        {/* <!-- Footer Top --> */}
        <div className="section-space">
          {/* <!-- Section Container --> */}
          <div className="container">
            {/* <!-- Footer Area --> */}
            <div className="text-[#FEF6E0]">
              <div className="mx-auto mb-10 max-w-md text-center md:mb-[60px] md:max-w-xl lg:mb-20 lg:max-w-4xl">
                <h2 className="font-epilogue text-4xl leading-[1.05] md:text-5xl lg:text-6xl xl:text-[80px]">
                  Ready to grow your online presence?
                </h2>
                <p className="para-lg mb-10 mt-6">
                  Are you ready to take your online presence to the next
                  level? We can help you expand your reach & connect with more
                  people than ever before.
                </p>
                <Link to="/contact" className="group inline-flex rounded border-2 border-[#FF5317] bg-[#FF5317] px-6 py-4 text-base font-semibold text-[#FEF6E0]">
                  <div className="relative flex items-center justify-center overflow-hidden">
                    <span className="inline-flex translate-y-0 gap-x-[10px] transition-all duration-300 group-hover:-translate-y-full">Contact us directly
                      <img src="assets/img/icons/cheveron-right.svg" alt="icon-cheveron-right" />
                    </span>
                    <span className="absolute inline-flex translate-y-full gap-x-[10px] transition-all duration-300 group-hover:translate-y-0">Contact us directly
                      <img src="assets/img/icons/cheveron-right.svg" alt="icon-cheveron-right" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            {/* <!-- Footer Area --> */}
          </div>
          {/* <!-- Section Container --> */}
        </div>
        {/* <!-- Footer Top --> */}

        {/* <!-- Footer Center --> */}
        <div className="section-space-bottom">
          {/* <!-- Section Container --> */}
          <div className="container">
            {/* <!-- Footer Center Area --> */}
            <div className="flex flex-wrap justify-between gap-y-10">
              {/* <!-- Footer Widget - About --> */}
              <div className="max-w-full lg:max-w-[410px]">
                <Link to="/" className="h-auto max-w-full">
                  <img src="assets/img/logo-buttery-white.svg" alt="logo-buttery-white" width="121" height="24" />
                </Link>
                <p className="mt-[30px] text-lg leading-[1.43] text-[#FEF6E0] lg:text-[21px]">
                  We are a branding agency that digitally works to help
                  companies grow. We have a successful track record of working
                  with various organizations.
                </p>
              </div>
              {/* <!-- Footer Widget - About --> */}

              {/* <!-- Footer Widget - Nav --> */}
              <div className="text-[#FEF6E0]">
                {/* <!-- Footer Widget Title --> */}
                <span className="mb-[30px] block text-lg font-semibold leading-[1.43] lg:text-[21px]">Special Links</span>
                {/* <!-- Footer Widget Title --> */}

                <div className="flex flex-col gap-y-4 text-lg leading-[1.43] lg:text-[21px]">
                  <Link to="/about" className="hover:text-colorRedOrange">About us</Link>
                  <Link to="/service" className="hover:text-colorRedOrange">Our services</Link>
                  <Link to="/portfolio-1" className="hover:text-colorRedOrange">Portfolio</Link>
                  <Link to="/blog-1" className="hover:text-colorRedOrange">Blogs</Link>
                  <Link to="/team" className="hover:text-colorRedOrange">Premium member</Link>
                </div>
              </div>
              {/* <!-- Footer Widget - Nav --> */}

              {/* <!-- Footer Widget - Nav --> */}
              <div className="text-[#FEF6E0]">
                {/* <!-- Footer Widget Title --> */}
                <span className="mb-[30px] block text-lg font-semibold leading-[1.43] lg:text-[21px]">Utility pages</span>
                {/* <!-- Footer Widget Title --> */}

                <div className="flex flex-col gap-y-4 text-lg leading-[1.43] lg:text-[21px]">
                  <Link to="/404-error" className="hover:text-colorRedOrange">404 Page</Link>
                  <Link to="/coming-soon" className="hover:text-colorRedOrange">Coming Soon</Link>
                  <Link to="/log-in" className="hover:text-colorRedOrange">Sign In</Link>
                  <Link to="/sign-up" className="hover:text-colorRedOrange">Sign Up</Link>
                  <Link to="/reset-password" className="hover:text-colorRedOrange">Reset Password</Link>
                </div>
              </div>
              {/* <!-- Footer Widget - Nav --> */}

              {/* <!-- Footer Widget - Newsletter --> */}
              <div className="max-w-[307px] text-[#FEF6E0]">
                {/* <!-- Footer Widget Title --> */}
                <span className="mb-[30px] block text-lg font-semibold leading-[1.43] lg:text-[21px]">Subscribe to our newsletter</span>
                {/* <!-- Footer Widget Title --> */}

                {/* <!-- Newsletter Form --> */}
                <form action="#" method="post">
                  <input type="email" name="newsletter-email" id="newsletter-email" placeholder="Email Address" className="mb-3 w-full rounded-[3px] border-2 border-[#FEF6E0] bg-[#3256D2] px-6 py-3 text-base font-bold text-[#FEF6E0] outline-none placeholder:text-[#FEF6E0]" required />
                  <button type="submit" className="group flex w-full justify-center rounded border-2 border-[#FF5317] bg-[#FF5317] px-6 py-3 text-base font-semibold text-[#FEF6E0]">
                    <span className="relative flex items-center justify-center overflow-hidden">
                      <span className="inline-flex translate-y-0 gap-x-[10px] transition-all duration-300 group-hover:-translate-y-full">Subscribe
                      </span>
                      <span className="absolute inline-flex translate-y-full gap-x-[10px] transition-all duration-300 group-hover:translate-y-0">Subscribe
                      </span>
                    </span>
                  </button>
                </form>
                {/* <!-- Newsletter Form --> */}
              </div>
              {/* <!-- Footer Widget - Newsletter --> */}
            </div>
            {/* <!-- Footer Center Area --> */}
          </div>
          {/* <!-- Section Container --> */}
        </div>
        {/* <!-- Footer Center --> */}

        {/* <!-- Horizontal Line --> */}
        <div className="horizontal-line bg-[#FCF9F0]/10"></div>
        {/* <!-- Horizontal Line --> */}

        {/* <!-- Footer Bottom --> */}
        <div className="py-[35px]">
          {/* <!-- Section Container --> */}
          <div className="container">
            <div className="flex flex-col-reverse flex-wrap justify-center gap-x-[30px] gap-y-4 lg:flex-row lg:justify-between">
              {/* <!-- Copyright Text --> */}
              <div className="text-center text-[#FEF6E0] lg:text-start">
                &copy; Copyright {new Date().getFullYear()}, All Rights Reserved by Mthemeus
              </div>
              {/* <!-- Copyright Text --> */}

              {/* <!-- Social Link Item --> */}
              <div className="flex justify-center gap-3 lg:justify-normal">
                {/* <!-- Social Link Item --> */}
                <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" className="group flex h-9 w-9 items-center justify-center rounded-[50%] bg-[#F6F5EF]/10 hover:bg-[#FF5317]">
                  <img src="assets/img/icons/icon-logo-buttery-white-twitter.svg" alt="icon-black-twitter" width="19" height="16" />
                </a>
                {/* <!-- Social Link Item --> */}
                {/* <!-- Social Link Item --> */}
                <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group flex h-9 w-9 items-center justify-center rounded-[50%] bg-[#F6F5EF]/10 hover:bg-[#FF5317]">
                  <img src="assets/img/icons/icon-logo-buttery-white-facebook.svg" alt="icon-black-facebook" width="10" height="17" />
                </a>
                {/* <!-- Social Link Item --> */}
                {/* <!-- Social Link Item --> */}
                <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group flex h-9 w-9 items-center justify-center rounded-[50%] bg-[#F6F5EF]/10 hover:bg-[#FF5317]">
                  <img src="assets/img/icons/icon-logo-buttery-white-instagram.svg" alt="icon-black-instagram" width="17" height="18" />
                </a>
                {/* <!-- Social Link Item --> */}
                {/* <!-- Social Link Item --> */}
                <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex h-9 w-9 items-center justify-center rounded-[50%] bg-[#F6F5EF]/10 hover:bg-[#FF5317]">
                  <img src="assets/img/icons/icon-logo-buttery-white-linkedin.svg" alt="icon-black-linkedin" width="18" height="17" />
                </a>
                {/* <!-- Social Link Item --> */}
              </div>
              {/* <!-- Social Link Item --> */}
            </div>
          </div>
          {/* <!-- Section Container --> */}
        </div>
        {/* <!-- Footer Bottom --> */}

        {/* <!-- Background Shadow Image --> */}
        <div className="absolute bottom-0 -z-10">
          <img src="assets/img/images/th-9/footer-bg-aximo.svg" alt="footer-bg-aximo" width="1920" height="490" />
        </div>
        {/* <!-- Background Shadow Image --> */}
      </div>
    </footer>
  )
}
