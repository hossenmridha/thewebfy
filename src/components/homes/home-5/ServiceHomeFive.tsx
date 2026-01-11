import { Link } from "react-router-dom";
 

interface ServiceItem {
  id: number;
  icon: string;
  title: string;
  desc: string;
  link: string;
}

const service_data: ServiceItem[] = [
  {
    id: 1,
    icon: "assets/img/icons/th-5-service-icon-1.svg",
    title: "Online Advertising:",
    desc: "This includes pay-per-click (PPC) advertising on platforms like Google Ads and social media.",
    link: "/service-details",
  },
  {
    id: 2,
    icon: "assets/img/icons/th-5-service-icon-2.svg",
    title: "SEO Services:",
    desc: "Driving organic (non-paid) traffic. This involves on-page and off-page SEO techniques.",
    link: "/service-details",
  },
  {
    id: 3,
    icon: "assets/img/icons/th-5-service-icon-3.svg",
    title: "Content Marketing:",
    desc: "Blog posts, articles, videos, and infographics, to engage and educate all target audiences.",
    link: "/service-details",
  },
  {
    id: 4,
    icon: "assets/img/icons/th-5-service-icon-4.svg",
    title: "Email Marketing:",
    desc: "Crafting & executing email campaigns to nurture leads, retain customers, and promote.",
    link: "/service-details",
  },
  {
    id: 5,
    icon: "assets/img/icons/th-5-service-icon-5.svg",
    title: "Data Analysis:",
    desc: "Performance to make data-driven decisions and refine strategies for better results.",
    link: "/service-details",
  },
];

export default function ServiceHomeFive() {
  return (
    <section className="section-service">
      <div className="mx-5 rounded-[20px] bg-[#073D30] xxl:mx-[50px]">
        <div className="section-space">
          <div className="container">
            {/* Section Title */}
            <div className="mx-auto mb-10 max-w-3xl md:mb-[60px] lg:mb-20">
              <h2 className="jos font-libreBaskerville text-4xl !leading-[1.14] -tracking-[0.5px] text-[#FFFCF2] md:text-5xl lg:text-6xl xxl:text-[70px]">
                Exceptional digital marketing services
              </h2>
            </div>

            {/* Service List */}
            <ul>
              {service_data.map((item) => (
                <li
                  key={item.id}
                  className="jos flex flex-col items-start gap-x-10 gap-y-6 rounded-[20px] p-[30px] text-[#FFFCF2] transition-all duration-300 hover:bg-[#FFFCF2]/10 lg:grid lg:grid-cols-[0.45fr_1fr_auto] lg:items-center xl:grid-cols-[0.45fr_0.5fr_auto]"
                >
                  <div className="flex items-center gap-x-6 lg:gap-x-10">
                    <div className="h-auto w-12 xl:w-[70px]">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="h-auto w-full"
                      />
                    </div>
                    <Link
                      to={item.link}
                      className="flex-1 font-libreBaskerville text-2xl font-bold leading-[1.4] -tracking-[0.5px] lg:text-[30px]"
                    >
                      {item.title}
                    </Link>
                  </div>

                  <p className="flex-1">{item.desc}</p>

                  <div className="flex justify-end">
                    <Link
                      to={item.link}
                      className="group inline-flex justify-center rounded-[50px] border-2 border-[#FFFCF2] bg-[#073D30] px-8 py-3 text-center text-base font-bold text-[#FFFCF2] hover:border-[#FBD718] hover:bg-[#FBD718] hover:text-[#073D30] lg:px-11 lg:py-4"
                    >
                      <div className="relative flex items-center justify-center overflow-hidden">
                        <span className="translate-y-0 transition-all duration-300 group-hover:-translate-y-full">
                          Choose Service
                        </span>
                        <span className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0">
                          Choose Service
                        </span>
                      </div>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
