import "./App.css";

function App() {
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

  return (
    // wrapper
    <div className="w-screen h-screen flex justify-center items-center bg-blue-200 px-16 py-8 ">
      {/* main application */}
      <div className="w-full h-full rounded-2xl flex overflow-hidden">
        {/* primary navbar */}
        <div className="bg-gray-800 w-20"> primary navbar</div>
        {/* task mainBody */}
        <div className="bg-gray-50  flex-auto flex flex-col">
          {/* task header */}
          <div className="border-b-[1px] border-gray-300 h-28 p-3 flex flex-col justify-between">
            {/* user profile */}
            <div className="items-center space-x-4 flex justify-end mr-2">
              {/* search button */}
              <div className="w-7 h-7 rounded-full bg-gray-500">S</div>
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
          <div className="bg-gray-50 flex-auto flex flex-row">
            {/* task list container */}
            <div className="bg-gray-50 flex-auto">
              {/* lists */}
              {task()}
              {task()}
              {task()}
              {task()}
              {task()}
              {task()}
            </div>
            {/* task list description */}
            <div className="bg-gray-50 w-76 border-l-[1px] border-gray-300 p-3">
              list description
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
