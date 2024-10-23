import React, { useState } from 'react';
import { img1, img2, img3 } from '../assets/images';

const images = [
  {
    src: img1,
    text: 'First image'
  },
  {
    src: img2,
    text: 'Second image'
  },
  {
    src: img3,
    text: 'Third image'
  }
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className='relative w-full max-w-8xl'>
      {/* Images */}
      <div className='relative h-[800px] w-full rounded-lg overflow-hidden'>
        <img
          src={images[currentIndex].src}
          alt="Slide"
          className='w-full h-full object-cover'
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <p className="text-white text-lg font-semibold">{images[currentIndex].text}</p>
        </div>

        {/* Left Arrow */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200"
          onClick={prevSlide}
        >
          &#8592;
        </button>

        {/* Right Arrow */}
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200"
          onClick={nextSlide}
        >
          &#8594;
        </button>

        {/* Dots for navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
      {/* Example filler content to trigger scrolling */}
      <div className="h-[1000px] bg-gray-100">Some additional content below</div>
    </div>
  );
};

export default ImageSlider;
