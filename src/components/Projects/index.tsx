import { ProjectsProps } from "../../contracts/components/Projects";
import { Project } from "./Project";
import styles from "./rwd.module.scss";

const {
  wrapper,
  wrapperContainer,
  wrapperContainerProject,
  wrapperContainerProjectTitle,
  wrapperContainerProjectDescription,
} = styles;

export const Projects = ({ frontend, backend }: ProjectsProps) => {
  return (
    <div className={wrapper}>
      <div className={wrapperContainer}>
        <h3 className={wrapperContainerProjectTitle}>{frontend.title}</h3>
        <p className={wrapperContainerProjectDescription}>{frontend.description}</p>
        <div className={wrapperContainerProject}>
          {frontend.projects.map((project, i) => (
            <Project key={`${project.title}${i}`} {...project} />
          ))}
        </div>
        <h3 className={wrapperContainerProjectTitle}>{backend.title}</h3>
        <div className={wrapperContainerProject}>
          {backend.projects.map((project, i) => (
            <Project key={`${project.title}${i}`} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};
