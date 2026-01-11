
import { Link } from "react-router-dom" 

export default function TestimonialHomeSix() {
  return (
    <section className="section-testimonial">
      {/* <!-- Section Background --> */}
      <div className="bg-[#F3EDE8]">
        {/* <!-- Section Space --> */}
        <div className="section-space">
          {/* <!-- Section Container --> */}
          <div className="container">
            {/* <!-- Section Block --> */}
            <div className="mx-auto mb-10 max-w-3xl md:mb-[60px] lg:mb-20 xl:max-w-[910px]">
              <h2 className="jos text-center font-playfairDisplay text-4xl font-bold !leading-[1.11] -tracking-[0.5px] text-[#2C2C2C] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85px]">
                Expressions of our satisfied customers
              </h2>
            </div>
            {/* <!-- Section Block --> */}

            {/* <!-- Testimonial List --> */}
            <ul className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
              <li className="jos">
                {/* <!-- Review Icon --> */}
                <div className="mb-7 flex justify-center gap-x-1.5">
                  <img src="assets/img/icons/icon-green-star.svg" alt="icon-green-star" width="32" height="30" />
                  <img src="assets/img/icons/icon-green-star.svg" alt="icon-green-star" width="32" height="30" />
                  <img src="assets/img/icons/icon-green-star.svg" alt="icon-green-star" width="32" height="30" />
                  <img src="assets/img/icons/icon-green-star.svg" alt="icon-green-star" width="32" height="30" />
                  <img src="assets/img/icons/icon-green-star.svg" alt="icon-green-star" width="32" height="30" />
                </div>
                {/* <!-- Review Icon --> */}

                {/* <!-- Content --> */}
                <div className="text-center">
                  <h4 className="-text-[0.5px] mb-9 font-playfairDisplay font-bold text-[#2C2C2C]">
                    Highly recommended!
                  </h4>
                  <blockquote className="para-lg mb-8 text-[#0C0C0C]">
                    “I recently used their luxury tile flooring services and
                    I was extremely impressed with the quality of their work
                    and the professionalism of their team.”
                  </blockquote>
                  <div className="font-playfairDisplay text-[21px]">
                    <span className="font-bold">William Jack</span>
                    <span>Creative Director</span>
                  </div>
                </div>
                {/* <!-- Content --> */}
              </li>
              <li className="jos">
                {/* <!-- Review Icon --> */}
                <div className="mb-7 flex justify-center gap-x-1.5">
                  <img src="assets/img/icons/icon-green-star.svg" alt="icon-green-star" width="32" height="30" />
                  <img src="assets/img/icons/icon-green-star.svg" alt="icon-green-star" width="32" height="30" />
                  <img src="assets/img/icons/icon-green-star.svg" alt="icon-green-star" width="32" height="30" />
                  <img src="assets/img/icons/icon-green-star.svg" alt="icon-green-star" width="32" height="30" />
                  <img src="assets/img/icons/icon-green-star.svg" alt="icon-green-star" width="32" height="30" />
                </div>
                {/* <!-- Review Icon --> */}

                {/* <!-- Content --> */}
                <div className="text-center">
                  <h4 className="-text-[0.5px] mb-9 font-playfairDisplay font-bold text-[#2C2C2C]">
                    Highly recommended!
                  </h4>
                  <blockquote className="para-lg mb-8 text-[#0C0C0C]">
                    “I spoke with them to decorate my new home and I am very
                    happy that they did as promised. They made my dream home
                    a reality! I am very satisfied."
                  </blockquote>
                  <div className="font-playfairDisplay text-[21px]">
                    <span className="font-bold">Mark Jones </span>
                    <span>Businessman</span>
                  </div>
                </div>
                {/* <!-- Content --> */}
              </li>
              <li className="jos">
                {/* <!-- Review Icon --> */}
                <div className="mb-7 flex justify-center gap-x-1.5">
                  <img src="assets/img/icons/icon-green-star.svg" alt="icon-green-star" width="32" height="30" />
                  <img src="assets/img/icons/icon-green-star.svg" alt="icon-green-star" width="32" height="30" />
                  <img src="assets/img/icons/icon-green-star.svg" alt="icon-green-star" width="32" height="30" />
                  <img src="assets/img/icons/icon-green-star.svg" alt="icon-green-star" width="32" height="30" />
                  <img src="assets/img/icons/icon-green-star.svg" alt="icon-green-star" width="32" height="30" />
                </div>
                {/* <!-- Review Icon --> */}

                {/* <!-- Content --> */}
                <div className="text-center">
                  <h4 className="-text-[0.5px] mb-9 font-playfairDisplay font-bold text-[#2C2C2C]">
                    Fantastic service!
                  </h4>
                  <blockquote className="para-lg mb-8 text-[#0C0C0C]">
                    “Professional service for New Yorker wall installation,
                    flexibility in timelines, & great prices with wonderful
                    results can't be found anywhere else.”
                  </blockquote>
                  <div className="font-playfairDisplay text-[21px]">
                    <span className="font-bold">Pitter Hoark</span>
                    <span>Teacher</span>
                  </div>
                </div>
                {/* <!-- Content --> */}
              </li>
            </ul>
            {/* <!-- Testimonial List --> */}

            <div className="mt-10 flex justify-center md:mt-[60px] lg:mt-20">
              <Link to="/testimonial" className="inline-block rounded-[50px] border-2 border-[#2C2C2C] bg-[#02854C] px-[35px] py-4 text-center font-bold text-[#F3EDE8] shadow-[0_4px_0_0] shadow-[#2C2C2C] transition-all duration-300 hover:shadow-none">Explore All Reviews</Link>
            </div>
          </div>
          {/* <!-- Section Container --> */}
        </div>
        {/* <!-- Section Space --> */}
      </div>
      {/* <!-- Section Background --> */}
    </section>
  )
}
