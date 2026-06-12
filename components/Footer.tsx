import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Mon Portfolio Développeur</p>
    </footer>
  );
};

export default Footer;
