import { Navbar } from "../Blocks/Navbar";
import React, { useEffect } from "react";
import "../../assets/style/css/Main-style.css";
import { Sectionhome } from "../../assets/style/stylecomponets/styled";
import { Carrusel } from "../Blocks/Slider";
import { Contenidotwe } from "../const";
import { GrLocation } from "react-icons/gr";
import { Cards } from "../Blocks/Cards";
import { Menuscroll } from "../Blocks/Menuscroll";
import { BiChevronDown } from "react-icons/bi";

export function Main() {
  const ubiString = localStorage.getItem("userLocation");
  const ubi = ubiString ? JSON.parse(ubiString) : {};

 
  const city = ubi.city || "Ciudad no disponible";

  return (
    <Sectionhome>
      <button className="ubi">
        <GrLocation className="icono-location" />
        <div className="texto">
          <p className="deliveri">DELIVER TO</p>
          <h3>
            {city} <BiChevronDown />
          </h3>
        </div>
      </button>
      <div id="custom-class">
        <Carrusel items={Contenidotwe} />
      </div>
      <p>Restaurants and cafes</p>
      <Menuscroll />

      <Cards />

      {/* <Navbar /> */}
    </Sectionhome>
  );
}
