import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import CustomButton from "../custom_button";
import ToggleSwitch from "../toggleswitch";

const PageHeader = () => {
  const navigate = useNavigate();
  // button handler
  const handleButtonClick = () => {
    navigate("/login");
  }
  return (
    <nav className="h-16 flex items-center justify-between px-6">
      {/* left */}
      <Link to="/">
        <div className="font-light text-2xl flex justify-center items-center">
          <img
            src={logo}
            alt="logo"
            className="h-14 w-14 p-2 object-cover rounded-xl"
          />
          <h1 className="font-semibold font-sans">Daily Task</h1>
        </div>
      </Link>
      {/* right  */}
      <div className="flex justify-center items-center space-x-3 mr-3">
        <ToggleSwitch />
        <CustomButton text="login" onClick={handleButtonClick} />
      </div>
    </nav>
  );
};

export default PageHeader;
