import { MenuItem } from "../types/menu_types";
 

const menu_data: MenuItem[] = [
  
  {
    title: "About Us",
    has_dropdown: false,
    link: "/about",
  },
  {
    title: "Service",
    has_dropdown: true,
    link: "/service",
    sub_menus: [
      {
        title: "Services",
        has_inner_dropdown: true,
        link: "#",
        sub_menus: [
          { title: "Service", link: "/service" },
          { title: "Service Details", link: "/service-details" },
        ],
      },
      {
        title: "Projects",
        has_inner_dropdown: true,
        link: "#",
        sub_menus: [
          { title: "Project 1", link: "/portfolio-1" },
          { title: "Project 2", link: "/portfolio-2" },
          { title: "Project Details", link: "/portfolio-details" },
        ],
      },
      {
        title: "Team",
        has_inner_dropdown: true,
        link: "#",
        sub_menus: [
          { title: "Team", link: "/team" },
          { title: "Team Details", link: "/team-details" },
        ],
      },
      
      {
        title: "Authentication",
        has_inner_dropdown: true,
        link: "#",
        sub_menus: [
          { title: "Sign In", link: "/log-in" },
          { title: "Sign Up", link: "/sign-up" },
          { title: "Reset Password", link: "/reset-password" },
        ],
      },
      { title: "Pricing", has_inner_dropdown: false, link: "/pricing" },
      { title: "FAQ’s", has_inner_dropdown: false, link: "/faq" },
      { title: "Testimonial", has_inner_dropdown: false, link: "/testimonial" },
    ],
  },
  {
    title: "Blog",
    has_dropdown: false,
    link: "blog-1",
  
  },
  {
    title: "Contact Us",
    has_dropdown: false,
    link: "/contact",
  },
];

export default menu_data;
