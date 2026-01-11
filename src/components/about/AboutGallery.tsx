 

import { useState } from "react"; 
import ImagePopup from "../../modals/ImagePopup";
interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  colSpan?: string;
}

const gallery_data: GalleryItem[] = [
  {
    id: 1,
    src: "/assets/img/images/th-1/about-gallery-img-1.jpg",
    alt: "about-gallery-img-1",
    width: 846,
    height: 392,
    colSpan: "md:col-span-1 lg:col-span-2",
  },
  {
    id: 2,
    src: "/assets/img/images/th-1/about-gallery-img-2.jpg",
    alt: "about-gallery-img-2",
    width: 408,
    height: 392,
    colSpan: "col-span-1",
  },
  {
    id: 3,
    src: "/assets/img/images/th-1/about-gallery-img-3.jpg",
    alt: "about-gallery-img-3",
    width: 408,
    height: 392,
    colSpan: "col-span-1",
  },
  {
    id: 4,
    src: "/assets/img/images/th-1/about-gallery-img-4.jpg",
    alt: "about-gallery-img-4",
    width: 846,
    height: 392,
    colSpan: "md:col-span-1 lg:col-span-2",
  },
];

export default function AboutGallery() {
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleImagePopup = (i: number) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };

  const img = gallery_data.map((item) => item.src);

  return (
    <>
      <section className="section-about-gallery">
        <div className="section-space">
          <div className="container">
            <div className="section-block mb-10 md:mb-[60px] xl:mb-20">
              <h2 className="jos mx-auto max-w-[966px] text-center">
                We think our story is
                <span>
                  <img
                    src="assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                    alt="shape-light-lime-5-arms-star"
                    width="74"
                    height="70"
                    className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]"
                  />
                </span>
                worth sharing with you
              </h2>
              <div className="mx-auto mt-6 max-w-[813px] text-center">
                <p className="jos section-para">
                  Established in 2008, we began as a small but ambitious team.
                  We understood the importance of creative and tech-savvy
                  solutions to help businesses succeed in the ever-changing
                  digital landscape.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gallery_data.map((item, i) => (
                <a
                  key={i}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleImagePopup(i)}
                  className={`group block cursor-pointer overflow-hidden rounded-[25px] border-2 border-black ${item.colSpan}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {isOpen && (
        <ImagePopup
          images={img}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
    </>
  );
}
