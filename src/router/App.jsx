import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SplashScreen } from "../components/SplasScreen";
import { Infoinicial } from "../components/Infoinicial";
import { Singing } from "../components/Singin";
import { Map } from "../components/Map";
import { Home } from "../components/Home";
import { Createaccount } from "../components/Createaccount";
import { Error } from "../components/Blocks/Error";
import { Navbar } from "../components/Blocks/Navbar";
import { Main } from "../components/Home/Main";
import { Buscar } from "../components/Home/Buscar";
import { Recientes } from "../components/Home/Recientes";
import { Cuenta } from "../components/Home/Cuenta";
import { Ubicacion } from "../components/Home/Ubicacion";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Rutas antes del Home*/}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/informacion" element={<Infoinicial />} />
        <Route path="/phone" element={<Singing />} />
        <Route path="/crearcuenta" element={<Createaccount />} />
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
      <Navbar />
    </BrowserRouter>
  );
}
