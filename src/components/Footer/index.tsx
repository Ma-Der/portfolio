import { GithubSVG, LinkedinSVG } from "../shared/Icons";
import staticData from "../../utils/static-content.json";
import styles from "./rwd.module.scss";
import { Link } from "react-router-dom";
import { FooterProps } from "../../contracts/components/Footer";
import { cx } from "../../utils/cx";

const { navigation } = staticData;

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
  wrapperRightSideMenuLink,
  wrapperCopyright,
  active,
} = styles;

export const Footer = ({ activeLink, setActiveLink }: FooterProps) => {
  return (
    <div className={wrapper}>
      <div className={wrapperContainer}>
        <div className={wrapperLeftSide}>
          <div className={wrapperIcons}>
            <span className={wrapperIconsIcon}>
              <LinkedinSVG />
            </span>
            <span className={wrapperIconsIcon}>
              <GithubSVG />
            </span>
          </div>
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
        </div>
        <div className={wrapperRightSide}>
          {navigation.map((item) => {
            return (
              <Link
                className={cx(
                  wrapperRightSideMenuLink,
                  activeLink === item.name ? active : ""
                )}
                onClick={() => setActiveLink(item.name)}
                to={item.link}
                key={`${item.link}_${item.name}`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      <p className={wrapperCopyright}>
        &#169; 2023 Maciej Derewiański. All rights reserved.
      </p>
    </div>
  );
};
