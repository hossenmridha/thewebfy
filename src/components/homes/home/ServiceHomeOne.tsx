 
import { Link } from "react-router-dom"

 

const services = [
  {
    icon: 'assets/img/icons/th-1-service-icon-1.svg',
    alt: 'th-1-service-icon-1',
    width: 64,
    height: 70,
    title: 'Shopify E-commerce Development',
    description:
      'Build custom online stores with theme customization, payment gateways, affiliate marketing setups, and app integrations for seamless shopping.',
    delay: 0,
  },
  {
    icon: 'assets/img/icons/th-1-service-icon-2.svg',
    alt: 'th-1-service-icon-2',
    width: 77,
    height: 70,
    title: 'WordPress Web Development',
    description:
      'Full-site builds using themes/plugins, custom PHP/HTML/CSS, WooCommerce stores, SEO setups, and maintenance for blogs, portfolios, or enterprise sites.',
    delay: 0.3,
  },
  {
    icon: 'assets/img/icons/th-1-service-icon-3.svg',
    alt: 'th-1-service-icon-3',
    width: 75,
    height: 70,
    title: 'Website Maintenance & Support',
    description:
      'Ongoing updates, security audits, performance tuning, and client onboarding for sustained online presence.',
    delay: 0.6,
  },
  {
    icon: 'assets/img/icons/th-1-service-icon-4.svg',
    alt: 'th-1-service-icon-4',
    width: 55,
    height: 70,
    title: 'Website Redesign',
    description:
      'TheWebFy now includes Website Redesign as a core service, empowering clients to refresh outdated sites into modern, high-converting platforms using Shopify, WordPress, or custom builds.',
    delay: 0.9,
  },
]

export default function ServiceHomeOne() {
  return (
    <section className="section-service">
      {/* Section Background */}
      <div className="bg-colorIvory">
        {/* Section Space */}
        <div className="section-space">
          {/* Section Container */}
          <div className="container">
            {/* Section Block */}
            <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
              <h2 className="jos">
                Our Services {' '}
                <span>
                 
                  <img
                    src="assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                    alt="shape-light-lime-5-arms-star"
                    width="74"
                    height="70"
                    className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]"
                  />
                </span>
              </h2>
            </div>
 
            <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="jos"
                  data-jos_delay={service.delay}
                >
                  <div className="shadow-bg group h-full">
                    <div className="flex h-full flex-col items-start overflow-hidden rounded-[20px] border-2 border-black bg-colorIvory p-[30px] transition duration-300 group-hover:bg-colorLightLime">
                      <img
                        src={service.icon}
                        alt={service.alt}
                        width={service.width}
                        height={service.height}
                        className="h-[70px] w-auto"
                      />
                      <h4 className="mb-[15px] mt-[30px]">{service.title}</h4>
                      <p className="mb-7">{service.description}</p>
                      <Link
                        to="/service-details"
                        className="mt-auto inline-block translate-x-0 transition-all duration-300 group-hover:translate-x-5"
                      >
                        <img
                          src="assets/img/icons/icon-black-arrow-right.svg"
                          alt="icon-black-arrow-right"
                          width="34"
                          height="28"
                        />
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


