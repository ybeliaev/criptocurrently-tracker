import { createContext, useContext } from "react";

export const CurrentContext = createContext();
export const CryptoState = () => useContext(CurrentContext);
