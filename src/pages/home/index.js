import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/custom_button";
import PageWrapper from "../../components/page_wrapper";
import TaskController from "../../components/task/taskController";
import TaskContainer from "../../components/TaskContainer";

const HomePage = () => {
  return (
    <PageWrapper>
      {/* header */}
      <div className="m-2 border-b-[1px] border-gray-200">
        <h1 className="font-semibold text-xl font-sans m-2 text-gray-700">
          Welcome
        </h1>
        <h3 className="font-light text-lg font-sans m-2 text-gray-600">
          You have 0 task to do
        </h3>
      </div>
      {/* task container */}
      <div className="m-2 border-b-[1px] border-gray-200">
        {/* task item */}
        <TaskContainer>
          <TaskController />
          <TaskController />
          <TaskController />
          <TaskController />
          <TaskController />
          <TaskController />
          <TaskController />
          <TaskController />
          <TaskController />
          <TaskController />
        </TaskContainer>
      </div>
      {/* footer */}
      <div className="flex justify-around items-center">
        <Link to="/add-task">
          <CustomButton text="Add Task" />
        </Link>
        <CustomButton text="Clear all" />
      </div>
    </PageWrapper>
  );
};

export default HomePage;
