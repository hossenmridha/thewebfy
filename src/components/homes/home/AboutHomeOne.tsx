  
import   { useState } from "react";
import Count from "../../../common/Count";
import VideoPopup from "../../../modals/VideoPopup";

const counters = [
	{
		value: 5,
		suffix: "+",
		label: "Years of experience",
	},
	{
		value: 120,
		suffix: "k",
		label: "Successful projects",
	},
	{
		value: 99,
		suffix: "%",
		label: "Client satisfaction rate",
	},
];

export default function AboutHomeOne() {
	const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

	return (
		<>
			<section className="section-about">
				{/* Section Space */}
				<div className="section-space">
					{/* Section Container */}
					<div className="container">
						{/* Section Block */}
						<div className="section-block mb-10 md:mb-[60px] xl:mb-20">
							<div className="grid items-center gap-x-6 gap-y-10 text-center lg:grid-cols-[1fr_minmax(0,0.55fr)] lg:text-start xl:gap-x-[134px]">
								<h2 className="jos">
									We build {' '}
									<span>
										websites that 
										<img
											src="assets/img/elemnts/shape-light-lime-5-arms-star.svg"
											alt="shape-light-lime-5-arms-star"
											width="74"
											height="70"
											className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]"
										/>
									</span>
									make your business stand out 
								</h2>
								<p className="jos section-para">
									We work closely with you to understand your goals, users, and growth plans, then turn that clarity into fast, scalable, and conversion-focused websites.
								</p>
							</div>
						</div>

						{/* About Area */}
						<div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-[0.8fr_0.4fr]">
							{/* About Left Block - Video */}
							<div className="jos relative flex items-center justify-center overflow-hidden rounded-[25px] border-[5px] border-black">
								<img
									src="assets/img/images/th-1/about-img.jpg"
									alt="about-img"
									width="846"
									height="476"
									loading="lazy"
									className="h-full w-full object-cover"
								/>

								<div className="absolute inline-block">
									<a
										data-fslightbox="gallery"
										onClick={() => setIsVideoOpen(true)}
										style={{ cursor: "pointer" }}
										className="btn-primary relative pr-16"
										aria-label="video-play"
									>
										Play
										<span className="rounded-[50%] absolute right-[0px] inline-flex items-center justify-center">
											<img
												src="assets/img/icons/icon-buttery-white-black-play.svg"
												alt="icon-buttery-white-black-play"
												width="50"
												height="50"
											/>
										</span>
									</a>
								</div>
							</div>

							{/* About Right Block - Counter Up */}
							<div className="jos rounded-[25px] bg-black p-[30px]">
								<ul className="divide-y divide-[#333333]">
									{counters.map((counter, index) => (
										<li
											key={index}
											className="py-6 text-center first-of-type:pt-0 last-of-type:pb-0"
										>
											<div
												className="font-syne text-4xl font-bold leading-[1.07] -tracking-[1%] text-colorLightLime md:text-5xl xl:text-[70px]"
												data-module="countup"
											>
												<span
													className="start-number"
													data-countup-number={counter.value}
												>
													<Count number={counter.value} text={counter.suffix} />
												</span>
											</div>
											<span className="mt-2 inline-block text-colorButteryWhite">
												{counter.label}
											</span>
										</li>
									))}
								</ul>
							</div>
						</div>
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
	);
}
