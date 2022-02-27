import React from "react";
import "./style.css";
const ToggleSwitch = () => {
  return (
    <label htmlFor="toggleB" className="flex items-center cursor-pointer">
      <div className="relative">
        <input type="checkbox" id="toggleB" className="sr-only" />
        <div className="block bg-gray-600 w-10 h-6 rounded-full"></div>
        <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
      </div>
    </label>
  );
};

export default ToggleSwitch;
