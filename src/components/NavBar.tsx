import { assets } from "../assets/mockup/assets.ts"
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu.tsx";
import { links } from "@/constants/links.ts";
import { LogoIcon, LogoZaina } from "@/icons/iconIndex.tsx";
import NavMenu from "./NavMenu.tsx";

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
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-15 bg-transparent">

        {/* <img src={assets.logo} alt="" /> */}
        <div className="flex justify-center items-center gap-2">
          <LogoIcon className='fill-red-primary h-10' />
          <LogoZaina className='h-8' />
        </div>

        <nav className="hidden lg:flex gap-7">
          {/* {links.map((link, index) =>
            <Link key={index} to={link.path} className="cursor-pointer text-softperl-primary hover:text-primary flex h-full justify-center items-center align-middle transition-all">{link.name}</Link>
          )} */}
          <NavMenu links={links} />
        </nav>

        <button className="btn-main-1 rounded-8 hidden lg:block transition-all">Sign In</button>
        <img
          onClick={handleShowMobileMenu}
          src={assets.menu_icon}
          alt=""
          className="lg:hidden w-7 cursor-pointer" />
      </div>

      {/* -------------- mobile-menu ------------- */}
      <MobileMenu
        showMobileMenuProp={showMobileMenu}
        handleShowMobileMenu={handleShowMobileMenu}
        links={links}
        assets={assets} />

    </div>
  )
}
export default NavBar