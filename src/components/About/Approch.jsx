import React from "react";
import img from "../../assets/img/approch.jpg";
import { motion } from "framer-motion";

const Approch = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center gap-5 md:flex-row mt-14">
      {/* content section */}
      <div className="w-full space-y-4 md:w-2/4">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Approach
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
          We are committed to shaping a better future through innovative and
          sustainable solutions in the automotive world. Our mission is to lead the
          way in providing eco-friendly, cutting-edge vehicles that not only perform
          excellently but also contribute positively to the environment.
        </motion.p>

        <motion.p
          className="text-sm lg:text-base"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          By focusing on sustainability, innovation, and customer satisfaction, we
          aim to transform the way people view and experience mobility, bringing a
          greener, smarter future to life for all.
        </motion.p>
      </div>

      {/* img section */}
      <div className="w-full md:w-2/5">
        <img className="rounded-lg" src={img} alt="Our Approach" />
      </div>
    </div>
  );
};

export default Approch;
