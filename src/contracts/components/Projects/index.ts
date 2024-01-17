import { ProjectProps } from "./utilityTypes";

export type ProjectsProps = {
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
