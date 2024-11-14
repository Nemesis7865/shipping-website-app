import React, { useEffect, useState } from "react";
import { about, abouta, aboutb, aboutc } from "../assets/images";
import Counter from "../counter/Counter";
import { FaHandshake, FaClock, FaBolt, FaShieldAlt } from "react-icons/fa";

const Aboutus = () => {
  const counters = [
    { label: "Countries Worldwide", target: 150 },
    { label: "Years Experience", target: 15 },
    { label: "Communities We Deliver To", target: 15 },
    { label: "Agents Strenght", target: 2530 },
  ];

  return (
    <>
      {/* Image section */}
      <div className="About-us relative w-full h-auto">
        <img
          src={about}
          alt="About Us"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black  opacity-65 flex justify-center items-center">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            About Us
          </h1>
        </div>
      </div>

      {/* About content section */}
      <div className="w-full h-auto flex flex-col justify-center lg:flex-row items-center lg:my-24 md:my-14 sm:my-9 px-6 md:px-12 lg:px-24">
        <div className="mb-8 lg:mb-0 lg:mr-32 text-center lg:text-left ">
          <h3 className="font-bold text-lg text-yellow-400 py-4 md:py-10">
            About Us
          </h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-600">
            We connect people <br className="hidden lg:block" /> and their
            products
          </h1>
        </div>
        <div className="text-center lg:text-left">
          <p className="pb-6 font-bold text-neutral-700">
            We work with a variety of sectors, including fashion, leisure,
            health <br className="hidden md:block" />
            and beauty, home and garden, electrical, gifts, publishing, and{" "}
            <br className="hidden md:block" />
            entertainment.
          </p>
          <p className="opacity-60">
            We provide a portfolio of full logistic solutions which includes,
            but not limited to, <br className="hidden md:block" />
            International and Domestic express delivery, Freight Forwarding,
            Integrated <br className="hidden md:block" />
            Logistics Solutions, Information and Document Management Solutions,
            Warehousing, <br className="hidden md:block" />
            Packaging Services, Food Delivery, Agriculture Logistics, and
            E-commerce Solutions.
          </p>
        </div>
      </div>

      {/* About Image Section */}
      <div className="w-full h-auto flex flex-col lg:flex-row items-center lg:space-x-6 space-y-10 lg:space-y-0 justify-center mt-10 lg:mt-40 px-4">
        {/* Mission Section */}
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start max-w-sm">
          <img
            src={abouta}
            alt="Mission"
            className="w-48 sm:w-64 md:w-80 lg:w-96"
          />
          <h2 className="font-bold text-xl sm:text-2xl text-neutral-600 pt-6 md:pt-8 lg:pt-11">
            Mission
          </h2>
          <p className="opacity-70 text-sm md:text-base pt-2">
            To continually design and provide best-in-class logistics{" "}
            <br className="hidden md:block" />
            solutions to deliver sustainable and rewarding value to{" "}
            <br className="hidden md:block" />
            all stakeholders.
          </p>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start max-w-sm">
          <img
            src={aboutb}
            alt="Vision"
            className="w-48 sm:w-64 md:w-80 lg:w-96"
          />
          <h2 className="font-bold text-xl sm:text-2xl text-neutral-600 pt-6 md:pt-8 lg:pt-11">
            Vision
          </h2>
          <p className="opacity-70 text-sm md:text-base pt-2">
            To be the reference point of excellence in using{" "}
            <br className="hidden md:block" />
            technology-enabled logistics services supported by{" "}
            <br className="hidden md:block" />
            excellent customer service to enable commerce and{" "}
            <br className="hidden md:block" />
            improve lives across the world.
          </p>
        </div>

        {/* Team Section */}
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start max-w-sm">
          <img
            src={aboutc}
            alt="The Team"
            className="w-48 sm:w-64 md:w-80 lg:w-96"
          />
          <h2 className="font-bold text-xl sm:text-2xl text-neutral-600 pt-6 md:pt-8 lg:pt-11">
            The Team
          </h2>
          <p className="opacity-70 text-sm md:text-base pt-2">
            Every member of the team possesses a wealth of{" "}
            <br className="hidden md:block" />
            expertise in logistics and shares a deep desire to satisfy{" "}
            <br className="hidden md:block" />
            our customers. Our professional and educational{" "}
            <br className="hidden md:block" />
            experience spans a wide range of world-renowned{" "}
            <br className="hidden md:block" />
            companies and educational institutions.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="my-20 bg-black w-full h-auto lg:h-[1000px] px-4 sm:px-8 md:px-16 lg:px-32">
        {/* Text div */}
        <div className="flex flex-col items-center text-center px-4">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl pt-12 sm:pt-20">
            Our Core Value
          </h1>
          <p className="text-white py-6 sm:py-8 md:py-11 font-bold text-sm sm:text-base md:text-lg">
            Our values guide how we behave. It is reflected in how we work and
            in our relationships with others. Our brand values are
          </p>
        </div>

        {/* First row of values */}
        <ul className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-20 lg:space-x-40">
          <li className="text-center max-w-xs px-4">
            <h2 className="text-white text-lg font-bold">
              Customer Centricity
            </h2>
            <p className="text-white py-4 opacity-60 text-xs sm:text-sm">
              We make connections through our daily activities, people are at
              the centre of our activities hence we believe in creating
              communities.
            </p>
          </li>
          <li className="text-center max-w-xs px-4">
            <h2 className="text-white text-lg font-bold">Dynamism</h2>
            <p className="text-white py-4 opacity-60 text-xs sm:text-sm">
              The customer is at the centre of all our activities and business
              decisions. Everything we do is guided by what the customer needs.
            </p>
          </li>
          <li className="text-center max-w-xs px-4">
            <h2 className="text-white text-lg font-bold">Innovation</h2>
            <p className="text-white py-4 opacity-60 text-xs sm:text-sm">
              The customer is at the centre of all our activities and business
              decisions. Everything we do is guided by what the customer needs.
            </p>
          </li>
        </ul>

        {/* Second row of values */}
        <ul className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-20 lg:space-x-40 py-12">
          <li className="text-center max-w-xs px-4">
            <h2 className="text-white text-lg font-bold">Integrity</h2>
            <p className="text-white py-4 opacity-60 text-xs sm:text-sm">
              Our customers trust us with their most valuable items. Our
              integrity ensures we deliver what we said we would at the agreed
              time.
            </p>
          </li>
          <li className="text-center max-w-xs px-4">
            <h2 className="text-white text-lg font-bold">Community</h2>
            <p className="text-white py-4 opacity-60 text-xs sm:text-sm">
              The customer is at the centre of all our activities and business
              decisions. Everything we do is guided by what the customer needs.
            </p>
          </li>
          <li className="text-center max-w-xs px-4">
            <h2 className="text-white text-lg font-bold">Excellence</h2>
            <p className="text-white py-4 opacity-60 text-xs sm:text-sm">
              We understand the importance of exceptional work. We are not only
              efficient but effective. Our customers can trust us with hard work
              delivered outstandingly at all times.
            </p>
          </li>
        </ul>

        {/* Circle Counters */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 mt-12 sm:mt-20 px-4">
          {counters.map((counter, index) => (
            <Counter
              key={index}
              targetNumber={counter.target}
              label={counter.label}
            />
          ))}
        </div>
      </div>

      {/* Core Competencies */}
      <div className="w-full h-auto px-6 lg:px-36 py-12">
        <h1 className="text-3xl lg:text-5xl font-bold text-center text-neutral-600 mb-12">
          Core Competencies
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Process */}
          <div className="flex items-start space-x-4">
            <FaHandshake className="text-5xl text-yellow-500 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-lg text-neutral-600">Process</h4>
              <p className="text-sm text-neutral-700">
                We have been defined by the process objective for the company
                which is to have 100% accountability for all customers'
                packages, 98% error-free invoicing on express, and 100%
                error-free invoicing for logistics and freight.
              </p>
            </div>
          </div>

          {/* Prompt */}
          <div className="flex items-start space-x-4">
            <FaClock className="text-5xl text-yellow-500 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-lg text-neutral-600">Prompt</h4>
              <p className="text-sm text-neutral-700">
                This is the swift delivering of parcels and other services to
                customers.
              </p>
            </div>
          </div>

          {/* Responsiveness */}
          <div className="flex items-start space-x-4">
            <FaBolt className="text-5xl text-yellow-500 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-lg text-neutral-600">
                Responsiveness
              </h4>
              <p className="text-sm text-neutral-700">
                We will at any time know what the customers' changing needs are
                and be able to deliver on the customers' needs within the
                shortest possible time.
              </p>
            </div>
          </div>

          {/* Security */}
          <div className="flex items-start space-x-4">
            <FaShieldAlt className="text-5xl text-yellow-500 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-lg text-neutral-600">Security</h4>
              <p className="text-sm text-neutral-700">
                We will ensure 100% accountability and security for all clients’
                packages.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Footer  */}
      <footer class="bg-neutral-900 text-white py-10 mt-40 lg:mt-32">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap gap-8 md:gap-16 lg:gap-8  text-center md:text-left lg:flex lg:justify-center lg:items-center">
            {/* <!-- About Us Section --> */}
            <div class="w-full md:w-1/4">
              <h3 class="text-lg font-semibold text-yellow-500">ABOUT US</h3>
              <p class="mt-4 text-sm opacity-80">
                We provide a portfolio of full logistic solutions which
                includes, but is not limited to International and Domestic
                express delivery, Freight Forwarding, Integrated Logistics
                Solutions, Information and Document Management Solutions,
                Warehousing, Packaging Services, Food Delivery, Agriculture
                Logistics and E-commerce Solutions.
              </p>
            </div>

            {/* <!-- Quick Links Section --> */}
            <div class="w-full md:w-1/4">
              <h3 class="text-lg font-semibold text-yellow-500">QUICK LINKS</h3>
              <ul class="mt-4 space-y-2 text-sm opacity-80">
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Track package
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Help Centre
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Services Section --> */}
            <div class="w-full md:w-1/4">
              <h3 class="text-lg font-semibold text-yellow-500">SERVICES</h3>
              <ul class="mt-4 space-y-2 text-sm opacity-80">
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Air freight
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Customs House Brokerage
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Ocean freight
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Project Cargo
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Road and Rail
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Warehousing
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Help Center Section --> */}
            <div class="w-full md:w-1/4">
              <h3 class="text-lg font-semibold text-yellow-500">HELP CENTER</h3>
              <ul class="mt-4 space-y-2 text-sm opacity-80">
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Damaged or missing parcel
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    I'm not in
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Missed a delivery?
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Parcel returns
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Problems or complaints
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Redelivery
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Tracking
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Footer Bottom Section --> */}
          <div class="border-t border-gray-700 mt-8 pt-4 text-center text-sm opacity-80">
            © 2024 Courier Plus Express Delivery Service. All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Aboutus;
