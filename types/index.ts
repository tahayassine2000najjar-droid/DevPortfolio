export type SkillLevel = 'Débutant' | 'Intermédiaire' | 'Avancé';

export interface Project {
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  demoUrl: string;
}

export interface Skill {
  name: string;
  level: SkillLevel;
  category:'Frontend' | 'Backend' | 'Outils';
  icon: string;
}

export interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string;
}
