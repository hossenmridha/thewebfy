import Count from "../../../common/Count"

 

export default function CountHomeThree() {
  const counterData = [
    {
      id: 1,
      value: 13,
      suffix: "+",
      label: "Years of experience",
      color: "#8D7DFF",
    },
    {
      id: 2,
      value: 85,
      suffix: "%",
      label: "Average Conversion Rate",
      color: "#FF7545",
    },
    {
      id: 3,
      value: 60,
      suffix: "M",
      label: "Traffic Generated",
      color: "#FF94FF",
    },
    {
      id: 4,
      value: 100,
      suffix: "%",
      label: "Client satisfaction score",
      color: "#FFE757",
    },
  ]

  return (
    <>
      <div className="section-count">
        <div className="bg-black">
          <div className="py-10 md:py-[60px] lg:py-20">
            <div className="container">
              <span className="para-large mb-[50px] block text-center text-white">
                Our results speak for our ability to succeed
              </span>

              <ul className="jos grid grid-cols-1 justify-between gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:flex">
                {counterData.map(({ id, value, suffix, label, color }) => (
                  <li key={id}>
                    <div
                      className="flex items-end gap-x-6 font-familjenGrotesk text-6xl font-bold leading-none md:text-7xl xxl:text-[85px]"
                      style={{ color }}
                      data-module="countup"
                    >
                      <span
                        className="inline-block h-5 w-5 -translate-y-4 rounded-[50%]"
                        style={{ backgroundColor: color }}
                      ></span>
                      <span
                        className="start-number"
                        data-countup-number={value}
                      >
                        <Count number={value} text={suffix} />
                      </span> 
                    </div>
                    <span className="mt-2 inline-block translate-x-12 text-white">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
