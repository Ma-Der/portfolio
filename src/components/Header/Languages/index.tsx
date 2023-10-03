import { PolishFlagSVG, USFlagSVG } from "../../shared/Icons";
import styles from "./base.module.scss";

const { wrapper, wrapperIcon } = styles;

export const Languages = () => {
  return (
    <div className={wrapper}>
      <span className={wrapperIcon} onClick={() => console.log('polish')}>
        <PolishFlagSVG />
      </span>
      <span className={wrapperIcon} onClick={() => console.log('english')}>
        <USFlagSVG />
      </span>
    </div>
  );
};
