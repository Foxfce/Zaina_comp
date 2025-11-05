import { ROUTE } from "./routes";
import { TEXT_TH } from "./th";

export interface ModalList {
  title: string;
  path: string;
}

export interface LinkItem {
  name: string;
  path: string;
  modalList: ModalList[];
}

export type LinkNav = LinkItem[];

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
      modalList: [
        {
          title: TEXT_TH.CATALOGUE.ROLLER_BLIND,
          path: ROUTE.ROLLER_BLIND,
        },
        {
          title: TEXT_TH.CATALOGUE.VERTICAL_BLIND,
          path: ROUTE.VERTICAL_BLIND,
        },
        {
          title: TEXT_TH.CATALOGUE.WOODEN_BLIND,
          path: ROUTE.WOODEN_BLIND,
        },
        {
          title: TEXT_TH.CATALOGUE.EYELET_CURTAIN,
          path: ROUTE.EYELET_CURTAIN,
        },
        {
          title: TEXT_TH.CATALOGUE.INT_FILM,
          path: ROUTE.INT_FILM,
        },
        {
          title: TEXT_TH.CATALOGUE.SKYLIGHT,
          path: ROUTE.SKYLIGHT,
        },
        {
          title: TEXT_TH.CATALOGUE.MOTOR_SYSTEM,
          path: ROUTE.MOTOR_SYSTEM,
        },
      ]
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
  ]