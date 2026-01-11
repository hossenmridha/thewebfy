import Count from "../../../common/Count";

 
 

interface CounterItem {
  id: number;
  number: string;
  suffix?: string; // like +, k, /5
  label: string;
}

const counter_data: CounterItem[] = [
  {
    id: 1,
    number: "12",
    suffix: "+",
    label: "Years of experience",
  },
  {
    id: 2,
    number: "84",
    suffix: "k",
    label: "Active monthly users",
  },
  {
    id: 3,
    number: "60",
    suffix: "k+",
    label: "Project completed",
  },
  {
    id: 4,
    number: "4.8",
    suffix: "/5",
    label: "Total success rate",
  },
];

export default function CounterHomeFive() {
  return (
    <div className="section-counter">
      <div className="section-space-bottom pt-20">
        <div className="container">
          <ul className="grid grid-cols-1 flex-wrap justify-between gap-y-10 md:grid-cols-2 lg:flex">
            {counter_data.map((item) => (
              <li
                key={item.id}
                className="relative text-center after:absolute after:top-1/2 after:hidden after:h-10 after:w-0.5 after:-translate-y-1/2 after:bg-[#FBD718] after:last-of-type:hidden lg:text-left lg:after:left-[125%] xl:after:left-[150%]"
              >
                <div
                  className="font-libreBaskerville text-4xl font-bold !leading-[1.14] -tracking-[0.5px] text-[#073D30] md:text-5xl lg:text-6xl xxl:text-[70px]"
                  data-module="countup"
                >
                  <span
                    className="start-number"
                    data-countup-number={item.number}
                  > 
                    <Count number={parseInt(item.number)} />
                  </span>
                  {item.suffix}
                </div>
                <span className="inline-block text-[#0C0C0C]">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
