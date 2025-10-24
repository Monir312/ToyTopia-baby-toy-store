import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../src/authContext/AuthProvider";

const AddAToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;

    const newToy = {
      toyName: form.toyName.value,
      sellerName: form.sellerName.value,
      sellerEmail: form.sellerEmail.value,
      price: parseFloat(form.price.value),
      rating: parseFloat(form.rating.value),
      availableQuantity: parseInt(form.quantity.value),
      subCategory: form.subCategory.value,
      pictureURL: form.pictureURL.value,
      description: form.description.value,
    };

    console.log(newToy);

    Swal.fire({
      title: "Toy Added Successfully!",
      text: `${newToy.toyName} has been added.`,
      icon: "success",
      confirmButtonColor: "#6d28d9",
    });

    form.reset();
  };

  return (
    <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="bg-white p-10 md:p-14 rounded-3xl shadow-2xl max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
            Add a New Toy
          </h1>

          <form onSubmit={handleAddToy} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Toy Name
                </label>
                <input
                  type="text"
                  name="toyName"
                  placeholder="Enter toy name"
                  className="input input-bordered w-full border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Sub-category
                </label>
                <select
                  name="subCategory"
                  className="input input-bordered w-full border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                >
                  <option value="">Select category</option>
                  <option value="Building Blocks">Building Blocks</option>
                  <option value="Action Figures">Action Figures</option>
                  <option value="Dolls">Dolls</option>
                  <option value="Sports Toys">Sports Toys</option>
                  <option value="Puzzles">Puzzles</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Seller Name
                </label>
                <input
                  type="text"
                  name="sellerName"
                  defaultValue={user?.displayName}
                  readOnly
                  className="input input-bordered w-full bg-gray-100 border-gray-300 rounded-lg p-3"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Seller Email
                </label>
                <input
                  type="email"
                  name="sellerEmail"
                  defaultValue={user?.email}
                  readOnly
                  className="input input-bordered w-full bg-gray-100 border-gray-300 rounded-lg p-3"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Available Quantity"
                  className="input input-bordered w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Rating
                </label>
                <input
                  type="number"
                  step="0.1"
                  name="rating"
                  placeholder="e.g. 4.8"
                  className="input input-bordered w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Picture URL
              </label>
              <input
                type="url"
                name="pictureURL"
                placeholder="Enter image URL"
                className="input input-bordered w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>


            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Write a short description..."
                rows="4"
                className="input input-bordered w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600"
                required
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Add Toy
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddAToy;
