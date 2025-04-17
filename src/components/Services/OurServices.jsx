import React from "react";
import { GiCarWheel } from "react-icons/gi";
import { SiGoogleearthengine } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { SiCoronaengine } from "react-icons/si";
import ServiceCards from "./ServiceCards";
import { motion } from "framer-motion";  // Import Framer Motion

const OurServices = () => {
  const icon1 = <GiCarWheel className="mx-auto text-green-500" size={48} />;
  const icon2 = (
    <SiGoogleearthengine className="mx-auto text-green-500" size={48} />
  );
  const icon3 = (
    <MdDesignServices className="mx-auto text-green-500" size={48} />
  );

  const icon4 = <IoSettings className="mx-auto text-green-500" size={48} />;
  const icon5 = <FaCar className="mx-auto text-green-500" size={48} />;
  const icon6 = (
    <SiCoronaengine className="mx-auto text-green-500" size={48} />
  );

  return (
    <div className="container pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-center">
          Our <span className="text-primary">Services</span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ServiceCards icon={icon1} title="Tires & Wheels" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ServiceCards icon={icon2} title="Exhaust System" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ServiceCards icon={icon3} title="Cars Maintenance" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <ServiceCards icon={icon4} title="Brake Repairs" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <ServiceCards icon={icon5} title="Body Service" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <ServiceCards icon={icon6} title="Engine Services" />
        </motion.div>
      </div>
    </div>
  );
};

export default OurServices;
