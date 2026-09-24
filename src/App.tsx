import "./styles/theme.css";
import "./styles/global.css";

import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
import { Middle } from "./components/Middle";
import { BackgroundParallax1 } from "./components/backgroundParallax1";
import { Casal } from "./components/Casal";
import { BackgroundParallax2 } from "./components/backgroundParallax2";
import { Ceremonia } from "./components/Ceremonia";
import { Presente } from "./components/Presente";
import { ConfirmacaoPresenca } from "./components/ConfirmacaoPresenca";
import { DefaulFooter } from "./components/Footer/Index";

export function App() {
  return (
    <>
      <Heading />

      <Container>
        <Middle />
      </Container>

      <BackgroundParallax1 />

      <Container>
        <Casal />
      </Container>

      <Container>
        <Ceremonia />
      </Container>

      <BackgroundParallax2 />

      <Container>
        <ConfirmacaoPresenca />
      </Container>

      <Container>
        <Presente />
      </Container>

      <DefaulFooter />
    </>
  );
}
