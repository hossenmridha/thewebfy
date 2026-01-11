

export default function ContactArea() {
  return (
    <section className="section-contact-form">
      {/* <!-- Section Space --> */}
      <div className="section-space">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Contact Form Area --> */}
          <div className="grid grid-cols-1 items-end gap-x-20 gap-y-10 lg:grid-cols-[1fr_minmax(0,420px)]">
            {/* <!-- Contact Form Left Block - Form--> */}
            <div className="jos" data-jos_animation="fade-left">
              {/* <!-- Section Block --> */}
              <div className="section-block mb-10 md:mb-[60px] xl:mb-20">
                <h2>
                  Contact us for a {' '}
                  <span>
                    <img src="assets/img/elemnts/shape-light-lime-5-arms-star.svg" alt="shape-light-lime-5-arms-star" width="74" height="70" className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]" />
                  </span>
                 {' '} personal experience
                </h2>
              </div>
              {/* <!-- Section Block --> */}

              {/* <!-- Contact Form --> */}
              <form action="https://formspree.io/f/{form_id}" method="post" className="flex flex-col gap-y-6 rounded-[30px] border border-black p-[30px]">
                {/* <!-- Form Group --> */}
                <div>
                  <label htmlFor="contact-name" className="mb-3 block pl-6 text-base font-bold">Your name</label>
                  <input type="text" name="contact-name" id="contact-name" className="w-full rounded-[50px] border border-black bg-colorIvory px-8 py-4 text-base font-bold" required />
                </div>
                {/* <!-- Form Group --> */}
                {/* <!-- Form Group --> */}
                <div>
                  <label htmlFor="contact-email" className="mb-3 block pl-6 text-base font-bold">Email Address</label>
                  <input type="email" name="contact-email" id="contact-email" className="w-full rounded-[50px] border border-black bg-colorIvory px-8 py-4 text-base font-bold" required />
                </div>
                {/* <!-- Form Group --> */}
                {/* <!-- Form Group --> */}
                <div>
                  <label htmlFor="contact-phone" className="mb-3 block pl-6 text-base font-bold">Phone No</label>
                  <input type="tel" name="contact-phone" id="contact-phone" className="w-full rounded-[50px] border border-black bg-colorIvory px-8 py-4 text-base font-bold" required />
                </div>
                {/* <!-- Form Group --> */}
                {/* <!-- Form Group --> */}
                <div>
                  <label htmlFor="contact-massage" className="mb-3 block pl-6 text-base font-bold">Write your message here...</label>
                  <textarea name="contact-massage" id="contact-massage" className="min-h-52 w-full rounded-[20px] border border-black bg-colorIvory px-8 py-4 text-base font-bold"></textarea>
                </div>
                {/* <!-- Form Group --> */}
                {/* <!-- Form Group --> */}
                <div>
                  <button type="submit" className="btn-black">
                    Send Message
                  </button>
                </div>
                {/* <!-- Form Group --> */}
              </form>
              {/* <!-- Contact Form --> */}
            </div>
            {/* <!-- Contact Form Left Block - Form--> */}

            {/* <!-- Contact Form Right Block - Image--> */}
            <div className="jos hidden overflow-hidden rounded-[20px] border-2 border-black lg:block lg:border-[5px]" data-jos_animation="fade-right">
              <img src="assets/img/images/th-1/contact-img.jpg" alt="contact-img" width="456" height="731" className="h-full w-full object-cover" />
            </div>
            {/* <!-- Contact Form Right Block - Image--> */}
          </div>
          {/* <!-- Contact Form Area --> */}
        </div>
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>
  )
}
