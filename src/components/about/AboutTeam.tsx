import { Link } from "react-router-dom";


export default function AboutTeam() {
  return (
    <section className="section-team">
      {/* <!-- Section Space --> */}
      <div className="section-space">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Section Block --> */}
          <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
            <h2 className="jos">
              We have a team of creative
              <span>
                people
                <img src="assets/img/elemnts/shape-light-lime-5-arms-star.svg" alt="shape-light-lime-5-arms-star" width="74" height="70" className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]" />
              </span>
            </h2>
          </div>
          {/* <!-- Section Block --> */}

          {/* <!-- Team List --> */}
          <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* <!-- Team  Item --> */}
            <li className="jos group/team-item" data-jos_animation="flip-left">
              <div className="relative overflow-hidden rounded-[20px] border-[5px] border-black">
                <img src="assets/img/images/th-1/team-img-1.jpg" alt="team-img-1" width="296" height="300" loading="lazy" className="h-full w-full object-cover transition-all duration-300 group-hover/team-item:scale-110" />
                {/* <!-- Social Link --> */}
                <div className="absolute top-full flex w-full justify-center gap-3 transition-all duration-300 group-hover/team-item:-translate-y-14">
                  <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-twitter.svg" alt="icon-logo-buttery-white-twitter" width="19" height="16" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-twitter.svg" alt="icon-logo-black-twitter" width="19" height="16" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                  <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-facebook.svg" alt="icon-logo-buttery-white-facebook" width="10" height="17" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-facebook.svg" alt="icon-logo-black-facebook" width="10" height="17" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                  <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-instagram.svg" alt="icon-logo-buttery-white-instagram" width="17" height="18" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-instagram.svg" alt="icon-logo-black-instagram" width="17" height="18" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                  <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-linkedin.svg" alt="icon-logo-buttery-white-linkedin" width="17" height="18" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-linkedin.svg" alt="icon-logo-black-linkedin" width="17" height="18" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                </div>
                {/* <!-- Social Link --> */}
              </div>

              <div className="mt-5 text-center">
                <Link to="/team-details" className="display-heading display-heading-4 mb-4 block">Arafat Hossain</Link>
                <span className="text-lg md:text-[21px]">CEO & Founder</span>
              </div>
            </li>
            {/* <!-- Team  Item --> */}
            {/* <!-- Team  Item --> */}
            <li className="jos group/team-item" data-jos_animation="flip-left">
              <div className="relative overflow-hidden rounded-[20px] border-[5px] border-black">
                <img src="assets/img/images/th-1/team-img-2.jpg" alt="team-img-2" width="296" height="300" loading="lazy" className="h-full w-full object-cover transition-all duration-300 group-hover/team-item:scale-110" />
                {/* <!-- Social Link --> */}
                <div className="absolute top-full flex w-full justify-center gap-3 transition-all duration-300 group-hover/team-item:-translate-y-14">
                  <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-twitter.svg" alt="icon-logo-buttery-white-twitter" width="19" height="16" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-twitter.svg" alt="icon-logo-black-twitter" width="19" height="16" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                  <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-facebook.svg" alt="icon-logo-buttery-white-facebook" width="10" height="17" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-facebook.svg" alt="icon-logo-black-facebook" width="10" height="17" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                  <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-instagram.svg" alt="icon-logo-buttery-white-instagram" width="17" height="18" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-instagram.svg" alt="icon-logo-black-instagram" width="17" height="18" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                  <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-linkedin.svg" alt="icon-logo-buttery-white-linkedin" width="17" height="18" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-linkedin.svg" alt="icon-logo-black-linkedin" width="17" height="18" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                </div>
                {/* <!-- Social Link --> */}
              </div>

              <div className="mt-5 text-center">
                <Link to="/team-details" className="display-heading display-heading-4 mb-4 block">Mahmudul Hasan</Link>
                <span className="text-lg md:text-[21px]">Senior Designer</span>
              </div>
            </li>
            {/* <!-- Team  Item --> */}
            {/* <!-- Team  Item --> */}
            <li className="jos group/team-item" data-jos_animation="flip-left">
              <div className="relative overflow-hidden rounded-[20px] border-[5px] border-black">
                <img src="assets/img/images/th-1/team-img-4.jpg" alt="team-img-4" width="296" height="300" loading="lazy" className="h-full w-full object-cover transition-all duration-300 group-hover/team-item:scale-110" />
                
              </div>

              <div className="mt-5 text-center">
                <Link to="/team-details" className="display-heading display-heading-4 mb-4 block">Martine Joy</Link>
                <span className="text-lg md:text-[21px]">Project Manager</span>
              </div>
            </li>
            {/* <!-- Team  Item --> */}
            {/* <!-- Team  Item --> */}
            <li className="jos group/team-item" data-jos_animation="flip-left">
              <div className="relative overflow-hidden rounded-[20px] border-[5px] border-black">
                <img src="assets/img/images/th-1/team-img-3.jpg" alt="team-img-3" width="296" height="300" loading="lazy" className="h-full w-full object-cover transition-all duration-300 group-hover/team-item:scale-110" />
                {/* <!-- Social Link --> */}
                <div className="absolute top-full flex w-full justify-center gap-3 transition-all duration-300 group-hover/team-item:-translate-y-14">
                  <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-twitter.svg" alt="icon-logo-buttery-white-twitter" width="19" height="16" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-twitter.svg" alt="icon-logo-black-twitter" width="19" height="16" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                  <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-facebook.svg" alt="icon-logo-buttery-white-facebook" width="10" height="17" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-facebook.svg" alt="icon-logo-black-facebook" width="10" height="17" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                  <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-instagram.svg" alt="icon-logo-buttery-white-instagram" width="17" height="18" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-instagram.svg" alt="icon-logo-black-instagram" width="17" height="18" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                  <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-linkedin.svg" alt="icon-logo-buttery-white-linkedin" width="17" height="18" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-linkedin.svg" alt="icon-logo-black-linkedin" width="17" height="18" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                </div>
                {/* <!-- Social Link --> */}
              </div>

              <div className="mt-5 text-center">
                <Link to="/team-details" className="display-heading display-heading-4 mb-4 block">Adam Straw</Link>
                <span className="text-lg md:text-[21px]">Web Developer</span>
              </div>
            </li>
            {/* <!-- Team  Item --> */}
            {/* <!-- Team  Item --> */}
            <li className="jos group/team-item" data-jos_animation="flip-left">
              <div className="relative overflow-hidden rounded-[20px] border-[5px] border-black">
                <img src="assets/img/images/th-1/team-img-5.jpg" alt="team-img-5.jpg" width="296" height="300" loading="lazy" className="h-full w-full object-cover transition-all duration-300 group-hover/team-item:scale-110" />
                {/* <!-- Social Link --> */}
                <div className="absolute top-full flex w-full justify-center gap-3 transition-all duration-300 group-hover/team-item:-translate-y-14">
                  <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-twitter.svg" alt="icon-logo-buttery-white-twitter" width="19" height="16" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-twitter.svg" alt="icon-logo-black-twitter" width="19" height="16" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                  <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-facebook.svg" alt="icon-logo-buttery-white-facebook" width="10" height="17" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-facebook.svg" alt="icon-logo-black-facebook" width="10" height="17" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                  <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-instagram.svg" alt="icon-logo-buttery-white-instagram" width="17" height="18" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-instagram.svg" alt="icon-logo-black-instagram" width="17" height="18" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                  <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-linkedin.svg" alt="icon-logo-buttery-white-linkedin" width="17" height="18" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-linkedin.svg" alt="icon-logo-black-linkedin" width="17" height="18" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                </div>
                {/* <!-- Social Link --> */}
              </div>

              <div className="mt-5 text-center">
                <Link to="/team-details" className="display-heading display-heading-4 mb-4 block">William Jack</Link>
                <span className="text-lg md:text-[21px]">Creative Director</span>
              </div>
            </li>
            {/* <!-- Team  Item --> */}
            {/* <!-- Team  Item --> */}
            <li className="jos group/team-item" data-jos_animation="flip-left">
              <div className="relative overflow-hidden rounded-[20px] border-[5px] border-black">
                <img src="assets/img/images/th-1/team-img-6.jpg" alt="team-img-6.jpg" width="296" height="300" loading="lazy" className="h-full w-full object-cover transition-all duration-300 group-hover/team-item:scale-110" />
                {/* <!-- Social Link --> */}
                <div className="absolute top-full flex w-full justify-center gap-3 transition-all duration-300 group-hover/team-item:-translate-y-14">
                  <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-twitter.svg" alt="icon-logo-buttery-white-twitter" width="19" height="16" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-twitter.svg" alt="icon-logo-black-twitter" width="19" height="16" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                  <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-facebook.svg" alt="icon-logo-buttery-white-facebook" width="10" height="17" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-facebook.svg" alt="icon-logo-black-facebook" width="10" height="17" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                  <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-instagram.svg" alt="icon-logo-buttery-white-instagram" width="17" height="18" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-instagram.svg" alt="icon-logo-black-instagram" width="17" height="18" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                  <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-linkedin.svg" alt="icon-logo-buttery-white-linkedin" width="17" height="18" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-linkedin.svg" alt="icon-logo-black-linkedin" width="17" height="18" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                </div>
                {/* <!-- Social Link --> */}
              </div>

              <div className="mt-5 text-center">
                <Link to="/team-details" className="display-heading display-heading-4 mb-4 block">Alex Tom</Link>
                <span className="text-lg md:text-[21px]">UI/UX Designer</span>
              </div>
            </li>
            {/* <!-- Team  Item --> */}
            {/* <!-- Team  Item --> */}
            <li className="jos group/team-item" data-jos_animation="flip-left">
              <div className="relative overflow-hidden rounded-[20px] border-[5px] border-black">
                <img src="assets/img/images/th-1/team-img-7.jpg" alt="team-img-7.jpg" width="296" height="300" loading="lazy" className="h-full w-full object-cover transition-all duration-300 group-hover/team-item:scale-110" />
                {/* <!-- Social Link --> */}
                <div className="absolute top-full flex w-full justify-center gap-3 transition-all duration-300 group-hover/team-item:-translate-y-14">
                  <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-twitter.svg" alt="icon-logo-buttery-white-twitter" width="19" height="16" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-twitter.svg" alt="icon-logo-black-twitter" width="19" height="16" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                  <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-facebook.svg" alt="icon-logo-buttery-white-facebook" width="10" height="17" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-facebook.svg" alt="icon-logo-black-facebook" width="10" height="17" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                  <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-instagram.svg" alt="icon-logo-buttery-white-instagram" width="17" height="18" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-instagram.svg" alt="icon-logo-black-instagram" width="17" height="18" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                  <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-linkedin.svg" alt="icon-logo-buttery-white-linkedin" width="17" height="18" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-linkedin.svg" alt="icon-logo-black-linkedin" width="17" height="18" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                </div>
                {/* <!-- Social Link --> */}
              </div>

              <div className="mt-5 text-center">
                <Link to="/team-details" className="display-heading display-heading-4 mb-4 block">Robin Lesser</Link>
                <span className="text-lg md:text-[21px]">Chief Executive Officer</span>
              </div>
            </li>
            {/* <!-- Team  Item --> */}
            {/* <!-- Team  Item --> */}
            <li className="jos group/team-item" data-jos_animation="flip-left">
              <div className="relative overflow-hidden rounded-[20px] border-[5px] border-black">
                <img src="assets/img/images/th-1/team-img-7.jpg" alt="team-img-7.jpg" width="296" height="300" loading="lazy" className="h-full w-full object-cover transition-all duration-300 group-hover/team-item:scale-110" />
                {/* <!-- Social Link --> */}
                <div className="absolute top-full flex w-full justify-center gap-3 transition-all duration-300 group-hover/team-item:-translate-y-14">
                  <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-twitter.svg" alt="icon-logo-buttery-white-twitter" width="19" height="16" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-twitter.svg" alt="icon-logo-black-twitter" width="19" height="16" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                  <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-facebook.svg" alt="icon-logo-buttery-white-facebook" width="10" height="17" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-facebook.svg" alt="icon-logo-black-facebook" width="10" height="17" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                  <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-instagram.svg" alt="icon-logo-buttery-white-instagram" width="17" height="18" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-instagram.svg" alt="icon-logo-black-instagram" width="17" height="18" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                  <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite">
                    <img src="assets/img/icons/icon-logo-buttery-white-linkedin.svg" alt="icon-logo-buttery-white-linkedin" width="17" height="18" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                    <img src="assets/img/icons/icon-logo-black-linkedin.svg" alt="icon-logo-black-linkedin" width="17" height="18" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                  </a>
                </div>
                {/* <!-- Social Link --> */}
              </div>

              <div className="mt-5 text-center">
                <Link to="/team-details" className="display-heading display-heading-4 mb-4 block">Sheikh David</Link>
                <span className="text-lg md:text-[21px]">HR Director</span>
              </div>
            </li>
            {/* <!-- Team  Item --> */}
          </ul>
          {/* <!-- Team List --> */}
        </div>
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>
  )
}
