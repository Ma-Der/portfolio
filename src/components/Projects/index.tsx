import { ProjectsProps } from "../../contracts/components/Projects";
import { Project } from "./Project";
import styles from "./rwd.module.scss";

const { wrapper, wrapperProject, wrapperProjectTitle } = styles;

export const Projects = ({
  footerHeight,
  frontend,
  backend,
}: ProjectsProps) => {
  return (
    <div className={wrapper} style={{ marginBottom: footerHeight + 200 }}>
      <div className={wrapperProject}>
        <h3 className={wrapperProjectTitle}>{frontend.title}</h3>
        {frontend.projects.map((project, i) => (
          <Project key={`${project.title}${i}`} {...project} />
        ))}
      </div>
      <div className={wrapperProject}>
        <h3 className={wrapperProjectTitle}>{backend.title}</h3>
        {backend.projects.map((project, i) => (
          <Project key={`${project.title}${i}`} {...project} />
        ))}
      </div>
    </div>
  );
};
