import React from "react";
// import about from "../assets/images";
import {
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
  about
} from "../assets/images";
import { BiRightArrowAlt } from "react-icons/bi";


const Services = () => {
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
            integrated supply chain, with a range of value-added services for
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

      {/* Our Core Value */}
      <div className="my-20 bg-black w-full h-auto lg:h-[1000px] px-4 sm:px-8 lg:px-0 ">
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

        
      </div>
      
    </>
  );
};

export default Services;
