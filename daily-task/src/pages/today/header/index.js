import React from "react";
import { MdNotifications, MdOutlineSettings } from "react-icons/md";

const TodayHeader = () => {
  return (
    <div className="h-44 bg-white flex flex-row justify-between border-[1px] border-gray-400">
      {/* header intro */}
      <div className="p-4 px-8">
        <h1 className="text-3xl text-gray-600 font-light">
          Good Morning, Biruk!
        </h1>
        <p className="text-gray-400 mt-3">Here is todays briefing</p>
        <p className="text-gray-600 my-2">
          You have{" "}
          <span className="px-3 py-1 text-gray-500 bg-gray-200 rounded-full">
            0 tasks
          </span>{" "}
          scheduled for{" "}
          <span className="text-gray-800 font-semibold">Today</span>
        </p>
        <p className="text-gray-600 my-2">
          There have been since
          <span className="px-3 py-1 font-semibold text-blue-600 bg-blue-100 rounded-full">
            4 new activity
          </span>{" "}
          scheduled for{" "}
          <span className="text-gray-800 font-semibold">Yesterday</span>
        </p>
      </div>
      {/* profile and notification container */}
      <div className="p-4">
        <div className="flex flex-row-reverse items-center gap-x-3">
          {/* profile picture */}
          <div className="w-9 h-9 rounded-full overflow-hidden">
            <img
              src="https://avatars.githubusercontent.com/u/57604289?v=4"
              alt="user profile"
            />
          </div>
          {/* notification icon */}
          <div className="w-8 h-8 flex justify-center items-center rounded-full overflow-hidden bg-gray-100">
            <MdNotifications size={24} className="text-gray-800 text-3xl" />
          </div>
          {/* setting button */}
          <div className="w-8 h-8 flex justify-center items-center rounded-full overflow-hidden">
            <MdOutlineSettings size={24} className="text-gray-800 text-3xl" />
          </div>
          {/* invite people */}
          <div className="flex justify-center items-center">
            <p className="font-normal text-gray-800">invite people + </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayHeader;
