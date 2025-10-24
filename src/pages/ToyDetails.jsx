import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useParams } from "react-router";

const ToyDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  console.log(id);
  const [toy, setToy] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        const foundToy = data.find((t) => t.toyId === parseInt(id));
        setToy(foundToy);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setFormData({ name: "", email: "" });
  };

  if (!toy) return <div className="text-center py-20">Loading...</div>;

  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("myToys")) || [];

    const newToy = {
      toyId: toy.toyId,
      toyName: toy.toyName,
      pictureURL: toy.pictureURL,
      price: toy.price,
      subCategory: toy.subCategory,
      Quantity: quantity,
    };

    const alreadyExists = existingCart.find((item) => item.toyId === toy.toyId);
    if (alreadyExists) {
      alert("This toy is already added to your list!");
      return;
    }

    existingCart.push(newToy);
    localStorage.setItem("myToys", JSON.stringify(existingCart));

    alert(`${toy.toyName} added to My Toys successfully!`);
  };



  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 lg:flex gap-12">

        <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src={toy.pictureURL}
            alt={toy.toyName}
            className="rounded-2xl shadow-2xl w-full max-w-md"
          />
        </div>

        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-purple-700">{toy.toyName}</h2>
          <p className="text-gray-700 text-lg">{toy.description}</p>

          <div className="grid grid-cols-2 gap-4 text-gray-600 font-semibold">
          <div>Price: <span className="font-bold">${(toy.price * quantity).toFixed(2)}</span></div>

            <div className="flex items-center gap-3 ">Rating: <span className="font-bold">{toy.rating} </span> <FaStar className="text-yellow-400" /></div>
            <div>Available: <span className="font-bold">{toy.availableQuantity}</span> </div>
            <div>Category: <span className="font-bold">{toy.subCategory}</span></div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <h3 className="font-bold">Quantity</h3>
            <button onClick={decreaseQuantity} className="px-3 py-1 bg-gray-200 rounded-md">-</button>
            <span className="font-semibold">{quantity}</span>
            <button onClick={increaseQuantity} className="px-3 py-1 bg-gray-200 rounded-md">+</button>
          </div>

          <div className="mt-6">
            <button
              onClick={handleAddToCart}
              className=" flex items-center px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition-all duration-300"
            >
              <TiShoppingCart className="mr-2" /> Add to Cart
            </button>
          </div>


          <div className="mt-6 p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Try This Toy</h3>
            {success && (
              <p className="text-green-600 mb-4 font-semibold">
                Form submitted successfully!
              </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Try Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToyDetails;
