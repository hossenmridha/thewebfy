
import { Link } from "react-router-dom" 

export default function PricingHomeTwo() {
  return (
    <>
      <section className="section-pricing">
        {/* <!-- Section Space --> */}
        <div className="section-space">
          {/* <!-- Section Container --> */}
          <div className="container">
            {/* <!-- Section Block --> */}
            <div className="section-block mx-auto mb-10 max-w-3xl md:mb-[60px] lg:mb-20">
              <h2 className="jos text-center font-clashGrotesk text-4xl font-semibold leading-[1.075] text-colorGondola sm:text-5xl md:text-6xl lg:text-7xl xxl:text-[80px]">
                Simple pricing plans that save you money
              </h2>
            </div>
            {/* <!-- Section Block --> */}

            {/* <!-- Pricing List --> */}
            <ul className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {/* <!-- Pricing Item --> */}
              <li className="jos flex flex-col rounded-[5px] border-2 border-colorGondola p-[30px]" data-jos_animation="flip-left">
                {/* <!-- Image Block --> */}
                <div className="mb-4">
                  <img src="assets/img/images/th-2/pricing-img-1.png" alt="pricing-img-1" width="110" height="96" />
                </div>
                {/* <!-- Image Block --> */}
                {/* <!-- Top Text Block --> */}
                <div className="text-colorGondola">
                  <h4 className="mb-6 font-clashGrotesk font-semibold">Basic</h4>
                  <span className="font-clashGrotesk text-5xl font-semibold lg:text-6xl xl:text-[80px]">$19.00</span>
                </div>
                {/* <!-- Top Text Block --> */}
                {/* <!-- Horizontal Separator --> */}
                <div className="horizontal-line my-[30px] bg-colorGondola"></div>
                {/* <!-- Horizontal Separator --> */}

                {/* <!-- Pricing Info List --> */}
                <ul className="mb-14 flex list-inside list-image-[url(../img/icons/icon-black-thumb-up.svg)] flex-col gap-y-5 text-lg font-semibold leading-[1.43] lg:text-[21px]">
                  <li>90 mins session duration</li>
                  <li>Multiple modes of networking</li>
                  <li>Live event engagement</li>
                  <li>Pre-set emails</li>
                  <li>Real-time data & basic reports</li>
                </ul>
                {/* <!-- Pricing Info List --> */}

                <Link to="/pricing" className="btn-outline-black-2 mt-auto block text-center">Purchase It Now</Link>
              </li>
              {/* <!-- Pricing Item --> */}
              {/* <!-- Pricing Item --> */}
              <li className="jos flex flex-col rounded-[5px] border-2 border-colorGondola p-[30px]" data-jos_animation="flip-left">
                {/* <!-- Image Block --> */}
                <div className="mb-4">
                  <img src="assets/img/images/th-2/pricing-img-2.png" alt="pricing-img-2" width="105" height="96" />
                </div>
                {/* <!-- Image Block --> */}
                {/* <!-- Top Text Block --> */}
                <div className="text-colorGondola">
                  <h4 className="mb-6 font-clashGrotesk font-semibold">
                    Startup
                  </h4>
                  <span className="font-clashGrotesk text-5xl font-semibold lg:text-6xl xl:text-[80px]">$29.99</span>
                </div>
                {/* <!-- Top Text Block --> */}
                {/* <!-- Horizontal Separator --> */}
                <div className="horizontal-line my-[30px] bg-colorGondola"></div>
                {/* <!-- Horizontal Separator --> */}

                {/* <!-- Pricing Info List --> */}
                <ul className="leadin[1.43]ne mb-14 flex list-inside list-image-[url(../img/icons/icon-black-thumb-up.svg)] flex-col gap-y-5 text-lg font-semibold lg:text-[21px]">
                  <li>Advanced networking modes</li>
                  <li>Unlimited session duration</li>
                  <li>Custom event branding</li>
                  <li>Advanced analytics report</li>
                  <li>Leaderboard & gamification</li>
                </ul>
                {/* <!-- Pricing Info List --> */}

                <Link to="/pricing" className="btn-orange mt-auto block text-center">Purchase It Now</Link>
              </li>
              {/* <!-- Pricing Item --> */}
              {/* <!-- Pricing Item --> */}
              <li className="jos flex flex-col rounded-[5px] border-2 border-colorGondola p-[30px]" data-jos_animation="flip-left">
                {/* <!-- Image Block --> */}
                <div className="mb-4">
                  <img src="assets/img/images/th-2/pricing-img-3.png" alt="pricing-img-3" width="142" height="96" />
                </div>
                {/* <!-- Image Block --> */}
                {/* <!-- Top Text Block --> */}
                <div className="text-colorGondola">
                  <h4 className="mb-6 font-clashGrotesk font-semibold">
                    Enterprise
                  </h4>
                  <span className="font-clashGrotesk text-5xl font-semibold lg:text-6xl xl:text-[80px]">$49.99</span>
                </div>
                {/* <!-- Top Text Block --> */}
                {/* <!-- Horizontal Separator --> */}
                <div className="horizontal-line my-[30px] bg-colorGondola"></div>
                {/* <!-- Horizontal Separator --> */}

                {/* <!-- Pricing Info List --> */}
                <ul className="mb-14 flex list-inside list-image-[url(../img/icons/icon-black-thumb-up.svg)] flex-col gap-y-5 text-lg font-semibold leading-[1.43] lg:text-[21px]">
                  <li>Advanced networking modes</li>
                  <li>Dedicated account manager</li>
                  <li>3D event experiences</li>
                  <li>Mobile app & website create</li>
                  <li>Personalization & branding</li>
                </ul>
                {/* <!-- Pricing Info List --> */}

                <Link to="/pricing" className="btn-outline-black-2 mt-auto block text-center">Purchase It Now</Link>
              </li>
              {/* <!-- Pricing Item --> */}
            </ul>
            {/* <!-- Pricing List --> */}
          </div>
          {/* <!-- Section Container --> */}
        </div>
        {/* <!-- Section Space --> */}
      </section>
    </>
  )
}
