import React from "react";
import { IoCreateOutline, IoTrashOutline } from "react-icons/io5";
import CustomButton from "../custom_button";
import CustomIcon from "../custom_icon";
import Heading from "../heading";
import Loading from "../loading";
import Text from "../text";

const Task = ({ data, detailClick, completeClick, editClick, deleteClick, loading }) => {
  return (
    <div
      className={`relative flex flex-col md:flex-row md:justify-between md:items-center p-2 my-1 border-[1px] ${
        data.isCompleted && `bg-gray-200`
      } border-gray-200 md:max-h-14 max-h-24 h-24 md:h-14 rounded-xl hover:border-blue-500 transition-colors duration-500 hover:bg-blue-50 `}
    >
      {loading && <Loading />}
      {/* task title container */}
      <div
        onClick={detailClick}
        className={`p-2 md:w-2/3 w-full h-14 md:h-full overflow-hidden cursor-pointer ${
          data.isCompleted && `line-through`
        }`}
      >
        <Heading primary={true} size="lg">
          {data.title ? data.title : "Undefined Title"}
        </Heading>
      </div>
      {/* task action container */}
      <div className="flex justify-between items-start md:justify-center md:items-center space-x-2">
        <div className="hidden md:block">
          <Text secondary={true} size="sm">
            {data.dateTime && data.dateTime.date ? data.dateTime.date : "Undefined DateTime"}
          </Text>
        </div>
        {data.isCompleted ? (
          <div></div>
        ) : (
          <>
            <CustomButton text="complete" success onClick={completeClick} />
            <CustomIcon
              icon={<IoCreateOutline className="w-8 h-8" />}
              tooltip={"Edit"}
              onClick={editClick}
            />
          </>
        )}

        <CustomIcon
          icon={<IoTrashOutline className="w-8 h-8 text-black" />}
          bg="red-500"
          tooltip={"Delete"}
          onClick={deleteClick}
        />
      </div>
    </div>
  );
};

export default Task;
