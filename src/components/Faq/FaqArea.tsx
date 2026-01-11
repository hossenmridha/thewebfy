 

import { useState } from "react";
import { Link } from "react-router-dom";

interface FaqItem {
  question: string;
  answer: string;
}

const faq_data: FaqItem[] = [
  {
    question: "What services does your design agency offer?",
    answer:
      "Clients often seek to understand the range of design services an agency provides, such as graphic design, web design, branding, and more. We offer a wide range of design services, including graphic design, web design, branding, UI/UX design, and more.",
  },
  {
    question: "What industries or types of clients do you typically work with?",
    answer:
      "Clients often seek to understand the range of design services an agency provides, such as graphic design, web design, branding, and more. We offer a wide range of design services, including graphic design, web design, branding, UI/UX design, and more.",
  },
  {
    question: "Can you provide examples of your previous work/portfolio?",
    answer:
      "Clients often seek to understand the range of design services an agency provides, such as graphic design, web design, branding, and more. We offer a wide range of design services, including graphic design, web design, branding, UI/UX design, and more.",
  },
  {
    question: "What is your design process like?",
    answer:
      "Clients often seek to understand the range of design services an agency provides, such as graphic design, web design, branding, and more. We offer a wide range of design services, including graphic design, web design, branding, UI/UX design, and more.",
  },
  {
    question: "How do you handle revisions and feedback during a project?",
    answer:
      "Clients often seek to understand the range of design services an agency provides, such as graphic design, web design, branding, and more. We offer a wide range of design services, including graphic design, web design, branding, UI/UX design, and more.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Clients often seek to understand the range of design services an agency provides, such as graphic design, web design, branding, and more. We offer a wide range of design services, including graphic design, web design, branding, UI/UX design, and more.",
  },
];

export default function FaqArea() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);  

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section-faq">
      <div className="section-space">
        <div className="container">
          {/* Section Title */}
          <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
            <h2 className="jos">
              These FAQs help {' '}
              <span>
                <img
                  src="assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                  alt="star"
                  width="74"
                  height="70"
                  className="relative inline-block h-auto w-8 md:w-10 lg:w-[57px]"
                />
              </span>
              clients learn about us
            </h2>
          </div>

          {/* Accordion List */}
          <ul className="jos flex flex-col gap-y-6">
            {faq_data.map((faq, idx) => (
              <li
                key={idx}
                className={`accordion-item-style-1 accordion-item ${activeIndex === idx ? "active" : ""
                  }`}
              >
                {/* Accordion Header */}
                <div className="accordion-header text-ColorBlack flex items-center justify-between gap-6 text-xl font-semibold">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex-1 text-left font-syne text-2xl font-bold leading-[1.4] md:text-3xl"
                  >
                    {faq.question}
                  </button>
                  <div className="accordion-icon">
                    <img
                      src="assets/img/icons/icon-black-arrow-less-down.svg"
                      alt="arrow"
                      className={`transition-transform duration-300 ${activeIndex === idx ? "rotate-90" : ""
                        }`}
                    />
                  </div>
                </div>
                {/* Accordion Body */}
                {activeIndex === idx && (
                  <div className="accordion-body max-w-[1162px] opacity-80">
                    <p className="pt-5">{faq.answer}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <div className="mt-10 flex justify-center md:mt-[60px] lg:mt-20">
            <Link
              to="/contact"
              className="btn-primary relative justify-start bg-black pr-20 text-white"
            >
              Still, have any questions? Contact us
              <span className="absolute right-[5px] inline-flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-colorLightLime">
                <img
                  src="assets/img/icons/icon-black-arrow-right.svg"
                  alt="arrow-right"
                  width="34"
                  height="28"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
