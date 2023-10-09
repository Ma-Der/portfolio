import { Dispatch, SetStateAction } from "react";

export type FooterProps = {
    activeLink: string;
    setActiveLink: Dispatch<SetStateAction<string>>;
    footerRef: React.MutableRefObject<HTMLDivElement | null>;
}