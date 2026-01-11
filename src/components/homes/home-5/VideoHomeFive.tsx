 
import { useState } from 'react'
import VideoPopup from '../../../modals/VideoPopup';

export default function VideoHomeFive() {

  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);



  return (
    <>
      <div className="section-video">
        <div className="mx-5 pt-20 lg:-mt-72 lg:pt-0 xxl:mx-[50px]">
          <div className="jos relative z-10 flex items-center justify-center">
            <img src="assets/img/images/th-5/video-img.jpg" alt="video" width="1820" height="700" className="h-auto min-h-80 w-full rounded-[20px] object-cover" />

            {/* <!-- Video Button --> */}
            <a data-fslightbox="gallery"
              onClick={() => setIsVideoOpen(true)}
              style={{ cursor: "pointer" }}
              aria-label="video-play" className="animate-transition text-colorDark absolute mx-auto inline-flex h-28 w-28 items-center justify-center overflow-hidden rounded-[50%] bg-[#FFFCF2] hover:scale-110 md:h-32 md:w-32">
              <div className="absolute">
                <img src="assets/img/icons/icon-orange-play.svg" alt="icon-orange-play" width="33" height="41" />
              </div>
            </a>
            {/* <!-- Video Button --> */}
          </div>
        </div>
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
