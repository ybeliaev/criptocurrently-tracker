import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { CryptoState } from "../context/CryptoContext";
import axios from "axios";
import { SingleCoin } from "../config/api";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import { createTheme, LinearProgress, Typography } from "@mui/material";
import { numberWithCommas } from "../constants";

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
  const DivMarketData = styled("div")(({ theme }) => ({
    marketData: {
      alignSelf: "start",
      padding: 25,
      paddingTop: 10,
      width: "100%",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "space-around",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
      },
      [theme.breakpoints.down("xs")]: {
        alignItems: "start",
      },
    },
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
  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;
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
          <DivMarketData>
            <span style={{ display: "flex" }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginBottom: 20,
                  fontFamily: "Montserrat",
                }}
              >
                Rank:
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant="h5"
                style={{
                  fontFamily: "Montserrat",
                }}
              >
                {numberWithCommas(coin?.market_cap_rank)}
              </Typography>
            </span>
            <span style={{ display: "flex" }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginBottom: 20,
                  fontFamily: "Montserrat",
                }}
              >
                Current Price:
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant="h5"
                style={{
                  fontFamily: "Montserrat",
                }}
              >
                {symbol}{" "}
                {numberWithCommas(
                  coin?.market_data.current_price[currency.toLowerCase()]
                )}
              </Typography>
            </span>
            <span style={{ display: "flex" }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginBottom: 20,
                  fontFamily: "Montserrat",
                }}
              >
                Market Cap:
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant="h5"
                style={{
                  fontFamily: "Montserrat",
                }}
              >
                {symbol}{" "}
                {numberWithCommas(
                  coin?.market_data.market_cap[currency.toLowerCase()]
                    .toString()
                    .slice(0, -6)
                )}
                M
              </Typography>
            </span>
          </DivMarketData>
        </DivSidebar>
        {/*<CoinInfo coin={coin} />*/}
      </DivContainer>
    </ThemeProvider>
  );
};

export default CoinPage;
