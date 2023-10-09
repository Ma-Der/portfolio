import { LanguagesProps } from "../../../contracts/components/Header/utilityTypes";
import { PolishFlagSVG, USFlagSVG } from "../../shared/Icons";
import styles from "./base.module.scss";

const { wrapper, wrapperIcon } = styles;

export const Languages = ({ setOpenMenu }: LanguagesProps) => {
  return (
    <div className={wrapper}>
      <span
        className={wrapperIcon}
        onClick={() => {
          setOpenMenu && setOpenMenu(false);
        }}
      >
        <PolishFlagSVG />
      </span>
      <span
        className={wrapperIcon}
        onClick={() => {
          setOpenMenu && setOpenMenu(false);
        }}
      >
        <USFlagSVG />
      </span>
    </div>
  );
};
