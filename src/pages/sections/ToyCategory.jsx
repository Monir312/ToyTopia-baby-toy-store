import React, { useState, useEffect } from "react";

const ToyCategory = () => {
  const [toys, setToys] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);

  // 🔹 Load data from toys.json
  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        // Extract unique categories
        const uniqueCategories = [
          ...new Set(data.map((toy) => toy.subCategory)),
        ];
        setCategories(uniqueCategories);
        setActiveCategory(uniqueCategories[0]); // Set default active category
      })
      .catch((err) => console.error("Failed to load toy data:", err));
  }, []);

  // 🔹 Filter toys based on active category
  useEffect(() => {
    if (activeCategory) {
      const filtered = toys.filter((toy) => toy.subCategory === activeCategory);
      setFilteredToys(filtered);
    }
  }, [activeCategory, toys]);

  if (!toys.length) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 text-gray-600 text-xl font-semibold">
        Loading Toys...
      </div>
    );
  }

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Toy Categories
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
              activeCategory === category
                ? "bg-purple-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-purple-100"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Toys Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredToys.map((toy) => (
          <div key={toy.toyId} className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition">
            <img
              src={toy.pictureURL}
              alt={toy.toyName}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="font-semibold text-lg mb-1">{toy.toyName}</h3>
            <p className="text-sm text-gray-500 mb-2">{toy.sellerName}</p>
            <p className="text-purple-600 font-bold text-lg">${toy.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToyCategory;
