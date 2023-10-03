import { Dispatch, SetStateAction } from "react";

export type HeaderProps = {
    activeLink: string;
    setActiveLink: Dispatch<SetStateAction<string>>;
}