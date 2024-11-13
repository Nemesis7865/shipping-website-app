import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Testimonials from "./layout/Testimonials";
import Herosection from "./layout/Herosection";
import Aboutus from "./nav-section/Aboutus"
import HelpCenter from "./nav-section/HelpCenter";
import TrackPackage from "./nav-section/TrackPackage";
import Services from "./nav-section/Services";
import Home from "./nav-section/Home";
import ContactUs from "./nav-section/ContactUs";
import Pages from "./layout/Pages"; // Confirm correct path

import "./app.css";

// App Component
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar /> {/* Place Navbar outside Routes to show on all pages */}
        <Routes>
          {/* Main Route for Home */}
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/trackpackage" element={<TrackPackage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        
      </div>


    </BrowserRouter>

    
  );
}

export default App;
