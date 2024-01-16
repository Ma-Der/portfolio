import { LanguagesProps } from "../../../contracts/components/Header/utilityTypes";
import { PolishFlagSVG, USFlagSVG } from "../../shared/Icons";
import styles from "./rwd.module.scss";

const { wrapper, wrapperIcon } = styles;

export const Languages = ({ setOpenMenu, setLanguage }: LanguagesProps) => {
  return (
    <div className={wrapper}>
      <span
        className={wrapperIcon}
        onClick={() => {
          setLanguage("pol");
          setOpenMenu && setOpenMenu(false);
        }}
      >
        <PolishFlagSVG />
      </span>
      <span
        className={wrapperIcon}
        onClick={() => {
          setLanguage("eng");
          setOpenMenu && setOpenMenu(false);
        }}
      >
        <USFlagSVG />
      </span>
    </div>
  );
};
