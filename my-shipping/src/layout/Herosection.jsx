import React from "react";
import { hero, backgroundImg } from "../assets/images";

const Herosection = () => {
  return (
    <>
      {/* Hero Section Container */}
      <div className="bg-gray-100 relative w-full mt-4 h-auto  flex flex-col items-center md:items-start md:flex-row md:justify-between  ">
        {/* Text Section */}
        <div className="text-center md:text-left md:ml-12 lg:ml-48 space-y-4 md:space-y-6 mt-12 md:mt-0">
          <h1 className="text sm:text-3xl md:text-4xl lg:text-3xl font-bold">
            Expecting A Delivery?
          </h1>
          <p className="text-sm sm:text-base lg:text-lg">
            Keep an eye on it. Track it with our easy-to-use and accurate
            tracking system
          </p>
        </div>

        {/* Track Button */}
        <button
          className="mt-6  md:mt-0 w-56 md:w-48 lg:w-52 lg:my-12 lg:mx-24  h-16 md:h-14 bg-orange-400 hover:bg-orange-300 text-black font-bold rounded transition-all duration-300 ease-in-out px-4 py-2"
          onClick={() => alert("Track your shipment")}
        >
          Track your shipment
        </button>
      </div>

      {/* Optional Second Div */}
      <div className="flex flex-col md:flex-row items-center md:items-start w-full h-auto md:pl-16 lg:pl-48 sm:pl-8 p-4">
        {/* Image Container */}
        <div className="w-full bg-slate-100 md:w-auto pr-0 md:pr-10 sm:px-4 mb-4 md:mb-0 flex justify-center md:justify-start mt-14">
          <img
            src={hero}
            alt="hero"
            className="h-40 sm:h-60 md:h-80 lg:h-96 object-cover sm:pt-11 hover:cursor-pointer"
          />
        </div>

        {/* Text Container */}
        <div className="text-center md:text-left sm:w-28  lg:w-auto lg:h-auto bg-slate-100 md:w-64 md:h-6  ">
          <h4 className="text-lg sm:text-xl md:text-2xl  lg:text-lg font-semibold text-orange-400 lg:mt-24">
            What We Do
          </h4>
          <h1 className="mt-2  w-auto sm:text-base text-3xl  md:text-3xl lg:text-5xl font-bold text-neutral-500 max-w-lg">
            Helping Clients Deliver Goods The Safe Way
          </h1>
          <p className="pt-9 text-neutral-500">
            Our promise is a short-hand for what we aim to deliver time and time
            again.
            <br />
            It summarizes our management philosophy and explains that we want to
            connect to a
          </p>
          <p className="text-neutral-500">
            more prosperous future by building better relationships and <br />{" "}
            ties across the world with all stakeholders – our customers,
            colleagues, partners, and society.
          </p>
          <p className="pt-8 text-neutral-500">
            At Atlantic Delivery, we nurture clients’ businesses by learning and
            understanding their needs, hence partnering with them to achieve
            their goals.
          </p>
          <p className="pt-8 text-neutral-500">
            We do not believe in the “one cap fits all” approach.
          </p>
          <p className="pt-8 text-neutral-500">
            Our team of supply chain professionals leverage on our unparalleled
            distribution <br /> network with you from start to finish, designing
            and implementing your unique supply chain model.
          </p>
        </div>
      </div>

      {/* Image fixed div */}

      <div
        className="relative h-screen flex justify-center  bg-cover bg-center bg-fixed mt-24"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative mt-24 z-10 text-center text-white px-4 sm:px-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
          <p className="text-xs sm:text-sm md:text-lg font-semibold">
            24/7 Active Support Team
          </p>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold  ">
            Need something shipped or got  an enquiry?
          </h1>
          <button className="mt-6 px-4 py-2 sm:px-6 bg-green-500 hover:bg-green-600 text-white font-semibold rounded transition duration-300 ease-in-out">
            Contact us
          </button>
        </div>
         {/* Text Layout */}
        <div className="absolute bottom-0 w-full h-[428px] bg-stone-800 flex items-center flex-col">
        <h2 className="text-yellow-400 font-semibold text-lg pt-16">
        Why Choose Us
        </h2>
        <h1 className="text-white text-5xl font-bold ">
        Quality and Performance
        </h1>
        </div>
    {/* ....Div container */}
      <div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      </div>
      </div>
    </>
  );
};

export default Herosection;
