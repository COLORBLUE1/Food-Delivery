import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { PiHamburgerDuotone } from "react-icons/pi";

export const Contenedorsroll = styled.div`
  margin: 10px;
  display: flex;
  gap: 20px;
  overflow: hidden;
  overflow-x: scroll;
  width: 550px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Menuscroll = () => {
  return (
    <Contenedorsroll>
      <Button
        variant="contained"
        sx={{ minWidth: 150, lineHeight: 1, height: 40, background: "#ffe031" }}
        disableElevation
      >
        Todo
      </Button>

      <Button
        variant="contained"
        sx={{
          minWidth: 150,
          lineHeight: 1,
          height: 40,
          background: "#F2F2F2",
          color: "gray",
        }}
        disableElevation
      >
        <PiHamburgerDuotone />
        Hamburger
      </Button>
      <Button
        variant="contained"
        sx={{
          minWidth: 150,
          lineHeight: 1,
          height: 40,
          background: "#F2F2F2",
          color: "gray",
        }}
        disableElevation
      >
        <PiHamburgerDuotone />
        Pizza
      </Button>
      <Button
        variant="contained"
        sx={{
          minWidth: 150,
          lineHeight: 1,
          height: 40,
          background: "#F2F2F2",
          color: "gray",
        }}
        disableElevation
      >
        <PiHamburgerDuotone />
        Ensalada
      </Button>
      <Button
        variant="contained"
        sx={{
          minWidth: 150,
          lineHeight: 1,
          height: 40,
          background: "#F2F2F2",
          color: "gray",
        }}
        disableElevation
      >
        <PiHamburgerDuotone />
        Sopa
      </Button>
      <Button
        variant="contained"
        sx={{
          minWidth: 150,
          lineHeight: 1,
          height: 40,
          background: "#F2F2F2",
          color: "gray",
        }}
        disableElevation
      >
        <PiHamburgerDuotone />
        Salchipapa
      </Button>
      <Button
        variant="contained"
        sx={{
          minWidth: 150,
          lineHeight: 1,
          height: 40,
          background: "#F2F2F2",
          color: "gray",
        }}
        disableElevation
      >
        <PiHamburgerDuotone />
        Ramen
      </Button>
    </Contenedorsroll>
  );
};
