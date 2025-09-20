import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import Card from "./Components/Card";

function App() {
  let data = {
    muzzamal: {
      name: "Muzzamal",
      roll_no: 110837,
    },
    imran: {
      name: "Imran Ali",
      roll_no: 110855,
    },
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="bg-red-500">Hello World</h1>
        <Card
          title="Muzzamal"
          description="Hello I am description"
          data={data}
        />
        <Card title="Muzzamal" />
      </div>
    </>
  );
}

export default App;
