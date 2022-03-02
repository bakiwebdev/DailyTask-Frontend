import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/custom_button";
import Heading from "../../components/heading";
import PageWrapper from "../../components/page_wrapper";
import TaskController from "../../components/task/taskController";
import TaskContainer from "../../components/TaskContainer";

const HomePage = () => {
  return (
    <PageWrapper>
      {/* header */}
      <div className="m-2 border-b-[1px] border-gray-200 space-y-2">
        <Heading primary={true} size="2xl">
          Welcome to Task Manager
        </Heading>
        <Heading secondary={true} size="xl">
          You have 0 task to do
        </Heading>
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
