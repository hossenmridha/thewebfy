

export default function ServiceDetailsArea() {
  return (
    <section className="section-service">
      {/* <!-- Section Space --> */}
      <div className="section-space">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Service Details Article --> */}
          <article>
            <div className="mb-20 block overflow-hidden rounded-[35px] border-2 border-black lg:border-[5px]">
              <img src="assets/img/images/th-1/service-details-img.jpg" alt="service-details-img." width="1286" height="590" className="h-auto w-full object-cover" />
            </div>
            <div className="max-w-[650px] md:mb-[60px] xl:max-w-[856px]">
              <h2>
                UI/UX for
                <span>
                  modern
                  <img src="assets/img/elemnts/shape-light-lime-5-arms-star.svg" alt="shape-light-lime-5-arms-star" width="74" height="70" className="inline-block h-auto w-8 md:w-10 lg:w-[57px]" />
                </span>
                product development
              </h2>
              <div className="rich-text mt-6 text-lg leading-[1.4] lg:text-[21px]">
                <p>
                  UI/UX, which stands for User Interface (UI) and User
                  Experience (UX), are two critical components of software
                  design and development of websites and applications.
                </p>
                <p>
                  They are often used interchangeably, but they refer to
                  different aspects of the design and user interaction
                  process. Here's a brief overview of each:
                </p>
              </div>
            </div>
          </article>
          {/* <!-- Service Details Article --> */}

          {/* <!-- Service Info Block --> */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            <div>
              <h4>1/ User Interface (UI):</h4>
              <ul className="ml-4 mt-4 flex list-outside list-disc flex-col gap-y-[30px]">
                <li>
                  UI refers to the visual elements and the overall look and
                  feel of a product. It encompasses the design of screens,
                  pages, buttons, icons, and any other visual elements users
                  interact with.
                </li>
                <li>
                  UI designers are responsible for creating a visually
                  appealing and consistent design that aligns with the brand
                  or product's identity.
                </li>
                <li>
                  Key aspects of UI design include layout, color schemes,
                  typography, icons, and graphical elements.
                </li>
              </ul>
            </div>
            <div>
              <h4>2/ User Experience (UX):</h4>
              <ul className="ml-4 mt-4 flex list-outside list-disc flex-col gap-y-[30px]">
                <li>
                  UX focuses on the overall experience of the user when
                  interacting with a product. It encompasses how users feel
                  when they use the product and how easy or challenging it
                  is to accomplish their goals.
                </li>
                <li>
                  UX designers work to understand the user's needs,
                  behaviors, and pain points, and they design the product
                  maximizes user satisfaction.
                </li>
                <li>
                  Key aspects of UX design include research, information
                  architecture, wireframing, prototyping, usability testing,
                  and user journey mapping.
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Service Info Block --> */}
        </div>
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>
  )
}
