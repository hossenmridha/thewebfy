 

export default function AboutHomeEight() {
  return (
    <section className="section-content">
      {/* <!-- Section Space --> */}
      <div className="section-space-bottom pt-[50px]">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Content Area --> */}
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[minmax(0,0.55fr)_1fr] lg:gap-[90px]">
            {/* <!-- Content Left Block --> */}
            <div className="jos order-2 overflow-hidden rounded-[10px] md:order-1" data-jos_animation="fade-right">
              <img src="assets/img/images/th-8/content-img-1.jpg" alt="content-img-1" width="450" height="550" className="h-auto w-full" />
            </div>
            {/* <!-- Content Left Block --> */}

            {/* <!-- Content Right Block --> */}
            <div className="jos order-1 md:order-2" data-jos_animation="fade-left">
              {/* <!-- Section Block --> */}
              <div className="mb-[30px] text-[#000937]">
                <h2 className="font-outfit text-5xl font-medium leading-none lg:text-6xl lg:-tracking-[3px] xl:text-7xl xxl:text-[110px]">
                  Solve complex problems simply
                </h2>
                <p className="mt-6 font-outfit text-xl font-medium lg:text-2xl">
                  We thrive on complexity reduce it to simplicity, creating
                  products & services that enable individuals and businesses
                  alike to adapt to the rapidly changing technology
                  landscape.
                </p>
              </div>
              {/* <!-- Section Block --> */}
              <p>
                We also believe that technology will not only meet today's
                needs but also anticipate tomorrow's challenges. Our diverse
                & highly skilled team is driven by a shared passion to push
                the boundaries of what is possible. We are committed to
                creating products and services.
              </p>
            </div>
            {/* <!-- Content Right Block --> */}
          </div>
          {/* <!-- Content Area --> */}
        </div>
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>
  )
}
