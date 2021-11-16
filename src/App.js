import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CoinPage from "./components/CoinPage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={Homepage} />
        <Route path="/coins/:id" element={CoinPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
