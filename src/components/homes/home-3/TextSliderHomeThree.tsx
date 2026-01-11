  

export default function TextSliderHomeThree() {
  const sliderItems = [
    { text: "Online Marketing", color: "#8D7DFF" },
    { text: "SEO Expert", color: "#FF7545" },
    { text: "Content Marketing", color: "#FF94FF" },
    { text: "Link Building", color: "#FFE757" },
    { text: "Digital Strategy", color: "#8D7DFF" },
    { text: "Google Rankings", color: "#FF7545" },
  ]

  return (
    <div className="text-slider bg-black py-5 overflow-hidden">
      <div className="slide-track whitespace-nowrap animate-slide-left font-familjenGrotesk text-4xl font-bold tracking-[1px] flex gap-4">
        {[...sliderItems, ...sliderItems].map((item, idx) => (
          <span key={idx} className="inline-block px-3" style={{ color: item.color }}>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}
