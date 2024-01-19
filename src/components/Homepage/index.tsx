import { HomepageProps } from "../../contracts/components/Homepage";
import styles from "./base.module.scss";

const { wrapper, wrapperTitle, wrapperImage } = styles;

export const Homepage = ({
  title,
  description,
  frontImage,
}: HomepageProps) => {
  return (
    <div className={wrapper}>
      <h3 className={wrapperTitle}>{title}</h3>
      <img className={wrapperImage} src={frontImage} alt="Front" />
      <div>{description}</div>
    </div>
  );
};
