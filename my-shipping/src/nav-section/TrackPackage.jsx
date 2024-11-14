import React from "react";

const TrackPackage = () => {
  return (
    <>
      <div class="flex flex-col items-center space-y-4 px-4 sm:px-8 lg:px-0 w-full mt-20">
        {/* <!-- Label --> */}
        <label class="text-lg sm:text-xl font-semibold text-gray-800">
          ENTER THE CONSIGNMENT NO.
        </label>

        {/* <!-- Input and Button Wrapper --> */}
        <div class="flex space-x-2 sm:space-x-4 w-full max-w-lg">
          {/* <!-- Input Field --> */}
          <input
            type="text"
            placeholder="Enter Tracking Number"
            class="flex-grow px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
          />

          {/* <!-- Button --> */}
          <button class="px-4 sm:px-6 py-2 bg-yellow-600 text-white font-semibold rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base">
            TRACK RESULT
          </button>
        </div>

        {/* <!-- Horizontal Rule --> */}
        <hr class="w-full max-w-lg border-t border-gray-200" />

        {/* <!-- Example Text --> */}
        <p class="text-sm text-gray-700">
          Ex: <span class="font-bold">12345</span>
        </p>
      </div>

      {/* footer */}
      <footer class="bg-neutral-900 text-white py-10 my-20">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap gap-8 md:gap-16 lg:gap-8 text-center md:text-left lg:flex lg:justify-center lg:items-center">
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

export default TrackPackage;
