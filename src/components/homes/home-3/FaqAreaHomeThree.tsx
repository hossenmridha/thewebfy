 
import  { useState } from 'react'

interface FaqItem {
  id: number
  question: string
  answer: string
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What is SEO?",
    answer:
      "SEO, or Search Engine Optimization, is a set of strategies and techniques aimed at improving a website's visibility in search engine results pages (SERPs) to increase organic (non-paid) traffic.",
  },
  {
    id: 2,
    question: "Why is SEO important for my website?",
    answer:
      "SEO is essential because it helps your website rank higher in search results, making it more visible to potential visitors. This can lead to increased organic traffic, better brand exposure, and potential business growth.",
  },
  {
    id: 3,
    question: "How can I improve my website's load speed for SEO?",
    answer:
      "You can enhance website speed by optimizing images, using content delivery networks (CDNs), reducing unnecessary plugins, and enabling browser caching, among other techniques.",
  },
  {
    id: 4,
    question: "How can I track the success of my SEO efforts?",
    answer:
      "You can track SEO success by using tools like Google Analytics and Google Search Console. Monitor key metrics, such as organic traffic, keyword rankings, click-through rates, and conversion rates.",
  },
]

export default function FaqAreaHomeThree() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index))
  }

  return (
    <section className="section-faq">
      <div className="section-space-bottom">
        <div className="container">
          <div className="section-block mx-auto mb-10 max-w-4xl md:mb-[60px] lg:mb-20">
            <h2 className="jos text-center font-familjenGrotesk text-4xl font-bold leading-none md:text-5xl lg:text-6xl xl:text-7xl xxl:text-[85px]">
              We make sure to answer all questions
            </h2>
          </div>

          <ul className="jos flex flex-col divide-y divide-black">
            {faqData.map((faq, index) => (
              <li
                key={faq.id}
                className={`accordion-item-style-4 accordion-item py-[30px] first-of-type:pt-0 last-of-type:pb-0 ${activeIndex === index ? 'active' : ''
                  }`}
              >
                <div
                  className="accordion-header flex items-center justify-between gap-6 text-4xl text-black cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <button className="flex-1 text-left font-syne text-2xl font-bold leading-[1.4] lg:text-3xl">
                    {faq.question}
                  </button>
                  <div className="accordion-icon">
                    <img
                      src="assets/img/icons/icon-black-cheveron-down.svg"
                      alt="icon-black-chevron-down"
                      className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''
                        }`}
                    />
                  </div>
                </div>

                {activeIndex === index && (
                  <div className="accordion-body max-w-[1126px] opacity-80">
                    <p className="para-lg pt-5">{faq.answer}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
