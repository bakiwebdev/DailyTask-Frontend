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
    const newTask = task.map((item, index) => {
      if (index == id) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });
    setTaskData(newTask);
  };
  const handleEditButton = () => {
    Navigate(`/edit/${id}`);
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
