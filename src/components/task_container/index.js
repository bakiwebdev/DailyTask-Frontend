import React from 'react'

const TaskContainer = ({children}) => {
  return (
    <div className='max-h-96 overflow-y-scroll no-scrollbar'>{children}</div>
  )
}

export default TaskContainer