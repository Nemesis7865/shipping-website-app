import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import Testimonials from "./layout/Testimonials";
import Herosection from "./layout/Herosection";
import AboutUs from "./nav-section/AboutUs";
import ContactUs from "./nav-section/ContactUs";
import HelpCenter from "./nav-section/HelpCenter";
import TrackPackage from "./nav-section/TrackPackage";
import Services from "./nav-section/Services";
// App Component

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Nav Route */}
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="helpcenter" element={<HelpCenter />} />
          <Route path="trackpackage" element={<TrackPackage />} />
          <Route path="services" element={<Services />} />
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
