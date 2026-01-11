 

import { useState } from "react";

interface PricingItem {
  title: string;
  monthly: string;
  yearly: string;
  description: string;
  features: string[];
}

const pricingData: PricingItem[] = [
  {
    title: "Web Design Package",
    monthly: "$299",
    yearly: "$3200",
    description:
      "Web design packages offered a range of services and features to create websites",
    features: [
      "Consultation & Discovery",
      "Responsive Design",
      "E-commerce Integration",
      "Custom Web Design",
      "Testing and Quality Assurance",
    ],
  },
  {
    title: "UX/UI Package",
    monthly: "$499",
    yearly: "$5000",
    description:
      "UX/UI package offered a set of services aimed at designing user-friendly UI/UX",
    features: [
      "Information Architecture",
      "Wireframing & Prototyping",
      "Usability Testing",
      "Visual Design",
      "User Interface (UI) Design",
    ],
  },
  {
    title: "Branding Package",
    monthly: "$299",
    yearly: "$3200",
    description:
      "Branding package typically includes a comprehensive set of brand's identity",
    features: [
      "Brand Guidelines",
      "Stationery & Website Design",
      "E-commerce Integration",
      "Social Media Assets",
      "Signage & Packaging Design",
    ],
  },
];

export default function PricingArea() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="section-pricing">
      <div className="section-space">
        <div className="container">
          {/* Section Title */}
          <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
            <h2 className="jos">
              Clients are always satisfied with{" "}
              <span>
                us
                <img
                  src="assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                  alt="shape"
                  width="74"
                  height="70"
                  className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]"
                />
              </span>
            </h2>
          </div>

          {/* Pricing Toggle */}
          <div className="my-[50px] flex flex-row items-center justify-center gap-6">
            <span className="font-bold">Billed Monthly</span>
            <label htmlFor="toggle" className="flex cursor-pointer items-center">
              <span className="relative inline-block h-[35px] w-[70px] rounded-[35px] border border-black">
                <input
                  id="toggle"
                  type="checkbox"
                  checked={isYearly}
                  onChange={() => setIsYearly(!isYearly)}
                  className="peer hidden"
                />
                <span className="toggle_dot absolute left-[5px] top-1/2 h-[25px] w-[25px] -translate-y-1/2 rounded-full bg-black transition-all duration-300 peer-checked:translate-x-[33px]"></span>
              </span>
            </label>
            <span className="font-bold">Billed Yearly</span>
          </div>

          {/* Pricing List */}
          <ul className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            {pricingData.map((item, idx) => (
              <li
                key={idx}
                className="jos flex flex-col rounded-[20px] border-2 border-black p-[30px]"
                data-jos_animation="flip-left"
              >
                {/* Price Top */}
                <div className="flex flex-col gap-y-6">
                  <h5>{item.title}</h5>
                  <div>
                    <span className="display-heading display-heading-2">
                      {isYearly ? item.yearly : item.monthly}
                    </span>
                  </div>
                  <p>{item.description}</p>
                </div>

                <div className="horizontal-line my-6 bg-[#E6E6E6]"></div>

                {/* Features */}
                <ul className="mb-[30px] flex flex-col gap-y-4 text-lg font-semibold leading-[1.42] lg:text-[21px]">
                  {item.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="relative pl-11 before:absolute before:left-0 before:top-0 before:h-[30px] before:w-[30px] before:bg-[url(../img/icons/icon-lime-lemon-round-check.svg)]"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="btn-outline-black mt-auto block text-center"
                >
                  Select the package
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
