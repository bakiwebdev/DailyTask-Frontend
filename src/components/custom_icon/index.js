import React from 'react'

const CustomIcon = ({icon, onClick, bg, tooltip}) => {
  return (
    <button className={`has-tooltip flex justify-center items-center w-8 h-8 p-2 rounded-full bg-${bg} hover:bg-blue-50 transition-colors`} onClick={onClick}>
      {tooltip && <span className="tooltip p-1 rounded -mt-12 bg-gray-800 text-gray-50">{tooltip}</span>}
        {icon} 
    </button>
  )
}

export default CustomIcon