import React from "react";
import WhyUsCard from "./WhyUsCard";
import { SiWebmoney } from "react-icons/si";
import { FaUsers, FaShippingFast } from "react-icons/fa";
import { motion } from "framer-motion";

const WhyUs = () => {
  const icon1 = <SiWebmoney className="mx-auto text-green-500" size={48} />;
  const icon2 = <FaUsers className="mx-auto text-green-500" size={48} />;
  const icon3 = <FaShippingFast className="mx-auto text-green-500" size={48} />;

  return (
    <div className="container flex flex-col justify-center py-10 md:mt-16">
      <motion.h1
        className="text-4xl font-bold text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Why choose <span className="text-primary">WheelsDeal</span>?
      </motion.h1>

      <motion.p
        className="mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        At WheelsDeal, we provide exceptional value, quality, and service. Our mission
        is to ensure that every customer gets the best possible experience from start
        to finish. Here's why we stand out from the competition.
      </motion.p>

      <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <WhyUsCard icon={icon1} title=" Financing Options" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <WhyUsCard icon={icon2} title="Customer Satisfaction" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <WhyUsCard icon={icon3} title="Fast & Simple Booking" />
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUs;
