import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WhyChoose = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("/toys.json")
      .then(res => res.json())
      .then(data => {
        const featured = data.slice(9, 15); 
        setFeatures(featured);
      })
      .catch((err) => console.error("Failed to load features data:", err));
  }, []);

  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 py-20 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature) => (
            <motion.div
              key={feature.toyId}
              className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <img
                  src={feature.pictureURL}
                  alt={feature.toyName}
                  className="w-20 h-20 mx-auto mb-4"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.toyName}</h3> 
              <p className="text-lg text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a
            href="#"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Get Started Today!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
