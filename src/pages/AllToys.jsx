import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router";


const AllToys = () => {
  const toys = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const toysPerPage = 20;

  const indexOfLastToy = currentPage * toysPerPage;
  const indexOfFirstToy = indexOfLastToy - toysPerPage;
  const currentToys = toys.slice(indexOfFirstToy, indexOfLastToy);
  const totalPages = Math.ceil(toys.length / toysPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-700 mb-4">
          Explore Our Toy Collection
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Discover a wide range of creative and fun toys for kids of all ages. From educational sets to playful games, find the perfect toy that sparks imagination and joy.
        </p>
      </div>


      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentToys.map((toy) => (
          <div
            key={toy.toyId}
            className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 relative group"
          >
            <img
              src={toy.pictureURL}
              alt={toy.toyName}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-purple-700 mb-2">
                {toy.toyName}
              </h2>
              <p className="text-gray-600 text-sm mb-2">
                {toy.subCategory}
              </p>
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={`h-4 w-4 ${i < Math.round(toy.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                      }`}
                  />
                ))}
                <span className="text-gray-500 text-sm ml-2">
                  {toy.rating.toFixed(1)}
                </span>
              </div>
              <p className="text-gray-700 mb-4 line-clamp-3">
                {toy.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-purple-700 font-bold text-lg">
                  ${toy.price}
                </span>
                <span className="text-gray-500 text-sm">
                  Stock: {toy.availableQuantity}
                </span>
              </div>
            </div>

            <div className="absolute inset-0 bg-purple-700 bg-opacity-70 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-3xl">
              <button className="px-6 py-2 bg-yellow-400 text-purple-700 font-bold rounded-full hover:bg-yellow-300 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 gap-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:bg-gray-300"
        >
          Previous
        </button>
        <span className="text-gray-700 font-semibold self-center">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:bg-gray-300"
        >
          Next
        </button>
      </div>


    </div>
  );
};

export default AllToys;