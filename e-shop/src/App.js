import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import Login from "./Login";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
