import React, { useEffect, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

const AnimateBoxes = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 500);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-transparent overflow-hidden relative ">
      {/* Blue Box */}
      <div
        className={`w-96 h-80 absolute bg-white top-10 transform transition-all duration-1000 ease-in-out ${
          animate ? "left-20 opacity-100" : "-left-64 opacity-0"
        }`}
      >
        <FaSearchLocation className="text-4xl text-neutral-600 " />
        <h2 className="font-bold text-2xl text-neutral-600 py-7">Tracking</h2>
        {/* list div 1 */}
        <div className="flex ">
          <FaCircleDot className="text-xs" />
          <p className="text-sm px-2 text-neutral-600">Where is my parcel?</p>
        </div>

        {/* list div 2 */}
        <div className="flex ">
          <FaCircleDot className="text-xs" />
          <p className="text-sm px-2 text-neutral-600">
            What is my tracking ID?
          </p>
        </div>

        {/* list div 3 */}
        <div className="flex ">
          <FaCircleDot className="text-xs" />
          <p className="text-sm px-2 text-neutral-600">
            Why is there no tracking against my parcel?
          </p>
        </div>

        {/* list div 4 */}
        <div className="flex ">
          <FaCircleDot className="text-xs" />
          <p className="text-sm px-2 text-neutral-600">
            My tracking hasn't updated, what should I do?
          </p>
        </div>

        <button className="my-5 w-28 h-12 bg-neutral-700 rounded-md flex flex-row items-center justify-center gap-1">
          See all
          <FaArrowRightLong />
        </button>
      </div>

      {/* Green Box 1 */}
      <div
        className={`w-96 h-80 bg-white absolute top-10 transform transition-all duration-1000 ease-in-out delay-200 ${
          animate ? "right-20 opacity-100" : "-right-64 opacity-0"
        }`}
      >
        <RiContactsFill className="text-4xl text-neutral-600 " />
        <h2 className="font-bold text-2xl text-neutral-600 py-7">Tracking</h2>
        {/* list div 1 */}
        <div className="flex ">
          <FaCircleDot className="text-xs" />
          <p className="text-sm px-2 text-neutral-600">Where is my parcel?</p>
        </div>

        {/* list div 2 */}
        <div className="flex ">
          <FaCircleDot className="text-xs" />
          <p className="text-sm px-2 text-neutral-600">
            What is my tracking ID?
          </p>
        </div>

        {/* list div 3 */}
        <div className="flex ">
          <FaCircleDot className="text-xs" />
          <p className="text-sm px-2 text-neutral-600">
            Why is there no tracking against my parcel?
          </p>
        </div>

        {/* list div 4 */}
        <div className="flex ">
          <FaCircleDot className="text-xs" />
          <p className="text-sm px-2 text-neutral-600">
            My tracking hasn't updated, what should I do?
          </p>
        </div>

        <button className="my-5 w-28 h-12 bg-neutral-700 rounded-md flex flex-row items-center justify-center gap-1">
          See all
          <FaArrowRightLong />
        </button>
      </div>

      {/* Red Box */}
      <div
        className={`w-96 h-80 bg-white absolute top-10 transform transition-all duration-1000 ease-in-out delay-400 ${
          animate ? "opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <FaBox className="text-4xl text-neutral-600 " />
        <h2 className="font-bold text-2xl text-neutral-600 py-7">Tracking</h2>
        {/* list div 1 */}
        <div className="flex ">
          <FaCircleDot className="text-xs" />
          <p className="text-sm px-2 text-neutral-600">Where is my parcel?</p>
        </div>

        {/* list div 2 */}
        <div className="flex ">
          <FaCircleDot className="text-xs" />
          <p className="text-sm px-2 text-neutral-600">
            What is my tracking ID?
          </p>
        </div>

        {/* list div 3 */}
        <div className="flex ">
          <FaCircleDot className="text-xs" />
          <p className="text-sm px-2 text-neutral-600">
            Why is there no tracking against my parcel?
          </p>
        </div>

        {/* list div 4 */}
        <div className="flex ">
          <FaCircleDot className="text-xs" />
          <p className="text-sm px-2 text-neutral-600">
            My tracking hasn't updated, what should I do?
          </p>
        </div>

        <button className="my-5 w-28 h-12 bg-neutral-700 rounded-md flex flex-row items-center justify-center gap-1">
          See all
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default AnimateBoxes;
