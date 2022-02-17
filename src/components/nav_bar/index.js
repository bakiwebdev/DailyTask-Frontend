import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  MdApps,
  MdHome,
  MdToday,
  MdAccountBox,
  MdMessage,
  MdPeopleAlt,
  MdSettings,
  MdNotificationsActive,
} from "react-icons/md";

const NavBar = () => {
  return (
    <div className="h-screen w-screen flex">
      <div className="bg-gray-900 h-full w-20 p-5 flex flex-col items-center gap-4">
        {/* nav buttons */}
        {/* menu button */}
        <div className="h-10 w-10  hover:bg-blue-600 flex justify-center items-center rounded">
          {<MdApps className="text-white text-3xl" />}
        </div>
        {/* home button */}
        <Link to="/">
          <div className="h-9 w-9 bg-gray-800 hover:bg-blue-600 flex justify-center items-center rounded">
            {<MdHome size={24} className="text-white text-3xl" />}
          </div>
        </Link>
        {/* Today */}
        <Link to="/today">
          <div className="h-9 w-9 bg-gray-800 hover:bg-blue-600 flex justify-center items-center rounded">
            {<MdToday size={24} className="text-white text-3xl" />}
          </div>
        </Link>

        {/* message */}
        <Link to="/message">
          <div className="h-9 w-9 bg-gray-800 hover:bg-blue-600 flex justify-center items-center rounded">
            {<MdMessage size={24} className="text-white text-3xl" />}
          </div>
        </Link>
        {/* Notification */}
        <Link to="/notification">
          <div className="h-9 w-9 bg-gray-800 hover:bg-blue-600 flex justify-center items-center rounded">
            {
              <MdNotificationsActive
                size={24}
                className="text-white text-3xl"
              />
            }
          </div>
        </Link>
        {/* Team */}
        <Link to="/team">
          <div className="h-9 w-9 bg-gray-800 hover:bg-blue-600 flex justify-center items-center rounded">
            {<MdPeopleAlt size={24} className="text-white text-3xl" />}
          </div>
        </Link>
        {/* Account */}
        <Link to="/account">
          <div className="h-9 w-9 bg-gray-800 hover:bg-blue-600 flex justify-center items-center rounded">
            {<MdAccountBox size={24} className="text-white text-3xl" />}
          </div>
        </Link>
        {/* Settings */}
        <Link to="/setting">
          <div className="h-9 w-9 bg-gray-800 hover:bg-blue-600 flex justify-center items-center rounded">
            {<MdSettings size={24} className="text-white text-3xl" />}
          </div>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
