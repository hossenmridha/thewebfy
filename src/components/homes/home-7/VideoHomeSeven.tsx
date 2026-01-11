 
import { useState } from 'react';
import VideoPopup from '../../../modals/VideoPopup';


export default function VideoHomeSeven() {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <div className="section-video">
        {/* <!-- Section Space --> */}
        <div className="section-space-bottom">
          {/* <!-- Section Container --> */}
          <div className="container">
            {/* <!-- Section Block --> */}
            <div className="mx-auto mb-10 max-w-[856px] text-center md:mb-[60px] lg:mb-20">
              <h2 className="font-bricolageGrotesque text-4xl font-bold leading-[1.033] -tracking-[1px] text-[#0B1040] sm:text-5xl lg:text-6xl xl:text-7xl xxl:text-[90px]">
                Nurturing a robust brand identity
              </h2>
            </div>
            {/* <!-- Section Block --> */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[10px]">
                <img src="assets/img/images/th-7/video-img.jpg" alt="video-img" width="1296" height="651" className="max-w-full" />
                {/* <!-- Video Button --> */}
                <a data-fslightbox="gallery"
                  onClick={() => setIsVideoOpen(true)}
                  style={{ cursor: "pointer" }}
                  aria-label="video-play" className="absolute bottom-10 right-10 mx-auto inline-flex h-[60px] w-[60px] items-center justify-center rounded-[50%] bg-[#4659FF]">
                  <div className="relative z-10">
                    <img src="assets/img/icons/icon-white-play.svg" alt="play-button" width="14" height="16" />
                  </div>
                </a>
                {/* <!-- Video Button --> */}
              </div>

              <img src="assets/img/elemnts/shape-yellow-star-long.svg" alt="shape-yellow-star-long" width="160" height="251" className="absolute -left-20 -top-32 hidden animate-pulse lg:inline-block" />
            </div>
          </div>
          {/* <!-- Section Container --> */}
        </div>
        {/* <!-- Section Space --> */}
      </div>
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
