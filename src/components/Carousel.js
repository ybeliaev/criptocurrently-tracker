import React, { useContext } from "react";
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
  const { currency } = CryptoState();
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
  };
  return <DivCarouselStyled>carousel</DivCarouselStyled>;
};

export default Carousel;
