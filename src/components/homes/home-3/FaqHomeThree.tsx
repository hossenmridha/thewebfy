 
import { useState } from 'react'
 
interface FaqItem {
  id: number
  title: string
  content: string
}
 
const faqData: FaqItem[] = [
  {
    id: 1,
    title: "Keyword Research and On-Page Optimization",
    content:
      "Our vision is describe your long-term vision or goals. We're committed to explain how your company plans.",
  },
  {
    id: 2,
    title: "Off-Page SEO and Link Building",
    content:
      "If your business has a physical presence, optimize your website for local search by claiming.",
  },
  {
    id: 3,
    title: "Keyword Research and On-Page Optimization",
    content:
      "Regularly monitor your website's performance using tools like Google Analytics & Google Search Console.",
  },
]

export default function FaqHomeThree() { 
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index))
  }

  return (
    <section className="section-content">
      <div className="section-space">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-x-20 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_1fr] xl:gap-x-28 xxl:gap-x-32">
            {/* Left Image Block */}
            <div
              className="jos relative order-2 mx-auto md:order-1 lg:mx-0"
              data-jos_animation="fade-left"
            >
              <img
                src="assets/img/images/th-3/content-img-3.png"
                alt="content-img-3"
                width={526}
                height={600}
                className="max-w-full"
              />
              <img
                src="assets/img/images/th-3/content-shape-3.png"
                alt="content-shape-3"
                width={234}
                height={234}
                className="absolute -left-32 bottom-20 hidden sm:inline-block"
              />
            </div>

            {/* Right Content Block */}
            <div className="jos order-1 md:order-2" data-jos_animation="fade-right">
              <div className="section-block">
                <h2 className="mb-6 font-familjenGrotesk text-4xl font-bold leading-none text-black md:text-5xl lg:text-6xl xl:text-7xl xxl:text-[85px]">
                  Our simplified & impactful steps
                </h2>
                <p className="section-para">
                  We will work to understand more about user's business and
                  goals & create a simple step-by-step SEO plan to help
                  them.
                </p>
              </div>

              {/* Accordion List */}
              <ul className="mt-[50px] flex flex-col gap-6">
                {faqData.map((faq, index) => (
                  <li
                    key={faq.id}
                    className={`accordion-item-style-3 accordion-item text-lg leading-[1.43] lg:text-[21px] ${activeIndex === index ? 'active' : ''
                      }`}
                  >
                    {/* Accordion Header */}
                    <div
                      className="accordion-header flex cursor-pointer gap-x-6 font-semibold text-black"
                      onClick={() => toggleFAQ(index)}
                    >
                      <div className="accordion-icon inline-flex h-[50px] w-[50px] items-center justify-center rounded-[50%] border border-black">
                        {faq.id}
                      </div>
                      <button className="flex-1 text-left" type="button">
                        {faq.title}
                      </button>
                    </div>

                    {/* Accordion Body */}
                    {activeIndex === index && (
                      <div className="accordion-body ml-[70px]">
                        {faq.content}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
