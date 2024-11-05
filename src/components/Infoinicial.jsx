import "../assets/style/css/Font.css";
import "animate.css";
import { Contenidoone } from "./const.js";
import { Carrusel } from "./Blocks/Slider.jsx";
import {
  Contenedorone,
  ContenedorBoton,
  Comentariocont,
  Boton,
} from "../assets/style/stylecomponets/styled.js";
import { Link } from "react-router-dom";

export function Infoinicial() {
  return (
    <Contenedorone>
      <Carrusel items={Contenidoone} />
      <ContenedorBoton>
        <Comentariocont></Comentariocont>
        <Link to={"/login"}>
          <Boton>Continuar</Boton>
        </Link>
      </ContenedorBoton>
    </Contenedorone>
  );
}
