 
import   { useState } from "react";

const faq_data = [
  {
    id: 1,
    title: "01/ Project idea",
    content:
      "The process starts with a detailed discussion with the client to understand their idea & goals.",
  },
  {
    id: 2,
    title: "02/ Brainstorming",
    content:
      "The process starts with a detailed discussion with the client to understand their idea & goals.",
  },
  {
    id: 3,
    title: "03/ Launch",
    content:
      "The process starts with a detailed discussion with the client to understand their idea & goals.",
  },
];

export default function ProcessHomeOne() {
  const [activeId, setActiveId] = useState(1); 

  const toggleAccordion = (id: any) => {
    setActiveId((prev) => (prev === id ? null : id)); 
  };

  return (
    <section className="section-process">
      <div className="section-space">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-y-10 lg:grid-cols-2 lg:gap-x-8 xl:grid-cols-[1fr_minmax(0,0.67fr)] xxl:gap-x-[72px]">
            {/* Left Section (Title and Description) */}
            <div className="section-block text-center lg:text-start">
              <h2 className="jos">
                Our
                <span>
                  high-quality
                  <img
                    src="assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                    alt="shape-light-lime-5-arms-star"
                    width="74"
                    height="70"
                    className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]"
                  />
                </span>
                working processes
              </h2>
              <div className="jos mt-6">
                <p className="section-para">
                  We focus at every stage on effective communication and
                  collaboration between the client and ensuring that the final
                  design meets the client's objectives and expectations.
                </p>

                <p className="section-para">
                  It is important to note that these are simplified steps, and
                  the actual work process may vary depending on the complexity
                  of the project.
                </p>
              </div>
            </div>

            {/* Right Section - FAQ Accordion */}
            <ul className="jos flex flex-col gap-y-6">
              {faq_data.map(({ id, title, content }) => (
                <li
                  key={id}
                  className={`accordion-item-style-1 accordion-item ${
                    activeId === id ? "active" : ""
                  }`}
                >
                  <div
                    className="accordion-header text-ColorBlack flex items-center justify-between gap-6 text-xl font-semibold cursor-pointer"
                    onClick={() => toggleAccordion(id)}
                  >
                    <button
                      className="flex-1 text-left font-syne text-2xl font-bold leading-[1.4] md:text-3xl"
                      aria-expanded={activeId === id}
                      aria-controls={`accordion-body-${id}`}
                      id={`accordion-header-${id}`}
                    >
                      {title}
                    </button>
                    <div className="accordion-icon">
                      <img
                        src="assets/img/icons/icon-black-arrow-less-down.svg"
                        alt="toggle icon"
                        className={activeId === id ? "rotate-180" : ""}
                      />
                    </div>
                  </div>
                  {activeId === id && (
                    <div
                      className="accordion-body max-w-[826px] opacity-80 pt-5"
                      id={`accordion-body-${id}`}
                      aria-labelledby={`accordion-header-${id}`}
                      role="region"
                    >
                      <p>{content}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
