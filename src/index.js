import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ComponentCryptoContext } from "./hooks/handleHooks";

ReactDOM.render(
  <React.StrictMode>
    <ComponentCryptoContext>
      <App />
    </ComponentCryptoContext>
  </React.StrictMode>,
  document.getElementById("root")
);
