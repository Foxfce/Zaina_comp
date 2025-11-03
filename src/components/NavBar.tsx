import { Link } from "react-router-dom";
import { assets } from "../assets/mockup/assets.ts"
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu.tsx";
import { links } from "@/constants/links.ts";

type Props = {}

function NavBar({ }: Props) {

  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  // const [animateMenu, setAnimateMenu] = useState<boolean>(false);

  useEffect(() => {
    if (showMobileMenu) {
      // To prevent scrolling website
      document.body.style.overflow = 'hidden'
      return;
    }
    document.body.style.overflow = 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    };
  }, [showMobileMenu]);

  const handleShowMobileMenu = (): void => {
    if (showMobileMenu) {
      // setAnimateMenu(false);
      setTimeout(() => { setShowMobileMenu(false) }, 300);
    } else {
      // setAnimateMenu(true);
      setTimeout(() => { setShowMobileMenu(true) }, 300);
    }
  };

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-26 bg-transparent">

        <img src={assets.logo} alt="" />

        <nav className="hidden lg:flex gap-7">
          {links.map((link, index) =>
            <Link key={index} to={link.path} className="cursor-pointer text-softperl-primary hover:text-primary flex h-full justify-center items-center align-middle transition-all">{link.name}</Link>
          )}

        </nav>
        <button className="btn-main-1 rounded-full hidden lg:block">Sign In</button>
        <img
          onClick={handleShowMobileMenu}
          src={assets.menu_icon}
          alt=""
          className="lg:hidden w-7 cursor-pointer" />
      </div>

      {/* -------------- mobile-menu ------------- */}

      {/* <div
        className={`fixed lg:hidden w-full right-0 top-0 bottom-0 bg-softperl-primary overflow-hidden transition-all duration-300 ${animateMenu ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={handleShowMobileMenu}
            src={assets.cross_icon}
            className="w-6" alt="" />
        </div>
        <nav className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          {links.map((link, index) =>
            <Link
              key={index}
              onClick={handleShowMobileMenu}
              to={link.path}
              className="cursor-pointer hover:text-primary px-4 py-2 rounded-full inline-block transition-all"
            >{link.name}
            </Link>
          )}
        </nav>
      </div> */}

      <MobileMenu
        showMobileMenuProp={showMobileMenu}
        handleShowMobileMenu={handleShowMobileMenu}
        links={links}
        assets={assets} />

    </div>
  )
}
export default NavBar