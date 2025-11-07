import React from "react";
import { motion } from "framer-motion";

const card = () => {
  return (
    <motion.div
    initial={{ opacity:0, y:50 }}
    animate = {{opacity:1, y:0}}
    whileHover={{ 
        scale:1.05,
        boxShadow:"0x, 15px 30px rgba(0, 0, 0, 0.2)",
     }}
    className="bg-white rounded-2xl shadow-md overflow-hidden w-80 cursor-pointer">
      <img
        src="../../public/images.jfif"
        alt="Logo Image"
        className="w-full h-48 object-cover"
      />
      <div>
        <h2 className="text-xl font-semibold mb-2">Beautiful Landscape</h2>
        <p className="text-gray-600 text-sm">
          Explore the beauty of nature with smooth motion animations.
        </p>
      </div>
    </motion.div>
  );
};

export default card;
