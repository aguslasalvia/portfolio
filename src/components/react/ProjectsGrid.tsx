import type { Project } from '../../data/portfolio';
import ProjectCard3D from './ProjectCard3D';
import './ProjectsGrid.css';

// One island for the whole grid instead of one per card — same visual
// result, but a single hydration root and a single "is it visible yet"
// check instead of nine.
export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard3D key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
