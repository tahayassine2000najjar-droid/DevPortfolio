import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';

export default function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <h1>Mes Projets</h1>
      <p>Voici quelques-unes de mes réalisations récentes.</p>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
