import React from "react";

const Card = ({ title, price, features }) => {
  return (
    <div className="border  py-10 px-4 mt-3.5 mr-4 rounded-xl w-40 text-center hover:shadow-gray-500 hover:shadow-md active:bg-gray-200 ">
      <h1 className="pb-4 font-bold text-xl">{title}</h1>
      <h3 className="text-blue-800">Price : {price}</h3>

      <p>
        <ul>
          {features.map(function (f) {
            return <li className="hover:underline text-center">{f}</li>;
          })}
        </ul>
      </p>
      {price > 3000 ? <p className="text-red-800">Discount : 5%</p> : null}
    </div>
  );
};

export default Card;
