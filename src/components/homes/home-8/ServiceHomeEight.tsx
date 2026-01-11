 
import { Link } from "react-router-dom";
import { useRef } from "react";

const service_data = [
  {
    title: "Software Development",
    description:
      "Build custom software for your unique needs with front-end and back-end technologies.",
    image: "assets/img/images/th-8/service-img-1.png",
    icon: "assets/img/icons/icon-buttery-white-solid-arrow-right.svg",
  },
  {
    title: "UX/UI Design",
    description:
      "Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.",
    image: "assets/img/images/th-8/service-img-2.png",
    icon: "assets/img/icons/icon-buttery-white-solid-arrow-right.svg",
  },
  {
    title: "Mobile App Development",
    description:
      "Build high-performing, scalable and secure mobile apps for iOS and Android devices.",
    image: "assets/img/images/th-8/service-img-3.png",
    icon: "assets/img/icons/icon-buttery-white-solid-arrow-right.svg",
  },
  {
    title: "AI Chatbot Development",
    description:
      "We build ChatGPT-trained chatbots and more that speak your brand's language.",
    image: "assets/img/images/th-8/service-img-4.png",
    icon: "assets/img/icons/icon-buttery-white-solid-arrow-right.svg",
  },
  {
    title: "Data Engineering",
    description:
      "Find the insights you need to make decisions faster. Manage your massive streams of data.",
    image: "assets/img/images/th-8/service-img-5.png",
    icon: "assets/img/icons/icon-buttery-white-solid-arrow-right.svg",
  },
];

export default function ServiceHomeEight() {
  const hoveredImageRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = (imageSrc: string) => {
    const hoveredImage = hoveredImageRef.current;
    if (!hoveredImage) return;

    hoveredImage.src = imageSrc;
    hoveredImage.style.display = "block";

    const moveImage = (e: MouseEvent) => {
      hoveredImage.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    document.addEventListener("mousemove", moveImage);

    return () => {
      hoveredImage.style.display = "none";
      document.removeEventListener("mousemove", moveImage);
    };
  };

  return (
    <section className="section-service">
      <div className="bg-[#001AA5]">
        <div className="section-space">
          <div className="container">
            <div className="mx-auto mb-10 max-w-xl text-center text-[#FCF9F0] md:mb-[60px] lg:mb-20 lg:max-w-2xl xxl:max-w-4xl">
              <h2 className="font-outfit text-5xl font-medium leading-none lg:text-6xl lg:-tracking-[3px] xl:text-7xl xxl:text-[110px]">
                We are passionate about what we do
              </h2>
            </div>
          </div>

          <ul>
            {service_data.map((service, idx) => (
              <li
                key={idx}
                className="jos group relative"
                onMouseEnter={() => handleMouseEnter(service.image)}
                onMouseLeave={() => {
                  const hoveredImage = hoveredImageRef.current;
                  if (!hoveredImage) return;
                  hoveredImage.style.display = "none";
                }}
              >
                <div className="transition-all duration-300 group-hover:bg-[#000937]">
                  <div className="round-[5px] container grid grid-cols-1 items-center gap-6 py-[30px] text-[#FCF9F0] transition-all md:grid-cols-[1fr_1fr_50px]">
                    <Link
                      to="/service-details"
                      className="font-outfit text-3xl font-medium md:text-4xl xxl:text-[50px]"
                    >
                      {service.title}
                    </Link>
                    <p className="para-lg max-w-[526px]">{service.description}</p>
                    <Link to="/service-details">
                      <img
                        src={service.icon}
                        alt="icon-buttery-white-solid-arrow-right"
                        width="50"
                        height="49"
                      />
                    </Link>
                  </div>
                </div>

                {/* Hidden image for reference */}
                <img
                  src={service.image}
                  alt={`hover-on-${idx}`}
                  className="hover-on-image hidden"
                />
              </li>
            ))}
          </ul>

          {/* Fixed hovered image */}
          <img
            ref={hoveredImageRef}
            src={service_data[0].image}
            alt="Hovered Project Image"
            className="hovered-image fixed -top-32 left-5 z-50 hidden h-[444px] w-[435px] pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
