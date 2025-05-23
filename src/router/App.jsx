import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SplashScreen } from "../components/SplasScreen";
import { Infoinicial } from "../components/Infoinicial";
import { Singing } from "../components/Singing";
import { Map } from "../components/Map";
import { Home } from "../components/Home";
import { Createaccount } from "../components/Createaccount";
import { Main } from "../components/Home/Main.jsx";
import { Buscar } from "../components/Home/Buscar";
import { Recientes } from "../components/Home/Recientes";
import { Cuenta } from "../components/Home/Cuenta";
import { Ubicacion } from "../components/Home/Ubicacion";
import { Editarperfil } from "../components/Extra/Editarperfil";
import { Payment } from "../components/Extra/Payment";
import { Login } from "../components/login";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Rutas antes del Home*/}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/informacion" element={<Infoinicial />} />
        <Route path="/phone" element={<Singing />} />
        <Route path="/crearcuenta" element={<Createaccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/map" element={<Map />} />

        {/*Ruta de error
        <Route path="*" element={<Error />} />*/}

        {/*Ruta al home*/}
        <Route path="/home" element={<Home />} />
      </Routes>

      <Routes>
        {/* Rutas del home */}
        <Route path="/main" element={<Main />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/reciente" element={<Recientes />} />
        <Route path="/cuenta" element={<Cuenta />} />
        <Route path="/Ubicacion" element={<Ubicacion />} />
      </Routes>

      <Routes>
        {/*Rutas extra*/}
        <Route path="/editacount" element={<Editarperfil />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>

      {/* <Navbar /> */}
    </BrowserRouter>
  );
}
