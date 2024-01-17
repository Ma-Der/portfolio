import { PopUpProps } from "../../../contracts/components/Contact/utilityTypes";

export const PopUp = ({ confirmation, popup }: PopUpProps) => {
  return (
    <div>
      {confirmation ? (
        <div>{popup.positive}</div>
      ) : (
        <div>{popup.negative}</div>
      )}
    </div>
  );
};
