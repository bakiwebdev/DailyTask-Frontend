import React from "react";
import { useNavigate } from "react-router-dom";
import Task from "./task";

const TaskController = ({id, task }) => {
  const Navigate = useNavigate();

  const handleDetailClick = () => {
    Navigate(`/detail/${id}`);
  };
  const handleCompleteButton = () => {
    console.log("complete button clicked");
  };
  const handleEditButton = () => {
    console.log("edit button clicked");
  };
  const handleDeleteButton = () => {
    console.log("delete button clicked");
  };
  return (
    <Task
      data={task}
      detailClick={handleDetailClick}
      completeClick={handleCompleteButton}
      editClick={handleEditButton}
      deleteClick={handleDeleteButton}
    />
  );
};

export default TaskController;
