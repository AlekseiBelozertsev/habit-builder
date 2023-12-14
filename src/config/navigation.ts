const homeIcon = require("../assets/home.svg").default;
const likedIcon = require("../assets/liked.svg").default;
const searchIcon = require("../assets/search.svg").default;
const awardIcon = require("../assets/award.svg").default;

export type NavigationType = {
  label: string;
  onClick: () => void;
  iconSrc: string;
}[];
export const navigation: NavigationType = [
  {
    label: "Home",
    onClick: () => null,
    iconSrc: homeIcon,
  },
  {
    label: "My habits",
    onClick: () => null,
    iconSrc: likedIcon,
  },
  {
    label: "My achievemnts",
    onClick: () => null,
    iconSrc: awardIcon,
  },
  {
    label: "Search",
    onClick: () => null,
    iconSrc: searchIcon,
  },
];
