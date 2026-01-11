 
import   { useState } from "react";

const faqData = [
  {
    question: "What is SEO?",
    answer:
      "SEO, or Search Engine Optimization, is a set of strategies and techniques aimed at improving a website's visibility in search engine results pages (SERPs) to increase organic (non-paid) traffic.",
  },
  {
    question: "Why is SEO important for my website?",
    answer:
      "SEO is essential because it helps your website rank higher in search results, making it more visible to potential visitors. This can lead to increased organic traffic, better brand exposure, and potential business growth.",
  },
  {
    question: "How can I improve my website's load speed for SEO?",
    answer:
      "You can enhance website speed by optimizing images, using content delivery networks (CDNs), reducing unnecessary plugins, and enabling browser caching, among other techniques.",
  },
  {
    question: "How can I track the success of my SEO efforts?",
    answer:
      "You can track SEO success by using tools like Google Analytics and Google Search Console. Monitor key metrics, such as organic traffic, keyword rankings, click-through rates, and conversion rates.",
  },
];

export default function FaqHomeEight() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // first FAQ open by default

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section-faq">
      <div className="section-space-bottom">
        <div className="container">
          {/* Section Title */}
          <div className="mx-auto mb-10 max-w-xl text-center text-[#000937] md:mb-[60px] lg:mb-20 lg:max-w-2xl xxl:max-w-4xl">
            <h2 className="jos font-outfit text-5xl font-medium leading-none lg:text-6xl lg:-tracking-[3px] xl:text-7xl xxl:text-[110px]">
              Most frequently asked questions
            </h2>
          </div>

          {/* FAQ List */}
          <ul className="jos flex flex-col divide-y divide-[#000937]">
            {faqData.map((faq, idx) => (
              <li
                key={idx}
                className={`accordion-item-style-4 accordion-item py-10 first-of-type:pt-0 last-of-type:pb-0 ${
                  activeIndex === idx ? "active" : ""
                }`}
              >
                {/* Accordion Header */}
                <div
                  className="accordion-header flex items-center justify-between gap-6 text-4xl text-[#000937] cursor-pointer"
                  onClick={() => toggleFAQ(idx)}
                >
                  <button className="flex-1 text-left font-outfit text-3xl font-medium leading-tight md:text-4xl lg:text-[50px]">
                    {faq.question}
                  </button>
                  <div
                    className={`accordion-icon transition-transform duration-300 ${
                      activeIndex === idx ? "rotate-180" : ""
                    }`}
                  >
                    <img
                      src="assets/img/icons/icon-black-cheveron-down.svg"
                      alt="icon-black-cheveron-down"
                    />
                  </div>
                </div>

                {/* Accordion Body */}
                <div
                  className={`accordion-body max-w-[1126px] opacity-80 overflow-hidden transition-all duration-300 ${
                    activeIndex === idx ? "max-h-96 mt-5" : "max-h-0 mt-0"
                  }`}
                >
                  <p className="para-lg">{faq.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
