import { useRef } from "react";
import { ContactProps } from "../../contracts/components/Contact";
import styles from "./rwd.module.scss";
import { sendMail } from "./hooks";

const {
  wrapper,
  wrapperTitle,
  wrapperIcon,
  wrapperFormContainer,
  wrapperFormContainerForm,
  wrapperFormContainerTitle,
} = styles;

export const Contact = ({
  footerHeight,
  github,
  linkedin,
  phone,
  email,
  title,
}: ContactProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    sendMail(formRef);
  };

  return (
    <div className={wrapper} style={{ marginBottom: footerHeight + 30 }}>
      <h2 className={wrapperTitle}>{title}</h2>
      <div className={wrapperIcon}>
        <a href={github} target="_blank" rel="noreferrer">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/external-github-community-for-software-building-and-testing-online-logo-bold-tal-revivo.png"
            alt="external-github-community-for-software-building-and-testing-online-logo-bold-tal-revivo"
          />
          <p>Github</p>
        </a>
      </div>
      <div className={wrapperIcon}>
        <a href={linkedin} target="_blank" rel="noreferrer">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/external-linkedin-in-logo-used-for-professional-networking-logo-bold-tal-revivo.png"
            alt="external-linkedin-in-logo-used-for-professional-networking-logo-bold-tal-revivo"
          />
          <p>Linkedin</p>
        </a>
      </div>
      <div className={wrapperIcon}>
        <a href="tel:+48512187396">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/windows/96/ringing-phone.png"
            alt="ringing-phone"
          />
          <p>{phone}</p>
        </a>
      </div>
      <div className={wrapperIcon}>
        <a href={`mailto: ${email}`}>
          <img
            width="50"
            height="50"
            src="data:image/png;base64,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"
            alt="email_icon"
          />
          <p>{email}</p>
        </a>
      </div>

      <div className={wrapperFormContainer}>
        <h3 className={wrapperFormContainerTitle}>
          Or just send me a message here:{" "}
        </h3>
        <form
          ref={formRef}
          onSubmit={handleSendMail}
          className={wrapperFormContainerForm}
        >
          <input type="text" hidden value="Maciek" name="to_name" readOnly />

          <label htmlFor="from_name">Name: </label>
          <input name="from_name" id="from_name" required />
          <label htmlFor="reply_to">Your Email: </label>
          <input type="email" name="reply_to" id="reply_to" required />
          <label htmlFor="message">Message: </label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Place your message"
            required
          ></textarea>
          <button className={"btn"} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
