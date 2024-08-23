import { Logo } from "./const.js";
import { Pantalla, LogoImg } from "../assets/style/stylecomponets/styled";

//Logica

export const SplashScreen = () => {
  return (
    <Pantalla>
      <LogoImg src={Logo} alt="" />
    </Pantalla>
  );
};
