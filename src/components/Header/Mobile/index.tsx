import { Link } from "react-router-dom";
import { Navigation } from "../../Navigation";
import { Languages } from "../Languages";
import styles from "./rwd.module.scss";
import { HeaderProps } from "../../../contracts/components/Header";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { Fragment, useState } from "react";
import { cx } from "../../../utils/cx";

const {
  wrapper,
  wrapperContainer,
  wrapperClose,
  wrapperIcon,
  hide,
  hamburger,
  moveLeft,
} = styles;

export const MobileHeader = ({ activeLink, setActiveLink }: HeaderProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  useLockBodyScroll(openMenu);

  return (
    <Fragment>
      <div
        className={cx(hamburger, openMenu && moveLeft)}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={cx(wrapper, !openMenu && hide)}>
        <div className={wrapperContainer}>
          <div className={wrapperClose} onClick={() => setOpenMenu(!openMenu)}>
            <span></span>
            <span></span>
          </div>
          <div className={wrapperIcon}>
            <Languages setOpenMenu={setOpenMenu} />
            <Link to="/" onClick={() => {
              setActiveLink("Home");
              setOpenMenu && setOpenMenu(false);
            }}>
              Maciej Derewianski
            </Link>
          </div>
          <Navigation activeLink={activeLink} setActiveLink={setActiveLink} setOpenMenu={setOpenMenu} />
        </div>
      </div>
    </Fragment>
  );
};
