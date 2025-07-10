import React from "react";

function Stats() {
  return (
    <div className="w-full flex mx-20 my-5 text-sky-900">
      <div className="w-1/4 flex flex-row mx-3 items-center ">
        <span className="absolute text-7xl font-extrabold text-gray-50 z-0 select-none drop-shadow-lg">
          890
        </span>
        <span className="text-4xl font-bold items-center z-2">890</span>
        <span className="flex flex-col text-l font-bold ml-4 z-2">
          <p>Delivered</p>
          <p>Packages</p>
        </span>
      </div>
      <div className="w-1/4 flex flex-row mx-3 items-center ">
        <span className="absolute text-7xl font-extrabold text-gray-50 z-0 select-none drop-shadow-lg">
          137
        </span>
        <span className="text-4xl font-bold z-2">137</span>
        <span className="flex flex-col text-l font-bold ml-4 z-2">
          <p>countries</p>
          <p>Covered</p>
        </span>
      </div>
      <div className="w-1/4 flex flex-row mx-3 items-center ">
        <span className="absolute text-7xl font-extrabold text-gray-50 z-0 select-none drop-shadow-lg">
          740
        </span>
        <span className="text-4xl font-bold z-2">740</span>
        <span className="flex flex-col text-l font-bold ml-4 z-2">
          <p>Tons</p>
          <p>of Goods</p>
        </span>
      </div>
      <div className="w-1/4 flex flex-row mx-3 items-center ">
        <span className="absolute text-7xl font-extrabold text-gray-50 z-0 select-none drop-shadow-lg">
          600
        </span>
        <span className="text-4xl font-bold z-2">600</span>
        <span className="flex flex-col text-l font-bold ml-4 z-2">
          <p>Satisfied</p>
          <p>Clients</p>
        </span>
      </div>
    </div>
  );
}

export default Stats;
