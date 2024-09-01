import "../assets/style/css/Font.css";
import TextField from "@mui/material/TextField";
import { Map } from "./Map.jsx";
import "../assets/style/css/Createaccount.css";
import {
  Contenedormain,
  Contenedortwe,
  Contenedorinput,
  Boton,
} from "../assets/style/stylecomponets/styled.js";
import { Link } from "react-router-dom";

export function Createaccount() {
  function saveuser() {
    const name = document.getElementById("standard-basic").value;
    const email = document.getElementById("standard-basic").value;
    const password = document.getElementById("standard-basic").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("pasword", password);
    localStorage.setItem("ubicacion", "Cali");
  }

  return (
    <Contenedormain>
      <div>
        <h2>Create account</h2>
      </div>
      <Contenedorinput>
        <TextField
          id="standard-basic"
          required
          label="NAME"
          type="text"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          required
          label="EMAIL"
          type="email"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          required
          label="PASSWORD"
          type="password"
          variant="standard"
        />
      </Contenedorinput>
      <Contenedortwe>
        <Link to={"/map"}>
          <Boton>Sing In</Boton>
        </Link>
      </Contenedortwe>
    </Contenedormain>
  );
}
