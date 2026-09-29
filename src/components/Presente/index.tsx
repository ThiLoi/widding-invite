import { useState } from "react";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { ProductCard } from "./ProductCard";
import { CheckoutModal } from "./CheckoutModal";
import Styles from "./Styles.module.css";

// Imports das Imagens
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

// Inicializa a SDK com a chave pública lida do ficheiro .env do Vite
const publicKey =
  import.meta.env.VITE_MP_PUBLIC_KEY ||
  "APP_USR-72cdeb1e-4f0a-4d67-b9e7-c8938604191d";
initMercadoPago(publicKey, {
  locale: "pt-BR",
});

interface ProdutoSelecionado {
  id: string;
  image: string;
  name: string;
  price: string;
  numericPrice: number;
}

export function Presente() {
  const [produtoSelecionado, setProdutoSelecionado] =
    useState<ProdutoSelecionado | null>(null);

  // Converte o texto "R$ 690,11" para o número float 690.11.
  // NOTA: isto serve só para MOSTRAR o valor no Brick do Mercado Pago.
  // O valor cobrado de verdade é sempre calculado no backend a partir do "id".
  const parsePrice = (priceString: string): number => {
    return parseFloat(
      priceString.replace("R$", "").replace(".", "").replace(",", ".").trim(),
    );
  };

  const handleOpenCheckout = (
    id: string,
    image: string,
    name: string,
    price: string,
  ) => {
    setProdutoSelecionado({
      id,
      image,
      name,
      price,
      numericPrice: parsePrice(price),
    });
  };

  return (
    <div className={Styles.presente}>
      <h1>LISTA DE PRESENTE</h1>

      <div className={Styles.produtos}>
        <ProductCard
          image={AparelhoJantar}
          name="Aparelho de Jantar/Chá Oxford Ryo Maresia 30 Peças"
          price="R$690,11"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "aparelho-jantar-oxford",
              AparelhoJantar,
              "Aparelho de Jantar/Chá Oxford Ryo Maresia 30 Peças",
              "R$690,11",
            )
          }
        />
        <ProductCard
          image={Aspirador}
          name="Aspirador de Pó Vertical"
          price="R$264,86"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "aspirador-vertical",
              Aspirador,
              "Aspirador de Pó Vertical",
              "R$264,86",
            )
          }
        />
        <ProductCard
          image={Batedeira}
          name="Batedeira Philco Paris com 4 Velocidades - Branca"
          price="R$256,54"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "batedeira-philco",
              Batedeira,
              "Batedeira Philco Paris com 4 Velocidades - Branca",
              "R$256,54",
            )
          }
        />
        <ProductCard
          image={Cama}
          name="Cama box + colchão"
          price="R$4.404,69"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "cama-box-colchao",
              Cama,
              "Cama box + colchão",
              "R$4.404,69",
            )
          }
        />
        <ProductCard
          image={Chaleira}
          name="Chaleira Elétrica Gourmand Gris 1,8L"
          price="R$278,71"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "chaleira-eletrica",
              Chaleira,
              "Chaleira Elétrica Gourmand Gris 1,8L",
              "R$278,71",
            )
          }
        />
        <ProductCard
          image={Colcha}
          name="Colcha Casal Santista Boutis Dinis"
          price="R$504,61"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "colcha-casal-santista",
              Colcha,
              "Colcha Casal Santista Boutis Dinis",
              "R$504,61",
            )
          }
        />
        <ProductCard
          image={ConjuntoBaixelas}
          name="Conjunto de Baixelas Tramontina"
          price="R$466,77"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "conjunto-baixelas",
              ConjuntoBaixelas,
              "Conjunto de Baixelas Tramontina",
              "R$466,77",
            )
          }
        />
        <ProductCard
          image={ConjuntoPeneiras}
          name="Conjunto de peneiras"
          price="R$230,23"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "conjunto-peneiras",
              ConjuntoPeneiras,
              "Conjunto de peneiras",
              "R$230,23",
            )
          }
        />
        <ProductCard
          image={ConjuntoPotes}
          name="Conjunto de Potes Herméticos Redondos 4 peças"
          price="R$201,98"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "conjunto-potes",
              ConjuntoPotes,
              "Conjunto de Potes Herméticos Redondos 4 peças",
              "R$201,98",
            )
          }
        />
        <ProductCard
          image={EspelhosCorpo}
          name="Espelho De Corpo Inteiro"
          price="R$312,79"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "espelho-corpo",
              EspelhosCorpo,
              "Espelho De Corpo Inteiro",
              "R$312,79",
            )
          }
        />
        <ProductCard
          image={EspelhosRedondo}
          name="Espelho Redondo 40 cm com Alça em Couro"
          price="R$401,68"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "espelho-redondo",
              EspelhosRedondo,
              "Espelho Redondo 40 cm com Alça em Couro",
              "R$401,68",
            )
          }
        />
        <ProductCard
          image={Faqueiro}
          name="Faqueiro - 42 Peças"
          price="R$682,92"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "faqueiro-42pcs",
              Faqueiro,
              "Faqueiro - 42 Peças",
              "R$682,92",
            )
          }
        />
        <ProductCard
          image={Grill}
          name="Grill Britânia Multi Grill"
          price="R$237,16"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "grill-britania",
              Grill,
              "Grill Britânia Multi Grill",
              "R$237,16",
            )
          }
        />
        <ProductCard
          image={Xicara}
          name="Jogo com 6 Xícaras para Café com Pires modelo Crystal Chess"
          price="R$353,22"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "xicara-cafe-crystal",
              Xicara,
              "Jogo com 6 Xícaras para Café com Pires modelo Crystal Chess",
              "R$353,22",
            )
          }
        />
        <ProductCard
          image={JogoBanho}
          name="Jogo de Banho Buddemeyer"
          price="R$426,29"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "jogo-banho-buddemeyer",
              JogoBanho,
              "Jogo de Banho Buddemeyer",
              "R$426,29",
            )
          }
        />
        <ProductCard
          image={JogoCama}
          name="Jogo de Cama Listrado"
          price="R$374,07"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "jogo-cama-listrado",
              JogoCama,
              "Jogo de Cama Listrado",
              "R$374,07",
            )
          }
        />
        <ProductCard
          image={JogoFaca}
          name="Jogo de Facas com Suporte em Madeira - 7 peças"
          price="R$526,33"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "jogo-facas",
              JogoFaca,
              "Jogo de Facas com Suporte em Madeira - 7 peças",
              "R$526,33",
            )
          }
        />
        <ProductCard
          image={JogoPanela}
          name="Jogo de Panelas Preto - 5 Peças"
          price="R$990,26"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "jogo-panelas-preto",
              JogoPanela,
              "Jogo de Panelas Preto - 5 Peças",
              "R$990,26",
            )
          }
        />
        <ProductCard
          image={JogoXicara}
          name="Jogo de Xícaras para Café com Pires - 12 peças"
          price="R$359,40"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "jogo-xicaras-cafe",
              JogoXicara,
              "Jogo de Xícaras para Café com Pires - 12 peças",
              "R$359,40",
            )
          }
        />
        <ProductCard
          image={JogoEdredom}
          name="Jogo Edredom Casal Cinza - 3 Peças"
          price="R$657,89"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "jogo-edredom-cinza",
              JogoEdredom,
              "Jogo Edredom Casal Cinza - 3 Peças",
              "R$657,89",
            )
          }
        />
        <ProductCard
          image={JogoToalha}
          name="Jogo Toalha de Banho Azul - 4 Peças"
          price="R$261,80"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "jogo-toalha-azul",
              JogoToalha,
              "Jogo Toalha de Banho Azul - 4 Peças",
              "R$261,80",
            )
          }
        />
        <ProductCard
          image={Lavadora}
          name="Lavadora e secadora de roupas"
          price="R$4.466,29"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "lavadora-secadora",
              Lavadora,
              "Lavadora e secadora de roupas",
              "R$4.466,29",
            )
          }
        />
        <ProductCard
          image={Liquidificador}
          name="Liquidificador"
          price="R$327,17"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "liquidificador",
              Liquidificador,
              "Liquidificador",
              "R$327,17",
            )
          }
        />
        <ProductCard
          image={Lixo}
          name="Lixo para cozinha"
          price="R$265,73"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "lixo-cozinha",
              Lixo,
              "Lixo para cozinha",
              "R$265,73",
            )
          }
        />
        <ProductCard
          image={Mesa}
          name="Mesa de Jantar com 4 Cadeiras"
          price="R$3.841,80"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "mesa-jantar-4cadeiras",
              Mesa,
              "Mesa de Jantar com 4 Cadeiras",
              "R$3.841,80",
            )
          }
        />
        <ProductCard
          image={Mixer}
          name="Mixer 3 em 1 Vermelho"
          price="R$359,33"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "mixer-3em1",
              Mixer,
              "Mixer 3 em 1 Vermelho",
              "R$359,33",
            )
          }
        />
        <ProductCard
          image={MaquinaCafe}
          name="Máquina de Café Expresso"
          price="R$449,85"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "maquina-cafe-expresso",
              MaquinaCafe,
              "Máquina de Café Expresso",
              "R$449,85",
            )
          }
        />
        <ProductCard
          image={PanelaArroz}
          name="Panela de Arroz Elétrica"
          price="R$279,50"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "panela-arroz-eletrica",
              PanelaArroz,
              "Panela de Arroz Elétrica",
              "R$279,50",
            )
          }
        />
        <ProductCard
          image={PanelaEletrica}
          name="Panela de Pressão Elétrica"
          price="R$499,18"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "panela-pressao-eletrica",
              PanelaEletrica,
              "Panela de Pressão Elétrica",
              "R$499,18",
            )
          }
        />
        <ProductCard
          image={PortaCondimentos}
          name="Porta Condimentos com Base Giratória em Madeira"
          price="R$230,23"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "porta-condimentos",
              PortaCondimentos,
              "Porta Condimentos com Base Giratória em Madeira",
              "R$230,23",
            )
          }
        />
        <ProductCard
          image={Processador}
          name="Processador de Alimentos Preto - 800W"
          price="R$466,77"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "processador-alimentos",
              Processador,
              "Processador de Alimentos Preto - 800W",
              "R$466,77",
            )
          }
        />
        <ProductCard
          image={Rack}
          name="Rack"
          price="R$512,28"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout("rack", Rack, "Rack", "R$512,28")
          }
        />
        <ProductCard
          image={Robo}
          name="Robô Aspirador de Pó"
          price="R$1.267,24"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "robo-aspirador",
              Robo,
              "Robô Aspirador de Pó",
              "R$1.267,24",
            )
          }
        />
        <ProductCard
          image={Sanduicheira}
          name="Sanduicheira Mondial Master Grill"
          price="R$221,92"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "sanduicheira-mondial",
              Sanduicheira,
              "Sanduicheira Mondial Master Grill",
              "R$221,92",
            )
          }
        />
        <ProductCard
          image={SmartTV}
          name="Smart TV LED 43 Polegadas"
          price="R$1.787,90"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "smart-tv-43",
              SmartTV,
              "Smart TV LED 43 Polegadas",
              "R$1.787,90",
            )
          }
        />
        <ProductCard
          image={Sofa}
          name="Sofá Retrátil Reclinável"
          price="R$3.331,96"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "sofa-retratil",
              Sofa,
              "Sofá Retrátil Reclinável",
              "R$3.331,96",
            )
          }
        />
        <ProductCard
          image={Vaporizador}
          name="Vaporizador de Roupas Arno"
          price="R$281,58"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "vaporizador-arno",
              Vaporizador,
              "Vaporizador de Roupas Arno",
              "R$281,58",
            )
          }
        />
        <ProductCard
          image={Ventilador}
          name="Ventilador de Pé"
          price="R$299,85"
          buttonLabel="Presentear"
          onButtonClick={() =>
            handleOpenCheckout(
              "ventilador-pe",
              Ventilador,
              "Ventilador de Pé",
              "R$299,85",
            )
          }
        />
      </div>

      {/* Renderiza o Checkout Modal quando um produto é selecionado */}
      {produtoSelecionado && (
        <CheckoutModal
          produto={produtoSelecionado}
          onClose={() => setProdutoSelecionado(null)}
        />
      )}
    </div>
  );
}
