import React from 'react'

const PageWrapper = ({children}) => {
  return (
    <div className='mx-auto my-10 max-w-4xl max-h-[30rem]  border-x-[1px] border-gray-200'>
        {children}
    </div>
  )
}

export default PageWrapper