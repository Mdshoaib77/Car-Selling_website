import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white  mt-14 bg-secondary">
      <div className="flex flex-col justify-between p-8 px-5 md:flex-row lg:px-28 md:px-16">
        <div className="w-full  md:w-1/4">
          <h1 className="pb-4 text-2xl font-semibold ">WheelsDeal</h1>
          <p className="mb-2 text-sm ">
            Discover your dream car with us! We offer a wide range of vehicles
            to suit every need and budget. Experience exceptional service and
            unbeatable prices. Your perfect ride awaits!
          </p>
        </div>
        <div>
          <h1 className="pt-5 pb-4 text-xl font-semibold  md:pt-0">
            pages Links
          </h1>
          <div className="flex flex-col gap-2 font-medium ">
            <Link
              to="/about"
              className="transition duration-200 ease-linear  hover:translate-x-3"
            >
              About Us
            </Link>
            <Link
              to="/cars"
              className="transition duration-200 ease-linear  hover:translate-x-3"
            >
              Our Cars
            </Link>
            <Link
              to="/services"
              className="transition duration-200 ease-linear  hover:translate-x-3"
            >
              Services
            </Link>
          </div>
        </div>

        <div>
          <h1 className="pt-5 pb-4 text-xl font-semibold  md:pt-0">
            Used Cars for sale
          </h1>
          <div className="flex flex-col gap-2 font-medium ">
            <Link
              to="/"
              className="transition duration-200 ease-linear  hover:translate-x-3"
            >
              Toyota Camry
            </Link>
            <Link
              to="/"
              className="transition duration-200 ease-linear  hover:translate-x-3"
            >
              Chevrolet Corvette
            </Link>
            <Link
              to="/"
              className="transition duration-200 ease-linear  hover:translate-x-3"
            >
              Volkswagen Golf
            </Link>
            <Link
              to="/"
              className="transition duration-200 ease-linear  hover:translate-x-3"
            >
              Nissan Rogue
            </Link>
          </div>
        </div>

        <div>
          <h1 className="pt-5 pb-4 text-xl font-semibold  md:pt-0">
            Learn More
          </h1>
          <div className="flex flex-col gap-2 font-medium ">
            <Link
              to="/"
              className="transition duration-200 ease-linear  hover:translate-x-3"
            >
              User-friendly
            </Link>
            <Link
              to="/"
              className="transition duration-200 ease-linear  hover:translate-x-3"
            >
              Search and Filters
            </Link>
            <Link
              to="/"
              className="transition duration-200 ease-linear  hover:translate-x-3"
            >
              Secure Payment
            </Link>
            <Link
              to="/"
              className="transition duration-200 ease-linear  hover:translate-x-3"
            >
              Geolocation Services
            </Link>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </footer>
  );
};

export default Footer;
