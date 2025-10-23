import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Failed to load reviews:", err));
  }, []);

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-gray-800 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          What Our Customers Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col items-center">
                <img
                  src={review.picture}
                  alt={review.name}
                  className="w-20 h-20 rounded-full mb-4 object-cover shadow-md"
                />
                <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-center">{review.review}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
