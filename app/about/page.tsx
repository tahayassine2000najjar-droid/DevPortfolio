import { experiences } from '@/data/experiences';
import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.about}>
      <section className={styles.bio}>
        <div className={styles.avatar}>👤</div>
        <h1>À propos de moi</h1>
        <p>
          Développeur passionné avec une soif d'apprendre continuelle. 
          J'aime résoudre des problèmes complexes et construire des interfaces utilisateur intuitives.
        </p>
      </section>

      <section className={styles.timeline}>
        <h2>Parcours</h2>
        <div className={styles.items}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.item}>
              <h3>{exp.title}</h3>
              <h4>{exp.organization} | {exp.period}</h4>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
