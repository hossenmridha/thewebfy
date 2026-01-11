 
import { Link } from "react-router-dom"  
import { useEffect, useState } from 'react';
import useSticky from "../../hooks/use-sticky";
import menu_data from "../../data/menu_data";


interface NavmenuProps {
  menu_color?: boolean;
}
interface MenuItem {
  title: string;
  link: string;
  has_dropdown?: boolean;
  sub_menus?: MenuItem[];
  has_inner_dropdown?: boolean;
}




export default function HeaderFive({ menu_color }: NavmenuProps) {
  const { sticky } = useSticky();
  const [isOpen, setIsOpen] = useState(false);

  // Mobile menu stack
  const [menuStack, setMenuStack] = useState<{ menu: MenuItem[]; title: string }[]>([
    { menu: menu_data, title: "" },
  ]);
  const current = menuStack[menuStack.length - 1];

  // Desktop hover states
  const [hoverMenuIndex, setHoverMenuIndex] = useState<number | null>(null);
  const [hoverInnerIndex, setHoverInnerIndex] = useState<{ [key: string]: number | null }>({});

  // Mobile submenu navigation
  const showSubMenu = (item: MenuItem) => {
    if (!item.sub_menus) return;
    setMenuStack((prev) => [...prev, { menu: item.sub_menus!, title: item.title }]);
  };

  const goBack = () => {
    setMenuStack((prev) => (prev.length > 1 ? prev.slice(0, prev.length - 1) : prev));
  };

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && isOpen) {
        setIsOpen(false);
        setMenuStack([{ menu: menu_data, title: "" }]);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Recursive dropdown renderer for desktop
  const renderDropdown = (menus: MenuItem[], keyPrefix: string, level = 1) => (
    <ul className={`sub-menu ${level > 1 ? "shape-none" : ""}`}>
      {menus.map((menu, idx) => {
        const key = `${keyPrefix}-${idx}`;
        const hasInner = menu.has_inner_dropdown && menu.sub_menus?.length;

        return (
          <li
            key={key}
            className={`sub-menu--item ${hasInner ? "nav-item-has-children" : ""}`}
            onMouseEnter={() => hasInner && setHoverInnerIndex((prev) => ({ ...prev, [key]: idx }))}
            onMouseLeave={() => hasInner && setHoverInnerIndex((prev) => ({ ...prev, [key]: null }))}
          >

            <Link to={menu.link} className="nav-link-item drop-trigger">
              {menu.title}
              {hasInner && (
                <img
                  src="assets/img/icons/icon-caret-down.svg"
                  alt="caret"
                  width="7"
                  height="4"
                  className="-rotate-90"
                />
              )}
            </Link>

            {hasInner &&
              hoverInnerIndex[key] !== null &&
              menu.sub_menus &&
              renderDropdown(menu.sub_menus, key, level + 1)}
          </li>
        );
      })}
    </ul>
  );

  return (
    <header className={`section-header site-header fixed top-0 z-30 w-full bg-[#073D30] py-2 ${sticky ? 'scrolling' : ''}`}>
      {/* <!-- Section Container --> */}
      <div className="container">
        {/* <!-- Header Area --> */}
        <div className="flex items-center justify-between">
          {/* <!-- Header Left Block --> */}
          <div className="flex items-center gap-x-10">
            {/* <!-- Header Logo --> */}
            <Link to="/" className="h-auto w-auto">
              <img src="assets/img/logo-white.png" alt="logo-white" width="121" height="24" />
            </Link>
            {/* <!-- Header Logo --> */}
          </div>
          {/* <!-- Header Left Block --> */}

          {/* <!-- Header Navigation --> */}
          <div className="menu-block-wrapper relative">
            <div
              className={`menu-overlay ${isOpen ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            />

            <nav className={`menu-block ${isOpen ? "active" : ""}`}>
              {/* Mobile header */}
              <div className={`mobile-menu-head ${menuStack.length > 1 ? "active" : ""}`}>
                <div className="go-back" onClick={goBack}>
                  <img
                    src="assets/img/icons/icon-caret-down.svg"
                    alt="caret"
                    width="12"
                    height="7"
                  />
                </div>
                <div className="current-menu-title">{current.title}</div>
                <div className="mobile-menu-close" onClick={() => setIsOpen(false)}>
                  &times;
                </div>
              </div>

              {/* Menu list */}
              <ul className="site-menu-main">
                {current.menu.map((menu, i) => (
                  <li
                    key={i}
                    onMouseEnter={() => setHoverMenuIndex(i)}
                    onMouseLeave={() => setHoverMenuIndex(null)}
                    onClick={(e) => {
                      if (isOpen && (menu.has_dropdown || menu.has_inner_dropdown)) {
                        e.preventDefault();
                        showSubMenu(menu);
                      }
                    }}
                    className={`${menu_color ? '' : 'lg:text-white'} ${menu.has_dropdown ? "nav-item nav-item-has-children" : "nav-link-item drop-trigger"} text-colorDark rounded-none border border-transparent `}
                  >
                    <Link to={menu.link} className="nav-link-item drop-trigger">
                      {menu.title}
                      {(menu.has_dropdown || menu.has_inner_dropdown) && (
                        <img
                          src="assets/img/icons/icon-caret-down.svg"
                          alt="icon-caret-down"
                          width="7"
                          height="4"
                          className={`-rotate-90 invert-0 lg:rotate-0 ${menu_color ? '' : 'lg:invert'}`}
                        />
                      )}
                    </Link>

                    {/* Desktop dropdown */}
                    {menu.has_dropdown &&
                      menu.sub_menus &&
                      hoverMenuIndex === i &&
                      !isOpen &&
                      renderDropdown(menu.sub_menus, `menu-${i}`)}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* <!-- Header Navigation --> */}

          {/* <!-- Header Right Block --> */}
          <div className="flex items-center gap-x-6">
            <Link to="/service" className="group hidden rounded-[50px] bg-[#FBD718] px-8 py-3 text-base font-bold text-[#073D30] lg:inline-flex lg:px-6 lg:py-4">
              <div className="relative flex items-center justify-center overflow-hidden">
                <span className="translate-y-0 transition-all duration-300 group-hover:-translate-y-full">Contact Us</span>
                <span className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0">Contact Us</span>
              </div>
            </Link>
            {/* <!-- Responsive Offcanvas Menu Button --> */}
            <div className="block lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} id="openBtn" className="hamburger-menu mobile-menu-trigger">
                <span className="bg-white before:bg-white after:bg-white"></span>
              </button>
            </div>
          </div>
          {/* <!-- Header Right Block --> */}
        </div>
        {/* <!-- Header Area --> */}
      </div>
      {/* <!-- Section Container --> */}
    </header>
  )
}
