import { Link } from "react-router-dom";


export default function TeamHomeEight() {
  return (
    <section className="section-team">
      {/* <!-- Section Space --> */}
      <div className="section-space">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Section Block --> */}
          <div className="mb-10 max-w-sm text-[#000937] md:mb-[60px] lg:mb-20 lg:max-w-lg xl:max-w-xl xxl:max-w-3xl">
            <h2 className="font-outfit text-5xl font-medium leading-none lg:text-6xl lg:-tracking-[3px] xl:text-7xl xxl:text-[110px]">
              Meet our highly skilled team
            </h2>
          </div>
          {/* <!-- Section Block --> */}

          {/* <!-- Team List --> */}
          <ul className="grid grid-cols-1 gap-6 text-[#000937] sm:grid-cols-2 lg:grid-cols-4">
            {/* <!-- Team Item --> */}
            <li className="jos" data-jos_animation="flip-left">
              <div className="group">
                {/* <!-- Thumbnail --> */}
                <div className="overflow-hidden rounded-[10px]">
                  <img src="assets/img/images/th-8/team-img-1.jpg" alt="team-img-1" width="306" height="350" className="h-auto w-full transition-all duration-300 group-hover:scale-110" />
                </div>
                {/* <!-- Thumbnail --> */}
                {/* <!-- Content --> */}
                <div className="mt-5">
                  <Link to="/team-details" className="mb-1 block font-outfit text-2xl font-medium">Jacob Johnny</Link>
                  <span className="text-xl">Chief Executive Officer</span>
                </div>
                {/* <!-- Content --> */}
              </div>
            </li>
            {/* <!-- Team Item --> */}
            {/* <!-- Team Item --> */}
            <li className="jos" data-jos_animation="flip-left">
              <div className="group">
                {/* <!-- Thumbnail --> */}
                <div className="overflow-hidden rounded-[10px]">
                  <img src="assets/img/images/th-8/team-img-2.jpg" alt="team-img-2" width="306" height="350" className="h-auto w-full transition-all duration-300 group-hover:scale-110" />
                </div>
                {/* <!-- Thumbnail --> */}
                {/* <!-- Content --> */}
                <div className="mt-5">
                  <Link to="/team-details" className="mb-1 block font-outfit text-2xl font-medium">Perk Mathews</Link>
                  <span className="text-xl">Chief Technology Officer</span>
                </div>
                {/* <!-- Content --> */}
              </div>
            </li>
            {/* <!-- Team Item --> */}
            {/* <!-- Team Item --> */}
            <li className="jos" data-jos_animation="flip-left">
              <div className="group">
                {/* <!-- Thumbnail --> */}
                <div className="overflow-hidden rounded-[10px]">
                  <img src="assets/img/images/th-8/team-img-3.jpg" alt="team-img-3" width="306" height="350" className="h-auto w-full transition-all duration-300 group-hover:scale-110" />
                </div>
                {/* <!-- Thumbnail --> */}
                {/* <!-- Content --> */}
                <div className="mt-5">
                  <Link to="/team-details" className="mb-1 block font-outfit text-2xl font-medium">Idris Farek</Link>
                  <span className="text-xl">Software Engineer</span>
                </div>
                {/* <!-- Content --> */}
              </div>
            </li>
            {/* <!-- Team Item --> */}
            {/* <!-- Team Item --> */}
            <li className="jos" data-jos_animation="flip-left">
              <div className="group">
                {/* <!-- Thumbnail --> */}
                <div className="overflow-hidden rounded-[10px]">
                  <img src="assets/img/images/th-8/team-img-4.jpg" alt="team-img-4" width="306" height="350" className="h-auto w-full transition-all duration-300 group-hover:scale-110" />
                </div>
                {/* <!-- Thumbnail --> */}
                {/* <!-- Content --> */}
                <div className="mt-5">
                  <Link to="/team-details" className="mb-1 block font-outfit text-2xl font-medium">Abraham Maslow</Link>
                  <span className="text-xl">Cybersecurity Specialist</span>
                </div>
                {/* <!-- Content --> */}
              </div>
            </li>
            {/* <!-- Team Item --> */}
          </ul>
          {/* <!-- Team List --> */}
        </div>
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </section>
  )
}
