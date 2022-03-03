import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/custom_button";
import Heading from "../../components/heading";
import PageWrapper from "../../components/page_wrapper";
import TaskController from "../../components/task/taskController";
import TaskContainer from "../../components/TaskContainer";
import { LocalContext } from "../../provider/Local";

const HomePage = () => {
  const { task, setTaskData } = useContext(LocalContext);
  const buttonClear = () => {
    setTaskData([]);
  };
  const buttonClearOnlyCompleted = () => {
    const newTask = task.filter(item => !item.isCompleted);
    setTaskData(newTask);
  };
  const buttonCompleteAll = () => {
    const newTask = task.map((item) => {
      return { ...item, isCompleted: true };
    });
    setTaskData(newTask);
  }
  return (
    <PageWrapper>
      {/* header */}
      <div className="m-2 border-b-[1px] border-gray-200 space-y-2">
        <Heading primary={true} size="2xl">
          Welcome to Task Manager
        </Heading>
        <Heading secondary={true} size="xl">
          {`You have ${task.length} ${task.length <= 1 ? "task" : "tasks"}`}
        </Heading>
      </div>
      {/* task container */}
      <div className="m-2 border-b-[1px] border-gray-200">
        {/* task item */}
        <TaskContainer>
          {task.length > 0 ? (
            task.map((item, index) => {
              return <TaskController key={index} data={item} id={index} />;
            })
          ) : (
            <div className="text-center">
              <p className="text-gray-600 p-5">you have no task</p>
              {/* <Link to="/add">
                <CustomButton primary={true} text="Add new task" />
              </Link> */}
            </div>
          )}
        </TaskContainer>
      </div>
      {/* footer */}
      <div className="flex justify-around items-center">
        <Link to="/add-task">
          <CustomButton text="Add Task" />
        </Link>
        <CustomButton text="Complete all" success={true} onClick={buttonCompleteAll}/>
        <CustomButton text="Delete only completed task" error={true} onClick={buttonClearOnlyCompleted}/>
        <CustomButton text="Delete all" error={true} onClick={buttonClear}/>
      </div>
    </PageWrapper>
  );
};

export default HomePage;
