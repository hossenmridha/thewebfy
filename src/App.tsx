import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeOne from "./components/homes/home";
import HomeTwo from "./components/homes/home-2";
import HomeThree from "./components/homes/home-3";
import HomeFour from "./components/homes/home-4";
import HomeFive from "./components/homes/home-5";
import HomeSix from "./components/homes/home-6";
import HomeSeven from "./components/homes/home-7";
import HomeEight from "./components/homes/home-8";
import HomeNine from "./components/homes/home-9";
import About from "./components/about";
import Service from "./components/service";
import ServiceDetails from "./components/service-details";
import PortfolioOne from "./components/portfolio-1";
import PortfolioTwo from "./components/portfolio-2";
import PortfolioDetails from "./components/portfolio-details";
import Team from "./components/team";
import TeamDetails from "./components/team-details";
import ComingSoon from "./components/ComingSoon";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ResetPassword from "./components/ResetPassword";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Testimonial from "./components/Testimonial";
import BlogOne from "./components/blog-1";
import BlogTwo from "./components/blog-2";
import BlogThree from "./components/blog-3";
import BlogFour from "./components/blog-4";
import BlogDetails from "./components/blog-details";
import Contact from "./components/contact";
import NotFound from "./components/error"; 

const router = createBrowserRouter([
	{ path: "/", element: <HomeOne /> },
	{ path: "/home-2", element: <HomeTwo /> },
	{ path: "/home-3", element: <HomeThree /> },
	{ path: "/home-4", element: <HomeFour /> },
	{ path: "/home-5", element: <HomeFive /> },
	{ path: "/home-6", element: <HomeSix /> },
	{ path: "/home-7", element: <HomeSeven /> },
	{ path: "/home-8", element: <HomeEight /> },
	{ path: "/home-9", element: <HomeNine /> },
	{ path: "/about", element: <About /> },
	{ path: "/service", element: <Service /> },
	{ path: "/service-details", element: <ServiceDetails /> },
	{ path: "/portfolio-1", element: <PortfolioOne /> },
	{ path: "/portfolio-2", element: <PortfolioTwo /> },
	{ path: "/portfolio-details", element: <PortfolioDetails /> },
	{ path: "/team", element: <Team /> },
	{ path: "/team-details", element: <TeamDetails /> },
	{ path: "/coming-soon", element: <ComingSoon /> },
	{ path: "/log-in", element: <Login /> },
	{ path: "/sign-up", element: <Signup /> },
	{ path: "/reset-password", element: <ResetPassword /> },
	{ path: "/pricing", element: <Pricing /> },
	{ path: "/faq", element: <Faq /> },
	{ path: "/testimonial", element: <Testimonial /> },
	{ path: "/blog-1", element: <BlogOne /> },
	{ path: "/blog-2", element: <BlogTwo /> },
	{ path: "/blog-3", element: <BlogThree /> },
	{ path: "/blog-4", element: <BlogFour /> },
	{ path: "/blog-details", element: <BlogDetails /> },
	{ path: "/contact", element: <Contact /> },

	{ path: "*", element: <NotFound /> },
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />; 
		</>
	);
}

export default App;
