

export default function FeaturesHomeTwo() {
  return (
    <>
      <section className="section-feature">
        <div className="relative z-10">
          <div className="section-space">
            <div className="container">
              <div className="section-block mb-10 max-w-3xl md:mb-[60px] lg:mb-20">
                <h2 className="jos font-clashGrotesk text-4xl font-semibold leading-[1.075] text-colorGondola sm:text-5xl md:text-6xl lg:text-7xl xxl:text-[80px]">
                  Features that set us apart from others
                </h2>
              </div>
              <ul className="grid grid-cols-1 items-start gap-x-6 gap-y-[30px] md:grid-cols-2 lg:grid-cols-3 xl:items-stretch">
                <li className="jos flex gap-y-[30px] rounded-[5px] border-2 border-colorGondola bg-colorIvory p-6 odd:flex-col even:flex-col-reverse" data-jos_animation="flip-left">
                  <div>
                    <img src="assets/img/images/th-2/feature-img-1.png" alt="feature-img-1" width="237" height="191" className="max-w-full" />
                  </div>


                  <div>
                    <h4 className="mb-4 font-clashGrotesk leading-[1.4] text-colorGondola">
                      Reduce Uncertainty
                    </h4>
                    <p className="text-[#0C0C0C]">
                      By adopting and implementing strategies, we not only
                      help survive but also thrive in the face of uncertainty.
                    </p>
                  </div>
                </li>


                <li className="jos flex gap-y-[30px] rounded-[5px] border-2 border-colorGondola bg-colorIvory p-6 odd:flex-col even:flex-col-reverse" data-jos_animation="flip-left">

                  <div>
                    <img src="assets/img/images/th-2/feature-img-2.png" alt="feature-img-2" width="210" height="174" className="max-w-full" />
                  </div>


                  <div>
                    <h4 className="mb-4 font-clashGrotesk leading-[1.4] text-colorGondola">
                      Innovative Ideas
                    </h4>
                    <p className="text-[#0C0C0C]">
                      Our aim is to disrupt existing industries or create
                      entirely new ones with our talents and innovative
                      business ideas.
                    </p>
                  </div>
                </li>


                <li className="jos flex gap-y-[30px] rounded-[5px] border-2 border-colorGondola bg-colorIvory p-6 odd:flex-col even:flex-col-reverse" data-jos_animation="flip-left">

                  <div>
                    <img src="assets/img/images/th-2/feature-img-3.png" alt="feature-img-3" width="240" height="174" className="max-w-full" />
                  </div>


                  <div>
                    <h4 className="mb-4 font-clashGrotesk leading-[1.4] text-colorGondola">
                      Growth Focus
                    </h4>
                    <p className="text-[#0C0C0C]">
                      Growth is a central objective for us. We’ve also a
                      strong emphasis on rapid growth and scaling business
                      growth.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="absolute bottom-11 right-24 -z-10">
            <img src="assets/img/elemnts/element-light-lime-curve-1.svg" alt="element-light-lime-curve-1" width="178" height="234" className="max-w-full" />
          </div>
        </div>
      </section>
    </>
  )
}
