import Logo from "./imgs/Logo.svg";
import styles from "./Styles.module.css";

export function Heading() {
  return (
    <div className={styles.heading}>
      <div className={styles.bordas}>
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
}
