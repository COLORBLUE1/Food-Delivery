import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error } from "../components/Blocks/Error";
import { Navbar } from "../components/Blocks/Navbar";
import { Main } from "../components/Home/Main";
import { Buscar } from "../components/Home/Buscar";
import { Recientes } from "../components/Home/Recientes";
import { Cuenta } from "../components/Home/Cuenta";
import { Ubicacion } from "../components/Home/Ubicacion";

export function Homerutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas del home */}
        <Route path="/main" element={<Main />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/reciente" element={<Recientes />} />
        <Route path="/cuenta" element={<Cuenta />} />
        <Route path="/Ubicacion" element={<Ubicacion />} />

        <Navbar />
        {/*Ruta de error*/}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
