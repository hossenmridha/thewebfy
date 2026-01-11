  
import { useState } from 'react';
import VideoPopup from '../../../modals/VideoPopup';

export default function VideoHomeSix() {
    const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  
  return (
    <>
    <div className="section-video">
      <div className="mx-5 pt-20 xl:pt-0 xxl:mx-[50px]">
        <div className="xl:-mt-52 xxl:-mt-[350px]">
          <div className="jos relative z-10 flex items-center justify-center overflow-hidden rounded-[20px] border-4 border-[#2C2C2C]">
            <img src="assets/img/images/th-6/video-img.jpg" alt="video" width="1820" height="700" className="h-auto min-h-80 w-full rounded-[20px] object-cover" />

            {/* <!-- Video Button --> */}
            <a data-fslightbox="gallery" 
            
            onClick={() => setIsVideoOpen(true)}
              style={{ cursor: "pointer" }}
              
              aria-label="video-play" className="animate-transition absolute mx-auto inline-flex items-center justify-center">
              <div className="relative z-10">
                <img src="assets/img/images/th-6/play-button.png" alt="play-button" width="180" height="180" className="h-[180px] w-[180px] scale-50 rounded-[50%] md:scale-75 xl:scale-100" />
              </div>
            </a>
            {/* <!-- Video Button --> */}
          </div>
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
