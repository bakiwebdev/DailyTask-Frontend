import React, { useState, createContext } from 'react'

export const GlobalMessageContext = createContext()

const GlobalMessageProvider = ({children}) => {
    const [message, setMessage] = useState({
        visible: false,
        error: null,
        success: null,
        info: null,
        header: null,
        message: null
    })
  return (
    <GlobalMessageContext.Provider value={{ message, setMessage }}>
        {children}
    </GlobalMessageContext.Provider>
  )
}

export default GlobalMessageProvider