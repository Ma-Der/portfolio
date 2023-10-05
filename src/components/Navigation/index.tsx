import { Link } from "react-router-dom";
import staticData from "../../utils/static-content.json";

import styles from "./rwd.module.scss";
import { HeaderProps } from "../../contracts/components/Header";
import { cx } from "../../utils/cx";

const { navigation } = staticData;

const { wrapper, wrapperLink, active } = styles;

export const Navigation = ({ activeLink, setActiveLink }: HeaderProps) => {
  return (
    <div className={wrapper}>
      {navigation.map((item) => {
        return (
          <Link
            className={cx(wrapperLink, activeLink === item.name ? active : "")}
            onClick={() => setActiveLink(item.name)}
            to={item.link}
            key={`${item.name}+${item.name}`}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};
