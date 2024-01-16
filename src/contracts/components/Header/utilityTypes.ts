import { Dispatch, SetStateAction } from "react";
import { Language } from "..";

export type LanguagesProps = {
  setOpenMenu?: Dispatch<SetStateAction<boolean>>;
  setLanguage: Dispatch<SetStateAction<Language>>;
};
