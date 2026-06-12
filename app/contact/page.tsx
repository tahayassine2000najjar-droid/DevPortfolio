'use client';

import styles from './page.module.css';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1>Contact</h1>
      <p>N'hésitez pas à me contacter pour toute opportunité.</p>

      <div className={styles.container}>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.field}>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>Envoyer</button>
        </form>

        <div className={styles.socials}>
          <h2>Mes réseaux</h2>
          <div className={styles.links}>
            <a href="https://github.com/tahanajjar" target="_blank" rel="noopener noreferrer">
              GitHub 🔗
            </a>
            <a href="https://linkedin.com/in/tahanajjar" target="_blank" rel="noopener noreferrer">
              LinkedIn 💼
            </a>
            <a href="mailto:tahayassine2000najjar@gmail.com" className={styles.email}>
              tahayassine2000najjar@gmail.com ✉️
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
