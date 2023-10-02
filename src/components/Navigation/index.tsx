import { Link } from "react-router-dom";
import staticData from "../../utils/static-content.json";

import styles from "./rwd.module.scss";

const { navigation } = staticData;

export const Navigation = () => {
  return (
    <div>
      {navigation.map((item) => {
        return (
          <Link to={item.link} key={`${item.name}+${item.name}`}>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};
