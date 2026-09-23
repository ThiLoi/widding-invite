import foto1 from "./M&W-120 1.png";
import foto2 from "./M&W-048 1.png";
import styles from "./Styles.module.css";

export function Middle() {
  return (
    <>
      <div className={styles.middle}>
        <p>
          Dizem por aí que os opostos se atraem, mas no nosso caso, eles se
          completam em perfeita sintonia. <br /> Entre a tranquilidade de um e a
          energia do outro, construímos uma história leve, cheia de risadas,
          cumplicidade e momentos inesquecíveis. Cada um com suas
          individualidades envolve o outro e assim, caminhamos para nos tornar
          um. Agora, aquele frio na barriga bom da ansiedade vai dando lugar ao
          momento mais esperado das nossas vidas: o dia em que diremos o nosso
          "sim" diante de quem mais amamos.
          <br /> Sejam muito bem-vindos ao nosso site! Naveguem, aproveitem e
          preparem-se para celebrar conosco o início do nosso "para sempre".
        </p>
      </div>
      <div className={styles.images}>
        <img src={foto1} alt="" />
        <img src={foto2} alt="" />
      </div>
    </>
  );
}
