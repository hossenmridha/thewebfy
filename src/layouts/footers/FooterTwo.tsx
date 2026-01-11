
import { Link } from "react-router-dom"
 

export default function FooterTwo() {
  return (
    <>
      <footer className="section-footer">
        <div className="relative z-10">
          {/* <!-- Footer Top --> */}
          <div className="section-space">
            {/* <!-- Section Container --> */}
            <div className="container">
              {/* <!-- Footer Top Area --> */}
              <div className="flex flex-wrap justify-between gap-y-10">
                {/* <!-- Footer Widget - About --> */}
                <div className="max-w-full lg:max-w-[410px]">
                  <Link to="/" className="h-auto max-w-full">
                    <img src="assets/img/logo-black.png" alt="logo-black" width="121" height="24" />
                  </Link>
                  <p className="mt-[30px] text-lg leading-[1.43] text-colorGondola lg:text-[21px]">
                    We are a branding agency that digitally works to help
                    companies grow. We have a successful track record of working
                    with various organizations.
                  </p>
                </div>
                {/* <!-- Footer Widget - About --> */}

                {/* <!-- Footer Widget - Nav --> */}
                <div>
                  {/* <!-- Footer Widget Title --> */}
                  <span className="mb-[30px] block text-lg font-semibold leading-[1.43] lg:text-[21px]">Special Links</span>
                  {/* <!-- Footer Widget Title --> */}

                  <div className="flex flex-col gap-y-4 text-lg leading-[1.43] text-[#2c2c2c] lg:text-[21px]">
                    <Link to="/about" className="hover:text-colorRedOrange">About us</Link>
                    <Link to="/service" className="hover:text-colorRedOrange">Our services</Link>
                    <Link to="/portfolio-1" className="hover:text-colorRedOrange">Portfolio</Link>
                    <Link to="/blog-1" className="hover:text-colorRedOrange">Blogs</Link>
                    <Link to="/team" className="hover:text-colorRedOrange">Premium member</Link>
                  </div>
                </div>
                {/* <!-- Footer Widget - Nav --> */}

                {/* <!-- Footer Widget - Nav --> */}
                <div>
                  {/* <!-- Footer Widget Title --> */}
                  <span className="mb-[30px] block text-lg font-semibold leading-[1.43] lg:text-[21px]">Utility pages</span>
                  {/* <!-- Footer Widget Title --> */}

                  <div className="flex flex-col gap-y-4 text-lg leading-[1.43] text-[#2c2c2c] lg:text-[21px]">
                    <Link to="/404-error" className="hover:text-colorRedOrange">404 Page</Link>
                    <Link to="/coming-soon" className="hover:text-colorRedOrange">Coming Soon</Link>
                    <Link to="/log-in" className="hover:text-colorRedOrange">Sign In</Link>
                    <Link to="/sign-up" className="hover:text-colorRedOrange">Sign Up</Link>
                    <Link to="/reset-password" className="hover:text-colorRedOrange">Reset Password</Link>
                  </div>
                </div>
                {/* <!-- Footer Widget - Nav --> */}

                {/* <!-- Footer Widget - Newsletter --> */}
                <div className="max-w-[307px]">
                  {/* <!-- Footer Widget Title --> */}
                  <span className="mb-[30px] block text-lg font-semibold leading-[1.43] lg:text-[21px]">Subscribe to our newsletter</span>
                  {/* <!-- Footer Widget Title --> */}

                  {/* <!-- Newsletter Form --> */}
                  <form action="#" method="post" className="">
                    <input type="email" name="newsletter-email" id="newsletter-email" placeholder="Email Address" className="mb-3 w-full rounded-[3px] border-2 border-[#999999] bg-colorIvory px-6 py-3 text-base font-bold text-colorGondola placeholder:text-colorGondola focus:border-colorRedOrange" required />
                    <button type="submit" className="btn-orange py-3">
                      Subscribe
                    </button>
                  </form>
                  {/* <!-- Newsletter Form --> */}
                </div>
                {/* <!-- Footer Widget - Newsletter --> */}
              </div>
              {/* <!-- Footer Top Area --> */}
            </div>
            {/* <!-- Section Container --> */}
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Horizontal Line --> */}
          <div className="horizontal-line bg-[#E6E6E6]"></div>
          {/* <!-- Horizontal Line --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="py-[35px]">
            {/* <!-- Section Container --> */}
            <div className="container">
              <div className="flex flex-col-reverse flex-wrap justify-center gap-x-[30px] gap-y-4 lg:flex-row lg:justify-between">
                {/* <!-- Copyright Text --> */}
                <div className="text-center text-colorGondola lg:text-start">
                  &copy; Copyright {new Date().getFullYear()}, All Rights Reserved by Mthemeus
                </div>
                {/* <!-- Copyright Text --> */}

                {/* <!-- Social Link Item --> */}
                <div className="flex justify-center gap-3 lg:justify-normal">
                  {/* <!-- Social Link Item --> */}
                  <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" className="group flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-[#F6F5EF]">
                    <img src="assets/img/icons/icon-logo-black-twitter.svg" alt="icon-black-twitter" width="19" height="16" className="opacity-100 transition-all duration-300 group-hover:opacity-0" />
                    <img src="assets/img/icons/icon-orange-twitter.svg" alt="icon-orange-twitter" width="19" height="16" className="absolute opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </a>
                  {/* <!-- Social Link Item --> */}
                  {/* <!-- Social Link Item --> */}
                  <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-[#F6F5EF]">
                    <img src="assets/img/icons/icon-black-facebook.svg" alt="icon-black-facebook" width="13" height="24" className="opacity-100 transition-all duration-300 group-hover:opacity-0" />
                    <img src="assets/img/icons/icon-orange-facebook.svg" alt="icon-orange-facebook" width="13" height="24" className="absolute opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </a>
                  {/* <!-- Social Link Item --> */}
                  {/* <!-- Social Link Item --> */}
                  <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-[#F6F5EF]">
                    <img src="assets/img/icons/icon-black-instagram.svg" alt="icon-black-instagram" width="26" height="26" className="opacity-100 transition-all duration-300 group-hover:opacity-0" />
                    <img src="assets/img/icons/icon-orange-instagram.svg" alt="icon-orange-instagram" width="26" height="26" className="absolute opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </a>
                  {/* <!-- Social Link Item --> */}
                  {/* <!-- Social Link Item --> */}
                  <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-[#F6F5EF]">
                    <img src="assets/img/icons/icon-black-linkedin.svg" alt="icon-black-linkedin" width="26" height="24" className="opacity-100 transition-all duration-300 group-hover:opacity-0" />
                    <img src="assets/img/icons/icon-orange-linkedin.svg" alt="icon-orange-linkedin" width="26" height="24" className="absolute opacity-0 transition-all duration-300 group-hover:opacity-100" />
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
            <img src="assets/img/images/th-2/footer-bg-aximo.svg" alt="footer-bg-aximo" width="1920" height="490" />
          </div>
          {/* <!-- Background Shadow Image --> */}
        </div>
      </footer>
    </>
  )
}
