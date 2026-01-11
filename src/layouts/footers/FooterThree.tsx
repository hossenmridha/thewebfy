
import { Link } from "react-router-dom"
 

export default function FooterThree() {
  return (
    <>
      <footer className="section-footer">
        <div className="relative z-10">
          {/* <!-- Footer Top --> */}
          <div className="section-space">
            {/* <!-- Section Container --> */}
            <div className="container">
              {/* <!-- Footer Top Area --> */}
              <div className="flex justify-center">
                <img src="assets/img/images/th-3/footer-img.png" alt="footer-img" width="1296" height="258" className="max-w-full" />
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
              <div className="flex flex-col-reverse flex-wrap justify-center gap-x-[30px] gap-y-4 lg:flex-row xl:justify-between">
                {/* <!-- Copyright Text --> */}
                <div className="text-center text-black lg:text-start">
                  &copy; Copyright {new Date().getFullYear()}, All Rights Reserved by Mthemeus
                </div>
                {/* <!-- Copyright Text --> */}

                {/* <!-- Footer Nav --> */}
                <nav className="font-semibold text-black">
                  <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3 lg:gap-x-14 xl:justify-start">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/service">Services</Link>
                    </li>
                    <li>
                      <Link to="/portfolio-1">Projects</Link>
                    </li>
                    <li>
                      <Link to="#">Pages</Link>
                    </li>
                  </ul>
                </nav>
                {/* <!-- Footer Nav --> */}
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
