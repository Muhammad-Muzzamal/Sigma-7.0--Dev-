import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-5">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Welcome to <span className="text-yellow-300">Your React App</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-100 max-w-xl"
        >
          Build modern web experiences with React, Tailwind, and Framer Motion.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="mt-8 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-300"
        >
          Get Started
        </motion.button>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-5">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Why Choose Us?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fast Performance",
                desc: "Experience blazing fast loading times with optimized React components.",
              },
              {
                title: "Smooth Animations",
                desc: "Make your UI stand out with stunning Framer Motion effects.",
              },
              {
                title: "Responsive Design",
                desc: "Looks great on every device — from mobile to desktop.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="bg-gray-100 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
              >
                <h3 className="text-2xl font-semibold mb-3 text-indigo-600">
                  {card.title}
                </h3>
                <p className="text-gray-700">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900 text-gray-400">
        <p>© {new Date().getFullYear()} Your React App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
