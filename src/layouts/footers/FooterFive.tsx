
import { Link } from "react-router-dom"
 

export default function FooterFive() {
  return (
    <footer className="section-footer">
      {/* <!-- Footer Center --> */}
      <div className="section-space">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Footer Center Area --> */}
          <div className="flex flex-wrap justify-between gap-y-10 text-[#0C0C0C]">
            {/* <!-- Footer Widget - About --> */}
            <div className="max-w-full lg:max-w-[410px]">
              <Link to="/" className="h-auto max-w-full">
                <img src="assets/img/logo-black.png" alt="logo-white" width="121" height="24" />
              </Link>
              <p className="mt-[30px] text-lg leading-[1.43] lg:text-[21px]">
                We are a branding agency that digitally works to help
                companies grow. We have a successful track record of working
                with various organizations.
              </p>
              {/* <!-- Social Link Item --> */}
              <div className="flex justify-center gap-4 pt-[30px] lg:justify-normal">
                {/* <!-- Social Link Item --> */}
                <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" className="group flex h-[35px] w-[35px] items-center justify-center rounded-[50%] border border-[#EBDECE] bg-[#EBDECE] hover:border-[#073D30] hover:bg-[#073D30]">
                  <img src="assets/img/icons/icon-logo-black-twitter.svg" alt="icon-logo-black-twitter" width="19" height="16" className="opacity-100 transition-all duration-300 group-hover:opacity-0" />
                  <img src="assets/img/icons/icon-logo-yellow-twitter.svg" alt="icon-logo-black-twitter" width="19" height="16" className="absolute opacity-0 transition-all duration-300 group-hover:opacity-100" />
                </a>
                {/* <!-- Social Link Item --> */}
                {/* <!-- Social Link Item --> */}
                <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group flex h-[35px] w-[35px] items-center justify-center rounded-[50%] border border-[#EBDECE] bg-[#EBDECE] hover:border-[#073D30] hover:bg-[#073D30]">
                  <img src="assets/img/icons/icon-logo-black-facebook.svg" alt="icon-logo-black-facebook" width="10" height="16" className="opacity-100 transition-all duration-300 group-hover:opacity-0" />
                  <img src="assets/img/icons/icon-logo-yellow-facebook.svg" alt="icon-logo-black-facebook" width="10" height="16" className="absolute opacity-0 transition-all duration-300 group-hover:opacity-100" />
                </a>
                {/* <!-- Social Link Item --> */}
                {/* <!-- Social Link Item --> */}
                <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group flex h-[35px] w-[35px] items-center justify-center rounded-[50%] border border-[#EBDECE] bg-[#EBDECE] hover:border-[#073D30] hover:bg-[#073D30]">
                  <img src="assets/img/icons/icon-logo-black-instagram.svg" alt="icon-logo-black-instagram" width="17" height="17" className="opacity-100 transition-all duration-300 group-hover:opacity-0" />
                  <img src="assets/img/icons/icon-logo-yellow-instagram.svg" alt="icon-logo-yellow-instagram" width="17" height="17" className="absolute opacity-0 transition-all duration-300 group-hover:opacity-100" />
                </a>
                {/* <!-- Social Link Item --> */}
                {/* <!-- Social Link Item --> */}
                <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex h-[35px] w-[35px] items-center justify-center rounded-[50%] border border-[#EBDECE] bg-[#EBDECE] hover:border-[#073D30] hover:bg-[#073D30]">
                  <img src="assets/img/icons/icon-logo-black-linkedin.svg" alt="icon-logo-black-linkedin" width="17" height="16" className="opacity-100 transition-all duration-300 group-hover:opacity-0" />
                  <img src="assets/img/icons/icon-logo-yellow-linkedin.svg" alt="icon-yellow-linkedin" width="17" height="16" className="absolute opacity-0 transition-all duration-300 group-hover:opacity-100" />
                </a>
                {/* <!-- Social Link Item --> */}
              </div>
              {/* <!-- Social Link Item --> */}
            </div>
            {/* <!-- Footer Widget - About --> */}

            {/* <!-- Footer Widget - Nav --> */}
            <div>
              {/* <!-- Footer Widget Title --> */}
              <span className="mb-[30px] block text-lg font-semibold leading-[1.43] text-[#221F1A] lg:text-[21px]">Special Links</span>
              {/* <!-- Footer Widget Title --> */}

              <div className="flex flex-col gap-y-4 text-lg leading-[1.43] lg:text-[21px]">
                <Link to="/about" className="hover:text-[#073D30]">About us</Link>
                <Link to="/service" className="hover:text-[#073D30]">Our services</Link>
                <Link to="/portfolio-1" className="hover:text-[#073D30]">Portfolio</Link>
                <Link to="/blog-1" className="hover:text-[#073D30]">Blogs</Link>
                <Link to="/team" className="hover:text-[#073D30]">Premium member</Link>
              </div>
            </div>
            {/* <!-- Footer Widget - Nav --> */}

            {/* <!-- Footer Widget - Nav --> */}
            <div>
              {/* <!-- Footer Widget Title --> */}
              <span className="mb-[30px] block text-lg font-semibold leading-[1.43] text-[#221F1A] lg:text-[21px]">Utility pages</span>
              {/* <!-- Footer Widget Title --> */}

              <div className="flex flex-col gap-y-4 text-lg leading-[1.43] lg:text-[21px]">
                <Link to="/404-error" className="hover:text-[#073D30]">404 Page</Link>
                <Link to="/coming-soon" className="hover:text-[#073D30]">Coming Soon</Link>
                <Link to="/log-in" className="hover:text-[#073D30]">Sign In</Link>
                <Link to="/sign-up" className="hover:text-[#073D30]">Sign Up</Link>
                <Link to="/reset-password" className="hover:text-[#073D30]">Reset Password</Link>
              </div>
            </div>
            {/* <!-- Footer Widget - Nav --> */}

            {/* <!-- Footer Widget - Newsletter --> */}
            <div className="max-w-[307px]">
              {/* <!-- Footer Widget Title --> */}
              <span className="mb-[30px] block text-lg font-semibold leading-[1.43] text-[#221F1A] lg:text-[21px]">Contact us</span>
              {/* <!-- Footer Widget Title --> */}

              <div className="flex flex-col gap-y-4 text-lg leading-[1.43] lg:text-[21px]">
                <a href="tel:+0882346849" className="flex items-center gap-3 hover:text-[#073D30]">
                  <img src="assets/img/icons/icon-green-phone.svg" alt="icon-green-phone" width="24" height="24" />
                  <span className="flex-1"> +088-234-6849 </span>
                </a>
                <a href="mail:example@gmail.com" className="flex items-center gap-3 hover:text-[#073D30]">
                  <img src="assets/img/icons/icon-green-mail.svg" alt="icon-green-mail" width="20" height="16" />
                  <span className="flex-1">example@gmail.com </span>
                </a>
                <address className="flex items-center gap-3 not-italic">
                  <img src="assets/img/icons/icon-green-location-marker.svg" alt="icon-green-location-marker" width="24" height="24" />
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
      <div className="horizontal-line bg-[#E6E6E6]"></div>
      {/* <!-- Horizontal Line --> */}

      {/* <!-- Footer Bottom --> */}
      <div className="py-[35px] text-center text-[#666666]">
        {/* <!-- Copyright Text --> */}
        <p>© Copyright {new Date().getFullYear()}, All Rights Reserved by Mthemeus</p>
        {/* <!-- Copyright Text --> */}
      </div>
      {/* <!-- Footer Bottom --> */}
    </footer>
  )
}
