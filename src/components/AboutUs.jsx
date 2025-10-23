import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 py-24 text-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        
        <div className="w-full lg:w-1/2">
          <img
            src="https://i.ibb.co/fVZZbKwF/stuffed.jpg"
            alt="About Us"
            className="w-full rounded-3xl shadow-2xl animate-float"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            About <span className="text-yellow-300">Our Toys Store</span>
          </h2>
          <p className="text-lg md:text-xl mb-6 text-gray-100 leading-relaxed">
            We believe every child deserves fun, creativity, and learning in their playtime. 
            Our store offers a wide variety of high-quality toys that inspire imagination, 
            encourage skill development, and create unforgettable childhood memories.
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
            From educational sets to fun-filled games, each product is carefully selected 
            to ensure safety, durability, and endless hours of entertainment. Join us in 
            making playtime meaningful, joyful, and magical!
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl px-6 py-3 shadow-lg transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
            <button className="border border-white text-white rounded-xl px-6 py-3 hover:bg-white hover:text-purple-600 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default AboutUs;
