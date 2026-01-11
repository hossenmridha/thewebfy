import { Link } from "react-router-dom";


export default function PricingFaqArea() {
  return (
    <section className="section-faq">
      {/* <!-- Section Space --> */}
      <div className="section-space">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Process Area --> */}
          <div className="grid grid-cols-1 items-center gap-x-6 gap-y-10 lg:grid-cols-2">
            {/* <!-- Process Area Left Block - Section Block --> */}
            <div className="section-block text-center lg:text-start">
              <h2 className="jos">
                Read our FAQ {' '}
                <span>
                  <img src="assets/img/elemnts/shape-light-lime-5-arms-star.svg" alt="shape-light-lime-5-arms-star" width="74" height="70" className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]" />
                </span>
                for clarification
              </h2>
              <div className="jos mb-16 mt-6">
                <p className="section-para">
                  We understand that you considering our services, that's
                  why we’ve curated a collection of frequently asked
                  questions.
                </p>
              </div>
              <Link to="/contact" className="btn-primary relative justify-start bg-black pr-20 text-white">
                Contact us
                <span className="absolute right-[5px] inline-flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-colorLightLime"><img src="assets/img/icons/icon-black-arrow-right.svg" alt="icon-black-arrow-right" width="34" height="28" /></span></Link>
            </div>
            {/* <!-- Process Area Left Block - Section Block --> */}

            {/* <!-- FAQ List --> */}
            <ul className="flex flex-col gap-y-10">
              {/* <!-- FAQ Item --> */}
              <li className="jos flex flex-col gap-y-4">
                {/* <!-- FAQ Header Block --> */}
                <h4 className="relative pl-10 before:absolute before:left-0 before:top-1 before:h-[30px] before:w-[30px] before:bg-[url(../img/icons/icon-lightlime-question.svg)]">
                  Can I buy multiple plans?
                </h4>
                {/* <!-- FAQ Header Block --> */}
                {/* <!-- FAQ Body --> */}
                <div className="ml-10 text-[#0C0C0C]">
                  <p>
                    Yes, you can try us for free for 30 days. Our friendly
                    team will work with you to get you up and running as
                    soon as possible.
                  </p>
                </div>
                {/* <!-- FAQ Body --> */}
              </li>
              {/* <!-- FAQ Item --> */}
              {/* <!-- FAQ Item --> */}
              <li className="jos flex flex-col gap-y-4">
                {/* <!-- FAQ Header Block --> */}
                <h4 className="relative pl-10 before:absolute before:left-0 before:top-1 before:h-[30px] before:w-[30px] before:bg-[url(../img/icons/icon-lightlime-question.svg)]">
                  What is the cancelation policy?
                </h4>
                {/* <!-- FAQ Header Block --> */}
                {/* <!-- FAQ Body --> */}
                <div className="ml-10 text-[#0C0C0C]">
                  <p>
                    The cancellation policy refers to the rules and
                    guidelines established by a business regarding the
                    cancellation of services, products.
                  </p>
                </div>
                {/* <!-- FAQ Body --> */}
              </li>
              {/* <!-- FAQ Item --> */}
              {/* <!-- FAQ Item --> */}
              <li className="jos flex flex-col gap-y-4">
                {/* <!-- FAQ Header Block --> */}
                <h4 className="relative pl-10 before:absolute before:left-0 before:top-1 before:h-[30px] before:w-[30px] before:bg-[url(../img/icons/icon-lightlime-question.svg)]">
                  How much does design work cost?
                </h4>
                {/* <!-- FAQ Header Block --> */}
                {/* <!-- FAQ Body --> */}
                <div className="ml-10 text-[#0C0C0C]">
                  <p>
                    The cost of our design services varies depending on the
                    scope of the project. We provide customized quotes after
                    discussing requirements.
                  </p>
                </div>
                {/* <!-- FAQ Body --> */}
              </li>
              {/* <!-- FAQ Item --> */}
            </ul>
            {/* <!-- FAQ List --> */}
          </div>
          {/* <!-- Process Area --> */}
        </div>
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>
  )
}
