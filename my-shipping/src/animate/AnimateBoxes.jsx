import React, { useEffect, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { FaDirections } from "react-icons/fa";
import { MdDangerous } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

const AnimateBoxes = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 500);
  }, []);

  return (
    <>
    <div className="flex items-center justify-center lg:h-screen bg-transparent overflow-hidden relative px-4">
      {/* Boxes Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blue Box */}
        <div
          className={`w-full max-w-sm bg-white p-6 rounded-lg shadow-md transform transition-all duration-1000 ease-in-out ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <FaSearchLocation className="text-4xl text-neutral-600" />
          <h2 className="font-bold text-2xl text-neutral-600 py-4">Tracking</h2>
          {[
            "Where is my parcel?",
            "What is my tracking ID?",
            "Why is there no tracking against my parcel?",
            "My tracking hasn't updated, what should I do?",
          ].map((item, index) => (
            <div key={index} className="flex items-center my-2">
              <FaCircleDot className="text-xs" />
              <p className="text-sm px-2 text-neutral-600">{item}</p>
            </div>
          ))}
          <button className="mt-5 w-full bg-neutral-700 text-white py-2 rounded-md flex items-center justify-center gap-1">
            See all
            <FaArrowRightLong />
          </button>
        </div>

        {/* Green Box */}
        <div
          className={`w-full max-w-sm bg-white p-6 rounded-lg shadow-md transform transition-all duration-1000 ease-in-out delay-200 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <RiContactsFill className="text-4xl text-neutral-600" />
          <h2 className="font-bold text-2xl text-neutral-600 py-4">I'm not in</h2>
          {[
            "I'm not in, what will happen to my parcel?",
            "Can you leave my parcel in a safe place?",
            "Can you leave my parcel with a neighbour?",
            "Can I call the agent directly?",
          ].map((item, index) => (
            <div key={index} className="flex items-center my-2">
              <FaCircleDot className="text-xs" />
              <p className="text-sm px-2 text-neutral-600">{item}</p>
            </div>
          ))}
          <button className="mt-5 w-full bg-neutral-700 text-white py-2 rounded-md flex items-center justify-center gap-1">
            See all
            <FaArrowRightLong />
          </button>
        </div>

        {/* Red Box */}
        <div
          className={`w-full max-w-sm bg-white p-6 rounded-lg shadow-md transform transition-all duration-1000 ease-in-out delay-400 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <FaBox className="text-4xl text-neutral-600" />
          <h2 className="font-bold text-2xl text-neutral-600 py-4">Missed delivery</h2>
          {[
            "Can I call the agent directly?",
            "Can your agent call back?",
            "My parcel has been delivered to the wrong address",
            "I don’t have a calling card",
          ].map((item, index) => (
            <div key={index} className="flex items-center my-2">
              <FaCircleDot className="text-xs" />
              <p className="text-sm px-2 text-neutral-600">{item}</p>
            </div>
          ))}
          <button className="mt-5 w-full bg-neutral-700 text-white py-2 rounded-md flex items-center justify-center gap-1">
            See all
            <FaArrowRightLong />
          </button>
        </div>

        {/* Additional Boxes */}
        <div
          className={`w-full max-w-sm bg-white p-6 rounded-lg shadow-md transform transition-all duration-1000 ease-in-out delay-600 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <FaDirections className="text-4xl text-neutral-600" />
          <h2 className="font-bold text-2xl text-neutral-600 py-4">Redelivery</h2>
          {[
            "How do I rearrange my parcel delivery?",
            "Tracking shows a missed delivery attempt but I was in",
            "Can the driver come back?",
            "My parcel was delivered to the wrong address",
          ].map((item, index) => (
            <div key={index} className="flex items-center my-2">
              <FaCircleDot className="text-xs" />
              <p className="text-sm px-2 text-neutral-600">{item}</p>
            </div>
          ))}
          <button className="mt-5 w-full bg-neutral-700 text-white py-2 rounded-md flex items-center justify-center gap-1">
            See all
            <FaArrowRightLong />
          </button>
        </div>

        <div
          className={`w-full max-w-sm bg-white p-6 rounded-lg shadow-md transform transition-all duration-1000 ease-in-out delay-800 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <MdDangerous className="text-4xl text-neutral-600" />
          <h2 className="font-bold text-2xl text-neutral-600 py-4">
            Damaged or missing parcel
          </h2>
          {[
            "My parcel arrived damaged",
            "My parcel was returned to sender due to damage",
            "My parcel is missing",
            "Part of my order is missing",
          ].map((item, index) => (
            <div key={index} className="flex items-center my-2">
              <FaCircleDot className="text-xs" />
              <p className="text-sm px-2 text-neutral-600">{item}</p>
            </div>
          ))}
          <button className="mt-5 w-full bg-neutral-700 text-white py-2 rounded-md flex items-center justify-center gap-1">
            See all
            <FaArrowRightLong />
          </button>
        </div>

        <div
          className={`w-full max-w-sm bg-white p-6 rounded-lg shadow-md transform transition-all duration-1000 ease-in-out delay-1000 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <FaPlay className="text-4xl text-neutral-600" />
          <h2 className="font-bold text-2xl text-neutral-600 py-4">Returns</h2>
          {[
            "How do I return my parcel?",
            "Is there a cost to return a parcel?",
            "How will I know when my item has been returned?",
            "Can I track my return?",
          ].map((item, index) => (
            <div key={index} className="flex items-center my-2">
              <FaCircleDot className="text-xs" />
              <p className="text-sm px-2 text-neutral-600">{item}</p>
            </div>
          ))}
          <button className="mt-5 w-full bg-neutral-700 text-white py-2 rounded-md flex items-center justify-center gap-1">
            See all
            <FaArrowRightLong />
          </button>
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

export default AnimateBoxes;
