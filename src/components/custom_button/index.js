import React from "react";

const CustomButton = ({ text }) => {
  return (
    <button className="bg-blue-400 text-white px-8 py-2 rounded-md">
      {text}
    </button>
  );
};

export default CustomButton;
