import { ProjectProps } from "./utilityTypes";

export type ProjectsProps = {
  title: string;
  frontend: {
    title: string;
    description: string;
    projects: ProjectProps[];
  };
  backend: {
    title: string;
    projects: ProjectProps[];
  };
};
