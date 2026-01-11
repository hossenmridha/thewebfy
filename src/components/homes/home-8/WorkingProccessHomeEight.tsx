
export default function WorkingProccessHomeEight() {
  return (
    <section className="section-working-process">
      {/* <!-- Section Space --> */}
      <div className="section-space-bottom">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Section Block --> */}
          <div className="mx-auto mb-10 max-w-xl text-center text-[#000937] md:mb-[60px] lg:mb-20 lg:max-w-2xl xxl:max-w-4xl">
            <h2 className="jos font-outfit text-5xl font-medium leading-none lg:text-6xl lg:-tracking-[3px] xl:text-7xl xxl:text-[110px]">
              Our process flows always smoothly
            </h2>
          </div>
          {/* <!-- Section Block --> */}

          {/* <!-- Process List --> */}
          <ul className="flex flex-col justify-between gap-y-10 divide-[#000937] text-[#000937] md:flex-row md:divide-x">
            <li className="jos flex flex-col justify-center gap-4 px-8 text-center first-of-type:pl-0 last-of-type:pr-0 md:gap-6 xl:px-[60px]">
              <div className="mx-auto">
                <img src="assets/img/images/th-8/process-img-1.png" alt="process-img-1" width="191" height="191" className="max-w-28 lg:max-w-full" />
              </div>
              <div className="font-outfit text-2xl font-medium">
                Planning and Strategy
              </div>
              <p className="para-lg">
                In this step we understand the client's needs, goals &
                challenges. Identify project pain points.
              </p>
            </li>
            <li className="jos flex flex-col justify-center gap-4 px-8 text-center first-of-type:pl-0 last-of-type:pr-0 md:gap-6 xl:px-[60px]">
              <div className="mx-auto">
                <img src="assets/img/images/th-8/process-img-2.png" alt="process-img-2" width="191" height="191" className="max-w-28 lg:max-w-full" />
              </div>
              <div className="font-outfit text-2xl font-medium">
                Discovery and Analysis
              </div>
              <p className="para-lg">
                Defining the project milestones, and creating a timeline,
                allocating resources and procedures.
              </p>
            </li>
            <li className="jos flex flex-col justify-center gap-4 px-8 text-center first-of-type:pl-0 last-of-type:pr-0 md:gap-6 xl:px-[60px]">
              <div className="mx-auto">
                <img src="assets/img/images/th-8/process-img-3.png" alt="process-img-3" width="191" height="191" className="max-w-28 lg:max-w-full" />
              </div>
              <div className="font-outfit text-2xl font-medium">
                Execution and Delivery
              </div>
              <p className="para-lg">
                Along with the planning, and we proceed to execute the
                project as per the agreed strategy.
              </p>
            </li>
          </ul>
          {/* <!-- Process List --> */}
        </div>
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>
  )
}
