import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SplashScreen } from "../components/SplasScreen";
import { Infoinicial } from "../components/Infoinicial";
import { Signin } from "../components/Signin.jsx"; // Corregido Singin a Signin
import { Map } from "../components/Map";
import { Home } from "../components/Home";
import { Createaccount } from "../components/Createaccount";
// import { Error } from "../components/Blocks/Error";
import { Navbar } from "../components/Blocks/Navbar";
import { Main } from "../components/Home/Main";
import { Buscar } from "../components/Home/Buscar";
import { Recientes } from "../components/Home/Recientes";
import { Cuenta } from "../components/Home/Cuenta";
import { Ubicacion } from "../components/Home/Ubicacion";
import { Editarperfil } from "../components/Extra/Editarperfil";
import { Payment } from "../components/Extra/Payment";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas antes del Home */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/informacion" element={<Infoinicial />} />
        <Route path="/phone" element={<Signin />} /> {/* Corregido */}
        <Route path="/crearcuenta" element={<Createaccount />} />
        <Route path="/map" element={<Map />} />

        {/* Ruta de error (descomentarlo si lo necesitas) */}
        {/* <Route path="*" element={<Error />} /> */}

        {/* Ruta al home */}
        <Route path="/home" element={<Home />} />

        {/* Rutas del home */}
        <Route path="/main" element={<Main />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/reciente" element={<Recientes />} />
        <Route path="/cuenta" element={<Cuenta />} />
        <Route path="/ubicacion" element={<Ubicacion />} /> {/* Corregido a minúsculas */}

        {/* Rutas extra */}
        <Route path="/editacount" element={<Editarperfil />} />
        <Route path="/payment" element={<Payment />} /> {/* Corregido a minúsculas */}
      </Routes>

      <Navbar />
    </BrowserRouter>
  );
}
