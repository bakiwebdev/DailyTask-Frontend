import React from "react";
import CustomButton from "../../components/custom_button";
import PageWrapper from "../../components/page_wrapper";

const HomePage = () => {
  return (
    <PageWrapper>
      {/* header */}
      <div className="m-2 border-b-[1px] border-gray-200">
        <h1 className="font-semibold text-xl font-sans m-2 text-gray-700">
          Welcome
        </h1>
        <h3 className="font-light text-lg font-sans m-2 text-gray-600">
          You have 0 task to do
        </h3>
      </div>
      {/* task container */}
      <div className="m-2 border-b-[1px] border-gray-200">
        {/* task item */}
        <div className="flex justify-between items-center p-2 my-1 border-[1px] border-gray-200 max-h-14 h-14 rounded-xl">
          {/* task title container */}
          <div className="p-2 w-2/3 h-full overflow-hidden">
            <h1>Header Title goes here ...</h1>
          </div>
          {/* task action container */}
          <div className="flex space-x-2">
            <CustomButton text="complete" />
            <CustomButton text="Delete" />
          </div>
        </div>
        <div className="flex justify-between items-center p-2 my-1 border-[1px] border-gray-200 max-h-14 h-14 rounded-xl">
          {/* task title container */}
          <div className="p-2 w-2/3 h-full overflow-hidden">
            <h1>Header Title goes here ...</h1>
          </div>
          {/* task action container */}
          <div className="flex space-x-2">
            <CustomButton text="complete" />
            <CustomButton text="Delete" />
          </div>
        </div>
        <div className="flex justify-between items-center p-2 my-1 border-[1px] border-gray-200 max-h-14 h-14 rounded-xl">
          {/* task title container */}
          <div className="p-2 w-2/3 h-full overflow-hidden">
            <h1>Header Title goes here ...</h1>
          </div>
          {/* task action container */}
          <div className="flex space-x-2">
            <CustomButton text="complete" />
            <CustomButton text="Delete" />
          </div>
        </div>
        <div className="flex justify-between items-center p-2 my-1 border-[1px] border-gray-200 max-h-14 h-14 rounded-xl">
          {/* task title container */}
          <div className="p-2 w-2/3 h-full overflow-hidden">
            <h1>Header Title goes here ...</h1>
          </div>
          {/* task action container */}
          <div className="flex space-x-2">
            <CustomButton text="complete" />
            <CustomButton text="Delete" />
          </div>
        </div>
      </div>
      {/* footer */}
      <div>
        <CustomButton text="Add Task" />
        <CustomButton text="Clear all" />
      </div>
    </PageWrapper>
  );
};

export default HomePage;
