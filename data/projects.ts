import { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Portfolio Développeur',
    description: 'Une vitrine professionnelle pour présenter mes projets et compétences.',
    stack: ['Next.js', 'TypeScript', 'Vanilla CSS'],
    githubUrl: 'https://github.com/username/portfolio',
    demoUrl: 'https://demo-demo.app'
  },
  {
    title: 'Gestionnaire de Tâches',
    description: 'Une application de productivité avec glisser-déposer.',
    stack: ['React', 'Redux', 'Node.js'],
    githubUrl: 'https://github.com/username/task-manager',
    demoUrl: 'https://demo-demo.app'
  },
  {
    title: 'E-commerce Lite',
    description: 'Boutique en ligne simplifiée avec panier d\'achat.',
    stack: ['Next.js', 'Stripe', 'Supabase'],
    githubUrl: 'https://github.com/username/ecommerce',
    demoUrl: 'https://demo-demo.app'
  },
  {
    title: 'Dashboard Analytique',
    description: 'Visualisation de données complexes en temps réel.',
    stack: ['React', 'D3.js', 'Firebase'],
    githubUrl: 'https://github.com/username/dashboard',
    demoUrl: 'https://demo-demo.app'
  }
];
