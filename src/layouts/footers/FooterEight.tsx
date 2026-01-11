
import { Link } from "react-router-dom"
 

export default function FooterEight() {
  return (
    <footer className="section-footer">
      <div className="relative z-10 bg-[#001AA5] text-[#FCF9F0]">
        {/* <!-- Footer Top --> */}
        <div className="section-space">
          {/* <!-- Section Container --> */}
          <div className="container">
            {/* <!-- Footer Area --> */}
            <div className="grid grid-cols-1 gap-[60px] lg:grid-cols-[1fr_minmax(0,0.7fr)] xxl:grid-cols-[1fr_minmax(0,0.6fr)]">
              {/* <!-- Footer Block Left --> */}
              <div>
                {/* <!-- Section Block --> */}
                <div className="mb-10 md:mb-[60px] lg:mb-20">
                  <h2 className="mb-6 font-outfit text-5xl font-medium leading-none lg:text-6xl lg:-tracking-[3px] xl:text-7xl xxl:text-[110px]">
                    Do you have a project in mind?
                  </h2>
                  <p className="text=xl font-outfit font-medium lg:text-2xl">
                    Join us in shaping a more connected, innovative future
                    through technology. We're partners in your digital
                    journey.
                  </p>
                </div>
                {/* <!-- Section Block --> */}

                {/* <!-- Info Links --> */}
                <div className="flex flex-col gap-y-4 font-outfit text-2xl font-medium">
                  <a href="tel:+0882346849" className="flex items-center gap-3 hover:underline">
                    <img src="assets/img/icons/icon-white-phone.svg" alt="icon-white-phone" width="30" height="30" />
                    <span className="flex-1"> +088-234-6849 </span>
                  </a>
                  <a href="mail:example@gmail.com" className="flex items-center gap-3 hover:underline">
                    <img src="assets/img/icons/icon-white-mail.svg" alt="icon-white-mail" width="34" height="34" />
                    <span className="flex-1">example@gmail.com </span>
                  </a>
                  <address className="flex items-center gap-3 not-italic">
                    <img src="assets/img/icons/icon-white-location.svg" alt="icon-white-location-marker" width="30" height="30" />
                    <span className="flex-1">Howard Street, 13125 USA</span>
                  </address>
                </div>
                {/* <!-- Info Links --> */}
              </div>
              {/* <!-- Footer Block Left --> */}

              {/* <!-- Footer Block Right --> */}
              <div>
                <span className="mb-8 block font-outfit text-2xl font-medium">Send us a message</span>
                {/* <!-- Footer Form --> */}
                <form action="#" method="post" className="font-base flex flex-col gap-y-6 font-bold outline-none">
                  <input type="text" placeholder="Your Name" className="w-full rounded border-2 bg-[#001AA5] px-6 py-[18px] outline-none placeholder:text-[#FCF9F0]" />
                  <input type="email" placeholder="Your Email Address" className="w-full rounded border-2 bg-[#001AA5] px-6 py-[18px] outline-none placeholder:text-[#FCF9F0]" required />
                  <input type="tel" placeholder="Your Phone Number" className="w-full rounded border-2 bg-[#001AA5] px-6 py-[18px] outline-none placeholder:text-[#FCF9F0]" required />
                  <textarea placeholder="Write Your Message Here..." className="min-h-[150px] w-full rounded border-2 bg-[#001AA5] px-6 py-[18px] outline-none placeholder:text-[#FCF9F0]" required></textarea>
                  <button className="group flex rounded border-2 border-[#FCF9F0] bg-[#FCF9F0] px-6 py-4 text-base font-bold text-[#001AA5] lg:px-8 xl:px-[42px]">
                    <span className="relative flex items-center justify-center overflow-hidden">
                      <span className="translate-y-0 transition-all duration-300 group-hover:-translate-y-full">Send Message</span>
                      <span className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0">Send Message</span>
                    </span>
                  </button>
                </form>
                {/* <!-- Footer Form --> */}
              </div>
              {/* <!-- Footer Block Right --> */}
            </div>
            {/* <!-- Footer Area --> */}
          </div>
          {/* <!-- Section Container --> */}
        </div>
        {/* <!-- Footer Top --> */}

        {/* <!-- Horizontal Line --> */}
        <div className="horizontal-line bg-[#FCF9F0]/10"></div>
        {/* <!-- Horizontal Line --> */}

        {/* <!-- Footer Bottom --> */}
        <div className="py-[35px]">
          {/* <!-- Section Container --> */}
          <div className="container">
            <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-4 lg:justify-between">
              <Link to="/">
                <img src="assets/img/logo-buttery-white.svg" alt="logo-buttery-white" width="121" height="24" />
              </Link>

              {/* <!-- Copyright Text --> */}
              <div className="text-[#999999]">
                &copy; Copyright {new Date().getFullYear()}, All Rights Reserved by Mthemeus
              </div>
              {/* <!-- Copyright Text --> */}
            </div>
          </div>
          {/* <!-- Section Container --> */}
        </div>
        {/* <!-- Footer Bottom --> */}
      </div>
    </footer>
  )
}
