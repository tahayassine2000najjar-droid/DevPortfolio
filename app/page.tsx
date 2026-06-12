import Link from 'next/link';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1>Taha Yassine Najjar</h1>
        <h2>Développeur Fullstack Junior</h2>
        <p>Passionné par la création d'applications web élégantes et performantes.</p>
        <div className={styles.ctas}>
          <Link href="/portfolio" className={styles.ctaButton}>
            Voir mes projets
          </Link>
          <a href="/cv.pdf" download className={styles.cvButton}>
            Télécharger CV
          </a>
        </div>
      </section>

      <section className={styles.featured}>
        <h2>Projets à la une</h2>
        <div className={styles.projectGrid}>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
