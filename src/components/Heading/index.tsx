import Logo from "./imgs/Logo.svg";
import styles from "./Styles.module.css";

export function Heading() {
  return (
    <div className={styles.heading}>
      <div className={styles.bordas}>
        <img src={Logo} alt="Logo" />
        <h1>
          MATHEUS <br /> & <br /> WÂNIA
        </h1>
        <h2>12 | 12 |2026</h2>
      </div>
    </div>
  );
}
