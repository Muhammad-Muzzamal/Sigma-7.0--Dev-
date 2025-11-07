import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white text-gray-800 rounded-2xl shadow-2xl max-w-4xl p-10"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-bold text-center mb-6 text-indigo-600"
        >
          About Us
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg text-gray-600 text-center mb-10"
        >
          We’re passionate developers building high-quality digital experiences.
          Our goal is to merge creativity with technology, crafting designs that
          not only look great but perform seamlessly.
        </motion.p>

        {/* Image + Info Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
            alt="Team"
            className="rounded-xl shadow-lg"
          />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-3 text-indigo-500">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We are a dedicated team of frontend and backend developers,
              designers, and innovators. We believe in building user-centered
              products that solve real-world problems while offering
              world-class aesthetics and performance.
            </p>

            <div className="mt-6 flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-6 py-2 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition"
              >
                Learn More
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-full font-semibold hover:bg-gray-300 transition"
              >
                Our Work
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
