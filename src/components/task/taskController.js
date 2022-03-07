import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Task from "./task";
import { TaskContext } from "../../provider/Task/index";
import { UserContext } from "../../provider/User/index";
import useFetch from "../../utils/useFetch";

const TaskController = ({ id, data }) => {
  const { user } = useContext(UserContext);
  const { task, setTaskData } = useContext(TaskContext);
  const [fetch, setFetch] = useState({
    method: null,
    path: null,
    body: null,
  });
  const { loading } = useFetch(fetch);
  const Navigate = useNavigate();
  const handleDetailClick = () => {
    Navigate(`/detail/${id}`);
  };
  const handleCompleteButton = () => {
    if (user) {
      setFetch({
        method: "put",
        path: `/task/${data._id}`,
        body: {
          isCompleted: true,
        }
      });
    } else {
      const newTask = task.map((item, index) => {
        if (index == id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
      setTaskData(newTask);
    }
  };
  const handleEditButton = () => {
    if (user) {
      Navigate(`/edit/${data._id}`);
    } else {
      Navigate(`/edit/${id}`);
    }
  };
  const handleDeleteButton = () => {
    if (user) {
      setFetch({
        method: "delete",
        path: `/task/${data._id}`,
      });
    } else {
      const newTask = task.filter((data, index) => {
        if (index === id) {
          return false;
        }
        return true;
      });
      setTaskData(newTask);
    }
  };
  return (
    <Task
      data={data}
      loading={loading}
      detailClick={handleDetailClick}
      completeClick={handleCompleteButton}
      editClick={handleEditButton}
      deleteClick={handleDeleteButton}
    />
  );
};

export default TaskController;
