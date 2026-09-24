import { ProductCard } from "./ProductCard";
import Styles from "./Styles.module.css";
import AparelhoJantar from "./imgs/n23Fo_1773600645.jpg";
import Aspirador from "./imgs/aspirador_po_vertical.jpg";
import Batedeira from "./imgs/31.jpg";
import Cama from "./imgs/cama.jpg";
import Chaleira from "./imgs/Chaleira_Eletrica_Gourmand_Gris.jpg";
import Colcha from "./imgs/Colcha_Casal_Santista_Boutis_Dinis.jpeg";
import ConjuntoBaixelas from "./imgs/Conjunto_de_Baixelas_Tramontina.jpeg";
import ConjuntoPeneiras from "./imgs/conjunto-de-3-peneiras-inox.jpg";
import ConjuntoPotes from "./imgs/Conjunto_de_Potes_Hermeticos_Redondos4.jpeg";
import EspelhosCorpo from "./imgs/CHB3s_1769977213.jpg";
import EspelhosRedondo from "./imgs/espelho_redondo_alca_couro.jpg";
import Faqueiro from "./imgs/ht0dk_1773600786.jpg";
import Grill from "./imgs/GrillBritaniaMultiGrill.jpeg";
import Xicara from "./imgs/QUALIP205.jpg";
import JogoBanho from "./imgs/33.jpg";
import JogoCama from "./imgs/jogo_de_cama_listrado.jpg";
import JogoFaca from "./imgs/jogo_de_facas_suporte_madeira.jpg";
import JogoPanela from "./imgs/jogo_panelas_5_pecas_preto.jpg";
import JogoXicara from "./imgs/jogo_xicaras_para_cafe_com_pires.jpg";
import JogoEdredom from "./imgs/jogo_edredom_cinza.jpg";
import JogoToalha from "./imgs/jogo_toalha_banho_azul_4_pecas.jpg";
import Lavadora from "./imgs/lavadora-e-secadora-de-roupas-8-kg-com-display-digital.jpg";
import Liquidificador from "./imgs/liquidificador-3-velocidades.jpg";
import Lixo from "./imgs/lixo-para-cozinha-inox-6l.jpg";
import Mesa from "./imgs/Mesa_de_Jantar_com_6_Cadeiras.jpeg";
import Mixer from "./imgs/mixer-vermelho-com-utensilios.jpg";
import MaquinaCafe from "./imgs/maquina-de-cafe.jpg";
import PanelaArroz from "./imgs/panela-eletrica-127v.jpg";
import PanelaEletrica from "./imgs/VqAu6_1769973193.jpg";
import PortaCondimentos from "./imgs/porta_condimentos_bambu.jpg";
import Processador from "./imgs/processador_preto_800w.jpg";
import Rack from "./imgs/49.jpg";
import Robo from "./imgs/robôaspiradordepó.png";
import Sanduicheira from "./imgs/Sanduicheira_Mondial_Master_Grill.jpeg";
import SmartTV from "./imgs/smart_tv_led_40_polegadas.jpg";
import Sofa from "./imgs/sofa-preto-3-lugares.jpg";
import Vaporizador from "./imgs/Vaporizador_de_Roupas_Arno.jpeg";
import Ventilador from "./imgs/8RZCo_1769974845.jpg";

export function Presente() {
  return (
    <div className={Styles.presente}>
      <h1>LISTA DE PRESENTE</h1>
      <div className={Styles.produtos}>
        <ProductCard
          image={AparelhoJantar}
          name="Aparelho de Jantar/Chá Oxford Ryo Maresia 30 Peças"
          price="R$690,11"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={Aspirador}
          name="Aspirador de Pó Vertical"
          price="R$264,86"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={Batedeira}
          name="Batedeira Philco Paris com 4 Velocidades - Branca"
          price="R$256,54"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={Cama}
          name="Cama box + colchão"
          price="R$4.404,69"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={Chaleira}
          name="Chaleira Elétrica Gourmand Gris 1,8L"
          price="R$278,71"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={Colcha}
          name="Colcha Casal Santista Boutis Dinis"
          price="R$504,61"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={ConjuntoBaixelas}
          name="Conjunto de Baixelas Tramontina"
          price="R$466,77"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={ConjuntoPeneiras}
          name="Conjunto de peneiras"
          price="R$230,23"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={ConjuntoPotes}
          name="Conjunto de Potes Herméticos Redondos 4 peças"
          price="R$201,98"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={EspelhosCorpo}
          name="Espelho De Corpo Inteiro"
          price="R$312,79"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={EspelhosRedondo}
          name="Espelho Redondo 40 cm com Alça em Couro"
          price="R$401,68"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={Faqueiro}
          name="Faqueiro - 42 Peças"
          price="R$682,92"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={Grill}
          name="Grill Britânia Multi Grill"
          price="R$237,16"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={Xicara}
          name="Jogo com 6 Xícaras para Café com Pires modelo Crystal Chess"
          price="R$353,22"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={JogoBanho}
          name="Jogo de Banho Buddemeyer"
          price="R$426,29"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={JogoCama}
          name="Jogo de Cama Listrado"
          price="R$374,07"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={JogoFaca}
          name="Jogo de Facas com Suporte em Madeira - 7 peças"
          price="R$526,33"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={JogoPanela}
          name="Jogo de Panelas Preto - 5 Peças"
          price="R$990,26"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={JogoXicara}
          name="Jogo de Xícaras para Café com Pires - 12 peças"
          price="R$359,40"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={JogoEdredom}
          name="Jogo Edredom Casal Cinza - 3 Peças"
          price="R$657,89"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={JogoToalha}
          name="Jogo Toalha de Banho Azul - 4 Peças"
          price="R$261,80"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={Lavadora}
          name="Lavadora e secadora de roupas"
          price="R$4.466,29"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={Liquidificador}
          name="Liquidificador"
          price="R$327,17"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={Lixo}
          name="Lixo para cozinha"
          price="R$265,73"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={Mesa}
          name="Mesa de Jantar com 4 Cadeiras"
          price="R$3.841,80"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={Mixer}
          name="Mixer 3 em 1 Vermelho"
          price="R$359,33"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={MaquinaCafe}
          name="Máquina de Café Expresso"
          price="R$449,85"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={PanelaArroz}
          name="Panela de Arroz Elétrica"
          price="R$279,50"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={PanelaEletrica}
          name="Panela de Pressão Elétrica"
          price="R$499,18"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={PortaCondimentos}
          name="Porta Condimentos com Base Giratória em Madeira"
          price="R$230,23"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={Processador}
          name="Processador de Alimentos Preto - 800W"
          price="R$466,77"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={Rack}
          name="Rack"
          price="R$512,28"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={Robo}
          name="Robô Aspirador de Pó"
          price="R$1.267,24"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={Sanduicheira}
          name="Sanduicheira Mondial Master Grill"
          price="R$221,92"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={SmartTV}
          name="Smart TV LED 43 Polegadas"
          price="R$1.787,90"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={Sofa}
          name="Sofá Retrátil Reclinável"
          price="R$3.331,96"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={Vaporizador}
          name="Vaporizador de Roupas Arno"
          price="R$281,58"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
        <ProductCard
          image={Ventilador}
          name="Ventilador de Pé"
          price="R$299,85"
          buttonLabel="Presentear"
          onButtonClick={() => console.log("Presentear clicado")}
        />
      </div>
    </div>
  );
}
