import React from "react";

const Card = ({title, description="Null Description", data}) => {
    console.log(data);
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      <div className="max-w-sm border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 bg-white hover:-translate-y-1 cursor-pointer">
        <div className="w-full h-48 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357"
            alt="Mountain landscape"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
           {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
           {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
