import React from "react";
import { IoCreateOutline, IoTrashOutline } from "react-icons/io5";
import CustomButton from "../custom_button";
import CustomIcon from "../custom_icon";
import Heading from "../heading";
import Text from "../text";

const Task = ({ onClick }) => {
  return (
    <div className="flex justify-between items-center p-2 my-1 border-[1px] border-gray-200 max-h-14 h-14 rounded-xl hover:border-blue-500 transition-colors duration-500 hover:bg-blue-50 ">
      {/* task title container */}
      <div onClick={onClick} className="p-2 w-2/3 h-full overflow-hidden ">
        <Heading primary={true} size="lg">
          Task title goes here ...
        </Heading>
      </div>
      {/* task action container */}
      <div className="flex justify-center items-center space-x-2">
        <div>
          <Text secondary={true} size="sm">
            1 Jan <br /> 2020
          </Text>
        </div>
        <CustomButton text="complete" success />
        <CustomIcon
          icon={<IoCreateOutline className="w-8 h-8" />}
          tooltip={"Edit"}
        />
        <CustomIcon
          icon={<IoTrashOutline className="w-8 h-8 text-black" />}
          bg="red-500"
          tooltip={"Delete"}
        />
      </div>
    </div>
  );
};

export default Task;
