
import { Link } from "react-router-dom";
import { useState } from 'react';
import VideoPopup from "../../../modals/VideoPopup";


export default function HeroHomeFour() {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <section className="section-hero">
        <div className="pt-[100px]">
          <div className="relative z-10 mx-5 xxl:mx-[50px]">
            {/* <!-- Section Background --> */}
            <div className="rounded-[20px] bg-[url(../img/images/th-4/hero-img.jpg)] bg-cover bg-center">
              {/* <!-- Hero Space --> */}
              <div className="section-space">
                {/* <!-- Section Container --> */}
                <div className="container">
                  {/* <!-- Hero Area --> */}
                  <div className="grid grid-cols-1 items-end gap-x-28 gap-y-10 lg:grid-cols-[1fr_auto] xl:gap-x-52">
                    {/* <!-- Hero Left Block --> */}
                    <div>
                      <span className="block text-xl font-semibold text-[#FF8064] lg:text-2xl">
                        Your trusted business consultants
                      </span>
                      <h1 className="mb-6 mt-5 font-arimo text-5xl font-bold leading-none -tracking-[1px] text-[#FFF7EA] md:text-6xl lg:text-7xl xl:text-8xl xxl:text-[120px]">
                        Transforming your ideas into
                        <br />
                        <span className="bg-[url(../img/elemnts/th-4-hero-highlight-mark.svg)] bg-cover bg-no-repeat">experiences</span>
                      </h1>
                      <p className="para-lg max-w-3xl text-[#FFF7EA]">
                        We're dedicated to helping businesses grow and
                        succeed. With years of industry experience and a
                        passion for problem-solving, we offer top-level
                        consulting services tailored to your unique needs.
                      </p>

                      <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 lg:mt-12 xl:mt-[60px]">
                        <Link to="/contact" className="group inline-flex rounded-[50px] border-2 border-[#0000FF] bg-[#0000FF] px-5 py-3 text-base font-bold text-white lg:px-6 lg:py-4">
                          <div className="relative flex items-center justify-center overflow-hidden">
                            <span className="translate-y-0 transition-all duration-300 group-hover:-translate-y-full">Schedule a meeting</span>
                            <span className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0">Schedule a meeting</span>
                          </div>
                        </Link>
                        <Link to="/portfolio-1" className="group inline-flex rounded-[50px] border-2 border-[#FFF7EA] bg-transparent px-5 py-3 text-base font-bold text-white lg:px-6 lg:py-4">
                          <div className="relative flex items-center justify-center overflow-hidden">
                            <span className="translate-y-0 transition-all duration-300 group-hover:-translate-y-full">View all projects</span>
                            <span className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0">View all projects</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    {/* <!-- Hero Left Block --> */}
                    {/* <!-- Hero Right Block --> */}
                    <div className="flex justify-center lg:justify-start">
                      <a data-fslightbox="gallery"
                        onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }}
                        aria-label="video-play" className="inline-flex h-32 w-32 items-center justify-center rounded-[50%] md:h-40 md:w-40 lg:h-[180px] lg:w-[180px]">
                        <img src="assets/img/images/th-4/play-button.png" alt="play-button" width="180" height="180" className="h-full w-full animate-[spin_5s_linear_infinite] object-cover" />
                        <img src="assets/img/icons/icon-play-button.svg" alt="icon-play-button" width="50" height="50" className="absolute" />
                      </a>
                    </div>
                    {/* <!-- Hero Right Block --> */}
                  </div>
                  {/* <!-- Hero Area --> */}
                </div>
                {/* <!-- Section Container --> */}
              </div>
              {/* <!-- Hero Space --> */}
            </div>
            {/* <!-- Section Background --> */}
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Q5PG0rMXgvw"}
      />
      {/* video modal end */}


    </>
  )
}
