import React from "react";
// import about from "../assets/images";
import {
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
  about,
  nemesis
  
} from "../assets/images";
import { BiRightArrowAlt } from "react-icons/bi";
import { useResponsiveness } from "../hooks/useResponsiness";
import Counter from "../counter/Counter";



const Services = () => {
  const isMobile = useResponsiveness("mobile");
  const isTablet = useResponsiveness("tablet");
  const isDesktop = useResponsiveness("desktop");

  const counters = [
    {label: "Counteries Worldwide", target: "150"},
    {label: "Years Experience", target: "15"},
    {label: "Commounity We Deliver To", target: "15"},
    {label: "Agents Strenght", target: "2530"}

  ]

  return (
    <>
      {/* Image section */}
      <div className="About-us relative w-full h-auto">
        <img
          src={about}
          alt="About Us"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-65 flex justify-center items-center">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            Services
          </h1>
        </div>
      </div>

      {/* What we do */}
      <div className="h-auto my-9 md:my-14 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-start lg:space-x-16">
        {/* Left Section - Title and Headline */}
        <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
          <h3 className="font-bold text-lg text-yellow-400 py-4 md:py-6">
            What we do
          </h3>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-neutral-600">
            We connect people <br className="hidden lg:block" /> and their
            products
          </h1>
        </div>

        {/* Right Section - Description and List */}
        <div className="lg:w-1/2">
          <p className="font-bold text-sm text-neutral-700 py-4 lg:py-6">
            We have a precise customer-focused strategy that addresses our{" "}
            <br className="hidden lg:block" />
            customers’ supply chain requirements seamlessly.
          </p>
          <p className="pb-6 font-bold opacity-60 text-sm lg:text-base">
            To achieve this, we partner with world-class organizations creating
            a unique <br className="hidden lg:block" />
            global logistics network. By creating this network, we offer a
            complete suite of <br className="hidden lg:block" />
            total outbound logistics and supply chain services.
          </p>
          <p className="font-bold opacity-60 text-sm lg:text-base mb-4">
            This strategy is based on three primary keystones:
          </p>

          <ul className="list-disc space-y-4 pl-5 text-neutral-700 text-sm lg:text-base">
            <li>
              Partnering with world-class organizations to provide a global
              competitive <br className="hidden lg:block" />
              advantage for our clients in their chosen markets.
            </li>
            <li>
              Making use of an information-driven supply chain solution that
              uses the right <br className="hidden lg:block" />
              skilled people and integrates well with our customers' supply
              chain <br className="hidden lg:block" />
              requirements.
            </li>
            <li>
              Understanding our clients’ businesses by becoming an extension of
              them, <br className="hidden lg:block" />
              anticipating their supply chain challenges and solving them
              quickly.
            </li>
          </ul>
        </div>
      </div>

      {/* Keystones List */}
      <div
        className="w-full h-auto inset-0 grid gap-6 md:gap-8 lg:gap-12 mt-40 px-4 md:px-8 
                grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      >
        {/* Card 1 */}
        <div className="max-w-md w-full h-auto">
          <img
            src={service1}
            alt="Air freight service"
            className="h-48 w-full sm:h-64 object-cover"
          />
          <h1 className="font-bold text-2xl mt-4 text-neutral-500 lg:mt-7">
            Air freight
          </h1>
          <p className="opacity-60 text-sm lg:mt-5">
            International freight forwarding is often a balancing act of time,
            cost, and environmental concerns. That’s one of the reasons
            companies choose Atlantic Delivery for cost-effective, smooth
            delivery of their cargo.
          </p>
          <button className="w-36 sm:w-40 h-10 sm:h-11 bg-amber-400 mt-6 rounded flex justify-center items-center">
            <span className="text-white font-bold text-sm">Learn more</span>
            <BiRightArrowAlt className="text-white ml-1" />
          </button>
        </div>

        {/* Card 2 */}
        <div className="max-w-md w-full h-auto">
          <img
            src={service2}
            alt="Ocean freight service"
            className="h-48 w-full sm:h-64 object-cover"
          />
          <h1 className="font-bold text-2xl mt-4 text-neutral-500 lg:mt-7">
            Ocean freight
          </h1>
          <p className="opacity-60 text-sm lg:mt-5">
            By leveraging our strong and long-term carrier relationships,
            Atlantic Delivery offers flexible, reliable, and secure ocean
            freight solutions spanning forty-six countries and regions.
          </p>
          <button className="w-36 sm:w-40 h-10 sm:h-11 bg-amber-400 mt-6 rounded flex justify-center items-center">
            <span className="text-white font-bold text-sm">Learn more</span>
            <BiRightArrowAlt className="text-white ml-1" />
          </button>
        </div>

        {/* Card 3 */}
        <div className="max-w-md w-full h-auto">
          <img
            src={service3}
            alt="Road and rail service"
            className="h-48 w-full sm:h-64 object-cover"
          />
          <h1 className="font-bold text-2xl mt-4 text-neutral-500 lg:mt-7">
            Road and rail
          </h1>
          <p className="opacity-60 text-sm lg:mt-5">
            Atlantic Delivery offers both unmatched dependability and
            flexibility with customized over-the-road trucking solutions,
            providing a custom solution to meet your needs.
          </p>
          <button className="w-36 sm:w-40 h-10 sm:h-11 bg-amber-400 mt-6 rounded flex justify-center items-center">
            <span className="text-white font-bold text-sm">Learn more</span>
            <BiRightArrowAlt className="text-white ml-1" />
          </button>
        </div>

        {/* Card 4 */}
        <div className="max-w-md w-full h-auto lg:mt-20">
          <img
            src={service4}
            alt="Warehousing service"
            className="h-48 w-full sm:h-64 object-cover"
          />
          <h1 className="font-bold text-2xl mt-4 text-neutral-500 lg:mt-7">
            Warehousing
          </h1>
          <p className="opacity-60 text-sm lg:mt-5">
            We provide bonded and highly specialized warehousing as part of an
            integrated supply chain, with a range of target-added services for
            manufacturers and retailers.
          </p>
          <button className="w-36 sm:w-40 h-10 sm:h-11 bg-amber-400 mt-6 rounded flex justify-center items-center">
            <span className="text-white font-bold text-sm">Learn more</span>
            <BiRightArrowAlt className="text-white ml-1" />
          </button>
        </div>

        {/* Card 5 */}
        <div className="max-w-md w-full h-auto lg:mt-20">
          <img
            src={service5}
            alt="Project cargo service"
            className="h-48 w-full sm:h-64 object-cover"
          />
          <h1 className="font-bold text-2xl mt-4 text-neutral-500 lg:mt-7">
            Project cargo
          </h1>
          <p className="opacity-60 text-sm lg:mt-5">
            Atlantic Delivery manages a variety of transportation modes
            worldwide, with a Project Cargo team offering extensive local
            expertise.
          </p>
          <button className="w-36 sm:w-40 h-10 sm:h-11 bg-amber-400 mt-6 rounded flex justify-center items-center">
            <span className="text-white font-bold text-sm">Learn more</span>
            <BiRightArrowAlt className="text-white ml-1" />
          </button>
        </div>

        {/* Card 6 */}
        <div className="max-w-md w-full h-auto lg:mt-20">
          <img
            src={service6}
            alt="Customs House Brokerage service"
            className="h-48 w-full sm:h-64 object-cover"
          />
          <h1 className="font-bold text-2xl mt-4 text-neutral-500 lg:mt-7">
            Customs House Brokerage
          </h1>
          <p className="opacity-60 text-sm lg:mt-5">
            Our customs brokerage experts offer a full range of services for
            importing and exporting, ensuring compliance and efficiency.
          </p>
          <button className="w-36 sm:w-40 h-10 sm:h-11 bg-amber-400 mt-6 rounded flex justify-center items-center">
            <span className="text-white font-bold text-sm">Learn more</span>
            <BiRightArrowAlt className="text-white ml-1" />
          </button>
        </div>
      </div>

    

      <div
  className={`relative ${isMobile ? "h-[1500px]" : isTablet ? "h-[600px]" : "h-[800px] lg:h-[1000px]"} flex justify-center bg-cover bg-center bg-fixed mt-24 `} 
  style={{ backgroundImage: `url(${nemesis})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-70"></div>

  {/* Text layout */}
  <div className="relative bg-black w-full px-4 sm:px-8 lg:px-0 py-12 lg:h-[600px] h-[930px] flex flex-col items-center">
    <div className="text-center max-w-3xl">
      <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl opacity-95">
        Our Core Target
      </h1>
      <p className="text-white py-6 sm:py-8 md:py-11 font-bold text-sm sm:text-base md:text-lg opacity-95">
        Our targets guide how we behave. It is reflected in how we work and in our relationships with others. Our brand targets are:
      </p>
    </div>

    {/* Targets List */}
    <ul className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16 mt-6">
      {[
        { title: "Customer Centricity", text: "We make connections through our daily activities, with people at the center of our activities." },
        { title: "Dynamism", text: "We ensure every action is customer-focused to meet their needs effectively." },
        { title: "Innovation", text: "Innovation drives all our decisions, aiming to fulfill customer needs." }
      ].map((item, index) => (
        <li key={index} className="text-center max-w-xs px-4">
          <h2 className="text-white text-lg font-bold opacity-95">{item.title}</h2>
          <p className="text-white py-4 opacity-60 text-xs sm:text-sm">{item.text}</p>
        </li>
      ))}
    </ul>

    {/* Second row of targets */}
    <ul className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16 mt-8">
      {[
        { title: "Integrity", text: "We deliver on promises, with integrity that fosters trust." },
        { title: "Community", text: "Our actions build and support communities through customer-centered work." },
        { title: "Excellence", text: "We maintain excellence in all services, ensuring high standards consistently." }
      ].map((item, index) => (
        <li key={index} className="text-center max-w-xs px-4">
          <h2 className="text-white text-lg font-bold opacity-95">{item.title}</h2>
          <p className="text-white py-4 opacity-60 text-xs sm:text-sm">{item.text}</p>
        </li>
      ))}
    </ul>

    {/* Circle Counters */}
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 lg:mt-56 mt-20 opacity-95">
      {counters.map((counter, index) => (
        <Counter
          key={index}
          targetNumber={counter.target}
          label={counter.label}
        />
      ))}
    </div>
  </div>
</div>


      {/* footer */}
      <footer class="bg-neutral-900 text-white py-10 my-20">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap gap-8 md:gap-16 lg:gap-8 text-center md:text-left lg:flex lg:justify-center lg:items-center">
      
      {/* <!-- About Us Section --> */}
      <div class="w-full md:w-1/4">
        <h3 class="text-lg font-semibold text-yellow-500">ABOUT US</h3>
        <p class="mt-4 text-sm opacity-80">
          We provide a portfolio of full logistic solutions which includes, but is not limited to International and Domestic express delivery, Freight Forwarding, Integrated Logistics Solutions, Information and Document Management Solutions, Warehousing, Packaging Services, Food Delivery, Agriculture Logistics and E-commerce Solutions.
        </p>
      </div>
      
      {/* <!-- Quick Links Section --> */}
      <div class="w-full md:w-1/4">
        <h3 class="text-lg font-semibold text-yellow-500">QUICK LINKS</h3>
        <ul class="mt-4 space-y-2 text-sm opacity-80">
          <li><a href="#" class="hover:text-yellow-500">Home</a></li>
          <li><a href="#" class="hover:text-yellow-500">About us</a></li>
          <li><a href="#" class="hover:text-yellow-500">Services</a></li>
          <li><a href="#" class="hover:text-yellow-500">Track package</a></li>
          <li><a href="#" class="hover:text-yellow-500">Help Centre</a></li>
          <li><a href="#" class="hover:text-yellow-500">Contact us</a></li>
        </ul>
      </div>
      
      {/* <!-- Services Section --> */}
      <div class="w-full md:w-1/4">
        <h3 class="text-lg font-semibold text-yellow-500">SERVICES</h3>
        <ul class="mt-4 space-y-2 text-sm opacity-80">
          <li><a href="#" class="hover:text-yellow-500">Air freight</a></li>
          <li><a href="#" class="hover:text-yellow-500">Customs House Brokerage</a></li>
          <li><a href="#" class="hover:text-yellow-500">Ocean freight</a></li>
          <li><a href="#" class="hover:text-yellow-500">Project Cargo</a></li>
          <li><a href="#" class="hover:text-yellow-500">Road and Rail</a></li>
          <li><a href="#" class="hover:text-yellow-500">Warehousing</a></li>
        </ul>
      </div>
      
      {/* <!-- Help Center Section --> */}
      <div class="w-full md:w-1/4">
        <h3 class="text-lg font-semibold text-yellow-500">HELP CENTER</h3>
        <ul class="mt-4 space-y-2 text-sm opacity-80">
          <li><a href="#" class="hover:text-yellow-500">Damaged or missing parcel</a></li>
          <li><a href="#" class="hover:text-yellow-500">I'm not in</a></li>
          <li><a href="#" class="hover:text-yellow-500">Missed a delivery?</a></li>
          <li><a href="#" class="hover:text-yellow-500">Parcel returns</a></li>
          <li><a href="#" class="hover:text-yellow-500">Problems or complaints</a></li>
          <li><a href="#" class="hover:text-yellow-500">Redelivery</a></li>
          <li><a href="#" class="hover:text-yellow-500">Tracking</a></li>
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

export default Services;
