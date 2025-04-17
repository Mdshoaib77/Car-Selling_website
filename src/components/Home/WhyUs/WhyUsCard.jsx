import React from "react";

const WhyUsCard = ({ icon, title }) => {
  return (
    <div className="p-8 space-y-4 text-center transition duration-200 ease-in-out rounded-md cursor-pointer bg-slate-100 hover:bg-secondary hover:text-white">
      {icon}
      <h1 className="text-3xl font-bold  text-primary">{title}</h1>
      <p className="text-sm ">
      At WheelsDeal, we provide exceptional value, quality, and service. Our mission
        is to ensure that every customer gets the best possible experience from start
        to finish. Here's why we stand out from the competition.
      </p>
    </div>
  );
};

export default WhyUsCard;
