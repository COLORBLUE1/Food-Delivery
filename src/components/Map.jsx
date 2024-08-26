import {
  Contenedormain,
  Contenedortwe,
  Boton,
  Pl,
} from "../assets/style/stylecomponets/styled.js";
import styled from "styled-components";
import { Navbar } from "./Blocks/Navbar.jsx";
import { Link } from "react-router-dom";

export function Map() {
  const Texto = styled.p`
    text-align: right;
  `;

  const Comentario = styled.p`
    font-size: 20px;
    margin-top: 60px;
    width: 300px;
    text-align: center;
  `;

  return (
    <Contenedormain>
      <div>
        <Comentario>
          You can also add a restaurant to your favorite list
        </Comentario>
      </div>

      <div>
        <img src="https://i.postimg.cc/HntT2xgP/map.png" alt="" />
        <Texto>Where I am ?</Texto>
      </div>

      <Contenedortwe>
        <Link to={"/home"}>
          <Boton>Sing In</Boton>
        </Link>
      </Contenedortwe>
    </Contenedormain>
  );
}
