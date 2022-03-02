import React from "react";

const CustomInput = ({type, name, value, placeholder, onValueChange}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onValueChange}
      className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
