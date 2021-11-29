import React, { useContext, useEffect, useState } from "react";
import { styled } from "@mui/material";
import axios from "axios";
import { TrendingCoins } from "../config/api";
import { CryptoState } from "../context/CryptoContext";

const DivCarouselStyled = styled("div")({
  height: "50%",
  display: "flex",
  alignItems: "center",
});

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };
  console.log(trending);
  useEffect(() => {
    fetchTrendingCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);
  return <DivCarouselStyled>carousel</DivCarouselStyled>;
};

export default Carousel;
