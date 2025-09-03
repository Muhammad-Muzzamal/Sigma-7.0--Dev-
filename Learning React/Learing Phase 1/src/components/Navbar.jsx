import React from "react";

const Navbar = () => {
  let name = "Muzzamal";
  return (
    <div className="bg-red-400  flex justify-center items-center text-4xl font-[Poppins] h-17 ">
      <span className=" hover:text-gray-800 ">{name}</span>
    </div>
  );
};

export default Navbar;
