 
import { useState } from "react"; 

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faq_data: FaqItem[] = [
  {
    id: 1,
    question: "What is vision for the future?",
    answer:
      "A digital marketing agency is a professional organization that specializes in providing online marketing services to businesses and individuals to promote their products.",
  },
  {
    id: 2,
    question: "Why do I need a digital marketing agency?",
    answer:
      "Digital marketing agencies have expertise in various online channels and strategies, helping businesses reach their target audience, increase online visibility.",
  },
  {
    id: 3,
    question: "What is the cost of digital marketing services?",
    answer:
      "The cost of digital marketing services varies widely depending on the scope of work and pricing structure. It's essential to discuss your budget and expectations.",
  },
  {
    id: 4,
    question: "What is our work process?",
    answer:
      "Our work process typically involves several key steps to ensure the successful planning, execution, and management of digital marketing campaigns.",
  },
  {
    id: 5,
    question: "How to increase social media presence?",
    answer:
      "Increasing your social media presence requires a strategic approach and consistent effort. Some effective strategies can help you boost your social media presence.",
  },
];




export default function FaqHomeFive() {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="section-faq">
      <div className="section-space">
        <div className="container">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-[60px] lg:mb-20">
            <h2 className="jos font-libreBaskerville text-4xl !leading-[1.14] -tracking-[0.5px] text-[#221F1A] md:text-5xl lg:text-6xl xxl:text-[70px]">
              Get answers to all your questions
            </h2>
          </div>

          {/* Accordion List */}
          <ul className="flex flex-col gap-6">
            {faq_data.map((faq: FaqItem) => (
              <li
                key={faq.id}
                className={`accordion-item-style-5 accordion-item group rounded-[10px] p-[30px] ${
                  activeId === faq.id ? "active" : ""
                }`}
              >
                {/* Header */}
                <div className="accordion-header flex items-center justify-between gap-6 text-xl font-semibold">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="flex-1 text-left font-libreBaskerville text-2xl font-bold leading-[1.4] xl:text-3xl"
                  >
                    {faq.question}
                  </button>
                  <div className="accordion-icon relative flex h-[35px] w-[35px] items-center justify-center rounded-[50%] border border-[#073D30]">
                    <span className="inline-block h-0.5 w-3 rounded-sm bg-[#073D30]" />
                    <span
                      className={`absolute inline-block h-3 w-0.5 rounded-sm bg-[#073D30] transition-transform duration-300 ${
                        activeId === faq.id ? "rotate-90 opacity-0" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Body */}
                {activeId === faq.id && (
                  <div className="accordion-body max-w-[720px] opacity-80">
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
