import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import CoinPage from "./components/CoinPage";
import Header from "./components/Header";

import { styled } from "@mui/material";

const DivStyled = styled("div")({
  backgroundColor: "#14161a",
  color: "white",
  minHeight: "100vh",
});

function App() {
  return (
    <BrowserRouter>
      <DivStyled>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </DivStyled>
    </BrowserRouter>
  );
}

export default App;
