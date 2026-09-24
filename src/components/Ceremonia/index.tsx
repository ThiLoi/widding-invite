import Styles from "./Styles.module.css";

export function Ceremonia() {
  return (
    <div className={Styles.ceremonia}>
      <h1>CEREMÔNIA</h1>
      <p>
        R. José Célso Cláudio, 134 - Jardim Camburi, Vitória - ES, 29090-410
        (Restaurante Rancho Beliskão).
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.8877388405635!2d-40.26605662400586!3d-20.263490048781513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb819b23d738895%3A0x3d374e23117b412c!2sRancho%20Belisk%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1790162711953!5m2!1spt-BR!2sbr"
        loading="lazy"
      ></iframe>
    </div>
  );
}
