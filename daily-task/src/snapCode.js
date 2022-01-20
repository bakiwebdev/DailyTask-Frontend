import {
    MdApps,
    MdHome,
    MdAccessibilityNew,
    MdAccountBox,
    MdSearch,
    MdMessage,
    MdPeopleAlt,
    MdSettings,
    MdNotificationsActive,
  } from "react-icons/md";


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


  const baseStyle = {
      // wrapper
    <div className="w-screen h-screen flex overflow-hidden">
    {/* primary navbar */}
    <div className="bg-gray-900 h-full w-20 p-5 flex flex-col items-center gap-4">
      {/* nav buttons */}
      {/* menu button */}
      <div className="h-10 w-10  hover:bg-blue-600 flex justify-center items-center rounded">
        {<MdApps className="text-white text-3xl" />}
      </div>
      {/* home button */}
      <div className="h-9 w-9 bg-gray-800 hover:bg-blue-600 flex justify-center items-center rounded">
        {<MdHome size={24} className="text-white text-3xl" />}
      </div>
      {/* Accessibility */}
      <div className="h-9 w-9 bg-gray-800 hover:bg-blue-600 flex justify-center items-center rounded">
        {<MdAccessibilityNew size={24} className="text-white text-3xl" />}
      </div>
      {/* Account */}
      <div className="h-9 w-9 bg-gray-800 hover:bg-blue-600 flex justify-center items-center rounded">
        {<MdAccountBox size={24} className="text-white text-3xl" />}
      </div>
      {/* message */}
      <div className="h-9 w-9 bg-gray-800 hover:bg-blue-600 flex justify-center items-center rounded">
        {<MdMessage size={24} className="text-white text-3xl" />}
      </div>
      <div className="h-9 w-9 bg-gray-800 hover:bg-blue-600 flex justify-center items-center rounded">
        {<MdPeopleAlt size={24} className="text-white text-3xl" />}
      </div>
      <div className="h-9 w-9 bg-gray-800 hover:bg-blue-600 flex justify-center items-center rounded">
        {<MdNotificationsActive size={24} className="text-white text-3xl" />}
      </div>
      <div className="h-9 w-9 bg-gray-800 hover:bg-blue-600 flex justify-center items-center rounded">
        {<MdSettings size={24} className="text-white text-3xl" />}
      </div>
    </div>
    {/* task mainBody */}
    <div className="bg-gray-50 h-full flex-auto flex flex-col">
      {/* task header */}
      <div className="border-b-[1px] border-gray-300 h-28 p-3 flex flex-col gap-4">
        {/* user profile */}
        <div className="items-center space-x-4 flex justify-end mr-2">
          {/* search button */}
          <div className="w-7 h-7 rounded-full flex justify-center items-center">
            {<MdSearch size={24} className="text-gray-500 text-3xl" />}
          </div>
          {/* user profile */}
          <div className="w-9 h-9 rounded-full overflow-hidden">
            <img
              src="https://avatars.githubusercontent.com/u/57604289?v=4"
              alt="user profile"
            />
          </div>
        </div>
        {/* task header */}
        <div className="flex justify-between items-center">
          <h1 className="text-gray-600 text-2xl">My Tasks</h1>
          {/* task link */}
          <a
            className="text-blue-500 font-medium px-4 py-1 border-[1px] border-gray-400 rounded-full mr-2"
            href="#"
          >
            New Task
          </a>
        </div>
      </div>

      {/* task body */}
      <div className="flex flex-row h-full">
        {/* task wrapper */}
        <div className="w-full max-h-full overflow-y-scroll pt-2 pb-36">
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
        {/* task list description */}
        <div className="bg-gray-50 w-76 border-l-[1px] border-gray-300 p-3 space-y-7">
          {/* title and created date */}
          <div className="">
            <h1 className="text-gray-600 text-lg flex-auto">
              Do some exercise with database osdjfaldhf ahdsfoahidsf{" "}
            </h1>
            <h1 className="text-gray-400 text-sm flex-auto">
              task created : Today
            </h1>
          </div>
          {/* description */}
          <div className="space-y-4 border-b-[1px] border-gray-400 pb-5">
            <p className="text-gray-800 text-lg pr-3 pb-2 border-b-2 border-blue-500 w-min">
              Description
            </p>

            <p className="text-gray-600 text-sm pr-3 pb-2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris{" "}
              <br /> <br />
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </p>
            
            {/* task type */}
            <div>
              <h1 className="text-gray-800 text-lg pr-3">Type</h1>
              <p className="text-gray-600 text-sm">important</p>
            </div>
            {/* task status */}
            <div>
              <h1 className="text-gray-800 text-lg pr-3">Status</h1>
              <p className="text-gray-600 text-sm">Not Started</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  }