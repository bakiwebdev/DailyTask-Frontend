import React from "react";
import { useNavigate } from "react-router-dom";
import Task from "./task";

const TaskController = ({ task }) => {

  const Navigate = useNavigate();

  const handleClick = () => { 
    Navigate(`/detail`);
  }
  return (
    <Task onClick={handleClick} />
  );
};

export default TaskController;
