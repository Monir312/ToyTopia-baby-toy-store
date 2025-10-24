import React, { useContext, useState } from "react";
import { AuthContext } from "../authContext/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext); 
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();

    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });

        Swal.fire({
          title: "Success!",
          text: "Profile updated successfully!",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 rounded-2xl shadow-lg bg-white text-center">
      <h2 className="text-2xl font-bold mb-6 text-pink-600">My Profile</h2>

      <div className="mb-6">
        <img
          src={user?.photoURL || "https://i.ibb.co/k2yXhKBS/magic.jpg"}
          alt="User"
          className="w-24 h-24 rounded-full mx-auto mb-3 border-4 border-pink-300"
        />
        <h3 className="text-lg font-semibold">{user?.displayName || "No Name"}</h3>
        <p className="text-gray-600">{user?.email}</p>
      </div>

      <form onSubmit={handleUpdate} className="text-left space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-pink-500 text-white font-semibold py-2 rounded-lg hover:bg-pink-600 transition-all"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
