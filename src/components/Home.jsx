import { Navbar } from "./Blocks/Navbar";

import { Contenedormain } from "../assets/style/stylecomponets/styled.js";
import { Main } from "./Home/Main.jsx";

export function Home() {
  return (
    <Contenedormain>
      <Main />
      <Navbar />
    </Contenedormain>
  );
}
