import React from "react";

const CustomTextArea = ({name, placeholder}) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className="w-full max-h-60 h-36 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
  );
};

export default CustomTextArea;
