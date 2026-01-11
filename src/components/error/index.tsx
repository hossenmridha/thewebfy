 
import { Link } from "react-router-dom";
import HeaderOne from "../../layouts/headers/HeaderOne";
import FooterOne from "../../layouts/footers/FooterOne";
import Wrapper from "../../layouts/Wrapper";



export default function NotFound() {
  return (
    <Wrapper>
    <div className="bg-colorIvory">
      <div className="page-wrapper">
        {/* <!-- ...::: Header Section Start :::... --> */}
        <HeaderOne />
        {/* <!-- ...::: Header Section End :::... --> */}

        {/* <!-- Main Wrapper Start --> */}
        <main className="main-wrapper">
          {/* <!-- ...::: Breadcrumb Section Start :::... --> */}
          <section className="section-breadcrumb">
            {/* <!-- Breadcrumb Background --> */}
            <div className="bg-black">
              {/* <!-- Breadcrumb Space --> */}
              <div className="breadcrumb-space">
                {/* <!-- Section Container --> */}
                <div className="container">
                  <div className="breadcrumb-block">
                    <h1>404</h1>
                    {/* <!-- Breadcrumb Nav --> */}
                    <ul className="breadcrumb-nav">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>404</li>
                    </ul>
                    {/* <!-- Breadcrumb Nav --> */}
                  </div>
                </div>
                {/* <!-- Section Container --> */}
              </div>
              {/* <!-- Breadcrumb Space --> */}
            </div>
            {/* <!-- Breadcrumb Background --> */}
          </section>
          {/* <!-- ...::: Breadcrumb Section End :::... --> */}

          {/* <!-- ...::: 404 Section Start :::... --> */}
          <section className="section-404-error">
            {/* <!-- Section Space --> */}
            <div className="section-space">
              {/* <!-- Section Container --> */}
              <div className="container">
                {/* <!-- 404 Image Block --> */}
                <div className="jos mb-10 flex justify-center md:mb-[60px] lg:mb-20">
                  <img src="assets/img/images/th-1/404-image.svg" alt="404-image" width="636" height="471" className="max-w-full" />
                </div>
                {/* <!-- 404 Image Block --> */}

                {/* <!-- Section Block --> */}
                <div className="section-block mx-auto mb-10 max-w-[650px] text-center xl:max-w-[870px]">
                  <h2 className="jos">
                    We can’t find the page you are looking for
                    <span>
                      <img src="assets/img/elemnts/shape-light-lime-5-arms-star.svg" alt="shape-light-lime-5-arms-star" width="74" height="70" className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]" />
                    </span>
                  </h2>
                </div>
                {/* <!-- Section Block --> */}

                <div className="flex justify-center">
                  <Link to="/" className="btn-primary relative justify-start bg-black pr-20 text-white">
                    Return to homepage
                    <span className="absolute right-[5px] inline-flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-colorLightLime"><img src="assets/img/icons/icon-black-arrow-right.svg" alt="icon-black-arrow-right" width="34" height="28" /></span></Link>
                </div>
              </div>
              {/* <!-- Section Container --> */}
            </div>
            {/* <!-- Section Space --> */}
          </section>
          {/* <!-- ...::: 404 Section End :::... --> */}
        </main>
        {/* <!--  Main Wrapper End --> */}

        {/* <!-- ...::: Footer Section Start :::... --> */}
        <FooterOne />
        {/* <!-- ...::: Footer Section End :::... --> */}
      </div>
    </div>
    </Wrapper>
  )
}
