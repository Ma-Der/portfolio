import { HobbyProps } from "../../contracts/components/Hobby";
import styles from './base.module.scss';

const { wrapper, wrapperImage } = styles;

export const Hobby = ({ title, description, images }: HobbyProps) => {
  return (
    <div className={wrapper}>
      <h3>{title}</h3>
      <p>{description}</p>
      <img className={wrapperImage} src={images[0]} alt="Me&Guitar" />
      <img className={wrapperImage} src={images[1]} alt="Stage" />
    </div>
  );
};
