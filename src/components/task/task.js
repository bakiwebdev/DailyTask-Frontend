import React from 'react'
import { IoCreateOutline, IoTrashOutline } from 'react-icons/io5'
import CustomButton from '../custom_button'
import CustomIcon from '../custom_icon'

const Task = () => {
  return (
    <div className="flex justify-between items-center p-2 my-1 border-[1px] border-gray-200 max-h-14 h-14 rounded-xl">
          {/* task title container */}
          <div className="p-2 w-2/3 h-full overflow-hidden ">
            <h1>Header Title goes here ...</h1>
          </div>
          {/* task action container */}
          <div className="flex justify-center items-center space-x-2">
            <div>
              <p className='text-gray-400 text-sm m-1'>Jan 31 <br /> 2021</p>
            </div>
            <CustomButton  text='complete' success />
            <CustomIcon icon={<IoCreateOutline className='w-8 h-8' />} bg=''/>
            <CustomIcon icon={<IoTrashOutline className='w-8 h-8 text-white' />} bg='red-500'/>
          </div>
        </div>
  )
}

export default Task