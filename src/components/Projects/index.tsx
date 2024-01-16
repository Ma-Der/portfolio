import { ProjectsProps } from "../../contracts/components/Projects";
import { Project } from "./Project";
import styles from "./rwd.module.scss";

const {
  wrapper,
  wrapperTitle,
  wrapperContainer,
  wrapperContainerProject,
  wrapperContainerProjectTitle,
} = styles;

export const Projects = ({ frontend, backend, title }: ProjectsProps) => {
  return (
    <div className={wrapper}>
      <h2 className={wrapperTitle}>{title}</h2>
      <div className={wrapperContainer}>
        <div className={wrapperContainerProject}>
          <h3 className={wrapperContainerProjectTitle}>{frontend.title}</h3>
          <p>{frontend.description}</p>
          {frontend.projects.map((project, i) => (
            <Project key={`${project.title}${i}`} {...project} />
          ))}
        </div>
        <div className={wrapperContainerProject}>
          <h3 className={wrapperContainerProjectTitle}>{backend.title}</h3>
          {backend.projects.map((project, i) => (
            <Project key={`${project.title}${i}`} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};
