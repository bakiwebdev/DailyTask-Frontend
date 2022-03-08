import React, { useState, useEffect, useContext } from "react";
import { GlobalMessageContext } from "../../provider/Message/index";

const Error = () => {
  const { message, setMessage } = useContext(GlobalMessageContext);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(message.visible);
    setTimeout(() => {
      setMessage({
        visible: false,
      })
    }, 5000);
  }, [setMessage, message.visible]);
  return (
    show && (
      <div
        className={`absolute top-0 mt-4 w-3/4 md:w-full md:max-w-4xl self-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 
      ${message.error && `bg-red-100 border-red-500 text-red-700`} 
      ${message.success && `bg-green-100 border-green-500 text-green-700`}
      ${message.info && `bg-blue-100 border-blue-500 text-blue-700`}`}
      >
        <p className="font-bold">{message.header}</p>
        <p className="text-sm">{message.message}</p>
      </div>
    )
  );
};

export default Error;
