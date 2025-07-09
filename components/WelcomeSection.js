import React from "react";

function WelcomeSection() {
  return (
    <div className="w-full flex pa-6">
      <div className="w-1/2">
        <img
          src="/welcome_section_image.png"
          alt="Sample"
          className="w-full h-120"
        />
      </div>
      <div className="w-1/2 h-120 p-12 bg-white">
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-gray-900">
            {" "}
            TransMax Logistics
          </span>
          <span className="text-3xl font-bold text-gray-900 mt-3">

              Around <span className="text-amber-400">the World</span>
       
          </span>

          <p className="text-m mt-8 text-gray-900">
            TransMax is the world's driving worldwide coordinations supplier -we
            uphold industry and exchange the worldwide trade of merchandise
            through land transport
          </p>

          <p className="text-m mt-4 text-gray-500">
            {" "}
            Our worth added administrations guarantee the progression of
            products proceeds consistently and supply chains stay lean and
            streamlined for progress
          </p>

          <button className="px-6 py-2 w-60 mt-8 bg-gray-100 text-teal-800 font-bold hover:bg-gray-50 transition">MORE ABOUT US</button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
