import React from 'react'

const CustomIcon = ({icon, onClick, bg}) => {
  return (
    <button className={`flex justify-center items-center w-8 h-8 p-2 rounded-full bg-${bg} hover:bg-blue-50 transition-colors`} onClick={onClick}>
        {icon} 
    </button>
  )
}

export default CustomIcon