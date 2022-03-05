import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Task from "./task";
import { TaskContext } from "../../provider/Task/index";
import { UserContext } from "../../provider/User/index";
import axios from "axios";

const TaskController = ({ id, data }) => {
  const { user } = useContext(UserContext);
  const { task, setTaskData } = useContext(TaskContext);
  const Navigate = useNavigate();

  const handleDetailClick = () => {
    Navigate(`/detail/${id}`);
  };
  const handleCompleteButton = () => {
    if (user) {
      axios
        .put(
          `${process.env.REACT_APP_BASE_URL}/task/${data._id}`,
          {
            isCompleted: true,
          },
          {
            headers: {
              jwt_token: user.token,
            },
          }
        )
        .then((res) => {
          const newTask = task.map((item) => {
            if (item._id == data._id) {
              return { ...item, isCompleted: true };
            } else {
              return item;
            }
          });
          setTaskData(newTask);
        })
        .catch((err) => {
          alert(err);
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
    if(user){
      Navigate(`/edit/${data._id}`);
    }else {
    Navigate(`/edit/${id}`);
    }
  };
  const handleDeleteButton = () => {
    if (user) {
      axios
        .delete(`${process.env.REACT_APP_BASE_URL}/task/${data._id}`, {
          headers: {
            jwt_token: user.token,
          },
        })
        .then((res) => {
          const newTask = task.filter((item) => item._id != data._id);
          setTaskData(newTask);
        })
        .catch((err) => {
          alert(err);
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
      detailClick={handleDetailClick}
      completeClick={handleCompleteButton}
      editClick={handleEditButton}
      deleteClick={handleDeleteButton}
    />
  );
};

export default TaskController;
