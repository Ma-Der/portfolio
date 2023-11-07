import { ProjectProps } from "../../../contracts/components/Projects/utilityTypes";
import styles from "./rwd.module.scss";

const { wrapper, wrapperTitle, wrapperImage, wrapperDescription } = styles;

export const Project = ({ title, description, link, image }: ProjectProps) => {
  return (
    <a className={wrapper} href={link} target="_blank" rel="noreferrer">
      <h3 className={wrapperTitle}>{title}</h3>
      {image && (
        <img src={image.src} alt={image.alt} className={wrapperImage} />
      )}
      <div className={wrapperDescription}>{description}</div>
    </a>
  );
};
