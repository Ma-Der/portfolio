import { ProjectsProps } from "../../contracts/components/Projects";
import { Project } from "./Project";

export const Projects = ({
  footerHeight,
  frontend,
  backend,
}: ProjectsProps) => {
  return (
    <div style={{ marginBottom: footerHeight + 30 }}>
      <div>
        {frontend.projects.map((project, i) => (
          <Project key={`${project.title}${i}`} {...project} />
        ))}
      </div>
      <div>
        {backend.projects.map((project, i) => (
          <Project key={`${project.title}${i}`} {...project} />
        ))}
      </div>
    </div>
  );
};
