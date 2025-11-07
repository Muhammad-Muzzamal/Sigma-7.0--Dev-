import React from "react";
import { Rnd } from "react-rnd";

const Box = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Rnd
        default={{
          x: 400,
          y: 100,
          width: 200,
          height: 200,
        }}
        bounds="window" // restricts movement within window
        minWidth={100}
        minHeight={100}
        className="bg-blue-500 rounded-lg shadow-md flex items-center justify-center text-white"
      >
        <p>Move or Resize Me 😎</p>
      </Rnd>
    </div>
  );
};

export default Box;
