
import { Link } from "react-router-dom" 

export default function FeaturesHomeSix() {
  return (
    <section className="section-features">
      {/* <!-- Section Space --> */}
      <div className="section-space">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Feature List --> */}
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* <!-- Feature Item --> */}
            <li className="jos text-center">
              <div className="mb-8 flex justify-center">
                <img src="assets/img/images/th-6/features-img-1.png" alt="features-img-1" width="271" height="221" className="h-[221px] w-auto" />
              </div>
              <div>
                <h4 className="mb-4 font-playfairDisplay text-2xl font-bold leading-[1.2] -tracking-[0.5px] text-[#2C2C2C] lg:text-3xl xl:text-[40px]">
                  Aesthetic Design
                </h4>
                <p className="para-lg text-[#0C0C0C]">
                  Demonstrates a keen eye for design, ensuring each project
                  reflects a high level of aesthetic appeal.
                </p>
              </div>
            </li>
            {/* <!-- Feature Item --> */}
            {/* <!-- Feature Item --> */}
            <li className="jos text-center">
              <div className="mb-8 flex justify-center">
                <img src="assets/img/images/th-6/features-img-2.png" alt="features-img-2" width="267" height="220" className="h-[221px] w-auto" />
              </div>
              <div>
                <h4 className="mb-4 font-playfairDisplay text-2xl font-bold leading-[1.2] -tracking-[0.5px] text-[#2C2C2C] lg:text-3xl xl:text-[40px]">
                  Affordable Pricing
                </h4>
                <p className="para-lg text-[#0C0C0C]">
                  We always ensure a balance between affordability and also
                  delivering a high-quality end product.
                </p>
              </div>
            </li>
            {/* <!-- Feature Item --> */}
            {/* <!-- Feature Item --> */}
            <li className="jos text-center">
              <div className="mb-8 flex justify-center">
                <img src="assets/img/images/th-6/features-img-3.png" alt="features-img-3" width="280" height="200" className="h-[221px] w-auto" />
              </div>
              <div>
                <h4 className="mb-4 font-playfairDisplay text-2xl font-bold leading-[1.2] -tracking-[0.5px] text-[#2C2C2C] lg:text-3xl xl:text-[40px]">
                  Professional Team
                </h4>
                <p className="para-lg text-[#0C0C0C]">
                  We boast of a team of skilled interior designers,
                  architects & support staff with functional experience
                </p>
              </div>
            </li>
            {/* <!-- Feature Item --> */}
          </ul>
          {/* <!-- Feature List --> */}
          <div className="mt-10 flex justify-center md:mt-[60px] lg:mt-20">
            <Link to="/about" className="inline-block rounded-[50px] border-2 border-[#2C2C2C] bg-[#02854C] px-[35px] py-4 text-center font-bold text-[#F3EDE8] shadow-[0_4px_0_0] shadow-[#2C2C2C] transition-all duration-300 hover:shadow-none">Explore More Features</Link>
          </div>
        </div>
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>
  )
}
