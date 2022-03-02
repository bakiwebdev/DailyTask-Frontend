import React from 'react'

const Text = ({children, primary, secondary,size, hight,}) => {
    const getStyle = () => {
        if (primary) {
            return `leading-${hight ? hight : '7'} text-${size ? size : 'sm'} text-gray-700`;
        } else if (secondary) {
            return `leading-${hight ? hight : '7'} text-${size ? size : 'sm'} text-gray-600`;
        }
    };
  return (
    <p className={getStyle()}>{children}</p>
  )
}

export default Text