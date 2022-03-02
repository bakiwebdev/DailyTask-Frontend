import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/custom_button";
import Heading from "../../components/heading";
import CustomInput from "../../components/input";
import PageWrapper from "../../components/page_wrapper";
import Text from "../../components/text";
import CustomTextArea from "../../components/text_area";
import { LocalContext } from "../../provider/Local";

const AddTaskPage = () => {
  const navigation = useNavigate();
  const { task, setTaskData } = useContext(LocalContext);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    date: "",
  });

  const titleValue = (e) => {
    setNewTask({
      ...newTask,
      title: e.target.value,
    });
  };
  const descriptionValue = (e) => {
    setNewTask({
      ...newTask,
      description: e.target.value,
    });
  };
  const buttonClick = () => {
    if (
      newTask.title === "" || newTask.title.trim() === "" ||
      newTask.description === "" || newTask.description.trim() === ""
    ) {
      alert("please fill all fields");
    } else {
      setTaskData([...task, newTask]);
      setNewTask({
        title: "",
        description: "",
        date: "",
      });
      navigation('/')
    }
  };
  return (
    <PageWrapper>
      <div className="flex justify-center items-center">
        <div className="w-100 h-auto">
          <Heading primary={true} size="2xl">
            Add Task
          </Heading>
          <div className="relative mb-4">
            <Text secondary={true}>Title</Text>
            <CustomInput
              type="text"
              name="title"
              placeholder="insert task title"
              value={newTask.title}
              onValueChange={titleValue}
            />
          </div>
          <div className="relative mb-4">
            <Text secondary={true}>Description</Text>
            <CustomTextArea
              name="description"
              placeholder="describe the task"
              value={newTask.description}
              onValueChange={descriptionValue}
            />
          </div>
          <div className="flex justify-between items-center">
            <CustomButton
              text="Add Task"
              primary={true}
              onClick={buttonClick}
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AddTaskPage;
