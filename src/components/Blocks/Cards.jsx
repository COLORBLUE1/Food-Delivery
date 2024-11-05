import styled from "styled-components";
import Rating from "@mui/material/Rating";
import {
  Card,
  Portadacard,
  Textcard,
  Preciocard,
  Horariocard,
  Titulocard
} from "../../assets/style/stylecomponets/styled";


const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

export const Cards = () => {
  return (
    <Card>
      <Portadacard
        src="https://img.pikbest.com/backgrounds/20211027/restaurant-opening-promotion-promotion-banner_6207379.jpg!w700wp"
        width={150}
        className="card-img-top"
        alt="..."
      />
      <Textcard>
        <Titulocard className="card-title">Pardes Restaurant</Titulocard>
        <Rating name="customized-10" defaultValue={2} max={5} />
        <Horariocard className="card-text">Work time 09:30 - 23:00</Horariocard>
        <Preciocard className="card-text">
          Before you <strong>4$</strong>
        </Preciocard>
      </Textcard>
    </Card>
  );
};
