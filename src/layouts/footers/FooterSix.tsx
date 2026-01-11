
import { Link } from "react-router-dom"
 

export default function FooterSix() {
  return (
    <footer className="section-footer">
      <div className="relative z-10 bg-[#2C2C2C]">
        {/* <!-- Footer Top --> */}
        <div className="section-space">
          {/* <!-- Section Container --> */}
          <div className="container">
            <div>
              {/* <!-- Section Block --> */}
              <div className="mx-auto mb-10 max-w-3xl md:mb-[60px] lg:mb-20 xl:max-w-[910px]">
                <h2 className="text-center font-playfairDisplay text-4xl font-bold !leading-[1.11] -tracking-[0.5px] text-[#F3EDE8] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85px]">
                  Want to decorate your dream space with us?
                </h2>
              </div>
              {/* <!-- Section Block --> */}

              <div className="flex flex-wrap items-center justify-center gap-6">
                <a href="mailto:mthemeus@gmail.com" className="flex rounded-[50px] border-2 border-[#F3EDE8] bg-[#2C2C2C] px-8 py-4 text-center text-lg font-bold text-[#F3EDE8] shadow-[0_4px_0_0] shadow-[#F3EDE8] transition-all duration-300 hover:bg-[#02854C] hover:shadow-none lg:py-6 lg:text-2xl xxl:px-14">mthemeus@gmail.com</a>
                <a href="tel:+088234684900" className="flex rounded-[50px] border-2 border-[#F3EDE8] bg-[#2C2C2C] px-8 py-4 text-center text-lg font-bold text-[#F3EDE8] shadow-[0_4px_0_0] shadow-[#F3EDE8] transition-all duration-300 hover:bg-[#02854C] hover:shadow-none lg:py-6 lg:text-2xl xxl:px-14">+088-234-684900</a>
                <address className="flex rounded-[50px] border-2 border-[#F3EDE8] bg-[#2C2C2C] px-8 py-4 text-center text-lg font-bold not-italic text-[#F3EDE8] shadow-[0_4px_0_0] shadow-[#F3EDE8] transition-all duration-300 hover:bg-[#02854C] hover:shadow-none lg:py-6 lg:text-2xl xxl:px-14">
                  Haward Street,10203 USA
                </address>
              </div>
            </div>
          </div>
          {/* <!-- Section Container --> */}
        </div>
        {/* <!-- Footer Top --> */}

        {/* <!-- Horizontal Line --> */}
        <div className="horizontal-line bg-[#333333]"></div>
        {/* <!-- Horizontal Line --> */}

        {/* <!-- Footer Center --> */}
        <div className="section-space">
          {/* <!-- Section Container --> */}
          <div className="container">
            {/* <!-- Footer Center Area --> */}
            <div className="grid grid-cols-1 flex-wrap justify-between gap-10 text-[#F3EDE8] md:flex">
              {/* <!-- Footer Widget - About --> */}
              <div className="max-w-full lg:max-w-[410px]">
                <Link to="/" className="h-auto max-w-full">
                  <img src="assets/img/logo-buttery-white.svg" alt="logo-white" width="121" height="24" />
                </Link>
                <p className="mt-[30px] text-lg leading-[1.43] lg:text-[21px]">
                  We are a branding agency that digitally works to help
                  companies grow. We have a successful track record of working
                  with various organizations.
                </p>
                <p className="mt-6 text-lg leading-[1.43] lg:text-[21px]">
                  © Copyright {new Date().getFullYear()}, All Rights Reserved by Mthemeus
                </p>
              </div>
              {/* <!-- Footer Widget - About --> */}

              {/* <!-- Footer Widget - Nav --> */}
              <div>
                {/* <!-- Footer Widget Title --> */}
                <span className="mb-[30px] block text-lg font-semibold leading-[1.43] text-[#F3EDE8] lg:text-[21px]">Special Links</span>
                {/* <!-- Footer Widget Title --> */}

                <div className="flex flex-col gap-y-4 text-lg leading-[1.43] lg:text-[21px]">
                  <Link to="/about" className="underline-offset-2 hover:underline">About us</Link>
                  <Link to="/service" className="underline-offset-2 hover:underline">Our services</Link>
                  <Link to="/portfolio-1" className="underline-offset-2 hover:underline">Portfolio</Link>
                  <Link to="/blog-1" className="underline-offset-2 hover:underline">Blogs</Link>
                  <Link to="/team" className="underline-offset-2 hover:underline">Premium member</Link>
                </div>
              </div>
              {/* <!-- Footer Widget - Nav --> */}

              {/* <!-- Footer Widget - Nav --> */}
              <div>
                {/* <!-- Footer Widget Title --> */}
                <span className="mb-[30px] block text-lg font-semibold leading-[1.43] text-[#F3EDE8] lg:text-[21px]">Utility pages</span>
                {/* <!-- Footer Widget Title --> */}

                <div className="flex flex-col gap-y-4 text-lg leading-[1.43] lg:text-[21px]">
                  <Link to="/404-error" className="underline-offset-2 hover:underline">404 Page</Link>
                  <Link to="/coming-soon" className="underline-offset-2 hover:underline">Coming Soon</Link>
                  <Link to="/log-in" className="underline-offset-2 hover:underline">Sign In</Link>
                  <Link to="/sign-up" className="underline-offset-2 hover:underline">Sign Up</Link>
                  <Link to="/reset-password" className="underline-offset-2 hover:underline">Reset Password</Link>
                </div>
              </div>
              {/* <!-- Footer Widget - Nav --> */}

              {/* <!-- Footer Widget - Social --> */}
              <div>
                {/* <!-- Footer Widget Title --> */}
                <span className="mb-[30px] block text-lg font-semibold leading-[1.43] text-[#F3EDE8] lg:text-[21px]">Socials Links</span>
                {/* <!-- Footer Widget Title --> */}
                {/* <!-- Social Link Item --> */}
                <div className="flex flex-col gap-4">
                  {/* <!-- Social Link Item --> */}
                  <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" className="group flex gap-4 text-lg leading-[1.43] lg:text-[21px]">
                    <div className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#333333] transition-all duration-300 group-hover:bg-[#02854C]">
                      <img src="assets/img/icons/icon-logo-buttery-white-twitter.svg" alt="icon-logo-black-twitter" width="19" height="16" className="transition-all duration-300" />
                    </div>
                    Twitter
                  </a>
                  {/* <!-- Social Link Item --> */}
                  {/* <!-- Social Link Item --> */}
                  <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group flex gap-4 text-lg leading-[1.43] lg:text-[21px]">
                    <div className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#333333] transition-all duration-300 group-hover:bg-[#02854C]">
                      <img src="assets/img/icons/icon-logo-buttery-white-facebook.svg" alt="icon-logo-buttery-white-facebook" width="10" height="16" className="transition-all duration-300" />
                    </div>
                    Facebook
                  </a>
                  {/* <!-- Social Link Item --> */}
                  {/* <!-- Social Link Item --> */}
                  <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group flex gap-4 text-lg leading-[1.43] lg:text-[21px]">
                    <div className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#333333] transition-all duration-300 group-hover:bg-[#02854C]">
                      <img src="assets/img/icons/icon-logo-buttery-white-instagram.svg" alt="icon-logo-buttery-white-instagram" width="17" height="17" className="transition-all duration-300" />
                    </div>
                    Instagram
                  </a>
                  {/* <!-- Social Link Item --> */}
                  {/* <!-- Social Link Item --> */}
                  <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex gap-4 text-lg leading-[1.43] lg:text-[21px]">
                    <div className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#333333] transition-all duration-300 group-hover:bg-[#02854C]">
                      <img src="assets/img/icons/icon-logo-buttery-white-linkedin.svg" alt="icon-logo-buttery-white-linkedin" width="17" height="16" className="transition-all duration-300" />
                    </div>
                    Linkedin
                  </a>
                  {/* <!-- Social Link Item --> */}
                </div>
                {/* <!-- Social Link Item --> */}
              </div>
              {/* <!-- Footer Widget - Social --> */}
            </div>
            {/* <!-- Footer Center Area --> */}
          </div>
          {/* <!-- Section Container --> */}
        </div>
        {/* <!-- Footer Center --> */}

        {/* <!-- Background Element --> */}
        <div className="absolute right-20 top-28 -z-10 hidden animate-pulse lg:inline-block">
          <img src="assets/img/elemnts/shape-purple-star.svg" alt="shape-purple-star" />
        </div>
        {/* <!-- Background Element --> */}
      </div>
    </footer>
  )
}
