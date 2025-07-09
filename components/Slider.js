"use client";

import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";
import { useState } from "react";

const images = [
  "//wordpress.meetmighty.com/cargoton/wp-content/uploads/2021/06/slider-image2-1.jpg",
  "//wordpress.meetmighty.com/cargoton/wp-content/uploads/2021/05/truck-new.jpg",
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full flex">
      <div className="w-1/3 flex flex flex-col justify-end">
        <div className="flex items-center">
          <div className="h-15 w-20 bg-amber-400 flex items-center justify-center">
            <span className="font-semibold text-gray-50">
              {currentIndex + 1} / {images.length}
            </span>
          </div>

          <button
            className="h-15 w-15 bg-amber-400 flex items-center justify-center"
            onClick={prevSlide}
          >
            <LeftArrow />
          </button>

          <button
            className="h-15 w-15 bg-amber-400 flex items-center justify-center"
            onClick={nextSlide}
          >
            <RightArrow />
          </button>
        </div>
      </div>
      <div className="w-2/3">
        <img
          decoding="async"
          src={images[currentIndex]}
          alt="img"
          className="tp-rs-img rs-lazyload"
          width="2352"
          height="1792"
          style={{ width: "100%", position: "relative", height: "100%" }}
        ></img>
      </div>

      <div className="absolute h-140 w-140 top-45 left-36 p-6 bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 z-10">
        <h5 className="mb-2 text-l font-semibold text-gray-900 items-center">
          <span className="text-amber-400 mr-2 font-bold  text-xl">|</span>{" "}
          LOGISTIC
        </h5>
        <div className="flex flex-col">
          <h1
            className="mb-2 akshar-font text-6xl mt-8 font-semibold text-gray-900 items-center"
            style={{ transform: "scaleY(1.2)", display: "inline-block" }}
          >
            Best Shipping
          </h1>

          <h1
            className="mb-2 akshar-font text-7xl mt-8 font-bold text-amber-400 items-center"
            style={{ transform: "scaleY(1.2)", display: "inline-block" }}
          >
            Partner
          </h1>
        </div>

        <p className="mb-3 mt-8 font-normal text-gray-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>

        <a
          href="#"
          className="inline-flex items-center px-4 py-3 mt-4 text-sm font-medium text-center text-white bg-amber-400 hover:bg-amber-300 focus:ring-4 focus:outline-none"
        >
          DISCOVER MORE
        </a>
      </div>
    </div>
  );
}

export default Slider;
