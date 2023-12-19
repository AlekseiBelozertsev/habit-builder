import { awardIcon, homeIcon, likedIcon, searchIcon } from "../assets";

export type NavigationType = {
  label: string;
  path: string;
  iconSrc: string;
}[];

export const navigation: NavigationType = [
  {
    label: "Home",
    path: "/",
    iconSrc: homeIcon,
  },
  {
    label: "My habits",
    path: "/my-habits",
    iconSrc: likedIcon,
  },
  {
    label: "My achievemnts",
    path: "/",
    iconSrc: awardIcon,
  },
  {
    label: "Search",
    path: "/",
    iconSrc: searchIcon,
  },
];
