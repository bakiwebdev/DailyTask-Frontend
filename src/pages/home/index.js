import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../components/custom_button";
import Heading from "../../components/heading";
import PageWrapper from "../../components/page_wrapper";
import TaskController from "../../components/task/taskController";
import TaskContainer from "../../components/TaskContainer";
import { LocalContext } from "../../provider/Local";
import { UserContext } from "../../provider/User";
import axios from "axios";

const HomePage = () => {
  const { user, setUserData } = useContext(UserContext);
  const { task, setTaskData } = useContext(LocalContext);

  useEffect(() => {
    if (user) {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/task/`, {
          headers: {
            jwt_token: user.token,
          },
        })
        .then((res) => {
          setTaskData(res.data);
        })
        .catch((err) => {
          alert(err);
        });
    }
  }, [user]);

  const buttonClear = () => {
    if (user) {
      if (task.length <= 0) {
        alert("No task to clear");
        return;
      }
      axios
        .delete(`${process.env.REACT_APP_BASE_URL}/task/`, {
          headers: {
            jwt_token: user.token,
          },
        })
        .then((res) => {
          setTaskData(res.data);
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      if (task.length <= 0) {
        alert("No task to clear");
        return;
      }
      setTaskData([]);
    }
  };
  const buttonClearOnlyCompleted = () => {
    if (user) {
      if (task.length <= 0) {
        alert("No task to clear");
        return;
      }
      axios
        .delete(`${process.env.REACT_APP_BASE_URL}/task/?completed=true`, {
          headers: {
            jwt_token: user.token,
          },
        })
        .then((res) => {
          setTaskData(task.filter((item) => !item.isCompleted));
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      if (task.length <= 0) {
        alert("No task to clear");
        return;
      }
      const newTask = task.filter((item) => !item.isCompleted);
      setTaskData(newTask);
    }
  };
  const buttonCompleteAll = () => {
    if (user) {
      if (task.length <= 0) {
        alert("No task to complete");
        return;
      }
      axios
        .put(`${process.env.REACT_APP_BASE_URL}/task/?completed=true`, {
          headers: {
            jwt_token: user.token,
          },
        })
        .then((res) => {
          setTaskData(task.filter((item) => !item.isCompleted));
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      if (task.length <= 0) {
        alert("No task to complete");
        return;
      }
      const newTask = task.map((item) => {
        return { ...item, isCompleted: true };
      });
      setTaskData(newTask);
    }
  };
  return (
    <PageWrapper>
      {/* header */}
      <div className="flex justify-between m-2 border-b-[1px] border-gray-200 space-y-2">
        <div>
          <Heading primary={true} size="2xl">
            Welcome to Task Manager
          </Heading>
          <Heading secondary={true} size="xl">
            {task && task.length > 0
              ? `You have ${task.length} ${task.length <= 1 ? "task" : "tasks"}`
              : "You have no tasks"}
            {task &&
              task.length > 0 &&
              `, ${task.filter((item) => item.isCompleted).length} completed`}
          </Heading>
        </div>
        {user && (
          <div className="flex ">
            <Heading primary={true} size="xl">
              Good to see you{" "}
              <span className="bg-gray-200 px-3 py-1 rounded-sm">{`${user.name}`}</span>
            </Heading>
          </div>
        )}
      </div>
      {/* task container */}
      <div className="m-2 border-b-[1px] border-gray-200">
        {/* task item */}
        <TaskContainer>
          {user ? (
            task.length > 0 ? (
              task.map((item, index) => {
                return <TaskController key={index} data={item} id={index} />;
              })
            ) : (
              <div className="text-center">
                <p className="text-gray-600 p-5">you have no task</p>
              </div>
            )
          ) : task.length > 0 ? (
            task.map((item, index) => {
              return <TaskController key={index} data={item} id={index} />;
            })
          ) : (
            <div className="text-center">
              <p className="text-gray-600 p-5">you have no task</p>
            </div>
          )}
        </TaskContainer>
      </div>
      {/* footer */}
      <div className="flex justify-around items-center">
        <Link to="/add-task">
          <CustomButton text="Add Task" />
        </Link>
        <CustomButton
          text="Complete all"
          success={true}
          onClick={buttonCompleteAll}
        />
        <CustomButton
          text="Delete only completed task"
          error={true}
          onClick={buttonClearOnlyCompleted}
        />
        <CustomButton text="Delete all" error={true} onClick={buttonClear} />
      </div>
    </PageWrapper>
  );
};

export default HomePage;
