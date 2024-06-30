import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Firstpg from "./components/Firstpg";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Firstpg />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
