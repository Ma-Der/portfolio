import { Dispatch, SetStateAction } from "react";

export type FooterProps = {
    activeLink: string;
    setActiveLink: Dispatch<SetStateAction<string>>;
}