import emailjs from "@emailjs/browser";
import { RefObject } from "react";

export const sendMail = async (formData: RefObject<HTMLFormElement>) => {
  try {
    if (!formData.current) return;
    const response = await emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID as string,
      process.env.REACT_APP_TEMAPLATE_ID as string,
      formData.current,
      process.env.REACT_APP_MAIL_API_KEY
    );
    if (response.status === 200) {
      return {
        status: 200,
        message: 'sent',
      }
    }
  } catch (err) {
    return {
      status: 400,
      message: err,
    }
  }
};
