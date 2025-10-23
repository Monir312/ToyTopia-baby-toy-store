import React from "react";
import { Link, useNavigate  } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { GiJusticeStar } from "react-icons/gi";

import { useContext, useState } from "react";
import { AuthContext } from "../authContext/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
const navigate = useNavigate();



const handleRegister = (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const photoURL = form.photoURL.value;

  // Create User
  createUser(email, password)
    .then((result) => {
      const user = result.user;
      console.log("User created:", user);

      // Update Profile
      updateUser({ displayName: name, photoURL: photoURL })
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          console.error(err);
          setError(err.message);
        });
    })
    .catch((err) => {
      console.error(err);
      setError(err.message);
    });
};



const handleGoogleSignIn = () => {
  googleSignIn()
    .then((result) => {
      console.log(result.user);
      navigate("/");
    })
    .catch((error) => {
      console.error(error);
      setError(error.message);
    });
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-indigo-100 p-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-8">
        {/* Header */}
        <div className="flex items-center text-3xl justify-center">
        <h2 className="font-bold text-center text-indigo-600 mb-2 drop-shadow-sm">
          Create an Account
        </h2>
        <GiJusticeStar className="text-yellow-500 ml-2"/>
        </div>
       
        <p className="text-center text-gray-500 mb-6">
          Join ToyTopia — Explore colorful worlds of fun!
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Paste your photo link"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="Create a password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            Register
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-2 text-gray-500 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google Sign-In */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition duration-300"
        >
          <FcGoogle className="text-2xl" />{" "}
          <span className="font-medium text-gray-700">
            Continue with Google
          </span>
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-indigo-500 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
