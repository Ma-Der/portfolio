import { ProjectProps } from "./utilityTypes";

export type ProjectsProps = {
  title: string;
  footerHeight: number;
  frontend: {
    title: string;
    projects: ProjectProps[];
  };
  backend: {
    title: string;
    projects: ProjectProps[];
  };
};
