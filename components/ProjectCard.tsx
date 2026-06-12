import { Project } from '../types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.card}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className={styles.stack}>
        {project.stack.map((tech) => (
          <span key={tech} className={styles.techBadge}>
            {tech}
          </span>
        ))}
      </div>
      <div className={styles.links}>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Démo</a>
      </div>
    </div>
  );
};

export default ProjectCard;
