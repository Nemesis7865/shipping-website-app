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
        <h2 className="font-bold text-2xl text-neutral-600 py-7">I'm not in</h2>
        {/* list div 1 */}
        <div className="flex ">
          <FaCircleDot className="text-xs" />
          <p className="text-sm px-2 text-neutral-600">
            I'm not in, what will happen to my parcel?
          </p>
        </div>

        {/* list div 2 */}
        <div className="flex ">
          <FaCircleDot className="text-xs" />
          <p className="text-sm px-2 text-neutral-600">
            Can you leave my parcel in a safe place?
          </p>
        </div>

        {/* list div 3 */}
        <div className="flex ">
          <FaCircleDot className="text-xs" />
          <p className="text-sm px-2 text-neutral-600">
            Can you leave my parcel with a neighbour?
          </p>
        </div>

        {/* list div 4 */}
        <div className="flex ">
          <FaCircleDot className="text-xs" />
          <p className="text-sm px-2 text-neutral-600">
            Can I call the agent directly?
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
        <h2 className="font-bold text-2xl text-neutral-600 py-7">
          Missed delivery
        </h2>
        {/* list div 1 */}
        <div className="flex ">
          <FaCircleDot className="text-xs" />
          <p className="text-sm px-2 text-neutral-600">
            Can i call agent directly?
          </p>
        </div>

        {/* list div 2 */}
        <div className="flex ">
          <FaCircleDot className="text-xs" />
          <p className="text-sm px-2 text-neutral-600">
            Can your agent call back?
          </p>
        </div>

        {/* list div 3 */}
        <div className="flex ">
          <FaCircleDot className="text-xs" />
          <p className="text-sm px-2 text-neutral-600">
            My parcel has been delivered to the wrong adress
          </p>
        </div>

        {/* list div 4 */}
        <div className="flex ">
          <FaCircleDot className="text-xs" />
          <p className="text-sm px-2 text-neutral-600">
            I dont't have a calling card
          </p>
        </div>

        <button className="my-5 w-28 h-12 bg-neutral-700 rounded-md flex flex-row items-center justify-center gap-1">
          See all
          <FaArrowRightLong />
        </button>
      </div>

      {/* animated left down div */}

      <div
        className={`w-[1390px] h-[450px] bg-white absolute bottom-0 gap-24 flex flex-row transform transition-all duration-1000 ease-in-out delay-200 ${
          animate ? "right-1 opacity-100" : "-right-64 opacity-0"
        }`}
      >
        <div className="w-96 h-auto">
          <FaDirections className="text-4xl text-neutral-600 flex" />
          <h2 className="font-bold text-2xl text-neutral-600 py-7">
            Redelivery
          </h2>
          {/* list div 1 */}
          <div className="flex ">
            <FaCircleDot className="text-sm" />
            <p className="text-sm px-2 text-neutral-600">
              How do I rearrange my parcel delivery?
            </p>
          </div>

          {/* list div 2 */}
          <div className="flex ">
            <FaCircleDot className="text-xs" />
            <p className="text-sm px-2 text-neutral-600">
              Tracking shows a missed delivery attempt but I was in
            </p>
          </div>

          {/* list div 3 */}
          <div className="flex ">
            <FaCircleDot className="text-xs" />
            <p className="text-sm px-2 text-neutral-600">
              Can the driver come back?
            </p>
          </div>

          {/* list div 4 */}
          <div className="flex ">
            <FaCircleDot className="text-xs" />
            <p className="text-sm px-2 text-neutral-600">
              My parcel was delivered to the wrong address
            </p>
          </div>
          <button className="my-5 w-28 h-12 bg-neutral-700 rounded-md flex flex-row items-center justify-center gap-1">
            See all
            <FaArrowRightLong />
          </button>
        </div>

        {/* div 2 */}
        <div className="w-96 h-auto">
          <MdDangerous className="text-4xl text-neutral-600 " />
          <h2 className="font-bold text-2xl text-neutral-600 py-7">
            Damaged or missing parcel
          </h2>
          {/* list div 1 */}
          <div className="flex ">
            <FaCircleDot className="text-xs" />
            <p className="text-sm px-2 text-neutral-600">
              My parcel arrived damaged
            </p>
          </div>

          {/* list div 2 */}
          <div className="flex ">
            <FaCircleDot className="text-xs" />
            <p className="text-sm px-2 text-neutral-600">
              My parcel was returned to sender due to damage
            </p>
          </div>

          {/* list div 3 */}
          <div className="flex ">
            <FaCircleDot className="text-xs" />
            <p className="text-sm px-2 text-neutral-600">
              My parcel is missing
            </p>
          </div>

          {/* list div 4 */}
          <div className="flex ">
            <FaCircleDot className="text-xs" />
            <p className="text-sm px-2 text-neutral-600">
              Part of my order is missing
            </p>
          </div>
          <button className="my-5 w-28 h-12 bg-neutral-700 rounded-md flex flex-row items-center justify-center gap-1">
            See all
            <FaArrowRightLong />
          </button>
        </div>

        <div className="w-96 h-auto">
          <FaPlay className="text-4xl text-neutral-600 flex" />
          <h2 className="font-bold text-2xl text-neutral-600 py-7">Returns</h2>
          {/* list div 1 */}
          <div className="flex ">
            <FaCircleDot className="text-xs" />
            <p className="text-sm px-2 text-neutral-600">
              How do I return my parcel?
            </p>
          </div>

          {/* list div 2 */}
          <div className="flex ">
            <FaCircleDot className="text-xs" />
            <p className="text-sm px-2 text-neutral-600">
              Is there a cost to return a parcel?
            </p>
          </div>

          {/* list div 3 */}
          <div className="flex ">
            <FaCircleDot className="text-xs" />
            <p className="text-sm px-2 text-neutral-600">
              How will I know when my item has been returned?
            </p>
          </div>

          {/* list div 4 */}
          <div className="flex ">
            <FaCircleDot className="text-xs" />
            <p className="text-sm px-2 text-neutral-600">
              Can I track my return?
            </p>
          </div>
          <button className="my-5 w-28 h-12 bg-neutral-700 rounded-md flex flex-row items-center justify-center gap-1">
            See all
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimateBoxes;
