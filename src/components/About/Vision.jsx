import React from "react";
import img from "../../assets/img/vision.jpg";
import { motion } from "framer-motion";

const Vision = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-16 md:flex-row">
      {/* img section */}
      <div className="w-full md:w-2/5">
        <motion.img
          className="rounded-lg"
          src={img}
          alt="Vision Image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* content section */}
      <div className="w-full space-y-4 md:w-2/4">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Vision
        </motion.h1>

        <motion.h2
          className="text-lg font-semibold lg:text-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Empower individuals to achieve sustainable mobility solutions and inspire
          a positive impact on the environment.
        </motion.h2>

        <motion.p
          className="text-sm lg:text-base"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Our vision is to create a world where mobility is both eco-friendly and
          efficient. We aim to revolutionize the transportation industry by offering
          sustainable vehicles that reduce our carbon footprint while providing
          superior performance and comfort.
        </motion.p>

        <motion.p
          className="text-sm lg:text-base"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          We are committed to pioneering the future of green mobility, ensuring that
          every journey is a step toward a more sustainable and better world for future
          generations.
        </motion.p>
      </div>
    </div>
  );
};

export default Vision;
