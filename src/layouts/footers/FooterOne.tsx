import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function FooterOne() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <footer className="section-footer">
        <div className="bg-black">
          {/* Footer Top */}
          <div className="section-space">
            <div className="container">
              <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-[1fr_minmax(0,0.8fr)] lg:gap-x-20 xl:gap-x-24 xxl:gap-x-[139px]">
                
                {/* Footer Left */}
                <div>
                  <div className="section-block text-colorButteryWhite">
                    <h2 className="mb-6">
                      Let's start a
                      <span>
                        <img
                          src="assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                          alt="star"
                          width="74"
                          height="70"
                          className="relative inline-block h-auto w-8 md:w-10 lg:w-[57px]"
                        />
                      </span>
                      project together
                    </h2>

                    <p className="section-para">
                      Ready to launch or redesign your Shopify store, WordPress site, or brand online?
                      TheWebFy team responds within 24 hours with a free consultation.
                    </p>
                  </div>

                  <div className="grid grid-cols-[1fr_auto] items-center">
                    <div>
                      <ul className="mt-12 flex flex-col gap-y-3">
                        <li>
                          <span className="block font-syne text-[21px] font-bold text-colorLightLime">
                            Give us a call:
                          </span>
                          <a
                            href="tel:+8801714057899"
                            className="text-[21px] text-colorButteryWhite"
                          >
                            +880 1714-057899
                          </a>
                        </li>

                        <li>
                          <span className="block font-syne text-[21px] font-bold text-colorLightLime">
                            Send us an email:
                          </span>
                          <a
                            href="mailto:suportzuadul@gmail.com"
                            className="text-[21px] text-colorButteryWhite"
                          >
                            suportzuadul@gmail.com
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="hidden lg:inline-block">
                      <img
                        src="assets/img/elemnts/element-light-lime-curve-arrow.svg"
                        alt="arrow"
                        width="284"
                        height="153"
                        className="h-auto max-w-52 xl:max-w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Footer Right – Calendly */}
                <div>
                  <span className="display-heading display-heading-5 mb-[30px] block text-colorButteryWhite">
                    Book a free call
                  </span>

                  <div
                    className="calendly-inline-widget rounded-[20px] overflow-hidden"
                    data-url="https://calendly.com/suportzuadul/30min"
                    style={{ minWidth: "320px", height: "700px" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="horizontal-line bg-[#333333]"></div>

          {/* Footer Bottom */}
          <div className="py-[35px]">
            <div className="container">
              <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-4 lg:justify-between">
                <Link to="/">
                  <img
                    src="assets/img/logonew.png"
                    alt="logo"
                    width="121"
                    height="24"
                  />
                </Link>

                <div className="text-colorButteryWhite">
                  © {new Date().getFullYear()} All Rights Reserved by thewebfy
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
