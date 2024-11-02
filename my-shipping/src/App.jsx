import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.css";
import Testimonials from "./layout/Testimonials";
import Herosection from "./layout/Herosection";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Navbar />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        
      </BrowserRouter>
      <Herosection />
        <Testimonials />
    </div>
  );
}

export default App;
