  
import   { useState } from "react"; 
import { faq_data_two } from "../../../data/faq_data_two";

export default function FaqHomeTwo() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); 

  const toggleFAQ = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="section-faq">
      <div className="section-space">
        <div className="container">
          <div className="section-block mx-auto mb-10 max-w-3xl md:mb-[60px] lg:mb-20">
            <h2 className="jos text-center font-clashGrotesk text-4xl font-semibold leading-[1.075] text-colorGondola sm:text-5xl md:text-6xl lg:text-7xl xxl:text-[80px]">
              Ask us if you have doubts or questions
            </h2>
          </div>

          <div className="jos grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[0, 1].map((col) => (
              <ul key={col} className="flex flex-col gap-6">
                {faq_data_two
                  .filter((_, i) => i % 2 === col)
                  .map((faq, index) => {
                    const isActive = activeIndex === faq.id;
                    return (
                      <li
                        key={index}
                        className={`accordion-item-style-2 accordion-item rounded-[5px] bg-colorGondola/5 p-[30px] ${
                          isActive ? "active" : ""
                        }`}
                      >
                        <div
                          className="accordion-header text-ColorBlack flex items-center justify-between gap-6 text-xl font-semibold cursor-pointer"
                          onClick={() => toggleFAQ(faq.id)}
                        >
                          <button className="flex-1 text-left font-syne text-2xl font-bold leading-[1.4] xl:text-3xl">
                            {faq.question}
                          </button>
                          <div className="accordion-icon relative flex items-center justify-center">
                            <span className="inline-block h-1 w-6 bg-colorGondola"></span>
                            {!isActive && (
                              <span className="absolute inline-block h-6 w-1 bg-colorGondola"></span>
                            )}
                          </div>
                        </div>
                        {isActive && (
                          <div className="accordion-body max-w-[496px] opacity-80">
                            <p className="pt-4">{faq.answer}</p>
                          </div>
                        )}
                      </li>
                    );
                  })}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
