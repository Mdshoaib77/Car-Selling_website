import React from "react";
import img from "../../../assets/img/hero.jpg";
import { motion } from "framer-motion";

// Text animation variant
const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Image animation
const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.6,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <div className="text-white bg-black">
      <div className="container flex flex-col items-center justify-center h-screen px-4 md:flex-row lg:px-0">
        {/* Content section */}
        <div className="w-full mt-10 space-y-5 md:w-2/4">
          <motion.h1
            className="text-4xl font-bold leading-tight lg:text-6xl"
            initial="hidden"
            animate="visible"
            variants={textVariant}
            custom={0}
          >
            Find Your Perfect Ride Today
          </motion.h1>

          <motion.p
            className="text-lg font-medium text-gray-300 lg:text-2xl"
            initial="hidden"
            animate="visible"
            variants={textVariant}
            custom={0.2}
          >
            Over 1000+ new cars ready for you. Discover your next adventure.
          </motion.p>

          <motion.p
            className="text-sm text-gray-400 lg:text-base"
            initial="hidden"
            animate="visible"
            variants={textVariant}
            custom={0.4}
          >
            Our curated collection offers the latest models with unbeatable deals.
            Start your journey with confidence and drive the future.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 pt-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 text-base font-semibold text-white transition-all duration-300 rounded-full shadow-md bg-primary lg:text-lg hover:shadow-lg"
            >
              Explore More
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 text-base font-semibold transition-all duration-300 border-2 rounded-full border-primary text-primary lg:text-lg hover:bg-primary hover:text-white"
            >
              See Cars
            </motion.button>
          </div>
        </div>

        {/* Image section with animation */}
        <motion.div
          className="w-full mt-6 md:w-2/4 md:mt-0"
          initial="hidden"
          animate="visible"
          variants={imageVariant}
        >
          <img src={img} alt="hero car" className="w-full shadow-lg rounded-xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
