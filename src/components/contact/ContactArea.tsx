import { useEffect } from "react";

export default function ContactArea() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="section-contact-form">
      <div className="section-space">
        <div className="container">
          <div className="grid grid-cols-1 items-end gap-x-20 gap-y-10 lg:grid-cols-[1fr_minmax(0,420px)]">

            {/* LEFT: FORM + BOOKING */}
            <div className="jos" data-jos_animation="fade-left">

              {/* Heading */}
              <div className="section-block mb-10 md:mb-[60px] xl:mb-20">
                <h2>
                  Contact us for a{" "}
                  <span>
                    <img
                      src="assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                      alt="shape"
                      width="74"
                      height="70"
                      className="relative inline-block h-auto w-8 md:w-10 lg:w-[57px]"
                    />
                  </span>{" "}
                  personal experience
                </h2>
              </div>

             

              {/* Calendly Booking */}
              <div className="mt-12 rounded-[30px] border border-black p-[30px]">
                <h3 className="mb-6 text-xl font-bold">
                  Book a 30-minute call
                </h3>

                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/suportzuadul/30min"
                  style={{ minWidth: "320px", height: "700px" }}
                />
              </div>
            </div>

            {/* RIGHT: IMAGE */}
            <div
              className="jos hidden overflow-hidden rounded-[20px] border-2 border-black lg:block lg:border-[5px]"
              data-jos_animation="fade-right"
            >
              <img
                src="assets/img/images/th-1/contact-img.jpg"
                alt="contact"
                width="456"
                height="731"
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
