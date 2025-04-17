import React from "react";
import img from "../../../assets/img/mission.jpg";
import { motion } from "framer-motion";

const OurMission = () => {
  return (
    <div className="container my-10">
      <div>
        <motion.h1
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our <span className="text-primary">Mission</span>
        </motion.h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 mt-8 md:flex-row">
        {/* img section */}
        <motion.div
          className="w-full md:w-2/4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img className="rounded-lg" src={img} alt="Mission" />
        </motion.div>

        {/* content section */}
        <div className="w-full space-y-4 md:w-2/4">
          <motion.h1
            className="text-xl font-bold text-primary lg:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            To create a community where every journey is extraordinary.
          </motion.h1>
          <motion.h2
            className="text-lg font-semibold lg:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Empower individuals to achieve sustainable mobility solutions and inspire
            a positive impact on the environment.
          </motion.h2>

          <motion.p
            className="text-sm lg:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Our mission is to provide reliable, sustainable, and high-performance
            vehicles that cater to diverse needs while protecting our planet. We
            believe that transportation should not only be efficient but also
            eco-friendly, reducing carbon footprints without compromising on quality
            or style.
          </motion.p>

          <motion.p
            className="text-sm lg:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            By empowering individuals with sustainable mobility solutions, we strive
            to shape a greener future and create a global community dedicated to
            protecting the environment. Join us in our mission to redefine mobility for
            the betterment of both people and the planet.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
