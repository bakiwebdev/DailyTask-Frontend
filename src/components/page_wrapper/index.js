import React from "react";
import Error from "../error/index";
const PageWrapper = ({ children }) => {
  return (
    <div className="mx-auto my-10 max-w-4xl max-h-[30rem]  border-x-[1px] border-gray-200">
      <Error />
      {children}
    </div>
  );
};

export default PageWrapper;
