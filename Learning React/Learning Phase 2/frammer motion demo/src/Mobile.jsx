import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { 
  TbArrowLeft, 
  TbMessage, 
  TbPhone,
  TbCamera,
  TbSettings,
  TbMusic,
  TbMail,
  TbPhoto,
  TbLock,
  TbBattery,
  TbWifi,
  TbSignal,
  TbX,
  TbChevronUp
} from "react-icons/tb";

const IphoneReplica = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isLocked, setIsLocked] = useState(true);
  const [batteryLevel, setBatteryLevel] = useState(87);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [notifications, setNotifications] = useState([
    { id: 1, app: "Messages", title: "New Message", content: "Hey there! How are you?", time: "9:41 AM", unread: true },
    { id: 2, app: "Mail", title: "Meeting Reminder", content: "Team meeting at 2:00 PM", time: "9:30 AM", unread: true },
    { id: 3, app: "Calendar", title: "Birthday", content: "Sarah's birthday today", time: "8:15 AM", unread: false }
  ]);
  const [isAppOpen, setIsAppOpen] = useState(false);
  const [currentApp, setCurrentApp] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const dragX = useMotionValue(0);
  const rotateY = useTransform(dragX, [-200, 200], [15, -15]);
  const scale = useTransform(dragX, [-200, 0, 200], [0.95, 1, 0.95]);

  const screens = [
    {
      id: 1,
      title: "Lock Screen",
      type: "lock",
      content: "",
      bg: "bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
    },
    {
      id: 2,
      title: "Home",
      type: "home",
      content: "",
      bg: "bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900"
    },
    {
      id: 3,
      title: "Notifications",
      type: "notifications",
      content: "",
      bg: "bg-gradient-to-br from-gray-900 to-slate-800"
    },
    {
      id: 4,
      title: "Control Center",
      type: "control",
      content: "",
      bg: "bg-gradient-to-br from-slate-800 to-gray-900"
    }
  ];

  const apps = [
    { id: 1, name: "Messages", icon: <TbMessage size={28} />, color: "from-green-500 to-emerald-600", bgColor: "bg-gradient-to-br from-green-500 to-emerald-600" },
    { id: 2, name: "Phone", icon: <TbPhone size={28} />, color: "from-green-400 to-teal-500", bgColor: "bg-gradient-to-br from-green-400 to-teal-500" },
    { id: 3, name: "Camera", icon: <TbCamera size={28} />, color: "from-gray-600 to-gray-700", bgColor: "bg-gradient-to-br from-gray-600 to-gray-700" },
    { id: 4, name: "Photos", icon: <TbPhoto size={28} />, color: "from-purple-500 to-pink-600", bgColor: "bg-gradient-to-br from-purple-500 to-pink-600" },
    { id: 5, name: "Music", icon: <TbMusic size={28} />, color: "from-pink-500 to-rose-600", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
    { id: 6, name: "Mail", icon: <TbMail size={28} />, color: "from-blue-500 to-cyan-600", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
    { id: 7, name: "Settings", icon: <TbSettings size={28} />, color: "from-gray-500 to-gray-600", bgColor: "bg-gradient-to-br from-gray-500 to-gray-600" },
  ];

  const controlItems = [
    { icon: <TbWifi size={20} />, label: "Wi-Fi", active: true },
    { icon: <TbSignal size={20} />, label: "Cellular", active: true },
    { icon: <TbMusic size={20} />, label: "Audio", active: false },
    { icon: <TbBattery size={20} />, label: "Battery", active: true },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const nextScreen = () => {
    if (!isLocked || currentScreen !== 0) {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }
  };

  const prevScreen = () => {
    if (!isLocked || currentScreen !== 0) {
      setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
    }
  };

  const unlockPhone = () => {
    if (isLocked) {
      setIsLocked(false);
      setTimeout(() => setCurrentScreen(1), 500);
    }
  };

  const openApp = (app) => {
    if (!isLocked) {
      setCurrentApp(app);
      setIsAppOpen(true);
    }
  };

  const closeApp = () => {
    setIsAppOpen(false);
    setTimeout(() => setCurrentApp(null), 300);
  };

  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    if (Math.abs(info.offset.x) > 50) {
      if (info.offset.x > 50) {
        prevScreen();
      } else if (info.offset.x < -50) {
        nextScreen();
      }
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  };

  const LockScreen = () => (
    <motion.div 
      className="w-full h-full flex flex-col items-center justify-between py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Time & Date */}
      <div className="text-center">
        <motion.h1 
          className="text-6xl font-thin text-white mb-2"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {formatTime(currentTime)}
        </motion.h1>
        <motion.p 
          className="text-xl text-white/80 font-medium"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {formatDate(currentTime)}
        </motion.p>
      </div>

      {/* Notifications Preview */}
      <div className="w-full px-6 space-y-3">
        {notifications.slice(0, 2).map((notification, index) => (
          <motion.div
            key={notification.id}
            className="bg-black/30 backdrop-blur-md rounded-2xl p-4 border border-white/10"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold">{notification.app}</span>
              <span className="text-white/60 text-sm">{notification.time}</span>
            </div>
            <p className="text-white/80 text-sm mt-1">{notification.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Unlock Section */}
      <motion.div
        className="w-full px-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          onClick={unlockPhone}
          className="w-full py-4 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <TbChevronUp className="text-white" size={20} />
          <span className="text-white text-sm font-medium">Swipe to unlock</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );

  const HomeScreen = () => (
    <div className="w-full h-full p-6">
      {/* App Grid */}
      <div className="grid grid-cols-4 gap-4">
        {apps.map((app, index) => (
          <motion.button
            key={app.id}
            onClick={() => openApp(app)}
            className="flex flex-col items-center space-y-2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: index * 0.05
            }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className={`w-16 h-16 ${app.bgColor} rounded-2xl flex items-center justify-center shadow-lg`}>
              <div className="text-white">
                {app.icon}
              </div>
            </div>
            <span className="text-white text-xs font-medium">{app.name}</span>
          </motion.button>
        ))}
      </div>

      {/* Dock */}
      <motion.div 
        className="absolute bottom-20 left-6 right-6 bg-white/10 backdrop-blur-2xl rounded-3xl p-4 border border-white/20"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <div className="flex justify-around">
          {apps.slice(0, 4).map((app, index) => (
            <motion.button
              key={app.id}
              onClick={() => openApp(app)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center"
            >
              <div className={`w-12 h-12 ${app.bgColor} rounded-2xl flex items-center justify-center`}>
                {app.icon}
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );

  const NotificationsScreen = () => (
    <div className="w-full h-full p-4">
      <motion.h3 
        className="text-2xl font-bold text-white mb-6"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        Notifications
      </motion.h3>
      
      <div className="space-y-3">
        {notifications.map((notification, index) => (
          <motion.div
            key={notification.id}
            className={`bg-white/10 backdrop-blur-md rounded-2xl p-4 border ${
              notification.unread ? 'border-blue-400/50' : 'border-white/10'
            }`}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white font-semibold">{notification.app}</span>
                  {notification.unread && (
                    <motion.span 
                      className="w-2 h-2 bg-blue-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>
                <p className="text-white/90 font-medium text-sm">{notification.title}</p>
                <p className="text-white/60 text-xs mt-1">{notification.content}</p>
              </div>
              <span className="text-white/40 text-xs">{notification.time}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const ControlCenterScreen = () => (
    <div className="w-full h-full p-6">
      <div className="grid grid-cols-2 gap-4 mb-6">
        {controlItems.map((item, index) => (
          <motion.button
            key={item.label}
            className={`p-4 rounded-2xl backdrop-blur-md border ${
              item.active 
                ? 'bg-blue-500/20 border-blue-400/50' 
                : 'bg-white/10 border-white/10'
            }`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-white flex flex-col items-center space-y-2">
              {item.icon}
              <span className="text-xs font-medium">{item.label}</span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Brightness Slider */}
      <motion.div 
        className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-white text-sm font-medium">Brightness</span>
          <span className="text-white/60 text-sm">75%</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <motion.div 
            className="h-2 bg-white rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "75%" }}
            transition={{ delay: 0.6, duration: 1 }}
          />
        </div>
      </motion.div>
    </div>
  );

  const renderScreenContent = () => {
    const screen = screens[currentScreen];
    
    switch(screen.type) {
      case "lock":
        return <LockScreen />;
      case "home":
        return <HomeScreen />;
      case "notifications":
        return <NotificationsScreen />;
      case "control":
        return <ControlCenterScreen />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 p-4">
      {/* iPhone Frame */}
      <motion.div 
        className="relative w-80 h-[700px] rounded-[60px] shadow-2xl overflow-hidden bg-black border-[14px] border-black"
        style={{ rotateY, scale }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        dragElastic={0.1}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        dragListener={!isLocked || currentScreen !== 0}
      >
        {/* Dynamic Screen Background */}
        <motion.div 
          className={`absolute inset-0 ${screens[currentScreen].bg}`}
          key={currentScreen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-12 px-8 flex items-center justify-between text-white z-20">
          <motion.span 
            className="text-sm font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {formatTime(currentTime)}
          </motion.span>
          <div className="flex items-center gap-2">
            <TbSignal size={14} />
            <TbWifi size={14} />
            <div className="flex items-center gap-1">
              <TbBattery size={16} />
              <span className="text-xs">{batteryLevel}%</span>
            </div>
          </div>
        </div>

        {/* Dynamic Screen Content */}
        <div className="absolute top-12 bottom-16 left-0 right-0 overflow-hidden">
          {renderScreenContent()}
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="w-32 h-1 bg-white/50 rounded-full" />
        </div>

        {/* App Modal */}
        <AnimatePresence>
          {isAppOpen && currentApp && (
            <motion.div
              className="absolute inset-0 z-30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className={`w-full h-full ${currentApp.bgColor} rounded-[46px] relative overflow-hidden`}>
                {/* App Header */}
                <div className="h-12 flex items-center justify-between px-6 text-white">
                  <motion.button 
                    onClick={closeApp}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <TbArrowLeft size={20} />
                  </motion.button>
                  <span className="font-semibold">{currentApp.name}</span>
                  <motion.button 
                    onClick={closeApp}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <TbX size={20} />
                  </motion.button>
                </div>

                {/* App Content */}
                <div className="flex-1 p-6 flex items-center justify-center">
                  <motion.div
                    className="text-white text-center"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.div
                      className="text-6xl mb-4"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {currentApp.icon}
                    </motion.div>
                    <h2 className="text-2xl font-bold mb-2">{currentApp.name}</h2>
                    <p className="text-white/70">Welcome to {currentApp.name}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Navigation Instructions */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <p className="text-sm">
          {isLocked ? "Click unlock button or swipe up" : "Drag horizontally to switch screens • Click apps to open"}
        </p>
      </motion.div>
    </div>
  );
};

export default IphoneReplica;