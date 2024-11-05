import { useNavigate } from "react-router-dom";
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
  Boton,
} from "../assets/style/stylecomponets/styled.js";
import { useState } from "react";

export function Singing() {
  const navigate = useNavigate(); // Hook de navegación

  const [content, setContent] = useState({
    texto:
      "Login or create an account with your phone number to start ordering",
    tittle: "Sing in",
    politicas: "By clicking the button next you accept",
    politicaslink: "Terms of use",
  });

  const [setClickCount] = useState(0);

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
    //  Llame a setClickCount para controlar los mensajes que se muestran del arreglo "contenido"
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      const newIndex = newCount % contenido.length;

      if (newCount === 2) {
        navigate("/crearcuenta"); // Redirige a otro componente
      } else {
        setContent(contenido[newIndex]);
      }

      return newCount;
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
