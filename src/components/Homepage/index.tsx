import { HomepageProps } from "../../contracts/components/Homepage";
import styles from "./base.module.scss";

const { wrapper } = styles;

export const Homepage = ({
  title,
  description,
  footerHeight,
}: HomepageProps) => {
  return (
    <div className={wrapper} style={{ marginBottom: footerHeight + 30 }}>
      <h3>{title}</h3>
      <div>{description}</div>
    </div>
  );
};
