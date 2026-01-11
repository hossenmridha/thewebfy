
import { Link } from "react-router-dom"
 
 
export default function CounterHomeSix() {
  return (
    <section className="section-content">
      {/* <!-- Section Background --> */}
      <div className="relative z-10 bg-[#2C2C2C]">
        {/* <!-- Section Space --> */}
        <div className="section-space">
          {/* <!-- Section Container --> */}
          <div className="container">
            {/* <!-- Section Block --> */}
            <div className="mx-auto mb-10 max-w-4xl md:mb-[60px] lg:mb-20 xl:max-w-5xl">
              <h2 className="jos text-center font-playfairDisplay text-4xl font-bold !leading-[1.11] -tracking-[0.5px] text-[#F3EDE8] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85px]">
                We are professional interior design experts
              </h2>
            </div>
            {/* <!-- Section Block --> */}

            {/* <!-- Content Area --> */}
            <div className="flex flex-col gap-y-10 text-[#F3EDE8] md:gap-y-[60px] lg:gap-y-20">
              {/* <!-- Content List --> */}
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 xl:gap-20">
                {/* <!-- Content --> */}
                <div className="jos para-lg flex flex-col gap-y-6" data-jos_animation="fade-right">
                  <p>
                    We are an experienced interior design firm offering a
                    professional service specializing in creating and also
                    enhancing interior spaces for residential, commercial or
                    other types of buildings.
                  </p>
                  <p>
                    We are a team of skilled and quality interior designers
                    who are trained and skilled in the art and science of
                    designing spaces to meet the functional and aesthetic
                    needs of our clients.
                  </p>
                  {/* <!-- Counter Block --> */}
                  <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1 xl:mt-10 xl:grid-cols-2">
                    {/* <!-- Counter Item --> */}
                    <li className="flex items-end justify-center gap-x-4 md:justify-normal">
                      <div className="mr-4 inline-block font-playfairDisplay text-4xl font-bold text-[#D68BE7] sm:text-5xl md:text-6xl xl:text-[85px]" data-module="countup">
                        <span className="start-number" data-countup-number="12">15</span>+
                      </div>
                      <span className="inline-block w-44 text-lg text-[#F3EDE8] lg:text-2xl">Years of experience</span>
                    </li>
                    {/* <!-- Counter Item --> */}
                    {/* <!-- Counter Item --> */}
                    <li className="flex items-end justify-center gap-x-4 md:justify-normal">
                      <div className="mr-4 inline-block font-playfairDisplay text-4xl font-bold text-[#D68BE7] sm:text-5xl md:text-6xl xl:text-[85px]" data-module="countup">
                        <span className="start-number" data-countup-number="2">2</span>k
                      </div>
                      <span className="inline-block w-44 text-lg text-[#F3EDE8] lg:text-2xl">successful projects done</span>
                    </li>
                    {/* <!-- Counter Item --> */}
                  </ul>
                  {/* <!-- Counter Block --> */}
                </div>
                {/* <!-- Content --> */}
                {/* <!-- Image --> */}
                <div className="jos mx-auto" data-jos_animation="fade-left">
                  <img src="assets/img/images/th-6/content-img-1.jpg" alt="content-img-1" width="580" height="551" className="max-w-full rounded-[20px] lg:rotate-3" />
                </div>
                {/* <!-- Image --> */}
              </div>
              {/* <!-- Content List --> */}
              {/* <!-- Content List --> */}
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 xl:gap-20">
                {/* <!-- Content --> */}
                <div className="jos para-lg order-1 flex flex-col gap-y-6 lg:order-2" data-jos_animation="fade-right">
                  <p>
                    We work on various projects including homes, offices,
                    retail spaces, and our services include space planning,
                    furniture selection, color coordination, lighting
                    design, and overall aesthetic enhancement.
                  </p>
                  <p>
                    Our goal is to transform interiors into functional,
                    comfortable, and aesthetically pleasing environments
                    that reflect the client's preferences and lifestyle.
                  </p>
                  <div className="mt-10">
                    <Link to="/about" className="inline-block rounded-[50px] border-2 border-[#2C2C2C] bg-[#02854C] px-[35px] py-4 text-center font-bold text-[#F3EDE8] shadow-[0_4px_0_0] shadow-[#F3EDE8] transition-all duration-300 hover:shadow-none">Read Our Story</Link>
                  </div>
                </div>
                {/* <!-- Content --> */}
                {/* <!-- Image --> */}
                <div className="jos order-2 lg:order-1" data-jos_animation="fade-left">
                  <img src="assets/img/images/th-6/content-img-2.jpg" alt="content-img-2" width="580" height="551" className="max-w-full -rotate-3 rounded-[20px]" />
                </div>
                {/* <!-- Image --> */}
              </div>
              {/* <!-- Content List --> */}
            </div>
            {/* <!-- Content Area --> */}
          </div>
          {/* <!-- Section Container --> */}
        </div>
        {/* <!-- Section Space --> */}

        {/* <!-- Background Element --> */}
        <div className="absolute right-20 top-28 -z-10 hidden animate-pulse lg:inline-block">
          <img src="assets/img/elemnts/shape-purple-star.svg" alt="shape-purple-star" />
        </div>
        {/* <!-- Background Element --> */}
      </div>
      {/* <!-- Section Background --> */}
    </section>
  )
}
