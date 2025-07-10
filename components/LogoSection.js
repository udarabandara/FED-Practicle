import React from "react";

function LogoSection() {
  const Logos = [
    "https://logi.wpengine.com/wp-content/uploads/2024/08/4kicks.jpg",
    "https://logi.wpengine.com/wp-content/uploads/2024/08/across-kenya.jpg",
    "https://logi.wpengine.com/wp-content/uploads/2024/08/gs-awnings-1.jpg",
    "https://logi.wpengine.com/wp-content/uploads/2024/08/lux-living.jpg",
    "https://logi.wpengine.com/wp-content/uploads/2024/08/SCOE10X.jpg",
  ];
  return (
    <div className="w-full flex">
      <div className="w-full flex flex-row  items-center justify-between px-20">
        {Logos.map((Logo, index) => (
          <img src={Logo} className="w-40 h-10" key={index}/>
        ))}
      </div>
    </div>
  );
}

export default LogoSection;
