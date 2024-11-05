import { useEffect, useState } from "react";
import "../const.js";
import PropTypes from "prop-types";
import styled from "styled-components";

// Styled components
const CarruselContainer = styled.div`
  position: relative;
  width: 80%;
  max-width: 600px;
  margin: auto;
  overflow: hidden;
`;

const Slide = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => -props.index * 100}%);
`;

const SlideItem = styled.div`
  min-width: 100%;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
`;

const Image = styled.img`
  width: clamp(12.5rem, 3.571rem + 23.81vw, 25rem);
  height: auto;
`;

const Caption = styled.p`
  margin-top: 10px;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  width: 100%;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "black" : "lightgray")};
  margin: 0 5px;
  cursor: pointer;
`;

export const Carrusel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <CarruselContainer>
      <Slide index={currentIndex}>
        {items.map((item) => (
          <SlideItem key={item.id}>
            <Image src={item.img} alt={item.texto} />
            <Caption>{item.texto}</Caption>
          </SlideItem>
        ))}
      </Slide>
      {/* <Dots>
        {items.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Dots> */}
    </CarruselContainer>
  );
};

Carrusel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      texto: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};
