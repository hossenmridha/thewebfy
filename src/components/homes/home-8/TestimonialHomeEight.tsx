import { Link } from "react-router-dom";


export default function TestimonialHomeEight() {
  return (
    <div className="section-testimonial">
      {/* <!-- Section Background --> */}
      <div className="bg-[#000937]">
        {/* <!-- Section Space --> */}
        <div className="section-space">
          {/* <!-- Section Container --> */}
          <div className="container">
            {/* <!-- Testimonial Area --> */}
            <div className="jos text-center font-outfit text-3xl font-medium !leading-[1.24] text-[#FCF9F0] md:text-4xl lg:text-[50px]">
              We would like to express our gratitude to our esteemed clients
              for their honest feedback {" "}
              <div className="group relative z-20 hidden translate-y-4 lg:inline-block">
                  <img src="assets/img/images/th-8/testimonial-img-1.png" alt="testimonial-img-1" />  
                <div className="absolute top-full z-30 inline-block w-[448px] translate-y-4 rounded bg-white p-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <blockquote className="para-lg font-body font-semibold text-[#000937]">
                   {" "} “Excellent IT service provider. The team contacted me
                    quickly and dealt with my issue professionally. I can
                    highly recommend this company.”
                  </blockquote>
                  <div className="mt-4 text-base">
                    <span className="text-[#000937]">William Jack</span>
                    <span className="text-[#999999]">Founder@XYZ</span>
                  </div>
                </div>
              </div>
              {" "} and also unwavering support. {" "}
              <div className="group relative z-20 hidden translate-y-4 lg:inline-block">
                 <img src="assets/img/images/th-8/testimonial-img-2.png" alt="testimonial-img-2" /> 
                <div className="absolute top-full z-30 inline-block w-[448px] translate-y-4 rounded bg-white p-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <blockquote className="para-lg font-body font-semibold text-[#000937]">
                   "Their cutting-edge technology not only streamlined our
                    operations but also improved our overall productivity.
                    Highly recommend their services!"
                  </blockquote>
                  <div className="mt-4 text-base">
                    <span className="text-[#000937]">Adam Smith</span>
                    <span className="text-[#999999]">Web Developer</span>
                  </div>
                </div>
              </div>

             {" "} It is because of your trust in us {" "}
              <div className="group relative z-20 hidden translate-y-4 lg:inline-block">
                <img src="assets/img/images/th-8/testimonial-img-3.png" alt="testimonial-img-3" />  
                <div className="absolute top-full z-30 inline-block w-[448px] translate-y-4 rounded bg-white p-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <blockquote className="para-lg font-body font-semibold text-[#000937]">
                    “Excellent IT service provider. The team contacted me
                    quickly and dealt with my issue professionally. I can
                    highly recommend this company.”  
                  </blockquote>
                  <div className="mt-4 text-base">
                    <span className="text-[#000937]">William Jack</span>
                    <span className="text-[#999999]">Founder@XYZ</span>
                  </div>
                </div>
              </div>
              {" "} that we are committed to providing you with the best possible
              service
            </div>
            {/* <!-- Testimonial Area --> */}
            <div className="mt-[50px] flex justify-center">
              <Link to="/testimonial" className="group inline-flex rounded border-2 border-[#001AA5] bg-[#001AA5] px-6 py-3 text-base font-bold text-white lg:px-8 xl:px-[42px]">
                <div className="relative z-10 flex items-center justify-center overflow-hidden">
                  <span className="translate-y-0 transition-all duration-300 group-hover:-translate-y-full">Read All The Reviews On Trustpilot.com</span>
                  <span className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0">Read All The Reviews On Trustpilot.com</span>
                </div>
              </Link>
            </div>
          </div>
          {/* <!-- Section Container --> */}
        </div>
        {/* <!-- Section Space --> */}
      </div>
      {/* <!-- Section Background --> */}
    </div>
  )
}
