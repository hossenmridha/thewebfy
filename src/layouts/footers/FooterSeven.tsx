import { Link } from "react-router-dom";


export default function FooterSeven() {
  return (
    <footer className="section-footer">
      <div className="relative z-10 bg-[#F8FCDD]">
        {/* <!-- Footer Top --> */}
        <div className="section-space">
          {/* <!-- Section Container --> */}
          <div className="container">
            {/* <!-- Section Block --> */}
            <div className="flex flex-wrap items-center justify-between gap-10">
              <div className="max-w-[820px]">
                <h2 className="font-bricolageGrotesque text-5xl font-bold leading-[1.09] sm:text-6xl md:text-7xl lg:text-[90px]">
                  Let your brand rise
                  <span className="relative z-10">
                    to new heights
                    <img src="assets/img/elemnts/th-7-hero-highlight-mark.svg" alt="th-7-hero-highlight-mark" className="absolute bottom-0 -z-10 w-full" />
                  </span>
                </h2>
              </div>
              <Link to="/pricing" className="group inline-flex rounded border-2 border-[#4659FF] bg-[#4659FF] px-6 py-3 text-base font-bold text-white lg:px-8 lg:py-4 xl:px-[42px]">
                <div className="relative flex items-center justify-center overflow-hidden">
                  <span className="translate-y-0 transition-all duration-300 group-hover:-translate-y-full">Explore Our Plans</span>
                  <span className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0">Explore Our Plans</span>
                </div>
              </Link>
            </div>
            {/* <!-- Section Block --> */}
          </div>
          {/* <!-- Section Container --> */}
        </div>
        {/* <!-- Footer Top --> */}

        {/* <!-- Footer Center --> */}
        <div className="pb-10 md:pb-[60px] lg:pb-20 xl:pb-[100px]">
          {/* <!-- Section Container --> */}
          <div className="container">
            <ul className="flex flex-wrap justify-between gap-10">
              <li>
                <Link to="/">
                  <img src="assets/img/logo-black.png" alt="logo-black" />
                </Link>
              </li>
              <li className="max-w-[300px]">
                <span className="mb-2 font-bricolageGrotesque text-2xl font-bold">Our address:</span>
                <address className="text-xl not-italic">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </address>
              </li>
              <li className="max-w-[163px]">
                <span className="mb-2 font-bricolageGrotesque text-2xl font-bold">Give us a call:</span>
                <a href="tel:+123-456-7890" className="text-xl">(123) 456-7890</a>
                <a href="tel:+088-123-4567" className="text-xl">(088)-123-4567</a>
              </li>
              <li className="max-w-[211px]">
                <span className="mb-2 font-bricolageGrotesque text-2xl font-bold">Send us an email:
                </span>
                <a href="mailto:info@mthemeus.com">info@mthemeus.com</a>
              </li>
            </ul>
          </div>
          {/* <!-- Section Container --> */}
        </div>
        {/* <!-- Footer Center --> */}

        {/* <!-- Horizontal Line --> */}
        <div className="horizontal-line bg-[#0B1040]/10"></div>
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
                <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" className="group flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#0B1040]/10 hover:bg-[#4659FF]">
                  <img src="assets/img/icons/icon-logo-black-twitter.svg" alt="icon-black-twitter" width="27" height="22" className="h-4 w-auto opacity-100 transition-all duration-300 group-hover:opacity-0" />
                  <img src="assets/img/icons/icon-orange-twitter.svg" alt="icon-orange-twitter" width="27" height="22" className="absolute h-4 w-auto opacity-0 invert transition-all duration-300 group-hover:opacity-100" />
                </a>
                {/* <!-- Social Link Item --> */}
                {/* <!-- Social Link Item --> */}
                <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#0B1040]/10 hover:bg-[#4659FF]">
                  <img src="assets/img/icons/icon-black-facebook.svg" alt="icon-black-facebook" width="13" height="24" className="h-4 w-auto opacity-100 transition-all duration-300 group-hover:opacity-0" />
                  <img src="assets/img/icons/icon-orange-facebook.svg" alt="icon-orange-facebook" width="13" height="24" className="absolute h-4 w-auto opacity-0 invert transition-all duration-300 group-hover:opacity-100" />
                </a>
                {/* <!-- Social Link Item --> */}
                {/* <!-- Social Link Item --> */}
                <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#0B1040]/10 hover:bg-[#4659FF]">
                  <img src="assets/img/icons/icon-black-instagram.svg" alt="icon-black-instagram" width="26" height="26" className="h-4 w-auto opacity-100 transition-all duration-300 group-hover:opacity-0" />
                  <img src="assets/img/icons/icon-orange-instagram.svg" alt="icon-orange-instagram" width="26" height="26" className="absolute h-4 w-auto opacity-0 invert transition-all duration-300 group-hover:opacity-100" />
                </a>
                {/* <!-- Social Link Item --> */}
                {/* <!-- Social Link Item --> */}
                <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#0B1040]/10 hover:bg-[#4659FF]">
                  <img src="assets/img/icons/icon-black-linkedin.svg" alt="icon-black-linkedin" width="26" height="24" className="h-4 w-auto opacity-100 transition-all duration-300 group-hover:opacity-0" />
                  <img src="assets/img/icons/icon-orange-linkedin.svg" alt="icon-orange-linkedin" width="26" height="24" className="absolute h-4 w-auto opacity-0 invert transition-all duration-300 group-hover:opacity-100" />
                </a>
                {/* <!-- Social Link Item --> */}
              </div>
              {/* <!-- Social Link Item --> */}
            </div>
          </div>
          {/* <!-- Section Container --> */}
        </div>
        {/* <!-- Footer Bottom --> */}
      </div>
    </footer>
  )
}
