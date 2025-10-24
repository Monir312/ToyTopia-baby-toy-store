// BlogPage.jsx
import React, { useEffect, useState } from "react";
import { FaRegClock, FaRegUser, FaQuestionCircle } from "react-icons/fa";




const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [faqs, setFaqs] = useState([]);


  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("/faq.json")
      .then((res) => res.json())
      .then((data) => setFaqs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-8">
      <h1 className="text-5xl font-bold text-center text-purple-700 mb-12">
        ToyTopia Blog
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={blog.thumbnail}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-purple-700 mb-2">
                {blog.title}
              </h2>
              <div className="flex items-center text-gray-500 text-sm mb-4 gap-4">
                <div className="flex items-center gap-1">
                  <FaRegUser /> {blog.author}
                </div>
                <div className="flex items-center gap-1">
                  <FaRegClock /> {blog.date}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <button className="px-5 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300 font-semibold">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>


      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 flex items-center gap-2">
          <FaQuestionCircle /> React & Firebase Q&A
        </h2>
        <div className="space-y-4 ">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="p-4 border-l-4 border-purple-500 bg-purple-50 rounded-lg"
            >
              <h3 className="font-semibold text-purple-700 mb-1">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
