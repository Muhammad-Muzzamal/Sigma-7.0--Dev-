import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Box from "./Box";
import Window from "./Window";
import Prototype from "./Prototype";
import Side from "./components/Side";
import Model from "./Model";
import Clock from "./Clock";
import Mobile from "./Mobile";

const App = () => {
  return (
    <div>
      <Model />
      <Clock />
      <Mobile />
    </div>

    // <Router>
    //   {/* Navbar */}
    //   <nav className="bg-gray-900 text-white flex justify-center gap-8 py-4 shadow-md">
    //     <Link
    //       to="/"
    //       className="hover:text-blue-400 transition-colors duration-200"
    //     >
    //       Home
    //     </Link>
    //     <Link
    //       to="/about"
    //       className="hover:text-blue-400 transition-colors duration-200"
    //     >
    //       About Us
    //     </Link>
    //     <Link
    //       to="/contact"
    //       className="hover:text-blue-400 transition-colors duration-200"
    //     >
    //       Contact
    //     </Link>
    //     <Link
    //       to="/box"
    //       className="hover:text-blue-400 transition-colors duration-200"
    //     >
    //       Box
    //     </Link>
    //     <Link
    //       to="/window"
    //       className="hover:text-blue-400 transition-colors duration-200"
    //     >
    //       Window
    //     </Link>
    //     <Link
    //       to="/proto"
    //       className="hover:text-blue-400 transition-colors duration-200"
    //     >
    //       Web Prototype
    //     </Link>
    //   </nav>

    //   {/* Routes */}
    //   <main className="min-h-screen bg-gray-100 p-10">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<AboutUs />} />
    //       <Route path="/contact" element={<ContactUs />} />
    //       <Route path="/box" element={<Box />} />
    //       <Route path="/window" element={<Window />} />
    //       <Route path="/proto" element={<Prototype />} />
    //     </Routes>
    //   </main>
    // </Router>
  );
};

export default App;
