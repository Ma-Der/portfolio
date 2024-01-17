import { PopUpProps } from "../../../contracts/components/Contact/utilityTypes";
import { cx } from "../../../utils/cx";
import { CheckSVG, ErrorSVG } from "../../shared/Icons";
import styles from "./base.module.scss";

const { wrapper, wrapperContent, wrapperContentText, wrapperVisible } = styles;

export const PopUp = ({
  confirmation,
  activatePopup,
  popup,
  setActivatePopup,
}: PopUpProps) => {
  return (
    <div
      className={cx(wrapper, activatePopup && wrapperVisible)}
      onClick={() => setActivatePopup(!activatePopup)}
    >
      {confirmation ? (
        <div className={wrapperContent}>
          <p className={wrapperContentText}>{popup.positive}</p>
          <span>
            <CheckSVG />
          </span>
        </div>
      ) : (
        <div className={wrapperContent}>
          <p className={wrapperContentText}>{popup.negative}</p>
          <span>
            <ErrorSVG />
          </span>
        </div>
      )}
    </div>
  );
};
