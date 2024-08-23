import { Logo } from "./const.js";
import "../assets/style/css/Font.css";
import {
  Contenedormain,
  Img,
  Contenedoricon,
  Contenedorarrafo,
  Contenedortwe,
  Contenedorpolitica,
  Pl,
  TextField,
  Contenedorinput,
  Boton
} from "../assets/style/stylecomponets/styled.jsx";
import { useState } from "react";

export function Singing () {
  const [content, setContent] = useState({
    texto:
      "Login or create an account with your phone number to start ordering",
    tittle: "Sing in",
    politicas: "By clicking the button next you accept",
    politicaslink: "Terms of use",
  });

  const [clickCount, setClickCount] = useState(0);

  const contenido = [
    {
      texto:
        "Login or create an account with your phone number to start ordering",
      tittle: "Sing in",
      politicas: "By clicking the button next you accept",
      politicaslink: "Terms of use",
    },
    {
      texto: "Enter the four-digit code from SMS SMS not received. Send again?",
      tittle: "Verification",
      politicas: "",
      politicaslink: "",
    },
  ];

  const hadleclicks = () => {
    setClickCount((prevCount) => {
      // Calcula el nuevo índice basado en el número de clics
      const newIndex = (prevCount + 1) % contenido.length;

      // Actualiza el contenido basado en el nuevo índice
      setContent(contenido[newIndex]);

      // Devuelve el nuevo contador de clics
      return newIndex;
    });
  };

  return (
    <Contenedormain>
      <Contenedoricon>
        <Img src={Logo} alt="logo de la app" />
        <h3>{content.tittle}</h3>
        <Contenedorarrafo>{content.texto}</Contenedorarrafo>
        <Contenedorinput>
          <TextField id="number" type="text" placeholder="" />
        </Contenedorinput>
      </Contenedoricon>
      <Contenedortwe>
        <Contenedorpolitica>
          <Pl>{content.politicas}</Pl>
          <a href="#">
            <Pl>{content.politicaslink}</Pl>
          </a>
        </Contenedorpolitica>
        <Boton onClick={hadleclicks}>Comenzar</Boton>
      </Contenedortwe>
    </Contenedormain>
  );
}
