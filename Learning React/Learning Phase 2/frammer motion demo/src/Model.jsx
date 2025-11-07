import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GlassyModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  // Modal animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <div
      className="min-h-screen bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80')]
                 bg-cover bg-center flex items-center justify-center relative"
    >
      {/* Button to open modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-200 shadow-lg"
      >
        Open Modal
      </button>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              variants={overlayVariants}
              onClick={() => setIsModalOpen(false)}
            />

            {/* Glassy Modal */}
            <motion.div
              ref={modalRef}
              className="relative bg-white/30 dark:bg-gray-900/30 backdrop-blur-md rounded-3xl p-8 w-11/12 max-w-3xl shadow-2xl text-center"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Welcome to the Professional Glassy Modal
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                This modal is fully functional: smooth animations, ESC key to close, overlay click, and scroll locked background.
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all duration-200 shadow-lg"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GlassyModal;
