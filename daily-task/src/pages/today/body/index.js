import React from "react";

const task = () => {
  return (
    <div className="flex items-center justify-between px-5 py-2 border-b-[1px] border-gray-300 hover:bg-blue-50">
      {/* check box */}
      <div className="flex items-center justify-center w-8 h-8 border-r-[1px]">
        <input
          class="text-blue-500 w-5 h-5 mr-2 focus:ring-blue-400 focus:ring-opacity-25 border border-gray-300 rounded-full"
          type="checkbox"
        />
      </div>
      {/* list header */}
      <div className="flex-auto px-4 ">
        <h1 className="text-gray-700 text-xl">task title</h1>
        <h3 className="text-gray-400 text-sm">task status</h3>
      </div>
      {/* added date */}
      <div className=" text-gray-500 text-base">Today</div>
    </div>
  );
};

const TodoBody = () => {
  return (
    <div className="flex flex-row h-full justify-between">
      {/* Task Body */}
      <div className="w-full max-h-full overflow-y-scroll pt-2 pb-48 no-scrollbar">
        {/* lists */}
        {task()}
        {task()}
        {task()}
        {task()}
        {task()}
        {task()}
        {task()}
        {task()}
        {task()}
        {task()}
        {task()}
        {task()}
        {task()}
      </div>
      <div className="w-100">task description</div>
    </div>
  );
};

export default TodoBody;
