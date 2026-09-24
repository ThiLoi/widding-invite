import styles from "./Styles.module.css";

export function DefaulFooter() {
  return (
    <footer className={styles.footer}>
      <a href="">Wanya & Matheus &copy; {new Date().getFullYear()}</a>
      <a href="">Feito com 💚</a>
    </footer>
  );
}
