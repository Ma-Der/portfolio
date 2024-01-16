import { Dispatch, SetStateAction } from "react";
import { NavigationProps } from "../Header";

export type FooterProps = {
  activeLink: string;
  navigation: NavigationProps[];
  setActiveLink: Dispatch<SetStateAction<string>>;
  footerRef: React.MutableRefObject<HTMLDivElement | null>;
};
