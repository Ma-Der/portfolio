import { Link } from "react-router-dom";
import styles from "./rwd.module.scss";
import { HeaderProps } from "../../contracts/components/Header";
import { cx } from "../../utils/cx";

const { wrapper, wrapperLink, active } = styles;

export const Navigation = ({
  activeLink,
  navigation,
  setActiveLink,
  setOpenMenu,
}: Omit<HeaderProps, "setLanguage">) => {
  return (
    <div className={wrapper}>
      {navigation.map((item) => {
        return (
          <Link
            className={cx(wrapperLink, activeLink === item.name ? active : "")}
            onClick={() => {
              setActiveLink(item.name);
              setOpenMenu && setOpenMenu(false);
            }}
            to={item.link}
            key={`${item.name}+${item.name}`}
          >
            {item.displayName}
          </Link>
        );
      })}
    </div>
  );
};
