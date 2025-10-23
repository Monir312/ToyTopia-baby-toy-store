import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import './Banner.css';

const Banner = () => {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false); 

  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        const top3 = data.slice(0, 3).map((toy, index) => ({
          id: toy.toyId,
          title: toy.toyName,
          subtitle: toy.description,
          image: toy.pictureURL,
          bg:
            index === 0
              ? "from-purple-600 via-pink-500 to-red-400"
              : index === 1
              ? "from-blue-600 via-cyan-500 to-teal-400"
              : "from-orange-500 via-red-400 to-pink-500",
        }));
        setSlides(top3);
      })
      .catch((err) => console.error("Failed to load banner data:", err));
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrent((prev) => (prev + 1) % slides.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [slides, isHovered]);

  const slide = slides[current];

  if (!slide) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 text-gray-600 text-xl font-semibold">
        Loading Banner...
      </div>
    );
  }

  return (
    <section
      className="relative overflow-hidden text-white"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`min-h-[80vh] flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r ${slide.bg} relative`}
        >
          
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>

          <div className="relative z-10 w-full lg:w-1/2 px-8 md:px-16 py-10 text-center lg:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {slide.title?.split(" ").map((word, index) => (
                <span
                  key={index}
                  className={index % 2 === 0 ? "text-yellow-300" : ""}
                >
                  {word}{" "}
                </span>
              ))}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl mb-8 text-gray-100 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {slide.subtitle}
            </motion.p>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Link to='/alltoys' className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl px-6 py-3 shadow-lg transition-all duration-300 transform hover:scale-105">
                Shop Now
              </Link>
              <button className="border border-white text-white rounded-xl px-6 py-3 hover:bg-white hover:text-purple-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          <motion.div
            className="relative z-10 w-full lg:w-1/2 flex justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={slide.image}
              alt="banner"
              className="w-3/4 md:w-2/3 drop-shadow-2xl animate-float"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>

  );
};

export default Banner;
