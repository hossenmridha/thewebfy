import { Link } from "react-router-dom";

interface ServiceItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const service_data: ServiceItem[] = [
  {
    id: 1,
    icon: "assets/img/icons/th-1-service-icon-1.svg",
    title: "Shopify E-commerce Development",
    description:
      "Build custom online stores with theme customization, payment gateways, affiliate marketing setups, and app integrations for seamless shopping.",
    link: "/service-details",
    delay: 0,
  },
  {
    id: 2,
    icon: "assets/img/icons/th-1-service-icon-2.svg",
    title: "Graphic Design",
    description:
      "Creating visual elements such as logos, branding materials, page layout techniques, brochures, & other marketing collateral.",
    link: "/service-details",
    delay: 0.3,
  },
  {
    id: 3,
    icon: "assets/img/icons/th-1-service-icon-3.svg",
    title: "Web Design",
    description:
      "Designing and developing websites to ensure they are visually look and appealing, user-friendly, and functional your website.",
    link: "/service-details",
    delay: 0.6,
  },
  {
    id: 4,
    icon: "assets/img/icons/th-1-service-icon-4.svg",
    title: "Motion Graphics",
    description:
      "Creating animated graphics, videos for various purposes, including marketing and entertainment. To help sell a product or service.",
    link: "/service-details",
    delay: 0.9,
  },
  {
    id: 5,
    icon: "assets/img/icons/th-1-service-icon-5.svg",
    title: "Packaging Design",
    description:
      "Creating packaging solutions for products that not only protect them but also attract customers on store shelves.",
    link: "/service-details",
    delay: 1.2,
  },
  {
    id: 6,
    icon: "assets/img/icons/th-1-service-icon-6.svg",
    title: "Logo and Branding",
    description:
      "Creating or refreshing a company's logo and developing a cohesive visual identity, business cards, letterheads, & style guides.",
    link: "/service-details",
    delay: 1.5,
  },
  {
    id: 7,
    icon: "assets/img/icons/th-1-service-icon-6.svg",
    title: "Logo and Branding",
    description:
      "Creating or refreshing a company's logo and developing a cohesive visual identity, business cards, letterheads, & style guides.",
    link: "/service-details",
    delay: 1.8,
  },
  {
    id: 8,
    icon: "assets/img/icons/th-1-service-icon-7.svg",
    title: "Illustration",
    description:
      "Producing custom illustrations for editorial content, books, websites, marketing materials, magazines and more.",
    link: "/service-details",
    delay: 2.1,
  },
];


export default function SeviceArea() {
  return (

    <section className="section-service">
      {/* <!-- Section Background --> */}
      <div className="bg-colorIvory">
        {/* <!-- Section Space --> */}
        <div className="section-space">
          {/* <!-- Section Container --> */}
          <div className="container">
            {/* <!-- Section Block --> */}
            <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
              <h2 className="jos">
                We provide effective design
                <span>
                  solutions
                  <img src="assets/img/elemnts/shape-light-lime-5-arms-star.svg" alt="shape-light-lime-5-arms-star" width="74" height="70" className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]" />
                </span>
              </h2>
            </div>
            {/* <!-- Section Block --> */}

            {/* <!-- Service List --> */}
            <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
              {/* <!-- Service Item --> */}
              {service_data.map((item, i) => (
                <li key={i} className="jos group/team-item" data-jos_delay={item.delay}>
                  <div className="shadow-bg group h-full">
                    <div className="flex h-full flex-col items-start overflow-hidden rounded-[20px] border-2 border-black bg-colorIvory p-[30px] transition duration-300 group-hover:bg-colorLightLime">
                      <img src={item.icon} alt="th-1-service-icon-1" width="64" height="70" className="h-[70px] w-auto" />
                      <h4 className="mb-[15px] mt-[30px]">{item.title}</h4>
                      <p className="mb-7">
                        {item.description}
                      </p>
                      <Link to="/service-details" className="mt-auto inline-block translate-x-0 transition-all duration-300 group-hover:translate-x-5"><img src="assets/img/icons/icon-black-arrow-right.svg" alt="icon-black-arrow-right" width="34" height="28" /></Link>
                    </div>
                  </div>
                </li>
              ))}
              {/* <!-- Service Item --> */}
            </ul>
            {/* <!-- Service List --> */}
          </div>
          {/* <!-- Section Container --> */}
        </div>
        {/* <!-- Section Space --> */}
      </div>
      {/* <!-- Section Background --> */}
    </section>

  )
}
