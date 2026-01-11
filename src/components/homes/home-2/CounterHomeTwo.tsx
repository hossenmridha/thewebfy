import Count from "../../../common/Count";

 
export interface CounterItem {
  id: number;
  value: number;
  suffix?: string;
  title: string;
}

const counterData: CounterItem[] = [
  {
    id: 1,
    value: 13,
    suffix: "+",
    title: "Years of experience",
  },
  {
    id: 2,
    value: 84,
    suffix: "k",
    title: "Active monthly users",
  },
  {
    id: 3,
    value: 20,
    suffix: "k",
    title: "Project completed",
  },
];



export default function CounterHomeTwo() {
  return (
    <>
      <section className="section-content">

        <div className="pt-20">
          {/* <!-- Section Background --> */}
          <div className="rounded-[5px] bg-colorRedOrange xxl:mx-[50px]">
            {/* <!-- Section Space --> */}
            <div className="section-space">
              {/* <!-- Section Content --> */}
              <div className="container">
                {/* <!-- Content Area --> */}
                <div className="flex flex-col-reverse items-center gap-x-20 gap-y-14 xl:grid xl:grid-cols-[minmax(0,0.6fr)_1fr] xl:items-start xl:gap-x-[100px] xxl:grid-cols-[minmax(0,0.6fr)_1fr]">
                  {/* <!-- Content Left Block --> */}
                  <div className="jos inline-block max-w-[500px] rounded-xl bg-white p-3 xl:-translate-y-52 xl:-rotate-[5deg]"
                    data-jos_animation="fade-right">
                    <img src="assets/img/images/th-2/content-img-1.jpg"
                      alt="content-img-1"
                      width="478"
                      height="517"
                      className="mx-a h-auto w-full rounded-md" />
                  </div>

                  
                  {/* <!-- Content Left Block --> */}
                  {/* <!-- Content Right Block --> */}
                  <div>
                    {/* <!-- Section Block --> */}
                    <div className="section-block mb-10 max-w-3xl">
                      <h2 className="jos mb-6 font-clashGrotesk text-4xl font-semibold leading-[1.075] text-colorGondola sm:text-5xl md:text-6xl lg:text-7xl xxl:text-[80px]">
                        We help empower visionary founders
                      </h2>

                      <p className="jos section-para text-[#0c0c0c0]">
                        We provide comprehensive support, guidance to early
                        stage startups & entrepreneurs. Our mission is to help
                        transform breakthrough ideas into successful and
                        sustainable businesses.
                      </p>
                    </div>
                    {/* <!-- Section Block --> */}

                    {/* <!-- Counter Block --> */}
                    <ul className="jos grid grid-cols-1 items-center gap-x-[70px] gap-y-10 text-center text-colorGondola md:grid-cols-3 md:justify-between md:text-start lg:gap-x-[100px]">
                      {counterData.map((item) => (
                        <li
                          key={item.id}
                          className="relative after:absolute after:left-[calc(100%+35px)] after:top-1/2 after:h-10 after:w-0.5 after:-translate-y-1/2 after:bg-[#0c0c0c]/10 last:after:hidden lg:after:left-[calc(100%+50px)]"
                        >
                          <div
                            className="font-clashGrotesk text-4xl font-semibold leading-[1.07] -tracking-[1%] md:text-5xl xl:text-[80px]"
                            data-module="countup"
                          >
                            <span className="start-number" data-countup-number={item.value}>
                              <Count number={item.value} text={item.suffix} />
                            </span>
                          </div>
                          <span className="mt-2 inline-block">{item.title}</span>
                        </li>
                      ))}
                    </ul>
                    {/* <!-- Counter Block --> */}
                  </div>
                  {/* <!-- Content Right Block --> */}
                </div>
                {/* <!-- Content Area --> */}
              </div>
              {/* <!-- Section Content --> */}
            </div>
            {/* <!-- Section Space --> */}
          </div>
          {/* <!-- Section Background --> */}
        </div>
      </section>
    </>
  )
}
