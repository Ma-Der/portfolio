import { Link } from "react-router-dom";
import staticData from "../../utils/static-content.json";

import styles from "./rwd.module.scss";

const { navigation } = staticData;

const { wrapper, wrapperLink } = styles;

export const Navigation = () => {
  return (
    <div className={wrapper}>
      {navigation.map((item) => {
        return (
          <Link
            className={wrapperLink}
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
