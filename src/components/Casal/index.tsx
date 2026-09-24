import foto1 from "./M&W-068 1.png";
import foto2 from "./M&W-090 1.png";
import styles from "./Styles.module.css";
import "swiper/css";

import carro1 from "./M&W-030 1.png";
import carro2 from "./M&W-065 1.png";
import carro3 from "./M&W-133 1.png";
import carro4 from "./M&W-159 1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export function Casal() {
  return (
    <>
      <div className={styles.casal}>
        <h1>O CASAL</h1>
        <div className={styles.images}>
          <img src={foto1} alt="" />
          <img src={foto2} alt="" />
        </div>
        <p>
          Há um texto que diz haver uma certa coincidência no amor, não sendo
          tolo dizer que o amor é sagrado, e nós vivemos isso. Estivemos nos
          mesmos lugares, até que em um momento determinado um abrilhantou os
          olhos do outro de forma diferente e singular. Ao longo desse tempo
          juntos, temos vivido a Graça de Deus, que nos cerca pelo Teu infinito
          amor, e assim daremos início a nossa família!
        </p>
      </div>

      <Swiper
        className={styles.carross}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500, // Tempo de espera em milissegundos (2.5 segundos)
          disableOnInteraction: false, // Continua rodando mesmo se o usuário interagir/clicar
          pauseOnMouseEnter: true, // Pausa quando o mouse passa por cima
          reverseDirection: false, // Inverte a direção do autoplay se true
          stopOnLastSlide: false, // Para no último slide se true (necessário loop: false)
        }}
        speed={1200}
        loop={true}
      >
        <SwiperSlide>
          <img src={carro1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carro2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carro3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carro4} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
