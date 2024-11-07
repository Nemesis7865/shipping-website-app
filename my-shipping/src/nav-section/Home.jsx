import React from "react";
import Pages from "../layout/Pages";
import Herosection from "../layout/Herosection";
import Testimonials from "../layout/Testimonials";

const Home = () => {
  return (
    <>
      <div>
        <Pages />{" "}
        {/* Ensure Pages component exists and is correctly imported */}
        <Herosection />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
