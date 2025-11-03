import { ROUTE } from "./routes";
import { TEXT_TH } from "./th";

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

export const links: LinkNav = [
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