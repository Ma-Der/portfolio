import { Link } from "react-router-dom";
import { Navigation } from "../Navigation";
import { Languages } from "./Languages";
import styles from "./base.module.scss";
import { useState } from "react";

const { wrapper, wrapperIcon } = styles;

export const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  return (
    <div className={wrapper}>
      <div className={wrapperIcon}>
        <Link to="/" onClick={() => setActiveLink("Home")}>
          Maciej Derewianski
        </Link>
      </div>
      <Navigation activeLink={activeLink} setActiveLink={setActiveLink} />
      <Languages />
    </div>
  );
};
