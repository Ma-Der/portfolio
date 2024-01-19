import { Dispatch, SetStateAction } from "react";

export type PopUpProps = {
  confirmation: boolean;
  activatePopup: boolean;
  popup: PopUpMessages;
  setActivatePopup: Dispatch<SetStateAction<boolean>>;
};

export type PopUpMessages = {
  positive: string;
  negative: string;
};

export type FormLabels = {
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
};
