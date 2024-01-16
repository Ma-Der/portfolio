import { HobbyProps } from "../../contracts/components/Hobby";

export const Hobby = ({ title, description }: HobbyProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
