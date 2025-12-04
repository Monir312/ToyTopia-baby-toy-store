import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

const PopularToys = () => {
  const navigate = useNavigate();
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        // 6টি featured toys নেওয়া হচ্ছে
        const featured = data.slice(3, 9);
        setToys(featured);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-16">
      <div className="max-w-[90vw] mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-purple-700 mb-3">
            Featured Toys
          </h2>
          <p className="text-gray-600 text-lg">
            Handpicked toys for fun, learning, and creativity
          </p>
        </div>

        {/* Toys Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toys.map((toy) => (
            <div
              key={toy.toyId}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">
                  {toy.toyName}
                </h3>
                {/* Rating */}
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(Math.round(toy.rating))].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                  <span className="text-gray-500 text-sm">({toy.rating})</span>
                </div>
                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {toy.description}
                </p>
                {/* Price & Button */}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-pink-500">
                    ${toy.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => navigate(`/toydetails/${toy.toyId}`)}
                    className="px-5 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300 text-xs"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <Link
            to="/alltoys"
            className="px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300"
          >
            View More Toys
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularToys;
