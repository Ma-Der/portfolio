import { GithubSVG, LinkedinSVG } from "../shared/Icons";
import styles from "./rwd.module.scss";
import { Link } from "react-router-dom";
import { FooterProps } from "../../contracts/components/Footer";
import { cx } from "../../utils/cx";
import { useState } from "react";

const {
  wrapper,
  wrapperContainer,
  wrapperIcons,
  wrapperIconsIcon,
  wrapperInitials,
  wrapperInitialsLetters,
  wrapperInitialsName,
  wrapperInitialsSurname,
  wrapperRightSide,
  wrapperLeftSide,
  wrapperLeftSideMenuLink,
  wrapperCopyright,
  active,
} = styles;

export const Footer = ({
  activeLink,
  navigation,
  setActiveLink,
  footerRef,
}: FooterProps) => {
  const [year] = useState(new Date().getFullYear());
  return (
    <div ref={footerRef} className={wrapper}>
      <div className={wrapperContainer}>
        <div className={wrapperLeftSide}>
          {navigation.map((item) => {
            return (
              <Link
                className={cx(
                  wrapperLeftSideMenuLink,
                  activeLink === item.name ? active : ""
                )}
                onClick={() => setActiveLink(item.name)}
                to={item.link}
                key={`${item.link}_${item.name}`}
              >
                {item.displayName}
              </Link>
            );
          })}
        </div>
        <div className={wrapperRightSide}>
          <Link
            to="/"
            className={wrapperInitials}
            onClick={() => setActiveLink("Home")}
          >
            <div className={cx(wrapperInitialsName, wrapperInitialsLetters)}>
              M
            </div>
            <div className={cx(wrapperInitialsSurname, wrapperInitialsLetters)}>
              D
            </div>
          </Link>
          <div className={wrapperIcons}>
            <a
              href={"https://www.linkedin.com/in/ma-der/"}
              target="_blank"
              rel="noreferrer"
              className={wrapperIconsIcon}
            >
              <LinkedinSVG />
            </a>
            <a
              href={"https://github.com/Ma-Der"}
              target="_blank"
              rel="noreferrer"
              className={wrapperIconsIcon}
            >
              <GithubSVG />
            </a>
          </div>
        </div>
      </div>

      <p className={wrapperCopyright}>
        &#169; {year} Maciej Derewiański. All rights reserved.
      </p>
    </div>
  );
};
