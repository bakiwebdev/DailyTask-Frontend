import React from "react";
import PageWrapper from "../../components/page_wrapper";

const AddTaskPage = () => {
  return (
    <PageWrapper>
      <div className="flex justify-center items-center">
        <div  className="w-100 h-auto">
          <h1 className="text-4xl mb-3 font-bold">Add new task</h1>

          <div className="relative mb-4">
            <label
              htmlFor="task_title"
              className="leading-7 text-sm text-gray-600"
            >
              Title
            </label>
            <input
              type="text"
              id="task_title"
              name="task_title"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="task_description" className="leading-7 text-sm text-gray-600">
              Description
            </label>
            <textarea 
              name="task_description"
              id="task_description"
              className="w-full max-h-60 h-36 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
          </div>
          <div className="flex justify-between items-center">
            <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
              ADD
            </button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AddTaskPage;
