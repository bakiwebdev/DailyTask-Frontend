import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import Task from "./task";
import { LocalContext } from '../../provider/Local/index'
const TaskController = ({id, data }) => {
  const {task, setTaskData } = useContext(LocalContext)
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
    const newTask = task.filter( (data, index) => {
      if(index === id){
        return false
      }
      return true
    })
    setTaskData(newTask)
  };
  return (
    <Task
      data={data}
      detailClick={handleDetailClick}
      completeClick={handleCompleteButton}
      editClick={handleEditButton}
      deleteClick={handleDeleteButton}
    />
  );
};

export default TaskController;
