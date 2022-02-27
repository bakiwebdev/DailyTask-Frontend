import React from "react";
import "./style.css";
const ToggleSwitch = () => {
  return (
    <label for="toggleB" class="flex items-center cursor-pointer">
      <div class="relative">
        <input type="checkbox" id="toggleB" class="sr-only" />
        <div class="block bg-gray-600 w-10 h-6 rounded-full"></div>
        <div class="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
      </div>
    </label>
  );
};

export default ToggleSwitch;
