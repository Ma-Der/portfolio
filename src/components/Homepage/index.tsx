import { HomepageProps } from "../../contracts/components/Homepage";
import styles from "./base.module.scss";

const { wrapper } = styles;

export const Homepage = ({
  title,
  description,
}: HomepageProps) => {
  return (
    <div className={wrapper}>
      <h3>{title}</h3>
      <div>{description}</div>
    </div>
  );
};
