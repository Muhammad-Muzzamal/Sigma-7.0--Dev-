import React, { useRef } from "react";
import { motion } from "framer-motion";

const Window = () => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f1f5f9", // light gray background
        overflow: "hidden",
        position: "relative",
      }}
    >
      <motion.div
        drag
        dragConstraints={containerRef} // box will stay within container
        className="bg-amber-700 h-40 w-40 rounded-lg shadow-lg absolute"
      ></motion.div>
    </div>
  );
};

export default Window;
