import { Link } from "react-router-dom";
import { TEXT_TH } from "../constants/th";
import { TEXT_EN } from "../constants/en";

import { ROUTE } from "../constants/routes"

type Props = {}

interface ModalList {
  title: string;
  path: string;
}

interface LinkItem {
  name: string;
  path: string;
  modalList: ModalList[];
}

type LinkNav = LinkItem[];

function NavBar({ }: Props) {
  const links: LinkNav = [
    {
      name: TEXT_TH.NAV.HOME,
      path: ROUTE.HOME,
      modalList: []
    },
    {
      name: TEXT_TH.NAV.ABOUT,
      path: ROUTE.ABOUT,
      modalList: []
    },
    {
      name: TEXT_TH.NAV.CATALOGUE,
      path: ROUTE.CATALOGUE,
      modalList: []
    },
    {
      name: TEXT_TH.NAV.SERVICE,
      path: ROUTE.SERVICE,
      modalList: []
    },
    {
      name: TEXT_TH.NAV.WORK,
      path: ROUTE.WORK,
      modalList: []
    },
    {
      name: TEXT_TH.NAV.NEW,
      path: ROUTE.NEW,
      modalList: []
    },
    {
      name: TEXT_TH.NAV.CONTACT,
      path: ROUTE.CONTACT,
      modalList: []
    },
    {
      name: "Pallete",
      path: "/pallete",
      modalList: []
    },
  ]

  return (
    <nav className="hidden md:flex gap-7">
      {links.map((link) =>
        <Link to={link.path} className="cursor-pointer hover:text-primary">{link.name}</Link>
      )}
    </nav>
  )
}
export default NavBar