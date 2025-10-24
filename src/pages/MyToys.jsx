import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedToys = JSON.parse(localStorage.getItem("myToys")) || [];
    setToys(savedToys);
  }, []);

  useEffect(() => {
    const sum = toys.reduce((acc, toy) => acc + toy.price * (toy.Quantity || 1), 0);
    setTotalPrice(sum);
  }, [toys]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this toy!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6d28d9",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const remainingToys = toys.filter((toy) => toy.toyId !== id);
        setToys(remainingToys);
        localStorage.setItem("myToys", JSON.stringify(remainingToys));
        Swal.fire("Deleted!", "Your toy has been removed.", "success");
      }
    });
  };

  const handleSort = () => {
    const sorted = [...toys].sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );
    setToys(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <section className="py-2 pt-5 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">
          My Toys
        </h1>

        <div className="text-right mb-4">
          <button
            onClick={handleSort}
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Sort by Price ({sortOrder === "asc" ? "Low→High" : "High→Low"})
          </button>
        </div>




        <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-4">
          <table className="w-full table-auto">
            <thead className="bg-purple-600 text-white text-left">
              <tr>
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3">Toy Name</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Quantity</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy) => (
                <tr key={toy.toyId} className="border-b hover:bg-gray-50 transition">
                  <td className="px-4 py-3">
                    <img
                      src={toy.pictureURL}
                      alt={toy.toyName}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </td>
                  <td className="px-4 py-3 font-semibold">{toy.toyName}</td>
                  <td className="px-4 py-3">{toy.subCategory}</td>
                  <td className="px-4 py-3 text-purple-600 font-bold">
                    ${(toy.price * (toy.Quantity || 1)).toFixed(2)}
                  </td>
                  <td className="px-4 py-3">{toy.Quantity}</td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => handleDelete(toy.toyId)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md font-semibold transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-4 p-4 bg-gray-50 rounded-lg shadow-inner">
            <span className="text-lg font-semibold">
              Total Price: <span className="text-purple-700">${totalPrice}</span>
            </span>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition">
              Order
            </button>
          </div>
        </div>





        {toys.length === 0 && (
          <p className="text-center text-gray-500 mt-6 mb-4">
            You haven't added any toys yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default MyToys;
