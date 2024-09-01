import React, { useEffect } from 'react';
import {
  Contenedormain,
  Contenedortwe,
  Boton,
} from "../assets/style/stylecomponets/styled.js";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function Map() {
  // Define styled components
  const Texto = styled.p`
    text-align: right;
  `;

  const Comentario = styled.p`
    font-size: 20px;
    margin-top: 60px;
    width: 300px;
    text-align: center;
  `;


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const location = { latitude, longitude };

          try {
            const apiKey = '72b9e33e4d80d0c815bc6f38488d7af2'; 
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
            );
            const data = await response.json();
            
          
            console.log('API Response:', data);

            if (data && data.name) {
              location.city = data.name;
            } else {
              location.city = 'Unknown location';
            }

            localStorage.setItem('userLocation', JSON.stringify(location));
          } catch (error) {
            console.error('Error getting location or city:', error);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <Contenedormain>
      <div>
        <Comentario>
          You can also add a restaurant to your favorite list
        </Comentario>
      </div>

      <div>
        <img src="https://i.postimg.cc/HntT2xgP/map.png" alt="Map" />
        <Texto>Where I am?</Texto>
      </div>

      <Contenedortwe>
        <Link to={"/home"}>
          <Boton>Sign In</Boton>
        </Link>
      </Contenedortwe>
    </Contenedormain>
  );
}
