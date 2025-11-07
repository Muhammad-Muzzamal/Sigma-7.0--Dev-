import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProfessionalGlassyModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: "", type: "" });

  // Animation variants
  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateX: 15,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateX: 0,
      y: 0,
      transition: { 
        duration: 0.6,
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      rotateX: -10,
      y: -30,
      transition: { 
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.3,
        when: "afterChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
    },
    exit: { 
      opacity: 0, 
      x: -20,
      transition: { duration: 0.3 }
    }
  };

  const showNotification = (message, type = "success") => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: "", type: "" }), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    showNotification("Form submitted successfully!", "success");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "settings", label: "Settings", icon: "⚙️" },
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "contact", label: "Contact", icon: "📧" }
  ];

  const stats = [
    { label: "Projects", value: "24", change: "+12%", trend: "up" },
    { label: "Revenue", value: "$12.8K", change: "+8%", trend: "up" },
    { label: "Users", value: "1.2K", change: "+23%", trend: "up" },
    { label: "Tasks", value: "48", change: "-5%", trend: "down" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Main content */}
      <div className="text-center relative z-10">
        <motion.h1 
          className="text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Professional Modal
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Experience advanced animations and professional UI components
        </motion.p>

        <motion.button
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 hover:scale-105 active:scale-95 group relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            Open Professional Modal
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
        </motion.button>
      </div>

      {/* Professional Modal */}
      <AnimatePresence mode="wait">
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
          >
            {/* Enhanced Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              variants={overlayVariants}
              onClick={() => setIsModalOpen(false)}
            />

            {/* Glassy Modal Container */}
            <motion.div
              className="relative bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
              variants={modalVariants}
            >
              {/* Header */}
              <div className="border-b border-white/10 p-6">
                <div className="flex items-center justify-between">
                  <motion.h2 
                    className="text-2xl font-bold text-white"
                    variants={itemVariants}
                  >
                    Professional Dashboard
                  </motion.h2>
                  <motion.button
                    onClick={() => setIsModalOpen(false)}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 flex items-center justify-center group"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    variants={itemVariants}
                  >
                    <span className="text-white text-lg font-bold group-hover:text-red-400 transition-colors">×</span>
                  </motion.button>
                </div>

                {/* Tabs */}
                <motion.div 
                  className="flex space-x-1 mt-4"
                  variants={itemVariants}
                >
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                        activeTab === tab.id
                          ? "bg-white/20 text-white shadow-lg"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    variants={tabContentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6"
                  >
                    {activeTab === "dashboard" && (
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Overview</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {stats.map((stat, index) => (
                            <motion.div
                              key={stat.label}
                              className="bg-white/5 rounded-2xl p-4 border border-white/10 backdrop-blur-sm"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ scale: 1.02, y: -5 }}
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="text-gray-400 text-sm">{stat.label}</p>
                                  <p className="text-white text-2xl font-bold mt-1">{stat.value}</p>
                                </div>
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                  stat.trend === "up" 
                                    ? "bg-green-500/20 text-green-400" 
                                    : "bg-red-500/20 text-red-400"
                                }`}>
                                  {stat.change}
                                </span>
                              </div>
                              <div className="mt-3 w-full bg-white/10 rounded-full h-1">
                                <motion.div
                                  className={`h-1 rounded-full ${
                                    stat.trend === "up" ? "bg-green-500" : "bg-red-500"
                                  }`}
                                  initial={{ width: 0 }}
                                  animate={{ width: stat.trend === "up" ? "75%" : "45%" }}
                                  transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === "settings" && (
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Settings</h3>
                        <div className="space-y-4">
                          {["Notifications", "Privacy", "Security", "Appearance"].map((setting, index) => (
                            <motion.div
                              key={setting}
                              className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <span className="text-white">{setting}</span>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked={index % 2 === 0} />
                                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                              </label>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === "contact" && (
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Contact Form</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <motion.input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300"
                            required
                            whileFocus={{ scale: 1.02 }}
                          />
                          <motion.input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300"
                            required
                            whileFocus={{ scale: 1.02 }}
                          />
                          <motion.textarea
                            name="message"
                            placeholder="Your Message"
                            rows="4"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300 resize-none"
                            required
                            whileFocus={{ scale: 1.02 }}
                          />
                          <motion.button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            whileHover={{ scale: isLoading ? 1 : 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {isLoading ? (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mx-auto"
                              />
                            ) : (
                              "Send Message"
                            )}
                          </motion.button>
                        </form>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Notification */}
              <AnimatePresence>
                {notification.show && (
                  <motion.div
                    initial={{ opacity: 0, y: 50, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 50, x: "-50%" }}
                    className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-xl backdrop-blur-md border ${
                      notification.type === "success" 
                        ? "bg-green-500/20 border-green-400 text-green-400" 
                        : "bg-red-500/20 border-red-400 text-red-400"
                    }`}
                  >
                    {notification.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfessionalGlassyModal;