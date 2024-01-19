import { FormLabels, PopUpMessages } from "./utilityTypes";

export type ContactProps = {
  title: string;
  github: string;
  linkedin: string;
  phone: string;
  email: string;
  popup: PopUpMessages;
  form: FormLabels & {
    title: string;
    messagePlaceholder: string;
    buttonText: string;
  };
};
