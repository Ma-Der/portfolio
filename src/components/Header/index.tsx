import { Link } from "react-router-dom";
import { Navigation } from "../Navigation";
import { Languages } from "./Languages";
import styles from "./rwd.module.scss";
import { HeaderProps } from "../../contracts/components/Header";

const { wrapper, wrapperContainer, wrapperIcon } = styles;

export const Header = ({ activeLink, setActiveLink }: HeaderProps) => {
  return (
    <div className={wrapper}>
      <div className={wrapperContainer}>
        <div className={wrapperIcon}>
          <Link to="/" onClick={() => setActiveLink("Home")}>
            Maciej Derewianski
          </Link>
        </div>
        <Navigation activeLink={activeLink} setActiveLink={setActiveLink} />
        <Languages />
      </div>
    </div>
  );
};
