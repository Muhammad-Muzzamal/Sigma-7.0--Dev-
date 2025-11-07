import React, { useState, useEffect } from "react";
import { TbLayoutDashboardFilled, TbLogout, TbMenu2, TbSun, TbMoon, TbSearch, TbBell } from "react-icons/tb";
import { LuActivity } from "react-icons/lu";
import { CgProfile, CgClose } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const menuItems = [
    { icon: <TbLayoutDashboardFilled size={24} />, label: "Dashboard" },
    { icon: <LuActivity size={24} />, label: "Activity" },
    { icon: <CgProfile size={24} />, label: "Profile" },
    { icon: <IoMdSettings size={24} />, label: "Settings" },
    { icon: <TbLogout size={24} />, label: "Logout", isLogout: true },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 right-0 h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-50 transition-all duration-300 ${
        isCollapsed ? 'left-20' : 'left-64'
      }`}>
        <div className="flex items-center justify-between h-full px-6">
          {/* Left Section - Sidebar Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105"
            >
              {isCollapsed ? <TbMenu2 size={20} className="text-gray-600 dark:text-gray-300" /> : <CgClose size={20} className="text-gray-600 dark:text-gray-300" />}
            </button>
            
            {/* Breadcrumb */}
            <div className="hidden md:flex items-center gap-2 text-sm">
              <span className="text-gray-500 dark:text-gray-400">Dashboard</span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-800 dark:text-white font-medium">Overview</span>
            </div>
          </div>

          {/* Center Section - Search */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <TbSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects, tasks, or teams..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
              />
            </div>
          </div>

          {/* Right Section - Theme Toggle & Profile */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 group"
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <TbSun size={20} className="text-yellow-500 group-hover:text-yellow-600" />
              ) : (
                <TbMoon size={20} className="text-gray-600 group-hover:text-gray-800" />
              )}
            </button>

            {/* Notifications */}
            <button className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 relative group">
              <div className="w-2 h-2 bg-red-500 rounded-full absolute top-2 right-2 ring-2 ring-white dark:ring-gray-900"></div>
              <TbBell size={20} className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </button>

            {/* Profile */}
            <div className="flex items-center gap-3 pl-3 border-l border-gray-200 dark:border-gray-700">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">John Doe</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Administrator</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:from-blue-600 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-lg">
                <span className="text-white text-sm font-bold">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className={`bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-900 dark:to-gray-950 h-screen py-6 fixed top-0 left-0 flex flex-col border-r border-gray-800 transition-all duration-300 z-40 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}>
        {/* Logo */}
        <div className={`px-4 py-6 border-b border-gray-800 ${isCollapsed ? 'px-2' : ''}`}>
          {isCollapsed ? (
            <div className="flex justify-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Sync Board
              </h1>
              <p className="text-gray-400 text-sm mt-1 font-mono">v2.1.0</p>
            </>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 mt-8">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={item.label}>
                <a
                  href="#"
                  className={`flex items-center transition-all duration-200 group relative overflow-hidden ${
                    item.isLogout 
                      ? `text-red-400 hover:bg-red-400/10 hover:text-red-300 mt-8 border-t border-gray-800 pt-4 ${
                          isCollapsed ? 'justify-center py-4' : 'px-4 py-3'
                        }`
                      : `text-gray-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:text-white hover:shadow-lg hover:shadow-blue-500/10 ${
                          isCollapsed ? 'justify-center py-3 mx-2 rounded-xl' : 'px-4 py-3 rounded-xl'
                        }`
                  } ${
                    index === 0 ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white shadow-lg shadow-blue-500/10 border-l-2 border-blue-400" : ""
                  }`}
                  title={isCollapsed ? item.label : ''}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                  
                  <span className={`relative z-10 ${item.isLogout ? "text-red-400" : "group-hover:scale-110 transition-transform duration-200"} ${
                    isCollapsed ? '' : 'mr-3'
                  }`}>
                    {item.icon}
                  </span>
                  
                  {!isCollapsed && (
                    <>
                      <span className="font-medium relative z-10 flex-1">{item.label}</span>
                      {index === 0 && (
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full ml-auto relative z-10 animate-pulse"></span>
                      )}
                    </>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile in Sidebar */}
        {!isCollapsed && (
          <div className="border-t border-gray-800 pt-4 mt-auto">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-200 shadow-lg">
                <span className="text-white text-sm font-bold">JD</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm truncate">John Doe</p>
                <p className="text-gray-400 text-xs truncate font-mono">admin@syncboard.com</p>
              </div>
            </div>
          </div>
        )}

        {/* Mini Profile for Collapsed State */}
        {isCollapsed && (
          <div className="border-t border-gray-800 pt-4 mt-auto">
            <div className="flex justify-center py-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg">
                <span className="text-white text-sm font-bold">JD</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <main className={`pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-all duration-300 ${
        isCollapsed ? 'ml-20' : 'ml-64'
      }`}>
        <div className="p-6">
          {/* Geeky Dashboard Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* Stats Cards */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Projects</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">12</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <TbLayoutDashboardFilled size={24} className="text-blue-500" />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Tasks</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">47</p>
                </div>
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                  <LuActivity size={24} className="text-green-500" />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Team</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">8</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                  <CgProfile size={24} className="text-purple-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  Filter
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-xl text-sm font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/25">
                  New Project
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-500/5 dark:to-purple-500/5 rounded-xl p-8 text-center border border-blue-200 dark:border-blue-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TbLayoutDashboardFilled size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Welcome to Sync Board</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                Your ultimate project management dashboard. Start by creating your first project or exploring the features.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SideBar;