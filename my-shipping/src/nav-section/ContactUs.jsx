import React from "react";
import { about } from "../assets/images";
import MapContainer from "./maps";

const ContactUs = () => {
  return (
    <>
      {/* Banner Section */}
      <div className="About-us relative w-full h-auto">
        <img
          src={about}
          alt="About Us"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-65 flex justify-center items-center">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Contact
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full h-auto lg:px-48 mt-16 lg:mt-28 px-6 md:px-12 flex flex-col lg:flex-row lg:space-x-32 space-y-12 lg:space-y-0">
        {/* Text Section */}
        <div>
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-neutral-600 my-8">
            Reach out
          </h1>
          <p className="font-bold text-sm sm:text-base opacity-40 leading-relaxed lg:text-sm">
            Your feedback is crucial to us as we work to be the reference point
            of excellence in using technology-enabled logistics services
            supported by excellent customer service.
          </p>
          <h3 className="font-bold text-neutral-600 pt-7 sm:pt-9 text-2xl lg:text-3xl">
            Email
          </h3>
          <span className="text-sm sm:text-base text-neutral-600">
            admin@sloganswift.com
          </span>
        </div>

        {/* Form Section */}
        <div className="w-full h-auto flex flex-col gap-6 sm:gap-8">
          <div className="flex flex-col">
            <label className="font-bold text-sm sm:text-base">Name</label>
            <input
              type="text"
              className="h-10 border focus:ring-2 rounded px-3 text-sm sm:text-base"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-sm sm:text-base">Email</label>
            <input
              type="email"
              className="h-10 border focus:ring-2 rounded px-3 text-sm sm:text-base"
            />
          </div>
          <div className="flex flex-col">
            <label className="pb-6 font-bold text-sm sm:text-base">
              Comment or Message
            </label>
            <textarea
              className="w-full h-36 border rounded px-3 py-2 text-sm sm:text-base"
            ></textarea>
            <button className="w-full h-9 bg-yellow-500 my-4 text-white font-semibold hover:bg-yellow-600 transition">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-auto my-14 relative">
        <img
          src={about}
          alt="about"
          className="w-full h-[600px] object-cover lg:[650px]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-65 p-6 md:p-12 lg:p-16">
          <h1 className="text-white font-bold text-2xl md:text-3xl text-center mt-10 lg:mt-28">
            Our Branch
          </h1>

          {/* Branch Information */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {/* United States */}
            <div className="text-center lg:text-left">
              <h3 className="text-white font-bold opacity-75 text-lg lg:text-xl">
                United States
              </h3>
              <span className="text-zinc-400 text-sm md:text-base">
                409 W Orange Grove Ave – <br />
                451 W Grandview Ave
                <br />
                <br />
                admin@sloganswift.com
              </span>
            </div>

            {/* Singapore */}
            <div className="text-center lg:text-left">
              <h3 className="text-white font-bold opacity-75 text-lg lg:text-xl">
                Singapore
              </h3>
              <span className="text-zinc-400 text-sm md:text-base">
                30 Airline Rd, 0 <br />
                Singapore 81983
                <br />
                <br />
                admin@sloganswift.com
              </span>
            </div>
          </div>
        </div>

        {/* Map Component */}
        <div>
          <MapContainer />
        </div>
      </div>
      {/*Footer  */}
      <footer class="bg-neutral-900 text-white py-10 mt-16 lg:mt-28">
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

export default ContactUs;
