import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Container,
  createTheme,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { CryptoState, CurrentContext } from "../context/CryptoContext";

const Header = () => {
  const { currency, setCurrency } = CryptoState();
  console.log(currency);

  const navigate = useNavigate();
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color={"transparent"} position={"static"}>
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              variant="h6"
              sx={{
                flex: 1,
                color: "gold",
                fontFamily: "Orbitron",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Crypto Tracker
            </Typography>
            <Select
              variant={"outlined"}
              labelId="select-currency"
              id="select-currency"
              value={currency}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              onChange={(e) => setCurrency(e.target.value)}
              sx={{ width: 100, height: 40, marginLeft: 15 }}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="UAH">UAH</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
