import React from "react";
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

const Header = () => {
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
              sx={{
                flex: 1,
                color: "gold",
                fontFamily: "Montserrat",
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
              value={"USD"}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              onChange={(e) => console.log(e.target.value)}
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
