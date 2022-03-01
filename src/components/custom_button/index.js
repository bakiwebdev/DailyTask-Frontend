import React from "react";

const CustomButton = ({ text, color, rounded, error, success, onClick }) => {
  return (
    <button className={`px-8 py-2 ${error ? 'bg-red-500' : (success ? 'bg-green-500' :'bg-blue-500')} 
    ${color ? color : 'text-white'} px-8 py-2 
    ${rounded ? 'rounded-full' : 'rounded-md'}
    `}
    onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
