import styled from "styled-components";
import "../assets/style/css/Font.css";
import "animate.css";
import { Contenidoone } from "./const.js";
import { Carrusel } from "./Blocks/slider";
import { Singing } from "./singin";
import {
  Contenedorone,
  ContenedorBoton,
  Comentariocont,
  Boton,
} from "../assets/style/stylecomponets/styled";

export function Infoinicial({ onNext }) {
  return (
    <Contenedorone>
      <Carrusel items={Contenidoone} />
      <ContenedorBoton>
        <Comentariocont></Comentariocont>
        <Boton onClick={onNext}>Next</Boton>
      </ContenedorBoton>
    </Contenedorone>
  );
}
