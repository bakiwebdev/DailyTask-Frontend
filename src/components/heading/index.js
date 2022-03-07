import React from "react";

const Heading = ({ children, primary, secondary, size }) => {
  const getStyle = () => {
    if (primary) {
      return `font-semibold ${
        size ? `text-${size}` : `text-xl`
      }  font-sans text-gray-700`;
    } else if (secondary) {
      return `font-light ${
        size ? `text-${size}` : `text-lg`
      } font-sans text-gray-600`;
    }
  };
  return <div className={getStyle()}>{children}</div>;
};

export default Heading;
