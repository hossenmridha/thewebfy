
import { Link } from "react-router-dom"
import Wrapper from "../../layouts/Wrapper"
 

export default function ResetPassword() {
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
                  <img src="assets/img/logo.svg" alt="logo-buttery-white" width="121" height="24" />
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
                      Reset Password {' '}
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
                        <label htmlFor="reset-email" className="mb-3 block text-base font-bold">Enter email address</label>
                        <input type="email" name="reset-email" id="reset-email" placeholder="example@gmail.com" className="w-full rounded-[50px] border border-black bg-colorIvory px-8 py-4 text-base tracking-[0.5px]" required />
                      </div>
                      {/* <!-- Form Group --> */}
                      {/* <!-- Form Group --> */}
                      <div>
                        <label htmlFor="reset-password" className="mb-3 block text-base font-bold">Enter Password</label>
                        <input type="password" name="reset-password" id="reset-password" placeholder="Password" className="w-full rounded-[50px] border border-black bg-colorIvory px-8 py-4 text-base tracking-[0.5px]" required />
                      </div>
                      {/* <!-- Form Group --> */}

                      {/* <!-- Form Group --> */}
                      <div>
                        <button type="submit" className="btn-black w-full">
                          Change password
                        </button>
                      </div>
                      {/* <!-- Form Group --> */}
                    </form>
                    {/* <!-- Contact Form --> */}

                    {/* <!-- Text Link --> */}
                    <p className="mt-6 text-center text-base">
                      If you didn’t request a password recovery link, please
                      ignore this.
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
        {/* <!--Main Wrapper End --> */}
      </div>
    </div>
    </Wrapper>
  )
}
