import { useEffect, useState } from "react";
import { CurrentContext } from "../context/CryptoContext";

export const ComponentCryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("UAH");
  const [symbol, setSymbol] = useState("₴");
  useEffect(() => {
    if (currency === "UAH") {
      setSymbol("₴");
    }
    if (currency === "USD") {
      setSymbol("$");
    }
  }, [currency, setSymbol]);
  return (
    <CurrentContext.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </CurrentContext.Provider>
  );
};
