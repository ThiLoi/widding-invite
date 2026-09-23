import TextoPrincipal from "./Texto Principal.jpg";
import styles from "./Styles.module.css";

export function Heading() {
  return (
    <div className={styles.heading}>
      <img src={TextoPrincipal} alt="" />
    </div>
  );
}
