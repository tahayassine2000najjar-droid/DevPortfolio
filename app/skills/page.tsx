import { skills } from '@/data/skills';
import SkillBadge from '@/components/SkillBadge';
import styles from './page.module.css';

export default function Skills() {
  const categories = ['Frontend', 'Backend', 'Outils'] as const;

  return (
    <div className={styles.skills}>
      <h1>Compétences</h1>
      <p>Mes outils techniques préférés.</p>
      
      {categories.map((category) => (
        <section key={category} className={styles.category}>
          <h2>{category}</h2>
          <div className={styles.grid}>
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
