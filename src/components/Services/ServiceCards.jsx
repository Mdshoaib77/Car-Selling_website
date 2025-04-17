import React from "react";

const ServiceCards = ({ icon, title }) => {
  return (
    <div className="p-8 space-y-4 text-center transition duration-300 ease-in-out border-2 rounded-md cursor-pointer bg-slate-100 border-secondary hover:bg-secondary hover:text-white">
      {icon}
      <h1 className="text-3xl font-bold  text-primary">{title}</h1>
      <p className="text-sm ">
        Explore a world of luxury, precision, and performance. Our vehicles are not just cars; they are a statement of excellence. Whether you're seeking unrivaled comfort, cutting-edge technology, or sheer power, we have the perfect ride for you. Drive your dream today with the finest selection of premium cars, designed to turn heads and elevate your experience.
      </p>
    </div>
  );
};

export default ServiceCards;
