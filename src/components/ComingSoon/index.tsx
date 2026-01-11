 
import { Link } from "react-router-dom"
import Countdown from "../../common/Countdown"
import Wrapper from "../../layouts/Wrapper"
 

export default function ComingSoon() {
  return (
    <Wrapper>
    <div className="bg-colorIvory">
      <div className="page-wrapper flex flex-col justify-between">
        {/* <!-- ...::: Header Section Start :::... --> */}
        <header className="section-header site-header is-black is-black fixed top-0 z-30 w-full py-4">
          {/* <!-- Section Container --> */}
          <div className="container">
            {/* <!-- Header Area --> */}
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-x-6">
                {/* <!-- Header Logo --> */}
                <Link to="/" className="h-auto w-auto">
                  <img src="assets/img/logo-buttery-white.svg" alt="logo-buttery-white" width="121" height="24" />
                </Link>
                {/* <!-- Header Logo --> */}
              </div>
            </div>
            {/* <!-- Header Area --> */}
          </div>
          {/* <!-- Section Container --> */}
        </header>
        {/* <!-- ...::: Header Section End :::... --> */}

        {/* <!-- Main Wrapper Start --> */}
        <main className="main-wrapper">
          {/* <!-- ...::: Coming Soon Section Start :::... --> */}
          <section className="section-404-error">
            {/* <!-- Section Space --> */}
            <div className="section-space">
              {/* <!-- Section Container --> */}
              <div className="container">
                {/* <!-- Section Block --> */}
                <div className="section-block mx-auto mb-10 max-w-[650px] text-center xl:max-w-[870px]">
                  <h2 className="jos mb-6">
                    Exciting things are coming soon! {' '}
                    <span>
                      <img src="assets/img/elemnts/shape-light-lime-5-arms-star.svg" alt="shape-light-lime-5-arms-star" width="74" height="70" className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]" />
                    </span>
                  </h2>
                  <p className="section-para mx-auto max-w-[616px]">
                    Get notified when we launch something new for you! Enter your
                    email address here and stay tuned with us.
                  </p>
                </div>
                {/* <!-- Section Block --> */}

                {/* <!-- Count Down Wrapper --> */}
                <Countdown />
                {/* <!-- Count Down Wrapper --> */}

                <div className="text-center">
                  <form action="#" method="post" className="mx-auto flex max-w-[500px] justify-center">
                    <div className="relative w-full">
                      <input type="email" placeholder="Enter your email" className="w-full rounded-[50px] bg-black px-6 py-5 text-base font-bold text-white placeholder:text-white sm:pr-[170px]" required />
                      <button type="submit" className="bottom-[5px] right-[5px] top-[5px] mt-5 w-full items-center rounded-[50px] bg-colorLightLime px-7 py-4 text-center text-base font-bold text-black hover:bg-white sm:absolute sm:mt-0 sm:inline-flex sm:w-auto">
                        Get Notified
                      </button>
                    </div>
                  </form>
                  <span className="mt-3 inline-block text-sm text-[#666666]">We do not share your information with any third party & no
                    spam*</span>
                </div>
              </div>
              {/* <!-- Section Container --> */}
            </div>
            {/* <!-- Section Space --> */}
          </section>
          {/* <!-- ...::: Coming Soon Section End :::... --> */}
        </main>
        {/* <!--  Main Wrapper End --> */}

        {/* <!-- ...::: Footer Section Start :::... --> */}
        <footer className="section-footer">
          <div className="bg-black">
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
        {/* <!-- ...::: Footer Section End :::... --> */}
      </div>
    </div>
    </Wrapper>
  )
}
