import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { toast } from "react-toastify";

const ContactUs = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">


        <div className="bg-indigo-600 text-white p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">ToyTopia</h2>
            <p className="text-indigo-100 mb-6">
              Bringing smiles with toys that inspire creativity and joy.
            </p>

            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-xl" />
                <span>123 Toy Street, Dhaka, Bangladesh</span>
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-xl" />
                <span>+880 1234 567890</span>
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-xl" />
                <span>contact@toytopia.com</span>
              </p>
            </div>
          </div>

          <div className="flex gap-5 mt-8">
            <a href="#" className="text-white hover:text-pink-300 text-2xl transition"><FaFacebook /></a>
            <a href="#" className="text-white hover:text-pink-300 text-2xl transition"><FaInstagram /></a>
            <a href="#" className="text-white hover:text-pink-300 text-2xl transition"><FaTwitter /></a>
          </div>
        </div>

        <div className="p-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Address</label>
              <input
                type="text"
                name="address"
                required
                placeholder="Enter your address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Write your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 cursor-pointer shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
