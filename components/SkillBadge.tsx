import { Skill } from '../types';
import styles from './SkillBadge.module.css';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <div className={styles.badge}>
      <span className={styles.icon}>{skill.icon}</span>
      <div className={styles.info}>
        <span className={styles.name}>{skill.name}</span>
        <span className={styles.level}>{skill.level}</span>
      </div>
    </div>
  );
};

export default SkillBadge;
