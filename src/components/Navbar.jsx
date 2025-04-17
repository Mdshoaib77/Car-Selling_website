import React, { useState, useEffect } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleChange = () => setMenu(!menu);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Our Cars", to: "/cars" },
    { name: "Services", to: "/services" },
  ];

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-secondary/90 backdrop-blur-md shadow-md" : "bg-secondary"
      }`}
    >
      <nav className="container flex items-center justify-between py-4 text-white">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <GiSteeringWheel size={35} className="text-primary" />
          <Link to="/" className="text-2xl font-bold">
            WheelsDeal
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="items-center hidden gap-8 text-xl font-medium md:flex">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="relative transition duration-200 ease-linear group hover:text-primary"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="items-center hidden gap-2 px-6 py-2 text-base font-semibold transition-all duration-300 border-2 rounded-full shadow-md lg:inline-flex border-primary text-primary hover:bg-primary hover:text-white hover:shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M18 12h-8m0 0l3-3m-3 3l3 3"
              />
            </svg>
            Sign In
          </motion.button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex items-center md:hidden">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <RiMenuUnfoldFill size={25} onClick={handleChange} />
          )}
        </div>
      </nav>

      {/* Mobile Dropdown Nav */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-secondary text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-300`}
      >
        {navLinks.map((item, i) => (
          <Link
            key={i}
            to={item.to}
            className="transition duration-200 ease-linear hover:text-primary"
            onClick={() => setMenu(false)} // Close menu on click
          >
            {item.name}
          </Link>
        ))}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 mx-auto mt-2 text-base transition-all duration-300 border-2 rounded-full border-primary text-primary hover:bg-primary hover:text-white"
          onClick={() => setMenu(false)} // Close on sign-in click
        >
          Sign In
        </motion.button>
      </div>
    </header>
  );
};

export default Navbar;
