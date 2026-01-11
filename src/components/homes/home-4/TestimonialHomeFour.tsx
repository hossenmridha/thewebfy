 
import { Link } from "react-router-dom"
import Count from "../../../common/Count"

export default function TestimonialHomeFour() {
  return (
    <>
      <section className="section-testimonial">
        <div className="relative z-10">
          {/* <!-- Section Space --> */}
          <div className="section-space">
            {/* <!-- Section Container --> */}
            <div className="container">
              {/* <!-- Section Block --> */}
              <div className="mb-10 flex flex-wrap items-end justify-between gap-5 md:mb-[60px] lg:mb-20">
                <div className="section-block max-w-[746px]">
                  {/* <!-- Section Tag --> */}
                  <span className="mb-5 block text-xl font-semibold text-[#FF8064] lg:text-2xl">Client success stories</span>
                  {/* <!-- Section Tag --> */}
                  {/* <!-- Section Title --> */}
                  <h2 className="font-arimo text-4xl font-bold leading-[1.2] -tracking-[2px] text-[#191931] md:text-5xl md:leading-[1.07] lg:text-6xl xl:text-[75px]">
                    Don't just trust us, hear from others
                  </h2>
                  {/* <!-- Section Title --> */}
                </div>
                <Link to="/testimonial" className="group inline-flex rounded-[50px] border-2 border-[#0000FF] bg-[#0000FF] px-5 py-3 text-base font-bold text-white lg:px-6 lg:py-4">
                  <div className="relative flex items-center justify-center overflow-hidden">
                    <span className="translate-y-0 transition-all duration-300 group-hover:-translate-y-full">View all reviews</span>
                    <span className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0">View all reviews</span>
                  </div>
                </Link>
              </div>
              {/* <!-- Section Block --> */}

              {/* <!-- Testimonial List --> */}
              <ul className="grid grid-cols-1 gap-6 md:grid-cols-4 xl:grid-cols-3">
                <li className="flex flex-col justify-center rounded-[10px] bg-[#FF8064] px-16 py-[102px] text-center text-[#FFF7EA] md:col-span-2 xl:col-span-1">
                  <div className="mb-6 font-arimo text-6xl font-bold leading-none -tracking-[1px] lg:text-7xl xl:text-8xl xxl:text-[120px]" data-module="countup">
                    <span className="start-number" data-countup-number="80">
                      <Count number={80} text="k" />
                    </span>
                  </div>
                  <span className="inline-block text-2xl font-semibold">Years of experience</span>
                </li>
                <li className="rounded-[10px] border-2 border-[#191931] p-10 text-[#191931] md:col-span-2">
                  <div className="">
                    <img src="assets/img/images/th-4/block-quote-img.png" width="75" height="50" alt="block-quote-img" className="max-w-full" />
                  </div>
                  {/* <!-- Blockquote Text --> */}
                  <blockquote className="para-lg my-[30px] font-semibold">
                    "We consider Mthemeus as trusted advisors and partners in
                    our business. Their insights have been instrumental in our
                    decision-making process, and their collaborative approach
                    has made a meaningful difference in our business's
                    trajectory."
                  </blockquote>
                  {/* <!-- Blockquote Text --> */}
                  <div className="flex items-center gap-3">
                    {/* <!-- User Image --> */}
                    <div className="overflow-hidden rounded-[50%] border-[3px] border-current">
                      <img src="assets/img/images/th-4/testimonial-user-img-1.jpg" alt="testimonial-user-img-1" width="64" height="64" className="h-full w-full" />
                    </div>
                    {/* <!-- User Image --> */}
                    {/* <!-- User Info --> */}
                    <div className="flex-1">
                      <span className="block font-semibold">William Jack </span>
                      <span className="block">CEO & Founder @XYZ</span>
                    </div>
                    {/* <!-- User Info --> */}
                  </div>
                </li>
                <li className="rounded-[10px] border-2 border-[#191931] p-10 text-[#191931] md:col-span-2">
                  <div className="">
                    <img src="assets/img/images/th-4/block-quote-img.png" width="75" height="50" alt="block-quote-img" className="max-w-full" />
                  </div>
                  {/* <!-- Blockquote Text --> */}
                  <blockquote className="para-lg my-[30px] font-semibold">
                    "Working with Mthemeus has been a game-changer for our
                    company. Their tailored solutions & hands-on approach have
                    not only boosted our efficiency but have also opened up
                    new avenues for growth. They are an invaluable partner in
                    our journey to success."
                  </blockquote>
                  {/* <!-- Blockquote Text --> */}
                  <div className="flex items-center gap-3">
                    {/* <!-- User Image --> */}
                    <div className="overflow-hidden rounded-[50%] border-[3px] border-current">
                      <img src="assets/img/images/th-4/testimonial-user-img-2.jpg" alt="testimonial-user-img-2" width="64" height="64" className="h-full w-full" />
                    </div>
                    {/* <!-- User Image --> */}
                    {/* <!-- User Info --> */}
                    <div className="flex-1">
                      <span className="block font-semibold">Andrew Smith</span>
                      <span className="block">Businessman</span>
                    </div>
                    {/* <!-- User Info --> */}
                  </div>
                </li>
                <li className="flex flex-col justify-center rounded-[10px] bg-[#FF8064] px-16 py-[102px] text-center text-[#FFF7EA] md:col-span-2 xl:col-span-1">
                  <div className="mb-6 font-arimo text-6xl font-bold leading-none -tracking-[1px] lg:text-7xl xl:text-8xl xxl:text-[120px]" data-module="countup">
                    <span className="start-number" data-countup-number="200">
                      <Count number={200} text="k" />
                    </span>+
                  </div>
                  <span className="inline-block text-2xl font-semibold">Successfully finished projects</span>
                </li>
              </ul>
              {/* <!-- Testimonial List --> */}
            </div>
            {/* <!-- Section Container --> */}
          </div>
          {/* <!-- Section Space --> */}
          {/* <!-- Section Element Shape --> */}
          <img src="assets/img/elemnts/th-4-content-shape-4.svg" alt="th-4-content-shape-4" width="110" height="164" className="jos absolute right-40 top-32 -z-10 hidden lg:inline-block" data-jos_animation="fade-down" />
          {/* <!-- Section Element Shape --> */}
        </div>
      </section>
    </>
  )
}
