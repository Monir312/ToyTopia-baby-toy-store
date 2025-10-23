import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaHome, FaQuestion } from "react-icons/fa";
import { FcAbout, FcPrivacy } from "react-icons/fc";
import { IoCall } from "react-icons/io5";
import { MdIndeterminateCheckBox, MdLocalShipping } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-200 via-yellow-100 to-pink-100 text-gray-800 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-pink-600 mb-3">ToyTopia</h2>
          <p className="text-sm text-gray-700">
            A joyful online marketplace where kids’ dreams come true.  
            Explore colorful, creative, and safe toys for every child.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-pink-600">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="/" className="hover:text-pink-500 transition-colors flex items-center">
                <FaHome className="mr-2"></FaHome> Home
              </a>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-500 transition-colors flex items-center">
                <FcAbout className="mr-2"></FcAbout> About Us
              </Link>
            </li>
            <li>
              <a href="/privacy" className="hover:text-pink-500 transition-colors flex items-center">
                <FcPrivacy className="mr-2"></FcPrivacy> Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-pink-500 transition-colors flex items-center">
              <MdIndeterminateCheckBox className="mr-2"/> Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-pink-600">Support</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="/contact" className="hover:text-pink-500 transition-colors flex items-center">
              <IoCall className="mr-2"/> Contact Us
              </a>
            </li>
            <li>
              <Link to="/blog" className="hover:text-pink-500 transition-colors flex items-center">
              <FaQuestion className="mr-2"/> FAQ
              </Link>
            </li>
            <li>
              <a href="/shipping" className="hover:text-pink-500 transition-colors flex items-center">
              <MdLocalShipping className="mr-2"/> Shipping Info
              </a>
            </li>
            <li>
              <a href="/returns" className="hover:text-pink-500 transition-colors flex items-center">
              <TbTruckReturn className="mr-2"/> Returns & Refunds
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-pink-600">Stay Connected</h3>
          <p className="text-sm text-gray-700 mb-3">
            Follow us on social media and never miss out on our special offers!
          </p>
          <div className="flex space-x-4 text-pink-600 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-800 transition-colors"
            >
              <FaFacebookF className=""/>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-800 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-800 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-800 transition-colors"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>


      <div className="border-t border-pink-300 mt-8 mb-4"></div>

      <div className="text-center text-sm text-gray-600">
        <p>
        &copy; {new Date().getFullYear()}{" "}
          <span className="text-pink-600 font-semibold">ToyTopia</span> — All
          Rights Reserved.
        </p>
        <p className="text-xs mt-1">
          Made with by <span className="font-semibold">Monir</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
