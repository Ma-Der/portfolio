import { Dispatch, SetStateAction } from "react";
import { Language } from "..";

export type HeaderProps = {
  navigation: NavigationProps[];
  activeLink: string;
  setActiveLink: Dispatch<SetStateAction<string>>;
  setLanguage: Dispatch<SetStateAction<Language>>;
  setOpenMenu?: Dispatch<SetStateAction<boolean>>;
};

export type NavigationProps = {
  name: string;
  link: string;
};
