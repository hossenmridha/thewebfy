import { Link } from "react-router-dom";

interface OffCanvasProps {
  setIsOpenOffCanvas: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenOffCanvas: boolean
}

export default function OffCanvas({setIsOpenOffCanvas, isOpenOffCanvas}: OffCanvasProps) {
  return (
    <div id="offcanvas-body" 
    style={{ transform: `translateX(${isOpenOffCanvas ? '0' : '100%'})` }}
    className="offcanvas-body fixed right-0 top-0 z-40 flex h-full max-w-80 translate-x-full flex-col gap-y-10 overflow-y-auto bg-[#191931]/95 p-[30px] pt-20 text-white ease-in-out sm:max-w-md">
      {/* <!-- Button Close --> */}
      <button id="offcanvas-close-btn" onClick={() => setIsOpenOffCanvas(false)} className="absolute left-0 top-0 inline-flex h-10 w-10 items-center justify-center bg-red-600">
        <img src="assets/img/icons/icon-white-close-fill.svg" alt="icon-white-close-fill" width="32" height="32" />
      </button>
      {/* <!-- Button Close --> */}
      {/* <!-- Offcanvas Logo --> */}
      <Link to="/" className="block">
        <img src="/assets/img/logo-white.png" alt="logo-white" width="121" height="24" />
      </Link>
      {/* <!-- Offcanvas Logo --> */}
      {/* <!-- Offcanvas Content --> */}
      <div>
        <p>
          We're dedicated to helping business grow and succeed. With years of
          industry experience and a passion for problem-solving, we offer
          top-level consulting service tailored to your unique needs.
        </p>
        <img src="assets/img/images/th-4/offcanvas-thumb.jpg" alt="offcanvas-thumb" width="768" height="700" className="mt-10 max-w-full" />
      </div>
      {/* <!-- Offcanvas Content --> */}
      {/* <!-- Offcanvas Info --> */}
      <div className="flex flex-col gap-y-4 text-lg leading-[1.43] lg:text-[21px]">
        <a href="tel:+0882346849" className="flex items-center gap-3 hover:text-[#FF8064]">
          <img src="assets/img/icons/icon-salmon-phone.svg" alt="icon-salmon-phone" width="24" height="24" />
          <span className="flex-1"> +088-234-6849 </span>
        </a>
        <a href="mail:example@gmail.com" className="flex items-center gap-3 hover:text-[#FF8064]">
          <img src="assets/img/icons/icon-salmon-mail.svg" alt="icon-salmon-mail" width="20" height="16" />
          <span className="flex-1">example@gmail.com </span>
        </a>
      </div>
      {/* <!-- Offcanvas Info --> */}
      {/* <!-- Social Link Item --> */}
      <div className="flex justify-center gap-4 lg:justify-normal">
        {/* <!-- Social Link Item --> */}
        <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" className="group flex h-[35px] w-[35px] items-center justify-center rounded-[50%] border border-white hover:border-[#FF8064] hover:bg-[#FF8064]">
          <img src="assets/img/icons/icon-logo-buttery-white-twitter.svg" alt="icon-logo-buttery-white-twitter" width="19" height="16" />
        </a>
        {/* <!-- Social Link Item --> */}
        {/* <!-- Social Link Item --> */}
        <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group flex h-[35px] w-[35px] items-center justify-center rounded-[50%] border border-white hover:border-[#FF8064] hover:bg-[#FF8064]">
          <img src="assets/img/icons/icon-logo-buttery-white-facebook.svg" alt="icon-logo-buttery-white-facebook" width="10" height="16" />
        </a>
        {/* <!-- Social Link Item --> */}
        {/* <!-- Social Link Item --> */}
        <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group flex h-[35px] w-[35px] items-center justify-center rounded-[50%] border border-white hover:border-[#FF8064] hover:bg-[#FF8064]">
          <img src="assets/img/icons/icon-logo-buttery-white-instagram.svg" alt="icon-logo-buttery-white-instagram" width="17" height="17" />
        </a>
        {/* <!-- Social Link Item --> */}
        {/* <!-- Social Link Item --> */}
        <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex h-[35px] w-[35px] items-center justify-center rounded-[50%] border border-white hover:border-[#FF8064] hover:bg-[#FF8064]">
          <img src="assets/img/icons/icon-logo-buttery-white-linkedin.svg" alt="icon-logo-buttery-white-linkedin" width="17" height="16" />
        </a>
        {/* <!-- Social Link Item --> */}
      </div>
      {/* <!-- Social Link Item --> */}
    </div>
  )
}
