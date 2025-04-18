import React from "react";
import CarsCard from "./CarsCard";
import { motion } from "framer-motion";

const OurCars = () => {
  const carsData = [
    {
      id: 0,
      img: "/assets/img/car1.png",
      name: "Cadillac Escalade",
      price: "22,440",
    },
    {
      id: 1,
      img: "/assets/img/car2.png",
      name: "BMW 3 Series",
      price: "54,890",
    },
    {
      id: 2,
      img: "/assets/img/car3.png",
      name: "Mercedes",
      price: "75,890",
    },
    {
      id: 3,
      img: "/assets/img/car4.png",
      name: "BMW 7 Series",
      price: "55,789",
    },
    {
      id: 4,
      img: "/assets/img/car5.png",
      name: "Mercedes-Benz",
      price: "95,776",
    },
    {
      id: 5,
      img: "/assets/img/car6.png",
      name: "Range Rover",
      price: "88,450",
    },
  ];

  return (
    <div className="container pt-24">
      <motion.div
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-center">
          Our <span className="text-primary">Cars</span>
        </h1>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {carsData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 * index, duration: 0.7 }}
          >
            <CarsCard
              img={item.img}
              name={item.name}
              price={item.price}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurCars;
