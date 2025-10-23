import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const PopularToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("/toys.json")
      .then(res => res.json())
      .then(data => {
        const featured = data.slice(3, 9); 
        setToys(featured);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-purple-700 mb-3">
            Featured Toys
          </h2>
          <p className="text-gray-600 text-lg">
            Handpicked toys for fun, learning, and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
          {toys.map(toy => (
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
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(Math.round(toy.rating))].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                  <span className="text-gray-500 text-sm">
                    ({toy.rating})
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {toy.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-pink-500">
                    ${toy.price.toFixed(2)}
                  </span>
                  <button className="px-5 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularToys;
