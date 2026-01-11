 
  

import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";

import "yet-another-react-lightbox/styles.css";

type VideoPopupProps = {
  isVideoOpen: boolean;
  setIsVideoOpen: (open: boolean) => void;
  videoId?: string; // YouTube video ID only
};
interface Slide {
  width: number;
  height: number;
  sources: { src: string; type: string }[];
}

export default function VideoPopup({
  isVideoOpen,
  setIsVideoOpen,
  videoId = "Q5PG0rMXgvw",
}: VideoPopupProps) {
  return (
    <Lightbox
      open={isVideoOpen}
      close={() => setIsVideoOpen(false)}
      plugins={[Video]}
      slides={[
        {
          type: "video",
          width: 1280,
          height: 720,
          sources: [
            {
              src: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
              type: "text/html",
            },
          ],
        },
      ]}
      render={{
        slide: ({ slide }: { slide: Slide }) => (
          <div className="w-full h-full flex justify-center items-center">
            <iframe
              width={slide.width}
              height={slide.height}
              src={slide.sources[0].src}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ),
      }}
      // Disable arrows and gallery controls
      carousel={{ finite: true, preload: 0 }}
      animation={{ fade: 0 }}
    />
  );
}
  
 