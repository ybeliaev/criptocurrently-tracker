import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { CryptoState } from "../context/CryptoContext";
import axios from "axios";
import { SingleCoin } from "../config/api";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import { createTheme, Typography } from "@mui/material";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState("");

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };
  console.log(coin);
  const DivContainer = styled("div")(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));
  const DivSidebar = styled("div")(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 25,
    borderRight: "2px solid grey",
  }));
  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <DivContainer>
        <DivSidebar>
          <img
            src={coin?.image.large}
            alt={coin?.name}
            height="200"
            style={{ marginBottom: 20 }}
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              marginBottom: 20,
              fontFamily: "Montserrat",
            }}
          >
            {coin?.name}
          </Typography>
          <Typography variant="subtitle1">
            {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
          </Typography>
        </DivSidebar>
      </DivContainer>
    </ThemeProvider>
  );
};

export default CoinPage;
