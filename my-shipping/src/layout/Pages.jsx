import React, { useState } from "react";
import { img1, img2, img3 } from "../assets/images";
import { useResponsiveness, BREAKPOINTS } from "../hooks/useResponsiness";

const images = [
  {
    src: img1,
    text: "First image",
  },
  {
    src: img2,
    text: "Inventory Management",
  },
  {
    src: img3,
    text: "Third image",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use the custom responsiveness hook inside the component
  const isMobile = useResponsiveness("mobile");
  const isTablet = useResponsiveness("tablet");
  const isDesktop = useResponsiveness("desktop");

  // Adjust image height based on screen size
  let imageHeight = "h-[600px]";
  if (isMobile) {
    imageHeight = "h-[400px]";
  } else if (isTablet) {
    imageHeight = "h-[600px]";
  } else if (isDesktop) {
    imageHeight = "h-[800px]";
  }

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-8xl">
      {/* Images */}
      <div className={`relative ${imageHeight} w-full rounded-lg overflow-hidden`}>
        <img
          src={images[currentIndex].src}
          alt="Slide"
          className="w-full h-full object-cover"
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <p className="text-white text-lg font-semibold">
            {images[currentIndex].text}
          </p>
        </div>

        {/* Right Arrow */}
        <button
          className=" w-16 ml-9 right-0 transform -translate-y-1/2 text-white p-2 rounded-full shadow-md hover:bg-red-600 border"
          onClick={prevSlide}
        >
          &#8594;
        </button>

        {/* Left Arrow */}
        <button
          className="w-16 mr-11 right-10 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full shadow-md hover:bg-red-600 border"
          onClick={nextSlide}
        >
          &#8592;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
