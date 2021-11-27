import { createContext } from "react";

export const CurrentContext = createContext();

/*export const Crypto = createContext();
const CryptoContext = ({ children }) => {
  const { currency, setCurrency } = useState("UAH");
  const { symbol, setSymbol } = useState("₴");
  useEffect(() => {
    if (currency === "UAH") {
      setSymbol("₴");
    }
    if (currency === "USD") {
      setSymbol("$");
    }
  }, [currency, setSymbol]);
  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;*/
