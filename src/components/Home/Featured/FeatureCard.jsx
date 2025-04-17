import React from "react";
import { motion } from "framer-motion";  // Import Framer Motion

const FeatureCard = ({ id, img, name, price }) => {
  return (
    <motion.div
      className="mb-2 text-black transition duration-200 ease-linear border-2 cursor-pointer border-secondary bg-slate-100 rounded-xl hover:scale-95 hover:bg-slate-200"
      key={id}
      initial={{ opacity: 0, y: 50 }}  // Initial state for animation
      animate={{ opacity: 1, y: 0 }}   // Final state for animation
      transition={{ duration: 0.6 }}    // Smooth transition duration
    >
      <div>
        <img src={img} alt="img" className="w-full rounded-t-xl" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <motion.h1
          className="pt-2 text-xl font-semibold text-primary"
          whileHover={{ scale: 1.1 }}  // Hover effect on title
          transition={{ type: "spring", stiffness: 300 }}
        >
          {name}
        </motion.h1>
        <div className="flex gap-10 pt-2">
          <h2 className="text-lg font-medium">Starting at ${price}</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
