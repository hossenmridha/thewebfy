 
import { useState } from "react"; 

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faq_data: FaqItem[] = [
  {
    id: 1,
    question: "How can a social media marketing agency help my business?",
    answer:
      "Yes! We can help your business by developing tailored strategies to increase brand awareness, engage with your target audience, drive website traffic, generate leads, and ultimately boost sales and conversions.",
  },
  {
    id: 2,
    question: "Is social media advertising worth it?",
    answer:
      "Social media advertising can be a highly effective way to reach a targeted audience and drive specific actions such as website visits, lead generation, and product purchases.",
  },
  {
    id: 3,
    question: "Do I need to be active on all social media platforms?",
    answer:
      "We can help you identify which platforms are most relevant to your target audience and focus your efforts there. It's important to prioritize quality over quantity and maintain a consistent presence on the platforms.",
  },
  {
    id: 4,
    question: "How often should I post on social media?",
    answer:
      "The frequency of posting on social media depends on factors such as your audience preferences, the type of content you're sharing, and the platform you're using. Social media marketing agencies can help you.",
  },
  {
    id: 5,
    question: "How long does it take to see results from social media marketing efforts?",
    answer:
      "The timeline for seeing results from social media marketing efforts can vary depending on factors such as the competitiveness of your industry, the quality of your content, and the effectiveness of your strategies.",
  },
];




export default function FaqHomeNine() {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section-faq">
      <div className="section-space-bottom">
        <div className="container">
          {/* Section Title */}
          <div className="mx-auto mb-10 max-w-md text-center md:mb-[60px] md:max-w-xl lg:mb-20 lg:max-w-3xl">
            <h2 className="font-epilogue text-4xl leading-[1.05] md:text-5xl lg:text-6xl xl:text-[80px]">
              Freely ask us for more information
            </h2>
          </div>

          {/* Accordion List */}
          <ul className="flex flex-col divide-y divide-[#131313]/10">
            {faq_data.map((faq) => (
              <li
                key={faq.id}
                className={`accordion-item-style-6 accordion-item group rounded-[10px] p-[30px] ${
                  activeId === faq.id ? "active" : ""
                }`}
              >
                {/* Accordion Header */}
                <div className="accordion-header flex items-center justify-between gap-6">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="flex-1 text-left font-epilogue text-2xl font-semibold leading-[1.35] -tracking-[1px] xl:text-[28px]"
                  >
                    Q: {faq.question}
                  </button>
                  <div className="accordion-icon relative flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#131313]">
                    <span className="inline-block h-0.5 w-3 rounded-sm bg-[#FEF6E0]"></span>
                    <span
                      className={`absolute inline-block h-3 w-0.5 rounded-sm bg-[#FEF6E0] transition-transform ${
                        activeId === faq.id ? "rotate-90 opacity-0" : ""
                      }`}
                    ></span>
                  </div>
                </div>

                {/* Accordion Body */}
                {activeId === faq.id && (
                  <div className="accordion-body max-w-[1076px]">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
