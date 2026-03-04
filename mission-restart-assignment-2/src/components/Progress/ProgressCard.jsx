import React from "react";
import vector1 from "../../assets/vector1.png";

const ProgressCard = () => {
  return (
    <div className="w-11/12 mx-auto my-12 grid grid-cols-2 gap-4">
      <div className="h-40 linearGradient1 flex items-center justify-center flex-col rounded-xl">
        <p className="text-xl text-white">In-Progress</p>
        <h1 className="text-5xl font-bold text-white">0</h1>
      </div>
      <div className="h-40 linearGradient2 flex items-center justify-center flex-col rounded-xl">
        <p className="text-xl text-white">In-Progress</p>
        <h1 className="text-5xl font-bold text-white">0</h1>
      </div>
    </div>
  );
};

export default ProgressCard;
