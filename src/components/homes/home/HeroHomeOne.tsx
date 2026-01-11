import { Link } from "react-router-dom";
 
export default function HeroHomeOne() {
  return (
    <>
      <section className="section-hero">
        <div className="bg-black">
          <div className="pb-20 pt-[150px] lg:pb-[100px] lg:pt-[196px] xl:pb-[130px]">
            <div className="container">
              <div className="relative z-10 grid grid-cols-1 items-center justify-center gap-x-[90px] gap-y-16 lg:grid-cols-[1fr_minmax(0,0.6fr)]">

                <div className="text-center text-colorButteryWhite lg:text-start">
                  <h1>
                    Get {' '}
                    <span className="inline-flex items-center gap-5"> More
                      <img src="assets/img/elemnts/shape-light-lime-5-arms-star.svg" alt="shape-light-lime-5-arms-star" width="74" height="70" className="w-12 md:w-14 lg:w-auto h-auto" /></span>
                   {' '} Customers test
                  </h1>
                  <p className="mb-10 mt-6 text-lg leading-[1.4] md:mb-14 lg:text-[21px]">
                    With a high-quality website that test works for your business
                    Be visible. Attract Customers. Increase sales.
                  </p>

                  <div className="mb-[50px] flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                    <div className="flex -space-x-3">
                      <img src="assets/img/images/th-1/hero-user-1.png" alt="hero-user-1" width="60" height="60" className="z-0 h-[66px] w-[66px] rounded-[50%] border-[6px] border-black" />
                      <img src="assets/img/images/th-1/hero-user-2.png" alt="hero-user-2" width="60" height="60" className="z-[2] h-[66px] w-[66px] rounded-[50%] border-[6px] border-black" />
                      <img src="assets/img/images/th-1/hero-user-3.png" alt="hero-user-3" width="60" height="60" className="z-[3] h-[66px] w-[66px] rounded-[50%] border-[6px] border-black" />
                    </div>
                    <span className="text-base font-semibold">Brands Love to Work With Us</span>
                  </div>

                  <Link to="https://wa.link/78d75z" className="btn-primary relative pr-20 md:pr-[118px]">Chat on WhatsApp
                    <span className="absolute right-[5px] inline-flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-black"><img src="assets/img/icons/icon-buttery-white-phone.svg" alt="icon-buttery-white-phone" width="30" height="30" /></span></Link>
                </div>


                <div className="mx-auto inline-block max-w-[495px] overflow-hidden rounded-[25px] bg-colorButteryWhite p-[5px] lg:mx-0">
                  <img src="assets/img/images/th-1/hero-img.jpg" alt="hero-img" width="485" height="540" className="h-full w-full rounded-[20px] object-cover" />
                </div>



                <img src="assets/img/elemnts/element-light-lime-curve-arrow.svg" alt="element-light-lime-curve-arrow" width="284" height="153" className="absolute bottom-0 left-1/2 -z-10 hidden h-auto max-w-52 -translate-x-1/2 lg:inline-block xl:max-w-full" />

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  )
}
