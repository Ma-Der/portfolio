import { ContactProps } from "../../contracts/components/Contact";

export const Contact = ({ footerHeight }: ContactProps) => {
  return <div style={{marginBottom: footerHeight + 30}}>Contact</div>;
};
