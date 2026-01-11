import { Link } from "react-router-dom";
import Wrapper from "../../layouts/Wrapper";



export default function Signup() {
  return (
    <Wrapper>
    <div className="bg-colorIvory">
      <div className="page-wrapper flex flex-col justify-between">
        {/* <!-- ...::: Header Section Start :::... --> */}
        <header className="section-header site-header is-black is-black fixed top-0 z-30 w-full py-4">
          {/* <!-- Section Container --> */}
          <div className="container">
            {/* <!-- Header Area --> */}
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-x-6">
                {/* <!-- Header Logo --> */}
                <Link to="/" className="h-auto w-auto">
                  <img src="assets/img/logo-buttery-white.svg" alt="logo-buttery-white" width="121" height="24" />
                </Link>
                {/* <!-- Header Logo --> */}
              </div>
            </div>
            {/* <!-- Header Area --> */}
          </div>
          {/* <!-- Section Container --> */}
        </header>
        {/* <!-- ...::: Header Section End :::... --> */}

        {/* <!-- Main Wrapper Start --> */}
        <main className="main-wrapper">
          {/* <!-- ...::: Coming Soon Section Start :::... --> */}
          <section className="section-404-error">
            {/* <!-- Section Space --> */}
            <div className="section-space">
              {/* <!-- Section Container --> */}
              <div className="container">
                <div className="mx-auto max-w-[856px]">
                  {/* <!-- Section Block --> */}
                  <div className="section-block mx-auto mb-10 max-w-[650px] text-center xl:max-w-[870px]">
                    <h2 className="jos mb-6">
                      Create Account {' '}
                      <span>
                        <img src="assets/img/elemnts/shape-light-lime-5-arms-star.svg" alt="shape-light-lime-5-arms-star" width="74" height="70" className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]" />
                      </span>
                    </h2>
                  </div>
                  {/* <!-- Section Block --> */}
                  <div className="rounded-[10px] border border-black p-10">
                    {/* <!-- Contact Form --> */}
                    <form action="#" method="post" className="flex flex-col gap-y-6">
                      {/* <!-- Form Group --> */}
                      <div>
                        <label htmlFor="sign-up-name" className="mb-3 block text-base font-bold">Enter your full name</label>
                        <input type="text" name="sign-up-name" id="sign-up-name" placeholder="Adam Smith" className="w-full rounded-[50px] border border-black bg-colorIvory px-8 py-4 text-base tracking-[0.5px]" required />
                      </div>
                      {/* <!-- Form Group --> */}
                      {/* <!-- Form Group --> */}
                      <div>
                        <label htmlFor="sign-up-email" className="mb-3 block text-base font-bold">Enter email address</label>
                        <input type="email" name="sign-up-email" id="sign-up-email" placeholder="example@gmail.com" className="w-full rounded-[50px] border border-black bg-colorIvory px-8 py-4 text-base tracking-[0.5px]" required />
                      </div>
                      {/* <!-- Form Group --> */}
                      {/* <!-- Form Group --> */}
                      <div>
                        <label htmlFor="sign-up-password" className="mb-3 block text-base font-bold">Enter Password</label>
                        <input type="password" name="sign-up-password" id="sign-up-password" className="w-full rounded-[50px] border border-black bg-colorIvory px-8 py-4 text-base tracking-[0.5px]" required />
                      </div>
                      {/* <!-- Form Group --> */}
                      {/* <!-- Form Group --> */}
                      <div className="flex items-center">
                        <input type="checkbox" name="sign-up-terms" id="sign-up-terms" className="h-4 w-4 rounded-[3px] border-[#7F8995] accent-colorLightLime checked:border-black checked:text-black" />
                        <label htmlFor="sign-up-terms" className="ml-2 inline-block text-base">I have read and accept the {' '}
                          <a href="#" className="font-semibold underline-offset-2 hover:underline">Terms & Conditions {' '}</a>
                          and
                          <a href="#" className="font-semibold underline-offset-2 hover:underline">{' '}Privacy Policy</a>
                        </label>
                      </div>
                      {/* <!-- Form Group --> */}
                      {/* <!-- Form Group --> */}
                      <div>
                        <button type="submit" className="btn-black w-full">
                          Create account
                        </button>
                      </div>
                      {/* <!-- Form Group --> */}
                    </form>
                    {/* <!-- Contact Form --> */}

                    {/* <!-- Horizontal Separator --> */}
                    <div className="relative z-10 my-10 text-center font-bold">
                      <span className="inline-block bg-colorIvory px-4">OR</span>

                      <div className="horizontal-line absolute top-1/2 -z-10 -translate-y-1/2 bg-[#E6E6E6]"></div>
                    </div>
                    {/* <!-- Horizontal Separator --> */}

                    {/* <!-- Sign Up by Authorized App --> */}
                    <div className="flex flex-col gap-6">
                      <a href="#" className="btn-outline-black gap-x-[14px] text-center text-base font-bold hover:bg-black hover:text-white">
                        <img src="assets/img/icons/icon-flat-color-google.svg" alt="icon-flat-color-google" width="24" height="24" />
                        Sign up with Google</a>
                      <a href="#" className="btn-outline-black gap-x-[14px] text-center text-base font-bold hover:bg-black hover:text-white">
                        <img src="assets/img/icons/icon-flat-color-facebook.svg" alt="icon-flat-color-facebook" width="24" height="24" />
                        Sign up with Facebook</a>
                    </div>
                    {/* <!-- Sign Up by Authorized App --> */}

                    {/* <!-- Text Link --> */}
                    <p className="mt-10 text-center text-base">
                      Already have an account?
                      <Link to="/log-in" className="font-bold underline-offset-2 hover:underline">{' '}Log in here</Link>
                    </p>
                    {/* <!-- Text Link --> */}
                  </div>
                </div>
              </div>
              {/* <!-- Section Container --> */}
            </div>
            {/* <!-- Section Space --> */}
          </section>
          {/* <!-- ...::: Coming Soon Section End :::... --> */}
        </main>
        {/* <!-- Main Wrapper End --> */}
      </div>
    </div>
    </Wrapper>
  )
}
