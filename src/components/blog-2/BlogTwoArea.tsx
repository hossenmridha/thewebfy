import { Link } from "react-router-dom";



export default function BlogTwoArea() {
  return (
    <div className="section-blog">
      {/* <!-- Section Space --> */}
      <div className="section-space">
        {/* <!-- Section Container --> */}
        <div className="container">
          {/* <!-- Blog area --> */}
          <div className="grid grid-cols-1 gap-[60px] lg:grid-cols-[1fr_minmax(0,416px)]">
            {/* <!-- Blog Left Side --> */}
            <div>
              {/* <!-- Blog List --> */}
              <ul className="grid grid-cols-1 gap-y-[50px]">
                {/* <!-- Blog Single Item --> */}
                <li className="jos group">
                  <Link to="/blog-details" className="block overflow-hidden rounded-[20px]">
                    <img src="assets/img/images/th-1/blog-img-1.jpg" alt="blog-img-1" width="820" height="500" loading="lazy" className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
                  </Link>
                  {/* <!-- Post Meta --> */}
                  <div className="mb-5 mt-6 flex items-center gap-x-6">
                    {/* <!-- Post Meta Category --> */}
                    <div className="flex flex-wrap gap-4">
                      <Link to="/blog-1" className="rounded-[50px] border border-black px-6 py-3 text-base font-semibold tracking-[0.5px] hover:bg-black hover:text-white">Marketing</Link>
                    </div>
                    {/* <!-- Post Meta Category --> */}

                    {/* <!-- Post Meta Date --> */}
                    <span>June 18, 2024</span>
                    {/* <!-- Post Meta Date --> */}
                  </div>
                  {/* <!-- Post Meta --> */}

                  {/* <!-- Blog Content --> */}
                  <div>
                    <Link to="/blog-details" className="display-heading display-heading-4">Learn these five high-income skills to build your
                      one-person business and get rich</Link>

                    <p className="my-4">
                      As a first-generation immigrant, money and networks
                      weren’t given to me. So instead of going through the
                      front door, I tried a back door approach...
                    </p>

                    <Link to="/blog-details">
                      <img src="assets/img/icons/icon-black-arrow-right.svg" alt="icon-black-arrow-right" width="34" height="28" className="transition-all duration-300 group-hover:translate-x-5" />
                    </Link>
                  </div>
                  {/* <!-- Blog Content --> */}
                </li>
                {/* <!-- Blog Single Item --> */}
                {/* <!-- Blog Single Item --> */}
                <li className="jos group">
                  <Link to="/blog-details" className="block overflow-hidden rounded-[20px]">
                    <img src="assets/img/images/th-1/blog-img-2.jpg" alt="blog-img-2" width="820" height="500" loading="lazy" className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
                  </Link>
                  {/* <!-- Post Meta --> */}
                  <div className="mb-5 mt-6 flex items-center gap-x-6">
                    {/* <!-- Post Meta Category --> */}
                    <div className="flex flex-wrap gap-4">
                      <Link to="/blog-1" className="rounded-[50px] border border-black px-6 py-3 text-base font-semibold tracking-[0.5px] hover:bg-black hover:text-white">Business</Link>
                    </div>
                    {/* <!-- Post Meta Category --> */}

                    {/* <!-- Post Meta Date --> */}
                    <span>June 16, 2024</span>
                    {/* <!-- Post Meta Date --> */}
                  </div>
                  {/* <!-- Post Meta --> */}

                  {/* <!-- Blog Content --> */}
                  <div>
                    <Link to="/blog-details" className="display-heading display-heading-4">I run a $10,000/month business with 0 employees,
                      here's how I use AI tools</Link>

                    <p className="my-4">
                      Making more money with the help of AI tools. — Up
                      until now, I’ve shared two posts discussing the AI
                      tools I’ve incorporated into my...
                    </p>

                    <Link to="/blog-details">
                      <img src="assets/img/icons/icon-black-arrow-right.svg" alt="icon-black-arrow-right" width="34" height="28" className="transition-all duration-300 group-hover:translate-x-5" />
                    </Link>
                  </div>
                  {/* <!-- Blog Content --> */}
                </li>
                {/* <!-- Blog Single Item --> */}
                {/* <!-- Blog Single Item --> */}
                <li className="jos group">
                  <Link to="/blog-details" className="block overflow-hidden rounded-[20px]">
                    <img src="assets/img/images/th-1/blog-img-3.jpg" alt="blog-img-3" width="820" height="500" loading="lazy" className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
                  </Link>
                  {/* <!-- Post Meta --> */}
                  <div className="mb-5 mt-6 flex items-center gap-x-6">
                    {/* <!-- Post Meta Category --> */}
                    <div className="flex flex-wrap gap-4">
                      <Link to="/blog-1" className="rounded-[50px] border border-black px-6 py-3 text-base font-semibold tracking-[0.5px] hover:bg-black hover:text-white">Technology</Link>
                    </div>
                    {/* <!-- Post Meta Category --> */}

                    {/* <!-- Post Meta Date --> */}
                    <span>June 14, 2024</span>
                    {/* <!-- Post Meta Date --> */}
                  </div>
                  {/* <!-- Post Meta --> */}

                  {/* <!-- Blog Content --> */}
                  <div>
                    <Link to="/blog-details" className="display-heading display-heading-4">Technical loan, product loan or business loan:
                      different types and how to deal with it</Link>

                    <p className="my-4">
                      Tech debt part two — a deeper dive into product and
                      business debt and the ripple effect on organizations —
                      in part one...
                    </p>

                    <Link to="/blog-details">
                      <img src="assets/img/icons/icon-black-arrow-right.svg" alt="icon-black-arrow-right" width="34" height="28" className="transition-all duration-300 group-hover:translate-x-5" />
                    </Link>
                  </div>
                  {/* <!-- Blog Content --> */}
                </li>
                {/* <!-- Blog Single Item --> */}
              </ul>
              {/* <!-- Blog List --> */}

              {/* <!-- Pagination --> */}
              <div className="mt-20 flex justify-center">
                <Link to="/blog-1" className="btn-primary relative justify-start bg-black pr-20 text-white">
                  Next page
                  <span className="absolute right-[5px] inline-flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-colorLightLime"><img src="assets/img/icons/icon-black-arrow-right.svg" alt="icon-black-arrow-right" width="34" height="28" /></span></Link>
              </div>
              {/* <!-- Pagination --> */}
            </div>
            {/* <!-- Blog Left Side --> */}

            {/* <!-- Aside Block --> */}
            <aside>
              {/* <!-- Sidebar List --> */}
              <ul className="flex flex-col gap-y-[50px]">
                {/* <!-- Sidebar Item - Search --> */}
                <li>
                  <h4 className="mb-4">Search:</h4>

                  <form action="#" method="get">
                    <div className="relative">
                      <input type="search" placeholder="Type keyword here" className="w-full rounded-[50px] border border-black bg-colorIvory px-[30px] py-[14px] pr-16 outline-none placeholder:text-black" required />
                      <button type="submit" className="absolute right-[5px] top-[5px] inline-flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-black">
                        <img src="assets/img/icons/icon-buttery-white-search.svg" alt="icon-buttery-white-search" width="24" height="24" />
                      </button>
                    </div>
                  </form>
                </li>
                {/* <!-- Sidebar Item - Search --> */}

                {/* <!-- Sidebar Item - Category --> */}
                <li>
                  <h4 className="mb-4">Categories:</h4>

                  {/* <!-- Category List - Blog --> */}
                  <ul className="flex flex-col gap-y-4">
                    <li>
                      <label htmlFor="category-business" className="flex gap-x-3 text-[21px]">
                        <span className="relative">
                          <input type="checkbox" name="category-business" id="category-business" className="peer opacity-0" />
                          <span className="absolute left-0 top-1/2 inline-block h-4 w-4 -translate-y-1/2 rounded-[50%] border border-black peer-checked:bg-black"></span>
                        </span>
                        Business
                      </label>
                    </li>
                    <li>
                      <label htmlFor="category-development" className="flex gap-x-3 text-[21px]">
                        <span className="relative">
                          <input type="checkbox" name="category-development" id="category-development" className="peer opacity-0" />
                          <span className="absolute left-0 top-1/2 inline-block h-4 w-4 -translate-y-1/2 rounded-[50%] border border-black peer-checked:bg-black"></span>
                        </span>
                        Development
                      </label>
                    </li>
                    <li>
                      <label htmlFor="category-technology" className="flex gap-x-3 text-[21px]">
                        <span className="relative">
                          <input type="checkbox" name="category-technology" id="category-technology" className="peer opacity-0" />
                          <span className="absolute left-0 top-1/2 inline-block h-4 w-4 -translate-y-1/2 rounded-[50%] border border-black peer-checked:bg-black"></span>
                        </span>
                        Technology
                      </label>
                    </li>
                    <li>
                      <label htmlFor="category-creative" className="flex gap-x-3 text-[21px]">
                        <span className="relative">
                          <input type="checkbox" name="category-creative" id="category-creative" className="peer opacity-0" />
                          <span className="absolute left-0 top-1/2 inline-block h-4 w-4 -translate-y-1/2 rounded-[50%] border border-black peer-checked:bg-black"></span>
                        </span>
                        Creative Director
                      </label>
                    </li>
                    <li>
                      <label htmlFor="category-uncategorized" className="flex gap-x-3 text-[21px]">
                        <span className="relative">
                          <input type="checkbox" name="category-uncategorized" id="category-uncategorized" className="peer opacity-0" />
                          <span className="absolute left-0 top-1/2 inline-block h-4 w-4 -translate-y-1/2 rounded-[50%] border border-black peer-checked:bg-black"></span>
                        </span>
                        Uncategorized
                      </label>
                    </li>
                  </ul>
                  {/* <!-- Category List - Blog --> */}
                </li>
                {/* <!-- Sidebar Item - Category --> */}

                {/* <!-- Sidebar Item - Recent Post --> */}
                <li>
                  <h4 className="mb-4">Recent Posts:</h4>

                  {/* <!-- Category List - Blog --> */}
                  <ul className="flex flex-col gap-y-4">
                    <li className="group flex flex-col items-start gap-x-[10px] gap-y-5 sm:flex-row sm:items-center">
                      <Link to="/blog-details" className="block overflow-hidden rounded-[10px]">
                        <img src="assets/img/images/th-1/recent-blog-img-1.jpg" alt="recent-blog-img-1" width="150" height="100" className="h-auto w-full transition-all duration-300 group-hover:scale-110" />
                      </Link>
                      <div className="flex-1">
                        {/* <!-- POst Meta --> */}
                        <span className="mb-[10px] block text-base">June 18, 2024</span>
                        {/* <!-- POst Meta --> */}
                        <Link to="/blog-details" className="display-heading display-heading-5">7 businesses for easy money</Link>
                      </div>
                    </li>
                    <li className="group flex flex-col items-start gap-x-[10px] gap-y-5 sm:flex-row sm:items-center">
                      <Link to="/blog-details" className="block overflow-hidden rounded-[10px]">
                        <img src="assets/img/images/th-1/recent-blog-img-2.jpg" alt="recent-blog-img-2" width="150" height="100" className="h-auto w-full transition-all duration-300 group-hover:scale-110" />
                      </Link>
                      <div className="flex-1">
                        {/* <!-- POst Meta --> */}
                        <span className="mb-[10px] block text-base">June 16, 2024</span>
                        {/* <!-- POst Meta --> */}
                        <Link to="/blog-details" className="display-heading display-heading-5">My 3 tips for business ideas</Link>
                      </div>
                    </li>
                    <li className="group flex flex-col items-start gap-x-[10px] gap-y-5 sm:flex-row sm:items-center">
                      <Link to="/blog-details" className="block overflow-hidden rounded-[10px]">
                        <img src="assets/img/images/th-1/recent-blog-img-3.jpg" alt="recent-blog-img-3" width="150" height="100" className="h-auto w-full transition-all duration-300 group-hover:scale-110" />
                      </Link>
                      <div className="flex-1">
                        {/* <!-- POst Meta --> */}
                        <span className="mb-[10px] block text-base">June 14, 2024</span>
                        {/* <!-- POst Meta --> */}
                        <Link to="/blog-details" className="display-heading display-heading-5">12 Halloween costume ideas</Link>
                      </div>
                    </li>
                  </ul>
                  {/* <!-- Category List - Blog --> */}
                </li>
                {/* <!-- Sidebar Item - Recent Post --> */}

                {/* <!-- Sidebar Item - Tags --> */}
                <li>
                  <h4 className="mb-4">Tags:</h4>

                  {/* <!-- Category List - Blog --> */}
                  <ul className="flex flex-wrap gap-x-[10px] gap-y-3">
                    <li>
                      <Link to="/blog-1" className="inline-block rounded-[50px] bg-black/5 px-6 py-2 text-base hover:bg-black hover:text-white">Marketing</Link>
                    </li>
                    <li>
                      <Link to="/blog-1" className="inline-block rounded-[50px] bg-black/5 px-6 py-2 text-base hover:bg-black hover:text-white">Business</Link>
                    </li>
                    <li>
                      <Link to="/blog-1" className="inline-block rounded-[50px] bg-black/5 px-6 py-2 text-base hover:bg-black hover:text-white">Studio</Link>
                    </li>
                    <li>
                      <Link to="/blog-1" className="inline-block rounded-[50px] bg-black/5 px-6 py-2 text-base hover:bg-black hover:text-white">Solutions</Link>
                    </li>
                    <li>
                      <Link to="/blog-1" className="inline-block rounded-[50px] bg-black/5 px-6 py-2 text-base hover:bg-black hover:text-white">Brand</Link>
                    </li>
                  </ul>
                  {/* <!-- Category List - Blog --> */}
                </li>
                {/* <!-- Sidebar Item - Tags --> */}
              </ul>
              {/* <!-- Sidebar List --> */}
            </aside>
            {/* <!-- Aside Block --> */}
          </div>
          {/* <!-- Blog area --> */}
        </div>
        {/* <!-- Section Container --> */}
      </div>
      {/* <!-- Section Space --> */}
    </div>
  )
}
