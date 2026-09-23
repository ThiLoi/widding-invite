import "./styles/theme.css";
import "./styles/global.css";

import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
import { Middle } from "./components/Middle";
import { BackgroundParallax1 } from "./components/backgroundParallax1";
import { Casal } from "./components/Casal";
import { BackgroundParallax2 } from "./components/backgroundParallax2";
import { Ceremonia } from "./components/Ceremonia";

export function App() {
  return (
    <>
      <Container>
        <Heading />
      </Container>

      <Container>
        <Middle />
      </Container>

      <BackgroundParallax1 />

      <Container>
        <Casal />
      </Container>

      <BackgroundParallax2 />

      <Container>
        <Ceremonia />
      </Container>

      <Container>
        <Casal />
      </Container>
    </>
  );
}
